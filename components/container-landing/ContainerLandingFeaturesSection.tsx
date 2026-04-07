import Link from "next/link";

export default function ContainerLandingFeaturesSection() {
  return (
    <section className="bg-surface-container-low py-32 px-6 md:px-12">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-16">
          <h2 className="font-headline text-3xl font-bold mb-4">
            Logistics Command Center
          </h2>
          <p className="text-on-surface-variant">
            Intelligent tools designed for the modern supply chain
            professional.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-8 shadow-sm ghost-border flex flex-col md:flex-row gap-12 items-center overflow-hidden">
            <div className="flex-1">
              <div className="w-12 h-12 bg-secondary-fixed rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-on-secondary-fixed">
                  calculate
                </span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4">
                Demurrage Calculator
              </h3>
              <p className="text-on-surface-variant mb-6">
                Instantly calculate port storage and demurrage fees across 500+
                global terminals. Automated tariff updates ensure 99.9%
                accuracy.
              </p>
              <Link
                className="inline-flex items-center text-secondary font-semibold hover:gap-2 transition-all"
                href="/calculator/compact"
              >
                Try it now{" "}
                <span className="material-symbols-outlined ml-1">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="flex-1 w-full bg-surface-container-low rounded-lg p-6 relative overflow-hidden">
              <div className="space-y-4">
                <div className="h-8 bg-surface-container-lowest rounded-md w-3/4 animate-pulse" />
                <div className="h-8 bg-surface-container-lowest rounded-md w-1/2 animate-pulse" />
                <div className="h-8 bg-surface-container-lowest rounded-md w-5/6 animate-pulse" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent" />
            </div>
          </div>
          <div className="md:col-span-4 bg-surface-container-lowest rounded-xl p-8 shadow-sm ghost-border">
            <div className="w-12 h-12 bg-primary-fixed rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-on-primary-fixed">
                lock_clock
              </span>
            </div>
            <h3 className="font-headline text-xl font-bold mb-3">
              Detention Calculator
            </h3>
            <p className="text-on-surface-variant text-sm">
              Monitor empty return deadlines and prevent costly detention
              charges with predictive analytics.
            </p>
          </div>
          <div className="md:col-span-4 bg-surface-container-lowest rounded-xl p-8 shadow-sm ghost-border">
            <div className="w-12 h-12 bg-secondary-fixed rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-on-secondary-fixed">
                inventory_2
              </span>
            </div>
            <h3 className="font-headline text-xl font-bold mb-3">
              Storage Estimator
            </h3>
            <p className="text-on-surface-variant text-sm">
              Warehouse and off-dock storage fee forecasting based on real-time
              capacity and regional rates.
            </p>
          </div>
          <div className="md:col-span-8 bg-primary rounded-xl p-8 shadow-xl relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-6">
                <span
                  className="material-symbols-outlined text-white"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  location_on
                </span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-white mb-4">
                Container Tracking
              </h3>
              <p className="text-slate-400 mb-6 max-w-md">
                Global visibility with satellite AIS data. Real-time alerts for
                ETA changes, transshipment delays, and port congestion.
              </p>
              <Link
                className="bg-white text-primary px-6 py-2 rounded-lg font-bold hover:bg-secondary-fixed transition-colors inline-block"
                href="/tracking"
              >
                Launch Tracker
              </Link>
            </div>
            <div className="absolute top-0 right-0 h-full w-1/2 opacity-20 group-hover:opacity-40 transition-opacity">
              <img
                alt="Abstract digital map with glowing blue network lines connecting global trade hubs on a dark background"
                className="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuALdNea-IyHSxSmXOc4FkPO5MMmh3snZYu4AL7hwsl2Ma7NCgwgm6w-F4tx2UDnwIMi-LzNqC-d1SsM9vbsNmXs-IdkhDKzT0ZuKmJxnF-H1fmJ4iepldYDHNffYvJZB29sYbiH8DDPC6j_IXGJJyAr3XwlpnSmd14ASRznNUELd_sx0Un4SeubuO3jul4WTNgncVFislHiAxpX5dRWiP50qF4L96Ba0v-o6PlZFX_sxbZ8V9PsUZdNPSIuZkoxG8up4e_8Ot6YWt0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
