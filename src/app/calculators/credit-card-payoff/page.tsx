import type { Metadata } from "next";
import CreditCardPayoffCalculator from "./CreditCardPayoffCalculator";
import AdUnit from "@/components/AdUnit";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Credit Card Payoff Calculator - Get Out of Debt Faster",
  description:
    "Free credit card payoff calculator. See how long it will take to pay off your credit card debt and how much interest you'll pay. Find the fastest way to become debt-free.",
};

export default function CreditCardPayoffPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Credit Card Payoff Calculator",
    description: metadata.description,
    url: `${siteConfig.url}/calculators/credit-card-payoff`,
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
          <span className="text-gray-900">Credit Card Payoff Calculator</span>
        </nav>
        <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Credit Card Payoff Calculator</h1>
        <p className="mb-8 text-lg text-gray-600">
          Find out how long it will take to pay off your credit card balance, or calculate
          the monthly payment needed to be debt-free by a target date.
        </p>
        <CreditCardPayoffCalculator />
        <AdUnit className="my-10" />
        <section className="prose prose-lg max-w-none">
          <h2>The True Cost of Credit Card Debt</h2>
          <p>With average credit card APRs around 22-28%, a $5,000 balance with minimum payments can take over 15 years to pay off &mdash; costing you more than $6,000 in interest alone. That&apos;s more than the original balance.</p>
          <h2>Strategies to Pay Off Credit Card Debt</h2>
          <ul>
            <li><strong>Pay more than the minimum</strong> &ndash; Even $50 extra per month makes a massive difference</li>
            <li><strong>Avalanche method</strong> &ndash; Pay highest interest rate cards first to minimize total interest</li>
            <li><strong>Snowball method</strong> &ndash; Pay smallest balances first for quick psychological wins</li>
            <li><strong>Balance transfer</strong> &ndash; Move debt to a 0% APR introductory offer card</li>
            <li><strong>Debt consolidation loan</strong> &ndash; Replace high-APR cards with a lower-rate personal loan</li>
          </ul>
          <h2>How Credit Card Interest Works</h2>
          <p>Credit card interest compounds daily on your average daily balance. Your APR is divided by 365 to get the daily rate, which is then applied to your balance each day. This is why credit card debt grows so quickly compared to other types of loans.</p>
        </section>
        <AdUnit className="my-10" />
      </article>
    </>
  );
}
