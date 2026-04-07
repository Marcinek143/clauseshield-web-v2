const audits = [
  {
    vessel: "Maersk Seville",
    voyage: "VOY 412W",
    container: "MSKU902144-0",
    clauseType: "DETENTION",
    clauseClassName:
      "px-2 py-1 bg-secondary-fixed text-on-secondary-fixed-variant text-[10px] font-bold rounded-full",
    liability: "$1,240.00",
  },
  {
    vessel: "MSC Isabella",
    voyage: "VOY 092S",
    container: "MSCU118224-9",
    clauseType: "DEMURRAGE",
    clauseClassName:
      "px-2 py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-bold rounded-full",
    liability: "$850.00",
  },
  {
    vessel: "Ever Given",
    voyage: "VOY 1102E",
    container: "EGCU442190-2",
    clauseType: "DETENTION",
    clauseClassName:
      "px-2 py-1 bg-secondary-fixed text-on-secondary-fixed-variant text-[10px] font-bold rounded-full",
    liability: "$2,105.50",
  },
];

export default function RecentClauseAudits() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-8 ghost-border">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl font-bold headline-font text-primary">
          Recent Clause Audits
        </h2>
        <button
          className="text-sm font-semibold text-secondary flex items-center hover:underline"
          type="button"
        >
          View All Audits
          <span className="material-symbols-outlined text-sm ml-1">
            chevron_right
          </span>
        </button>
      </div>
      <div className="space-y-0">
        <div className="grid grid-cols-4 pb-4 border-b border-outline-variant/10 text-xs font-bold text-on-surface-variant uppercase tracking-widest">
          <div className="col-span-1">Vessel/Voyage</div>
          <div className="text-right">Container</div>
          <div className="text-right">Clause Type</div>
          <div className="text-right">Est. Liability</div>
        </div>
        {audits.map((audit, index) => (
          <div
            key={audit.container}
            className={`grid grid-cols-4 py-6 items-center hover:bg-surface-container-low/50 transition-colors -mx-4 px-4 rounded-lg${index < audits.length - 1 ? " border-b border-outline-variant/10" : ""}`}
          >
            <div className="col-span-1">
              <p className="text-sm font-bold text-primary">{audit.vessel}</p>
              <p className="text-xs text-on-surface-variant">{audit.voyage}</p>
            </div>
            <div className="text-right text-sm font-medium font-body tabular-nums">
              {audit.container}
            </div>
            <div className="text-right">
              <span className={audit.clauseClassName}>{audit.clauseType}</span>
            </div>
            <div className="text-right text-sm font-bold text-primary">
              {audit.liability}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
