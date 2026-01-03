"use server";

import { getSupabaseAdminClient } from "./supabase";

export type TriggerCleanupResult = {
  success: boolean;
  deleted: number;
  failed: number;
};

export async function triggerCleanup(): Promise<TriggerCleanupResult> {
  try {
    const supabase = getSupabaseAdminClient();
    const startTime = Date.now();
    const nowIso = new Date().toISOString();

    const { data, error } = await supabase
      .from("file_uploads")
      .select("id, bucket, storage_path")
      .lt("expires_at", nowIso)
      .eq("status", "uploaded");

    if (error) {
      throw error;
    }

    const scannedCount = data?.length ?? 0;
    let deleted = 0;
    let failed = 0;
    const deletedFileIds: string[] = [];

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
    let cleanupRunId: string | null = null;

    try {
      const { data: cleanupRun, error: auditError } = await supabase
        .from("cleanup_runs")
        .insert({
          trigger_source: "manual",
          scanned_count: scannedCount,
          deleted_count: deleted,
          failed_count: failed,
          duration_ms: durationMs,
          notes,
        })
        .select("id")
        .single();

      if (auditError) {
        console.error("Failed to insert cleanup run audit", auditError);
      } else {
        cleanupRunId = cleanupRun?.id ?? null;
      }
    } catch (auditError) {
      console.error("Failed to insert cleanup run audit", auditError);
    }

    if (cleanupRunId) {
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
    }

    return { success: true, deleted, failed };
  } catch (error) {
    console.error("Failed to trigger cleanup", error);
    return { success: false, deleted: 0, failed: 0 };
  }
}
