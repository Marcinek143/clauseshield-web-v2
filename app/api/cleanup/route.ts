import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const secret = request.headers.get("x-cleanup-secret");
  if (!secret || secret !== process.env.CLEANUP_SECRET) {
    return NextResponse.json({ success: false }, { status: 401 });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceRoleKey) {
    return NextResponse.json({ success: false }, { status: 500 });
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey);
  const startTime = Date.now();
  const runAt = new Date(startTime).toISOString();
  const staleCutoff = new Date(startTime - 10 * 60 * 1000).toISOString();
  const url = new URL(request.url);
  const requestedTrigger =
    request.headers.get("x-cleanup-source") ??
    request.headers.get("x-trigger-source") ??
    url.searchParams.get("trigger_source") ??
    url.searchParams.get("source") ??
    "";
  const triggerSource =
    requestedTrigger.toLowerCase() === "manual" ? "manual" : "cron";

  let cleanupRunId: string | null = null;
  let scannedCount = 0;
  let deleted = 0;
  let failed = 0;
  let finalStatus: "success" | "failed" = "failed";
  let finalNotes: string | null = null;
  const deletedFileIds: string[] = [];
  let responseStatus = 200;
  let responseBody: { success: boolean; deleted?: number; failed?: number } = {
    success: true,
    deleted: 0,
    failed: 0,
  };

  // Lifecycle step 1: auto-fail stale locks before checking for an active run.
  const { data: staleRuns, error: staleFetchError } = await supabase
    .from("cleanup_runs")
    .select("id, run_at")
    .eq("status", "running")
    .lt("run_at", staleCutoff);

  if (staleFetchError) {
    console.error("Failed to fetch stale cleanup runs", staleFetchError);
    return NextResponse.json({ success: false }, { status: 500 });
  }

  for (const staleRun of staleRuns ?? []) {
    const parsedRunAt = staleRun.run_at
      ? new Date(staleRun.run_at).getTime()
      : startTime;
    const runAtMs = Number.isNaN(parsedRunAt) ? startTime : parsedRunAt;
    // duration_ms is stored as seconds here to satisfy the stale-lock requirement.
    const durationSeconds = Math.max(
      0,
      Math.floor((startTime - runAtMs) / 1000)
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
      console.error("Failed to auto-fail stale cleanup run", staleUpdateError);
      return NextResponse.json({ success: false }, { status: 500 });
    }
  }

  // Lifecycle step 2: refuse to start if another run is still active.
  const { data: runningRuns, error: runningError } = await supabase
    .from("cleanup_runs")
    .select("id")
    .eq("status", "running")
    .limit(1);

  if (runningError) {
    console.error("Failed to check for running cleanup", runningError);
    return NextResponse.json({ success: false }, { status: 500 });
  }

  if ((runningRuns?.length ?? 0) > 0) {
    return NextResponse.json(
      { success: false, reason: "cleanup_already_running" },
      { status: 409 }
    );
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
    console.error("Failed to insert cleanup run", insertError);
    return NextResponse.json({ success: false }, { status: 500 });
  }

  cleanupRunId = cleanupRun?.id ?? null;

  // Lifecycle step 4: run cleanup work and record the outcome.
  try {
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
    finalNotes =
      error instanceof Error ? error.message : "Unknown cleanup error";
    responseStatus = 500;
    responseBody = { success: false };
  } finally {
    const durationMs = Date.now() - startTime;

    try {
      const updateQuery = supabase.from("cleanup_runs").update({
        status: finalStatus,
        scanned_count: scannedCount,
        deleted_count: deleted,
        failed_count: failed,
        duration_ms: durationMs,
        notes: finalNotes,
      });

      if (cleanupRunId) {
        updateQuery.eq("id", cleanupRunId);
      } else {
        updateQuery
          .eq("status", "running")
          .eq("run_at", runAt)
          .eq("trigger_source", triggerSource);
      }

      const { error: auditError } = await updateQuery;

      if (auditError) {
        console.error("Failed to update cleanup run audit", auditError);
      }
    } catch (auditError) {
      console.error("Failed to update cleanup run audit", auditError);
    }
  }

  return NextResponse.json(responseBody, { status: responseStatus });
}
