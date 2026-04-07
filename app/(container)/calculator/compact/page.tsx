import CalculatorCompactFooter from "@/components/calculator/CalculatorCompactFooter";
import CalculatorCompactHeader from "@/components/calculator/CalculatorCompactHeader";
import CalculatorParametersCard from "@/components/calculator/CalculatorParametersCard";
import CalculatorRateSection from "@/components/calculator/CalculatorRateSection";
import CalculatorSecondaryAnalysisRow from "@/components/calculator/CalculatorSecondaryAnalysisRow";
import CalculatorSummaryCard from "@/components/calculator/CalculatorSummaryCard";

export default function CalculatorCompactPage() {
  return (
    <div className="calculator-compact-page bg-surface text-on-surface min-h-screen">
      <main className="pt-8 pb-12 px-8 max-w-[1600px] mx-auto">
        <CalculatorCompactHeader />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          <CalculatorParametersCard />
          <CalculatorRateSection />
          <CalculatorSummaryCard />
        </div>
        <CalculatorSecondaryAnalysisRow />
      </main>
      <CalculatorCompactFooter />
    </div>
  );
}
