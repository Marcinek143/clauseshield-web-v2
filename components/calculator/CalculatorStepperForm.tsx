const shippingLineOptions = [
  { value: "", label: "Select Shipping Line", disabled: true },
  { value: "maersk", label: "Maersk" },
  { value: "msc", label: "MSC" },
  { value: "cma_cgm", label: "CMA CGM" },
  { value: "hapag_lloyd", label: "Hapag-Lloyd" },
];

const containerTypeOptions = [
  { value: "", label: "Select Equipment", disabled: true },
  { value: "20st", label: "20' Standard" },
  { value: "40st", label: "40' Standard" },
  { value: "40hc", label: "40' High Cube" },
  { value: "20rf", label: "20' Reefer" },
];

export default function CalculatorStepperForm() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-8 sm:p-10 ambient-shadow ghost-border flex flex-col gap-8">
      <div className="flex flex-col gap-6">
        <h3 className="font-headline text-xl font-semibold text-on-surface border-b border-surface-variant/30 pb-4">
          Carrier &amp; Equipment
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label
              className="text-on-surface font-medium text-sm"
              htmlFor="shipping_line"
            >
              Shipping Line
            </label>
            <div className="relative">
              <select
                className="w-full appearance-none bg-surface-container-high border-none rounded-lg py-3.5 pl-4 pr-10 text-on-surface focus:ring-2 focus:ring-secondary/30 focus:outline-none transition-shadow text-sm form-select"
                defaultValue=""
                id="shipping_line"
              >
                {shippingLineOptions.map((option) => (
                  <option
                    key={`${option.value}-${option.label}`}
                    disabled={option.disabled}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="text-on-surface font-medium text-sm"
              htmlFor="container_type"
            >
              Container Type
            </label>
            <div className="relative">
              <select
                className="w-full appearance-none bg-surface-container-high border-none rounded-lg py-3.5 pl-4 pr-10 text-on-surface focus:ring-2 focus:ring-secondary/30 focus:outline-none transition-shadow text-sm form-select"
                defaultValue=""
                id="container_type"
              >
                {containerTypeOptions.map((option) => (
                  <option
                    key={`${option.value}-${option.label}`}
                    disabled={option.disabled}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 mt-4">
        <h3 className="font-headline text-xl font-semibold text-on-surface border-b border-surface-variant/30 pb-4">
          Location &amp; Timing
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2 md:col-span-2">
            <label
              className="text-on-surface font-medium text-sm"
              htmlFor="port_terminal"
            >
              Discharge Port / Terminal
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl">
                location_on
              </span>
              <input
                className="w-full bg-surface-container-high border-none rounded-lg py-3.5 pl-12 pr-4 text-on-surface placeholder:text-on-surface-variant/70 focus:ring-2 focus:ring-secondary/30 focus:outline-none transition-shadow text-sm"
                id="port_terminal"
                placeholder="Enter port code or name (e.g., USLAX)"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="text-on-surface font-medium text-sm"
              htmlFor="discharge_date"
            >
              Vessel Discharge Date
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl">
                calendar_today
              </span>
              <input
                className="w-full bg-surface-container-high border-none rounded-lg py-3.5 pl-12 pr-4 text-on-surface focus:ring-2 focus:ring-secondary/30 focus:outline-none transition-shadow text-sm"
                id="discharge_date"
                type="date"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="text-on-surface font-medium text-sm"
              htmlFor="return_date"
            >
              Estimated Return Date
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl">
                event_repeat
              </span>
              <input
                className="w-full bg-surface-container-high border-none rounded-lg py-3.5 pl-12 pr-4 text-on-surface focus:ring-2 focus:ring-secondary/30 focus:outline-none transition-shadow text-sm"
                id="return_date"
                type="date"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 md:col-span-2 mt-2">
            <div className="flex justify-between items-center">
              <label
                className="text-on-surface font-medium text-sm"
                htmlFor="free_time"
              >
                Allocated Free Time (Days)
              </label>
              <span className="bg-secondary-fixed-dim/20 text-on-secondary-fixed-variant text-xs font-semibold px-2 py-1 rounded-full border border-secondary-fixed/50">
                Standard: 4 Days
              </span>
            </div>
            <input
              className="w-full bg-surface-container-high border-none rounded-lg py-3.5 px-4 text-on-surface focus:ring-2 focus:ring-secondary/30 focus:outline-none transition-shadow text-sm font-medium tabular-nums"
              id="free_time"
              min="0"
              placeholder="4"
              type="number"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button className="px-6 py-3.5 text-primary font-semibold text-sm hover:bg-surface-container-high rounded-lg transition-colors flex items-center gap-2" type="button">
          <span className="material-symbols-outlined text-lg">close</span>
          Cancel
        </button>
        <button className="bg-gradient-primary text-on-primary px-8 py-3.5 rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2" type="button">
          Continue to Daily Rates
          <span className="material-symbols-outlined text-lg">
            arrow_forward
          </span>
        </button>
      </div>
    </div>
  );
}
