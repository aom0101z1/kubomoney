import type { Metadata } from "next";
import Link from "next/link";
import AdUnit from "@/components/AdUnit";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Investing for Beginners (2025) - How to Start Investing",
  description:
    "Learn how to start investing with as little as $100. Covers stocks, bonds, ETFs, index funds, retirement accounts, and common mistakes to avoid.",
};

function StepCard({ step, title, children }: { step: number; title: string; children: React.ReactNode }) {
  return (
    <div className="relative mt-10 mb-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white shadow">
        {step}
      </div>
      <h3 className="mt-1 mb-3 text-lg font-bold text-gray-900">{title}</h3>
      {children}
    </div>
  );
}

export default function InvestingBasicsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Investing for Beginners - How to Start Investing",
    description: metadata.description,
    url: `${siteConfig.url}/personal-finance/investing-basics`,
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
          <span className="text-gray-900">Investing Basics</span>
        </nav>

        <h1 className="mb-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">Investing for Beginners: How to Start Investing</h1>
        <p className="mb-8 text-lg leading-relaxed text-gray-600">
          Investing is the single most powerful way to build wealth over time. Here&apos;s everything you need to know to get started &mdash; even with a small amount.
        </p>

        <AdUnit className="my-8" />

        <div className="article-body">
          <section className="mb-10 rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50 p-6 sm:p-8">
            <h2 className="!mt-0 !border-0 !pb-0 text-2xl font-bold text-teal-800">Why Invest?</h2>
            <p className="mt-3">
              Money sitting in a savings account earns 4-5% at best. The stock market has historically returned about <strong>10% per year</strong> on average (7% after inflation). Thanks to compound interest, even small investments grow significantly over decades.
            </p>
            <div className="mt-3 rounded-lg border border-teal-200 bg-white/60 px-5 py-3 text-sm text-teal-900">
              Use our <Link href="/calculators/compound-interest" className="font-medium text-teal-700 underline hover:text-teal-900">Compound Interest Calculator</Link> to see how your money could grow.
            </div>
          </section>

          <h2>Investment Types Explained</h2>

          <div className="my-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="!mt-0 mb-2 text-lg font-bold text-gray-900">Stocks</h3>
              <p className="text-sm text-gray-700">When you buy a stock, you own a tiny piece of a company. <strong>Highest potential returns but also highest risk.</strong> A single company can drop 50% or more.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="!mt-0 mb-2 text-lg font-bold text-gray-900">Bonds</h3>
              <p className="text-sm text-gray-700">Loans you make to governments or companies. They pay regular interest and return your principal at maturity. <strong>Lower risk, lower returns</strong> (typically 3-5%).</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:col-span-2">
              <h3 className="!mt-0 mb-2 text-lg font-bold text-teal-700">Index Funds &amp; ETFs (Start Here)</h3>
              <p className="text-sm text-gray-700 mb-3"><strong>This is where most beginners should start.</strong> An index fund holds hundreds of stocks in a single investment, giving you instant diversification. An S&amp;P 500 index fund owns all 500 of the largest US companies.</p>
              <ul className="ml-5 list-disc space-y-1 text-sm text-gray-700">
                <li><strong>Low fees</strong> &mdash; Expense ratios of 0.03-0.20% vs 1%+ for actively managed funds</li>
                <li><strong>Diversification</strong> &mdash; One fund = hundreds of companies</li>
                <li><strong>Consistent performance</strong> &mdash; 90% of actively managed funds fail to beat index funds over 15 years</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:col-span-2">
              <h3 className="!mt-0 mb-2 text-lg font-bold text-gray-900">Real Estate</h3>
              <p className="text-sm text-gray-700">Includes rental properties, REITs (Real Estate Investment Trusts), and crowdfunding. <strong>REITs let you invest in real estate without buying property</strong> &mdash; they trade like stocks.</p>
            </div>
          </div>

          <h2>How to Start Investing in 5 Steps</h2>

          <StepCard step={1} title="Build an Emergency Fund First">
            <p>Before investing, save 3-6 months of expenses in a high-yield savings account. You don&apos;t want to sell investments at a loss because of an unexpected expense. See our <Link href="/personal-finance/emergency-fund">emergency fund guide</Link>.</p>
          </StepCard>

          <StepCard step={2} title="Pay Off High-Interest Debt">
            <p>If you have credit card debt at 20%+ interest, pay that off first. No investment consistently returns more than 20%. See our <Link href="/personal-finance/how-to-pay-off-debt">debt payoff guide</Link>.</p>
          </StepCard>

          <StepCard step={3} title="Max Out Employer Match">
            <p>If your employer offers a 401(k) match, contribute enough to get the full match. This is a <strong>100% return</strong> on your money &mdash; you won&apos;t find that anywhere else.</p>
          </StepCard>

          <StepCard step={4} title="Open an Investment Account">
            <ul className="mb-2 ml-6 list-disc space-y-2 text-gray-700">
              <li><strong>401(k)</strong> &mdash; Through your employer, tax-advantaged, $23,500 limit (2025)</li>
              <li><strong>IRA (Traditional or Roth)</strong> &mdash; Open one yourself, $7,000 limit (2025)</li>
              <li><strong>Taxable brokerage</strong> &mdash; No contribution limits, but you pay taxes on gains</li>
            </ul>
          </StepCard>

          <StepCard step={5} title="Buy Index Funds and Hold">
            <p>The simplest winning strategy: buy a total stock market or S&amp;P 500 index fund, contribute regularly, and <strong>don&apos;t sell during downturns</strong>. This &quot;buy and hold&quot; approach beats 90% of professional fund managers.</p>
          </StepCard>

          <h2>How Much Should You Invest?</h2>
          <p>The common guideline is to invest <strong>15-20% of your gross income</strong> for retirement. But any amount is better than nothing:</p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr><th>Monthly Investment</th><th>After 10 Years</th><th>After 20 Years</th><th>After 30 Years</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>$100</strong></td><td>$18,295</td><td>$52,093</td><td>$113,024</td></tr>
                <tr><td><strong>$300</strong></td><td>$54,884</td><td>$156,280</td><td>$339,073</td></tr>
                <tr><td><strong>$500</strong></td><td>$91,473</td><td>$260,466</td><td>$565,122</td></tr>
                <tr><td><strong>$1,000</strong></td><td>$182,946</td><td>$520,933</td><td>$1,130,244</td></tr>
              </tbody>
            </table>
          </div>
          <p><em>Assumes 8% average annual return.</em></p>

          <h2>Common Investing Mistakes</h2>
          <ul>
            <li><strong>Waiting to start</strong> &mdash; Time in the market beats timing the market</li>
            <li><strong>Picking individual stocks</strong> &mdash; Most people should stick to index funds</li>
            <li><strong>Selling during downturns</strong> &mdash; Markets always recover; panic selling locks in losses</li>
            <li><strong>Paying high fees</strong> &mdash; A 1% fee vs 0.03% costs $100,000+ over 30 years on a $500/month investment</li>
            <li><strong>Not diversifying</strong> &mdash; Don&apos;t put all your money in one stock or sector</li>
            <li><strong>Checking too often</strong> &mdash; Daily checking leads to emotional decisions</li>
          </ul>

          <h2>Tools to Help You Invest</h2>
          <div className="my-4 grid gap-3 sm:grid-cols-2">
            {[
              { href: "/calculators/compound-interest", label: "Compound Interest Calculator", desc: "See how investments grow over time" },
              { href: "/calculators/retirement", label: "Retirement Calculator", desc: "Are you on track for retirement?" },
              { href: "/calculators/roi", label: "ROI Calculator", desc: "Compare returns on different investments" },
              { href: "/calculators/inflation", label: "Inflation Calculator", desc: "Understand the real value of returns" },
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
