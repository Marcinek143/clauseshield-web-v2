import Link from "next/link";

export default function FinanceAuditStrip() {
  return (
    <>
      <section className="py-20 bg-white border-t border-slate-200 dark:bg-navy-900 dark:border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">
              The Workflow
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-slate-900 dark:text-slate-100">
              How It Works: The Audit Trail
            </h2>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0 dark:bg-navy-800"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              <div className="flex flex-col items-center text-center bg-white p-4 dark:bg-navy-800 dark:ring-1 dark:ring-navy-700 dark:ring-inset">
                <div className="size-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-lg mb-6 border-4 border-white dark:bg-navy-700 dark:border-navy-900">
                  <span className="material-symbols-outlined text-3xl">
                    upload_file
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 dark:text-slate-100">
                  1. Ingest Data
                </h3>
                <p className="text-slate-600 text-sm dark:text-slate-400">
                  Connect your ERP (NetSuite, SAP, Oracle) and upload contracts
                  securely.
                </p>
              </div>
              <div className="flex flex-col items-center text-center bg-white p-4 dark:bg-navy-800 dark:ring-1 dark:ring-navy-700 dark:ring-inset">
                <div className="size-16 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-blue-500/30 mb-6 border-4 border-white relative dark:border-navy-900">
                  <div className="absolute -top-2 -right-2 size-4 bg-green-400 rounded-full border-2 border-white dark:border-navy-900"></div>
                  <span className="material-symbols-outlined text-3xl">
                    psychology
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 dark:text-slate-100">
                  2. AI Analysis
                </h3>
                <p className="text-slate-600 text-sm dark:text-slate-400">
                  Our engine matches line items to contract terms and flags
                  anomalies in real-time.
                </p>
              </div>
              <div className="flex flex-col items-center text-center bg-white p-4 dark:bg-navy-800 dark:ring-1 dark:ring-navy-700 dark:ring-inset">
                <div className="size-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-lg mb-6 border-4 border-white dark:bg-navy-700 dark:border-navy-900">
                  <span className="material-symbols-outlined text-3xl">
                    gavel
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 dark:text-slate-100">
                  3. Audit &amp; Action
                </h3>
                <p className="text-slate-600 text-sm dark:text-slate-400">
                  Review discrepancies, approve payments with confidence, and
                  export audit logs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row dark:bg-navy-800">
            <div className="p-10 md:p-16 flex-1 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Quantifiable Impact
              </h2>
              <div className="space-y-8">
                <div>
                  <div className="flex items-end gap-3 mb-1">
                    <span className="text-5xl font-black text-white">12%</span>
                    <span className="text-green-400 font-bold mb-1 flex items-center">
                      <span className="material-symbols-outlined text-sm mr-1">
                        arrow_upward
                      </span>
                      Avg
                    </span>
                  </div>
                  <p className="text-slate-400 dark:text-slate-300">
                    Reduction in annual vendor spend through error detection.
                  </p>
                </div>
                <div className="w-full h-px bg-slate-700 dark:bg-navy-700"></div>
                <div>
                  <div className="flex items-end gap-3 mb-1">
                    <span className="text-5xl font-black text-white">100%</span>
                  </div>
                  <p className="text-slate-400 dark:text-slate-300">
                    Of line items audited, compared to 5% manual sampling.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-slate-800 p-10 flex items-center justify-center relative overflow-hidden dark:bg-navy-900">
              <div
                className="absolute inset-0 opacity-10 dark:opacity-5"
                style={{
                  backgroundImage:
                    "radial-gradient(#4b5563 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              ></div>
              <div className="relative w-full max-w-sm bg-white rounded-xl shadow-xl p-6 border border-slate-700/50 dark:bg-navy-800 dark:border-navy-700">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-bold text-slate-900 dark:text-slate-100">
                    Detected Risk
                  </h4>
                  <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded dark:bg-red-900/30 dark:text-red-200">
                    High Severity
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm border-b border-slate-100 pb-3 dark:border-navy-700">
                    <span className="text-slate-500 dark:text-slate-400">
                      Invoice ID
                    </span>
                    <span className="font-mono text-slate-900 dark:text-slate-100">
                      #INV-2024-001
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-slate-100 pb-3 dark:border-navy-700">
                    <span className="text-slate-500 dark:text-slate-400">
                      Vendor
                    </span>
                    <span className="font-medium text-slate-900 dark:text-slate-100">
                      Acme Services Ltd.
                    </span>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg border border-red-100 dark:bg-red-900/20 dark:border-red-900/40">
                    <div className="flex gap-2">
                      <span className="material-symbols-outlined text-red-600 text-sm mt-0.5 dark:text-red-300">
                        error
                      </span>
                      <div>
                        <p className="text-red-800 text-xs font-bold dark:text-red-200">
                          Duplicate Charge Detected
                        </p>
                        <p className="text-red-600 text-xs mt-1 dark:text-red-300">
                          Similar amount ($12,450) billed on Oct 12.
                        </p>
                      </div>
                    </div>
                  </div>
                  <button className="w-full py-2 bg-slate-900 text-white text-xs font-bold rounded dark:bg-navy-900 dark:ring-1 dark:ring-navy-700 dark:ring-inset">
                    View Audit Trail
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-background-light dark:bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-primary font-bold mb-4 bg-blue-50 px-4 py-2 rounded-full dark:bg-primary/10 dark:ring-1 dark:ring-primary/30 dark:ring-inset">
            <span className="material-symbols-outlined text-lg">security</span>
            <span className="text-sm">Enterprise Grade</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-12 dark:text-slate-100">
            Bank-Grade Security for Your Financial Data
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl border border-slate-200 dark:bg-navy-800 dark:border-navy-700">
              <span className="material-symbols-outlined text-4xl text-slate-400 dark:text-slate-400">
                verified_user
              </span>
              <span className="font-bold text-slate-700 dark:text-slate-200">
                SOC 2 Type II
              </span>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl border border-slate-200 dark:bg-navy-800 dark:border-navy-700">
              <span className="material-symbols-outlined text-4xl text-slate-400 dark:text-slate-400">
                lock
              </span>
              <span className="font-bold text-slate-700 dark:text-slate-200">
                End-to-End Encryption
              </span>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl border border-slate-200 dark:bg-navy-800 dark:border-navy-700">
              <span className="material-symbols-outlined text-4xl text-slate-400 dark:text-slate-400">
                gpp_good
              </span>
              <span className="font-bold text-slate-700 dark:text-slate-200">
                GDPR Compliant
              </span>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl border border-slate-200 dark:bg-navy-800 dark:border-navy-700">
              <span className="material-symbols-outlined text-4xl text-slate-400 dark:text-slate-400">
                admin_panel_settings
              </span>
              <span className="font-bold text-slate-700 dark:text-slate-200">
                Role-Based Access
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl p-10 md:p-16 text-center shadow-xl shadow-blue-500/20 relative overflow-hidden group dark:bg-gradient-to-br dark:from-blue-600 dark:to-blue-500 dark:shadow-blue-500/30">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-all duration-700"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 relative z-10">
              Ready to Audit Your Spend?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              Join forward-thinking CFOs who are stopping revenue leakage and
              automating compliance with ClauseShield AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link
                href="/request-demo?persona=finance"
                className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg inline-flex items-center justify-center"
              >
                Get a Personalized Demo
              </Link>
              <Link
                href="/for-legal"
                className="bg-blue-700 text-white border border-blue-500 px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition-colors inline-flex items-center justify-center"
              >
                Calculate Savings
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
