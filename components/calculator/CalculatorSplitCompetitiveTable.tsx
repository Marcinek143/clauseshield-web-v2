import { splitCompetitiveRows } from "./calculatorSplitData";

export default function CalculatorSplitCompetitiveTable() {
  return (
    <div className="p-8 bg-surface-container-lowest rounded-[2rem] overflow-hidden">
      <h3 className="font-headline font-extrabold text-xl mb-6">
        Competitive Intelligence
      </h3>
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest border-b border-outline-variant/10">
              <th className="pb-4">Market Index</th>
              <th className="pb-4">Base Rate</th>
              <th className="pb-4">Peak Factor</th>
              <th className="pb-4">Total</th>
              <th className="pb-4 text-right">Trend</th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-outline-variant/10">
            {splitCompetitiveRows.map((row) => (
              <tr
                key={row.marketIndex}
                className="group hover:bg-surface-container-low transition-colors"
              >
                <td className="py-5 font-bold">{row.marketIndex}</td>
                <td className="py-5 text-on-surface-variant">{row.baseRate}</td>
                <td className="py-5 text-on-surface-variant">
                  {row.peakFactor}
                </td>
                <td className={row.totalClassName ?? "py-5 font-bold"}>
                  {row.total}
                </td>
                <td className={row.trendClassName}>{row.trend}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
