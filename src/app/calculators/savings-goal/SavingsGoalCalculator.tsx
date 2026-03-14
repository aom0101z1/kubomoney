"use client";

import { useState, useMemo } from "react";

function fmt(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

export default function SavingsGoalCalculator() {
  const [goalAmount, setGoalAmount] = useState(20000);
  const [currentSavings, setCurrentSavings] = useState(2000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [annualReturn, setAnnualReturn] = useState(4.5);

  const results = useMemo(() => {
    const remaining = goalAmount - currentSavings;
    if (remaining <= 0) return { months: 0, totalContributions: 0, totalInterest: 0, finalBalance: currentSavings };
    if (monthlyContribution <= 0) return { months: Infinity, totalContributions: 0, totalInterest: 0, finalBalance: currentSavings };

    const r = annualReturn / 100 / 12;
    let balance = currentSavings;
    let months = 0;
    const maxMonths = 600;

    while (balance < goalAmount && months < maxMonths) {
      balance = balance * (1 + r) + monthlyContribution;
      months++;
    }

    const totalContributions = monthlyContribution * months;
    const totalInterest = balance - currentSavings - totalContributions;

    return { months, totalContributions, totalInterest, finalBalance: balance };
  }, [goalAmount, currentSavings, monthlyContribution, annualReturn]);

  const years = Math.floor(results.months / 12);
  const remainingMonths = results.months % 12;
  const timeLabel = years > 0
    ? `${years} year${years !== 1 ? "s" : ""}${remainingMonths > 0 ? ` ${remainingMonths} mo` : ""}`
    : `${remainingMonths} month${remainingMonths !== 1 ? "s" : ""}`;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-lg">
      <div className="grid gap-6 p-6 md:grid-cols-2 md:p-8">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Savings Goal</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input type="number" value={goalAmount} onChange={(e) => setGoalAmount(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 pl-7 pr-4 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Current Savings</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input type="number" value={currentSavings} onChange={(e) => setCurrentSavings(Number(e.target.value))}
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
          <label className="mb-1 block text-sm font-medium text-gray-700">Annual Return (APY)</label>
          <div className="relative">
            <input type="number" step="0.1" value={annualReturn} onChange={(e) => setAnnualReturn(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 pl-4 pr-8 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">%</span>
          </div>
          <div className="mt-2 flex gap-2">
            {[0, 2, 4.5, 7, 10].map((r) => (
              <button key={r} onClick={() => setAnnualReturn(r)}
                className={`flex-1 rounded-lg border py-1.5 text-xs font-medium transition ${annualReturn === r ? "border-teal-600 bg-teal-600 text-white" : "border-gray-300 bg-white text-gray-700 hover:border-teal-300"}`}>
                {r === 0 ? "None" : r === 4.5 ? "HYSA" : r === 7 ? "Stocks" : `${r}%`}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 bg-gradient-to-br from-teal-50 to-emerald-50 p-6 md:p-8">
        <div className="mb-6 text-center">
          <p className="mb-1 text-sm font-medium text-gray-600">Time to Reach Goal</p>
          <p className="text-5xl font-extrabold text-teal-700">{results.months >= 600 ? "50+ years" : timeLabel}</p>
          <p className="mt-1 text-sm text-gray-500">saving {fmt(monthlyContribution)}/month at {annualReturn}% APY</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Total Contributions</p>
            <p className="text-xl font-bold text-gray-900">{fmt(results.totalContributions)}</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Interest Earned</p>
            <p className="text-xl font-bold text-teal-700">{fmt(results.totalInterest)}</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Final Balance</p>
            <p className="text-xl font-bold text-gray-900">{fmt(results.finalBalance)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
