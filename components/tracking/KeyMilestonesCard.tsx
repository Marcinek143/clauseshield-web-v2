import { milestoneItems } from "./trackingData";

export default function KeyMilestonesCard() {
  return (
    <div className="bg-primary text-white rounded-xl p-6 shadow-lg flex-grow">
      <h4 className="text-xs font-bold text-on-primary-container uppercase tracking-widest mb-6">
        Key Milestones
      </h4>
      <div className="space-y-6">
        {milestoneItems.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between group cursor-help"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary-fixed-dim">
                {item.icon}
              </span>
              <div>
                <p className="text-xs text-on-primary-container">{item.label}</p>
                <p className={item.valueClassName ?? "text-lg font-bold"}>
                  {item.value}
                </p>
              </div>
            </div>
            <span className="material-symbols-outlined text-on-primary-container opacity-50 text-sm">
              info
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
