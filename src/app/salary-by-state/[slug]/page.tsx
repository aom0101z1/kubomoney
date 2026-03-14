import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { statesSalary, getStateBySlug } from "@/data/states-salary";
import AdUnit from "@/components/AdUnit";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return statesSalary.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const state = getStateBySlug(slug);
  if (!state) return {};
  return {
    title: `Average Salary in ${state.name} (${new Date().getFullYear()}) - Income & Cost of Living`,
    description: `Average salary in ${state.name} is $${state.medianIndividual.toLocaleString()}/year. See median household income, cost of living, tax rates, top employers, and how ${state.name} compares to other states.`,
  };
}

function fmt(n: number): string {
  return "$" + n.toLocaleString();
}

export default async function StateSalaryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const state = getStateBySlug(slug);
  if (!state) notFound();

  const colRating = state.costOfLivingIndex < 90 ? "Very Affordable" :
    state.costOfLivingIndex < 100 ? "Affordable" :
    state.costOfLivingIndex < 110 ? "Average" :
    state.costOfLivingIndex < 130 ? "Expensive" : "Very Expensive";

  const adjustedSalary = Math.round(state.medianIndividual * (100 / state.costOfLivingIndex));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Average Salary in ${state.name}`,
    description: `Comprehensive salary and income data for ${state.name}`,
    url: `${siteConfig.url}/salary-by-state/${state.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mx-auto max-w-4xl px-4 py-10">
        <nav className="mb-6 text-sm text-gray-500">
          <a href="/" className="hover:text-teal-600">Home</a>{" / "}
          <a href="/salary-by-state" className="hover:text-teal-600">Salary by State</a>{" / "}
          <span className="text-gray-900">{state.name}</span>
        </nav>

        <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Average Salary in {state.name} ({state.abbr})
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          Comprehensive salary data, cost of living, tax rates, and employment information for {state.name}.
        </p>

        {/* Key Stats */}
        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Median Individual</p>
            <p className="text-2xl font-extrabold text-teal-700">{fmt(state.medianIndividual)}</p>
            <p className="text-xs text-gray-500">per year</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Median Household</p>
            <p className="text-2xl font-extrabold text-gray-900">{fmt(state.medianHousehold)}</p>
            <p className="text-xs text-gray-500">per year</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Cost of Living</p>
            <p className="text-2xl font-extrabold text-gray-900">{state.costOfLivingIndex}</p>
            <p className="text-xs text-gray-500">{colRating} (US avg = 100)</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">State Income Tax</p>
            <p className="text-2xl font-extrabold text-gray-900">{state.stateTaxRate}</p>
            <p className="text-xs text-gray-500">rate</p>
          </div>
        </div>

        <AdUnit className="my-8" />

        {/* Detailed Breakdown */}
        <section className="article-body">
          <h2>Salary Overview for {state.name}</h2>
          <p>
            The median individual income in {state.name} is <strong>{fmt(state.medianIndividual)}</strong> per year,
            while the mean (average) individual income is <strong>{fmt(state.meanIndividual)}</strong>.
            The median household income is <strong>{fmt(state.medianHousehold)}</strong>.
          </p>

          <h2>Cost of Living Adjusted Salary</h2>
          <p>
            {state.name}&apos;s cost of living index is <strong>{state.costOfLivingIndex}</strong> (national average = 100).
            This means the median salary of {fmt(state.medianIndividual)} in {state.name} has the purchasing
            power of approximately <strong>{fmt(adjustedSalary)}</strong> at the national average cost of living.
            {state.costOfLivingIndex < 100
              ? ` Your dollar goes further in ${state.name} than in most states.`
              : state.costOfLivingIndex > 110
                ? ` The higher cost of living in ${state.name} means you need to earn more to maintain the same standard of living.`
                : ` ${state.name} is roughly in line with the national average cost of living.`}
          </p>

          <h2>Minimum Wage in {state.name}</h2>
          <p>
            The current minimum wage in {state.name} is <strong>${state.minWage.toFixed(2)}/hour</strong>,
            which equals approximately <strong>{fmt(Math.round(state.minWage * 2080))}</strong> per year
            for a full-time worker (40 hours/week, 52 weeks).
          </p>

          <h2>Top Employers in {state.name}</h2>
          <ul>
            {state.topEmployers.map((e) => (
              <li key={e}><strong>{e}</strong></li>
            ))}
          </ul>

          <h2>Major Industries in {state.name}</h2>
          <ul>
            {state.topIndustries.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>

          <h2>Calculate Your Take-Home Pay</h2>
          <p>
            Use our <Link href="/calculators/salary" className="text-teal-600 hover:underline">Salary Calculator</Link> to
            convert between hourly, weekly, monthly, and annual pay, and estimate your take-home pay in {state.name} after
            federal and state taxes.
          </p>
        </section>

        <AdUnit className="my-8" />

        {/* Related States */}
        <section className="mt-10">
          <h2 className="mb-4 text-xl font-bold text-gray-900">Compare Salaries in Other States</h2>
          <div className="flex flex-wrap gap-2">
            {statesSalary
              .filter((s) => s.slug !== state.slug)
              .slice(0, 12)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/salary-by-state/${s.slug}`}
                  className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-700 transition hover:border-teal-300 hover:text-teal-600"
                >
                  {s.name}
                </Link>
              ))}
            <Link
              href="/salary-by-state"
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
