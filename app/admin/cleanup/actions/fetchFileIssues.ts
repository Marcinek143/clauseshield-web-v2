import { supabaseServer } from "@/lib/supabaseServer";

export type FileIssueRow = {
  id: string;
  storage_path: string | null;
  kind: string | null;
  status: string | null;
  uploaded_at: string | null;
  expires_at: string | null;
  retention_hours: number | null;
  cleanup_run_id: string | null;
};

export type RetentionGroup = {
  retentionHours: number | null;
  totalFiles: number;
  expiredFiles: number;
  deletedFiles: number;
  linkedRuns: number;
  latestUpload: string | null;
};

export type FileIssuesResult = {
  issues: FileIssueRow[];
  totalIssues: number;
  retentionGroups: RetentionGroup[];
  retentionSampled: number;
};

export async function fetchFileIssues(): Promise<FileIssuesResult> {
  try {
    const supabase = supabaseServer();
    const now = new Date();
    const nowIso = now.toISOString();

    const { data: issues, error: issuesError, count } = await supabase
      .from("file_uploads")
      .select(
        "id, storage_path, kind, status, uploaded_at, expires_at, retention_hours, cleanup_run_id",
        { count: "exact" },
      )
      .lt("expires_at", nowIso)
      .eq("status", "uploaded")
      .order("expires_at", { ascending: true })
      .limit(25);

    if (issuesError) {
      throw issuesError;
    }

    // Sample recent uploads for retention analytics to keep payloads light.
    const { data: retentionSample, error: retentionError } = await supabase
      .from("file_uploads")
      .select(
        "retention_hours, uploaded_at, expires_at, status, cleanup_run_id",
      )
      .order("uploaded_at", { ascending: false })
      .limit(200);

    if (retentionError) {
      throw retentionError;
    }

    const retentionMap = new Map<number | null, RetentionGroup>();

    for (const row of retentionSample ?? []) {
      const key = row.retention_hours ?? null;
      const existing = retentionMap.get(key) ?? {
        retentionHours: key,
        totalFiles: 0,
        expiredFiles: 0,
        deletedFiles: 0,
        linkedRuns: 0,
        latestUpload: null,
      };

      existing.totalFiles += 1;

      if (row.expires_at && new Date(row.expires_at) < now) {
        existing.expiredFiles += 1;
      }

      if (row.status === "deleted") {
        existing.deletedFiles += 1;
      }

      if (row.cleanup_run_id) {
        existing.linkedRuns += 1;
      }

      if (row.uploaded_at) {
        if (
          !existing.latestUpload ||
          new Date(row.uploaded_at) > new Date(existing.latestUpload)
        ) {
          existing.latestUpload = row.uploaded_at;
        }
      }

      retentionMap.set(key, existing);
    }

    const retentionGroups = Array.from(retentionMap.values()).sort((a, b) => {
      if (a.retentionHours === null) return 1;
      if (b.retentionHours === null) return -1;
      return a.retentionHours - b.retentionHours;
    });

    return {
      issues: issues ?? [],
      totalIssues: count ?? 0,
      retentionGroups,
      retentionSampled: retentionSample?.length ?? 0,
    };
  } catch (error) {
    console.error("Failed to fetch file issues", error);
    return {
      issues: [],
      totalIssues: 0,
      retentionGroups: [],
      retentionSampled: 0,
    };
  }
}
