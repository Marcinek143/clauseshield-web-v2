import { splitVelocityBars, splitVelocityLabels } from "./calculatorSplitData";

export default function CalculatorSplitVelocityCard() {
  return (
    <div className="p-8 bg-surface-container-lowest rounded-[2rem] shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-headline font-extrabold text-xl">
          Cost x Time Velocity
        </h3>
        <span className="material-symbols-outlined text-on-surface-variant">
          more_horiz
        </span>
      </div>
      <div className="relative h-48 flex items-end justify-between gap-2 px-2">
        {splitVelocityBars.map((bar, index) => (
          <div key={`${bar.className}-${index}`} className={bar.className}>
            {bar.tooltip ? (
              <div
                className={`absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-2 py-1 rounded text-[10px]${bar.showOnHover ? " opacity-0 group-hover:opacity-100 transition-opacity" : ""}`}
              >
                {bar.tooltip}
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
        {splitVelocityLabels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </div>
  );
}
