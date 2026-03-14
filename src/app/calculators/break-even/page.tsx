import type { Metadata } from "next";
import Link from "next/link";
import BreakEvenCalculator from "./BreakEvenCalculator";
import AdUnit from "@/components/AdUnit";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Break-Even Calculator - Find Your Break-Even Point",
  description:
    "Free break-even calculator. Find out how many units you need to sell to cover your costs. Essential for any business plan or pricing strategy.",
};

export default function BreakEvenPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Break-Even Calculator",
    description: metadata.description,
    url: `${siteConfig.url}/calculators/break-even`,
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
          <span className="text-gray-900">Break-Even Calculator</span>
        </nav>
        <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Break-Even Calculator</h1>
        <p className="mb-8 text-lg text-gray-600">
          Find out how many units you need to sell to cover all your costs. Enter your fixed costs,
          selling price, and variable cost per unit.
        </p>
        <BreakEvenCalculator />
        <AdUnit className="my-10" />
        <section className="article-body">
          <h2>What Is a Break-Even Analysis?</h2>
          <p>A break-even analysis tells you exactly how many units you need to sell (or how much revenue you need to generate) to cover all your costs. Below that point, you&apos;re losing money. Above it, every additional sale is profit.</p>
          <h2>The Break-Even Formula</h2>
          <p><strong>Break-Even Units = Fixed Costs / (Price per Unit &minus; Variable Cost per Unit)</strong></p>
          <p>The difference between price and variable cost is called the <strong>contribution margin</strong> &mdash; the amount each unit &quot;contributes&quot; toward covering your fixed costs.</p>
          <h2>When to Use Break-Even Analysis</h2>
          <ul>
            <li><strong>Starting a business</strong> &ndash; Know how many sales you need before turning profitable</li>
            <li><strong>Launching a product</strong> &ndash; Set the right price to ensure viability</li>
            <li><strong>Applying for a loan</strong> &ndash; Show lenders your path to profitability</li>
            <li><strong>Evaluating costs</strong> &ndash; See how rent increases or supply costs affect your bottom line</li>
          </ul>
          <h2>Tips to Lower Your Break-Even Point</h2>
          <ul>
            <li><strong>Reduce fixed costs</strong> &ndash; Negotiate rent, use remote teams, choose affordable software</li>
            <li><strong>Increase prices</strong> &ndash; If your product delivers value, a higher price reduces the units needed</li>
            <li><strong>Lower variable costs</strong> &ndash; Negotiate with suppliers, buy in bulk, optimize shipping</li>
            <li><strong>Offer premium tiers</strong> &ndash; Upsell higher-margin products or add-ons</li>
          </ul>
          <h2>Related Tools</h2>
          <div className="my-4 grid gap-3 sm:grid-cols-2">
            {[
              { href: "/calculators/business-startup-cost", label: "Business Startup Cost Calculator", desc: "Estimate how much capital you need to launch your business." },
              { href: "/calculators/roi", label: "ROI Calculator", desc: "Calculate the return on investment for any business decision." },
              { href: "/business-guides/how-to-write-business-plan", label: "How to Write a Business Plan", desc: "Step-by-step guide to creating a solid business plan." },
              { href: "/business-guides/how-to-start-llc", label: "How to Start an LLC", desc: "Learn how to form an LLC in any state with our complete guide." },
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
