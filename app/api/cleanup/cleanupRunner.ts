import type { SupabaseClient } from "@supabase/supabase-js";

export type CleanupTriggerSource = "manual" | "cron" | "vercel-cron";

export type CleanupResponse = {
  responseBody: {
    success: boolean;
    deleted?: number;
    failed?: number;
    reason?: string;
  };
  responseStatus: number;
};

export function resolveTriggerSource(
  requestedTrigger: string | null | undefined,
): CleanupTriggerSource {
  const normalized = (requestedTrigger ?? "").trim().toLowerCase();
  if (normalized === "manual") {
    return "manual";
  }
  if (normalized === "vercel-cron") {
    return "vercel-cron";
  }
  return "cron";
}

export async function executeCleanup({
  supabase,
  triggerSource,
}: {
  supabase: SupabaseClient;
  triggerSource: CleanupTriggerSource;
}): Promise<CleanupResponse> {
  const startTime = Date.now();
  const runAt = new Date(startTime).toISOString();
  const staleCutoff = new Date(startTime - 10 * 60 * 1000).toISOString();

  let cleanupRunId: string | null = null;
  let scannedCount = 0;
  let deleted = 0;
  let failed = 0;
  let finalStatus: "success" | "failed" = "failed";
  let finalNotes: string | null = null;
  const deletedFileIds: string[] = [];
  let responseStatus = 200;
  let responseBody: CleanupResponse["responseBody"] = {
    success: true,
    deleted: 0,
    failed: 0,
  };
  let skipAudit = false;

  try {
    // Lifecycle step 1: auto-fail stale locks before checking for an active run.
    const { data: staleRuns, error: staleFetchError } = await supabase
      .from("cleanup_runs")
      .select("id, run_at")
      .eq("status", "running")
      .lt("run_at", staleCutoff);

    if (staleFetchError) {
      throw staleFetchError;
    }

    for (const staleRun of staleRuns ?? []) {
      const parsedRunAt = staleRun.run_at
        ? new Date(staleRun.run_at).getTime()
        : startTime;
      const runAtMs = Number.isNaN(parsedRunAt) ? startTime : parsedRunAt;
      // duration_ms is stored as seconds here to satisfy the stale-lock requirement.
      const durationSeconds = Math.max(
        0,
        Math.floor((startTime - runAtMs) / 1000),
      );

      const { error: staleUpdateError } = await supabase
        .from("cleanup_runs")
        .update({
          status: "failed",
          notes: "auto-failed: stale lock",
          duration_ms: durationSeconds,
        })
        .eq("id", staleRun.id);

      if (staleUpdateError) {
        throw staleUpdateError;
      }
    }

    // Lifecycle step 2: refuse to start if another run is still active.
    const { data: runningRuns, error: runningError } = await supabase
      .from("cleanup_runs")
      .select("id")
      .eq("status", "running")
      .limit(1);

    if (runningError) {
      throw runningError;
    }

    if ((runningRuns?.length ?? 0) > 0) {
      responseStatus = 409;
      responseBody = { success: false, reason: "cleanup_already_running" };
      skipAudit = true;
      return { responseBody, responseStatus };
    }

    // Lifecycle step 3: insert a running row and finalize it in finally.
    const { data: cleanupRun, error: insertError } = await supabase
      .from("cleanup_runs")
      .insert({
        status: "running",
        trigger_source: triggerSource,
        run_at: runAt,
      })
      .select("id")
      .single();

    if (insertError) {
      throw insertError;
    }

    cleanupRunId = cleanupRun?.id ?? null;

    // Lifecycle step 4: run cleanup work and record the outcome.
    if (!cleanupRunId) {
      throw new Error("Cleanup run ID missing after insert");
    }

    const { data, error } = await supabase
      .from("file_uploads")
      .select("id,bucket,storage_path")
      .lt("expires_at", runAt)
      .eq("status", "uploaded");

    if (error) {
      throw error;
    }

    scannedCount = data?.length ?? 0;

    for (const file of data ?? []) {
      const { error: removeError } = await supabase.storage
        .from(file.bucket)
        .remove([file.storage_path]);

      if (removeError) {
        failed += 1;
        continue;
      }

      const { error: updateError } = await supabase
        .from("file_uploads")
        .update({ status: "deleted", deleted_at: new Date().toISOString() })
        .eq("id", file.id);

      if (updateError) {
        failed += 1;
        continue;
      }

      deleted += 1;
      deletedFileIds.push(file.id);
    }

    for (const fileId of deletedFileIds) {
      try {
        const { error: linkError } = await supabase
          .from("file_uploads")
          .update({ cleanup_run_id: cleanupRunId })
          .eq("id", fileId);

        if (linkError) {
          console.error("Failed to link cleanup run to file upload", linkError);
        }
      } catch (linkError) {
        console.error("Failed to link cleanup run to file upload", linkError);
      }
    }

    finalStatus = "success";
    finalNotes = failed > 0 ? "Some deletions failed" : null;
    responseBody = { success: true, deleted, failed };
  } catch (error) {
    finalStatus = "failed";
    if (error instanceof Error) {
      finalNotes = error.message;
    } else if (error && typeof error === "object" && "message" in error) {
      finalNotes = String((error as { message?: unknown }).message);
    } else {
      finalNotes = "Unknown cleanup error";
    }
    responseStatus = 500;
    responseBody = { success: false };
  } finally {
    if (!skipAudit) {
      const durationMs = Date.now() - startTime;
      const auditPayload = {
        status: finalStatus,
        scanned_count: scannedCount,
        deleted_count: deleted,
        failed_count: failed,
        duration_ms: durationMs,
        notes: finalNotes,
      };

      try {
        if (cleanupRunId) {
          const { error: auditError } = await supabase
            .from("cleanup_runs")
            .update(auditPayload)
            .eq("id", cleanupRunId);

          if (auditError) {
            console.error("Failed to update cleanup run audit", auditError);
          }
        } else {
          const { error: insertAuditError } = await supabase
            .from("cleanup_runs")
            .insert({
              ...auditPayload,
              run_at: runAt,
              trigger_source: triggerSource,
            });

          if (insertAuditError) {
            console.error(
              "Failed to insert cleanup run audit",
              insertAuditError,
            );
          }
        }
      } catch (auditError) {
        console.error("Failed to update cleanup run audit", auditError);
      }
    }
  }

  return { responseBody, responseStatus };
}
