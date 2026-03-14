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

        <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Retirement Planning: How Much Do You Need to Retire?</h1>
        <p className="mb-8 text-lg text-gray-600">
          The earlier you start, the less you need to save each month. Here&apos;s a complete guide to planning your retirement at any age.
        </p>

        <AdUnit className="my-8" />

        <div className="prose prose-lg max-w-none">
          <h2>How Much Do You Need to Retire?</h2>
          <p>The most common guideline is the <strong>25x Rule</strong>: save 25 times your annual expenses. If you spend $50,000/year, you need $1.25 million. This is based on the 4% rule &mdash; withdrawing 4% of your portfolio annually, which historically lasts 30+ years.</p>
          <p>Use our <Link href="/calculators/retirement" className="text-teal-600 hover:underline">Retirement Calculator</Link> to get a personalized estimate.</p>

          <h3>Quick Targets by Age</h3>
          <table>
            <thead>
              <tr><th>Age</th><th>Savings Target</th><th>Multiple of Salary</th></tr>
            </thead>
            <tbody>
              <tr><td>30</td><td>1x salary saved</td><td>$50,000 - $80,000</td></tr>
              <tr><td>35</td><td>2x salary saved</td><td>$100,000 - $160,000</td></tr>
              <tr><td>40</td><td>3x salary saved</td><td>$150,000 - $240,000</td></tr>
              <tr><td>45</td><td>4x salary saved</td><td>$200,000 - $320,000</td></tr>
              <tr><td>50</td><td>6x salary saved</td><td>$300,000 - $480,000</td></tr>
              <tr><td>55</td><td>7x salary saved</td><td>$350,000 - $560,000</td></tr>
              <tr><td>60</td><td>8x salary saved</td><td>$400,000 - $640,000</td></tr>
              <tr><td>67</td><td>10x salary saved</td><td>$500,000 - $800,000</td></tr>
            </tbody>
          </table>

          <h2>Retirement Account Types</h2>

          <h3>401(k) / 403(b)</h3>
          <ul>
            <li><strong>Through your employer</strong></li>
            <li>2025 contribution limit: <strong>$23,500</strong> ($31,000 if 50+)</li>
            <li>Traditional: tax-deductible now, taxed in retirement</li>
            <li>Roth 401(k): taxed now, tax-free in retirement</li>
            <li><strong>Always contribute enough to get the full employer match</strong> &mdash; it&apos;s free money</li>
          </ul>

          <h3>Traditional IRA</h3>
          <ul>
            <li><strong>Open on your own</strong> at any brokerage</li>
            <li>2025 contribution limit: <strong>$7,000</strong> ($8,000 if 50+)</li>
            <li>Contributions may be tax-deductible</li>
            <li>Withdrawals are taxed as income in retirement</li>
          </ul>

          <h3>Roth IRA</h3>
          <ul>
            <li><strong>The gold standard for younger workers</strong></li>
            <li>2025 contribution limit: <strong>$7,000</strong> ($8,000 if 50+)</li>
            <li>Contributions are NOT tax-deductible</li>
            <li>All growth and withdrawals are <strong>tax-free</strong> in retirement</li>
            <li>Income limits: $161,000 single / $240,000 married (2025)</li>
          </ul>

          <h3>SEP IRA / Solo 401(k)</h3>
          <ul>
            <li><strong>For self-employed and small business owners</strong></li>
            <li>SEP IRA: contribute up to 25% of net earnings (max $70,000 in 2025)</li>
            <li>Solo 401(k): employee + employer contributions</li>
          </ul>

          <h2>The Retirement Savings Priority Order</h2>
          <ol>
            <li><strong>401(k) up to employer match</strong> &mdash; Free money, always do this first</li>
            <li><strong>Pay off high-interest debt</strong> &mdash; Credit cards, personal loans</li>
            <li><strong>Build emergency fund</strong> &mdash; 3-6 months of expenses (<Link href="/personal-finance/emergency-fund" className="text-teal-600 hover:underline">emergency fund guide</Link>)</li>
            <li><strong>Max out Roth IRA</strong> &mdash; $7,000/year of tax-free growth</li>
            <li><strong>Max out 401(k)</strong> &mdash; $23,500/year</li>
            <li><strong>Taxable brokerage</strong> &mdash; Index funds after maxing retirement accounts</li>
          </ol>

          <h2>Retirement Strategies by Age</h2>

          <h3>In Your 20s: Start Now</h3>
          <p>Time is your biggest advantage. $200/month invested at age 25 grows to over <strong>$500,000</strong> by age 65 (8% return). Invest aggressively &mdash; you have decades to recover from downturns. See our <Link href="/personal-finance/investing-basics" className="text-teal-600 hover:underline">investing guide</Link>.</p>

          <h3>In Your 30s: Accelerate</h3>
          <p>Increase contributions with every raise. If married, both partners should max retirement accounts. Target 15-20% of income toward retirement.</p>

          <h3>In Your 40s: Catch Up</h3>
          <p>If behind, increase contributions aggressively. At 50, you get catch-up contribution limits ($31,000 for 401(k), $8,000 for IRA). Consider reducing expenses to free up savings.</p>

          <h3>In Your 50s-60s: Protect and Plan</h3>
          <p>Gradually shift to a more conservative portfolio. At 55, you can access 401(k) penalty-free if you leave your employer. At 59.5, you can access IRA and 401(k) penalty-free. Start planning Social Security timing.</p>

          <h2>The 4% Rule Explained</h2>
          <p>The 4% rule says you can withdraw 4% of your retirement savings in the first year, then adjust for inflation each year. Historically, this strategy has a 95%+ success rate over 30-year periods.</p>
          <ul>
            <li>$500,000 saved = $20,000/year ($1,667/month)</li>
            <li>$1,000,000 saved = $40,000/year ($3,333/month)</li>
            <li>$2,000,000 saved = $80,000/year ($6,667/month)</li>
          </ul>

          <h2>Tools for Retirement Planning</h2>
          <ul>
            <li><Link href="/calculators/retirement" className="text-teal-600 hover:underline">Retirement Calculator</Link> &mdash; See if you&apos;re on track</li>
            <li><Link href="/calculators/compound-interest" className="text-teal-600 hover:underline">Compound Interest Calculator</Link> &mdash; Visualize how your money grows</li>
            <li><Link href="/calculators/inflation" className="text-teal-600 hover:underline">Inflation Calculator</Link> &mdash; See what your savings will be worth in future dollars</li>
          </ul>
        </div>

        <AdUnit className="my-8" />
      </article>
    </>
  );
}
