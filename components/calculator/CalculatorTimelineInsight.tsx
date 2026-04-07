import { timelineSteps } from "./calculatorCompactData";

export default function CalculatorTimelineInsight() {
  return (
    <div className="bg-surface-container-lowest rounded-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <span className="material-symbols-outlined text-secondary">timeline</span>
        <h3 className="font-headline font-bold text-lg text-primary">
          Timeline Variance
        </h3>
      </div>
      <div className="relative h-20 flex items-center px-2">
        <div className="absolute inset-x-2 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
          <div className="h-full w-[65%] bg-gradient-to-r from-secondary-fixed-dim to-secondary rounded-full" />
        </div>
        {timelineSteps.map((step) => (
          <div
            key={step.label}
            className="flex-1 flex flex-col items-center relative"
          >
            <div className={step.dotClassName} />
            <span
              className={
                step.labelClassName ??
                "text-[10px] font-bold text-on-surface-variant"
              }
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
