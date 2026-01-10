import { supabaseServer } from "@/lib/supabaseServer";

export type CleanupFileRow = {
  id: string;
  bucket: string | null;
  storage_path: string | null;
  status: string | null;
  expires_at: string | null;
  deleted_at: string | null;
  cleanup_run_id: string | null;
  created_at: string | null;
};

export type CleanupFilesResult = {
  files: CleanupFileRow[];
  totalCount: number;
  expiredCount: number;
};

export async function fetchCleanupFiles(): Promise<CleanupFilesResult> {
  try {
    const supabase = supabaseServer();
    const nowIso = new Date().toISOString();

    const { data: files, error, count } = await supabase
      .from("file_uploads")
      .select(
        "id, bucket, storage_path, status, expires_at, deleted_at, cleanup_run_id, created_at",
        { count: "exact" },
      )
      .not("expires_at", "is", null)
      .order("deleted_at", { ascending: false })
      .order("expires_at", { ascending: false });

    if (error) {
      throw error;
    }

    const { count: expiredCount, error: expiredError } = await supabase
      .from("file_uploads")
      .select("id", { count: "exact", head: true })
      .not("expires_at", "is", null)
      .lt("expires_at", nowIso)
      .neq("status", "deleted");

    if (expiredError) {
      throw expiredError;
    }

    return {
      files: files ?? [],
      totalCount: count ?? 0,
      expiredCount: expiredCount ?? 0,
    };
  } catch (error) {
    console.error("Failed to fetch cleanup files", error);
    return {
      files: [],
      totalCount: 0,
      expiredCount: 0,
    };
  }
}
