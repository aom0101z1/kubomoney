import type { Metadata } from "next";
import DTICalculator from "./DTICalculator";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "Debt-to-Income Ratio Calculator - Check Your DTI",
  description: "Free DTI calculator. Calculate your debt-to-income ratio to see if you qualify for a mortgage or loan. Understand what lenders look for.",
};

export default function DTIPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-10">
      <nav className="mb-6 text-sm text-gray-500">
        <a href="/" className="hover:text-teal-600">Home</a>{" / "}
        <a href="/calculators" className="hover:text-teal-600">Calculators</a>{" / "}
        <span className="text-gray-900">Debt-to-Income Calculator</span>
      </nav>
      <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Debt-to-Income Ratio Calculator</h1>
      <p className="mb-8 text-lg text-gray-600">Calculate your DTI ratio to understand how lenders view your financial health. Most mortgage lenders require a DTI below 43%.</p>
      <DTICalculator />
      <AdUnit className="my-10" />
      <section className="prose prose-lg max-w-none">
        <h2>What Is Debt-to-Income Ratio?</h2>
        <p>Your debt-to-income (DTI) ratio compares your total monthly debt payments to your gross monthly income. Lenders use this number to evaluate your ability to manage monthly payments and repay borrowed money.</p>
        <h2>DTI Ratio Guidelines</h2>
        <ul>
          <li><strong>36% or less</strong> &ndash; Excellent. You&apos;re well-positioned for most loans</li>
          <li><strong>37% - 43%</strong> &ndash; Acceptable. Maximum for most qualified mortgages</li>
          <li><strong>44% - 50%</strong> &ndash; High. May need to reduce debt or increase income</li>
          <li><strong>50%+</strong> &ndash; Very high. Focus on debt reduction</li>
        </ul>
        <h2>Front-End vs Back-End DTI</h2>
        <p><strong>Front-end DTI</strong> only includes housing costs (mortgage/rent, property tax, insurance). Most lenders want this below 28%. <strong>Back-end DTI</strong> includes all monthly debt obligations and should be below 36-43%.</p>
      </section>
      <AdUnit className="my-10" />
    </article>
  );
}
