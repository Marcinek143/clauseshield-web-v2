import CalculatorSplitDashboard from "@/components/calculator/CalculatorSplitDashboard";
import CalculatorSplitSidebar from "@/components/calculator/CalculatorSplitSidebar";

export default function CalculatorSplitPage() {
  return (
    <div className="calculator-split-page bg-surface font-body text-on-surface antialiased overflow-hidden min-h-screen">
      <main className="h-[calc(100vh-5rem)] flex">
        <CalculatorSplitSidebar />
        <CalculatorSplitDashboard />
      </main>
    </div>
  );
}
