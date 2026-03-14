"use client";

import { useState, useMemo } from "react";

function fmt(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function TipCalculator() {
  const [billAmount, setBillAmount] = useState(85);
  const [tipPercent, setTipPercent] = useState(20);
  const [splitWays, setSplitWays] = useState(1);

  const results = useMemo(() => {
    const tipAmount = billAmount * (tipPercent / 100);
    const totalBill = billAmount + tipAmount;
    const perPerson = splitWays > 0 ? totalBill / splitWays : totalBill;
    const tipPerPerson = splitWays > 0 ? tipAmount / splitWays : tipAmount;
    return { tipAmount, totalBill, perPerson, tipPerPerson };
  }, [billAmount, tipPercent, splitWays]);

  const tipPresets = [10, 15, 18, 20, 25];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-lg">
      <div className="grid gap-6 p-6 md:grid-cols-2 md:p-8">
        <div className="md:col-span-2">
          <label className="mb-1 block text-sm font-medium text-gray-700">Bill Amount</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input type="number" step="0.01" value={billAmount} onChange={(e) => setBillAmount(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 pl-7 pr-4 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Tip Percentage</label>
          <div className="flex gap-2">
            {tipPresets.map((t) => (
              <button key={t} onClick={() => setTipPercent(t)}
                className={`flex-1 rounded-lg border py-2 text-sm font-medium transition ${tipPercent === t ? "border-teal-600 bg-teal-600 text-white" : "border-gray-300 bg-white text-gray-700 hover:border-teal-300"}`}>
                {t}%
              </button>
            ))}
          </div>
          <div className="relative mt-2">
            <input type="number" step="1" value={tipPercent} onChange={(e) => setTipPercent(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-2 pl-4 pr-8 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">%</span>
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Split Between</label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <button key={s} onClick={() => setSplitWays(s)}
                className={`flex-1 rounded-lg border py-2 text-sm font-medium transition ${splitWays === s ? "border-teal-600 bg-teal-600 text-white" : "border-gray-300 bg-white text-gray-700 hover:border-teal-300"}`}>
                {s === 1 ? "Just me" : `${s}`}
              </button>
            ))}
          </div>
          <div className="relative mt-2">
            <input type="number" min="1" value={splitWays} onChange={(e) => setSplitWays(Math.max(1, Number(e.target.value)))}
              className="w-full rounded-lg border border-gray-300 py-2 pl-4 pr-4 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 bg-gradient-to-br from-teal-50 to-emerald-50 p-6 md:p-8">
        <div className="mb-6 text-center">
          <p className="mb-1 text-sm font-medium text-gray-600">{splitWays > 1 ? "Each Person Pays" : "Total with Tip"}</p>
          <p className="text-5xl font-extrabold text-teal-700">{fmt(splitWays > 1 ? results.perPerson : results.totalBill)}</p>
          <p className="mt-1 text-sm text-gray-500">{tipPercent}% tip{splitWays > 1 ? ` split ${splitWays} ways` : ""}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Tip Amount</p>
            <p className="text-xl font-bold text-teal-700">{fmt(results.tipAmount)}</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Total Bill</p>
            <p className="text-xl font-bold text-gray-900">{fmt(results.totalBill)}</p>
          </div>
          {splitWays > 1 && (
            <>
              <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Tip per Person</p>
                <p className="text-xl font-bold text-teal-700">{fmt(results.tipPerPerson)}</p>
              </div>
              <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Per Person</p>
                <p className="text-xl font-bold text-gray-900">{fmt(results.perPerson)}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
