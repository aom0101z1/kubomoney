import type { Metadata } from "next";
import Link from "next/link";
import AdUnit from "@/components/AdUnit";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Budgeting Guide (2025) - How to Budget Your Money",
  description:
    "Learn how to create a budget that works. Covers the 50/30/20 rule, zero-based budgeting, envelope method, and the best budgeting apps.",
};

export default function BudgetingGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Budget Your Money - Complete Budgeting Guide",
    description: metadata.description,
    url: `${siteConfig.url}/personal-finance/budgeting-guide`,
    author: { "@type": "Person", name: siteConfig.author.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mx-auto max-w-4xl px-4 py-10">
        <nav className="mb-6 text-sm text-gray-500">
          <a href="/" className="hover:text-teal-600">Home</a>{" / "}
          <a href="/personal-finance" className="hover:text-teal-600">Personal Finance</a>{" / "}
          <span className="text-gray-900">Budgeting Guide</span>
        </nav>

        <h1 className="mb-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">How to Budget Your Money: A Complete Guide</h1>
        <p className="mb-8 text-lg leading-relaxed text-gray-600">
          A budget tells your money where to go instead of wondering where it went. Here are the most effective budgeting methods and how to choose the right one.
        </p>

        <AdUnit className="my-8" />

        <div className="article-body">
          <section className="mb-10 rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50 p-6 sm:p-8">
            <h2 className="!mt-0 !border-0 !pb-0 text-2xl font-bold text-teal-800">Why Budget?</h2>
            <p className="mt-3">
              People who budget are more likely to reach financial goals, have less stress about money, and retire comfortably. A budget isn&apos;t about restriction &mdash; it&apos;s about <strong>spending intentionally</strong> on what matters to you.
            </p>
          </section>

          <h2>The 50/30/20 Rule (Best for Beginners)</h2>
          <p>The simplest budgeting method. Divide your after-tax income into three categories:</p>

          <div className="my-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border-2 border-teal-200 bg-teal-50 p-5 text-center">
              <p className="text-3xl font-extrabold text-teal-700">50%</p>
              <p className="mt-1 font-semibold text-gray-900">Needs</p>
              <p className="mt-2 text-sm text-gray-600">Rent, groceries, utilities, insurance, minimum payments, transport</p>
            </div>
            <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-5 text-center">
              <p className="text-3xl font-extrabold text-emerald-700">30%</p>
              <p className="mt-1 font-semibold text-gray-900">Wants</p>
              <p className="mt-2 text-sm text-gray-600">Dining out, entertainment, shopping, subscriptions, travel</p>
            </div>
            <div className="rounded-xl border-2 border-gray-200 bg-gray-50 p-5 text-center">
              <p className="text-3xl font-extrabold text-gray-700">20%</p>
              <p className="mt-1 font-semibold text-gray-900">Savings &amp; Debt</p>
              <p className="mt-2 text-sm text-gray-600">Emergency fund, investing, extra debt payments</p>
            </div>
          </div>

          <h3>Example: $4,000/month after taxes</h3>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr><th>Category</th><th>Percentage</th><th>Amount</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>Needs</strong></td><td>50%</td><td>$2,000</td></tr>
                <tr><td><strong>Wants</strong></td><td>30%</td><td>$1,200</td></tr>
                <tr><td><strong>Savings &amp; Debt</strong></td><td>20%</td><td>$800</td></tr>
              </tbody>
            </table>
          </div>
          <div className="mt-2 rounded-lg border border-teal-200 bg-teal-50 px-5 py-3 text-sm text-teal-900">
            Use our <Link href="/calculators/salary" className="font-medium text-teal-700 underline hover:text-teal-900">Salary Calculator</Link> to figure out your take-home pay.
          </div>

          <h2>Zero-Based Budget (Best for Detail-Oriented People)</h2>
          <p><strong>Every dollar gets a job.</strong> Income minus all expenses (including savings) equals exactly zero. This method gives you maximum control but takes more time.</p>
          <ol>
            <li>List your total monthly income</li>
            <li>List every expense category</li>
            <li>Assign a dollar amount to each category</li>
            <li>Make sure income minus expenses equals $0</li>
            <li>Track spending throughout the month</li>
          </ol>

          <h2>Envelope Method (Best for Overspenders)</h2>
          <p>Use cash envelopes (physical or digital) for discretionary spending categories. When the envelope is empty, you stop spending in that category. This works because the <strong>pain of handing over physical cash reduces impulse purchases</strong>.</p>

          <h2>Pay Yourself First (Best for Savers)</h2>
          <p><strong>Automate your savings and investments on payday.</strong> Whatever&apos;s left is what you have to spend. This reverses the typical approach of &quot;save what&apos;s left&quot; to &quot;spend what&apos;s left after saving.&quot;</p>
          <ol>
            <li>Set up automatic transfers to savings/investment accounts on payday</li>
            <li>Pay all fixed bills on autopay</li>
            <li>Spend the remainder guilt-free</li>
          </ol>

          <h2>How to Create Your Budget</h2>

          <h3>Step 1: Track Your Spending for 30 Days</h3>
          <p>Before budgeting, know where your money actually goes. Use your bank statements or a tracking app. Most people are surprised by how much they spend on dining out, subscriptions, and impulse purchases.</p>

          <h3>Step 2: Calculate Your Income</h3>
          <p>Use your after-tax (net) income as the starting point. Include all income sources: salary, side hustles, freelancing.</p>

          <h3>Step 3: List Fixed Expenses</h3>
          <p>These are the same every month: rent, car payment, insurance, subscriptions, loan payments.</p>

          <h3>Step 4: Estimate Variable Expenses</h3>
          <p>These change monthly: groceries, gas, utilities, entertainment, dining out. Use your 30-day tracking data.</p>

          <h3>Step 5: Set Savings Goals</h3>
          <ul>
            <li><Link href="/personal-finance/emergency-fund">Emergency fund</Link> (3-6 months expenses)</li>
            <li>Retirement contributions</li>
            <li>Debt payoff above minimums</li>
            <li>Short-term goals (vacation, new car, home down payment)</li>
          </ul>

          <h3>Step 6: Review and Adjust Monthly</h3>
          <p>Your budget isn&apos;t set in stone. Review at the end of each month, see where you overspent or underspent, and adjust for next month.</p>

          <h2>Budgeting Tips</h2>
          <ul>
            <li><strong>Automate everything</strong> &mdash; Bills, savings, investments on autopay</li>
            <li><strong>Use sinking funds</strong> &mdash; Save monthly for annual expenses (insurance, holidays, car maintenance)</li>
            <li><strong>Budget for fun</strong> &mdash; A budget that eliminates all enjoyment won&apos;t last</li>
            <li><strong>Round up</strong> &mdash; Budget $60 for a bill that&apos;s $57. The extra builds a buffer.</li>
            <li><strong>Review subscriptions quarterly</strong> &mdash; Cancel anything you don&apos;t use regularly</li>
          </ul>

          <h2>Tools to Help You Budget</h2>
          <div className="my-4 grid gap-3 sm:grid-cols-3">
            {[
              { href: "/calculators/salary", label: "Salary Calculator", desc: "Know your take-home pay" },
              { href: "/calculators/debt-to-income", label: "DTI Calculator", desc: "How much goes to debt?" },
              { href: "/calculators/net-worth", label: "Net Worth Calculator", desc: "Track financial health" },
            ].map((tool) => (
              <Link key={tool.href} href={tool.href} className="block rounded-lg border border-gray-200 bg-gray-50 p-4 no-underline transition hover:border-teal-300 hover:shadow-sm">
                <p className="font-semibold text-teal-700">{tool.label}</p>
                <p className="text-sm text-gray-600">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </div>

        <AdUnit className="my-8" />
      </article>
    </>
  );
}
