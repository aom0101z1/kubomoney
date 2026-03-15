import type { Metadata } from "next";
import Link from "next/link";
import { citiesCOL } from "@/data/cities-cost-of-living";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: `Cost of Living by City (${new Date().getFullYear()}) - Compare 50 US Cities`,
  description:
    "Compare the cost of living across 50 major US cities. See housing prices, rent, groceries, utilities, and transportation costs side by side.",
};

export default function CostOfLivingIndex() {
  const sorted = [...citiesCOL].sort((a, b) => a.overallIndex - b.overallIndex);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <nav className="mb-6 text-sm text-gray-500">
        <a href="/" className="hover:text-teal-600">Home</a>{" / "}
        <span className="text-gray-900">Cost of Living by City</span>
      </nav>

      <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Cost of Living by City - Compare 50 US Cities
      </h1>
      <p className="mb-10 text-lg text-gray-600">
        Compare the cost of living across 50 major US cities. Sorted from most affordable to most expensive.
        All indices use 100 as the national average. Click any city for a full breakdown.
      </p>

      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-gray-900">City</th>
              <th className="px-4 py-3 text-right font-semibold text-gray-900">Overall</th>
              <th className="px-4 py-3 text-right font-semibold text-gray-900">Housing</th>
              <th className="hidden px-4 py-3 text-right font-semibold text-gray-900 sm:table-cell">Grocery</th>
              <th className="px-4 py-3 text-right font-semibold text-gray-900">Median Home</th>
              <th className="hidden px-4 py-3 text-right font-semibold text-gray-900 md:table-cell">1BR Rent</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((city) => (
              <tr key={city.slug} className="border-t border-gray-100 hover:bg-teal-50">
                <td className="px-4 py-3">
                  <Link href={`/cost-of-living/${city.slug}`} className="font-medium text-teal-600 hover:underline">
                    {city.city}, {city.stateAbbr}
                  </Link>
                </td>
                <td className="px-4 py-3 text-right">
                  <span className={`font-semibold ${city.overallIndex > 120 ? "text-red-600" : city.overallIndex < 95 ? "text-green-600" : ""}`}>
                    {city.overallIndex}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <span className={city.housingIndex > 150 ? "text-red-600" : city.housingIndex < 85 ? "text-green-600" : ""}>
                    {city.housingIndex}
                  </span>
                </td>
                <td className="hidden px-4 py-3 text-right sm:table-cell">{city.groceryIndex}</td>
                <td className="px-4 py-3 text-right">${city.medianHomePrice.toLocaleString()}</td>
                <td className="hidden px-4 py-3 text-right md:table-cell">${city.medianRent1BR.toLocaleString()}/mo</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs text-gray-500">
        All indices use 100 as the national average. Below 100 = cheaper than average (green). Above 100 = more expensive (red).
        Data represents estimated values for major metro areas.
      </p>

      <AdUnit className="my-12" />

      <section className="mt-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Related Resources</h2>
        <p className="mb-4 text-gray-600">Compare salaries and plan your finances with these tools:</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/salary-by-city" className="inline-block rounded-lg bg-teal-600 px-6 py-3 font-semibold text-white hover:bg-teal-700">
            Salary by City →
          </Link>
          <Link href="/salary-by-state" className="inline-block rounded-lg border border-teal-600 px-6 py-3 font-semibold text-teal-700 hover:bg-teal-50">
            Salary by State →
          </Link>
          <Link href="/calculators/home-affordability" className="inline-block rounded-lg border border-teal-600 px-6 py-3 font-semibold text-teal-700 hover:bg-teal-50">
            Home Affordability Calculator →
          </Link>
        </div>
      </section>
    </div>
  );
}
