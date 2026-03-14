import type { Metadata } from "next";
import Link from "next/link";
import AdUnit from "@/components/AdUnit";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "How to Pay Off Debt Fast (2025) - Snowball vs Avalanche Methods",
  description:
    "Learn the fastest ways to pay off debt. Compare the debt snowball and avalanche methods, negotiate lower rates, and create a payoff plan.",
};

export default function HowToPayOffDebtPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Pay Off Debt Fast",
    description: metadata.description,
    url: `${siteConfig.url}/personal-finance/how-to-pay-off-debt`,
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
          <span className="text-gray-900">How to Pay Off Debt</span>
        </nav>

        <h1 className="mb-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">How to Pay Off Debt Fast</h1>
        <p className="mb-8 text-lg leading-relaxed text-gray-600">
          The average American has $104,215 in debt. Here are proven strategies to pay it off faster and save thousands in interest.
        </p>

        <AdUnit className="my-8" />

        <div className="article-body">
          <h2>Step 1: Know What You Owe</h2>
          <p>List every debt with the balance, interest rate, minimum payment, and due date. This clarity alone reduces financial anxiety. Use our <Link href="/calculators/net-worth">Net Worth Calculator</Link> to see the full picture.</p>

          <h2>Step 2: Choose a Payoff Strategy</h2>

          <div className="my-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border-2 border-teal-200 bg-teal-50 p-6">
              <h3 className="!mt-0 mb-2 text-lg font-bold text-teal-800">Debt Avalanche</h3>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-teal-600">Saves the Most Money</p>
              <p className="mb-3 text-sm text-gray-700">Pay minimums on everything, then put all extra money toward the <strong>highest interest rate</strong> debt first.</p>
              <ul className="ml-5 list-disc space-y-1 text-sm text-gray-700">
                <li><strong>Pro:</strong> Mathematically optimal</li>
                <li><strong>Con:</strong> Progress may feel slow</li>
                <li><strong>Best for:</strong> Disciplined, numbers-driven people</li>
              </ul>
            </div>
            <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-6">
              <h3 className="!mt-0 mb-2 text-lg font-bold text-emerald-800">Debt Snowball</h3>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-emerald-600">Best for Motivation</p>
              <p className="mb-3 text-sm text-gray-700">Pay minimums on everything, then put all extra money toward the <strong>smallest balance</strong> first.</p>
              <ul className="ml-5 list-disc space-y-1 text-sm text-gray-700">
                <li><strong>Pro:</strong> Quick wins build momentum</li>
                <li><strong>Con:</strong> May pay more total interest</li>
                <li><strong>Best for:</strong> People who need motivation</li>
              </ul>
            </div>
          </div>

          <h3>Example: $15,000 Total Debt</h3>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr><th>Debt</th><th>Balance</th><th>Rate</th><th>Avalanche</th><th>Snowball</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>Credit Card A</strong></td><td>$3,000</td><td>22%</td><td>1st</td><td>2nd</td></tr>
                <tr><td><strong>Credit Card B</strong></td><td>$1,500</td><td>18%</td><td>2nd</td><td>1st</td></tr>
                <tr><td><strong>Car Loan</strong></td><td>$8,000</td><td>6%</td><td>3rd</td><td>3rd</td></tr>
                <tr><td><strong>Student Loan</strong></td><td>$2,500</td><td>5%</td><td>4th</td><td>2nd</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Step 3: Free Up Extra Money</h2>
          <ul>
            <li><strong>Cut subscriptions</strong> &mdash; Cancel anything you don&apos;t use weekly</li>
            <li><strong>Reduce dining out</strong> &mdash; Cooking saves $200-400/month for most people</li>
            <li><strong>Sell unused items</strong> &mdash; Electronics, clothes, furniture on Facebook Marketplace</li>
            <li><strong>Pick up a side hustle</strong> &mdash; Even $500/month extra accelerates payoff dramatically</li>
            <li><strong>Negotiate bills</strong> &mdash; Call insurance, phone, and internet providers for lower rates</li>
          </ul>

          <h2>Step 4: Lower Your Interest Rates</h2>
          <ul>
            <li><strong>Balance transfer</strong> &mdash; Move credit card debt to a 0% APR card (typically 12-18 months)</li>
            <li><strong>Call and negotiate</strong> &mdash; Ask credit card companies for a lower rate. Works 50-70% of the time.</li>
            <li><strong>Debt consolidation loan</strong> &mdash; Combine multiple debts into one lower-rate loan</li>
            <li><strong>Refinance</strong> &mdash; Refinance student loans, auto loans, or mortgage for better terms</li>
          </ul>

          <h2>Step 5: Automate and Stay Consistent</h2>
          <p>Set up automatic payments for at least the minimum on every debt. Then set up a separate automatic payment for your &quot;extra&quot; amount on your target debt. <strong>Automation removes willpower from the equation.</strong></p>

          <h2>Debt Payoff Timeline Examples</h2>
          <p>With $500/month extra toward debt:</p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr><th>Total Debt</th><th>Avg Rate</th><th>Min Only</th><th>+$500/mo</th><th>Interest Saved</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>$5,000</strong></td><td>20%</td><td>9 years</td><td>9 months</td><td>$3,800</td></tr>
                <tr><td><strong>$15,000</strong></td><td>18%</td><td>25 years</td><td>2.5 years</td><td>$18,000</td></tr>
                <tr><td><strong>$30,000</strong></td><td>15%</td><td>30+ years</td><td>4.5 years</td><td>$28,000</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Tools to Help</h2>
          <div className="my-4 grid gap-3 sm:grid-cols-3">
            {[
              { href: "/calculators/credit-card-payoff", label: "Credit Card Payoff", desc: "See your exact payoff date" },
              { href: "/calculators/loan-payoff", label: "Loan Payoff", desc: "Extra payments save how much?" },
              { href: "/calculators/debt-to-income", label: "DTI Calculator", desc: "Track DTI as you pay down" },
            ].map((tool) => (
              <Link key={tool.href} href={tool.href} className="block rounded-lg border border-gray-200 bg-gray-50 p-4 no-underline transition hover:border-teal-300 hover:shadow-sm">
                <p className="font-semibold text-teal-700">{tool.label}</p>
                <p className="text-sm text-gray-600">{tool.desc}</p>
              </Link>
            ))}
          </div>

          <h2>When to Seek Help</h2>
          <p>If you can&apos;t make minimum payments, your debt-to-income ratio is above 50%, or you&apos;re being harassed by collectors, consider:</p>
          <ul>
            <li><strong>Non-profit credit counseling</strong> &mdash; Free or low-cost debt management plans (NFCC.org)</li>
            <li><strong>Debt management plan</strong> &mdash; Counselors negotiate lower rates with creditors</li>
            <li><strong>Bankruptcy</strong> &mdash; A last resort, but provides a legal fresh start</li>
          </ul>
        </div>

        <AdUnit className="my-8" />
      </article>
    </>
  );
}
