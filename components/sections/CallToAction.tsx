export default function CallToAction() {
  return (
    <section className="py-20 px-4 md:px-10">
      <div className="layout-container max-w-[1080px] mx-auto">
        <div className="relative rounded-3xl bg-primary px-6 py-16 text-center md:px-12 overflow-hidden shadow-2xl shadow-primary/20">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white to-transparent mix-blend-overlay"></div>
          <div className="relative z-10 flex flex-col items-center gap-6">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              Ready to clarify your contracts?
            </h2>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl">
              Join over 500+ enterprise teams using ClauseShield to secure their
              legal and financial operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
              <button className="h-12 px-8 rounded-xl bg-white text-primary font-bold text-lg hover:bg-slate-50 transition-colors shadow-xl">
                Get Started Free
              </button>
              <button className="h-12 px-8 rounded-xl bg-blue-700 border border-blue-500 text-white font-bold text-lg hover:bg-blue-600 transition-colors">
                Talk to Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
