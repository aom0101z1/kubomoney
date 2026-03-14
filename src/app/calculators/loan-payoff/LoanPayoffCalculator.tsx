"use client";

import { useState, useMemo } from "react";

function fmt(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function LoanPayoffCalculator() {
  const [balance, setBalance] = useState(25000);
  const [rate, setRate] = useState(5.5);
  const [monthlyPayment, setMonthlyPayment] = useState(500);
  const [extraPayment, setExtraPayment] = useState(0);

  const results = useMemo(() => {
    const mr = rate / 100 / 12;
    const totalPmt = monthlyPayment + extraPayment;
    if (balance <= 0 || mr <= 0 || totalPmt <= balance * mr) return null;

    // Without extra payments
    let bal1 = balance;
    let months1 = 0;
    let interest1 = 0;
    while (bal1 > 0 && months1 < 600) {
      const intPmt = bal1 * mr;
      interest1 += intPmt;
      const prinPmt = Math.min(monthlyPayment - intPmt, bal1);
      bal1 -= prinPmt;
      months1++;
      if (bal1 < 0.01) bal1 = 0;
    }

    // With extra payments
    let bal2 = balance;
    let months2 = 0;
    let interest2 = 0;
    while (bal2 > 0 && months2 < 600) {
      const intPmt = bal2 * mr;
      interest2 += intPmt;
      const prinPmt = Math.min(totalPmt - intPmt, bal2);
      bal2 -= prinPmt;
      months2++;
      if (bal2 < 0.01) bal2 = 0;
    }

    return {
      months1, interest1, total1: balance + interest1,
      months2, interest2, total2: balance + interest2,
      savedInterest: interest1 - interest2,
      savedMonths: months1 - months2,
    };
  }, [balance, rate, monthlyPayment, extraPayment]);

  const fmtTime = (m: number) => {
    const y = Math.floor(m / 12);
    const mo = m % 12;
    return y > 0 ? `${y} yr ${mo} mo` : `${mo} mo`;
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-lg">
      <div className="grid gap-6 p-6 md:grid-cols-2 md:p-8">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Loan Balance</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input type="number" value={balance} onChange={(e) => setBalance(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 pl-7 pr-4 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Interest Rate (%)</label>
          <div className="relative">
            <input type="number" step="0.1" value={rate} onChange={(e) => setRate(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 pl-4 pr-8 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">%</span>
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Monthly Payment</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input type="number" value={monthlyPayment} onChange={(e) => setMonthlyPayment(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 pl-7 pr-4 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Extra Monthly Payment</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input type="number" value={extraPayment} onChange={(e) => setExtraPayment(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 pl-7 pr-4 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
          </div>
        </div>
      </div>

      {results && (
        <div className="border-t border-gray-200 bg-gradient-to-br from-orange-50 to-amber-50 p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <h3 className="mb-3 text-sm font-semibold uppercase text-gray-500">Current Plan</h3>
              <p className="text-3xl font-extrabold text-gray-900">{fmtTime(results.months1)}</p>
              <p className="mt-2 text-sm text-gray-600">Total interest: <span className="font-semibold text-red-600">{fmt(results.interest1)}</span></p>
              <p className="text-sm text-gray-600">Total paid: {fmt(results.total1)}</p>
            </div>
            {extraPayment > 0 && (
              <div className="rounded-xl border-2 border-green-300 bg-white p-5 shadow-sm">
                <h3 className="mb-3 text-sm font-semibold uppercase text-green-700">With Extra Payments</h3>
                <p className="text-3xl font-extrabold text-green-700">{fmtTime(results.months2)}</p>
                <p className="mt-2 text-sm text-gray-600">Total interest: <span className="font-semibold text-green-600">{fmt(results.interest2)}</span></p>
                <p className="text-sm text-gray-600">Total paid: {fmt(results.total2)}</p>
              </div>
            )}
          </div>
          {extraPayment > 0 && results.savedInterest > 0 && (
            <div className="mt-6 rounded-lg bg-green-100 p-4 text-center">
              <p className="text-lg font-bold text-green-800">
                You save {fmt(results.savedInterest)} in interest and pay off {results.savedMonths} months earlier!
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
