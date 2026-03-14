import type { Metadata } from "next";
import Link from "next/link";
import NetWorthCalculator from "./NetWorthCalculator";
import AdUnit from "@/components/AdUnit";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Net Worth Calculator - Track Your Financial Health",
  description:
    "Free net worth calculator. Add up your assets and liabilities to see your total net worth. Track your financial progress over time.",
};

export default function NetWorthPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Net Worth Calculator",
    description: metadata.description,
    url: `${siteConfig.url}/calculators/net-worth`,
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
          <span className="text-gray-900">Net Worth Calculator</span>
        </nav>
        <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Net Worth Calculator</h1>
        <p className="mb-8 text-lg text-gray-600">
          Calculate your net worth by adding up everything you own (assets) and subtracting
          everything you owe (liabilities). This is the single best measure of your financial health.
        </p>
        <NetWorthCalculator />
        <AdUnit className="my-10" />
        <section className="article-body">
          <h2>What Is Net Worth?</h2>
          <p>Net worth is simply: <strong>Assets - Liabilities = Net Worth</strong>. It&apos;s the most important number in personal finance because it captures your complete financial picture in one figure. A growing net worth means you&apos;re building wealth.</p>
          <h2>Average Net Worth by Age</h2>
          <ul>
            <li><strong>Under 35</strong>: Median ~$39,000</li>
            <li><strong>35-44</strong>: Median ~$135,000</li>
            <li><strong>45-54</strong>: Median ~$247,000</li>
            <li><strong>55-64</strong>: Median ~$364,000</li>
            <li><strong>65-74</strong>: Median ~$409,000</li>
          </ul>
          <p>Source: Federal Reserve Survey of Consumer Finances. Don&apos;t compare yourself to averages &mdash; focus on growing your own net worth consistently.</p>
          <h2>How to Increase Your Net Worth</h2>
          <ul>
            <li><strong>Pay off high-interest debt first</strong> &ndash; Credit cards are the #1 net worth killer</li>
            <li><strong>Maximize retirement contributions</strong> &ndash; 401k match is free money</li>
            <li><strong>Build an emergency fund</strong> &ndash; 3-6 months of expenses in savings</li>
            <li><strong>Invest consistently</strong> &ndash; Dollar-cost averaging into index funds</li>
            <li><strong>Track monthly</strong> &ndash; What gets measured gets improved</li>
          </ul>
          <h2>Related Tools</h2>
          <div className="my-4 grid gap-3 sm:grid-cols-2">
            {[
              { href: "/calculators/retirement", label: "Retirement Calculator", desc: "Plan how much you need to save to retire comfortably." },
              { href: "/calculators/credit-card-payoff", label: "Credit Card Payoff Calculator", desc: "Find the fastest way to pay off your credit card debt." },
              { href: "/calculators/compound-interest", label: "Compound Interest Calculator", desc: "See how your investments grow over time with compound interest." },
              { href: "/personal-finance/budgeting-guide", label: "Budgeting Guide", desc: "Learn proven budgeting methods to manage your money effectively." },
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
