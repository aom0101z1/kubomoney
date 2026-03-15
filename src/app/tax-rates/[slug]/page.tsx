import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { statesTax, getStateTaxBySlug } from "@/data/states-tax-rates";
import AdUnit from "@/components/AdUnit";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return statesTax.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const state = getStateTaxBySlug(slug);
  if (!state) return {};
  return {
    title: `${state.name} Tax Rates (${new Date().getFullYear()}) - Income, Sales, Property Tax Guide`,
    description: `${state.name} tax rates: income tax ${state.incomeTaxRange}, sales tax ${state.salesTaxCombined}%, property tax ${state.propertyTaxRate}%. Complete tax guide for ${state.abbr} residents.`,
  };
}

function fmt(n: number): string {
  return "$" + n.toLocaleString();
}

export default async function StateTaxPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const state = getStateTaxBySlug(slug);
  if (!state) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${state.name} Tax Rates & Guide`,
    description: `Comprehensive tax rate information for ${state.name}`,
    url: `${siteConfig.url}/tax-rates/${state.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mx-auto max-w-4xl px-4 py-10">
        <nav className="mb-6 text-sm text-gray-500">
          <a href="/" className="hover:text-teal-600">Home</a>{" / "}
          <a href="/tax-rates" className="hover:text-teal-600">Tax Rates by State</a>{" / "}
          <span className="text-gray-900">{state.name}</span>
        </nav>

        <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          {state.name} Tax Rates ({state.abbr})
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          Complete guide to taxes in {state.name} — income tax, sales tax, property tax, and more.
          Tax burden rank: <strong>#{state.taxBurdenRank} of 51</strong> (1 = highest tax burden).
        </p>

        {/* Key Stats */}
        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Income Tax</p>
            <p className={`text-2xl font-extrabold ${state.incomeTaxType === "none" ? "text-green-600" : "text-gray-900"}`}>{state.incomeTaxRange}</p>
            <p className="text-xs text-gray-500">{state.incomeTaxType === "none" ? "No income tax" : state.incomeTaxType === "flat" ? "Flat rate" : "Progressive"}</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Sales Tax</p>
            <p className={`text-2xl font-extrabold ${state.salesTaxCombined === 0 ? "text-green-600" : state.salesTaxCombined > 9 ? "text-red-600" : "text-gray-900"}`}>{state.salesTaxCombined}%</p>
            <p className="text-xs text-gray-500">combined avg</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Property Tax</p>
            <p className={`text-2xl font-extrabold ${state.propertyTaxRate < 0.6 ? "text-green-600" : state.propertyTaxRate > 1.5 ? "text-red-600" : "text-gray-900"}`}>{state.propertyTaxRate}%</p>
            <p className="text-xs text-gray-500">effective rate</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Tax Burden Rank</p>
            <p className={`text-2xl font-extrabold ${state.taxBurdenRank > 40 ? "text-green-600" : state.taxBurdenRank < 10 ? "text-red-600" : "text-teal-700"}`}>#{state.taxBurdenRank}</p>
            <p className="text-xs text-gray-500">of 51 (1 = highest)</p>
          </div>
        </div>

        <AdUnit className="my-8" />

        <section className="article-body">
          <h2>{state.name} Income Tax</h2>
          {state.incomeTaxType === "none" ? (
            <p>
              <strong>{state.name} has no state income tax.</strong> This makes it one of the most attractive
              states for high earners and retirees. You will still owe federal income tax.
            </p>
          ) : (
            <p>
              {state.name} has a <strong>{state.incomeTaxType}</strong> income tax
              with {state.incomeTaxType === "flat" ? "a" : ""} rate{state.incomeTaxType === "progressive" ? "s ranging from" : " of"}{" "}
              <strong>{state.incomeTaxRange}</strong>.
              {state.incomeTaxType === "progressive"
                ? " Lower income earners pay the lower rate, with the top rate applying to the highest bracket."
                : " All taxable income is taxed at the same rate regardless of how much you earn."}
            </p>
          )}

          <h2>{state.name} Sales Tax</h2>
          {state.salesTaxState === 0 ? (
            <p>
              <strong>{state.name} has no state sales tax</strong>, making it one of only five states without one.
              {state.salesTaxAvgLocal > 0
                ? ` However, some local jurisdictions impose a sales tax averaging ${state.salesTaxAvgLocal}%.`
                : " There are no local sales taxes either."}
            </p>
          ) : (
            <>
              <p>
                The state sales tax rate in {state.name} is <strong>{state.salesTaxState}%</strong>.
                With an average local sales tax of <strong>{state.salesTaxAvgLocal}%</strong>,
                the combined average sales tax rate is <strong>{state.salesTaxCombined}%</strong>.
              </p>
              {state.salesTaxCombined > 9 && (
                <p>
                  This is one of the highest combined sales tax rates in the country. Budget accordingly for large purchases.
                </p>
              )}
            </>
          )}

          <h2>{state.name} Property Tax</h2>
          <p>
            The effective property tax rate in {state.name} is <strong>{state.propertyTaxRate}%</strong>.
            With a median home value of <strong>{fmt(state.medianHomeValue)}</strong>,
            the median annual property tax bill is <strong>{fmt(state.medianPropertyTax)}</strong>
            {" "}({fmt(Math.round(state.medianPropertyTax / 12))}/month).
          </p>
          {state.propertyTaxRate > 1.5 ? (
            <p>Property taxes in {state.name} are significantly higher than the national average, which is an important factor for homebuyers.</p>
          ) : state.propertyTaxRate < 0.6 ? (
            <p>{state.name} has some of the lowest property taxes in the nation, making homeownership more affordable.</p>
          ) : null}

          <h2>Corporate &amp; Business Taxes</h2>
          <p>
            The corporate tax rate in {state.name} is <strong>{state.corporateTaxRate}</strong>.
            {state.corporateTaxRate === "0%" || state.corporateTaxRate.startsWith("0%")
              ? ` ${state.name} does not impose a traditional corporate income tax, making it attractive for businesses.`
              : ""}
          </p>

          <h2>Other Taxes in {state.name}</h2>
          <div className="my-6 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Tax Type</th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-900">Rate / Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3">Gas Excise Tax</td>
                  <td className="px-4 py-3 text-right font-medium">${state.gasExciseTax.toFixed(2)}/gallon</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3">Cigarette Tax</td>
                  <td className="px-4 py-3 text-right font-medium">${state.cigaretteTax.toFixed(2)}/pack</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3">Estate Tax</td>
                  <td className="px-4 py-3 text-right font-medium">{state.hasEstateTax ? "Yes" : "No"}</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3">Inheritance Tax</td>
                  <td className="px-4 py-3 text-right font-medium">{state.hasInheritanceTax ? "Yes" : "No"}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Key Facts</h2>
          <p>{state.notes}</p>

          <h2>Compare to Other States</h2>
          <p>
            See how salaries compare on our{" "}
            <Link href={`/salary-by-state/${state.slug}`} className="text-teal-600 hover:underline">
              average salary in {state.name}
            </Link>{" "}page.
            Thinking about starting a business? Check our{" "}
            <Link href={`/llc-by-state/${state.slug}`} className="text-teal-600 hover:underline">
              LLC guide for {state.name}
            </Link>.
            {" "}See the current{" "}
            <Link href={`/minimum-wage/${state.slug}`} className="text-teal-600 hover:underline">
              minimum wage in {state.name}
            </Link>.
          </p>

          <h2>Financial Calculators</h2>
          <p>Plan your finances in {state.name} with our free tools:</p>
          <ul>
            <li><Link href="/calculators/paycheck" className="text-teal-600 hover:underline">Paycheck Calculator</Link> — estimate take-home pay after taxes</li>
            <li><Link href="/calculators/salary" className="text-teal-600 hover:underline">Salary Calculator</Link> — convert hourly to annual pay</li>
            <li><Link href="/calculators/mortgage" className="text-teal-600 hover:underline">Mortgage Calculator</Link> — estimate monthly home payments</li>
            <li><Link href="/calculators/home-affordability" className="text-teal-600 hover:underline">Home Affordability Calculator</Link> — see how property taxes affect what you can afford</li>
          </ul>
        </section>

        <AdUnit className="my-8" />

        {/* Related States */}
        <section className="mt-10">
          <h2 className="mb-4 text-xl font-bold text-gray-900">Compare Tax Rates in Other States</h2>
          <div className="flex flex-wrap gap-2">
            {statesTax
              .filter((s) => s.slug !== state.slug)
              .slice(0, 12)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/tax-rates/${s.slug}`}
                  className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-700 transition hover:border-teal-300 hover:text-teal-600"
                >
                  {s.name}
                </Link>
              ))}
            <Link
              href="/tax-rates"
              className="rounded-lg border border-teal-200 bg-teal-50 px-3 py-1.5 text-sm font-medium text-teal-700 transition hover:bg-teal-100"
            >
              View All States →
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
