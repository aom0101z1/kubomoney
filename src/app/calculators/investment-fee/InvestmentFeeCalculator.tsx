"use client";

import { useState, useMemo } from "react";

function fmt(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

export default function InvestmentFeeCalculator() {
  const [initialInvestment, setInitialInvestment] = useState(50000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [annualReturn, setAnnualReturn] = useState(8);
  const [years, setYears] = useState(30);
  const [feeA, setFeeA] = useState(0.03);
  const [feeB, setFeeB] = useState(0.75);

  const results = useMemo(() => {
    function simulate(feePercent: number) {
      const monthlyReturn = (annualReturn - feePercent) / 100 / 12;
      let balance = initialInvestment;
      for (let m = 0; m < years * 12; m++) {
        balance = balance * (1 + monthlyReturn) + monthlyContribution;
      }
      return balance;
    }

    const noFee = simulate(0);
    const balanceA = simulate(feeA);
    const balanceB = simulate(feeB);
    const costA = noFee - balanceA;
    const costB = noFee - balanceB;
    const difference = balanceA - balanceB;
    const totalContributed = initialInvestment + monthlyContribution * 12 * years;

    return { noFee, balanceA, balanceB, costA, costB, difference, totalContributed };
  }, [initialInvestment, monthlyContribution, annualReturn, years, feeA, feeB]);

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
          <label className="mb-1 block text-sm font-medium text-gray-700">Monthly Contribution</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input type="number" value={monthlyContribution} onChange={(e) => setMonthlyContribution(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 pl-7 pr-4 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Expected Annual Return</label>
          <div className="relative">
            <input type="number" step="0.5" value={annualReturn} onChange={(e) => setAnnualReturn(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 pl-4 pr-8 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">%</span>
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Investment Period (Years)</label>
          <div className="flex gap-2">
            {[10, 20, 30, 40].map((y) => (
              <button key={y} onClick={() => setYears(y)}
                className={`flex-1 rounded-lg border py-3 text-lg font-medium transition ${years === y ? "border-teal-600 bg-teal-600 text-white" : "border-gray-300 bg-white text-gray-700 hover:border-teal-300"}`}>
                {y}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Fund A — Expense Ratio</label>
          <div className="relative">
            <input type="number" step="0.01" value={feeA} onChange={(e) => setFeeA(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 pl-4 pr-8 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">%</span>
          </div>
          <p className="mt-1 text-xs text-gray-500">e.g. Vanguard S&amp;P 500 (VOO): 0.03%</p>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Fund B — Expense Ratio</label>
          <div className="relative">
            <input type="number" step="0.01" value={feeB} onChange={(e) => setFeeB(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 pl-4 pr-8 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">%</span>
          </div>
          <p className="mt-1 text-xs text-gray-500">e.g. Typical actively managed fund: 0.50-1.00%</p>
        </div>
      </div>

      <div className="border-t border-gray-200 bg-gradient-to-br from-teal-50 to-emerald-50 p-6 md:p-8">
        <div className="mb-6 text-center">
          <p className="mb-1 text-sm font-medium text-gray-600">Fee Difference Costs You</p>
          <p className="text-5xl font-extrabold text-red-600">{fmt(results.difference)}</p>
          <p className="mt-1 text-sm text-gray-500">over {years} years ({feeA}% vs {feeB}% expense ratio)</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Fund A ({feeA}%)</p>
            <p className="text-xl font-bold text-teal-700">{fmt(results.balanceA)}</p>
            <p className="text-xs text-gray-500">Fees cost {fmt(results.costA)}</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Fund B ({feeB}%)</p>
            <p className="text-xl font-bold text-gray-900">{fmt(results.balanceB)}</p>
            <p className="text-xs text-gray-500">Fees cost {fmt(results.costB)}</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">No Fees (theoretical)</p>
            <p className="text-xl font-bold text-gray-900">{fmt(results.noFee)}</p>
            <p className="text-xs text-gray-500">Total contributed: {fmt(results.totalContributed)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
