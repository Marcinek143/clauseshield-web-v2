import Link from "next/link";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1400px] pointer-events-none opacity-40 dark:opacity-30">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan/20 rounded-full blur-3xl mix-blend-screen"></div>
      </div>
      <div className="layout-container flex flex-col items-center px-4 md:px-10">
        <div className="flex flex-col gap-8 max-w-[1080px] w-full @container">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
            <div className="flex flex-col gap-6 lg:w-1/2 text-center lg:text-left items-center lg:items-start z-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800 uppercase tracking-wider border border-amber-200 dark:bg-amber-500/15 dark:text-amber-300 dark:border-amber-500/20">
                <span className="material-symbols-outlined text-sm">
                  schedule
                </span>
                Coming Soon
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 dark:text-slate-100">
                Contract AI is launching in 2026
              </h1>
              <h2 className="text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed max-w-xl">
                Advanced contract analysis and invoice processing is coming
                soon.
              </h2>
              <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white/70 p-4 text-left shadow-sm dark:border-navy-700 dark:bg-navy-800/70">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  Currently available: Container Intelligence for demurrage,
                  detention, and tracking.
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Use the active product while Contract AI is in development.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
                <Link
                  className="flex h-12 min-w-[220px] items-center justify-center rounded-xl bg-primary px-6 text-white text-base font-bold shadow-lg shadow-primary/30 hover:bg-primary-hover hover:scale-[1.02] transition-all"
                  href="/container"
                >
                  Explore Container Intelligence
                </Link>
                <button
                  className="flex h-12 min-w-[140px] items-center justify-center rounded-xl bg-white dark:bg-navy-800 border border-slate-200 dark:border-navy-700 px-6 text-slate-900 dark:text-slate-100 text-base font-bold transition-all gap-2 opacity-50 cursor-not-allowed"
                  type="button"
                  disabled
                  title="This feature is not yet available"
                >
                  Start Free Trial
                </button>
                <button
                  className="flex h-12 min-w-[140px] items-center justify-center rounded-xl bg-white dark:bg-navy-800 border border-slate-200 dark:border-navy-700 px-6 text-slate-900 dark:text-slate-100 text-base font-bold transition-all gap-2 opacity-50 cursor-not-allowed"
                  type="button"
                  disabled
                  title="This feature is not yet available"
                >
                  <span className="material-symbols-outlined">play_circle</span>
                  Book Demo
                </button>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                No credit card required · SOC2 Compliant
              </p>
            </div>
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
