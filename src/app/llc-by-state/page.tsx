import type { Metadata } from "next";
import Link from "next/link";
import { statesLLC } from "@/data/states-llc";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "How to Start an LLC in Any State (2025) - Compare All 50 States",
  description:
    "Compare LLC formation costs across all 50 US states. See filing fees, annual costs, processing times, and tax rates. Find the best state to start your LLC.",
};

export default function LLCByStateIndex() {
  const sorted = [...statesLLC].sort((a, b) => a.filingFee - b.filingFee);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <nav className="mb-6 text-sm text-gray-500">
        <a href="/" className="hover:text-teal-600">Home</a>{" / "}
        <span className="text-gray-900">LLC by State</span>
      </nav>

      <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
        How to Start an LLC - Compare All 50 States
      </h1>
      <p className="mb-10 text-lg text-gray-600">
        Compare LLC formation costs, annual fees, and processing times across all 50 US states.
        Click any state for a complete step-by-step formation guide.
      </p>

      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-gray-900">State</th>
              <th className="px-4 py-3 text-right font-semibold text-gray-900">Filing Fee</th>
              <th className="px-4 py-3 text-right font-semibold text-gray-900">Annual Fee</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-900">Processing</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-900">State Tax</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((state) => (
              <tr key={state.slug} className="border-t border-gray-100 hover:bg-teal-50">
                <td className="px-4 py-3">
                  <Link href={`/llc-by-state/${state.slug}`} className="font-medium text-teal-600 hover:underline">
                    {state.name}
                  </Link>
                </td>
                <td className="px-4 py-3 text-right font-medium">${state.filingFee}</td>
                <td className="px-4 py-3 text-right">
                  {state.annualFee === 0 ? (
                    <span className="text-green-600">$0</span>
                  ) : (
                    `$${state.annualFee}`
                  )}
                </td>
                <td className="px-4 py-3">{state.filingTime}</td>
                <td className="px-4 py-3">
                  {state.hasStateTax ? state.stateTaxRate : (
                    <span className="font-medium text-green-600">{state.stateTaxRate}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AdUnit className="my-12" />
    </div>
  );
}
