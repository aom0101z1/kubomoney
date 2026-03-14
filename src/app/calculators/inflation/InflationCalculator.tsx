"use client";

import { useState, useMemo } from "react";

function fmt(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

export default function InflationCalculator() {
  const [amount, setAmount] = useState(100000);
  const [inflationRate, setInflationRate] = useState(3);
  const [years, setYears] = useState(10);
  const [mode, setMode] = useState<"future" | "past">("future");

  const results = useMemo(() => {
    const r = inflationRate / 100;

    if (mode === "future") {
      // What will $X be worth in Y years?
      const futureValue = amount / Math.pow(1 + r, years);
      const purchasingPowerLost = amount - futureValue;
      const percentLost = (purchasingPowerLost / amount) * 100;

      const yearlyData = Array.from({ length: years }, (_, i) => ({
        year: i + 1,
        value: amount / Math.pow(1 + r, i + 1),
      }));

      return { adjustedValue: futureValue, purchasingPowerLost, percentLost, yearlyData };
    } else {
      // What was $X worth Y years ago in today's dollars?
      const pastValue = amount * Math.pow(1 + r, years);
      const purchasingPowerLost = pastValue - amount;
      const percentLost = (purchasingPowerLost / pastValue) * 100;

      const yearlyData = Array.from({ length: years }, (_, i) => ({
        year: i + 1,
        value: amount * Math.pow(1 + r, i + 1),
      }));

      return { adjustedValue: pastValue, purchasingPowerLost, percentLost, yearlyData };
    }
  }, [amount, inflationRate, years, mode]);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-lg">
      <div className="p-6 md:p-8">
        <div className="mb-6 flex gap-2">
          <button onClick={() => setMode("future")}
            className={`flex-1 rounded-lg border py-2 text-sm font-medium transition ${mode === "future" ? "border-teal-600 bg-teal-600 text-white" : "border-gray-300 bg-white text-gray-700 hover:border-teal-300"}`}>
            Future Purchasing Power
          </button>
          <button onClick={() => setMode("past")}
            className={`flex-1 rounded-lg border py-2 text-sm font-medium transition ${mode === "past" ? "border-teal-600 bg-teal-600 text-white" : "border-gray-300 bg-white text-gray-700 hover:border-teal-300"}`}>
            Past to Present Value
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Amount</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full rounded-lg border border-gray-300 py-3 pl-7 pr-4 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Inflation Rate (%)</label>
            <div className="relative">
              <input type="number" step="0.1" value={inflationRate} onChange={(e) => setInflationRate(Number(e.target.value))}
                className="w-full rounded-lg border border-gray-300 py-3 pl-4 pr-8 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">%</span>
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Years</label>
            <input type="number" value={years} onChange={(e) => setYears(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 px-4 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 bg-gradient-to-br from-teal-50 to-emerald-50 p-6 md:p-8">
        <div className="mb-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
              {mode === "future" ? "Today's Value" : "Original Amount"}
            </p>
            <p className="text-2xl font-bold text-gray-900">{fmt(amount)}</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
              {mode === "future" ? `Worth in ${years} Years` : `Equivalent Today`}
            </p>
            <p className="text-2xl font-extrabold text-teal-700">{fmt(results.adjustedValue)}</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Purchasing Power Change</p>
            <p className="text-2xl font-bold text-red-600">-{results.percentLost.toFixed(1)}%</p>
          </div>
        </div>

        <div className="max-h-72 overflow-auto rounded-lg border border-gray-200">
          <table className="w-full text-sm">
            <thead className="sticky top-0 bg-gray-100">
              <tr>
                <th className="px-3 py-2 text-left font-semibold">Year</th>
                <th className="px-3 py-2 text-right font-semibold">
                  {mode === "future" ? "Purchasing Power" : "Equivalent Value"}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-100">
                <td className="px-3 py-2">Today</td>
                <td className="px-3 py-2 text-right font-medium">{fmt(amount)}</td>
              </tr>
              {results.yearlyData.map((row) => (
                <tr key={row.year} className="border-t border-gray-100 hover:bg-teal-50">
                  <td className="px-3 py-2">Year {row.year}</td>
                  <td className="px-3 py-2 text-right font-medium">{fmt(row.value)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
