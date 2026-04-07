import { summaryItems } from "./calculatorCompactData";

export default function CalculatorSummaryCard() {
  return (
    <section className="md:col-span-3 bg-primary-container rounded-lg p-8 text-white flex flex-col shadow-2xl shadow-primary-container/20">
      <div className="flex items-center gap-3 mb-10">
        <span
          className="material-symbols-outlined text-secondary-fixed-dim"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          analytics
        </span>
        <h3 className="font-headline font-bold text-lg tracking-tight">
          Total Cost Analysis
        </h3>
      </div>
      <div className="space-y-6 flex-grow">
        {summaryItems.map((item) => (
          <div
            key={item.label}
            className={`flex justify-between items-end${item.noBorder ? "" : " border-b border-white/10 pb-4"}`}
          >
            <span
              className={item.labelClassName ?? "text-sm font-medium text-on-primary-container"}
            >
              {item.label}
            </span>
            <span
              className={item.valueClassName ?? "text-xl font-headline font-bold"}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-12 pt-8 border-t border-white/20">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-primary-container mb-2 text-center">
          Estimated Grand Total
        </p>
        <div className="text-5xl font-headline font-extrabold text-center tracking-tighter mb-8">
          $39,570
          <span className="text-2xl text-on-primary-container font-medium">
            .00
          </span>
        </div>
        <button
          className="w-full py-4 bg-secondary text-white rounded-lg font-bold text-sm hover:bg-secondary-container hover:text-on-secondary-container transition-all active:scale-95"
          type="button"
        >
          PROCEED TO BOOKING
        </button>
        <p className="text-[10px] text-center mt-4 text-white/40 leading-relaxed uppercase tracking-widest">
          Pricing accurate as of 23:45 UTC. Rates subject to dynamic shift.
        </p>
      </div>
    </section>
  );
}
