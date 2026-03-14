"use client";

import { useState, useMemo } from "react";

function fmt(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

export default function BreakEvenCalculator() {
  const [fixedCosts, setFixedCosts] = useState(5000);
  const [pricePerUnit, setPricePerUnit] = useState(50);
  const [variableCostPerUnit, setVariableCostPerUnit] = useState(20);

  const results = useMemo(() => {
    const contributionMargin = pricePerUnit - variableCostPerUnit;
    const contributionMarginRatio = pricePerUnit > 0 ? contributionMargin / pricePerUnit : 0;
    const breakEvenUnits = contributionMargin > 0 ? Math.ceil(fixedCosts / contributionMargin) : 0;
    const breakEvenRevenue = contributionMarginRatio > 0 ? fixedCosts / contributionMarginRatio : 0;
    const profitAtDouble = contributionMargin > 0 ? (breakEvenUnits * 2) * contributionMargin - fixedCosts : 0;

    return { breakEvenUnits, breakEvenRevenue, contributionMargin, contributionMarginRatio, profitAtDouble };
  }, [fixedCosts, pricePerUnit, variableCostPerUnit]);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-lg">
      <div className="grid gap-6 p-6 md:grid-cols-2 md:p-8">
        <div className="md:col-span-2">
          <label className="mb-1 block text-sm font-medium text-gray-700">Fixed Costs (per month)</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input type="number" value={fixedCosts} onChange={(e) => setFixedCosts(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 pl-7 pr-4 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
          </div>
          <p className="mt-1 text-xs text-gray-500">Rent, salaries, insurance, software subscriptions, etc.</p>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Price per Unit / Service</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input type="number" value={pricePerUnit} onChange={(e) => setPricePerUnit(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 pl-7 pr-4 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Variable Cost per Unit</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input type="number" value={variableCostPerUnit} onChange={(e) => setVariableCostPerUnit(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 pl-7 pr-4 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
          </div>
          <p className="mt-1 text-xs text-gray-500">Materials, shipping, payment processing, etc.</p>
        </div>
      </div>

      <div className="border-t border-gray-200 bg-gradient-to-br from-teal-50 to-emerald-50 p-6 md:p-8">
        <div className="mb-6 text-center">
          <p className="mb-1 text-sm font-medium text-gray-600">Break-Even Point</p>
          <p className="text-5xl font-extrabold text-teal-700">{results.breakEvenUnits.toLocaleString()}</p>
          <p className="mt-1 text-sm text-gray-500">units to sell per month</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Revenue Needed</p>
            <p className="text-xl font-bold text-gray-900">{fmt(results.breakEvenRevenue)}</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Margin / Unit</p>
            <p className="text-xl font-bold text-teal-700">{fmt(results.contributionMargin)}</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Margin Ratio</p>
            <p className="text-xl font-bold text-gray-900">{(results.contributionMarginRatio * 100).toFixed(1)}%</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Profit at 2x</p>
            <p className="text-xl font-bold text-teal-700">{fmt(results.profitAtDouble)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
