"use client";

import { useState, useMemo } from "react";

function fmt(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

export default function DTICalculator() {
  const [grossIncome, setGrossIncome] = useState(6000);
  const [mortgage, setMortgage] = useState(1500);
  const [carPayment, setCarPayment] = useState(400);
  const [studentLoans, setStudentLoans] = useState(300);
  const [creditCards, setCreditCards] = useState(200);
  const [otherDebts, setOtherDebts] = useState(0);

  const results = useMemo(() => {
    const totalDebt = mortgage + carPayment + studentLoans + creditCards + otherDebts;
    const dti = grossIncome > 0 ? (totalDebt / grossIncome) * 100 : 0;
    const frontEnd = grossIncome > 0 ? (mortgage / grossIncome) * 100 : 0;

    let rating: string;
    let color: string;
    let description: string;
    if (dti <= 36) {
      rating = "Excellent";
      color = "text-green-700";
      description = "You're in great shape. Most lenders consider this a healthy DTI ratio.";
    } else if (dti <= 43) {
      rating = "Acceptable";
      color = "text-yellow-700";
      description = "This is the maximum DTI most lenders will accept for a qualified mortgage.";
    } else if (dti <= 50) {
      rating = "High";
      color = "text-orange-700";
      description = "You may have difficulty getting approved for new loans. Consider paying down debt.";
    } else {
      rating = "Very High";
      color = "text-red-700";
      description = "Your debt load is significant. Focus on reducing debt before taking on new obligations.";
    }

    return { totalDebt, dti, frontEnd, rating, color, description };
  }, [grossIncome, mortgage, carPayment, studentLoans, creditCards, otherDebts]);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-lg">
      <div className="p-6 md:p-8">
        <div className="mb-6">
          <label className="mb-1 block text-sm font-medium text-gray-700">Gross Monthly Income (before taxes)</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input type="number" value={grossIncome} onChange={(e) => setGrossIncome(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 pl-7 pr-4 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
          </div>
        </div>

        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">Monthly Debt Payments</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {([
            ["Mortgage / Rent", mortgage, setMortgage],
            ["Car Payment", carPayment, setCarPayment],
            ["Student Loans", studentLoans, setStudentLoans],
            ["Credit Card Minimums", creditCards, setCreditCards],
            ["Other Debts", otherDebts, setOtherDebts],
          ] as [string, number, (v: number) => void][]).map(([label, value, setter]) => (
            <div key={label}>
              <label className="mb-1 block text-sm font-medium text-gray-700">{label}</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                <input type="number" value={value} onChange={(e) => setter(Number(e.target.value))}
                  className="w-full rounded-lg border border-gray-300 py-3 pl-7 pr-4 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-200 bg-gradient-to-br from-slate-50 to-gray-100 p-6 md:p-8">
        <div className="mb-6 text-center">
          <p className="mb-1 text-sm font-medium text-gray-600">Your Debt-to-Income Ratio</p>
          <p className={`text-6xl font-extrabold ${results.color}`}>{results.dti.toFixed(1)}%</p>
          <p className={`mt-2 text-lg font-semibold ${results.color}`}>{results.rating}</p>
          <p className="mt-1 text-sm text-gray-600">{results.description}</p>
        </div>

        {/* DTI Scale */}
        <div className="mb-6">
          <div className="relative h-6 overflow-hidden rounded-full bg-gray-200">
            <div className="absolute inset-y-0 left-0 w-[36%] bg-green-400" />
            <div className="absolute inset-y-0 left-[36%] w-[7%] bg-yellow-400" />
            <div className="absolute inset-y-0 left-[43%] w-[7%] bg-orange-400" />
            <div className="absolute inset-y-0 left-[50%] w-[50%] bg-red-400" />
            <div className="absolute inset-y-0 w-1 bg-gray-900 transition-all" style={{ left: `${Math.min(results.dti, 100)}%` }} />
          </div>
          <div className="mt-1 flex justify-between text-xs text-gray-500">
            <span>0%</span><span>36%</span><span>43%</span><span>50%+</span>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase text-gray-500">Total Monthly Debt</p>
            <p className="text-xl font-bold text-gray-900">{fmt(results.totalDebt)}</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase text-gray-500">Front-End DTI</p>
            <p className="text-xl font-bold text-gray-900">{results.frontEnd.toFixed(1)}%</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase text-gray-500">Remaining Budget</p>
            <p className="text-xl font-bold text-green-600">{fmt(grossIncome - results.totalDebt)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
