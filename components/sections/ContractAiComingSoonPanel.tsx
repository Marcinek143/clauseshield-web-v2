import Link from "next/link";

type ContractAiComingSoonPanelProps = {
  title?: string;
  description?: string;
  className?: string;
};

export default function ContractAiComingSoonPanel({
  title = "Contract AI launching in 2026",
  description = "This feature is currently in development.",
  className = "",
}: ContractAiComingSoonPanelProps) {
  return (
    <section className={className}>
      <div className="rounded-3xl border border-[#d9e0ea] bg-white px-6 py-6 shadow-sm dark:border-navy-700 dark:bg-navy-800 md:px-8 md:py-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div className="flex max-w-2xl flex-col gap-3">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-800 dark:bg-amber-500/15 dark:text-amber-300">
              Coming Soon
            </span>
            <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-slate-100 md:text-3xl">
              {title}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 md:text-base">
              {description}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Container Intelligence is available now for demurrage,
              detention, and tracking.
            </p>
          </div>
          <div className="flex w-full max-w-xs shrink-0">
            <Link
              className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-primary px-5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-hover"
              href="/container"
            >
              Explore Container Intelligence
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
