import type { Metadata } from "next";
import Link from "next/link";
import CompoundInterestCalculator from "./CompoundInterestCalculator";
import AdUnit from "@/components/AdUnit";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Compound Interest Calculator - See Your Money Grow",
  description:
    "Free compound interest calculator. See how your savings and investments grow over time with monthly contributions and compound interest.",
};

export default function CompoundInterestPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Compound Interest Calculator",
    description: metadata.description,
    url: `${siteConfig.url}/calculators/compound-interest`,
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
          <span className="text-gray-900">Compound Interest Calculator</span>
        </nav>
        <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Compound Interest Calculator</h1>
        <p className="mb-8 text-lg text-gray-600">
          See how your money grows over time with compound interest. Enter your initial investment,
          monthly contributions, expected return rate, and time horizon.
        </p>
        <CompoundInterestCalculator />
        <AdUnit className="my-10" />
        <section className="article-body">
          <h2>What Is Compound Interest?</h2>
          <p>Compound interest is interest calculated on both the initial principal and the accumulated interest from previous periods. It&apos;s often called &quot;interest on interest&quot; and is the reason investments can grow exponentially over time.</p>
          <h2>The Compound Interest Formula</h2>
          <p className="rounded-lg bg-gray-50 p-4 text-center font-mono">A = P(1 + r/n)^(nt)</p>
          <p>Where: <strong>A</strong> = future value, <strong>P</strong> = principal, <strong>r</strong> = annual rate, <strong>n</strong> = compounds per year, <strong>t</strong> = years.</p>
          <h2>The Power of Starting Early</h2>
          <p>A 25-year-old investing $500/month at 7% return will have approximately $1.2 million by age 65. A 35-year-old investing the same amount would have only about $567,000. The extra 10 years more than doubles the result thanks to compound interest.</p>
          <h2>Tips to Maximize Compound Interest</h2>
          <ul>
            <li><strong>Start as early as possible</strong> &ndash; Time is the most powerful factor</li>
            <li><strong>Contribute consistently</strong> &ndash; Regular monthly contributions add up dramatically</li>
            <li><strong>Reinvest dividends</strong> &ndash; Let your earnings generate more earnings</li>
            <li><strong>Minimize fees</strong> &ndash; High fees erode compound growth significantly over decades</li>
            <li><strong>Choose higher compounding frequency</strong> &ndash; Monthly compounding beats annual</li>
          </ul>
          <h2>Related Tools</h2>
          <div className="my-4 grid gap-3 sm:grid-cols-2">
            {[
              { href: "/calculators/savings-goal", label: "Savings Goal Calculator", desc: "Find out how long it takes to reach your savings target" },
              { href: "/calculators/retirement", label: "Retirement Calculator", desc: "See if you're on track to retire comfortably" },
              { href: "/calculators/roi", label: "ROI Calculator", desc: "Calculate return on investment for any asset or decision" },
              { href: "/personal-finance/investing-basics", label: "Investing Basics Guide", desc: "Learn the fundamentals of investing and building wealth" },
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
