export default function ShipmentHealthCard() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-start mb-6">
        <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
          Shipment Health
        </h4>
        <span
          className="material-symbols-outlined text-secondary"
          title="Verified AI analysis"
        >
          verified
        </span>
      </div>
      <div className="flex items-center gap-4 p-4 bg-secondary/5 rounded-lg border border-secondary/10">
        <span className="material-symbols-outlined text-secondary text-3xl">
          check_circle
        </span>
        <div>
          <p className="text-sm font-bold text-secondary">ON SCHEDULE</p>
          <p className="text-xs text-on-surface-variant">
            Next Port: Port of Rotterdam
          </p>
        </div>
      </div>
    </div>
  );
}
