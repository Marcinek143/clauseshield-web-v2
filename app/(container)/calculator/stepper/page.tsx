import CalculatorStepperForm from "@/components/calculator/CalculatorStepperForm";
import CalculatorStepperProgress from "@/components/calculator/CalculatorStepperProgress";
import TrackingFooter from "@/components/tracking/TrackingFooter";

export default function CalculatorStepperPage() {
  return (
    <div className="calculator-stepper-page bg-surface text-on-surface antialiased min-h-screen flex flex-col overflow-x-hidden">
      <main className="flex-grow flex flex-col items-center justify-start pt-12 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[800px] flex flex-col gap-10">
          <CalculatorStepperProgress />
          <CalculatorStepperForm />
        </div>
      </main>
      <TrackingFooter />
    </div>
  );
}
