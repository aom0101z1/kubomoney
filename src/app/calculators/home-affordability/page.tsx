import type { Metadata } from "next";
import HomeAffordabilityCalculator from "./HomeAffordabilityCalculator";
import AdUnit from "@/components/AdUnit";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Home Affordability Calculator - How Much House Can You Afford?",
  description:
    "Free home affordability calculator. Find out how much house you can afford based on your income, debts, down payment, and interest rate. Uses the 28/36 rule.",
};

export default function HomeAffordabilityPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Home Affordability Calculator",
    description: metadata.description,
    url: `${siteConfig.url}/calculators/home-affordability`,
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
          <span className="text-gray-900">Home Affordability Calculator</span>
        </nav>
        <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Home Affordability Calculator</h1>
        <p className="mb-8 text-lg text-gray-600">
          Find out how much house you can afford based on your income, existing debts, down payment, and current interest rates.
        </p>
        <HomeAffordabilityCalculator />
        <AdUnit className="my-10" />
        <section className="prose prose-lg max-w-none">
          <h2>The 28/36 Rule</h2>
          <p>Lenders use the <strong>28/36 rule</strong> to determine how much you can borrow:</p>
          <ul>
            <li><strong>28% rule</strong> &mdash; Your total housing costs (mortgage + taxes + insurance) should not exceed 28% of your gross monthly income</li>
            <li><strong>36% rule</strong> &mdash; Your total debt payments (housing + car + student loans + credit cards) should not exceed 36% of your gross monthly income</li>
          </ul>
          <p>Our calculator uses both rules and shows you the lower (more conservative) result.</p>
          <h2>What Affects How Much You Can Afford?</h2>
          <ul>
            <li><strong>Income</strong> &mdash; Higher income = larger mortgage approval</li>
            <li><strong>Existing debts</strong> &mdash; Car payments, student loans, and credit cards reduce your borrowing power</li>
            <li><strong>Down payment</strong> &mdash; A larger down payment means you can afford a more expensive home</li>
            <li><strong>Interest rate</strong> &mdash; Even a 0.5% rate difference changes your purchasing power by $20,000-$40,000</li>
            <li><strong>Property taxes</strong> &mdash; Vary widely by state (0.3% in Hawaii to 2.5% in New Jersey)</li>
          </ul>
          <h2>How Much Down Payment Do You Need?</h2>
          <ul>
            <li><strong>Conventional loan</strong> &mdash; 5-20% down (20% avoids PMI)</li>
            <li><strong>FHA loan</strong> &mdash; 3.5% minimum down payment</li>
            <li><strong>VA loan</strong> &mdash; 0% down for eligible veterans</li>
            <li><strong>USDA loan</strong> &mdash; 0% down for eligible rural areas</li>
          </ul>
          <p>Use our <a href="/calculators/mortgage" className="text-teal-600 hover:underline">Mortgage Calculator</a> to see your exact monthly payment for a specific home price, or our <a href="/calculators/savings-goal" className="text-teal-600 hover:underline">Savings Goal Calculator</a> to plan your down payment savings.</p>
        </section>
        <AdUnit className="my-10" />
      </article>
    </>
  );
}
