import type { Metadata } from "next";
import Link from "next/link";
import EmergencyFundCalculator from "./EmergencyFundCalculator";
import AdUnit from "@/components/AdUnit";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Emergency Fund Calculator - How Much Do You Need?",
  description:
    "Free emergency fund calculator. Find out how much you need to save based on your monthly expenses, and how long it will take to build your safety net.",
};

export default function EmergencyFundPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Emergency Fund Calculator",
    description: metadata.description,
    url: `${siteConfig.url}/calculators/emergency-fund`,
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
          <span className="text-gray-900">Emergency Fund Calculator</span>
        </nav>
        <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Emergency Fund Calculator</h1>
        <p className="mb-8 text-lg text-gray-600">
          Calculate how much you need in your emergency fund based on your actual monthly expenses.
          See your progress and how long it will take to reach your goal.
        </p>
        <EmergencyFundCalculator />
        <AdUnit className="my-10" />
        <section className="article-body">
          <h2>How Much Should Your Emergency Fund Be?</h2>
          <p>
            Most financial experts recommend saving <strong>3 to 6 months</strong> of essential living expenses.
            The right amount depends on your situation:
          </p>
          <ul>
            <li><strong>3 months</strong> &mdash; Dual-income household, stable jobs, no dependents</li>
            <li><strong>6 months</strong> &mdash; Single income, variable income, or have dependents</li>
            <li><strong>9-12 months</strong> &mdash; Self-employed, freelancer, or single parent</li>
          </ul>

          <h2>What Counts as an Essential Expense?</h2>
          <p>Your emergency fund should cover the expenses you can&apos;t avoid:</p>
          <ul>
            <li><strong>Housing</strong> &mdash; Rent or mortgage payment</li>
            <li><strong>Food</strong> &mdash; Groceries (not dining out)</li>
            <li><strong>Utilities</strong> &mdash; Electricity, water, gas, internet, phone</li>
            <li><strong>Transportation</strong> &mdash; Car payment, gas, insurance, or transit pass</li>
            <li><strong>Insurance</strong> &mdash; Health, car, renters/homeowners</li>
            <li><strong>Minimum debt payments</strong> &mdash; Credit cards, student loans</li>
          </ul>

          <h2>Where to Keep Your Emergency Fund</h2>
          <p>
            Your emergency fund should be easily accessible but separate from your daily spending account:
          </p>
          <ul>
            <li><strong>High-yield savings account (HYSA)</strong> &mdash; Best option. Earns 4-5% APY while remaining fully liquid and FDIC insured.</li>
            <li><strong>Money market account</strong> &mdash; Similar rates with check-writing access</li>
            <li><strong>Regular savings account</strong> &mdash; Accessible but earns almost nothing (0.01%)</li>
          </ul>
          <p><strong>Avoid</strong> keeping your emergency fund in stocks, CDs, or anywhere you can&apos;t access it within 1-2 business days.</p>

          <h2>How to Build Your Emergency Fund</h2>
          <ul>
            <li><strong>Start small</strong> &mdash; Even $500 covers many emergencies. Build from there.</li>
            <li><strong>Automate transfers</strong> &mdash; Set up automatic transfers on payday</li>
            <li><strong>Save windfalls</strong> &mdash; Tax refunds, bonuses, and cash gifts</li>
            <li><strong>Cut one expense</strong> &mdash; Cancel one subscription and redirect that money</li>
          </ul>

          <h2>Related Tools</h2>
          <div className="my-4 grid gap-3 sm:grid-cols-2">
            {[
              { href: "/calculators/savings-goal", label: "Savings Goal Calculator", desc: "Set any savings target and see how long it takes" },
              { href: "/calculators/debt-to-income", label: "Debt-to-Income Calculator", desc: "See how much of your income goes to debt" },
              { href: "/personal-finance/emergency-fund", label: "Emergency Fund Guide", desc: "Complete guide to building your safety net" },
              { href: "/personal-finance/budgeting-guide", label: "Budgeting Guide", desc: "Learn how to manage your monthly expenses" },
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
