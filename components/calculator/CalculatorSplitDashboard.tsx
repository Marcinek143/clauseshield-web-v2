import CalculatorSplitCompetitiveTable from "./CalculatorSplitCompetitiveTable";
import CalculatorSplitInsights from "./CalculatorSplitInsights";
import CalculatorSplitMetricHeader from "./CalculatorSplitMetricHeader";
import CalculatorSplitVelocityCard from "./CalculatorSplitVelocityCard";

export default function CalculatorSplitDashboard() {
  return (
    <section className="flex-1 h-full bg-surface overflow-y-auto px-10 py-12">
      <div className="max-w-5xl mx-auto space-y-10">
        <CalculatorSplitMetricHeader />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CalculatorSplitVelocityCard />
          <CalculatorSplitInsights />
        </div>
        <CalculatorSplitCompetitiveTable />
      </div>
    </section>
  );
}
