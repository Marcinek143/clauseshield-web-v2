import { journeySteps } from "./trackingData";

export default function LogisticsJourneySection() {
  return (
    <section className="mt-12 bg-surface-container-low rounded-xl p-8 border border-outline-variant/10">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-2xl font-headline font-bold text-primary">
          Logistics Journey
        </h2>
        <div className="flex gap-4">
          <button
            className="px-4 py-2 bg-surface-container-lowest text-primary text-xs font-bold rounded-lg border border-outline-variant/20 hover:bg-surface-container-high transition-colors"
            type="button"
          >
            Export Logs
          </button>
          <button
            className="px-4 py-2 bg-surface-container-lowest text-primary text-xs font-bold rounded-lg border border-outline-variant/20 hover:bg-surface-container-high transition-colors"
            type="button"
          >
            Share Tracking
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-surface-variant -translate-y-1/2" />
        <div className="absolute top-1/2 left-0 w-[65%] h-1 bg-secondary -translate-y-1/2 transition-all duration-1000" />
        <div className="relative z-10 flex justify-between">
          {journeySteps.map((step) => (
            <div key={step.label} className="flex flex-col items-center gap-4 group">
              <div className={step.circleClassName}>
                <span
                  className={`material-symbols-outlined text-sm${step.animated ? " animate-pulse" : ""}`}
                  style={
                    step.fill ? { fontVariationSettings: "'FILL' 1" } : undefined
                  }
                >
                  {step.icon}
                </span>
              </div>
              <div className="text-center">
                <p className={step.textClassName}>{step.label}</p>
                <p className={step.subtextClassName}>{step.sublabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
