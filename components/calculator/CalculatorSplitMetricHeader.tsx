import { splitMetricCards } from "./calculatorSplitData";

export default function CalculatorSplitMetricHeader() {
  const projectionCard = splitMetricCards[0];
  const confidenceCard = splitMetricCards[1];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 p-8 bg-gradient-to-br from-primary to-primary-container rounded-[2rem] text-on-primary relative overflow-hidden group">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-secondary-container/20 text-secondary-fixed-dim text-[10px] font-bold uppercase tracking-widest">
              {projectionCard.badge}
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-6xl font-headline font-extrabold tracking-tighter">
              {projectionCard.total}
            </span>
            <span className="text-secondary-fixed-dim font-bold text-lg">
              {projectionCard.change}
            </span>
          </div>
          <p className="mt-4 text-on-primary-container text-sm leading-relaxed max-w-xs">
            {projectionCard.description}
          </p>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-secondary/10 to-transparent flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity">
          <span
            className="material-symbols-outlined text-[160px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            {projectionCard.icon}
          </span>
        </div>
      </div>
      <div className="p-8 bg-surface-container-lowest rounded-[2rem] border border-outline-variant/10 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
              {confidenceCard.label}
            </span>
            <span className="text-secondary font-bold">
              {confidenceCard.value}
            </span>
          </div>
          <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
            <div className="w-[94%] h-full bg-secondary" />
          </div>
        </div>
        <div className="space-y-2">
          <span className="text-xs font-bold text-on-surface-variant">
            {confidenceCard.arrivalLabel}
          </span>
          <p className="text-xl font-headline font-bold text-primary-container">
            {confidenceCard.arrivalValue}
          </p>
        </div>
      </div>
    </div>
  );
}
