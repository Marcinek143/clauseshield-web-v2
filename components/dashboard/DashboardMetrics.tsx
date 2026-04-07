export default function DashboardMetrics() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div className="bg-surface-container-lowest rounded-xl p-8 ghost-border flex flex-col justify-between min-h-[180px]">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 block">
            Active Logistics
          </span>
          <h3 className="text-5xl font-extrabold headline-font text-primary">
            142
          </h3>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <span className="flex items-center text-secondary font-semibold text-sm">
            <span className="material-symbols-outlined text-sm mr-1">
              trending_up
            </span>
            +12%
          </span>
          <span className="text-on-surface-variant text-sm">
            vs last month
          </span>
        </div>
      </div>
      <div className="bg-surface-container-lowest rounded-xl p-8 ghost-border flex flex-col justify-between min-h-[180px]">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 block">
            Estimated Total Cost
          </span>
          <h3 className="text-5xl font-extrabold headline-font text-primary">
            $418.5k
          </h3>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <span className="flex items-center text-error font-semibold text-sm">
            <span className="material-symbols-outlined text-sm mr-1">
              trending_up
            </span>
            +4.2%
          </span>
          <span className="text-on-surface-variant text-sm">
            market variance
          </span>
        </div>
      </div>
      <div className="bg-primary-container rounded-xl p-8 flex flex-col justify-between min-h-[180px] text-white">
        <div>
          <div className="flex justify-between items-start">
            <span className="text-xs font-bold uppercase tracking-widest text-on-primary-container mb-4 block">
              Expiry Alerts
            </span>
            <span
              className="material-symbols-outlined text-secondary-container"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              warning
            </span>
          </div>
          <h3 className="text-5xl font-extrabold headline-font">08</h3>
        </div>
        <p className="text-sm text-on-primary-container mt-4">
          Containers nearing free time limit ( &lt; 48h )
        </p>
      </div>
    </section>
  );
}
