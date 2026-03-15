import type { Metadata } from "next";
import Link from "next/link";
import { statesTax } from "@/data/states-tax-rates";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: `Tax Rates by State (${new Date().getFullYear()}) - Income, Sales & Property Tax Comparison`,
  description:
    "Compare tax rates across all 50 US states. See income tax, sales tax, property tax, and overall tax burden side by side. Find the most tax-friendly states.",
};

export default function TaxRatesIndex() {
  const sorted = [...statesTax].sort((a, b) => a.taxBurdenRank - b.taxBurdenRank);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <nav className="mb-6 text-sm text-gray-500">
        <a href="/" className="hover:text-teal-600">Home</a>{" / "}
        <span className="text-gray-900">Tax Rates by State</span>
      </nav>

      <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Tax Rates by State - Compare All 50 States
      </h1>
      <p className="mb-10 text-lg text-gray-600">
        Compare income tax, sales tax, property tax, and overall tax burden across all 50 US states.
        Sorted from highest to lowest tax burden. Click any state for a complete tax breakdown.
      </p>

      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-3 text-left font-semibold text-gray-900">State</th>
              <th className="px-3 py-3 text-right font-semibold text-gray-900">Income Tax</th>
              <th className="px-3 py-3 text-right font-semibold text-gray-900">Sales Tax</th>
              <th className="hidden px-3 py-3 text-right font-semibold text-gray-900 sm:table-cell">Property Tax</th>
              <th className="hidden px-3 py-3 text-right font-semibold text-gray-900 md:table-cell">Median Prop. Tax</th>
              <th className="px-3 py-3 text-right font-semibold text-gray-900">Rank</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((state) => (
              <tr key={state.slug} className="border-t border-gray-100 hover:bg-teal-50">
                <td className="px-3 py-3">
                  <Link href={`/tax-rates/${state.slug}`} className="font-medium text-teal-600 hover:underline">
                    {state.name}
                  </Link>
                </td>
                <td className="px-3 py-3 text-right">
                  <span className={state.incomeTaxType === "none" ? "font-medium text-green-600" : ""}>
                    {state.incomeTaxRange}
                  </span>
                </td>
                <td className="px-3 py-3 text-right">
                  <span className={state.salesTaxCombined === 0 ? "font-medium text-green-600" : state.salesTaxCombined > 9 ? "text-red-600" : ""}>
                    {state.salesTaxCombined}%
                  </span>
                </td>
                <td className="hidden px-3 py-3 text-right sm:table-cell">
                  <span className={state.propertyTaxRate < 0.6 ? "text-green-600" : state.propertyTaxRate > 1.5 ? "text-red-600" : ""}>
                    {state.propertyTaxRate}%
                  </span>
                </td>
                <td className="hidden px-3 py-3 text-right md:table-cell">${state.medianPropertyTax.toLocaleString()}/yr</td>
                <td className="px-3 py-3 text-right">
                  <span className={`font-semibold ${state.taxBurdenRank > 40 ? "text-green-600" : state.taxBurdenRank < 10 ? "text-red-600" : ""}`}>
                    #{state.taxBurdenRank}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs text-gray-500">
        Rank: 1 = highest overall tax burden, 51 = lowest. Sales tax shows combined state + average local rates.
        Property tax shows effective rate. Green = favorable, Red = high. Data reflects current rates.
      </p>

      <AdUnit className="my-12" />

      <section className="mt-8 article-body">
        <h2>States With No Income Tax</h2>
        <p>
          These states do not levy a state income tax on earned income:
          <strong> Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, Wyoming</strong>.
          However, they often compensate with higher sales or property taxes.
        </p>

        <h2>States With No Sales Tax</h2>
        <p>
          These states have no statewide sales tax:
          <strong> Alaska, Delaware, Montana, New Hampshire, Oregon</strong>.
          Alaska allows local jurisdictions to impose sales tax.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Related Resources</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/salary-by-state" className="inline-block rounded-lg bg-teal-600 px-6 py-3 font-semibold text-white hover:bg-teal-700">
            Salary by State →
          </Link>
          <Link href="/llc-by-state" className="inline-block rounded-lg border border-teal-600 px-6 py-3 font-semibold text-teal-700 hover:bg-teal-50">
            LLC by State →
          </Link>
          <Link href="/calculators/paycheck" className="inline-block rounded-lg border border-teal-600 px-6 py-3 font-semibold text-teal-700 hover:bg-teal-50">
            Paycheck Calculator →
          </Link>
        </div>
      </section>
    </div>
  );
}
