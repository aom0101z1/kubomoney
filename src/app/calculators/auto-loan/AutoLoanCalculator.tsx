"use client";

import { useState, useMemo } from "react";

function fmt(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

export default function AutoLoanCalculator() {
  const [vehiclePrice, setVehiclePrice] = useState(35000);
  const [downPayment, setDownPayment] = useState(5000);
  const [tradeIn, setTradeIn] = useState(0);
  const [annualRate, setAnnualRate] = useState(6.5);
  const [termMonths, setTermMonths] = useState(60);
  const [salesTax, setSalesTax] = useState(7);

  const results = useMemo(() => {
    const taxAmount = (vehiclePrice - tradeIn) * (salesTax / 100);
    const loanAmount = vehiclePrice + taxAmount - downPayment - tradeIn;
    if (loanAmount <= 0) return { monthlyPayment: 0, totalPaid: 0, totalInterest: 0, loanAmount: 0, taxAmount };

    const r = annualRate / 100 / 12;
    const n = termMonths;

    let monthlyPayment: number;
    if (r === 0) {
      monthlyPayment = loanAmount / n;
    } else {
      monthlyPayment = loanAmount * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    }

    const totalPaid = monthlyPayment * n;
    const totalInterest = totalPaid - loanAmount;

    return { monthlyPayment, totalPaid, totalInterest, loanAmount, taxAmount };
  }, [vehiclePrice, downPayment, tradeIn, annualRate, termMonths, salesTax]);

  const terms = [36, 48, 60, 72, 84];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-lg">
      <div className="grid gap-6 p-6 md:grid-cols-2 md:p-8">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Vehicle Price</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input type="number" value={vehiclePrice} onChange={(e) => setVehiclePrice(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 pl-7 pr-4 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Down Payment</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input type="number" value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 pl-7 pr-4 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Trade-in Value</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input type="number" value={tradeIn} onChange={(e) => setTradeIn(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 pl-7 pr-4 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Interest Rate (%)</label>
          <div className="relative">
            <input type="number" step="0.1" value={annualRate} onChange={(e) => setAnnualRate(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 pl-4 pr-8 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">%</span>
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Sales Tax (%)</label>
          <div className="relative">
            <input type="number" step="0.1" value={salesTax} onChange={(e) => setSalesTax(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 pl-4 pr-8 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">%</span>
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Loan Term</label>
          <div className="flex gap-2">
            {terms.map((t) => (
              <button key={t} onClick={() => setTermMonths(t)}
                className={`flex-1 rounded-lg border py-2 text-sm font-medium transition ${termMonths === t ? "border-teal-600 bg-teal-600 text-white" : "border-gray-300 bg-white text-gray-700 hover:border-teal-300"}`}>
                {t} mo
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 bg-gradient-to-br from-teal-50 to-emerald-50 p-6 md:p-8">
        <div className="mb-6 text-center">
          <p className="mb-1 text-sm font-medium text-gray-600">Monthly Payment</p>
          <p className="text-5xl font-extrabold text-teal-700">{fmt(results.monthlyPayment)}</p>
          <p className="mt-1 text-sm text-gray-500">{termMonths} months at {annualRate}% APR</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Loan Amount</p>
            <p className="text-xl font-bold text-gray-900">{fmt(results.loanAmount)}</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Sales Tax</p>
            <p className="text-xl font-bold text-gray-900">{fmt(results.taxAmount)}</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Total Interest</p>
            <p className="text-xl font-bold text-red-600">{fmt(results.totalInterest)}</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Total Cost</p>
            <p className="text-xl font-bold text-gray-900">{fmt(results.totalPaid)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
