export default function CalculatorCompactHeader() {
  return (
    <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div>
        <h1 className="text-4xl font-extrabold font-headline tracking-tighter text-primary mb-2">
          Cost Intelligence Calculator
        </h1>
        <p className="text-on-surface-variant font-medium">
          Real-time maritime logistics cost modeling and predictive rate
          analysis.
        </p>
      </div>
      <div className="flex gap-3">
        <button
          className="flex items-center gap-2 px-4 py-2.5 bg-surface-container-lowest shadow-sm rounded-lg text-sm font-semibold text-primary hover:bg-surface-container-high transition-all"
          type="button"
        >
          <span className="material-symbols-outlined text-[20px]">save</span>
          Save Scenario
        </button>
        <button
          className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white shadow-lg rounded-lg text-sm font-semibold hover:opacity-90 active:scale-95 transition-all"
          type="button"
        >
          <span className="material-symbols-outlined text-[20px]">refresh</span>
          Recalculate
        </button>
      </div>
    </header>
  );
}
