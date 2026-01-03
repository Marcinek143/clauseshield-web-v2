import { getSupabaseServerClient } from "./supabase";

export type CleanupRunRow = {
  id: string;
  created_at: string;
  scanned_count: number | null;
  deleted_count: number | null;
  failed_count: number | null;
  duration_ms: number | null;
  trigger_source: string | null;
  notes: string | null;
};

export type CleanupRunsResult = {
  runs: CleanupRunRow[];
  totalCount: number;
  page: number;
  pageSize: number;
};

export async function fetchCleanupRuns({
  page = 1,
  pageSize = 5,
}: {
  page?: number;
  pageSize?: number;
}): Promise<CleanupRunsResult> {
  try {
    const supabase = getSupabaseServerClient();
    const safePage = Number.isFinite(page) && page > 0 ? page : 1;
    const safePageSize = Number.isFinite(pageSize) && pageSize > 0 ? pageSize : 5;
    const from = (safePage - 1) * safePageSize;
    const to = from + safePageSize - 1;

    const { data, error, count } = await supabase
      .from("cleanup_runs")
      .select(
        "id, created_at, scanned_count, deleted_count, failed_count, duration_ms, trigger_source, notes",
        { count: "exact" },
      )
      .order("created_at", { ascending: false })
      .range(from, to);

    if (error) {
      throw error;
    }

    return {
      runs: data ?? [],
      totalCount: count ?? 0,
      page: safePage,
      pageSize: safePageSize,
    };
  } catch (error) {
    console.error("Failed to fetch cleanup runs", error);
    return {
      runs: [],
      totalCount: 0,
      page,
      pageSize,
    };
  }
}
