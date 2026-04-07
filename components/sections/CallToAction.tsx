import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-20 px-4 md:px-10">
      <div className="layout-container max-w-[1080px] mx-auto">
        <div className="relative rounded-3xl bg-primary px-6 py-16 text-center md:px-12 overflow-hidden shadow-2xl shadow-primary/20">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white to-transparent mix-blend-overlay"></div>
          <div className="relative z-10 flex flex-col items-center gap-6">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              Contract AI is launching in 2026
            </h2>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl">
              Advanced contract analysis and invoice processing is coming soon.
            </p>
            <p className="text-blue-100/80 text-sm max-w-2xl">
              Currently available: Container Intelligence for demurrage,
              detention, and tracking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
              <Link
                href="/container"
                className="h-12 px-8 rounded-xl bg-white text-primary font-bold text-lg hover:bg-slate-50 transition-colors shadow-xl inline-flex items-center justify-center"
              >
                Explore Container Intelligence
              </Link>
              <button
                className="h-12 px-8 rounded-xl bg-blue-700 border border-blue-500 text-white font-bold text-lg transition-colors inline-flex items-center justify-center opacity-50 cursor-not-allowed"
                type="button"
                disabled
                title="This feature is not yet available"
              >
                Get Started Free
              </button>
              <button
                className="h-12 px-8 rounded-xl bg-blue-700 border border-blue-500 text-white font-bold text-lg transition-colors inline-flex items-center justify-center opacity-50 cursor-not-allowed"
                type="button"
                disabled
                title="This feature is not yet available"
              >
                Talk to Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
