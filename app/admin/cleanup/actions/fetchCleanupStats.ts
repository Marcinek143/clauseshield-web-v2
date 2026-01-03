import { supabaseServer } from "@/lib/supabaseServer";

export type CleanupHealthStatus = "healthy" | "warning" | "critical";

export type CleanupRunSummary = {
  id: string;
  created_at: string;
  scanned_count: number | null;
  deleted_count: number | null;
  failed_count: number | null;
  duration_ms: number | null;
  trigger_source: string | null;
  notes: string | null;
};

export type CleanupStats = {
  lastRun: CleanupRunSummary | null;
  scanned24h: number;
  deleted24h: number;
  failures24h: number;
  avgDurationMs: number | null;
  isRunning: boolean;
  health: {
    status: CleanupHealthStatus;
    title: string;
    message: string;
  };
};

const HEALTH_CONTENT: Record<CleanupHealthStatus, { title: string; message: string }> = {
  healthy: {
    title: "All Systems Operational",
    message:
      "Routine maintenance completed successfully. No critical alerts found in the last 24 hours.",
  },
  warning: {
    title: "Cleanup Needs Attention",
    message:
      "Some deletions failed in the most recent run. Review file issues and consider triggering a manual cleanup.",
  },
  critical: {
    title: "Cleanup Stalled",
    message:
      "No recent cleanup run detected in the last 24 hours. Trigger a cleanup to restore retention enforcement.",
  },
};

export async function fetchCleanupStats(): Promise<CleanupStats> {
  try {
    const supabase = supabaseServer();
    const now = new Date();
    const since24h = new Date(now.getTime() - 24 * 60 * 60 * 1000).toISOString();

    const { data: lastRun, error: lastRunError } = await supabase
      .from("cleanup_runs")
      .select(
        "id, created_at, scanned_count, deleted_count, failed_count, duration_ms, trigger_source, notes",
      )
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (lastRunError) {
      throw lastRunError;
    }

    const { data: recentRuns, error: recentRunsError } = await supabase
      .from("cleanup_runs")
      .select("created_at, scanned_count, deleted_count, failed_count, duration_ms")
      .gte("created_at", since24h);

    if (recentRunsError) {
      throw recentRunsError;
    }

    const { data: runningRuns, error: runningError } = await supabase
      .from("cleanup_runs")
      .select("id")
      .eq("status", "running")
      .limit(1);

    if (runningError) {
      throw runningError;
    }

    const totals = (recentRuns ?? []).reduce(
      (accumulator, run) => {
        accumulator.scanned += run.scanned_count ?? 0;
        accumulator.deleted += run.deleted_count ?? 0;
        accumulator.failures += run.failed_count ?? 0;
        if (run.duration_ms) {
          accumulator.durationSum += run.duration_ms;
          accumulator.durationCount += 1;
        }
        return accumulator;
      },
      { scanned: 0, deleted: 0, failures: 0, durationSum: 0, durationCount: 0 },
    );

    const avgDurationMs =
      totals.durationCount > 0
        ? Math.round(totals.durationSum / totals.durationCount)
        : null;

    const lastRunAt = lastRun?.created_at
      ? new Date(lastRun.created_at)
      : null;
    const lastRunAgeMs = lastRunAt ? now.getTime() - lastRunAt.getTime() : null;

    let status: CleanupHealthStatus = "healthy";
    if (!lastRunAt || (lastRunAgeMs ?? 0) > 24 * 60 * 60 * 1000) {
      status = "critical";
    } else if ((lastRun?.failed_count ?? 0) > 0) {
      status = "warning";
    }

    return {
      lastRun: lastRun ?? null,
      scanned24h: totals.scanned,
      deleted24h: totals.deleted,
      failures24h: totals.failures,
      avgDurationMs,
      isRunning: (runningRuns?.length ?? 0) > 0,
      health: {
        status,
        ...HEALTH_CONTENT[status],
      },
    };
  } catch (error) {
    console.error("Failed to fetch cleanup stats", error);
    return {
      lastRun: null,
      scanned24h: 0,
      deleted24h: 0,
      failures24h: 0,
      avgDurationMs: null,
      isRunning: false,
      health: {
        status: "critical",
        ...HEALTH_CONTENT.critical,
      },
    };
  }
}
