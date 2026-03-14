import type { Metadata } from "next";
import Link from "next/link";
import SalaryCalculator from "./SalaryCalculator";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "Salary Calculator - Convert Hourly, Monthly, Annual Pay",
  description: "Free salary calculator. Convert between hourly, weekly, biweekly, monthly, and annual salary. Estimate federal taxes and take-home pay.",
};

export default function SalaryPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-10">
      <nav className="mb-6 text-sm text-gray-500">
        <a href="/" className="hover:text-teal-600">Home</a>{" / "}
        <a href="/calculators" className="hover:text-teal-600">Calculators</a>{" / "}
        <span className="text-gray-900">Salary Calculator</span>
      </nav>
      <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Salary Calculator</h1>
      <p className="mb-8 text-lg text-gray-600">Convert between hourly, weekly, biweekly, monthly, and annual salary. See estimated federal taxes and take-home pay.</p>
      <SalaryCalculator />
      <AdUnit className="my-10" />
      <section className="article-body">
        <h2>How to Convert Salary to Hourly Rate</h2>
        <p>To convert an annual salary to an hourly rate, divide the annual salary by the total number of work hours per year. For a standard 40-hour work week with 52 weeks: Annual Salary &divide; 2,080 = Hourly Rate.</p>
        <p>For example, a $65,000 annual salary equals $31.25 per hour.</p>
        <h2>Common Salary Conversions</h2>
        <ul>
          <li>$15/hour = $31,200/year</li>
          <li>$20/hour = $41,600/year</li>
          <li>$25/hour = $52,000/year</li>
          <li>$30/hour = $62,400/year</li>
          <li>$50/hour = $104,000/year</li>
        </ul>
        <h2>Related Tools</h2>
        <div className="my-4 grid gap-3 sm:grid-cols-2">
          {[
            { href: "/calculators/paycheck", label: "Paycheck Calculator", desc: "Estimate your take-home pay after federal and state taxes." },
            { href: "/calculators/inflation", label: "Inflation Calculator", desc: "See how inflation affects your salary's purchasing power over time." },
            { href: "/calculators/net-worth", label: "Net Worth Calculator", desc: "Track your total financial health by comparing assets and liabilities." },
            { href: "/salary-by-state", label: "Salary by State", desc: "Compare average salaries and cost of living across all 50 states." },
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
