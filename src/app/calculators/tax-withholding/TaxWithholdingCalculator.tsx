"use client";

import { useState, useMemo } from "react";

function fmt(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

const brackets2024 = {
  single: [
    { min: 0, max: 11600, rate: 0.10 },
    { min: 11600, max: 47150, rate: 0.12 },
    { min: 47150, max: 100525, rate: 0.22 },
    { min: 100525, max: 191950, rate: 0.24 },
    { min: 191950, max: 243725, rate: 0.32 },
    { min: 243725, max: 609350, rate: 0.35 },
    { min: 609350, max: Infinity, rate: 0.37 },
  ],
  married: [
    { min: 0, max: 23200, rate: 0.10 },
    { min: 23200, max: 94300, rate: 0.12 },
    { min: 94300, max: 201050, rate: 0.22 },
    { min: 201050, max: 383900, rate: 0.24 },
    { min: 383900, max: 487450, rate: 0.32 },
    { min: 487450, max: 731200, rate: 0.35 },
    { min: 731200, max: Infinity, rate: 0.37 },
  ],
  head: [
    { min: 0, max: 16550, rate: 0.10 },
    { min: 16550, max: 63100, rate: 0.12 },
    { min: 63100, max: 100500, rate: 0.22 },
    { min: 100500, max: 191950, rate: 0.24 },
    { min: 191950, max: 243700, rate: 0.32 },
    { min: 243700, max: 609350, rate: 0.35 },
    { min: 609350, max: Infinity, rate: 0.37 },
  ],
};

const standardDeductions = { single: 14600, married: 29200, head: 21900 };
const FICA_SS_RATE = 0.062;
const FICA_SS_MAX = 168600;
const FICA_MEDICARE = 0.0145;
const FICA_MEDICARE_ADDITIONAL_THRESHOLD = 200000;
const FICA_MEDICARE_ADDITIONAL = 0.009;

function calcFederalTax(taxableIncome: number, brackets: typeof brackets2024.single): number {
  let tax = 0;
  for (const b of brackets) {
    if (taxableIncome <= b.min) break;
    const taxable = Math.min(taxableIncome, b.max) - b.min;
    tax += taxable * b.rate;
  }
  return tax;
}

export default function TaxWithholdingCalculator() {
  const [grossIncome, setGrossIncome] = useState(75000);
  const [filingStatus, setFilingStatus] = useState<"single" | "married" | "head">("single");
  const [dependents, setDependents] = useState(0);
  const [additionalDeductions, setAdditionalDeductions] = useState(0);
  const [payFrequency, setPayFrequency] = useState<"weekly" | "biweekly" | "semimonthly" | "monthly">("biweekly");

  const results = useMemo(() => {
    const stdDeduction = standardDeductions[filingStatus];
    const totalDeductions = Math.max(stdDeduction, stdDeduction + additionalDeductions);
    const taxableIncome = Math.max(0, grossIncome - totalDeductions);

    const federalTax = calcFederalTax(taxableIncome, brackets2024[filingStatus]);
    const childTaxCredit = dependents * 2000;
    const adjustedFederalTax = Math.max(0, federalTax - childTaxCredit);

    const ssTax = Math.min(grossIncome, FICA_SS_MAX) * FICA_SS_RATE;
    const medicareTax = grossIncome * FICA_MEDICARE +
      (grossIncome > FICA_MEDICARE_ADDITIONAL_THRESHOLD ? (grossIncome - FICA_MEDICARE_ADDITIONAL_THRESHOLD) * FICA_MEDICARE_ADDITIONAL : 0);
    const ficaTotal = ssTax + medicareTax;

    const totalTax = adjustedFederalTax + ficaTotal;
    const takeHome = grossIncome - totalTax;
    const effectiveRate = grossIncome > 0 ? (totalTax / grossIncome) * 100 : 0;
    const marginalRate = taxableIncome > 0 ? brackets2024[filingStatus].find(b => taxableIncome <= b.max)?.rate ?? 0 : 0;

    const periods = { weekly: 52, biweekly: 26, semimonthly: 24, monthly: 12 };
    const periodsPerYear = periods[payFrequency];
    const perPaycheck = takeHome / periodsPerYear;
    const taxPerPaycheck = totalTax / periodsPerYear;

    return { taxableIncome, federalTax: adjustedFederalTax, ssTax, medicareTax, ficaTotal, totalTax, takeHome, effectiveRate, marginalRate, perPaycheck, taxPerPaycheck, periodsPerYear, stdDeduction: totalDeductions };
  }, [grossIncome, filingStatus, dependents, additionalDeductions, payFrequency]);

  const freqLabels = { weekly: "Weekly", biweekly: "Bi-Weekly", semimonthly: "Semi-Monthly", monthly: "Monthly" };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-lg">
      <div className="grid gap-6 p-6 md:grid-cols-2 md:p-8">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Annual Gross Income</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input type="number" value={grossIncome} onChange={(e) => setGrossIncome(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 pl-7 pr-4 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Filing Status</label>
          <div className="flex gap-2">
            {([["single", "Single"], ["married", "Married"], ["head", "Head of Household"]] as const).map(([val, label]) => (
              <button key={val} onClick={() => setFilingStatus(val)}
                className={`flex-1 rounded-lg border py-3 text-sm font-medium transition ${filingStatus === val ? "border-teal-600 bg-teal-600 text-white" : "border-gray-300 bg-white text-gray-700 hover:border-teal-300"}`}>
                {label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Dependents (Children under 17)</label>
          <div className="flex gap-2">
            {[0, 1, 2, 3, 4].map((d) => (
              <button key={d} onClick={() => setDependents(d)}
                className={`flex-1 rounded-lg border py-3 text-lg font-medium transition ${dependents === d ? "border-teal-600 bg-teal-600 text-white" : "border-gray-300 bg-white text-gray-700 hover:border-teal-300"}`}>
                {d}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Additional Deductions (above standard)</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input type="number" value={additionalDeductions} onChange={(e) => setAdditionalDeductions(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 pl-7 pr-4 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
          </div>
        </div>
        <div className="md:col-span-2">
          <label className="mb-1 block text-sm font-medium text-gray-700">Pay Frequency</label>
          <div className="flex gap-2">
            {(Object.entries(freqLabels) as [typeof payFrequency, string][]).map(([val, label]) => (
              <button key={val} onClick={() => setPayFrequency(val)}
                className={`flex-1 rounded-lg border py-3 text-sm font-medium transition ${payFrequency === val ? "border-teal-600 bg-teal-600 text-white" : "border-gray-300 bg-white text-gray-700 hover:border-teal-300"}`}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 bg-gradient-to-br from-teal-50 to-emerald-50 p-6 md:p-8">
        <div className="mb-6 grid gap-4 sm:grid-cols-2">
          <div className="text-center">
            <p className="mb-1 text-sm font-medium text-gray-600">Estimated Take-Home Pay</p>
            <p className="text-4xl font-extrabold text-teal-700">{fmt(results.takeHome)}</p>
            <p className="mt-1 text-sm text-gray-500">{fmt(results.perPaycheck)} per paycheck ({freqLabels[payFrequency].toLowerCase()})</p>
          </div>
          <div className="text-center">
            <p className="mb-1 text-sm font-medium text-gray-600">Total Estimated Tax</p>
            <p className="text-4xl font-extrabold text-red-600">{fmt(results.totalTax)}</p>
            <p className="mt-1 text-sm text-gray-500">{fmt(results.taxPerPaycheck)} withheld per paycheck</p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Federal Income Tax</p>
            <p className="text-xl font-bold text-gray-900">{fmt(results.federalTax)}</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Social Security</p>
            <p className="text-xl font-bold text-gray-900">{fmt(results.ssTax)}</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Medicare</p>
            <p className="text-xl font-bold text-gray-900">{fmt(results.medicareTax)}</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Effective Tax Rate</p>
            <p className="text-xl font-bold text-teal-700">{results.effectiveRate.toFixed(1)}%</p>
            <p className="text-xs text-gray-500">{(results.marginalRate * 100).toFixed(0)}% marginal</p>
          </div>
        </div>
      </div>
    </div>
  );
}
