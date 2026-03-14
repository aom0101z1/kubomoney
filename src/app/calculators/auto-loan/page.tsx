import type { Metadata } from "next";
import AutoLoanCalculator from "./AutoLoanCalculator";
import AdUnit from "@/components/AdUnit";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Auto Loan Calculator - Estimate Your Car Payment",
  description:
    "Free auto loan calculator. Estimate your monthly car payment with trade-in value, down payment, sales tax, and different loan terms.",
};

export default function AutoLoanPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Auto Loan Calculator",
    description: metadata.description,
    url: `${siteConfig.url}/calculators/auto-loan`,
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
          <span className="text-gray-900">Auto Loan Calculator</span>
        </nav>
        <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Auto Loan Calculator</h1>
        <p className="mb-8 text-lg text-gray-600">
          Estimate your monthly car payment. Enter the vehicle price, down payment, trade-in value,
          interest rate, and loan term to see your total costs.
        </p>
        <AutoLoanCalculator />
        <AdUnit className="my-10" />
        <section className="prose prose-lg max-w-none">
          <h2>How Auto Loans Work</h2>
          <p>An auto loan lets you finance a vehicle purchase over a set period (typically 36-84 months). You pay a fixed monthly amount that includes both principal and interest. The longer the term, the lower your monthly payment &mdash; but the more you pay in total interest.</p>
          <h2>How to Get the Best Auto Loan Rate</h2>
          <ul>
            <li><strong>Check your credit score</strong> &ndash; 720+ typically gets the best rates</li>
            <li><strong>Shop multiple lenders</strong> &ndash; Compare banks, credit unions, and dealer financing</li>
            <li><strong>Make a larger down payment</strong> &ndash; 20% down avoids being &quot;upside down&quot; on your loan</li>
            <li><strong>Choose a shorter term</strong> &ndash; 48-60 months saves significantly on interest vs 72-84 months</li>
            <li><strong>Get pre-approved</strong> &ndash; Have your financing ready before visiting the dealer</li>
          </ul>
          <h2>New vs Used Car Loan Rates</h2>
          <p>New cars typically have lower interest rates (5-7%) compared to used cars (7-10%). However, new cars depreciate faster &mdash; losing 20-30% of their value in the first year. A 2-3 year old certified pre-owned vehicle often offers the best value.</p>
        </section>
        <AdUnit className="my-10" />
      </article>
    </>
  );
}
