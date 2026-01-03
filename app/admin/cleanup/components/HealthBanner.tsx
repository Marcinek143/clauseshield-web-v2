"use client";

import { useState } from "react";
import type { CleanupHealthStatus } from "../actions/fetchCleanupStats";

// Dark mode palette softens alert colors to match Stitch PNG.
const STATUS_STYLES: Record<
  CleanupHealthStatus,
  { container: string; icon: string; iconName: string }
> = {
  healthy: {
    container:
      "border-green-200 dark:border-emerald-500/30 bg-green-50 dark:bg-emerald-500/10",
    icon: "text-green-600 dark:text-emerald-300",
    iconName: "check_circle",
  },
  warning: {
    container:
      "border-amber-200 dark:border-amber-500/30 bg-amber-50 dark:bg-amber-500/10",
    icon: "text-amber-600 dark:text-amber-300",
    iconName: "warning",
  },
  critical: {
    container:
      "border-red-200 dark:border-red-500/30 bg-red-50 dark:bg-red-500/10",
    icon: "text-red-600 dark:text-red-300",
    iconName: "error",
  },
};

type HealthBannerProps = {
  status: CleanupHealthStatus;
  title: string;
  message: string;
};

export default function HealthBanner({
  status,
  title,
  message,
}: HealthBannerProps) {
  const [isVisible, setIsVisible] = useState(true);
  const style = STATUS_STYLES[status];

  if (!isVisible) {
    return null;
  }

  return (
    <div className="@container">
      <div
        className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-4 rounded-xl border p-4 pl-5 ${style.container}`}
      >
        <div className="flex items-start gap-4">
          <div className={`mt-1 ${style.icon}`}>
            <span className="material-symbols-outlined">{style.iconName}</span>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[#0d121b] dark:text-slate-100 text-base font-bold leading-tight">
              {title}
            </p>
            <p className="text-[#4c639a] dark:text-slate-300 text-sm font-normal leading-normal">
              {message}
            </p>
          </div>
        </div>
        <button
          className="flex min-w-[84px] shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-white dark:bg-navy-800/80 border border-gray-200 dark:border-navy-700/70 text-[#0d121b] dark:text-slate-100 hover:bg-gray-50 dark:hover:bg-navy-700/60 text-sm font-medium leading-normal transition-colors ml-auto md:ml-0"
          type="button"
          onClick={() => setIsVisible(false)}
        >
          <span className="truncate">Dismiss</span>
        </button>
      </div>
    </div>
  );
}
