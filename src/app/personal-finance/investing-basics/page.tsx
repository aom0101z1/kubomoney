import type { Metadata } from "next";
import Link from "next/link";
import AdUnit from "@/components/AdUnit";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Investing for Beginners (2025) - How to Start Investing",
  description:
    "Learn how to start investing with as little as $100. Covers stocks, bonds, ETFs, index funds, retirement accounts, and common mistakes to avoid.",
};

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

        <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Investing for Beginners: How to Start Investing</h1>
        <p className="mb-8 text-lg text-gray-600">
          Investing is the single most powerful way to build wealth over time. Here&apos;s everything you need to know to get started &mdash; even with a small amount.
        </p>

        <AdUnit className="my-8" />

        <div className="prose prose-lg max-w-none">
          <h2>Why Invest?</h2>
          <p>Money sitting in a savings account earns 4-5% at best. The stock market has historically returned about <strong>10% per year</strong> on average (7% after inflation). Thanks to compound interest, even small investments grow significantly over decades.</p>
          <p>Use our <Link href="/calculators/compound-interest" className="text-teal-600 hover:underline">Compound Interest Calculator</Link> to see how your money could grow.</p>

          <h2>Investment Types Explained</h2>

          <h3>Stocks</h3>
          <p>When you buy a stock, you own a tiny piece of a company. Stocks have the highest potential returns but also the highest risk. Individual stocks can be volatile &mdash; a single company can drop 50% or more.</p>

          <h3>Bonds</h3>
          <p>Bonds are loans you make to governments or companies. They pay regular interest and return your principal at maturity. Lower risk than stocks, but lower returns (typically 3-5%).</p>

          <h3>Index Funds &amp; ETFs</h3>
          <p><strong>This is where most beginners should start.</strong> An index fund holds hundreds of stocks in a single investment, giving you instant diversification. An S&amp;P 500 index fund owns all 500 of the largest US companies.</p>
          <ul>
            <li><strong>Low fees</strong> &mdash; Expense ratios of 0.03-0.20% vs 1%+ for actively managed funds</li>
            <li><strong>Diversification</strong> &mdash; One fund = hundreds of companies</li>
            <li><strong>Consistent performance</strong> &mdash; 90% of actively managed funds fail to beat index funds over 15 years</li>
          </ul>

          <h3>Real Estate</h3>
          <p>Includes rental properties, REITs (Real Estate Investment Trusts), and real estate crowdfunding. REITs let you invest in real estate without buying property &mdash; they trade like stocks.</p>

          <h2>How to Start Investing in 5 Steps</h2>

          <h3>Step 1: Build an Emergency Fund First</h3>
          <p>Before investing, save 3-6 months of expenses in a high-yield savings account. You don&apos;t want to sell investments at a loss because of an unexpected expense. See our <Link href="/personal-finance/emergency-fund" className="text-teal-600 hover:underline">emergency fund guide</Link>.</p>

          <h3>Step 2: Pay Off High-Interest Debt</h3>
          <p>If you have credit card debt at 20%+ interest, pay that off first. No investment consistently returns more than 20%. See our <Link href="/personal-finance/how-to-pay-off-debt" className="text-teal-600 hover:underline">debt payoff guide</Link>.</p>

          <h3>Step 3: Max Out Employer Match</h3>
          <p>If your employer offers a 401(k) match, contribute enough to get the full match. This is a <strong>100% return</strong> on your money &mdash; you won&apos;t find that anywhere else.</p>

          <h3>Step 4: Open an Investment Account</h3>
          <ul>
            <li><strong>401(k)</strong> &mdash; Through your employer, tax-advantaged, $23,500 limit (2025)</li>
            <li><strong>IRA (Traditional or Roth)</strong> &mdash; Open one yourself, $7,000 limit (2025)</li>
            <li><strong>Taxable brokerage</strong> &mdash; No contribution limits, but you pay taxes on gains</li>
          </ul>

          <h3>Step 5: Buy Index Funds and Hold</h3>
          <p>The simplest winning strategy: buy a total stock market or S&amp;P 500 index fund, contribute regularly, and don&apos;t sell during downturns. This &quot;buy and hold&quot; approach beats 90% of professional fund managers.</p>

          <h2>How Much Should You Invest?</h2>
          <p>The common guideline is to invest <strong>15-20% of your gross income</strong> for retirement. But any amount is better than nothing:</p>
          <table>
            <thead>
              <tr><th>Monthly Investment</th><th>After 10 Years</th><th>After 20 Years</th><th>After 30 Years</th></tr>
            </thead>
            <tbody>
              <tr><td>$100</td><td>$18,295</td><td>$52,093</td><td>$113,024</td></tr>
              <tr><td>$300</td><td>$54,884</td><td>$156,280</td><td>$339,073</td></tr>
              <tr><td>$500</td><td>$91,473</td><td>$260,466</td><td>$565,122</td></tr>
              <tr><td>$1,000</td><td>$182,946</td><td>$520,933</td><td>$1,130,244</td></tr>
            </tbody>
          </table>
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
          <ul>
            <li><Link href="/calculators/compound-interest" className="text-teal-600 hover:underline">Compound Interest Calculator</Link> &mdash; See how your investments grow over time</li>
            <li><Link href="/calculators/retirement" className="text-teal-600 hover:underline">Retirement Calculator</Link> &mdash; Are you on track for retirement?</li>
            <li><Link href="/calculators/roi" className="text-teal-600 hover:underline">ROI Calculator</Link> &mdash; Compare returns on different investments</li>
            <li><Link href="/calculators/inflation" className="text-teal-600 hover:underline">Inflation Calculator</Link> &mdash; Understand the real value of your returns</li>
          </ul>
        </div>

        <AdUnit className="my-8" />
      </article>
    </>
  );
}
