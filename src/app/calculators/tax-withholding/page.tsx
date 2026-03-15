import type { Metadata } from "next";
import Link from "next/link";
import TaxWithholdingCalculator from "./TaxWithholdingCalculator";
import AdUnit from "@/components/AdUnit";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Tax Withholding Calculator - Estimate Your Take-Home Pay",
  description:
    "Free tax withholding calculator. Estimate federal income tax, Social Security, Medicare, and your take-home pay based on income, filing status, and dependents.",
};

export default function TaxWithholdingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Tax Withholding Calculator",
    description: metadata.description,
    url: `${siteConfig.url}/calculators/tax-withholding`,
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
          <span className="text-gray-900">Tax Withholding Calculator</span>
        </nav>
        <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Tax Withholding Calculator</h1>
        <p className="mb-8 text-lg text-gray-600">
          Estimate your federal tax withholding and take-home pay. Includes income tax, Social Security,
          and Medicare based on current tax brackets.
        </p>
        <TaxWithholdingCalculator />
        <AdUnit className="my-10" />
        <section className="article-body">
          <h2>How Federal Tax Withholding Works</h2>
          <p>
            When you receive a paycheck, your employer withholds taxes before paying you. This includes:
          </p>
          <ul>
            <li><strong>Federal income tax</strong> &mdash; Based on your income, filing status, and deductions (10% to 37%)</li>
            <li><strong>Social Security tax</strong> &mdash; 6.2% on income up to $168,600</li>
            <li><strong>Medicare tax</strong> &mdash; 1.45% on all income, plus 0.9% on income over $200,000</li>
          </ul>
          <p>This calculator does <strong>not</strong> include state income tax, which varies by state.</p>

          <h2>Understanding Tax Brackets</h2>
          <p>
            The US uses a <strong>progressive tax system</strong>, meaning different portions of your income
            are taxed at different rates. Your &quot;marginal rate&quot; is the rate on your last dollar of income,
            while your &quot;effective rate&quot; is the average rate across all your income.
          </p>
          <p>
            For example, a single filer earning $75,000 doesn&apos;t pay 22% on all $75,000 &mdash;
            they pay 10% on the first $11,600, 12% on the next $35,550, and 22% on the remainder.
          </p>

          <h2>Standard Deduction vs. Itemized</h2>
          <ul>
            <li><strong>Single</strong> &mdash; $14,600 standard deduction</li>
            <li><strong>Married Filing Jointly</strong> &mdash; $29,200 standard deduction</li>
            <li><strong>Head of Household</strong> &mdash; $21,900 standard deduction</li>
          </ul>
          <p>
            Most taxpayers take the standard deduction. You should only itemize if your deductions
            (mortgage interest, charitable donations, state taxes, etc.) exceed the standard deduction.
          </p>

          <h2>Child Tax Credit</h2>
          <p>
            Each qualifying child under 17 provides a <strong>$2,000 tax credit</strong>, which directly
            reduces your tax bill dollar-for-dollar. This calculator automatically applies the credit.
          </p>

          <h2>Related Tools</h2>
          <div className="my-4 grid gap-3 sm:grid-cols-2">
            {[
              { href: "/calculators/paycheck", label: "Paycheck Calculator", desc: "Detailed paycheck breakdown with hourly and salary conversion" },
              { href: "/calculators/salary", label: "Salary Calculator", desc: "Convert between hourly, weekly, monthly, and annual pay" },
              { href: "/tax-rates", label: "Tax Rates by State", desc: "Compare income, sales, and property tax rates across all 50 states" },
              { href: "/calculators/debt-to-income", label: "Debt-to-Income Calculator", desc: "See how much of your income goes toward debt" },
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
