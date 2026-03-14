"use client";

import { useState, useMemo } from "react";

function fmt(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

export default function CreditCardPayoffCalculator() {
  const [balance, setBalance] = useState(5000);
  const [apr, setApr] = useState(22);
  const [monthlyPayment, setMonthlyPayment] = useState(200);
  const [mode, setMode] = useState<"payment" | "months">("payment");
  const [targetMonths, setTargetMonths] = useState(24);

  const results = useMemo(() => {
    const r = apr / 100 / 12;

    if (mode === "payment") {
      // Given fixed monthly payment, how long to pay off?
      if (monthlyPayment <= balance * r) {
        return { months: Infinity, totalPaid: Infinity, totalInterest: Infinity, monthlyPayment, schedule: [] };
      }
      let remaining = balance;
      let months = 0;
      let totalPaid = 0;
      const schedule: { month: number; payment: number; principal: number; interest: number; balance: number }[] = [];

      while (remaining > 0.01 && months < 600) {
        months++;
        const interest = remaining * r;
        const payment = Math.min(monthlyPayment, remaining + interest);
        const principal = payment - interest;
        remaining -= principal;
        totalPaid += payment;
        if (months <= 60 || remaining <= 0.01) {
          schedule.push({ month: months, payment, principal, interest, balance: Math.max(0, remaining) });
        }
      }
      return { months, totalPaid, totalInterest: totalPaid - balance, monthlyPayment, schedule };
    } else {
      // Given target months, what monthly payment needed?
      const n = targetMonths;
      let neededPayment: number;
      if (r === 0) {
        neededPayment = balance / n;
      } else {
        neededPayment = balance * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      }
      const totalPaid = neededPayment * n;
      return { months: n, totalPaid, totalInterest: totalPaid - balance, monthlyPayment: neededPayment, schedule: [] };
    }
  }, [balance, apr, monthlyPayment, mode, targetMonths]);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-lg">
      <div className="p-6 md:p-8">
        <div className="mb-6 flex gap-2">
          <button onClick={() => setMode("payment")}
            className={`flex-1 rounded-lg border py-2 text-sm font-medium transition ${mode === "payment" ? "border-teal-600 bg-teal-600 text-white" : "border-gray-300 bg-white text-gray-700 hover:border-teal-300"}`}>
            I know my monthly payment
          </button>
          <button onClick={() => setMode("months")}
            className={`flex-1 rounded-lg border py-2 text-sm font-medium transition ${mode === "months" ? "border-teal-600 bg-teal-600 text-white" : "border-gray-300 bg-white text-gray-700 hover:border-teal-300"}`}>
            I want to pay off in X months
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Credit Card Balance</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <input type="number" value={balance} onChange={(e) => setBalance(Number(e.target.value))}
                className="w-full rounded-lg border border-gray-300 py-3 pl-7 pr-4 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Annual Interest Rate (APR)</label>
            <div className="relative">
              <input type="number" step="0.1" value={apr} onChange={(e) => setApr(Number(e.target.value))}
                className="w-full rounded-lg border border-gray-300 py-3 pl-4 pr-8 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">%</span>
            </div>
          </div>
          {mode === "payment" ? (
            <div className="md:col-span-2">
              <label className="mb-1 block text-sm font-medium text-gray-700">Monthly Payment</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                <input type="number" value={monthlyPayment} onChange={(e) => setMonthlyPayment(Number(e.target.value))}
                  className="w-full rounded-lg border border-gray-300 py-3 pl-7 pr-4 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
              </div>
            </div>
          ) : (
            <div className="md:col-span-2">
              <label className="mb-1 block text-sm font-medium text-gray-700">Pay Off In (Months)</label>
              <input type="number" value={targetMonths} onChange={(e) => setTargetMonths(Number(e.target.value))}
                className="w-full rounded-lg border border-gray-300 py-3 px-4 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-gray-200 bg-gradient-to-br from-teal-50 to-emerald-50 p-6 md:p-8">
        {results.months === Infinity ? (
          <div className="text-center">
            <p className="text-xl font-bold text-red-600">Payment too low!</p>
            <p className="text-gray-600">Your monthly payment of {fmt(monthlyPayment)} doesn&apos;t cover the interest. You need to pay at least {fmt(balance * (apr / 100 / 12) + 1)}/month.</p>
          </div>
        ) : (
          <>
            <div className="mb-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                  {mode === "payment" ? "Time to Pay Off" : "Monthly Payment"}
                </p>
                <p className="text-3xl font-extrabold text-teal-700">
                  {mode === "payment"
                    ? `${Math.floor(results.months / 12)}y ${results.months % 12}m`
                    : fmt(results.monthlyPayment)}
                </p>
              </div>
              <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Total Interest</p>
                <p className="text-3xl font-extrabold text-red-600">{fmt(results.totalInterest)}</p>
              </div>
              <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Total Paid</p>
                <p className="text-3xl font-extrabold text-gray-900">{fmt(results.totalPaid)}</p>
              </div>
            </div>

            {mode === "payment" && results.schedule.length > 0 && (
              <div className="max-h-80 overflow-auto rounded-lg border border-gray-200">
                <table className="w-full text-sm">
                  <thead className="sticky top-0 bg-gray-100">
                    <tr>
                      <th className="px-3 py-2 text-left font-semibold">Month</th>
                      <th className="px-3 py-2 text-right font-semibold">Payment</th>
                      <th className="px-3 py-2 text-right font-semibold">Principal</th>
                      <th className="px-3 py-2 text-right font-semibold">Interest</th>
                      <th className="px-3 py-2 text-right font-semibold">Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.schedule.map((row) => (
                      <tr key={row.month} className="border-t border-gray-100 hover:bg-teal-50">
                        <td className="px-3 py-2">{row.month}</td>
                        <td className="px-3 py-2 text-right">{fmt(row.payment)}</td>
                        <td className="px-3 py-2 text-right text-teal-600">{fmt(row.principal)}</td>
                        <td className="px-3 py-2 text-right text-red-600">{fmt(row.interest)}</td>
                        <td className="px-3 py-2 text-right font-medium">{fmt(row.balance)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
