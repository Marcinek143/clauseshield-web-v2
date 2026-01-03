import Link from "next/link";

export type CleanupTabKey = "runs" | "files" | "retention";

type CleanupTabsProps = {
  activeTab: CleanupTabKey;
  fileCount: number;
};

const TAB_BASE_CLASS =
  "group inline-flex items-center border-b-2 py-4 px-1 text-sm";

export default function CleanupTabs({ activeTab, fileCount }: CleanupTabsProps) {
  const tabs: Array<{
    key: CleanupTabKey;
    label: string;
    icon: string;
    showCount?: boolean;
  }> = [
    { key: "runs", label: "Cleanup Runs", icon: "history" },
    { key: "files", label: "Files", icon: "description", showCount: true },
    { key: "retention", label: "Retention Policies", icon: "policy" },
  ];

  return (
    <>
      {/* Dark mode tabs use muted slate text with a brighter active accent. */}
      <div className="border-b border-gray-200 dark:border-navy-700/60">
        <nav aria-label="Tabs" className="-mb-px flex space-x-8">
          {tabs.map((tab) => {
            const isActive = tab.key === activeTab;
            const className = isActive
              ? `${TAB_BASE_CLASS} border-primary text-primary dark:border-primary/80 dark:text-blue-400 font-bold`
              : `${TAB_BASE_CLASS} border-transparent text-[#4c639a] hover:border-gray-300 hover:text-gray-700 dark:text-slate-400 dark:hover:text-slate-200 font-medium`;
            const href =
              tab.key === "runs"
                ? "/admin/cleanup"
                : { pathname: "/admin/cleanup", query: { tab: tab.key } };

            return (
              <Link
                key={tab.key}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={className}
              >
                <span className="material-symbols-outlined mr-2 text-[20px]">
                  {tab.icon}
                </span>
                {tab.label}
                {tab.showCount ? (
                  <span className="ml-2 hidden rounded-full bg-gray-100 py-0.5 px-2.5 text-xs font-medium text-gray-900 dark:bg-navy-800/80 dark:text-slate-200 md:inline-block">
                    {fileCount}
                  </span>
                ) : null}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
