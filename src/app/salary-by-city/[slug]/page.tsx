import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { citiesSalary, getCityBySlug } from "@/data/cities-salary";
import AdUnit from "@/components/AdUnit";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return citiesSalary.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};
  return {
    title: `Average Salary in ${city.city}, ${city.stateAbbr} (${new Date().getFullYear()}) - Income & Cost of Living`,
    description: `Average salary in ${city.city}, ${city.stateAbbr} is $${city.medianIndividual.toLocaleString()}/year. See median household income, cost of living, top employers, and how ${city.city} compares to other cities.`,
  };
}

function fmt(n: number): string {
  return "$" + n.toLocaleString();
}

export default async function CitySalaryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const colRating = city.costOfLivingIndex < 90 ? "Very Affordable" :
    city.costOfLivingIndex < 100 ? "Affordable" :
    city.costOfLivingIndex < 110 ? "Average" :
    city.costOfLivingIndex < 140 ? "Expensive" :
    city.costOfLivingIndex < 180 ? "Very Expensive" : "Extremely Expensive";

  const adjustedSalary = Math.round(city.medianIndividual * (100 / city.costOfLivingIndex));
  const hourlyRate = Math.round(city.medianIndividual / 2080 * 100) / 100;
  const monthlyRate = Math.round(city.medianIndividual / 12);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Average Salary in ${city.city}, ${city.stateAbbr}`,
    description: `Comprehensive salary and income data for ${city.city}, ${city.stateAbbr}`,
    url: `${siteConfig.url}/salary-by-city/${city.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mx-auto max-w-4xl px-4 py-10">
        <nav className="mb-6 text-sm text-gray-500">
          <a href="/" className="hover:text-teal-600">Home</a>{" / "}
          <a href="/salary-by-city" className="hover:text-teal-600">Salary by City</a>{" / "}
          <span className="text-gray-900">{city.city}, {city.stateAbbr}</span>
        </nav>

        <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Average Salary in {city.city}, {city.stateAbbr}
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          Comprehensive salary data, cost of living, and employment information for {city.city}, {city.state}.
          Population: {city.population.toLocaleString()}.
        </p>

        {/* Key Stats */}
        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Median Individual</p>
            <p className="text-2xl font-extrabold text-teal-700">{fmt(city.medianIndividual)}</p>
            <p className="text-xs text-gray-500">per year</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Median Household</p>
            <p className="text-2xl font-extrabold text-gray-900">{fmt(city.medianHousehold)}</p>
            <p className="text-xs text-gray-500">per year</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Cost of Living</p>
            <p className="text-2xl font-extrabold text-gray-900">{city.costOfLivingIndex}</p>
            <p className="text-xs text-gray-500">{colRating} (US avg = 100)</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Population</p>
            <p className="text-lg font-extrabold text-gray-900">{(city.population / 1000000).toFixed(city.population >= 1000000 ? 1 : 0)}{city.population >= 1000000 ? "M" : "K"}</p>
          </div>
        </div>

        <AdUnit className="my-8" />

        <section className="article-body">
          <h2>Salary Breakdown for {city.city}</h2>
          <p>
            The median individual income in {city.city} is <strong>{fmt(city.medianIndividual)}</strong> per year,
            which works out to approximately <strong>{fmt(monthlyRate)}/month</strong> or <strong>${hourlyRate.toFixed(2)}/hour</strong> for full-time workers.
            The median household income is <strong>{fmt(city.medianHousehold)}</strong>.
          </p>

          <h2>Cost of Living Adjusted Salary</h2>
          <p>
            {city.city}&apos;s cost of living index is <strong>{city.costOfLivingIndex}</strong> (national average = 100).
            The median salary of {fmt(city.medianIndividual)} in {city.city} has the purchasing power of approximately <strong>{fmt(adjustedSalary)}</strong> at the national average cost of living.
            {city.costOfLivingIndex < 95
              ? ` Your dollar goes significantly further in ${city.city} than in most major cities.`
              : city.costOfLivingIndex > 130
                ? ` The high cost of living in ${city.city} means you need a significantly higher salary to maintain the same standard of living as cheaper cities.`
                : ` ${city.city} is roughly in line with the national average, making it a balanced option for salary vs expenses.`}
          </p>

          <h2>Top Employers in {city.city}</h2>
          <ul>
            {city.topEmployers.map((e) => (
              <li key={e}><strong>{e}</strong></li>
            ))}
          </ul>

          <h2>Major Industries in {city.city}</h2>
          <ul>
            {city.topIndustries.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>

          <h2>How {city.city} Compares to {city.state}</h2>
          <p>
            See the full statewide salary data, tax rates, and more details on our <Link href={`/salary-by-state/${city.stateSlug}`} className="text-teal-600 hover:underline">average salary in {city.state}</Link> page.
            Thinking about starting a business? Check our <Link href={`/llc-by-state/${city.stateSlug}`} className="text-teal-600 hover:underline">LLC guide for {city.state}</Link>.
          </p>

          <h2>Calculate Your Take-Home Pay</h2>
          <p>
            Use our <Link href="/calculators/salary" className="text-teal-600 hover:underline">Salary Calculator</Link> to
            convert between hourly, weekly, monthly, and annual pay and estimate your take-home pay after taxes.
          </p>
        </section>

        <AdUnit className="my-8" />

        {/* Related Cities */}
        <section className="mt-10">
          <h2 className="mb-4 text-xl font-bold text-gray-900">Compare Salaries in Other Cities</h2>
          <div className="flex flex-wrap gap-2">
            {citiesSalary
              .filter((c) => c.slug !== city.slug)
              .slice(0, 15)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/salary-by-city/${c.slug}`}
                  className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-700 transition hover:border-teal-300 hover:text-teal-600"
                >
                  {c.city}, {c.stateAbbr}
                </Link>
              ))}
            <Link
              href="/salary-by-city"
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
