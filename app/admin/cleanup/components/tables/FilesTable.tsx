import { formatDateTime } from "../../utils";
import type { FileIssueRow } from "../../actions/fetchFileIssues";

// Dark mode table styling matches Stitch with subdued row dividers.
type FilesTableProps = {
  issues: FileIssueRow[];
  totalIssues: number;
};

function formatRunId(id: string | null) {
  if (!id) return "-";
  return id.startsWith("#") ? id : `#${id}`;
}

function getFileStatus(row: FileIssueRow) {
  const isExpired = row.expires_at
    ? new Date(row.expires_at) < new Date()
    : false;

  if (isExpired) {
    return {
      label: "Expired",
      badge:
        "bg-amber-50 text-amber-700 ring-amber-600/20 dark:bg-amber-500/15 dark:text-amber-300 dark:ring-amber-500/30",
    };
  }

  if (row.status === "deleted") {
    return {
      label: "Deleted",
      badge:
        "bg-green-50 text-green-700 ring-green-600/20 dark:bg-emerald-500/15 dark:text-emerald-300 dark:ring-emerald-500/30",
    };
  }

  return {
    label: row.status ?? "Unknown",
    badge:
      "bg-gray-100 text-gray-700 ring-gray-300 dark:bg-navy-700/60 dark:text-slate-200 dark:ring-navy-700/70",
  };
}

export default function FilesTable({ issues, totalIssues }: FilesTableProps) {
  return (
    <div className="rounded-xl border border-[#cfd6e7] dark:border-navy-700/70 bg-white dark:bg-navy-800/70 overflow-hidden shadow-sm dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
      <div className="flex items-center justify-between p-4 border-b border-[#cfd6e7] dark:border-navy-700/60">
        <h3 className="text-base font-bold text-[#0d121b] dark:text-slate-100">
          Expired Files
        </h3>
        <p className="text-sm text-[#4c639a] dark:text-slate-400">
          {totalIssues} flagged
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-[#f8f9fc] dark:bg-navy-900/60 text-[#4c639a] dark:text-slate-400 font-medium uppercase tracking-wider text-xs">
            <tr>
              <th className="px-6 py-4" scope="col">
                File Path
              </th>
              <th className="px-6 py-4" scope="col">
                Type
              </th>
              <th className="px-6 py-4" scope="col">
                Status
              </th>
              <th className="px-6 py-4" scope="col">
                Uploaded
              </th>
              <th className="px-6 py-4" scope="col">
                Expires
              </th>
              <th className="px-6 py-4" scope="col">
                Cleanup Run
              </th>
              <th className="px-6 py-4 text-right" scope="col">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e7ebf3] dark:divide-navy-700/60">
            {issues.map((issue) => {
              const status = getFileStatus(issue);
              return (
                <tr
                  key={issue.id}
                  className="hover:bg-gray-50 dark:hover:bg-navy-800/70 transition-colors"
                >
                  <td className="px-6 py-4 font-medium text-primary cursor-pointer hover:underline">
                    {issue.storage_path ?? "-"}
                  </td>
                  <td className="px-6 py-4 text-[#0d121b] dark:text-slate-100">
                    {issue.kind ?? "-"}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ring-1 ring-inset ${status.badge}`}
                    >
                      {status.label}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[#4c639a] dark:text-slate-400">
                    {formatDateTime(issue.uploaded_at)}
                  </td>
                  <td className="px-6 py-4 text-[#4c639a] dark:text-slate-400">
                    {formatDateTime(issue.expires_at)}
                  </td>
                  <td className="px-6 py-4 text-[#0d121b] dark:text-slate-100">
                    {formatRunId(issue.cleanup_run_id)}
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
            {issues.length === 0 ? (
              <tr>
                <td
                  className="px-6 py-8 text-center text-[#4c639a] dark:text-slate-400"
                  colSpan={7}
                >
                  No expired files detected.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
