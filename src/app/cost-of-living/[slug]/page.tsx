import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { citiesCOL, getCOLCityBySlug } from "@/data/cities-cost-of-living";
import AdUnit from "@/components/AdUnit";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return citiesCOL.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const city = getCOLCityBySlug(slug);
  if (!city) return {};
  return {
    title: `Cost of Living in ${city.city}, ${city.stateAbbr} (${new Date().getFullYear()}) - Housing, Groceries & More`,
    description: `Cost of living in ${city.city}, ${city.stateAbbr}: overall index ${city.overallIndex} (US avg = 100). Median home price $${city.medianHomePrice.toLocaleString()}, rent from $${city.medianRent1BR.toLocaleString()}/mo. See full breakdown.`,
  };
}

function fmt(n: number): string {
  return "$" + n.toLocaleString();
}

function indexColor(index: number): string {
  if (index <= 85) return "text-green-600";
  if (index <= 95) return "text-green-500";
  if (index <= 105) return "text-gray-900";
  if (index <= 120) return "text-orange-500";
  return "text-red-600";
}

function affordLabel(index: number): string {
  if (index < 85) return "Very Affordable";
  if (index < 95) return "Affordable";
  if (index < 105) return "Average";
  if (index < 120) return "Above Average";
  if (index < 150) return "Expensive";
  if (index < 200) return "Very Expensive";
  return "Extremely Expensive";
}

