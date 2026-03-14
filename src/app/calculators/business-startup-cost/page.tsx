import type { Metadata } from "next";
import BusinessStartupCostCalculator from "./BusinessStartupCostCalculator";
import AdUnit from "@/components/AdUnit";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Business Startup Cost Calculator - Estimate Your Launch Budget",
  description:
    "Free business startup cost calculator. Estimate one-time and monthly costs to launch your business. Calculate how much capital you need with a cash runway.",
};

export default function BusinessStartupCostPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Business Startup Cost Calculator",
    description: metadata.description,
    url: `${siteConfig.url}/calculators/business-startup-cost`,
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
          <span className="text-gray-900">Business Startup Cost Calculator</span>
        </nav>
        <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Business Startup Cost Calculator</h1>
        <p className="mb-8 text-lg text-gray-600">
          Estimate how much money you need to start your business. Adjust one-time and monthly expenses,
          set your cash runway, and see the total capital required.
        </p>
        <BusinessStartupCostCalculator />
        <AdUnit className="my-10" />
        <section className="article-body">
          <h2>Why Calculate Startup Costs?</h2>
          <p>The #1 reason small businesses fail is running out of cash. By calculating your startup costs upfront, you can secure enough funding, set realistic expectations, and avoid financial surprises in the critical first year.</p>
          <h2>Common Startup Cost Categories</h2>
          <ul>
            <li><strong>Legal &amp; registration</strong> &ndash; LLC filing, permits, licenses ($100-$800 depending on state)</li>
            <li><strong>Equipment</strong> &ndash; Computers, tools, furniture, machinery</li>
            <li><strong>Marketing</strong> &ndash; Website, logo, business cards, initial ad spend</li>
            <li><strong>Inventory</strong> &ndash; Initial stock for product-based businesses</li>
            <li><strong>Rent &amp; deposits</strong> &ndash; First/last month rent plus security deposit</li>
            <li><strong>Insurance</strong> &ndash; General liability, professional liability, workers&apos; comp</li>
          </ul>
          <h2>How Much Cash Runway Do You Need?</h2>
          <p>Most experts recommend <strong>6-12 months</strong> of operating expenses saved before launching. This gives you enough time to acquire customers and reach profitability without running out of money. Service businesses may need less (3-6 months) while product businesses often need more (9-12 months).</p>
          <h2>Ways to Reduce Startup Costs</h2>
          <ul>
            <li><strong>Start from home</strong> &ndash; Skip office rent until you need it</li>
            <li><strong>Use free tools</strong> &ndash; Free website builders, open-source software, free accounting tools</li>
            <li><strong>Pre-sell</strong> &ndash; Validate demand before investing in inventory</li>
            <li><strong>Freelance first</strong> &ndash; Offer services before building products</li>
          </ul>
        </section>
        <AdUnit className="my-10" />
      </article>
    </>
  );
}
