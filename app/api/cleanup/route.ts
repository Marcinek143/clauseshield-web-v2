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
  const runAt = new Date().toISOString();
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
  const deletedFileIds: string[] = [];

  try {
    // DB-backed lock: refuse to start if any cleanup is already marked running.
    const { data: runningRuns, error: runningError } = await supabase
      .from("cleanup_runs")
      .select("id")
      .eq("status", "running")
      .limit(1);

    if (runningError) {
      throw runningError;
    }

    if ((runningRuns?.length ?? 0) > 0) {
      return NextResponse.json(
        { success: false, reason: "cleanup_already_running" },
        { status: 409 }
      );
    }

    // Insert a running row to claim the lock for this run.
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
    if (!cleanupRunId) {
      throw new Error("Cleanup run ID missing after insert");
    }

    // If another run slipped in concurrently, only the earliest keeps the lock.
    const { data: lockHolder, error: lockError } = await supabase
      .from("cleanup_runs")
      .select("id")
      .eq("status", "running")
      .order("run_at", { ascending: true })
      .order("id", { ascending: true })
      .limit(1)
      .single();

    if (lockError) {
      throw lockError;
    }

    if (lockHolder?.id !== cleanupRunId) {
      await supabase
        .from("cleanup_runs")
        .update({
          status: "failed",
          notes: "cleanup_already_running",
          duration_ms: Date.now() - startTime,
        })
        .eq("id", cleanupRunId);

      return NextResponse.json(
        { success: false, reason: "cleanup_already_running" },
        { status: 409 }
      );
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

    const durationMs = Date.now() - startTime;
    const notes = failed > 0 ? "Some deletions failed" : null;
    const status = failed > 0 ? "failed" : "success";

    const { error: auditError } = await supabase
      .from("cleanup_runs")
      .update({
        status,
        scanned_count: scannedCount,
        deleted_count: deleted,
        failed_count: failed,
        duration_ms: durationMs,
        notes,
      })
      .eq("id", cleanupRunId);

    if (auditError) {
      console.error("Failed to update cleanup run audit", auditError);
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

    return NextResponse.json({ success: true, deleted, failed });
  } catch (error) {
    const durationMs = Date.now() - startTime;
    const errorMessage =
      error instanceof Error ? error.message : "Unknown cleanup error";

    if (cleanupRunId) {
      try {
        const { error: auditError } = await supabase
          .from("cleanup_runs")
          .update({
            status: "failed",
            scanned_count: scannedCount,
            deleted_count: deleted,
            failed_count: failed,
            duration_ms: durationMs,
            notes: errorMessage,
          })
          .eq("id", cleanupRunId);

        if (auditError) {
          console.error("Failed to update cleanup run audit", auditError);
        }
      } catch (auditError) {
        console.error("Failed to update cleanup run audit", auditError);
      }
    }

    return NextResponse.json({ success: false }, { status: 500 });
  }
}
