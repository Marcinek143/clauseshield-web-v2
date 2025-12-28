export default function FounderConfidenceStrip() {
  return (
    <>
      <section className="py-16 bg-white border-y border-slate-200 dark:bg-navy-900 dark:border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 dark:text-slate-100">
            Enterprise-Grade Security &amp; Compliance
          </h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex flex-col items-center gap-2">
              <span
                className="material-symbols-outlined text-slate-400 dark:text-slate-500"
                style={{ fontSize: "48px" }}
              >
                lock
              </span>
              <span className="font-semibold text-slate-900 dark:text-slate-100">
                SOC2 Type II
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span
                className="material-symbols-outlined text-slate-400 dark:text-slate-500"
                style={{ fontSize: "48px" }}
              >
                encrypted
              </span>
              <span className="font-semibold text-slate-900 dark:text-slate-100">
                End-to-End Encryption
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span
                className="material-symbols-outlined text-slate-400 dark:text-slate-500"
                style={{ fontSize: "48px" }}
              >
                public
              </span>
              <span className="font-semibold text-slate-900 dark:text-slate-100">
                GDPR Compliant
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span
                className="material-symbols-outlined text-slate-400 dark:text-slate-500"
                style={{ fontSize: "48px" }}
              >
                verified_user
              </span>
              <span className="font-semibold text-slate-900 dark:text-slate-100">
                ISO 27001
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-background-light dark:bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mb-6 dark:text-slate-100">
            Ready to take control?
          </h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto dark:text-slate-400">
            Join the Founders and CFOs who are securing their revenue and
            operations with ClauseShield AI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white text-lg font-bold h-14 px-10 rounded-xl transition-all shadow-xl shadow-primary/30 dark:shadow-primary/40">
              Get Started Now
            </button>
            <button className="w-full sm:w-auto bg-transparent border border-slate-200 text-slate-900 hover:bg-white text-lg font-bold h-14 px-10 rounded-xl transition-all dark:border-navy-700 dark:text-slate-100 dark:hover:bg-navy-800">
              Talk to Sales
            </button>
          </div>
          <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
            No credit card required. SOC2 Compliant.
          </p>
        </div>
      </section>
    </>
  );
}
