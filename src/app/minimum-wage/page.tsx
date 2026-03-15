import type { Metadata } from "next";
import Link from "next/link";
import { statesMinWage } from "@/data/states-minimum-wage";
import AdUnit from "@/components/AdUnit";

const yr = new Date().getFullYear();

export const metadata: Metadata = {
  title: `Minimum Wage by State (${yr}) - All 50 States Compared`,
  description: `Compare minimum wage rates across all 50 states and DC for ${yr}. See tipped wages, scheduled increases, and annual full-time earnings.`,
};

export default function MinimumWageIndex() {
  const sorted = [...statesMinWage].sort((a, b) => b.effectiveMinWage - a.effectiveMinWage);
  const noStateLaw = statesMinWage.filter((s) => s.stateMinWage === 0);
  const noTipCredit = statesMinWage.filter((s) => s.tippedMinWage === s.effectiveMinWage);
  const highest = sorted[0];
  const federalOnly = statesMinWage.filter((s) => s.effectiveMinWage === 7.25);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <nav className="mb-6 text-sm text-gray-500">
        <a href="/" className="hover:text-teal-600">Home</a>
        {" / "}
        <span className="text-gray-900">Minimum Wage by State</span>
      </nav>

      <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Minimum Wage by State ({yr})
      </h1>
      <p className="mb-8 text-lg text-gray-600">
        Compare minimum wage rates across all 50 states and Washington D.C.
        See hourly rates, tipped wages, annual earnings, and scheduled increases.
      </p>

      {/* Summary stats */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-teal-200 bg-teal-50 p-5 text-center">
          <p className="text-xs font-medium uppercase tracking-wider text-teal-600">Highest</p>
          <p className="mt-1 text-2xl font-extrabold text-teal-800">${highest.effectiveMinWage.toFixed(2)}/hr</p>
          <p className="text-xs text-teal-600">{highest.name}</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-5 text-center">
          <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Federal Rate</p>
          <p className="mt-1 text-2xl font-extrabold text-gray-900">$7.25/hr</p>
          <p className="text-xs text-gray-500">{federalOnly.length} states at this rate</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-5 text-center">
          <p className="text-xs font-medium uppercase tracking-wider text-gray-500">No State Law</p>
          <p className="mt-1 text-2xl font-extrabold text-gray-900">{noStateLaw.length} states</p>
          <p className="text-xs text-gray-500">federal rate applies</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-5 text-center">
          <p className="text-xs font-medium uppercase tracking-wider text-gray-500">No Tip Credit</p>
          <p className="mt-1 text-2xl font-extrabold text-gray-900">{noTipCredit.length} states</p>
          <p className="text-xs text-gray-500">full wage for tipped workers</p>
        </div>
      </div>

      <AdUnit className="my-8" />

      {/* Full comparison table */}
      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 font-semibold text-gray-700">State</th>
              <th className="px-4 py-3 font-semibold text-gray-700 text-right">Min. Wage</th>
              <th className="px-4 py-3 font-semibold text-gray-700 text-right">Tipped</th>
              <th className="px-4 py-3 font-semibold text-gray-700 text-right">Annual (FT)</th>
              <th className="px-4 py-3 font-semibold text-gray-700 text-right">COL Index</th>
              <th className="hidden px-4 py-3 font-semibold text-gray-700 text-right md:table-cell">Median Wage</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {sorted.map((s) => (
              <tr key={s.slug} className="hover:bg-gray-50 transition">
                <td className="px-4 py-3">
                  <Link href={`/minimum-wage/${s.slug}`} className="font-medium text-teal-700 hover:underline">
                    {s.name}
                  </Link>
                </td>
                <td className={`px-4 py-3 text-right font-semibold ${s.effectiveMinWage > 7.25 ? "text-green-700" : "text-gray-700"}`}>
                  ${s.effectiveMinWage.toFixed(2)}
                </td>
                <td className={`px-4 py-3 text-right ${s.tippedMinWage === s.effectiveMinWage ? "text-green-600 font-medium" : "text-gray-600"}`}>
                  ${s.tippedMinWage.toFixed(2)}
                </td>
                <td className="px-4 py-3 text-right text-gray-700">${s.annualFullTime.toLocaleString()}</td>
                <td className={`px-4 py-3 text-right ${s.costOfLivingIndex > 100 ? "text-red-600" : "text-green-600"}`}>
                  {s.costOfLivingIndex}
                </td>
                <td className="hidden px-4 py-3 text-right text-gray-600 md:table-cell">${s.medianHourlyWage.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AdUnit className="my-8" />

      {/* Notable sections */}
      <section className="article-body mt-10">
        <h2>States With No State Minimum Wage Law</h2>
        <p>
          These {noStateLaw.length} states have no state minimum wage law. The federal minimum wage of $7.25/hr applies:
        </p>
        <ul>
          {noStateLaw.map((s) => (
            <li key={s.slug}>
              <Link href={`/minimum-wage/${s.slug}`}>{s.name}</Link>
            </li>
          ))}
        </ul>

        <h2>States With No Tip Credit (Full Wage for Tipped Workers)</h2>
        <p>
          In these {noTipCredit.length} states, tipped employees must receive the full minimum wage from their employer:
        </p>
        <ul>
          {noTipCredit.map((s) => (
            <li key={s.slug}>
              <Link href={`/minimum-wage/${s.slug}`}>{s.name}</Link> — ${s.effectiveMinWage.toFixed(2)}/hr
            </li>
          ))}
        </ul>

        <h2>$15/hr or Higher</h2>
        <p>
          These states have reached or exceeded the $15/hr minimum wage:
        </p>
        <ul>
          {sorted.filter((s) => s.effectiveMinWage >= 15).map((s) => (
            <li key={s.slug}>
              <Link href={`/minimum-wage/${s.slug}`}>{s.name}</Link> — ${s.effectiveMinWage.toFixed(2)}/hr
            </li>
          ))}
        </ul>

        <h2>Related Tools</h2>
        <div className="my-4 grid gap-3 sm:grid-cols-2">
          {[
            { href: "/calculators/salary", label: "Salary Calculator", desc: "Convert hourly to annual, weekly, and monthly salary" },
            { href: "/calculators/paycheck", label: "Paycheck Calculator", desc: "Estimate take-home pay after taxes and deductions" },
            { href: "/salary-by-state", label: "Salary by State", desc: "Average salaries and top employers in all 50 states" },
            { href: "/tax-rates", label: "Tax Rates by State", desc: "Income, sales, and property tax rates by state" },
          ].map((tool) => (
            <Link key={tool.href} href={tool.href} className="block rounded-lg border border-gray-200 bg-gray-50 p-4 no-underline transition hover:border-teal-300 hover:shadow-sm">
              <p className="font-semibold text-teal-700">{tool.label}</p>
              <p className="text-sm text-gray-600">{tool.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <AdUnit className="my-10" />
    </div>
  );
}
