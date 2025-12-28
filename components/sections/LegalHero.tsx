export default function LegalHero() {
  return (
    <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 dark:bg-gradient-to-b dark:from-navy-900 dark:via-navy-900 dark:to-navy-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary w-fit dark:border-primary/30 dark:bg-primary/10">
              <span className="material-symbols-outlined text-[18px]">
                verified_user
              </span>
              Trusted by General Counsel
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1] dark:text-slate-100">
              See Contract Risk Clearly—Before It Becomes Exposure
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg dark:text-slate-400">
              Accelerate review cycles, eliminate bottlenecks, and ensure 100%
              compliance with the unified AI platform built for the modern legal
              enterprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <button className="h-12 px-8 rounded-xl bg-primary text-white font-bold hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20 dark:shadow-primary/30">
                Analyze a Contract
              </button>
              <button className="h-12 px-8 rounded-xl border border-slate-200 bg-white text-slate-900 font-bold hover:bg-gray-50 transition-colors dark:bg-navy-800 dark:border-navy-700 dark:text-slate-100 dark:hover:bg-navy-700">
                Watch Product Tour
              </button>
            </div>
            <div className="flex items-center gap-4 text-sm text-slate-600 mt-4 dark:text-slate-400">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  check_circle
                </span>
                <span>SOC2 Type II Certified</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  check_circle
                </span>
                <span>GDPR Compliant</span>
              </div>
            </div>
          </div>
          <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white group dark:bg-navy-800 dark:border-navy-700">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50/50 dark:from-navy-800 dark:to-navy-900"></div>
            <div className="absolute inset-0 bg-[url('https://placeholder.pics/svg/20')] opacity-[0.03] dark:opacity-[0.05]"></div>
            <div
              className="absolute inset-4 sm:inset-8 bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden flex flex-col dark:bg-navy-900 dark:border-navy-700"
              data-alt="Dashboard interface showing contract analysis with sidebar highlighting risk factors"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD8yWln0nip91x-S_rt1FvvVBSLYopV8dPnaYmNLb571Ag0SUDe_h8aVpBcLWVJLuFlTfgzK6NNFs8huSsonun5lyGgAMuj_xfP6_dDhHA6HP5Y7L6PemW5Jwe4X7DZxYV2uBDucT5pIKqHv4EefPzBw0dmbqDDHOCBvyV_JmeT3-LS4Gzrxh6zkWFSuu-_h4EPjYXAFn4F1lIvUIfaXT2LVaUKq_4QlaimQsa_W6YuRfqgmMyrEkoIxK8gMdLXgqBk7caPv_urWA')",
                backgroundSize: "cover",
                backgroundPosition: "top center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent dark:from-navy-900/95 dark:via-navy-900/60 dark:to-navy-900/30"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur rounded-lg border border-slate-200 shadow-sm dark:bg-navy-900/95 dark:border-navy-700">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-red-500">
                    warning
                  </span>
                  <span className="font-bold text-slate-900 dark:text-slate-100">
                    High Risk Detected
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Indemnity clause uncapped. Recommended action: Limit liability
                  to 12 months fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
