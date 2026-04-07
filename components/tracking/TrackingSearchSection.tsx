import { shippingLineOptions } from "./trackingData";

export default function TrackingSearchSection() {
  return (
    <section className="mb-12">
      <h1 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight text-primary mb-8 max-w-2xl leading-tight">
        Global Asset <span className="text-secondary">Intelligence</span>.
      </h1>
      <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2 ml-1">
              Container Number
            </label>
            <div className="flex items-center bg-surface-container-high rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-secondary/30 transition-all">
              <span className="material-symbols-outlined text-on-surface-variant mr-3">
                box
              </span>
              <input
                className="bg-transparent border-none focus:ring-0 w-full text-sm font-medium text-on-surface placeholder:text-outline"
                placeholder="MSCU1234567"
                type="text"
              />
            </div>
          </div>
          <div className="relative">
            <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2 ml-1">
              Shipping Line
            </label>
            <div className="flex items-center bg-surface-container-high rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-secondary/30 transition-all">
              <span className="material-symbols-outlined text-on-surface-variant mr-3">
                directions_boat
              </span>
              <select className="bg-transparent border-none focus:ring-0 w-full text-sm font-medium text-on-surface">
                {shippingLineOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex items-end">
            <button
              className="w-full h-[48px] bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              type="button"
            >
              <span className="material-symbols-outlined">analytics</span>
              Track Shipment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
