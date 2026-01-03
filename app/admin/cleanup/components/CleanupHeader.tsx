import type { ReactNode } from "react";
import type { CleanupHealthStatus } from "../actions/fetchCleanupStats";

// Dark mode palette matches Stitch PNG: muted status tones on navy surfaces.
const STATUS_STYLES: Record<
  CleanupHealthStatus,
  {
    container: string;
    dot: string;
    text: string;
    label: string;
  }
> = {
  healthy: {
    container:
      "bg-green-100 border-green-200 dark:bg-emerald-500/10 dark:border-emerald-500/30",
    dot: "bg-green-500 dark:bg-emerald-400",
    text: "text-green-800 dark:text-emerald-200",
    label: "Healthy",
  },
  warning: {
    container:
      "bg-amber-100 border-amber-200 dark:bg-amber-500/10 dark:border-amber-500/30",
    dot: "bg-amber-500 dark:bg-amber-400",
    text: "text-amber-800 dark:text-amber-200",
    label: "Warning",
  },
  critical: {
    container:
      "bg-red-100 border-red-200 dark:bg-red-500/10 dark:border-red-500/30",
    dot: "bg-red-500 dark:bg-red-400",
    text: "text-red-800 dark:text-red-200",
    label: "Critical",
  },
};

type CleanupHeaderProps = {
  status: CleanupHealthStatus;
  action?: ReactNode;
};

export default function CleanupHeader({
  status,
  action,
}: CleanupHeaderProps) {
  const statusStyle = STATUS_STYLES[status];

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-[#0d121b] dark:text-slate-100 text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em] flex items-center gap-3">
          <span>🧹 Cleanup Operations</span>
        </h1>
        <p className="text-[#4c639a] dark:text-slate-400 text-base font-normal leading-normal">
          Automated lifecycle &amp; retention enforcement
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div
          className={`flex h-9 items-center justify-center gap-x-2 rounded-full px-4 border ${statusStyle.container}`}
        >
          <div className={`size-2 rounded-full animate-pulse ${statusStyle.dot}`} />
          <p
            className={`text-sm font-bold leading-normal ${statusStyle.text}`}
          >
            Status: {statusStyle.label}
          </p>
        </div>
        {action ? <div className="flex items-center">{action}</div> : null}
      </div>
    </div>
  );
}
