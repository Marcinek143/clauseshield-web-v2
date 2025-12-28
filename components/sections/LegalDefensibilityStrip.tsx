export default function LegalDefensibilityStrip() {
  return (
    <>
      <section className="py-20 bg-white dark:bg-navy-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-3/5">
              <div
                className="relative rounded-2xl bg-background-light border border-slate-200 shadow-2xl overflow-hidden aspect-[16/10] dark:bg-navy-800 dark:border-navy-700"
                data-alt="Detailed view of the Risk Scoring Dashboard showing a list of contracts with risk levels"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center dark:opacity-60"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCzbbqs4xtvuMQZ53qPmuLunuz1zV4kDerE81_Aq3zkUs4QzIeXgSWXByEO9D5flkq4j8E7VQEeeFvVRiFlqw3uAdKAh48pPfsLk1XUJppeFJbiTLJMWSWok7zM6btm8AtHu2w7prddACH-O_CD93tlNxmc2VEWYGU_VfSp2ncnJ_pO0n5Lu5S8aHmnHl38vbLjAg8a_xwgPVp1NAXnObYNyRG3c3kkC6YdBA-4Xon5SLS-OcnZ_y4cbnJhfGkump4pNf--DFuA8w')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-white/90 backdrop-blur-sm p-6 sm:p-8 flex flex-col dark:bg-navy-900/95">
                  <div className="flex justify-between items-center mb-6 border-b border-slate-200 pb-4 dark:border-navy-700">
                    <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">
                      Contract Risk Analysis
                    </h4>
                    <div className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold uppercase tracking-wide dark:bg-red-500/15 dark:text-red-300">
                      High Exposure Detected
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-white border border-red-200 shadow-sm dark:bg-navy-800 dark:border-red-900/40">
                      <span className="material-symbols-outlined text-red-500 mt-1">
                        error
                      </span>
                      <div>
                        <p className="font-bold text-slate-900 text-sm dark:text-slate-100">
                          Unlimited Indemnity
                        </p>
                        <p className="text-xs text-slate-600 mt-1 dark:text-slate-400">
                          Clause 14.2 contains uncapped liability for IP
                          infringement. Standard playbook requires a 2x cap.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-white border border-yellow-200 shadow-sm dark:bg-navy-800 dark:border-yellow-900/40">
                      <span className="material-symbols-outlined text-yellow-600 mt-1">
                        warning
                      </span>
                      <div>
                        <p className="font-bold text-slate-900 text-sm dark:text-slate-100">
                          Payment Terms Deviation
                        </p>
                        <p className="text-xs text-slate-600 mt-1 dark:text-slate-400">
                          Net 90 detected. Standard policy is Net 30 or Net 45.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-white border border-slate-200 shadow-sm opacity-60 dark:bg-navy-800 dark:border-navy-700">
                      <span className="material-symbols-outlined text-green-600 mt-1">
                        check_circle
                      </span>
                      <div>
                        <p className="font-bold text-slate-900 text-sm dark:text-slate-100">
                          Governing Law: New York
                        </p>
                        <p className="text-xs text-slate-600 mt-1 dark:text-slate-400">
                          Compliant with jurisdiction requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/5 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm">
                <span className="material-symbols-outlined">analytics</span>
                Interactive Risk Dashboard
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight dark:text-slate-100">
                Visualize Red-Flag Clauses in Real-Time
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Stop hunting for needles in haystacks. Our dashboard highlights
                critical issues with color-coded severity badges while the
                document viewer pinpoints exact locations in the text.
              </p>
              <ul className="flex flex-col gap-4 mt-2">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    check
                  </span>
                  <span className="text-slate-900 font-medium dark:text-slate-100">
                    Instant comparison against your Playbook
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    check
                  </span>
                  <span className="text-slate-900 font-medium dark:text-slate-100">
                    Drill down into specific clause categories
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    check
                  </span>
                  <span className="text-slate-900 font-medium dark:text-slate-100">
                    Export risk reports for stakeholders
                  </span>
                </li>
              </ul>
              <button className="mt-4 w-fit h-12 px-6 rounded-lg bg-white border border-slate-200 text-slate-900 font-bold hover:bg-gray-50 transition-colors shadow-sm dark:bg-navy-800 dark:border-navy-700 dark:text-slate-100 dark:hover:bg-navy-700">
                Explore the Dashboard
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-background-light border-y border-slate-200 dark:bg-navy-900 dark:border-navy-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4 dark:text-slate-100">
              From Upload to Insight in Seconds
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Our streamlined workflow integrates seamlessly into your existing
              legal operations.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-slate-200 to-transparent -z-10 dark:via-navy-700"></div>
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-24 h-24 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm relative z-10 dark:bg-navy-800 dark:border-navy-700">
                <span className="material-symbols-outlined text-4xl text-primary">
                  cloud_upload
                </span>
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm dark:bg-primary">
                  1
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">
                  Upload Contracts
                </h3>
                <p className="text-sm text-slate-600 mt-2 dark:text-slate-400">
                  Drag &amp; drop PDFs, Word docs, or connect directly to your
                  CLM or Drive.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-24 h-24 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm relative z-10 dark:bg-navy-800 dark:border-navy-700">
                <span className="material-symbols-outlined text-4xl text-primary">
                  psychology
                </span>
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm dark:bg-primary">
                  2
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">
                  AI Analysis
                </h3>
                <p className="text-sm text-slate-600 mt-2 dark:text-slate-400">
                  The engine parses text, identifying clauses and flagging risks
                  against your rules.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-24 h-24 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm relative z-10 dark:bg-navy-800 dark:border-navy-700">
                <span className="material-symbols-outlined text-4xl text-primary">
                  assignment_turned_in
                </span>
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm dark:bg-primary">
                  3
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">
                  Actionable Report
                </h3>
                <p className="text-sm text-slate-600 mt-2 dark:text-slate-400">
                  Get a clean summary, risk score, and redlined suggestions ready
                  for review.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white overflow-hidden dark:bg-navy-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2">
              <div className="bg-background-dark rounded-xl p-6 shadow-2xl font-mono text-sm text-gray-300 relative border border-gray-700 dark:bg-navy-800 dark:border-navy-700 dark:text-slate-200">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-3 opacity-90">
                  <div className="flex gap-4 border-b border-gray-700 pb-2 mb-2 text-xs uppercase tracking-wider text-gray-500 dark:border-navy-700 dark:text-slate-500">
                    <span className="w-24">Timestamp</span>
                    <span className="flex-1">Action</span>
                    <span className="w-20">User</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-blue-400 w-24">10:42:01</span>
                    <span className="flex-1">Contract_A_v2 uploaded</span>
                    <span className="text-gray-500 w-20 dark:text-slate-500">
                      j.doe
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-blue-400 w-24">10:42:05</span>
                    <span className="flex-1">
                      Analysis complete. Risk:{" "}
                      <span className="text-yellow-400">MEDIUM</span>
                    </span>
                    <span className="text-gray-500 w-20 dark:text-slate-500">
                      System
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-blue-400 w-24">10:45:12</span>
                    <span className="flex-1">Clause override: Force Majeure</span>
                    <span className="text-gray-500 w-20 dark:text-slate-500">
                      s.smith
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-blue-400 w-24">11:02:30</span>
                    <span className="flex-1">Approval granted</span>
                    <span className="text-gray-500 w-20 dark:text-slate-500">
                      m.legal
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-blue-400 w-24">11:02:31</span>
                    <span className="flex-1 text-green-400">
                      Log hash generated: 0x7f...3a2
                    </span>
                    <span className="text-gray-500 w-20 dark:text-slate-500">
                      System
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm">
                <span className="material-symbols-outlined">history_edu</span>
                Audit Trail &amp; Governance
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight dark:text-slate-100">
                Total Visibility, Zero Guesswork
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Every action, edit, and approval is immutably logged. Maintain a
                complete audit trail for compliance, due diligence, and internal
                governance.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-background-light rounded-lg border border-slate-200 dark:bg-navy-800 dark:border-navy-700">
                  <h4 className="font-bold text-slate-900 mb-1 dark:text-slate-100">
                    Version Control
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Track changes across every iteration automatically.
                  </p>
                </div>
                <div className="p-4 bg-background-light rounded-lg border border-slate-200 dark:bg-navy-800 dark:border-navy-700">
                  <h4 className="font-bold text-slate-900 mb-1 dark:text-slate-100">
                    Access Logs
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    See who viewed or edited sensitive documents.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-slate-900 text-white dark:bg-navy-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold mb-4">
                Enterprise-Grade Security
              </h2>
              <p className="text-gray-400 mb-6 dark:text-slate-400">
                Your data is encrypted at rest and in transit. We strictly
                adhere to a "zero-training" policy—your confidential contracts
                never train our public models.
              </p>
              <a
                className="text-primary font-bold hover:text-white transition-colors flex items-center gap-2"
                href="#"
              >
                Read our Security Whitepaper{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 opacity-80">
              <div className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-4xl">
                  lock_person
                </span>
                <span className="text-xs font-bold uppercase tracking-widest">
                  SOC2 Type II
                </span>
              </div>
              <div className="w-px h-16 bg-gray-700 hidden sm:block dark:bg-navy-700"></div>
              <div className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-4xl">
                  security
                </span>
                <span className="text-xs font-bold uppercase tracking-widest">
                  ISO 27001
                </span>
              </div>
              <div className="w-px h-16 bg-gray-700 hidden sm:block dark:bg-navy-700"></div>
              <div className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-4xl">
                  policy
                </span>
                <span className="text-xs font-bold uppercase tracking-widest">
                  GDPR Ready
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white relative overflow-hidden dark:bg-navy-900">
        <div
          className="absolute inset-0 bg-[url('https://placeholder.pics/svg/100')] opacity-[0.02] dark:opacity-0"
          data-alt="Subtle geometric pattern background"
        ></div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center gap-8">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight dark:text-slate-100">
            Ready to secure your contract lifecycle?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl dark:text-slate-400">
            Join hundreds of legal teams using ClauseShield AI to reduce risk
            and accelerate business velocity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="h-14 px-8 rounded-xl bg-primary text-white text-lg font-bold hover:bg-primary-hover transition-colors shadow-xl shadow-primary/20 w-full sm:w-auto dark:shadow-primary/30">
              Get a Custom Demo
            </button>
            <button className="h-14 px-8 rounded-xl bg-background-light border border-slate-200 text-slate-900 text-lg font-bold hover:bg-gray-100 transition-colors w-full sm:w-auto dark:bg-navy-800 dark:border-navy-700 dark:text-slate-100 dark:hover:bg-navy-700">
              View Pricing
            </button>
          </div>
          <p className="text-sm text-slate-600 mt-4 dark:text-slate-400">
            No credit card required for trial • SOC2 Compliant
          </p>
        </div>
      </section>
    </>
  );
}
