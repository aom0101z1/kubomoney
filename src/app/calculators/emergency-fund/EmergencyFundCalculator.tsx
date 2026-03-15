"use client";

import { useState, useMemo } from "react";

function fmt(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

export default function EmergencyFundCalculator() {
  const [housing, setHousing] = useState(1500);
  const [food, setFood] = useState(600);
  const [transportation, setTransportation] = useState(400);
  const [utilities, setUtilities] = useState(250);
  const [insurance, setInsurance] = useState(300);
  const [other, setOther] = useState(350);
  const [months, setMonths] = useState(6);
  const [currentSavings, setCurrentSavings] = useState(2000);
  const [monthlySaving, setMonthlySaving] = useState(500);

  const results = useMemo(() => {
    const monthlyExpenses = housing + food + transportation + utilities + insurance + other;
    const targetFund = monthlyExpenses * months;
    const gap = Math.max(0, targetFund - currentSavings);
    const monthsToGoal = monthlySaving > 0 ? Math.ceil(gap / monthlySaving) : gap > 0 ? Infinity : 0;
    return { monthlyExpenses, targetFund, gap, monthsToGoal };
  }, [housing, food, transportation, utilities, insurance, other, months, currentSavings, monthlySaving]);

  const years = Math.floor(results.monthsToGoal / 12);
  const remainingMo = results.monthsToGoal % 12;
  const timeLabel = results.monthsToGoal === 0 ? "Already funded!" :
    results.monthsToGoal === Infinity ? "N/A" :
    years > 0 ? `${years} year${years !== 1 ? "s" : ""}${remainingMo > 0 ? ` ${remainingMo} mo` : ""}` :
    `${remainingMo} month${remainingMo !== 1 ? "s" : ""}`;

  const progress = results.targetFund > 0 ? Math.min(100, Math.round((currentSavings / results.targetFund) * 100)) : 100;

  const inputs = [
    { label: "Housing (Rent/Mortgage)", value: housing, set: setHousing },
    { label: "Food & Groceries", value: food, set: setFood },
    { label: "Transportation", value: transportation, set: setTransportation },
    { label: "Utilities", value: utilities, set: setUtilities },
    { label: "Insurance & Healthcare", value: insurance, set: setInsurance },
    { label: "Other Expenses", value: other, set: setOther },
  ];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-lg">
      <div className="p-6 md:p-8">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">Monthly Expenses</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {inputs.map((inp) => (
            <div key={inp.label}>
              <label className="mb-1 block text-sm font-medium text-gray-700">{inp.label}</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                <input type="number" value={inp.value} onChange={(e) => inp.set(Number(e.target.value))}
                  className="w-full rounded-lg border border-gray-300 py-3 pl-7 pr-4 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Months of Coverage</label>
            <div className="flex gap-2">
              {[3, 6, 9, 12].map((m) => (
                <button key={m} onClick={() => setMonths(m)}
                  className={`flex-1 rounded-lg border py-3 text-lg font-medium transition ${months === m ? "border-teal-600 bg-teal-600 text-white" : "border-gray-300 bg-white text-gray-700 hover:border-teal-300"}`}>
                  {m}
                </button>
              ))}
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
            <label className="mb-1 block text-sm font-medium text-gray-700">Monthly Saving</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <input type="number" value={monthlySaving} onChange={(e) => setMonthlySaving(Number(e.target.value))}
                className="w-full rounded-lg border border-gray-300 py-3 pl-7 pr-4 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 bg-gradient-to-br from-teal-50 to-emerald-50 p-6 md:p-8">
        <div className="mb-6 text-center">
          <p className="mb-1 text-sm font-medium text-gray-600">Emergency Fund Target</p>
          <p className="text-5xl font-extrabold text-teal-700">{fmt(results.targetFund)}</p>
          <p className="mt-1 text-sm text-gray-500">{months} months &times; {fmt(results.monthlyExpenses)}/mo in expenses</p>
        </div>

        {/* Progress bar */}
        <div className="mb-6">
          <div className="mb-1 flex justify-between text-sm text-gray-600">
            <span>{fmt(currentSavings)} saved</span>
            <span>{progress}%</span>
          </div>
          <div className="h-4 w-full overflow-hidden rounded-full bg-gray-200">
            <div className="h-full rounded-full bg-teal-500 transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Monthly Expenses</p>
            <p className="text-xl font-bold text-gray-900">{fmt(results.monthlyExpenses)}</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Still Needed</p>
            <p className="text-xl font-bold text-red-600">{fmt(results.gap)}</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Time to Fully Funded</p>
            <p className="text-xl font-bold text-teal-700">{timeLabel}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
