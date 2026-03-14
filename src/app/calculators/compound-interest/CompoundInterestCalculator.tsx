"use client";

import { useState, useMemo } from "react";

function formatCurrency(n: number): string {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

export default function CompoundInterestCalculator() {
  const [initialDeposit, setInitialDeposit] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [annualRate, setAnnualRate] = useState(7);
  const [years, setYears] = useState(20);
  const [compoundFreq, setCompoundFreq] = useState(12);

  const results = useMemo(() => {
    const r = annualRate / 100;
    const n = compoundFreq;
    const t = years;
    const P = initialDeposit;
    const PMT = monthlyContribution;

    // Future value of initial deposit
    const fvInitial = P * Math.pow(1 + r / n, n * t);

    // Future value of monthly contributions (annuity)
    const periodsPerMonth = n / 12;
    let fvContributions = 0;
    const totalMonths = t * 12;
    for (let m = 0; m < totalMonths; m++) {
      const remainingMonths = totalMonths - m;
      const remainingPeriods = remainingMonths * (n / 12);
      fvContributions += PMT * Math.pow(1 + r / n, remainingPeriods);
    }

    const totalValue = fvInitial + fvContributions;
    const totalContributions = P + PMT * totalMonths;
    const totalInterest = totalValue - totalContributions;

    // Year-by-year breakdown
    const yearlyData: { year: number; balance: number; contributions: number; interest: number }[] = [];
    let balance = P;
    let totalContrib = P;
    for (let y = 1; y <= t; y++) {
      for (let m = 0; m < 12; m++) {
        balance += PMT;
        totalContrib += PMT;
        for (let p = 0; p < n / 12; p++) {
          balance *= 1 + r / n;
        }
      }
      yearlyData.push({
        year: y,
        balance,
        contributions: totalContrib,
        interest: balance - totalContrib,
      });
    }

    return { totalValue, totalContributions, totalInterest, yearlyData };
  }, [initialDeposit, monthlyContribution, annualRate, years, compoundFreq]);

  const contributionPct = results.totalValue > 0
    ? (results.totalContributions / results.totalValue) * 100
    : 0;
  const interestPct = 100 - contributionPct;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-lg">
      <div className="grid gap-6 p-6 md:grid-cols-2 md:p-8">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Initial Deposit</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input type="number" value={initialDeposit} onChange={(e) => setInitialDeposit(Number(e.target.value))}
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
          <label className="mb-1 block text-sm font-medium text-gray-700">Annual Interest Rate (%)</label>
          <div className="relative">
            <input type="number" step="0.1" value={annualRate} onChange={(e) => setAnnualRate(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 pl-4 pr-8 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">%</span>
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Time Period (Years)</label>
          <input type="number" value={years} onChange={(e) => setYears(Number(e.target.value))}
            className="w-full rounded-lg border border-gray-300 py-3 px-4 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
        </div>
        <div className="md:col-span-2">
          <label className="mb-1 block text-sm font-medium text-gray-700">Compound Frequency</label>
          <div className="flex gap-2">
            {([
              [1, "Annually"],
              [4, "Quarterly"],
              [12, "Monthly"],
              [365, "Daily"],
            ] as const).map(([freq, label]) => (
              <button key={freq} onClick={() => setCompoundFreq(freq)}
                className={`flex-1 rounded-lg border py-2 text-sm font-medium transition ${compoundFreq === freq ? "border-teal-600 bg-teal-600 text-white" : "border-gray-300 bg-white text-gray-700 hover:border-teal-300"}`}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {results && (
        <div className="border-t border-gray-200 bg-gradient-to-br from-green-50 to-emerald-50 p-6 md:p-8">
          <div className="mb-6 text-center">
            <p className="mb-1 text-sm font-medium text-gray-600">Future Value</p>
            <p className="text-5xl font-extrabold text-green-700">{formatCurrency(results.totalValue)}</p>
            <p className="mt-1 text-sm text-gray-500">after {years} years</p>
          </div>

          <div className="mb-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-white p-4 text-center shadow-sm">
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Total Contributions</p>
              <p className="text-xl font-bold text-teal-600">{formatCurrency(results.totalContributions)}</p>
            </div>
            <div className="rounded-lg bg-white p-4 text-center shadow-sm">
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Total Interest Earned</p>
              <p className="text-xl font-bold text-green-600">{formatCurrency(results.totalInterest)}</p>
            </div>
            <div className="rounded-lg bg-white p-4 text-center shadow-sm">
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Interest / Contributions</p>
              <p className="text-xl font-bold text-gray-900">{(results.totalInterest / Math.max(1, results.totalContributions) * 100).toFixed(0)}%</p>
            </div>
          </div>

          <div className="mb-6">
            <div className="mb-2 flex justify-between text-sm">
              <span className="flex items-center gap-1">
                <span className="inline-block h-3 w-3 rounded-sm bg-teal-500" /> Contributions ({contributionPct.toFixed(1)}%)
              </span>
              <span className="flex items-center gap-1">
                <span className="inline-block h-3 w-3 rounded-sm bg-green-500" /> Interest ({interestPct.toFixed(1)}%)
              </span>
            </div>
            <div className="flex h-4 overflow-hidden rounded-full">
              <div className="bg-teal-500 transition-all" style={{ width: `${contributionPct}%` }} />
              <div className="bg-green-500 transition-all" style={{ width: `${interestPct}%` }} />
            </div>
          </div>

          {/* Growth chart as simple bar visualization */}
          <div className="mt-6 max-h-80 overflow-auto rounded-lg border border-gray-200">
            <table className="w-full text-sm">
              <thead className="sticky top-0 bg-gray-100">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold">Year</th>
                  <th className="px-3 py-2 text-right font-semibold">Balance</th>
                  <th className="px-3 py-2 text-right font-semibold">Contributions</th>
                  <th className="px-3 py-2 text-right font-semibold">Interest Earned</th>
                </tr>
              </thead>
              <tbody>
                {results.yearlyData.map((row) => (
                  <tr key={row.year} className="border-t border-gray-100 hover:bg-green-50">
                    <td className="px-3 py-2">Year {row.year}</td>
                    <td className="px-3 py-2 text-right font-medium">{formatCurrency(row.balance)}</td>
                    <td className="px-3 py-2 text-right text-teal-600">{formatCurrency(row.contributions)}</td>
                    <td className="px-3 py-2 text-right text-green-600">{formatCurrency(row.interest)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
