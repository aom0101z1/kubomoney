import type { Metadata } from "next";
import Link from "next/link";
import AdUnit from "@/components/AdUnit";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Retirement Planning Guide (2025) - How Much Do You Need to Retire?",
  description:
    "Learn how much you need to retire, the best retirement accounts, and strategies for every age. Covers 401(k), IRA, Roth IRA, and the 4% rule.",
};

export default function RetirementPlanningPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Retirement Planning Guide - How Much Do You Need?",
    description: metadata.description,
    url: `${siteConfig.url}/personal-finance/retirement-planning`,
    author: { "@type": "Person", name: siteConfig.author.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mx-auto max-w-4xl px-4 py-10">
        <nav className="mb-6 text-sm text-gray-500">
          <a href="/" className="hover:text-teal-600">Home</a>{" / "}
          <a href="/personal-finance" className="hover:text-teal-600">Personal Finance</a>{" / "}
          <span className="text-gray-900">Retirement Planning</span>
        </nav>

        <h1 className="mb-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">Retirement Planning: How Much Do You Need to Retire?</h1>
        <p className="mb-8 text-lg leading-relaxed text-gray-600">
          The earlier you start, the less you need to save each month. Here&apos;s a complete guide to planning your retirement at any age.
        </p>

        <AdUnit className="my-8" />

        <div className="article-body">
          <section className="mb-10 rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50 p-6 sm:p-8">
            <h2 className="!mt-0 !border-0 !pb-0 text-2xl font-bold text-teal-800">How Much Do You Need to Retire?</h2>
            <p className="mt-3">
              The most common guideline is the <strong>25x Rule</strong>: save 25 times your annual expenses. If you spend $50,000/year, you need <strong>$1.25 million</strong>. This is based on the 4% rule &mdash; withdrawing 4% of your portfolio annually, which historically lasts 30+ years.
            </p>
            <div className="mt-3 rounded-lg border border-teal-200 bg-white/60 px-5 py-3 text-sm text-teal-900">
              Use our <Link href="/calculators/retirement" className="font-medium text-teal-700 underline hover:text-teal-900">Retirement Calculator</Link> to get a personalized estimate.
            </div>
          </section>

          <h2>Savings Targets by Age</h2>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr><th>Age</th><th>Savings Target</th><th>Dollar Range</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>30</strong></td><td>1x salary saved</td><td>$50,000 &ndash; $80,000</td></tr>
                <tr><td><strong>35</strong></td><td>2x salary saved</td><td>$100,000 &ndash; $160,000</td></tr>
                <tr><td><strong>40</strong></td><td>3x salary saved</td><td>$150,000 &ndash; $240,000</td></tr>
                <tr><td><strong>45</strong></td><td>4x salary saved</td><td>$200,000 &ndash; $320,000</td></tr>
                <tr><td><strong>50</strong></td><td>6x salary saved</td><td>$300,000 &ndash; $480,000</td></tr>
                <tr><td><strong>55</strong></td><td>7x salary saved</td><td>$350,000 &ndash; $560,000</td></tr>
                <tr><td><strong>60</strong></td><td>8x salary saved</td><td>$400,000 &ndash; $640,000</td></tr>
                <tr><td><strong>67</strong></td><td>10x salary saved</td><td>$500,000 &ndash; $800,000</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Retirement Account Types</h2>

          <div className="my-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="!mt-0 mb-2 text-lg font-bold text-gray-900">401(k) / 403(b)</h3>
              <ul className="ml-5 list-disc space-y-1 text-sm text-gray-700">
                <li>Through your employer</li>
                <li>2025 limit: <strong>$23,500</strong> ($31,000 if 50+)</li>
                <li>Traditional: tax-deductible now, taxed later</li>
                <li>Roth: taxed now, tax-free later</li>
                <li><strong>Always get the full employer match</strong></li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="!mt-0 mb-2 text-lg font-bold text-gray-900">Traditional IRA</h3>
              <ul className="ml-5 list-disc space-y-1 text-sm text-gray-700">
                <li>Open on your own at any brokerage</li>
                <li>2025 limit: <strong>$7,000</strong> ($8,000 if 50+)</li>
                <li>Contributions may be tax-deductible</li>
                <li>Withdrawals taxed as income in retirement</li>
              </ul>
            </div>
            <div className="rounded-xl border-2 border-teal-200 bg-teal-50 p-5">
              <h3 className="!mt-0 mb-2 text-lg font-bold text-teal-800">Roth IRA (Gold Standard)</h3>
              <ul className="ml-5 list-disc space-y-1 text-sm text-gray-700">
                <li><strong>Best for younger workers</strong></li>
                <li>2025 limit: <strong>$7,000</strong> ($8,000 if 50+)</li>
                <li>Contributions NOT tax-deductible</li>
                <li>All growth &amp; withdrawals <strong>tax-free</strong></li>
                <li>Income limits: $161K single / $240K married</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="!mt-0 mb-2 text-lg font-bold text-gray-900">SEP IRA / Solo 401(k)</h3>
              <ul className="ml-5 list-disc space-y-1 text-sm text-gray-700">
                <li><strong>For self-employed &amp; small business owners</strong></li>
                <li>SEP: up to 25% of net earnings (max $70,000)</li>
                <li>Solo 401(k): employee + employer contributions</li>
              </ul>
            </div>
          </div>

          <h2>The Retirement Savings Priority Order</h2>
          <ol>
            <li><strong>401(k) up to employer match</strong> &mdash; Free money, always do this first</li>
            <li><strong>Pay off high-interest debt</strong> &mdash; Credit cards, personal loans</li>
            <li><strong>Build emergency fund</strong> &mdash; 3-6 months of expenses (<Link href="/personal-finance/emergency-fund">emergency fund guide</Link>)</li>
            <li><strong>Max out Roth IRA</strong> &mdash; $7,000/year of tax-free growth</li>
            <li><strong>Max out 401(k)</strong> &mdash; $23,500/year</li>
            <li><strong>Taxable brokerage</strong> &mdash; Index funds after maxing retirement accounts</li>
          </ol>

          <h2>Retirement Strategies by Age</h2>

          <div className="my-6 space-y-4">
            {[
              { age: "20s", title: "Start Now", desc: "Time is your biggest advantage. $200/month at age 25 grows to over $500,000 by age 65 (8% return). Invest aggressively \u2014 you have decades to recover from downturns.", color: "teal" },
              { age: "30s", title: "Accelerate", desc: "Increase contributions with every raise. If married, both partners should max retirement accounts. Target 15-20% of income toward retirement.", color: "emerald" },
              { age: "40s", title: "Catch Up", desc: "If behind, increase contributions aggressively. At 50, you get catch-up limits ($31,000 for 401k, $8,000 for IRA). Reduce expenses to free up savings.", color: "teal" },
              { age: "50s-60s", title: "Protect and Plan", desc: "Gradually shift to a more conservative portfolio. At 55, access 401(k) penalty-free if you leave your employer. At 59.5, access IRA penalty-free. Plan Social Security timing.", color: "emerald" },
            ].map((item) => (
              <div key={item.age} className={`rounded-xl border p-5 ${item.color === "teal" ? "border-teal-200 bg-teal-50" : "border-emerald-200 bg-emerald-50"}`}>
                <p className={`text-xs font-bold uppercase tracking-wider ${item.color === "teal" ? "text-teal-600" : "text-emerald-600"}`}>In Your {item.age}</p>
                <h3 className="!mt-1 mb-2 text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2>The 4% Rule Explained</h2>
          <p>The 4% rule says you can withdraw 4% of your retirement savings in the first year, then adjust for inflation each year. Historically, this strategy has a <strong>95%+ success rate</strong> over 30-year periods.</p>
          <div className="my-6 grid gap-3 sm:grid-cols-3">
            {[
              { saved: "$500K", yearly: "$20,000/yr", monthly: "$1,667/mo" },
              { saved: "$1M", yearly: "$40,000/yr", monthly: "$3,333/mo" },
              { saved: "$2M", yearly: "$80,000/yr", monthly: "$6,667/mo" },
            ].map((item) => (
              <div key={item.saved} className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center">
                <p className="text-2xl font-extrabold text-teal-700">{item.saved}</p>
                <p className="text-sm font-medium text-gray-900">{item.yearly}</p>
                <p className="text-xs text-gray-500">{item.monthly}</p>
              </div>
            ))}
          </div>

          <h2>Tools for Retirement Planning</h2>
          <div className="my-4 grid gap-3 sm:grid-cols-3">
            {[
              { href: "/calculators/retirement", label: "Retirement Calculator", desc: "See if you're on track" },
              { href: "/calculators/compound-interest", label: "Compound Interest", desc: "Visualize money growth" },
              { href: "/calculators/inflation", label: "Inflation Calculator", desc: "Future value of savings" },
            ].map((tool) => (
              <Link key={tool.href} href={tool.href} className="block rounded-lg border border-gray-200 bg-gray-50 p-4 no-underline transition hover:border-teal-300 hover:shadow-sm">
                <p className="font-semibold text-teal-700">{tool.label}</p>
                <p className="text-sm text-gray-600">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </div>

        <AdUnit className="my-8" />
      </article>
    </>
  );
}
