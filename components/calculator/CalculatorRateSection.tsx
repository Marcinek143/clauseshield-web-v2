import CalculatorRateTiersCard from "./CalculatorRateTiersCard";
import CalculatorTimelineInsight from "./CalculatorTimelineInsight";

export default function CalculatorRateSection() {
  return (
    <section className="md:col-span-5 flex flex-col gap-6">
      <CalculatorRateTiersCard />
      <CalculatorTimelineInsight />
    </section>
  );
}
