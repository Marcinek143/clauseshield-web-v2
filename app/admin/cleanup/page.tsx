export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

import { unstable_noStore as noStore } from "next/cache";
import CleanupHeader from "./components/CleanupHeader";
import KPICards from "./components/KPICards";
import HealthBanner from "./components/HealthBanner";
import CleanupTabs from "./components/CleanupTabs";
import TriggerCleanupButton from "./components/TriggerCleanupButton";
import CleanupRunsTable from "./components/tables/CleanupRunsTable";
import FilesTable from "./components/tables/FilesTable";
import RetentionTable from "./components/tables/RetentionTable";
import { fetchCleanupStats } from "./actions/fetchCleanupStats";
import { fetchCleanupRuns } from "./actions/fetchCleanupRuns";
import { fetchFileIssues } from "./actions/fetchFileIssues";
import { fetchCleanupFiles } from "./actions/fetchCleanupFiles";
import type { CleanupTabKey } from "./components/CleanupTabs";
import ThemeToggle from "@/components/layout/ThemeToggle";

const PAGE_SIZE = 5;

function resolveTab(tab?: string): CleanupTabKey {
  if (tab === "files" || tab === "retention") {
    return tab;
  }
  return "runs";
}

type CleanupPageProps = {
  searchParams?: {
    tab?: string;
    page?: string;
  };
};

export default async function CleanupPage({ searchParams }: CleanupPageProps) {
  noStore();
  const tab = resolveTab(searchParams?.tab);
  const page = Math.max(1, Number(searchParams?.page ?? "1") || 1);
  const pageSize = PAGE_SIZE;
  const activeTab = tab;

  console.log("ADMIN CLEANUP PAGE", {
    page,
    pageSize,
  });

  const statsPromise = fetchCleanupStats();
  const cleanupFilesPromise = fetchCleanupFiles();
  const fileIssuesPromise =
    activeTab === "retention"
      ? fetchFileIssues()
      : Promise.resolve({
          issues: [],
          totalIssues: 0,
          retentionGroups: [],
          retentionSampled: 0,
        });
  const runsPromise =
    activeTab === "runs"
      ? fetchCleanupRuns(page, pageSize)
      : Promise.resolve({
          runs: [],
          totalCount: 0,
          page,
          pageSize,
        });

  const [stats, cleanupFiles, fileIssues, runsResult] = await Promise.all([
    statsPromise,
    cleanupFilesPromise,
    fileIssuesPromise,
    runsPromise,
  ]);

  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden font-display">
      {/* Dark mode header uses a deep navy surface with a faint divider glow. */}
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e7ebf3] dark:border-navy-800/70 bg-background-light dark:bg-navy-900 px-6 py-3 shadow-sm dark:shadow-[0_1px_0_rgba(255,255,255,0.04)]">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center size-8 rounded-lg bg-primary/10 text-primary">
            <span className="material-symbols-outlined">shield</span>
          </div>
          <h2 className="text-[#0d121b] dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em]">
            ClauseShield Admin
          </h2>
        </div>
        <div className="flex flex-1 justify-end gap-6 items-center">
          <div className="hidden md:flex flex-col min-w-40 !h-10 max-w-64 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-full bg-[#e7ebf3] dark:bg-navy-800/70 dark:ring-1 dark:ring-white/5 transition-colors">
              <div className="text-[#4c639a] dark:text-slate-400 flex border-none items-center justify-center pl-4 rounded-l-xl border-r-0">
                <span className="material-symbols-outlined text-[20px]">
                  search
                </span>
              </div>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d121b] dark:text-slate-100 focus:outline-0 focus:ring-0 border-none bg-transparent focus:border-none h-full placeholder:text-[#4c639a] dark:placeholder:text-slate-500 px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal"
                placeholder="Search resources..."
                defaultValue=""
              />
            </div>
          </div>
          <ThemeToggle />
          <button
            className="flex items-center justify-center size-10 rounded-full hover:bg-gray-200 dark:hover:bg-navy-800/70 transition text-[#4c639a] dark:text-slate-400"
            type="button"
          >
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9 ring-2 ring-white dark:ring-navy-800 cursor-pointer"
            data-alt="User profile picture"
            style={{
              backgroundImage:
                "url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuDHu3_0DaztP-E-VRiJL3S5Y4TjyIKBPyHTZZHxlJafn3L_FATCeT07cCOfmZ3kYoE_j1dzr-i3L1U4aGECXPYffcbM_vFWH_qnLcjvNLIrPOq7dC6LRaQ8vVwqdwBnoXmKESUtGvDcsuxno7WA1YwHNaRhMKuR2LM2Aeo6no2W2VUs-v9G3llvhv-Uf2kEv-ZIO8_zzGkYfBXBs5Yf_OkuEXYvXunTlT-80MRH768wP5ulzogvCWqC5GuHulu7O7rrvInNjBVJoA\")",
            }}
          />
        </div>
      </header>
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-6 md:px-10 lg:px-20 flex flex-1 justify-center py-8">
          <div className="layout-content-container flex flex-col max-w-[1200px] flex-1 gap-8">
            <CleanupHeader
              status={stats.health.status}
              action={<TriggerCleanupButton isRunning={stats.isRunning} />}
            />
            <KPICards stats={stats} />
            <HealthBanner
              status={stats.health.status}
              title={stats.health.title}
              message={stats.health.message}
            />
            <div className="flex flex-col gap-4">
              <CleanupTabs
                activeTab={activeTab}
                expiredCount={cleanupFiles.expiredCount}
              />
              {activeTab === "runs" ? (
                <CleanupRunsTable
                  runs={runsResult.runs}
                  totalCount={runsResult.totalCount}
                  page={runsResult.page}
                  pageSize={runsResult.pageSize}
                />
              ) : null}
              {activeTab === "files" ? (
                <FilesTable
                  files={cleanupFiles.files}
                  totalCount={cleanupFiles.totalCount}
                />
              ) : null}
              {activeTab === "retention" ? (
                <RetentionTable
                  retentionGroups={fileIssues.retentionGroups}
                  retentionSampled={fileIssues.retentionSampled}
                />
              ) : null}
            </div>
            <footer className="mt-8 border-t border-[#e7ebf3] dark:border-navy-800/70 pt-6 pb-2 text-center">
              <p className="text-xs text-[#4c639a] dark:text-slate-500">
                ClauseShield Ops v2.4 | System Time: UTC | © 2023 ClauseShield
                Inc.
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
