"use client";

import { useState, useMemo } from "react";

function fmt(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function SalaryCalculator() {
  const [amount, setAmount] = useState(65000);
  const [inputType, setInputType] = useState<"annual" | "monthly" | "biweekly" | "weekly" | "hourly">("annual");
  const [hoursPerWeek, setHoursPerWeek] = useState(40);
  const [weeksPerYear, setWeeksPerYear] = useState(52);

  const results = useMemo(() => {
    let annual: number;
    const totalHours = hoursPerWeek * weeksPerYear;

    switch (inputType) {
      case "annual": annual = amount; break;
      case "monthly": annual = amount * 12; break;
      case "biweekly": annual = amount * 26; break;
      case "weekly": annual = amount * weeksPerYear; break;
      case "hourly": annual = amount * totalHours; break;
      default: annual = amount;
    }

    return {
      annual,
      monthly: annual / 12,
      biweekly: annual / 26,
      weekly: annual / weeksPerYear,
      hourly: annual / totalHours,
      daily: annual / (weeksPerYear * 5),
    };
  }, [amount, inputType, hoursPerWeek, weeksPerYear]);

  // Rough federal tax estimate (2024 brackets, single filer)
  const estimateFederalTax = (income: number): number => {
    const brackets = [
      [11600, 0.10], [47150, 0.12], [100525, 0.22], [191950, 0.24],
      [243725, 0.32], [609350, 0.35], [Infinity, 0.37],
    ] as const;
    let tax = 0;
    let prev = 0;
    for (const [limit, rate] of brackets) {
      if (income <= prev) break;
      const taxable = Math.min(income, limit) - prev;
      tax += taxable * rate;
      prev = limit;
    }
    return tax;
  };

  const fedTax = estimateFederalTax(results.annual);
  const ficaTax = Math.min(results.annual, 168600) * 0.0765;
  const totalTax = fedTax + ficaTax;
  const afterTax = results.annual - totalTax;
  const effectiveRate = results.annual > 0 ? (totalTax / results.annual) * 100 : 0;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-lg">
      <div className="p-6 md:p-8">
        <div className="mb-6">
          <label className="mb-1 block text-sm font-medium text-gray-700">Pay Type</label>
          <div className="flex flex-wrap gap-2">
            {(["annual", "monthly", "biweekly", "weekly", "hourly"] as const).map((t) => (
              <button key={t} onClick={() => setInputType(t)}
                className={`rounded-lg border px-4 py-2 text-sm font-medium capitalize transition ${inputType === t ? "border-teal-600 bg-teal-600 text-white" : "border-gray-300 bg-white text-gray-700 hover:border-teal-300"}`}>
                {t}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">{inputType.charAt(0).toUpperCase() + inputType.slice(1)} Amount</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <input type="number" step="0.01" value={amount} onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full rounded-lg border border-gray-300 py-3 pl-7 pr-4 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Hours per Week</label>
            <input type="number" value={hoursPerWeek} onChange={(e) => setHoursPerWeek(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 px-4 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Weeks per Year</label>
            <input type="number" value={weeksPerYear} onChange={(e) => setWeeksPerYear(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 px-4 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 bg-gradient-to-br from-emerald-50 to-emerald-50 p-6 md:p-8">
        <h3 className="mb-4 text-center text-sm font-semibold uppercase text-gray-500">Salary Breakdown</h3>
        <div className="overflow-auto rounded-lg border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Period</th>
                <th className="px-4 py-3 text-right font-semibold">Gross Pay</th>
              </tr>
            </thead>
            <tbody>
              {([
                ["Annual", results.annual],
                ["Monthly", results.monthly],
                ["Biweekly", results.biweekly],
                ["Weekly", results.weekly],
                ["Daily", results.daily],
                ["Hourly", results.hourly],
              ] as const).map(([label, value]) => (
                <tr key={label} className="border-t border-gray-100 hover:bg-emerald-50">
                  <td className="px-4 py-3 font-medium">{label}</td>
                  <td className="px-4 py-3 text-right text-lg font-semibold text-gray-900">{fmt(value)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="mb-4 mt-8 text-center text-sm font-semibold uppercase text-gray-500">Estimated Tax Breakdown (Federal, Single Filer)</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase text-gray-500">Federal Tax</p>
            <p className="text-lg font-bold text-red-600">{fmt(fedTax)}</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase text-gray-500">FICA (SS + Medicare)</p>
            <p className="text-lg font-bold text-red-600">{fmt(ficaTax)}</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase text-gray-500">Effective Tax Rate</p>
            <p className="text-lg font-bold text-orange-600">{effectiveRate.toFixed(1)}%</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase text-gray-500">Take-Home (Annual)</p>
            <p className="text-lg font-bold text-green-600">{fmt(afterTax)}</p>
          </div>
        </div>
        <p className="mt-3 text-center text-xs text-gray-400">*Estimate only. Does not include state taxes, deductions, or credits. Consult a tax professional.</p>
      </div>
    </div>
  );
}
