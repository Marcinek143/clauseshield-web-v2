import { splitInsightCards } from "./calculatorSplitData";

export default function CalculatorSplitInsights() {
  return (
    <div className="space-y-4">
      {splitInsightCards.map((card) => (
        <div key={card.title} className={card.wrapperClassName}>
          <div className="relative z-10 flex items-start gap-4">
            <div className={card.iconWrapperClassName}>
              <span className="material-symbols-outlined">{card.icon}</span>
            </div>
            <div>
              <h4 className="font-bold text-primary-container">{card.title}</h4>
              <p className="text-sm text-on-surface-variant leading-snug">
                {card.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
