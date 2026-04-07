import { baseRateRows, splitContainerOptions } from "./calculatorSplitData";

export default function CalculatorSplitSidebar() {
  return (
    <section className="w-full md:w-[450px] lg:w-[500px] h-full bg-surface-container-low overflow-y-auto px-8 py-12 scrollbar-hide">
      <div className="max-w-md mx-auto">
        <div className="mb-10">
          <h1 className="font-headline font-extrabold text-3xl tracking-tight text-primary-container mb-2">
            Cost Intelligence
          </h1>
          <p className="text-on-surface-variant text-sm">
            Input container parameters to calculate live intelligent rates and
            risk assessments.
          </p>
        </div>
        <form className="space-y-8">
          <div className="space-y-4">
            <label className="font-headline font-bold text-xs uppercase tracking-widest text-on-surface-variant">
              Voyage Parameters
            </label>
            <div className="grid grid-cols-1 gap-4">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-3 text-secondary text-sm">
                  location_on
                </span>
                <input
                  className="w-full pl-10 pr-4 py-3 bg-surface-container-lowest rounded-xl border-none ring-1 ring-outline-variant/20 focus:ring-2 focus:ring-secondary/30 transition-all text-sm font-medium"
                  placeholder="Origin Port (e.g., Shanghai)"
                  type="text"
                />
              </div>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-3 text-secondary text-sm">
                  location_on
                </span>
                <input
                  className="w-full pl-10 pr-4 py-3 bg-surface-container-lowest rounded-xl border-none ring-1 ring-outline-variant/20 focus:ring-2 focus:ring-secondary/30 transition-all text-sm font-medium"
                  placeholder="Destination Port (e.g., Rotterdam)"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <label className="font-headline font-bold text-xs uppercase tracking-widest text-on-surface-variant">
              Container Specification
            </label>
            <div className="grid grid-cols-2 gap-4">
              <select className="w-full px-4 py-3 bg-surface-container-lowest rounded-xl border-none ring-1 ring-outline-variant/20 focus:ring-2 focus:ring-secondary/30 transition-all text-sm font-medium appearance-none">
                {splitContainerOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
              <input
                className="w-full px-4 py-3 bg-surface-container-lowest rounded-xl border-none ring-1 ring-outline-variant/20 focus:ring-2 focus:ring-secondary/30 transition-all text-sm font-medium"
                placeholder="Quantity"
                type="number"
              />
            </div>
          </div>
          <div className="space-y-4">
            <label className="font-headline font-bold text-xs uppercase tracking-widest text-on-surface-variant">
              Base Rates &amp; Fees
            </label>
            <div className="space-y-4">
              {baseRateRows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl ring-1 ring-outline-variant/10"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary">
                      {row.icon}
                    </span>
                    <span className="text-sm font-medium">{row.label}</span>
                  </div>
                  <input
                    className="w-24 text-right bg-transparent border-none focus:ring-0 font-bold text-primary"
                    type="text"
                    value={row.value}
                    readOnly
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-3 pt-4">
            <label className="flex items-center justify-between p-4 bg-primary/5 rounded-xl cursor-pointer group hover:bg-primary/10 transition-colors">
              <span className="text-sm font-semibold text-primary-container">
                Apply Smart-Clause Protection
              </span>
              <input
                checked
                className="rounded text-secondary focus:ring-secondary"
                readOnly
                type="checkbox"
              />
            </label>
            <label className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl cursor-pointer border border-outline-variant/10">
              <span className="text-sm font-medium text-on-surface-variant">
                Carbon Offset Protocol
              </span>
              <input
                className="rounded text-secondary focus:ring-secondary"
                type="checkbox"
              />
            </label>
          </div>
          <button
            className="w-full py-4 bg-primary text-on-primary rounded-xl font-headline font-extrabold text-lg flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all"
            type="button"
          >
            <span className="material-symbols-outlined">analytics</span>
            Recalculate Insight
          </button>
        </form>
      </div>
    </section>
  );
}
