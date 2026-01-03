import { formatDateTime, formatNumber, formatRetentionHours } from "../../utils";
import type { RetentionGroup } from "../../actions/fetchFileIssues";

// Dark mode table tones are tuned to the Stitch PNG navy palette.
type RetentionTableProps = {
  retentionGroups: RetentionGroup[];
  retentionSampled: number;
};

export default function RetentionTable({
  retentionGroups,
  retentionSampled,
}: RetentionTableProps) {
  return (
    <div className="rounded-xl border border-[#cfd6e7] dark:border-navy-700/70 bg-white dark:bg-navy-800/70 overflow-hidden shadow-sm dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
      <div className="flex items-center justify-between p-4 border-b border-[#cfd6e7] dark:border-navy-700/60">
        <h3 className="text-base font-bold text-[#0d121b] dark:text-slate-100">
          Retention Policies
        </h3>
        <p className="text-sm text-[#4c639a] dark:text-slate-400">
          {retentionSampled} files sampled
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-[#f8f9fc] dark:bg-navy-900/60 text-[#4c639a] dark:text-slate-400 font-medium uppercase tracking-wider text-xs">
            <tr>
              <th className="px-6 py-4" scope="col">
                Retention Window
              </th>
              <th className="px-6 py-4" scope="col">
                Files
              </th>
              <th className="px-6 py-4" scope="col">
                Expired
              </th>
              <th className="px-6 py-4" scope="col">
                Deleted
              </th>
              <th className="px-6 py-4" scope="col">
                Linked Runs
              </th>
              <th className="px-6 py-4" scope="col">
                Latest Upload
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e7ebf3] dark:divide-navy-700/60">
            {retentionGroups.map((group) => (
              <tr
                key={group.retentionHours ?? "unknown"}
                className="hover:bg-gray-50 dark:hover:bg-navy-800/70 transition-colors"
              >
                <td className="px-6 py-4 font-medium text-primary">
                  {formatRetentionHours(group.retentionHours)}
                </td>
                <td className="px-6 py-4 text-[#0d121b] dark:text-slate-100">
                  {formatNumber(group.totalFiles)}
                </td>
                <td className="px-6 py-4 text-[#0d121b] dark:text-slate-100">
                  {formatNumber(group.expiredFiles)}
                </td>
                <td className="px-6 py-4 text-[#0d121b] dark:text-slate-100">
                  {formatNumber(group.deletedFiles)}
                </td>
                <td className="px-6 py-4 text-[#0d121b] dark:text-slate-100">
                  {formatNumber(group.linkedRuns)}
                </td>
                <td className="px-6 py-4 text-[#4c639a] dark:text-slate-400">
                  {formatDateTime(group.latestUpload)}
                </td>
              </tr>
            ))}
            {retentionGroups.length === 0 ? (
              <tr>
                <td
                  className="px-6 py-8 text-center text-[#4c639a] dark:text-slate-400"
                  colSpan={6}
                >
                  No retention data available.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
