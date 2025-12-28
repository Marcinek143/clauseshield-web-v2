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
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider border border-primary/20">
                <span className="material-symbols-outlined text-sm">
                  new_releases
                </span>
                v2.0 Released
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 dark:text-slate-100">
                AI That Brings Clarity to{" "}
                <span className="text-primary">Contracts</span> and{" "}
                <span className="text-primary">Cash</span>
              </h1>
              <h2 className="text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed max-w-xl">
                Unify your legal and financial workflows. Detect risks in seconds
                and automate invoice processing with enterprise-grade precision.
              </h2>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
                <button className="flex h-12 min-w-[140px] items-center justify-center rounded-xl bg-primary px-6 text-white text-base font-bold shadow-lg shadow-primary/30 hover:bg-primary-hover hover:scale-[1.02] transition-all">
                  Start Free Trial
                </button>
                <button className="flex h-12 min-w-[140px] items-center justify-center rounded-xl bg-white dark:bg-navy-800 border border-slate-200 dark:border-navy-700 px-6 text-slate-900 dark:text-slate-100 text-base font-bold hover:bg-slate-50 dark:hover:bg-navy-700 transition-all gap-2">
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
