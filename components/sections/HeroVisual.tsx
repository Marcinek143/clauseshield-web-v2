export default function HeroVisual() {
  return (
    <div className="w-full lg:w-1/2 mt-8 lg:mt-0 perspective-1000 z-10">
      <div
        className="relative rounded-2xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-800 shadow-2xl overflow-hidden aspect-[4/3] group hover:rotate-1 hover:scale-[1.01] transition-transform duration-500 ease-out"
        data-alt="Dashboard interface showing contract risk analysis graphs and invoice matching tables"
      >
        <div className="h-8 bg-slate-100 dark:bg-navy-900 border-b border-slate-200 dark:border-navy-700 flex items-center px-4 gap-2">
          <div className="size-2.5 rounded-full bg-red-400"></div>
          <div className="size-2.5 rounded-full bg-yellow-400"></div>
          <div className="size-2.5 rounded-full bg-green-400"></div>
        </div>
        <div
          className="p-6 h-full bg-slate-50 dark:bg-navy-800/50 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-top opacity-90 hover:opacity-100 transition-opacity"
          data-alt="Analytics dashboard showing graphs and data tables"
        ></div>
        <div className="absolute top-20 right-6 bg-white dark:bg-navy-800 p-3 rounded-lg shadow-lg border border-slate-100 dark:border-navy-700 flex gap-3 items-center animate-bounce duration-[3000ms]">
          <div className="p-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
            <span className="material-symbols-outlined text-lg">
              check_circle
            </span>
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Compliance
            </div>
            <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
              100% Verified
            </div>
          </div>
        </div>
        <div className="absolute bottom-12 left-6 bg-white dark:bg-navy-800 p-3 rounded-lg shadow-lg border border-slate-100 dark:border-navy-700 flex gap-3 items-center">
          <div className="p-2 rounded-full bg-blue-100 dark:bg-primary/20 text-primary">
            <span className="material-symbols-outlined text-lg">smart_toy</span>
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              AI Analysis
            </div>
            <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
              Processing...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
