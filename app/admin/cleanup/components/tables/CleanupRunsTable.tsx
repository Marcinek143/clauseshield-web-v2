"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { formatDateTime, formatDuration, formatNumber } from "../../utils";
import type { CleanupRunRow } from "../../actions/fetchCleanupRuns";

// Dark mode table surfaces follow Stitch: soft separators and low-contrast rows.
type CleanupRunsTableProps = {
  runs: CleanupRunRow[];
  totalCount: number;
  page: number;
  pageSize: number;
};

function formatRunId(id: string) {
  return id.startsWith("#") ? id : `#${id}`;
}

function getStatusStyles(failedCount: number | null) {
  if (failedCount && failedCount > 0) {
    return {
      row: "bg-red-50/50 dark:bg-red-500/10 hover:bg-red-50 dark:hover:bg-red-500/15",
      badge:
        "bg-red-50 text-red-700 ring-red-600/20 dark:bg-red-500/15 dark:text-red-300 dark:ring-red-500/30",
      label: "Failed",
    };
  }

  return {
    row: "hover:bg-gray-50 dark:hover:bg-navy-800/70",
    badge:
      "bg-green-50 text-green-700 ring-green-600/20 dark:bg-emerald-500/15 dark:text-emerald-300 dark:ring-emerald-500/30",
    label: "Success",
  };
}

export default function CleanupRunsTable({
  runs,
  totalCount,
  page,
  pageSize,
}: CleanupRunsTableProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const totalPages = Math.ceil(totalCount / pageSize);
  const from = totalCount === 0 ? 0 : (page - 1) * pageSize + 1;
  const to = totalCount === 0 ? 0 : from + runs.length - 1;
  const isPrevDisabled = page <= 1;
  const isNextDisabled = totalPages === 0 || page >= totalPages;

  function goToPage(nextPage: number) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", "runs");
    params.set("page", String(nextPage));
    router.push(`/admin/cleanup?${params.toString()}`);
  }

  const pages =
    totalPages > 0
      ? Array.from(
          new Set(
            [1, page - 1, page, page + 1, totalPages].filter(
              (value) => value >= 1 && value <= totalPages,
            ),
          ),
        ).sort((a, b) => a - b)
      : [];

  return (
    <div className="rounded-xl border border-[#cfd6e7] dark:border-navy-700/70 bg-white dark:bg-navy-800/70 overflow-hidden shadow-sm dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
      <div className="flex items-center justify-between p-4 border-b border-[#cfd6e7] dark:border-navy-700/60">
        <h3 className="text-base font-bold text-[#0d121b] dark:text-slate-100">
          Recent Runs
        </h3>
        <div className="flex gap-2">
          <button
            className="p-2 text-[#4c639a] hover:text-primary dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">
              filter_list
            </span>
          </button>
          <button
            className="p-2 text-[#4c639a] hover:text-primary dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">download</span>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-[#f8f9fc] dark:bg-navy-900/60 text-[#4c639a] dark:text-slate-400 font-medium uppercase tracking-wider text-xs">
            <tr>
              <th className="px-6 py-4" scope="col">
                Run ID
              </th>
              <th className="px-6 py-4" scope="col">
                Status
              </th>
              <th className="px-6 py-4" scope="col">
                Start Time
              </th>
              <th className="px-6 py-4" scope="col">
                Duration
              </th>
              <th className="px-6 py-4" scope="col">
                Items Processed
              </th>
              <th className="px-6 py-4 text-right" scope="col">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e7ebf3] dark:divide-navy-700/60">
            {runs.map((run) => {
              const status = getStatusStyles(run.failed_count);
              return (
                <tr
                  key={run.id}
                  className={`${status.row} transition-colors`}
                >
                  <td className="px-6 py-4 font-medium text-primary cursor-pointer hover:underline">
                    {formatRunId(run.id)}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ring-1 ring-inset ${status.badge}`}
                    >
                      {status.label}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[#0d121b] dark:text-slate-100">
                    {formatDateTime(run.run_at)}
                  </td>
                  <td className="px-6 py-4 text-[#4c639a] dark:text-slate-400">
                    {formatDuration(run.duration_ms)}
                  </td>
                  <td className="px-6 py-4 text-[#0d121b] dark:text-slate-100">
                    {formatNumber(run.scanned_count ?? 0)}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      className="text-[#4c639a] hover:text-primary dark:text-slate-400 dark:hover:text-blue-400"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        arrow_forward
                      </span>
                    </button>
                  </td>
                </tr>
              );
            })}
            {runs.length === 0 ? (
              <tr>
                <td
                  className="px-6 py-8 text-center text-[#4c639a] dark:text-slate-400"
                  colSpan={6}
                >
                  No cleanup runs available yet.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between border-t border-[#e7ebf3] dark:border-navy-700/60 bg-white dark:bg-navy-800/70 px-6 py-3">
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-[#4c639a] dark:text-slate-400">
              Showing{" "}
              <span className="font-medium text-[#0d121b] dark:text-slate-100">
                {from}
              </span>{" "}
              to{" "}
              <span className="font-medium text-[#0d121b] dark:text-slate-100">
                {to}
              </span>{" "}
              of{" "}
              <span className="font-medium text-[#0d121b] dark:text-slate-100">
                {totalCount}
              </span>{" "}
              results
            </p>
          </div>
          <div>
            <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
              {isPrevDisabled ? (
                <span
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-300 ring-1 ring-inset ring-gray-200 dark:text-slate-600 dark:ring-navy-700/70"
                  aria-disabled="true"
                >
                  <span className="sr-only">Previous</span>
                  <span className="material-symbols-outlined text-[20px]">
                    chevron_left
                  </span>
                </span>
              ) : (
                <button
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:ring-navy-700/70 dark:hover:bg-navy-700/60"
                  onClick={() => goToPage(page - 1)}
                  type="button"
                >
                  <span className="sr-only">Previous</span>
                  <span className="material-symbols-outlined text-[20px]">
                    chevron_left
                  </span>
                </button>
              )}
              {pages.map((pageNumber, index) => {
                const previous = pages[index - 1];
                const showEllipsis = previous && pageNumber - previous > 1;
                return (
                  <span key={pageNumber} className="inline-flex">
                    {showEllipsis ? (
                      <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0 dark:text-slate-500 dark:ring-navy-700/70">
                        ...
                      </span>
                    ) : null}
                    <button
                      className={
                        pageNumber === page
                          ? "relative z-10 inline-flex items-center bg-primary px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                          : "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:text-slate-200 dark:ring-navy-700/70 dark:hover:bg-navy-700/60"
                      }
                      onClick={() => goToPage(pageNumber)}
                      type="button"
                    >
                      {pageNumber}
                    </button>
                  </span>
                );
              })}
              {isNextDisabled ? (
                <span
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-300 ring-1 ring-inset ring-gray-200 dark:text-slate-600 dark:ring-navy-700/70"
                  aria-disabled="true"
                >
                  <span className="sr-only">Next</span>
                  <span className="material-symbols-outlined text-[20px]">
                    chevron_right
                  </span>
                </span>
              ) : (
                <button
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:ring-navy-700/70 dark:hover:bg-navy-700/60"
                  onClick={() => goToPage(page + 1)}
                  type="button"
                >
                  <span className="sr-only">Next</span>
                  <span className="material-symbols-outlined text-[20px]">
                    chevron_right
                  </span>
                </button>
              )}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
