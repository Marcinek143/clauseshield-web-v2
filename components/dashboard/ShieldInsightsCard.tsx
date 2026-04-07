export default function ShieldInsightsCard() {
  return (
    <div className="bg-secondary-fixed/30 rounded-xl p-8 border border-secondary/10">
      <div className="flex items-center gap-2 mb-4">
        <span
          className="material-symbols-outlined text-secondary"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          bolt
        </span>
        <h3 className="text-sm font-bold text-on-secondary-fixed-variant uppercase tracking-widest">
          Shield Insights
        </h3>
      </div>
      <p className="text-sm text-on-secondary-fixed-variant leading-relaxed">
        We detected a pattern of 15% higher detention fees at{" "}
        <span className="font-bold">Port of Antwerp</span> this week. Consider
        prioritizing these pick-ups.
      </p>
      <button
        className="mt-6 w-full py-3 bg-secondary text-white text-xs font-bold rounded-lg shadow-sm hover:shadow-md transition-shadow"
        type="button"
      >
        Optimize Route
      </button>
    </div>
  );
}
