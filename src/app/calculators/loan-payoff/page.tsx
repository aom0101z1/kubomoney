import type { Metadata } from "next";
import Link from "next/link";
import LoanPayoffCalculator from "./LoanPayoffCalculator";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "Loan Payoff Calculator - See How Extra Payments Save You Money",
  description: "Free loan payoff calculator. Find out when you'll be debt-free and see how extra monthly payments can save you thousands in interest.",
};

export default function LoanPayoffPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-10">
      <nav className="mb-6 text-sm text-gray-500">
        <a href="/" className="hover:text-teal-600">Home</a>{" / "}
        <a href="/calculators" className="hover:text-teal-600">Calculators</a>{" / "}
        <span className="text-gray-900">Loan Payoff Calculator</span>
      </nav>
      <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Loan Payoff Calculator</h1>
      <p className="mb-8 text-lg text-gray-600">Find out when you&apos;ll pay off your loan and see how extra monthly payments can save you thousands in interest.</p>
      <LoanPayoffCalculator />
      <AdUnit className="my-10" />
      <section className="article-body">
        <h2>How Extra Payments Work</h2>
        <p>When you make extra payments on a loan, the entire extra amount goes directly toward reducing your principal balance. This means you pay less interest over the life of the loan because interest is calculated on a smaller balance each month.</p>
        <h2>Strategies to Pay Off Debt Faster</h2>
        <ul>
          <li><strong>Round up payments</strong> &ndash; If your payment is $467, round up to $500</li>
          <li><strong>Biweekly payments</strong> &ndash; Pay half your monthly payment every two weeks (equals 13 full payments per year)</li>
          <li><strong>Snowball method</strong> &ndash; Pay off smallest balances first for psychological wins</li>
          <li><strong>Avalanche method</strong> &ndash; Pay off highest interest rate first to save the most money</li>
          <li><strong>Windfalls</strong> &ndash; Apply tax refunds, bonuses, and gifts to your loan balance</li>
        </ul>
        <h2>Related Tools</h2>
        <div className="my-4 grid gap-3 sm:grid-cols-2">
          {[
            { href: "/calculators/credit-card-payoff", label: "Credit Card Payoff Calculator", desc: "Find how long it takes to pay off credit card debt and total interest cost." },
            { href: "/calculators/auto-loan", label: "Auto Loan Calculator", desc: "Estimate your monthly car payment with trade-in and down payment." },
            { href: "/calculators/mortgage", label: "Mortgage Calculator", desc: "Calculate monthly mortgage payments including taxes and insurance." },
            { href: "/personal-finance/how-to-pay-off-debt", label: "How to Pay Off Debt", desc: "Step-by-step guide to becoming debt-free using proven strategies." },
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
  );
}
