"use client";

import { useState } from "react";

function fmt(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

interface LineItem {
  id: number;
  label: string;
  value: number;
}

let nextId = 1;
function createItem(label: string, value: number): LineItem {
  return { id: nextId++, label, value };
}

export default function NetWorthCalculator() {
  const [assets, setAssets] = useState<LineItem[]>([
    createItem("Cash & Savings", 10000),
    createItem("Investments (401k, IRA, Stocks)", 50000),
    createItem("Home Value", 300000),
    createItem("Vehicle(s)", 25000),
    createItem("Other Assets", 0),
  ]);

  const [liabilities, setLiabilities] = useState<LineItem[]>([
    createItem("Mortgage Balance", 220000),
    createItem("Student Loans", 30000),
    createItem("Auto Loan(s)", 15000),
    createItem("Credit Card Debt", 5000),
    createItem("Other Debts", 0),
  ]);

  const totalAssets = assets.reduce((sum, a) => sum + a.value, 0);
  const totalLiabilities = liabilities.reduce((sum, l) => sum + l.value, 0);
  const netWorth = totalAssets - totalLiabilities;

  const updateItem = (list: LineItem[], setList: (items: LineItem[]) => void, id: number, field: "label" | "value", val: string | number) => {
    setList(list.map((item) => item.id === id ? { ...item, [field]: val } : item));
  };

  const addItem = (list: LineItem[], setList: (items: LineItem[]) => void) => {
    setList([...list, createItem("", 0)]);
  };

  const removeItem = (list: LineItem[], setList: (items: LineItem[]) => void, id: number) => {
    if (list.length > 1) setList(list.filter((item) => item.id !== id));
  };

  const renderSection = (title: string, items: LineItem[], setItems: (items: LineItem[]) => void, color: string) => (
    <div>
      <h3 className="mb-3 text-lg font-bold text-gray-900">{title}</h3>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="flex gap-2">
            <input
              type="text"
              value={item.label}
              onChange={(e) => updateItem(items, setItems, item.id, "label", e.target.value)}
              placeholder="Label"
              className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200"
            />
            <div className="relative w-36">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
              <input
                type="number"
                value={item.value}
                onChange={(e) => updateItem(items, setItems, item.id, "value", Number(e.target.value))}
                className="w-full rounded-lg border border-gray-300 py-2 pl-7 pr-2 text-sm focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200"
              />
            </div>
            <button
              onClick={() => removeItem(items, setItems, item.id)}
              className="rounded-lg px-2 text-gray-400 hover:text-red-500"
              aria-label="Remove"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={() => addItem(items, setItems)}
        className={`mt-3 text-sm font-medium ${color} hover:underline`}
      >
        + Add row
      </button>
    </div>
  );

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-lg">
      <div className="grid gap-8 p-6 md:grid-cols-2 md:p-8">
        {renderSection("Assets (What You Own)", assets, setAssets, "text-teal-600")}
        {renderSection("Liabilities (What You Owe)", liabilities, setLiabilities, "text-red-600")}
      </div>

      <div className="border-t border-gray-200 bg-gradient-to-br from-teal-50 to-emerald-50 p-6 md:p-8">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Total Assets</p>
            <p className="text-2xl font-bold text-teal-600">{fmt(totalAssets)}</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Total Liabilities</p>
            <p className="text-2xl font-bold text-red-600">{fmt(totalLiabilities)}</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Net Worth</p>
            <p className={`text-3xl font-extrabold ${netWorth >= 0 ? "text-teal-700" : "text-red-700"}`}>
              {fmt(netWorth)}
            </p>
          </div>
        </div>

        {totalAssets > 0 && (
          <div className="mt-6">
            <div className="mb-2 flex justify-between text-sm">
              <span className="flex items-center gap-1">
                <span className="inline-block h-3 w-3 rounded-sm bg-teal-500" /> Assets
              </span>
              <span className="flex items-center gap-1">
                <span className="inline-block h-3 w-3 rounded-sm bg-red-500" /> Liabilities
              </span>
            </div>
            <div className="flex h-4 overflow-hidden rounded-full bg-gray-200">
              <div className="bg-teal-500 transition-all" style={{ width: `${(totalAssets / (totalAssets + totalLiabilities)) * 100}%` }} />
              <div className="bg-red-500 transition-all" style={{ width: `${(totalLiabilities / (totalAssets + totalLiabilities)) * 100}%` }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
