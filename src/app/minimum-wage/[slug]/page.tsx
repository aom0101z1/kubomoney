import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { statesMinWage, getStateMinWageBySlug } from "@/data/states-minimum-wage";
import AdUnit from "@/components/AdUnit";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return statesMinWage.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const state = getStateMinWageBySlug(slug);
  if (!state) return {};
  const yr = new Date().getFullYear();
  return {
    title: `${state.name} Minimum Wage ${yr} - Current Rate, Tipped Wage & Scheduled Increases`,
    description: `${state.name} minimum wage is $${state.effectiveMinWage.toFixed(2)}/hr in ${yr}. Tipped minimum: $${state.tippedMinWage.toFixed(2)}. Full-time annual income: $${state.annualFullTime.toLocaleString()}. Scheduled increases & laws.`,
  };
}

function fmt(n: number): string {
  return "$" + n.toLocaleString();
}

export default async function StateMinWagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const state = getStateMinWageBySlug(slug);
  if (!state) notFound();

  const yr = new Date().getFullYear();
  const povertyLine = 15060;
  const abovePoverty = state.annualFullTime > povertyLine;
  const livingWageEstimate = (state.costOfLivingIndex / 100) * 17.0;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${state.name} Minimum Wage ${yr}`,
    description: `Current minimum wage rates and laws for ${state.name}`,
    url: `${siteConfig.url}/minimum-wage/${state.slug}`,
  };

  const related = statesMinWage
    .filter((s) => s.slug !== state.slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 6);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mx-auto max-w-4xl px-4 py-10">
        <nav className="mb-6 text-sm text-gray-500">
          <a href="/" className="hover:text-teal-600">Home</a>{" / "}
          <a href="/minimum-wage" className="hover:text-teal-600">Minimum Wage by State</a>{" / "}
          <span className="text-gray-900">{state.name}</span>
        </nav>

        <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          {state.name} Minimum Wage ({yr})
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          Everything you need to know about minimum wage rates, tipped wages, scheduled increases, and take-home pay in {state.name}.
        </p>

        {/* Key stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-teal-200 bg-teal-50 p-5 text-center">
            <p className="text-xs font-medium uppercase tracking-wider text-teal-600">Minimum Wage</p>
            <p className="mt-1 text-3xl font-extrabold text-teal-800">${state.effectiveMinWage.toFixed(2)}</p>
            <p className="text-xs text-teal-600">per hour</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5 text-center">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Tipped Wage</p>
            <p className="mt-1 text-3xl font-extrabold text-gray-900">${state.tippedMinWage.toFixed(2)}</p>
            <p className="text-xs text-gray-500">per hour</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5 text-center">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Annual (Full-Time)</p>
            <p className="mt-1 text-3xl font-extrabold text-gray-900">{fmt(state.annualFullTime)}</p>
            <p className="text-xs text-gray-500">40 hrs/week × 52 weeks</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5 text-center">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Monthly (Full-Time)</p>
            <p className="mt-1 text-3xl font-extrabold text-gray-900">{fmt(state.monthlyFullTime)}</p>
            <p className="text-xs text-gray-500">before taxes</p>
          </div>
        </div>

        <AdUnit className="my-8" />

        <section className="article-body">
          <h2>Current Minimum Wage in {state.name}</h2>
          {state.stateMinWage === 0 ? (
            <p>
              {state.name} <strong>does not have a state minimum wage law</strong>. The federal minimum wage of
              <strong> ${state.federalMinWage.toFixed(2)}/hr</strong> applies to covered workers under the Fair Labor
              Standards Act (FLSA).
            </p>
          ) : state.stateMinWage < state.federalMinWage ? (
            <p>
              {state.name}&apos;s state minimum wage is <strong>${state.stateMinWage.toFixed(2)}/hr</strong>, which is below
              the federal rate. The federal minimum wage of <strong>${state.federalMinWage.toFixed(2)}/hr</strong> applies
              to most workers.
            </p>
          ) : (
            <p>
              The minimum wage in {state.name} is <strong>${state.effectiveMinWage.toFixed(2)} per hour</strong> as of {yr}.
              This is {fmt(Math.round((state.effectiveMinWage - state.federalMinWage) * 100) / 100)} above the federal minimum
              wage of ${state.federalMinWage.toFixed(2)}/hr.
            </p>
          )}

          <h2>Wage Breakdown</h2>
          <div className="my-4 overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Pay Period</th>
                  <th>Gross Pay</th>
                  <th>Hours</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Hourly</td><td>${state.effectiveMinWage.toFixed(2)}</td><td>1</td></tr>
                <tr><td>Daily (8 hours)</td><td>{fmt(Math.round(state.effectiveMinWage * 8 * 100) / 100)}</td><td>8</td></tr>
                <tr><td>Weekly</td><td>{fmt(Math.round(state.effectiveMinWage * 40))}</td><td>40</td></tr>
                <tr><td>Biweekly</td><td>{fmt(Math.round(state.effectiveMinWage * 80))}</td><td>80</td></tr>
                <tr><td>Monthly</td><td>{fmt(state.monthlyFullTime)}</td><td>~173</td></tr>
                <tr><td>Annual</td><td>{fmt(state.annualFullTime)}</td><td>2,080</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Tipped Employee Wage</h2>
          {state.tippedMinWage === state.effectiveMinWage ? (
            <p>
              {state.name} <strong>does not allow a tip credit</strong>. Tipped employees must receive the full minimum wage
              of ${state.effectiveMinWage.toFixed(2)}/hr from their employer, with tips on top.
            </p>
          ) : (
            <p>
              Tipped workers in {state.name} can be paid a cash wage of <strong>${state.tippedMinWage.toFixed(2)}/hr</strong>,
              with the expectation that tips make up the difference to the full ${state.effectiveMinWage.toFixed(2)}/hr minimum.
              If tips don&apos;t bring total compensation to the minimum wage, the employer must make up the difference.
            </p>
          )}

          <h2>Scheduled Increases</h2>
          <p>{state.scheduledIncreases}</p>

          <h2>Living Wage vs. Minimum Wage</h2>
          <div className="my-4 grid gap-4 sm:grid-cols-2">
            <div className={`rounded-lg border p-4 ${abovePoverty ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}>
              <p className="text-sm font-medium text-gray-700">Federal Poverty Line (single)</p>
              <p className="text-lg font-bold">{fmt(povertyLine)}/year</p>
              <p className={`text-sm ${abovePoverty ? "text-green-700" : "text-red-700"}`}>
                {abovePoverty ? `Minimum wage is ${fmt(state.annualFullTime - povertyLine)} above poverty line` : `Minimum wage is ${fmt(povertyLine - state.annualFullTime)} below poverty line`}
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <p className="text-sm font-medium text-gray-700">Estimated Living Wage ({state.abbr})</p>
              <p className="text-lg font-bold">~${livingWageEstimate.toFixed(2)}/hr</p>
              <p className="text-sm text-gray-500">Based on cost of living index ({state.costOfLivingIndex})</p>
            </div>
          </div>

          <h2>Cost of Living Context</h2>
          <p>
            {state.name}&apos;s cost of living index is <strong>{state.costOfLivingIndex}</strong> (national average = 100).
            {state.costOfLivingIndex > 100
              ? ` This means living in ${state.name} is ${(state.costOfLivingIndex - 100).toFixed(1)}% more expensive than the national average.`
              : ` This means living in ${state.name} is ${(100 - state.costOfLivingIndex).toFixed(1)}% cheaper than the national average.`}
            {" "}The median hourly wage in {state.name} is <strong>${state.medianHourlyWage.toFixed(2)}/hr</strong>,
            which is {((state.medianHourlyWage / state.effectiveMinWage - 1) * 100).toFixed(0)}% above the minimum wage.
          </p>

          <h2>Key Facts</h2>
          <p>{state.notes}</p>

          <h2>How This Compares</h2>
          <div className="my-4 overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>{state.abbr}</th>
                  <th>Federal</th>
                  <th>Highest (WA)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Minimum Wage</td><td>${state.effectiveMinWage.toFixed(2)}</td><td>$7.25</td><td>$16.66</td></tr>
                <tr><td>Tipped Wage</td><td>${state.tippedMinWage.toFixed(2)}</td><td>$2.13</td><td>$16.66</td></tr>
                <tr><td>Annual (FT)</td><td>{fmt(state.annualFullTime)}</td><td>{fmt(15080)}</td><td>{fmt(34653)}</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Useful Resources</h2>
          <div className="my-4 grid gap-3 sm:grid-cols-2">
            {[
              { href: `/salary-by-state/${state.slug !== "district-of-columbia" ? state.slug : ""}`, label: `${state.name} Average Salary`, desc: `Median income and top employers in ${state.abbr}`, show: state.slug !== "district-of-columbia" },
              { href: `/tax-rates/${state.slug !== "district-of-columbia" ? state.slug : ""}`, label: `${state.name} Tax Rates`, desc: `Income, sales & property tax in ${state.abbr}`, show: state.slug !== "district-of-columbia" },
              { href: "/calculators/salary", label: "Salary Calculator", desc: "Convert hourly to annual, weekly, monthly", show: true },
              { href: "/calculators/paycheck", label: "Paycheck Calculator", desc: "Estimate take-home pay after taxes", show: true },
            ].filter(t => t.show).map((tool) => (
              <Link key={tool.href} href={tool.href} className="block rounded-lg border border-gray-200 bg-gray-50 p-4 no-underline transition hover:border-teal-300 hover:shadow-sm">
                <p className="font-semibold text-teal-700">{tool.label}</p>
                <p className="text-sm text-gray-600">{tool.desc}</p>
              </Link>
            ))}
          </div>

          <h2>Other States</h2>
          <div className="my-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <Link key={s.slug} href={`/minimum-wage/${s.slug}`} className="block rounded-lg border border-gray-100 bg-gray-50 px-4 py-3 no-underline transition hover:border-teal-200">
                <span className="font-medium text-teal-700">{s.name}</span>
                <span className="ml-2 text-sm text-gray-500">${s.effectiveMinWage.toFixed(2)}/hr</span>
              </Link>
            ))}
          </div>
        </section>

        <AdUnit className="my-10" />
      </article>
    </>
  );
}
