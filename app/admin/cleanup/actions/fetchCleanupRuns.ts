import { supabaseServer } from "@/lib/supabaseServer";
import { unstable_noStore as noStore } from "next/cache";

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
  noStore();
  const safePage = Number.isFinite(page) && page > 0 ? page : 1;
  const safePageSize =
    Number.isFinite(pageSize) && pageSize > 0 ? pageSize : 5;

  try {
    const supabase = supabaseServer();
    const fetchPage = async (targetPage: number) => {
      const from = (targetPage - 1) * safePageSize;
      const to = from + safePageSize - 1;

      return supabase
        .from("cleanup_runs")
        .select(
          "id, run_at, scanned_count, deleted_count, failed_count, duration_ms, trigger_source, notes",
          { count: "exact" },
        )
        .range(from, to)
        .order("run_at", { ascending: false });
    };

    const firstPass = await fetchPage(safePage);

    if (firstPass.error) {
      throw firstPass.error;
    }

    const totalCount = firstPass.count ?? 0;
    const totalPages = Math.max(1, Math.ceil(totalCount / safePageSize));
    const effectivePage = Math.min(safePage, totalPages);

    if (effectivePage !== safePage) {
      const adjusted = await fetchPage(effectivePage);
      if (adjusted.error) {
        throw adjusted.error;
      }
      return {
        runs: adjusted.data ?? [],
        totalCount,
        page: effectivePage,
        pageSize: safePageSize,
      };
    }

    return {
      runs: firstPass.data ?? [],
      totalCount,
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
