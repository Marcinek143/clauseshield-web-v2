export default function LegalValuePillars() {
  return (
    <>
      <section className="border-y border-slate-200 bg-white py-12 dark:border-navy-700 dark:bg-navy-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8 dark:text-slate-400">
            Powering legal teams at innovative enterprises
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex justify-center items-center gap-2 font-bold text-xl text-slate-900 dark:text-slate-400">
              <span className="material-symbols-outlined">landscape</span>
              ACME Corp
            </div>
            <div className="flex justify-center items-center gap-2 font-bold text-xl text-slate-900 dark:text-slate-400">
              <span className="material-symbols-outlined">public</span>
              GlobalTech
            </div>
            <div className="flex justify-center items-center gap-2 font-bold text-xl text-slate-900 dark:text-slate-400">
              <span className="material-symbols-outlined">diamond</span>
              Vertex
            </div>
            <div className="flex justify-center items-center gap-2 font-bold text-xl text-slate-900 dark:text-slate-400">
              <span className="material-symbols-outlined">rocket_launch</span>
              StarBase
            </div>
            <div className="hidden lg:flex justify-center items-center gap-2 font-bold text-xl text-slate-900 dark:text-slate-400">
              <span className="material-symbols-outlined">savings</span>
              FinGroup
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-background-light dark:bg-navy-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4 dark:text-slate-100">
              Core Legal Capabilities
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              A unified AI platform designed to replace manual redlining with
              instant intelligence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group dark:bg-navy-800 dark:border-navy-700 dark:shadow-none">
              <div className="h-12 w-12 rounded-lg bg-blue-50 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform dark:bg-primary/15">
                <span className="material-symbols-outlined text-3xl">
                  find_in_page
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 dark:text-slate-100">
                Automated Clause Detection
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed dark:text-slate-400">
                Instantly identify force majeure, indemnity, and termination
                clauses across thousands of docs.
              </p>
            </div>
            <div className="flex flex-col p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group dark:bg-navy-800 dark:border-navy-700 dark:shadow-none">
              <div className="h-12 w-12 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform dark:bg-orange-500/15 dark:text-orange-300">
                <span className="material-symbols-outlined text-3xl">
                  health_and_safety
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 dark:text-slate-100">
                Risk Scoring Engine
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed dark:text-slate-400">
                AI-driven grading (Low, Medium, High) that surfaces critical
                exposure before you sign.
              </p>
            </div>
            <div className="flex flex-col p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group dark:bg-navy-800 dark:border-navy-700 dark:shadow-none">
              <div className="h-12 w-12 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform dark:bg-purple-500/15 dark:text-purple-300">
                <span className="material-symbols-outlined text-3xl">
                  calendar_month
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 dark:text-slate-100">
                Obligation Tracking
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed dark:text-slate-400">
                Never miss a renewal date. Extract and track key dates and
                deliverables automatically.
              </p>
            </div>
            <div className="flex flex-col p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group dark:bg-navy-800 dark:border-navy-700 dark:shadow-none">
              <div className="h-12 w-12 rounded-lg bg-green-50 text-green-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform dark:bg-green-500/15 dark:text-green-300">
                <span className="material-symbols-outlined text-3xl">
                  gavel
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 dark:text-slate-100">
                Defensible AI Summaries
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed dark:text-slate-400">
                Generate plain-English summaries referenced directly to the
                source text for auditability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
