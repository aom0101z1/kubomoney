"use client";

import { useState, useMemo } from "react";

function fmt(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

export default function ROICalculator() {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [finalValue, setFinalValue] = useState(15000);
  const [years, setYears] = useState(3);

  const results = useMemo(() => {
    const netProfit = finalValue - initialInvestment;
    const roi = initialInvestment > 0 ? (netProfit / initialInvestment) * 100 : 0;
    const annualizedROI = initialInvestment > 0 && years > 0
      ? (Math.pow(finalValue / initialInvestment, 1 / years) - 1) * 100
      : 0;
    return { netProfit, roi, annualizedROI };
  }, [initialInvestment, finalValue, years]);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-lg">
      <div className="grid gap-6 p-6 md:grid-cols-2 md:p-8">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Initial Investment</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input type="number" value={initialInvestment} onChange={(e) => setInitialInvestment(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 pl-7 pr-4 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Final Value</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input type="number" value={finalValue} onChange={(e) => setFinalValue(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 pl-7 pr-4 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
          </div>
        </div>
        <div className="md:col-span-2">
          <label className="mb-1 block text-sm font-medium text-gray-700">Time Period (Years)</label>
          <div className="flex gap-2">
            {[1, 2, 3, 5, 10].map((t) => (
              <button key={t} onClick={() => setYears(t)}
                className={`flex-1 rounded-lg border py-2 text-sm font-medium transition ${years === t ? "border-teal-600 bg-teal-600 text-white" : "border-gray-300 bg-white text-gray-700 hover:border-teal-300"}`}>
                {t} yr
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 bg-gradient-to-br from-teal-50 to-emerald-50 p-6 md:p-8">
        <div className="mb-6 text-center">
          <p className="mb-1 text-sm font-medium text-gray-600">Total ROI</p>
          <p className={`text-5xl font-extrabold ${results.roi >= 0 ? "text-teal-700" : "text-red-600"}`}>{results.roi.toFixed(1)}%</p>
          <p className="mt-1 text-sm text-gray-500">over {years} year{years !== 1 ? "s" : ""}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Net Profit</p>
            <p className={`text-xl font-bold ${results.netProfit >= 0 ? "text-teal-700" : "text-red-600"}`}>{fmt(results.netProfit)}</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Annualized ROI</p>
            <p className={`text-xl font-bold ${results.annualizedROI >= 0 ? "text-teal-700" : "text-red-600"}`}>{results.annualizedROI.toFixed(1)}%</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Investment</p>
            <p className="text-xl font-bold text-gray-900">{fmt(initialInvestment)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
