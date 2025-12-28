export default function FinanceHero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="flex flex-col gap-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3 py-1 w-fit dark:bg-primary/10 dark:border-primary/30">
              <span className="flex size-2 rounded-full bg-primary"></span>
              <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                For Finance Leaders
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1] dark:text-slate-100">
              Stop{" "}
              <span className="dark:text-primary">Revenue Leakage</span> Before It
              Hits <span className="dark:text-primary">Your P&amp;L</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg dark:text-slate-400">
              The only AI platform that unifies contract intelligence with invoice
              analysis to prevent overpayments automatically. Protect EBITDA with
              audit-ready precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-bold text-white shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all dark:shadow-blue-500/30">
                Calculate Your ROI
              </button>
              <button className="flex items-center justify-center rounded-xl bg-white border border-slate-200 px-8 py-4 text-base font-bold text-slate-700 hover:bg-slate-50 transition-all dark:bg-navy-800 dark:border-navy-700 dark:text-slate-100 dark:hover:bg-navy-700">
                View Interactive Demo
              </button>
            </div>
            <div className="flex items-center gap-4 text-sm text-slate-500 pt-2 dark:text-slate-400">
              <div className="flex -space-x-2">
                <div
                  className="size-8 rounded-full border-2 border-white bg-slate-200 bg-cover dark:border-navy-900 dark:bg-navy-700"
                  data-alt="Portrait of a finance professional"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBZGoDOllPfVUYIl-u3bQJJDlf8uiZT3_QYYXcxBy7ICo_dvVQ0u1LozhVFP7GE7BQG63qhAXlPNTWa8qdKywxrSfNIotSh_5L5CQMCemldbSIhK2x9U6HeCWp0LIvoPAGVOBxgyVSodgdEPEOR8dBvBwzsWmvNPjxbsXVkFTmpg8TGfjkO_eINuVzuTj3nhiMrTIgb2PXObMxCYx0WRRH6dlyMmdJCn0lTZhp9_2ZwLY2drPhwRlJCkq1nT2UBhYorgP3bRSVMmA')",
                  }}
                ></div>
                <div
                  className="size-8 rounded-full border-2 border-white bg-slate-200 bg-cover dark:border-navy-900 dark:bg-navy-700"
                  data-alt="Portrait of a CFO"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAriiQ5KWoTN4TeAQcCag6PWV6FWIXoijZTR8G6xgFOusv2Bb61uawwbEXFmjdRpSOW74wrKLliU0uGPRkpU5M0gX8b3Rh9ndrkXhlvKrjyZ7trnbfc9iCXTBq6ixnsCtRy37NEPsdL_5WjtVwshf1Gvd-X-2Y5f0im_8nvPWYcYF2iOg4drWH19rQd2hJf_kVQQaZZQTrkU67RibtoDx4OpLPMoX8dUihmkXFHI_1whc8HBghDnad6sxF5OhdqDNAVu9G4eeLIFA')",
                  }}
                ></div>
                <div
                  className="size-8 rounded-full border-2 border-white bg-slate-200 bg-cover dark:border-navy-900 dark:bg-navy-700"
                  data-alt="Portrait of a legal ops manager"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDvl4CFceswGuboEMlu8aPYN3l_RjapkNnQqCwzCN6Jj4wjYcFwL127p0ENi9SUJqZr9t6_l4Iciw2nJzZTBa7rlJ6mYJ_mKxf2YJQdoQVGt4f8rQn8FWGaEGzCk2XT2OEsQHQfx5aWP9KCnkSg2iuB7LsW936Qk9DXUhg2PCXiVPOkdmNaHVpkrz8DCEnf1yekxyawuyo3l1ufgxd9tQisps_O3cCtLUgUtYPAytYB3mKTtD8VaTiBfm4uV-tkNMAEsViSnAUyHQ')",
                  }}
                ></div>
              </div>
              <p>Trusted by 500+ Finance Leaders</p>
            </div>
          </div>
          <div className="relative w-full aspect-[4/3] lg:aspect-square bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden group dark:bg-navy-800 dark:border-navy-700">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-100 p-6 sm:p-10 flex flex-col dark:from-navy-800 dark:to-navy-900">
              <div className="flex items-center justify-between mb-8">
                <div className="h-4 w-32 bg-slate-200 rounded-full dark:bg-navy-700/70"></div>
                <div className="flex gap-2">
                  <div className="size-3 rounded-full bg-red-400"></div>
                  <div className="size-3 rounded-full bg-yellow-400"></div>
                  <div className="size-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              <div className="flex-1 w-full bg-white rounded-xl shadow-sm border border-slate-100 p-6 mb-6 flex flex-col justify-between dark:bg-navy-900 dark:border-navy-700">
                <div className="flex justify-between items-end h-32 sm:h-48 gap-4 px-2">
                  <div className="w-full bg-blue-100 rounded-t-lg h-[40%] relative group-hover:h-[45%] transition-all duration-700 dark:bg-navy-700/70"></div>
                  <div className="w-full bg-blue-100 rounded-t-lg h-[60%] relative group-hover:h-[65%] transition-all duration-700 dark:bg-navy-700/70"></div>
                  <div className="w-full bg-blue-100 rounded-t-lg h-[30%] relative group-hover:h-[35%] transition-all duration-700 dark:bg-navy-700/70"></div>
                  <div className="w-full bg-primary rounded-t-lg h-[85%] relative shadow-lg shadow-blue-500/20 group-hover:h-[90%] transition-all duration-700 dark:shadow-blue-500/30">
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      $1.2M Saved
                    </div>
                  </div>
                  <div className="w-full bg-blue-100 rounded-t-lg h-[50%] relative group-hover:h-[55%] transition-all duration-700 dark:bg-navy-700/70"></div>
                </div>
                <div className="h-4 w-full bg-slate-50 mt-4 rounded dark:bg-navy-700"></div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1 bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3 dark:bg-navy-800 dark:border-navy-700">
                  <div className="size-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 dark:bg-red-900/30 dark:text-red-300">
                    <span className="material-symbols-outlined text-lg">
                      warning
                    </span>
                  </div>
                  <div>
                    <div className="h-3 w-16 bg-slate-200 rounded-full mb-1 dark:bg-navy-700/70"></div>
                    <div className="h-2 w-24 bg-slate-100 rounded-full dark:bg-navy-700/70"></div>
                  </div>
                </div>
                <div className="flex-1 bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3 dark:bg-navy-800 dark:border-navy-700">
                  <div className="size-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 dark:bg-green-900/30 dark:text-green-300">
                    <span className="material-symbols-outlined text-lg">
                      check_circle
                    </span>
                  </div>
                  <div>
                    <div className="h-3 w-16 bg-slate-200 rounded-full mb-1 dark:bg-navy-700/70"></div>
                    <div className="h-2 w-24 bg-slate-100 rounded-full dark:bg-navy-700/70"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
