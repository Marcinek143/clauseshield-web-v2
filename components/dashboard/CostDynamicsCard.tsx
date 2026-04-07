const bars = [
  "bg-primary/10 h-[40%]",
  "bg-primary/10 h-[55%]",
  "bg-primary/10 h-[45%]",
  "bg-primary/20 h-[65%]",
  "bg-primary/20 h-[50%]",
  "bg-primary/40 h-[75%]",
  "bg-secondary h-[90%]",
  "bg-primary/40 h-[60%]",
  "bg-primary/20 h-[40%]",
  "bg-primary/10 h-[30%]",
];

const labels = ["Mon 12", "Wed 14", "Fri 16", "Sun 18", "Tue 20"];

export default function CostDynamicsCard() {
  return (
    <div className="bg-surface-container-low rounded-xl p-8">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-2xl font-bold headline-font text-primary">
            Cost Dynamics
          </h2>
          <p className="text-on-surface-variant text-sm">
            Consolidated detention &amp; demurrage projections
          </p>
        </div>
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-surface-container-lowest text-xs font-semibold rounded-full ghost-border">
            Daily
          </span>
          <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
            Weekly
          </span>
        </div>
      </div>
      <div className="h-64 w-full flex items-end gap-2 px-4">
        {bars.map((barClassName, index) => (
          <div
            key={`${barClassName}-${index}`}
            className={`flex-1 rounded-t-lg ${barClassName}${index === 6 ? " relative" : ""}`}
          >
            {index === 6 ? (
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] py-1 px-2 rounded whitespace-nowrap">
                $62.4k Peak
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4 px-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">
        {labels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </div>
  );
}
