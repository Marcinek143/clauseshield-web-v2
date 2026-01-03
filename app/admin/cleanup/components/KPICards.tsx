import { formatDuration, formatNumber, formatRelativeTime } from "../utils";
import type { CleanupStats } from "../actions/fetchCleanupStats";

type KPICardsProps = {
  stats: CleanupStats;
};

export default function KPICards({ stats }: KPICardsProps) {
  const failures = stats.failures24h;
  const failuresClass =
    failures > 0
      ? "text-red-600 dark:text-red-300"
      : "text-green-600 dark:text-emerald-300";

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {/* Dark mode cards use navy surfaces with a faint inner highlight. */}
      <div className="flex flex-col gap-1 rounded-xl p-5 border border-[#cfd6e7] dark:border-navy-700/70 bg-white dark:bg-navy-800/70 shadow-sm dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
        <div className="flex items-center gap-2 text-[#4c639a] dark:text-slate-400">
          <span className="material-symbols-outlined text-[20px]">
            schedule
          </span>
          <p className="text-xs font-bold uppercase tracking-wider">Last Run</p>
        </div>
        <p className="text-[#0d121b] dark:text-slate-100 text-2xl font-bold leading-tight mt-2">
          {formatRelativeTime(stats.lastRun?.created_at)}
        </p>
      </div>
      <div className="flex flex-col gap-1 rounded-xl p-5 border border-[#cfd6e7] dark:border-navy-700/70 bg-white dark:bg-navy-800/70 shadow-sm dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
        <div className="flex items-center gap-2 text-[#4c639a] dark:text-slate-400">
          <span className="material-symbols-outlined text-[20px]">
            find_in_page
          </span>
          <p className="text-xs font-bold uppercase tracking-wider">
            Scanned (24h)
          </p>
        </div>
        <p className="text-[#0d121b] dark:text-slate-100 text-2xl font-bold leading-tight mt-2">
          {formatNumber(stats.scanned24h)}
        </p>
      </div>
      <div className="flex flex-col gap-1 rounded-xl p-5 border border-[#cfd6e7] dark:border-navy-700/70 bg-white dark:bg-navy-800/70 shadow-sm dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
        <div className="flex items-center gap-2 text-[#4c639a] dark:text-slate-400">
          <span className="material-symbols-outlined text-[20px]">
            delete_sweep
          </span>
          <p className="text-xs font-bold uppercase tracking-wider">
            Deleted (24h)
          </p>
        </div>
        <p className="text-[#0d121b] dark:text-slate-100 text-2xl font-bold leading-tight mt-2">
          {formatNumber(stats.deleted24h)}
        </p>
      </div>
      <div className="flex flex-col gap-1 rounded-xl p-5 border border-[#cfd6e7] dark:border-navy-700/70 bg-white dark:bg-navy-800/70 shadow-sm dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
        <div className="flex items-center gap-2 text-[#4c639a] dark:text-slate-400">
          <span className="material-symbols-outlined text-[20px]">error</span>
          <p className="text-xs font-bold uppercase tracking-wider">Failures</p>
        </div>
        <p className={`text-2xl font-bold leading-tight mt-2 ${failuresClass}`}>
          {formatNumber(failures)}
        </p>
      </div>
      <div className="flex flex-col gap-1 rounded-xl p-5 border border-[#cfd6e7] dark:border-navy-700/70 bg-white dark:bg-navy-800/70 shadow-sm dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
        <div className="flex items-center gap-2 text-[#4c639a] dark:text-slate-400">
          <span className="material-symbols-outlined text-[20px]">timer</span>
          <p className="text-xs font-bold uppercase tracking-wider">
            Avg Duration
          </p>
        </div>
        <p className="text-[#0d121b] dark:text-slate-100 text-2xl font-bold leading-tight mt-2">
          {formatDuration(stats.avgDurationMs)}
        </p>
      </div>
    </div>
  );
}
