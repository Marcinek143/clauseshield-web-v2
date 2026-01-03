import { supabaseServer } from "@/lib/supabaseServer";

export type CleanupRunRow = {
  id: string;
  run_at: string;
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

export async function fetchCleanupRuns(
  page: number,
  pageSize: number,
): Promise<CleanupRunsResult> {
  const safePage = Number.isFinite(page) && page > 0 ? page : 1;
  const safePageSize =
    Number.isFinite(pageSize) && pageSize > 0 ? pageSize : 5;

  try {
    const supabase = supabaseServer();
    const from = (safePage - 1) * safePageSize;
    const to = from + safePageSize - 1;

    const { data, error, count } = await supabase
      .from("cleanup_runs")
      .select(
        "id, run_at, scanned_count, deleted_count, failed_count, duration_ms, trigger_source, notes",
        { count: "exact" },
      )
      .range(from, to)
      .order("run_at", { ascending: false });

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
      page: safePage,
      pageSize: safePageSize,
    };
  }
}
