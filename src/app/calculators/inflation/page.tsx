import type { Metadata } from "next";
import Link from "next/link";
import InflationCalculator from "./InflationCalculator";
import AdUnit from "@/components/AdUnit";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Inflation Calculator - See How Prices Change Over Time",
  description:
    "Free inflation calculator. See how inflation erodes your purchasing power over time. Calculate what your money will be worth in the future or what past dollars are worth today.",
};

export default function InflationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Inflation Calculator",
    description: metadata.description,
    url: `${siteConfig.url}/calculators/inflation`,
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
          <span className="text-gray-900">Inflation Calculator</span>
        </nav>
        <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Inflation Calculator</h1>
        <p className="mb-8 text-lg text-gray-600">
          Understand how inflation impacts your money. Calculate future purchasing power
          or see what past dollars would be worth today.
        </p>
        <InflationCalculator />
        <AdUnit className="my-10" />
        <section className="article-body">
          <h2>What Is Inflation?</h2>
          <p>Inflation is the rate at which the general price level of goods and services rises over time. When inflation goes up, each dollar you have buys less. The US Federal Reserve targets about 2% annual inflation, but actual rates vary year to year.</p>
          <h2>Historical US Inflation Rates</h2>
          <ul>
            <li><strong>1970s</strong>: 7-13% (oil crisis, stagflation)</li>
            <li><strong>1980s-1990s</strong>: 3-5% (gradual decline)</li>
            <li><strong>2000s-2010s</strong>: 1-3% (low and stable)</li>
            <li><strong>2021-2022</strong>: 7-9% (post-pandemic surge)</li>
            <li><strong>2023-2025</strong>: 3-4% (cooling but above target)</li>
          </ul>
          <h2>How to Protect Your Money from Inflation</h2>
          <ul>
            <li><strong>Invest in stocks</strong> &ndash; Historically return 7-10% annually, beating inflation</li>
            <li><strong>Consider I-Bonds</strong> &ndash; US Treasury bonds that adjust for inflation automatically</li>
            <li><strong>Real estate</strong> &ndash; Property values and rents tend to rise with inflation</li>
            <li><strong>Avoid holding too much cash</strong> &ndash; Savings accounts often pay less than inflation</li>
            <li><strong>Negotiate salary increases</strong> &ndash; Your income should at least keep up with inflation</li>
          </ul>
          <h2>Related Tools</h2>
          <div className="my-4 grid gap-3 sm:grid-cols-2">
            {[
              { href: "/calculators/salary", label: "Salary Calculator", desc: "Convert between hourly, weekly, monthly, and annual pay" },
              { href: "/calculators/retirement", label: "Retirement Calculator", desc: "See if your savings will keep up with inflation in retirement" },
              { href: "/calculators/savings-goal", label: "Savings Goal Calculator", desc: "Plan your savings target accounting for rising costs" },
              { href: "/personal-finance/investing-basics", label: "Investing Basics Guide", desc: "Learn how investing helps you beat inflation over time" },
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
