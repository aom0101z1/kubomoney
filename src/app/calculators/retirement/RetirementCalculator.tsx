"use client";

import { useState, useMemo } from "react";

function fmt(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

export default function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState(30);
  const [retireAge, setRetireAge] = useState(65);
  const [currentSavings, setCurrentSavings] = useState(50000);
  const [monthlyContribution, setMonthlyContribution] = useState(1000);
  const [annualReturn, setAnnualReturn] = useState(7);
  const [desiredIncome, setDesiredIncome] = useState(60000);
  const [inflationRate, setInflationRate] = useState(3);

  const results = useMemo(() => {
    const yearsToRetire = retireAge - currentAge;
    if (yearsToRetire <= 0) return null;

    const mr = annualReturn / 100 / 12;
    const months = yearsToRetire * 12;

    // Future value of current savings + monthly contributions
    let balance = currentSavings;
    for (let m = 0; m < months; m++) {
      balance = balance * (1 + mr) + monthlyContribution;
    }

    const totalContributions = currentSavings + monthlyContribution * months;
    const totalGrowth = balance - totalContributions;

    // Inflation-adjusted desired income
    const adjustedIncome = desiredIncome * Math.pow(1 + inflationRate / 100, yearsToRetire);

    // How long savings last (4% rule as baseline)
    const yearsInRetirement = 30;
    const withdrawalRate = adjustedIncome / 12;
    const retirementReturn = 0.04 / 12; // Conservative 4% during retirement

    let retireBal = balance;
    let lastsMonths = 0;
    while (retireBal > 0 && lastsMonths < yearsInRetirement * 12) {
      retireBal = retireBal * (1 + retirementReturn) - withdrawalRate;
      lastsMonths++;
    }

    // 4% rule target
    const safeWithdrawalTarget = adjustedIncome / 0.04;
    const onTrack = balance >= safeWithdrawalTarget;

    return {
      projectedSavings: balance,
      totalContributions,
      totalGrowth,
      adjustedIncome,
      safeWithdrawalTarget,
      onTrack,
      lastsYears: Math.floor(lastsMonths / 12),
      gap: safeWithdrawalTarget - balance,
    };
  }, [currentAge, retireAge, currentSavings, monthlyContribution, annualReturn, desiredIncome, inflationRate]);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-lg">
      <div className="grid gap-6 p-6 md:grid-cols-2 md:p-8">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Current Age</label>
          <input type="number" value={currentAge} onChange={(e) => setCurrentAge(Number(e.target.value))}
            className="w-full rounded-lg border border-gray-300 py-3 px-4 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Retirement Age</label>
          <input type="number" value={retireAge} onChange={(e) => setRetireAge(Number(e.target.value))}
            className="w-full rounded-lg border border-gray-300 py-3 px-4 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
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
          <label className="mb-1 block text-sm font-medium text-gray-700">Expected Annual Return (%)</label>
          <div className="relative">
            <input type="number" step="0.1" value={annualReturn} onChange={(e) => setAnnualReturn(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 pl-4 pr-8 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">%</span>
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Desired Annual Income in Retirement</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input type="number" value={desiredIncome} onChange={(e) => setDesiredIncome(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 pl-7 pr-4 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
          </div>
        </div>
      </div>

      {results && (
        <div className={`border-t border-gray-200 p-6 md:p-8 ${results.onTrack ? "bg-gradient-to-br from-green-50 to-emerald-50" : "bg-gradient-to-br from-amber-50 to-orange-50"}`}>
          <div className="mb-6 text-center">
            <p className="mb-1 text-sm font-medium text-gray-600">Projected Savings at Retirement</p>
            <p className={`text-5xl font-extrabold ${results.onTrack ? "text-green-700" : "text-orange-700"}`}>{fmt(results.projectedSavings)}</p>
            <p className="mt-2 text-sm text-gray-500">{retireAge - currentAge} years of saving &amp; investing</p>
          </div>

          <div className={`mb-6 rounded-lg p-4 text-center ${results.onTrack ? "bg-green-100" : "bg-amber-100"}`}>
            {results.onTrack ? (
              <p className="text-lg font-bold text-green-800">You&apos;re on track! Your savings should last {results.lastsYears}+ years in retirement.</p>
            ) : (
              <p className="text-lg font-bold text-amber-800">Gap of {fmt(results.gap)} &ndash; Consider increasing contributions or delaying retirement.</p>
            )}
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-white p-4 text-center shadow-sm">
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Total Contributions</p>
              <p className="text-xl font-bold text-teal-600">{fmt(results.totalContributions)}</p>
            </div>
            <div className="rounded-lg bg-white p-4 text-center shadow-sm">
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Investment Growth</p>
              <p className="text-xl font-bold text-green-600">{fmt(results.totalGrowth)}</p>
            </div>
            <div className="rounded-lg bg-white p-4 text-center shadow-sm">
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500">4% Rule Target</p>
              <p className="text-xl font-bold text-gray-900">{fmt(results.safeWithdrawalTarget)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
