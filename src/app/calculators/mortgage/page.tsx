import type { Metadata } from "next";
import MortgageCalculator from "./MortgageCalculator";
import AdUnit from "@/components/AdUnit";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Mortgage Calculator - Calculate Monthly Payments & Amortization",
  description:
    "Free mortgage calculator with amortization schedule. Calculate your monthly mortgage payment, total interest paid, and see how extra payments can save you thousands.",
  keywords: [
    "mortgage calculator",
    "home loan calculator",
    "monthly payment calculator",
    "amortization schedule",
    "mortgage payment",
    "house payment calculator",
  ],
};

export default function MortgagePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Mortgage Calculator",
    description: metadata.description,
    url: `${siteConfig.url}/calculators/mortgage`,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
      jobTitle: siteConfig.author.title,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-4xl px-4 py-10">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-gray-500">
          <a href="/" className="hover:text-teal-600">Home</a>
          {" / "}
          <a href="/calculators" className="hover:text-teal-600">Calculators</a>
          {" / "}
          <span className="text-gray-900">Mortgage Calculator</span>
        </nav>

        <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Mortgage Calculator
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          Calculate your monthly mortgage payment, total interest, and view a
          complete amortization schedule. See how different loan terms and
          interest rates affect your payments.
        </p>

        <MortgageCalculator />

        <AdUnit className="my-10" />

        {/* SEO Content */}
        <section className="article-body">
          <h2>How to Use This Mortgage Calculator</h2>
          <p>
            Enter your home price, down payment, loan term, and interest rate to
            instantly see your estimated monthly mortgage payment. The calculator
            breaks down your payment into principal and interest, and shows the
            total cost over the life of the loan.
          </p>

          <h2>Understanding Your Mortgage Payment</h2>
          <p>
            Your monthly mortgage payment typically includes four components,
            often called PITI:
          </p>
          <ul>
            <li>
              <strong>Principal</strong> &ndash; The portion that reduces your loan
              balance
            </li>
            <li>
              <strong>Interest</strong> &ndash; The cost of borrowing money from
              the lender
            </li>
            <li>
              <strong>Taxes</strong> &ndash; Property taxes (varies by location)
            </li>
            <li>
              <strong>Insurance</strong> &ndash; Homeowner&apos;s insurance premium
            </li>
          </ul>
          <p>
            This calculator focuses on the principal and interest portion. Your
            actual monthly obligation may be higher when taxes and insurance are
            included.
          </p>

          <h2>How Is Mortgage Payment Calculated?</h2>
          <p>
            The monthly mortgage payment formula uses the loan amount (P), monthly
            interest rate (r), and total number of payments (n):
          </p>
          <p className="rounded-lg bg-gray-50 p-4 text-center font-mono">
            M = P × [r(1+r)ⁿ] / [(1+r)ⁿ - 1]
          </p>
          <p>
            For example, a $300,000 loan at 6.5% interest over 30 years results
            in a monthly payment of approximately $1,896.20.
          </p>

          <h2>Tips to Lower Your Mortgage Payment</h2>
          <ul>
            <li>Make a larger down payment (20% avoids PMI)</li>
            <li>Shop around for the best interest rate</li>
            <li>Consider a 15-year term for lower total interest</li>
            <li>Improve your credit score before applying</li>
            <li>Buy points to reduce your interest rate</li>
          </ul>

          <h2>Frequently Asked Questions</h2>
          <h3>What is a good mortgage interest rate?</h3>
          <p>
            Mortgage rates fluctuate based on economic conditions. As of 2026,
            rates typically range from 5.5% to 7.5% for a 30-year fixed mortgage.
            Your individual rate depends on your credit score, down payment, and
            loan type.
          </p>

          <h3>How much house can I afford?</h3>
          <p>
            A common guideline is that your monthly housing costs should not
            exceed 28% of your gross monthly income. Use this calculator to find
            a payment that fits comfortably within your budget.
          </p>

          <h3>Should I choose a 15-year or 30-year mortgage?</h3>
          <p>
            A 15-year mortgage has higher monthly payments but significantly less
            total interest. A 30-year mortgage offers lower monthly payments but
            costs more over the life of the loan. Use the calculator to compare
            both options.
          </p>
        </section>

        <AdUnit className="my-10" />
      </article>
    </>
  );
}
