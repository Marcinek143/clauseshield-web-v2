import Link from "next/link";

import WaitlistForm from "./WaitlistForm";

export default function ComingSoonBanner() {
  return (
    <section className="px-4 md:px-10 pt-4">
      <div className="layout-container max-w-[1080px] mx-auto">
        <div className="rounded-3xl border border-[#d9e0ea] bg-white dark:bg-navy-800 dark:border-navy-700 px-6 py-6 md:px-8 md:py-8 shadow-sm">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col gap-3">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-800 dark:bg-amber-500/15 dark:text-amber-300">
                Coming Soon
              </span>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 dark:text-slate-100">
                Contract AI is coming soon
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base max-w-2xl">
                Join the waitlist to get early access to contract analysis and
                invoice automation.
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base max-w-2xl">
                Contract AI is launching in 2026.
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Currently available: Container Intelligence for demurrage,
                detention, and tracking.
              </p>
            </div>
            <div className="flex w-full max-w-md flex-col gap-3">
              <WaitlistForm />
              <Link
                className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-hover"
                href="/container"
              >
                Explore Container Intelligence
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
