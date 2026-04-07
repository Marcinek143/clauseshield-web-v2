import { rateTiers } from "./calculatorCompactData";

export default function CalculatorRateTiersCard() {
  return (
    <div className="bg-surface-container-lowest rounded-lg p-6 flex-grow">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-secondary">layers</span>
          <h3 className="font-headline font-bold text-lg text-primary">
            Intelligence Rate Tiers
          </h3>
        </div>
        <span className="bg-secondary-container text-on-secondary-container px-2 py-1 rounded text-[10px] font-bold uppercase">
          Live Rates
        </span>
      </div>
      <div className="space-y-1">
        <div className="grid grid-cols-3 px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">
          <span>Service Tier</span>
          <span className="text-center">Transit</span>
          <span className="text-right">Unit Rate</span>
        </div>
        {rateTiers.map((tier) => (
          <div key={tier.name} className={tier.rowClassName}>
            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${tier.dotClassName}`} />
              <span className={tier.nameClassName}>{tier.name}</span>
            </div>
            <span className="text-sm font-medium text-on-surface-variant text-center">
              {tier.transit}
            </span>
            <span className={tier.valueClassName}>{tier.rate}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
