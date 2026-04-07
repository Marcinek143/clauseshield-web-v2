import { parameterSelectOptions } from "./calculatorCompactData";

export default function CalculatorParametersCard() {
  return (
    <section className="md:col-span-4 bg-surface-container-lowest rounded-lg p-6 flex flex-col">
      <div className="flex items-center gap-3 mb-8">
        <span className="material-symbols-outlined text-secondary">tune</span>
        <h3 className="font-headline font-bold text-lg text-primary">
          Input Parameters
        </h3>
      </div>
      <div className="space-y-5 flex-grow">
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant">
            Container Type
          </label>
          <select className="w-full bg-surface-container-low border-none rounded-lg text-sm font-medium focus:ring-2 focus:ring-secondary/30 py-3 px-4 appearance-none">
            {parameterSelectOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant">
            Origin Port
          </label>
          <div className="relative">
            <input
              className="w-full bg-surface-container-low border-none rounded-lg text-sm font-medium focus:ring-2 focus:ring-secondary/30 py-3 px-10"
              type="text"
              value="Shanghai (CNSHA)"
              readOnly
            />
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">
              location_on
            </span>
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant">
            Destination Port
          </label>
          <div className="relative">
            <input
              className="w-full bg-surface-container-low border-none rounded-lg text-sm font-medium focus:ring-2 focus:ring-secondary/30 py-3 px-10"
              type="text"
              value="Rotterdam (NLRTM)"
              readOnly
            />
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">
              anchor
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant">
              Volume (TEU)
            </label>
            <input
              className="w-full bg-surface-container-low border-none rounded-lg text-sm font-medium focus:ring-2 focus:ring-secondary/30 py-3 px-4"
              type="number"
              value="12"
              readOnly
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant">
              Gross Weight
            </label>
            <div className="relative">
              <input
                className="w-full bg-surface-container-low border-none rounded-lg text-sm font-medium focus:ring-2 focus:ring-secondary/30 py-3 pl-4 pr-10"
                type="text"
                value="24,500"
                readOnly
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] font-bold text-on-surface-variant">
                KG
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 p-4 bg-secondary-fixed/20 rounded-lg flex items-center gap-3">
        <span
          className="material-symbols-outlined text-secondary"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          bolt
        </span>
        <p className="text-xs font-semibold text-on-secondary-fixed-variant">
          AI suggested optimal route via Suez Canal based on current fuel
          indices.
        </p>
      </div>
    </section>
  );
}
