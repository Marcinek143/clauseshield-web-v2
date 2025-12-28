export default function FounderValuePillars() {
  return (
    <>
      <section className="py-20 lg:py-32 bg-background-light dark:bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mb-4 dark:text-slate-100">
              The Executive View
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Stop digging through folders. Get a single pane of glass for every
              dollar and every clause in your organization.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl bg-white dark:bg-navy-800 dark:border-navy-700">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background-light/10 z-10 dark:to-navy-900/50"></div>
            <div
              className="aspect-[21/9] w-full bg-cover bg-center"
              data-alt="Detailed executive dashboard showing revenue forecasts and risk heatmaps"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC4VYfZw8ypBNtJQi41dnKjTk9Kl0OBuwN2KaPyqI0BLK1Us0RkVeZUercFFA9Ofkf5St9M3Kg8kRlHPWOx79OCDWzVtxa1QIQb6IQpYOaW9x_mRjrX14hGcAbZlF32Hxa3dpbkGQbt_zWXI2CKLmhKIVkWYc3hYjEhIVA36CbFEH9GkiQ39w0PpbbCIsk_uOPTG-cgjBHD4zPymOF356nY2QEabbPAqh4S-6lMaVinQjxEmj-cUSU-H5rBYC1fk47ZD44DOu99BQ')",
              }}
            ></div>
            <div className="absolute bottom-0 left-0 w-full bg-white/95 backdrop-blur border-t border-slate-200 p-6 sm:p-10 z-20 flex flex-col sm:flex-row justify-between items-center gap-8 dark:bg-navy-800/95 dark:border-navy-700">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <span className="material-symbols-outlined">monitoring</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    Revenue Leakage Detected
                  </p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    $245,000{" "}
                    <span className="text-sm font-normal text-green-600 ml-1">
                      Recovered
                    </span>
                  </p>
                </div>
              </div>
              <div className="h-10 w-px bg-slate-200 hidden sm:block dark:bg-navy-700"></div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-red-50 rounded-xl text-red-500 dark:bg-red-500/15 dark:text-red-300">
                  <span className="material-symbols-outlined">gavel</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    Critical Risks
                  </p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    0{" "}
                    <span className="text-sm font-normal text-slate-500 ml-1 dark:text-slate-400">
                      Pending Review
                    </span>
                  </p>
                </div>
              </div>
              <div className="h-10 w-px bg-slate-200 hidden sm:block dark:bg-navy-700"></div>
              <div>
                <button className="text-primary font-bold hover:text-primary-hover flex items-center gap-2 dark:hover:text-primary">
                  Explore Dashboard{" "}
                  <span className="material-symbols-outlined">
                    arrow_right_alt
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white dark:bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mb-4 dark:text-slate-100">
                Strategic &amp; Operational Benefits
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Designed for high-velocity decision making. We replace the
                clutter with clarity.
              </p>
            </div>
            <a
              className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all dark:hover:text-primary"
              href="#"
            >
              See full features{" "}
              <span className="material-symbols-outlined text-xl">
                arrow_forward
              </span>
            </a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-background-light border border-slate-200 hover:border-primary/50 transition-colors group dark:bg-navy-800 dark:border-navy-700">
              <div className="size-12 rounded-xl bg-blue-100 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform dark:bg-primary/15 dark:text-primary">
                <span className="material-symbols-outlined">visibility</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 dark:text-slate-100">
                Cross-Team Visibility
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed dark:text-slate-400">
                Break down silos. Get a unified view of legal obligations and
                financial commitments in one place.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-background-light border border-slate-200 hover:border-primary/50 transition-colors group dark:bg-navy-800 dark:border-navy-700">
              <div className="size-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform dark:bg-purple-500/15 dark:text-purple-300">
                <span className="material-symbols-outlined">bolt</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 dark:text-slate-100">
                AI Summaries
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed dark:text-slate-400">
                Turn 50-page contracts into 1-page executive briefs instantly.
                Know what you&apos;re signing, faster.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-background-light border border-slate-200 hover:border-primary/50 transition-colors group dark:bg-navy-800 dark:border-navy-700">
              <div className="size-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform dark:bg-amber-500/15 dark:text-amber-300">
                <span className="material-symbols-outlined">shield</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 dark:text-slate-100">
                Risk Mitigation
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed dark:text-slate-400">
                Proactive alerts for non-compliance, renewal dates, and
                unfavourable clauses before they cost you.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-background-light border border-slate-200 hover:border-primary/50 transition-colors group dark:bg-navy-800 dark:border-navy-700">
              <div className="size-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform dark:bg-green-500/15 dark:text-green-300">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 dark:text-slate-100">
                Scale Without Surprises
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed dark:text-slate-400">
                Predictable costs as you grow. Manage increased volume without
                increasing headcount linearly.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-background-light overflow-hidden dark:bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative p-8 rounded-2xl bg-white border border-red-100 shadow-sm opacity-80 hover:opacity-100 transition-opacity dark:bg-navy-800 dark:border-red-500/20">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="material-symbols-outlined text-[120px] dark:text-navy-700">
                  close
                </span>
              </div>
              <h3 className="text-red-500 font-bold uppercase tracking-widest text-sm mb-4 dark:text-red-400">
                Manual Chaos
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-red-400 shrink-0">
                    cancel
                  </span>
                  <span className="text-slate-600 dark:text-slate-400">
                    Data scattered across email &amp; drives
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-red-400 shrink-0">
                    cancel
                  </span>
                  <span className="text-slate-600 dark:text-slate-400">
                    Missed renewal deadlines costing $$
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-red-400 shrink-0">
                    cancel
                  </span>
                  <span className="text-slate-600 dark:text-slate-400">
                    Slow legal review bottlenecks deals
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative p-8 rounded-2xl bg-white border-2 border-primary/20 shadow-xl transform md:-translate-y-4 md:-translate-x-4 dark:bg-navy-800 dark:border-primary/30">
              <div className="absolute top-0 right-0 p-4 opacity-5 text-primary dark:text-primary/30">
                <span className="material-symbols-outlined text-[120px]">
                  check
                </span>
              </div>
              <div className="absolute -top-3 left-8 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                CLAUSESHIELD AI
              </div>
              <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">
                Intelligent Control
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary shrink-0">
                    check_circle
                  </span>
                  <span className="text-slate-900 font-medium dark:text-slate-100">
                    Centralized repository with AI search
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary shrink-0">
                    check_circle
                  </span>
                  <span className="text-slate-900 font-medium dark:text-slate-100">
                    Automated alerts 90-days before renewal
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary shrink-0">
                    check_circle
                  </span>
                  <span className="text-slate-900 font-medium dark:text-slate-100">
                    Instant risk scoring accelerates closing
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
