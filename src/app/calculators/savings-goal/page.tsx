import type { Metadata } from "next";
import SavingsGoalCalculator from "./SavingsGoalCalculator";
import AdUnit from "@/components/AdUnit";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Savings Goal Calculator - How Long to Reach Your Goal?",
  description:
    "Free savings goal calculator. Find out how long it takes to reach your savings target with monthly contributions and interest. Plan for a house, car, vacation, or emergency fund.",
};

export default function SavingsGoalPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Savings Goal Calculator",
    description: metadata.description,
    url: `${siteConfig.url}/calculators/savings-goal`,
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
          <span className="text-gray-900">Savings Goal Calculator</span>
        </nav>
        <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Savings Goal Calculator</h1>
        <p className="mb-8 text-lg text-gray-600">
          Find out how long it will take to reach your savings goal. Enter your target amount, current savings,
          monthly contribution, and expected return rate.
        </p>
        <SavingsGoalCalculator />
        <AdUnit className="my-10" />
        <section className="article-body">
          <h2>How to Reach Your Savings Goal Faster</h2>
          <p>There are three levers you can pull to reach any savings goal faster:</p>
          <ul>
            <li><strong>Increase monthly contributions</strong> &mdash; Even $50 more per month makes a big difference over time</li>
            <li><strong>Earn a higher return</strong> &mdash; A high-yield savings account (4-5% APY) earns 100x more than a regular savings account (0.01%)</li>
            <li><strong>Start with more</strong> &mdash; A one-time deposit (tax refund, bonus, selling unused items) gives your savings a head start</li>
          </ul>
          <h2>Common Savings Goals</h2>
          <ul>
            <li><strong>Emergency fund</strong> &mdash; 3-6 months of expenses ($5,000-$25,000 for most people)</li>
            <li><strong>House down payment</strong> &mdash; 5-20% of home price ($15,000-$80,000)</li>
            <li><strong>New car</strong> &mdash; $5,000-$15,000 for a solid down payment</li>
            <li><strong>Vacation</strong> &mdash; $2,000-$10,000 depending on destination</li>
            <li><strong>Wedding</strong> &mdash; Average US wedding costs $30,000</li>
          </ul>
          <h2>Where to Keep Your Savings</h2>
          <ul>
            <li><strong>High-yield savings account (HYSA)</strong> &mdash; 4-5% APY, FDIC insured, instant access. Best for goals under 3 years.</li>
            <li><strong>Money market account</strong> &mdash; Similar to HYSA with check-writing ability</li>
            <li><strong>CDs (Certificates of Deposit)</strong> &mdash; Slightly higher rates but money is locked for a term</li>
            <li><strong>Index funds</strong> &mdash; Higher returns (~7-10%) but volatile. Best for goals 5+ years away.</li>
          </ul>
        </section>
        <AdUnit className="my-10" />
      </article>
    </>
  );
}
