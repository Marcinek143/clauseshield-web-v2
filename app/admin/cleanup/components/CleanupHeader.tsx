"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import type { CleanupHealthStatus } from "../actions/fetchCleanupStats";
import { triggerCleanup } from "../actions/triggerCleanup";

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
};

export default function CleanupHeader({ status }: CleanupHeaderProps) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const statusStyle = STATUS_STYLES[status];

  const handleTrigger = () => {
    startTransition(async () => {
      await triggerCleanup();
      setIsModalOpen(false);
      router.refresh();
    });
  };

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
        <button
          className="flex items-center gap-2 h-10 px-5 bg-primary hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm shadow-blue-500/30 dark:shadow-blue-500/20"
          type="button"
          onClick={() => setIsModalOpen(true)}
        >
          <span className="material-symbols-outlined text-[20px]">
            play_circle
          </span>
          Trigger Cleanup Now
        </button>
      </div>
      {isModalOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          {/* Dark mode modal styling uses a deep navy panel with soft elevation. */}
          <div className="w-full max-w-md rounded-xl border border-[#cfd6e7] dark:border-navy-700/70 bg-white dark:bg-navy-800/90 shadow-xl dark:shadow-[0_16px_40px_rgba(0,0,0,0.45)]">
            <div className="p-6 border-b border-[#e7ebf3] dark:border-navy-700/60">
              <h2 className="text-lg font-bold text-[#0d121b] dark:text-slate-100">
                Trigger cleanup?
              </h2>
              <p className="mt-2 text-sm text-[#4c639a] dark:text-slate-300">
                This will scan for expired files, delete eligible records, and
                log a new cleanup run.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-end p-6">
              <button
                className="flex items-center justify-center h-10 px-4 rounded-lg border border-[#cfd6e7] dark:border-navy-700/70 text-[#0d121b] dark:text-slate-100 hover:bg-gray-50 dark:hover:bg-navy-800/70 text-sm font-medium transition-colors"
                type="button"
                onClick={() => setIsModalOpen(false)}
                disabled={isPending}
              >
                Cancel
              </button>
              <button
                className="flex items-center justify-center h-10 px-4 rounded-lg bg-primary hover:bg-blue-700 text-white text-sm font-semibold transition-colors dark:shadow-blue-500/20"
                type="button"
                onClick={handleTrigger}
                disabled={isPending}
              >
                {isPending ? "Triggering..." : "Run Cleanup"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
