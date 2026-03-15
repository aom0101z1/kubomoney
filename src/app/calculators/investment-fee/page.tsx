import type { Metadata } from "next";
import Link from "next/link";
import InvestmentFeeCalculator from "./InvestmentFeeCalculator";
import AdUnit from "@/components/AdUnit";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Investment Fee Calculator - How Fees Erode Your Returns",
  description:
    "Free investment fee calculator. See how expense ratios and management fees reduce your investment returns over time. Compare low-cost index funds vs high-fee funds.",
};

export default function InvestmentFeePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Investment Fee Calculator",
    description: metadata.description,
    url: `${siteConfig.url}/calculators/investment-fee`,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mx-auto max-w-4xl px-4 py-10">
        <nav className="mb-6 text-sm text-gray-500">
          <a href="/" className="hover:text-teal-600">Home</a>{" / "}
          <a href="/calculators" className="hover:text-teal-600">Calculators</a>{" / "}
          <span className="text-gray-900">Investment Fee Calculator</span>
        </nav>
        <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Investment Fee Calculator</h1>
        <p className="mb-8 text-lg text-gray-600">
          See how investment fees (expense ratios) eat into your returns over time.
          Compare two funds side by side to see the real cost of higher fees.
        </p>
        <InvestmentFeeCalculator />
        <AdUnit className="my-10" />
        <section className="article-body">
          <h2>Why Investment Fees Matter</h2>
          <p>
            A seemingly small difference in fees can cost you <strong>hundreds of thousands of dollars</strong> over
            a career of investing. A fund charging 1% instead of 0.03% doesn&apos;t sound like much, but compounded
            over 30 years on a $500/month contribution, the difference can exceed $200,000.
          </p>

          <h2>What Is an Expense Ratio?</h2>
          <p>
            An expense ratio is the annual fee charged by a mutual fund or ETF, expressed as a percentage
            of your invested assets. A 0.50% expense ratio means you pay $50 per year for every $10,000 invested.
          </p>

          <h2>Typical Expense Ratios</h2>
          <ul>
            <li><strong>Index funds (Vanguard, Fidelity, Schwab)</strong> &mdash; 0.03% to 0.10%</li>
            <li><strong>Target-date funds</strong> &mdash; 0.10% to 0.50%</li>
            <li><strong>Actively managed funds</strong> &mdash; 0.50% to 1.50%</li>
            <li><strong>Financial advisor managed</strong> &mdash; 1.00% to 2.00% (advisor fee + fund fees)</li>
          </ul>

          <h2>How to Minimize Fees</h2>
          <ul>
            <li><strong>Use index funds</strong> &mdash; They consistently outperform most actively managed funds after fees</li>
            <li><strong>Check your 401(k)</strong> &mdash; Look for the lowest-cost index fund option available</li>
            <li><strong>Avoid front-load fees</strong> &mdash; Never pay a sales charge to buy a fund</li>
            <li><strong>Beware of &quot;wrap fees&quot;</strong> &mdash; Some advisors charge 1%+ on top of fund expense ratios</li>
          </ul>

          <h2>The Rule of Thumb</h2>
          <p>
            Keep your total investment costs (expense ratios + advisor fees) under <strong>0.25%</strong>.
            Every dollar saved in fees is a dollar that compounds for your future. Over decades,
            this single decision can mean the difference between retiring comfortably or working extra years.
          </p>

          <h2>Related Tools</h2>
          <div className="my-4 grid gap-3 sm:grid-cols-2">
            {[
              { href: "/calculators/compound-interest", label: "Compound Interest Calculator", desc: "See how your investments grow over time" },
              { href: "/calculators/retirement", label: "Retirement Calculator", desc: "Check if you're on track for retirement" },
              { href: "/calculators/roi", label: "ROI Calculator", desc: "Calculate return on investment for any asset" },
              { href: "/personal-finance/investing-basics", label: "Investing for Beginners", desc: "Complete guide to getting started with investing" },
            ].map((tool) => (
              <Link key={tool.href} href={tool.href} className="block rounded-lg border border-gray-200 bg-gray-50 p-4 no-underline transition hover:border-teal-300 hover:shadow-sm">
                <p className="font-semibold text-teal-700">{tool.label}</p>
                <p className="text-sm text-gray-600">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </section>
        <AdUnit className="my-10" />
      </article>
    </>
  );
}
