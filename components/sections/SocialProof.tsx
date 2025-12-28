export default function SocialProof() {
  return (
    <section className="py-10 border-y border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-900/50">
      <div className="layout-container px-4 md:px-10 max-w-[1080px] mx-auto text-center">
        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-8">
          Trusted by forward-thinking teams
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 text-xl font-bold text-slate-700 dark:text-slate-300">
            <span className="material-symbols-outlined">diamond</span>
            AcmeCorp
          </div>
          <div className="flex items-center gap-2 text-xl font-bold text-slate-700 dark:text-slate-300">
            <span className="material-symbols-outlined">rocket_launch</span>
            Stratos
          </div>
          <div className="flex items-center gap-2 text-xl font-bold text-slate-700 dark:text-slate-300">
            <span className="material-symbols-outlined">anchor</span>
            HarborLogistics
          </div>
          <div className="flex items-center gap-2 text-xl font-bold text-slate-700 dark:text-slate-300">
            <span className="material-symbols-outlined">landscape</span>
            SummitFinancial
          </div>
          <div className="flex items-center gap-2 text-xl font-bold text-slate-700 dark:text-slate-300">
            <span className="material-symbols-outlined">bolt</span>
            Voltas
          </div>
        </div>
      </div>
    </section>
  );
}
