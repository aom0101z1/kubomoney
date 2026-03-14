import type { Metadata } from "next";
import PaycheckCalculator from "./PaycheckCalculator";
import AdUnit from "@/components/AdUnit";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Paycheck Calculator - Estimate Your Take-Home Pay",
  description:
    "Free paycheck calculator. Estimate your take-home pay after federal and state taxes, Social Security, Medicare, 401(k), and health insurance deductions.",
};

export default function PaycheckPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Paycheck Calculator",
    description: metadata.description,
    url: `${siteConfig.url}/calculators/paycheck`,
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
          <span className="text-gray-900">Paycheck Calculator</span>
        </nav>
        <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Paycheck Calculator</h1>
        <p className="mb-8 text-lg text-gray-600">
          Estimate your take-home pay after all deductions. Enter your salary, filing status, state tax rate, and
          benefits to see your net paycheck.
        </p>
        <PaycheckCalculator />
        <AdUnit className="my-10" />
        <section className="article-body">
          <h2>Understanding Your Paycheck</h2>
          <p>Your paycheck has several deductions before you receive your take-home pay:</p>
          <ul>
            <li><strong>Federal income tax</strong> &mdash; Based on your taxable income and filing status (2025 brackets)</li>
            <li><strong>State income tax</strong> &mdash; Varies by state (0% in TX, FL, WA, NV, TN, SD, WY, NH, AK to 13.3% in CA)</li>
            <li><strong>Social Security</strong> &mdash; 6.2% of income up to $176,100 (2025)</li>
            <li><strong>Medicare</strong> &mdash; 1.45% of all income (+ 0.9% surtax above $200K)</li>
            <li><strong>401(k) contributions</strong> &mdash; Pre-tax, reduces your taxable income</li>
            <li><strong>Health insurance</strong> &mdash; Usually pre-tax, varies by employer plan</li>
          </ul>
          <h2>How to Maximize Your Take-Home Pay</h2>
          <ul>
            <li><strong>Contribute to a 401(k)</strong> &mdash; Reduces taxable income now; your future self will thank you</li>
            <li><strong>Use an HSA</strong> &mdash; Triple tax benefit if you have a high-deductible health plan</li>
            <li><strong>Claim all deductions</strong> &mdash; Student loan interest, education credits, child tax credit</li>
            <li><strong>Adjust withholding</strong> &mdash; If you get a large refund, you&apos;re giving the IRS an interest-free loan. Adjust your W-4.</li>
          </ul>
          <h2>States With No Income Tax</h2>
          <p>These 9 states have no state income tax: Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, and Wyoming. Living in a no-tax state can save you thousands per year.</p>
          <p>Compare salaries across states with our <a href="/salary-by-state" className="text-teal-600 hover:underline">Salary by State</a> tool.</p>
        </section>
        <AdUnit className="my-10" />
      </article>
    </>
  );
}
