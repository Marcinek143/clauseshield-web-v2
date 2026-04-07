import Link from "next/link";

export default function ContainerLandingHeroSection() {
  return (
    <section className="relative pt-24 pb-32 px-6 md:px-12 max-w-screen-2xl mx-auto overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-fixed text-on-secondary-fixed rounded-full text-xs font-semibold mb-6">
            <span
              className="material-symbols-outlined text-sm"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              auto_awesome
            </span>
            AI-POWERED LOGISTICS INTELLIGENCE
          </div>
          <h1 className="font-headline text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-on-surface mb-8">
            Stop Overpaying <br />
            <span className="text-secondary">Demurrage.</span>
          </h1>
          <p className="text-on-surface-variant text-xl leading-relaxed max-w-xl mb-12">
            Calculate container costs instantly. Accurate demurrage, detention,
            and storage calculations in seconds with global terminal
            intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              className="px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-semibold rounded-xl shadow-lg shadow-primary/10 hover:translate-y-[-2px] transition-all text-center"
              href="/calculator/compact"
            >
              Start Calculation
            </Link>
            <Link
              className="px-8 py-4 bg-secondary-container text-on-secondary-container font-semibold rounded-xl hover:bg-secondary-container/80 transition-all text-center"
              href="/tracking"
            >
              Track Container
            </Link>
            <Link
              className="px-8 py-4 bg-surface-container-low text-primary font-semibold rounded-xl transition-all text-center"
              href="/dashboard"
            >
              Open Dashboard
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary-container/20 blur-[100px] rounded-full" />
          <div className="relative glass-card p-4 rounded-xl ghost-border overflow-hidden rotate-2 shadow-2xl">
            <img
              alt="High-angle wide shot of a modern automated container port with glowing blue tech overlays representing data flow"
              className="rounded-lg w-full aspect-[4/3] object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAiCJ8nBf4AVIc6OHo6f0fUa7zu3dQbboroXP_YYr3uKH-Uq1W6y2Z0EjeAvQgRmkGjqNjXl6fGdLdpreivzAZBXWBfMr2xJt_Ow2cK9TzEQ0IYjA-7b_KzJDldcGJEG4UnXK003SevgUVyqi5hzvLv5aZnOD2DHAOA6e_LxZGwhDfSsQkqfMvI9leSs_zGZSWKsDiWfs7MTqTzvoQ6o3zp_IFATfmvJO5-xWmW-tnn1Y5MhwJJK0FTx7JlBlNdfodONMUtVfkKio"
            />
            <div className="absolute bottom-12 left-12 p-6 glass-card rounded-xl border border-white/20 shadow-xl max-w-xs -rotate-2">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-3 h-3 bg-secondary rounded-full animate-pulse" />
                <span className="text-xs font-bold text-on-surface uppercase tracking-widest">
                  Live Monitoring
                </span>
              </div>
              <div className="text-2xl font-headline font-bold text-on-surface">
                $14,240.00
              </div>
              <div className="text-xs text-on-surface-variant">
                Estimated Storage Savings Today
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