export default async function CostOfLivingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = getCOLCityBySlug(slug);
  if (!city) notFound();

  const incomeNeeded = Math.round(50000 * (city.overallIndex / 100));
  const monthlyBudget = Math.round(city.medianHouseholdIncome / 12);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Cost of Living in ${city.city}, ${city.stateAbbr}`,
    description: `Comprehensive cost of living data for ${city.city}, ${city.stateAbbr}`,
    url: `${siteConfig.url}/cost-of-living/${city.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mx-auto max-w-4xl px-4 py-10">
        <nav className="mb-6 text-sm text-gray-500">
          <a href="/" className="hover:text-teal-600">Home</a>{" / "}
          <a href="/cost-of-living" className="hover:text-teal-600">Cost of Living</a>{" / "}
          <span className="text-gray-900">{city.city}, {city.stateAbbr}</span>
        </nav>

        <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Cost of Living in {city.city}, {city.stateAbbr}
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          Complete cost of living breakdown for {city.city}, {city.state}.
          Overall index: <strong className={indexColor(city.overallIndex)}>{city.overallIndex}</strong> (US average = 100).
          Population: {city.population.toLocaleString()}.
        </p>

        {/* Key Stats */}
        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Overall Index</p>
            <p className={`text-2xl font-extrabold ${indexColor(city.overallIndex)}`}>{city.overallIndex}</p>
            <p className="text-xs text-gray-500">{affordLabel(city.overallIndex)}</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Median Home Price</p>
            <p className="text-2xl font-extrabold text-gray-900">{fmt(city.medianHomePrice)}</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">1BR Rent</p>
            <p className="text-2xl font-extrabold text-gray-900">{fmt(city.medianRent1BR)}</p>
            <p className="text-xs text-gray-500">per month</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Household Income</p>
            <p className="text-2xl font-extrabold text-teal-700">{fmt(city.medianHouseholdIncome)}</p>
            <p className="text-xs text-gray-500">per year</p>
          </div>
        </div>

        <AdUnit className="my-8" />

        <section className="article-body">
          <h2>Cost of Living Breakdown</h2>
          <p>
            The cost of living in {city.city}, {city.stateAbbr} is <strong>{city.overallIndex > 100 ? `${city.overallIndex - 100}% higher` : city.overallIndex < 100 ? `${100 - city.overallIndex}% lower` : "equal to"}</strong> than
            the national average. Here&apos;s how each category compares:
          </p>

          <div className="my-6 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Category</th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-900">Index</th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-900">vs National Avg</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Overall", value: city.overallIndex },
                  { label: "Housing", value: city.housingIndex },
                  { label: "Groceries", value: city.groceryIndex },
                  { label: "Utilities", value: city.utilitiesIndex },
                  { label: "Transportation", value: city.transportationIndex },
                  { label: "Healthcare", value: city.healthcareIndex },
                ].map((row) => (
                  <tr key={row.label} className="border-t border-gray-100">
                    <td className="px-4 py-3 font-medium">{row.label}</td>
                    <td className={`px-4 py-3 text-right font-semibold ${indexColor(row.value)}`}>{row.value}</td>
                    <td className={`px-4 py-3 text-right ${row.value > 100 ? "text-red-600" : row.value < 100 ? "text-green-600" : ""}`}>
                      {row.value > 100 ? `+${row.value - 100}%` : row.value < 100 ? `${row.value - 100}%` : "Average"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Housing Costs in {city.city}</h2>
          <p>
            Housing is typically the largest expense. In {city.city}, the housing index is <strong className={indexColor(city.housingIndex)}>{city.housingIndex}</strong> (national average = 100).
          </p>
          <ul>
            <li>Median home price: <strong>{fmt(city.medianHomePrice)}</strong></li>
            <li>Median rent (1 bedroom): <strong>{fmt(city.medianRent1BR)}/month</strong></li>
            <li>Median rent (2 bedrooms): <strong>{fmt(city.medianRent2BR)}/month</strong></li>
            <li>Annual rent (1BR): <strong>{fmt(city.medianRent1BR * 12)}/year</strong></li>
          </ul>
          <p>
            {city.housingIndex > 150
              ? `Housing in ${city.city} is significantly more expensive than average. Consider our mortgage calculator to understand what you can afford.`
              : city.housingIndex < 90
                ? `Housing in ${city.city} is well below the national average, making it an attractive option for homebuyers and renters alike.`
                : `Housing costs in ${city.city} are roughly in line with national averages.`}
          </p>

          <h2>How Much Do You Need to Earn in {city.city}?</h2>
          <p>
            To maintain the equivalent of a <strong>$50,000 salary</strong> at the national average cost of living,
            you would need to earn approximately <strong>{fmt(incomeNeeded)}</strong> in {city.city}.
            The median household income of {fmt(city.medianHouseholdIncome)} translates to a monthly budget of approximately <strong>{fmt(monthlyBudget)}</strong>.
          </p>

          <h2>Groceries &amp; Everyday Expenses</h2>
          <p>
            The grocery index in {city.city} is <strong>{city.groceryIndex}</strong>.
            {city.groceryIndex > 110
              ? " Expect to pay noticeably more for groceries compared to the national average."
              : city.groceryIndex < 95
                ? " Groceries are cheaper than average, helping stretch your budget further."
                : " Grocery prices are close to the national average."}
          </p>

          <h2>Transportation &amp; Utilities</h2>
          <p>
            Transportation costs sit at an index of <strong>{city.transportationIndex}</strong>, while utilities come in at <strong>{city.utilitiesIndex}</strong>.
            {city.transportationIndex > 115
              ? ` Getting around ${city.city} tends to be more expensive, including gas, insurance, and public transit.`
              : ` Transportation costs are reasonable compared to other major cities.`}
          </p>

          <h2>Healthcare</h2>
          <p>
            Healthcare costs in {city.city} are indexed at <strong>{city.healthcareIndex}</strong>.
            {city.healthcareIndex > 110
              ? " Healthcare is pricier than average — factor this into your budget when comparing cities."
              : " Healthcare costs are close to or below the national average."}
          </p>

          <h2>Compare to {city.state}</h2>
          <p>
            See statewide salary and tax data on our{" "}
            <Link href={`/salary-by-state/${city.stateSlug}`} className="text-teal-600 hover:underline">
              average salary in {city.state}
            </Link>{" "}
            page. Also see income data for this city on our{" "}
            <Link href={`/salary-by-city/${city.slug}`} className="text-teal-600 hover:underline">
              average salary in {city.city}
            </Link>{" "}
            page.
          </p>

          <h2>Financial Tools</h2>
          <p>
            Use our free calculators to plan your finances in {city.city}:
          </p>
          <ul>
            <li><Link href="/calculators/mortgage" className="text-teal-600 hover:underline">Mortgage Calculator</Link> — estimate your monthly home payment</li>
            <li><Link href="/calculators/home-affordability" className="text-teal-600 hover:underline">Home Affordability Calculator</Link> — see how much house you can afford</li>
            <li><Link href="/calculators/salary" className="text-teal-600 hover:underline">Salary Calculator</Link> — convert hourly to annual pay</li>
            <li><Link href="/calculators/savings-goal" className="text-teal-600 hover:underline">Savings Goal Calculator</Link> — plan for your move or down payment</li>
          </ul>
        </section>

        <AdUnit className="my-8" />

        {/* Related Cities */}
        <section className="mt-10">
          <h2 className="mb-4 text-xl font-bold text-gray-900">Compare Cost of Living in Other Cities</h2>
          <div className="flex flex-wrap gap-2">
            {citiesCOL
              .filter((c) => c.slug !== city.slug)
              .slice(0, 15)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/cost-of-living/${c.slug}`}
                  className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-700 transition hover:border-teal-300 hover:text-teal-600"
                >
                  {c.city}, {c.stateAbbr}
                </Link>
              ))}
            <Link
              href="/cost-of-living"
              className="rounded-lg border border-teal-200 bg-teal-50 px-3 py-1.5 text-sm font-medium text-teal-700 transition hover:bg-teal-100"
            >
              View All Cities →
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
