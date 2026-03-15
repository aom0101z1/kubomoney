import type { Metadata } from "next";
import Link from "next/link";
import { citiesSalary } from "@/data/cities-salary";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: `Average Salary by City (${new Date().getFullYear()}) - Compare 50 US Cities`,
  description:
    "Compare average salaries, cost of living, and purchasing power across 50 major US cities. Find the best cities for your career and budget.",
};

export default function SalaryByCityIndex() {
  const sorted = [...citiesSalary].sort((a, b) => b.medianIndividual - a.medianIndividual);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <nav className="mb-6 text-sm text-gray-500">
        <a href="/" className="hover:text-teal-600">Home</a>{" / "}
        <span className="text-gray-900">Salary by City</span>
      </nav>

      <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Average Salary by City - Compare 50 US Cities
      </h1>
      <p className="mb-10 text-lg text-gray-600">
        Compare average salaries, cost of living, and real purchasing power across 50 major US cities.
        Click any city for detailed income data, top employers, and industries.
      </p>

      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-gray-900">City</th>
              <th className="px-4 py-3 text-right font-semibold text-gray-900">Median Individual</th>
              <th className="px-4 py-3 text-right font-semibold text-gray-900">Median Household</th>
              <th className="px-4 py-3 text-right font-semibold text-gray-900">COL Index</th>
              <th className="px-4 py-3 text-right font-semibold text-gray-900">Adjusted Salary</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((city) => {
              const adjusted = Math.round(city.medianIndividual * (100 / city.costOfLivingIndex));
              return (
                <tr key={city.slug} className="border-t border-gray-100 hover:bg-teal-50">
                  <td className="px-4 py-3">
                    <Link href={`/salary-by-city/${city.slug}`} className="font-medium text-teal-600 hover:underline">
                      {city.city}, {city.stateAbbr}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-right font-medium">${city.medianIndividual.toLocaleString()}</td>
                  <td className="px-4 py-3 text-right">${city.medianHousehold.toLocaleString()}</td>
                  <td className="px-4 py-3 text-right">
                    <span className={city.costOfLivingIndex > 120 ? "text-red-600" : city.costOfLivingIndex < 95 ? "text-green-600 font-medium" : ""}>
                      {city.costOfLivingIndex}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span className={adjusted > city.medianIndividual ? "text-green-600 font-medium" : adjusted < city.medianIndividual ? "text-red-600" : ""}>
                      ${adjusted.toLocaleString()}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs text-gray-500">
        Adjusted Salary = Median Individual Salary adjusted for cost of living (US avg = 100). Green = your dollar goes further. Red = higher cost of living reduces purchasing power.
      </p>

      <AdUnit className="my-12" />

      <section className="mt-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Also Compare by State</h2>
        <p className="mb-4 text-gray-600">See statewide salary data with tax rates and minimum wage information.</p>
        <Link href="/salary-by-state" className="inline-block rounded-lg bg-teal-600 px-6 py-3 font-semibold text-white hover:bg-teal-700">
          Salary by State →
        </Link>
      </section>
    </div>
  );
}
