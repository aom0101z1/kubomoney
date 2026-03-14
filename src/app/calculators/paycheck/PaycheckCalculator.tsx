"use client";

import { useState, useMemo } from "react";

function fmt(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

const federalBrackets2025 = [
  { min: 0, max: 11925, rate: 0.10 },
  { min: 11925, max: 48475, rate: 0.12 },
  { min: 48475, max: 103350, rate: 0.22 },
  { min: 103350, max: 197300, rate: 0.24 },
  { min: 197300, max: 250525, rate: 0.32 },
  { min: 250525, max: 626350, rate: 0.35 },
  { min: 626350, max: Infinity, rate: 0.37 },
];

function calcFederalTax(taxableIncome: number): number {
  let tax = 0;
  for (const bracket of federalBrackets2025) {
    if (taxableIncome <= bracket.min) break;
    const taxable = Math.min(taxableIncome, bracket.max) - bracket.min;
    tax += taxable * bracket.rate;
  }
  return tax;
}

export default function PaycheckCalculator() {
  const [grossAnnual, setGrossAnnual] = useState(65000);
  const [payFrequency, setPayFrequency] = useState<"weekly" | "biweekly" | "semimonthly" | "monthly">("biweekly");
  const [filingStatus, setFilingStatus] = useState<"single" | "married">("single");
  const [stateTaxRate, setStateTaxRate] = useState(5);
  const [retirement401k, setRetirement401k] = useState(6);
  const [healthInsurance, setHealthInsurance] = useState(200);

  const results = useMemo(() => {
    const periodsPerYear = payFrequency === "weekly" ? 52 : payFrequency === "biweekly" ? 26 : payFrequency === "semimonthly" ? 24 : 12;
    const grossPerPeriod = grossAnnual / periodsPerYear;

    const standardDeduction = filingStatus === "single" ? 15700 : 31400;
    const retirement401kAnnual = grossAnnual * (retirement401k / 100);
    const healthAnnual = healthInsurance * 12;

    const taxableIncome = Math.max(0, grossAnnual - standardDeduction - retirement401kAnnual);

    const federalTaxAnnual = calcFederalTax(taxableIncome);
    const socialSecurityAnnual = Math.min(grossAnnual, 176100) * 0.062;
    const medicareAnnual = grossAnnual * 0.0145 + (grossAnnual > 200000 ? (grossAnnual - 200000) * 0.009 : 0);
    const stateTaxAnnual = taxableIncome * (stateTaxRate / 100);

    const totalTaxAnnual = federalTaxAnnual + socialSecurityAnnual + medicareAnnual + stateTaxAnnual;
    const totalDeductionsAnnual = totalTaxAnnual + retirement401kAnnual + healthAnnual;
    const netAnnual = grossAnnual - totalDeductionsAnnual;

    return {
      grossPerPeriod,
      netPerPeriod: netAnnual / periodsPerYear,
      federalTax: federalTaxAnnual / periodsPerYear,
      stateTax: stateTaxAnnual / periodsPerYear,
      socialSecurity: socialSecurityAnnual / periodsPerYear,
      medicare: medicareAnnual / periodsPerYear,
      retirement: retirement401kAnnual / periodsPerYear,
      health: healthAnnual / periodsPerYear,
      netAnnual,
      effectiveTaxRate: grossAnnual > 0 ? (totalTaxAnnual / grossAnnual) * 100 : 0,
      periodsPerYear,
    };
  }, [grossAnnual, payFrequency, filingStatus, stateTaxRate, retirement401k, healthInsurance]);

  const freqLabels = { weekly: "Weekly", biweekly: "Bi-weekly", semimonthly: "Semi-monthly", monthly: "Monthly" };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-lg">
      <div className="grid gap-6 p-6 md:grid-cols-2 md:p-8">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Annual Gross Salary</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input type="number" value={grossAnnual} onChange={(e) => setGrossAnnual(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 pl-7 pr-4 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Pay Frequency</label>
          <div className="flex gap-2">
            {(["weekly", "biweekly", "semimonthly", "monthly"] as const).map((f) => (
              <button key={f} onClick={() => setPayFrequency(f)}
                className={`flex-1 rounded-lg border py-2 text-xs font-medium transition ${payFrequency === f ? "border-teal-600 bg-teal-600 text-white" : "border-gray-300 bg-white text-gray-700 hover:border-teal-300"}`}>
                {freqLabels[f]}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Filing Status</label>
          <div className="flex gap-2">
            {(["single", "married"] as const).map((s) => (
              <button key={s} onClick={() => setFilingStatus(s)}
                className={`flex-1 rounded-lg border py-2 text-sm font-medium transition ${filingStatus === s ? "border-teal-600 bg-teal-600 text-white" : "border-gray-300 bg-white text-gray-700 hover:border-teal-300"}`}>
                {s === "single" ? "Single" : "Married"}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">State Income Tax Rate (%)</label>
          <div className="relative">
            <input type="number" step="0.1" value={stateTaxRate} onChange={(e) => setStateTaxRate(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 pl-4 pr-8 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">%</span>
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">401(k) Contribution (%)</label>
          <div className="relative">
            <input type="number" step="1" value={retirement401k} onChange={(e) => setRetirement401k(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 pl-4 pr-8 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">%</span>
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Health Insurance ($/month)</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input type="number" value={healthInsurance} onChange={(e) => setHealthInsurance(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 pl-7 pr-4 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 bg-gradient-to-br from-teal-50 to-emerald-50 p-6 md:p-8">
        <div className="mb-6 text-center">
          <p className="mb-1 text-sm font-medium text-gray-600">{freqLabels[payFrequency]} Take-Home Pay</p>
          <p className="text-5xl font-extrabold text-teal-700">{fmt(results.netPerPeriod)}</p>
          <p className="mt-1 text-sm text-gray-500">{fmt(results.netAnnual)}/year | Effective tax rate: {results.effectiveTaxRate.toFixed(1)}%</p>
        </div>

        <div className="mb-4 overflow-hidden rounded-lg bg-white shadow-sm">
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="px-4 py-2.5 font-medium text-gray-700">Gross Pay</td>
                <td className="px-4 py-2.5 text-right font-medium text-gray-900">{fmt(results.grossPerPeriod)}</td>
              </tr>
              <tr className="border-b border-gray-100 bg-red-50/50">
                <td className="px-4 py-2.5 text-gray-600">Federal Income Tax</td>
                <td className="px-4 py-2.5 text-right text-red-600">-{fmt(results.federalTax)}</td>
              </tr>
              <tr className="border-b border-gray-100 bg-red-50/50">
                <td className="px-4 py-2.5 text-gray-600">State Income Tax</td>
                <td className="px-4 py-2.5 text-right text-red-600">-{fmt(results.stateTax)}</td>
              </tr>
              <tr className="border-b border-gray-100 bg-red-50/50">
                <td className="px-4 py-2.5 text-gray-600">Social Security (6.2%)</td>
                <td className="px-4 py-2.5 text-right text-red-600">-{fmt(results.socialSecurity)}</td>
              </tr>
              <tr className="border-b border-gray-100 bg-red-50/50">
                <td className="px-4 py-2.5 text-gray-600">Medicare (1.45%)</td>
                <td className="px-4 py-2.5 text-right text-red-600">-{fmt(results.medicare)}</td>
              </tr>
              {results.retirement > 0 && (
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-2.5 text-gray-600">401(k) ({retirement401k}%)</td>
                  <td className="px-4 py-2.5 text-right text-gray-600">-{fmt(results.retirement)}</td>
                </tr>
              )}
              {results.health > 0 && (
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-2.5 text-gray-600">Health Insurance</td>
                  <td className="px-4 py-2.5 text-right text-gray-600">-{fmt(results.health)}</td>
                </tr>
              )}
              <tr className="bg-teal-50">
                <td className="px-4 py-3 font-bold text-gray-900">Net Pay (Take-Home)</td>
                <td className="px-4 py-3 text-right font-bold text-teal-700">{fmt(results.netPerPeriod)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
