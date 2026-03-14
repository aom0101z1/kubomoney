"use client";

import { useState, useMemo } from "react";

function fmt(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

interface CostItem {
  label: string;
  amount: number;
  category: "one-time" | "monthly";
}

const defaultCosts: CostItem[] = [
  { label: "LLC / Business Registration", amount: 200, category: "one-time" },
  { label: "Website & Domain", amount: 300, category: "one-time" },
  { label: "Equipment & Supplies", amount: 2000, category: "one-time" },
  { label: "Branding & Logo Design", amount: 500, category: "one-time" },
  { label: "Initial Inventory", amount: 1000, category: "one-time" },
  { label: "Rent / Coworking", amount: 800, category: "monthly" },
  { label: "Software & Subscriptions", amount: 150, category: "monthly" },
  { label: "Marketing & Advertising", amount: 500, category: "monthly" },
  { label: "Insurance", amount: 200, category: "monthly" },
  { label: "Utilities & Internet", amount: 100, category: "monthly" },
];

export default function BusinessStartupCostCalculator() {
  const [costs, setCosts] = useState<CostItem[]>(defaultCosts);
  const [runwayMonths, setRunwayMonths] = useState(6);

  const updateCost = (index: number, amount: number) => {
    const updated = [...costs];
    updated[index] = { ...updated[index], amount };
    setCosts(updated);
  };

  const results = useMemo(() => {
    const oneTimeCosts = costs.filter((c) => c.category === "one-time").reduce((sum, c) => sum + c.amount, 0);
    const monthlyCosts = costs.filter((c) => c.category === "monthly").reduce((sum, c) => sum + c.amount, 0);
    const totalRunway = monthlyCosts * runwayMonths;
    const totalNeeded = oneTimeCosts + totalRunway;
    return { oneTimeCosts, monthlyCosts, totalRunway, totalNeeded };
  }, [costs, runwayMonths]);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-lg">
      <div className="p-6 md:p-8">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">One-Time Costs</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {costs.map((cost, i) =>
            cost.category === "one-time" ? (
              <div key={i}>
                <label className="mb-1 block text-sm font-medium text-gray-700">{cost.label}</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <input type="number" value={cost.amount} onChange={(e) => updateCost(i, Number(e.target.value))}
                    className="w-full rounded-lg border border-gray-300 py-2.5 pl-7 pr-4 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
                </div>
              </div>
            ) : null
          )}
        </div>

        <h3 className="mb-4 mt-8 text-sm font-semibold uppercase tracking-wider text-gray-500">Monthly Costs</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {costs.map((cost, i) =>
            cost.category === "monthly" ? (
              <div key={i}>
                <label className="mb-1 block text-sm font-medium text-gray-700">{cost.label}</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <input type="number" value={cost.amount} onChange={(e) => updateCost(i, Number(e.target.value))}
                    className="w-full rounded-lg border border-gray-300 py-2.5 pl-7 pr-4 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
                </div>
              </div>
            ) : null
          )}
        </div>

        <div className="mt-8">
          <label className="mb-1 block text-sm font-medium text-gray-700">Cash Runway (Months)</label>
          <div className="flex gap-2">
            {[3, 6, 9, 12].map((m) => (
              <button key={m} onClick={() => setRunwayMonths(m)}
                className={`flex-1 rounded-lg border py-2 text-sm font-medium transition ${runwayMonths === m ? "border-teal-600 bg-teal-600 text-white" : "border-gray-300 bg-white text-gray-700 hover:border-teal-300"}`}>
                {m} mo
              </button>
            ))}
          </div>
          <p className="mt-1 text-xs text-gray-500">How many months of operating expenses to save for before launch</p>
        </div>
      </div>

      <div className="border-t border-gray-200 bg-gradient-to-br from-teal-50 to-emerald-50 p-6 md:p-8">
        <div className="mb-6 text-center">
          <p className="mb-1 text-sm font-medium text-gray-600">Total Startup Capital Needed</p>
          <p className="text-5xl font-extrabold text-teal-700">{fmt(results.totalNeeded)}</p>
          <p className="mt-1 text-sm text-gray-500">one-time costs + {runwayMonths} months runway</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">One-Time Costs</p>
            <p className="text-xl font-bold text-gray-900">{fmt(results.oneTimeCosts)}</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Monthly Costs</p>
            <p className="text-xl font-bold text-gray-900">{fmt(results.monthlyCosts)}<span className="text-sm font-normal text-gray-500">/mo</span></p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">{runwayMonths}-Month Runway</p>
            <p className="text-xl font-bold text-gray-900">{fmt(results.totalRunway)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
