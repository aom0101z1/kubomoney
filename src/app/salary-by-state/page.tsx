import type { Metadata } from "next";
import Link from "next/link";
import { statesSalary } from "@/data/states-salary";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "Average Salary by State (2025) - Compare All 50 States",
  description:
    "Compare average salaries across all 50 US states. See median income, cost of living, tax rates, and cost-of-living adjusted salaries for every state.",
};

export default function SalaryByStateIndex() {
  const sorted = [...statesSalary].sort((a, b) => b.medianHousehold - a.medianHousehold);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <nav className="mb-6 text-sm text-gray-500">
        <a href="/" className="hover:text-teal-600">Home</a>{" / "}
        <span className="text-gray-900">Salary by State</span>
      </nav>

      <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Average Salary by State
      </h1>
      <p className="mb-10 text-lg text-gray-600">
        Compare median household income, individual salary, cost of living, and state tax rates
        across all 50 US states. Click any state for detailed salary data.
      </p>

      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-gray-900">#</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-900">State</th>
              <th className="px-4 py-3 text-right font-semibold text-gray-900">Median Household</th>
              <th className="px-4 py-3 text-right font-semibold text-gray-900">Median Individual</th>
              <th className="px-4 py-3 text-right font-semibold text-gray-900">Cost of Living</th>
              <th className="px-4 py-3 text-right font-semibold text-gray-900">State Tax</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((state, i) => (
              <tr key={state.slug} className="border-t border-gray-100 hover:bg-teal-50">
                <td className="px-4 py-3 text-gray-500">{i + 1}</td>
                <td className="px-4 py-3">
                  <Link href={`/salary-by-state/${state.slug}`} className="font-medium text-teal-600 hover:underline">
                    {state.name}
                  </Link>
                </td>
                <td className="px-4 py-3 text-right font-medium">${state.medianHousehold.toLocaleString()}</td>
                <td className="px-4 py-3 text-right">${state.medianIndividual.toLocaleString()}</td>
                <td className="px-4 py-3 text-right">
                  <span className={state.costOfLivingIndex < 95 ? "text-green-600" : state.costOfLivingIndex > 110 ? "text-red-600" : "text-gray-900"}>
                    {state.costOfLivingIndex}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">{state.stateTaxRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AdUnit className="my-12" />
    </div>
  );
}
