export default function CalculatorStepperProgress() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-end">
        <div>
          <p className="text-on-surface-variant font-medium text-sm tracking-wide uppercase mb-2">
            Step 01 of 03
          </p>
          <h2 className="font-headline text-4xl font-bold text-on-surface leading-tight">
            Container Parameters
          </h2>
        </div>
      </div>
      <div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
        <div
          className="bg-primary-container h-full rounded-full transition-all duration-500"
          style={{ width: "33%" }}
        />
      </div>
      <div className="flex justify-between text-xs text-on-surface-variant mt-1 font-medium px-1">
        <span className="text-on-surface">Parameters</span>
        <span>Daily Rates</span>
        <span>Calculation Result</span>
      </div>
    </div>
  );
}
