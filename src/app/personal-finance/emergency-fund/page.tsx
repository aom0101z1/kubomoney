import type { Metadata } from "next";
import Link from "next/link";
import AdUnit from "@/components/AdUnit";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Emergency Fund Guide (2025) - How Much Do You Need?",
  description:
    "Learn how to build an emergency fund. How much to save, where to keep it, and how to build one fast even on a tight budget.",
};

export default function EmergencyFundPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Emergency Fund Guide - How Much Do You Need?",
    description: metadata.description,
    url: `${siteConfig.url}/personal-finance/emergency-fund`,
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
          <span className="text-gray-900">Emergency Fund</span>
        </nav>

        <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Emergency Fund: How Much Do You Need and How to Build One</h1>
        <p className="mb-8 text-lg text-gray-600">
          An emergency fund is your financial safety net. Without one, a single unexpected expense can spiral into debt. Here&apos;s how to build yours.
        </p>

        <AdUnit className="my-8" />

        <div className="prose prose-lg max-w-none">
          <h2>What Is an Emergency Fund?</h2>
          <p>An emergency fund is money set aside specifically for unexpected expenses &mdash; job loss, medical bills, car repairs, or home emergencies. It&apos;s not for vacations, shopping, or planned expenses.</p>
          <p><strong>56% of Americans can&apos;t cover a $1,000 emergency</strong> without borrowing. An emergency fund prevents you from going into debt when life happens.</p>

          <h2>How Much Do You Need?</h2>
          <table>
            <thead>
              <tr><th>Situation</th><th>Recommended Amount</th></tr>
            </thead>
            <tbody>
              <tr><td>Starter fund (while paying off debt)</td><td>$1,000 - $2,000</td></tr>
              <tr><td>Dual income, stable jobs</td><td>3 months of expenses</td></tr>
              <tr><td>Single income, stable job</td><td>6 months of expenses</td></tr>
              <tr><td>Self-employed / freelancer</td><td>6-12 months of expenses</td></tr>
              <tr><td>Single parent</td><td>6-9 months of expenses</td></tr>
            </tbody>
          </table>
          <p><strong>Calculate your number:</strong> Monthly essentials (rent + food + utilities + insurance + transportation + debt minimums) x number of months. Use our <Link href="/calculators/salary" className="text-teal-600 hover:underline">Salary Calculator</Link> to know your take-home pay.</p>

          <h2>Where to Keep Your Emergency Fund</h2>
          <p>Your emergency fund needs to be:</p>
          <ul>
            <li><strong>Liquid</strong> &mdash; Accessible within 1-2 business days</li>
            <li><strong>Safe</strong> &mdash; Not invested in volatile assets (not stocks!)</li>
            <li><strong>Separate</strong> &mdash; In a different account than your daily checking</li>
          </ul>
          <p>The best option: a <strong>high-yield savings account (HYSA)</strong>. These pay 4-5% APY (vs 0.01% at traditional banks) and are FDIC insured. Good options include Marcus (Goldman Sachs), Ally, Discover, and Capital One 360.</p>

          <h2>How to Build an Emergency Fund</h2>

          <h3>Start Small: The $1,000 Milestone</h3>
          <p>Don&apos;t try to save 6 months at once. Start with $1,000 as a mini emergency fund. This alone covers most common emergencies (car repair, medical copay, appliance replacement).</p>

          <h3>7 Ways to Build Your Fund Faster</h3>
          <ol>
            <li><strong>Automate it</strong> &mdash; Set up an automatic transfer of $50-200 per paycheck to your HYSA</li>
            <li><strong>Use windfalls</strong> &mdash; Tax refunds, bonuses, and gift money go straight to the fund</li>
            <li><strong>Cut one expense</strong> &mdash; Cancel one subscription and redirect the money</li>
            <li><strong>Sell stuff</strong> &mdash; Unused electronics, clothes, furniture = instant cash</li>
            <li><strong>Round up purchases</strong> &mdash; Some banks auto-save the difference when you spend</li>
            <li><strong>Side hustle for 30 days</strong> &mdash; Freelancing, delivery, tutoring for one focused month</li>
            <li><strong>Save your raises</strong> &mdash; When you get a raise, save the difference (you were living without it)</li>
          </ol>

          <h3>Timeline to Build Your Fund</h3>
          <table>
            <thead>
              <tr><th>Monthly Saving</th><th>$1,000</th><th>$5,000</th><th>$10,000</th><th>$15,000</th></tr>
            </thead>
            <tbody>
              <tr><td>$100/month</td><td>10 months</td><td>4.2 years</td><td>8.3 years</td><td>12.5 years</td></tr>
              <tr><td>$250/month</td><td>4 months</td><td>1.7 years</td><td>3.3 years</td><td>5 years</td></tr>
              <tr><td>$500/month</td><td>2 months</td><td>10 months</td><td>1.7 years</td><td>2.5 years</td></tr>
              <tr><td>$1,000/month</td><td>1 month</td><td>5 months</td><td>10 months</td><td>15 months</td></tr>
            </tbody>
          </table>

          <h2>When to Use Your Emergency Fund</h2>
          <p>Before dipping in, ask yourself three questions:</p>
          <ol>
            <li>Is it unexpected? (A birthday gift is not an emergency)</li>
            <li>Is it necessary? (A sale on electronics is not an emergency)</li>
            <li>Is it urgent? (Can it wait until next paycheck?)</li>
          </ol>
          <p>If all three answers are yes, use the fund. Then immediately start rebuilding it.</p>

          <h2>Emergency Fund vs Paying Off Debt</h2>
          <p>This is a common debate. The best approach for most people:</p>
          <ol>
            <li>Save a starter emergency fund ($1,000-$2,000)</li>
            <li>Pay off high-interest debt aggressively &mdash; see our <Link href="/personal-finance/how-to-pay-off-debt" className="text-teal-600 hover:underline">debt payoff guide</Link></li>
            <li>Build the full emergency fund (3-6 months)</li>
            <li>Then focus on investing &mdash; see our <Link href="/personal-finance/investing-basics" className="text-teal-600 hover:underline">investing guide</Link></li>
          </ol>
        </div>

        <AdUnit className="my-8" />
      </article>
    </>
  );
}
