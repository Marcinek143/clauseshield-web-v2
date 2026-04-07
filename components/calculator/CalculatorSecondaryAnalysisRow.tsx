import { secondaryAnalysisCards } from "./calculatorCompactData";

export default function CalculatorSecondaryAnalysisRow() {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      {secondaryAnalysisCards.map((card) => (
        <div
          key={card.title}
          className="bg-surface-container-low rounded-lg p-6 flex items-center justify-between"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-secondary text-3xl">
                {card.icon}
              </span>
            </div>
            <div>
              <h4 className="font-headline font-bold text-primary">
                {card.title}
              </h4>
              <p className="text-sm text-on-surface-variant font-medium">
                {card.description}
              </p>
            </div>
          </div>
          <button
            className="text-sm font-bold text-secondary hover:underline underline-offset-4"
            type="button"
          >
            {card.action}
          </button>
        </div>
      ))}
    </div>
  );
}
