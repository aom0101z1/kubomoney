import Link from "next/link";
import type { Metadata } from "next";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "Free Financial Calculators - Mortgage, Loan, Investment & More",
  description:
    "Browse our collection of free financial calculators. Mortgage calculator, compound interest, loan payoff, retirement planning, salary calculator, and more.",
};

const calculators = [
  {
    title: "Mortgage Calculator",
    description:
      "Calculate monthly mortgage payments with amortization schedule. Compare 15, 20, and 30-year terms.",
    href: "/calculators/mortgage",
    icon: "🏠",
    category: "Home",
  },
  {
    title: "Compound Interest Calculator",
    description:
      "See how your money grows with compound interest over time. Visualize your investment growth.",
    href: "/calculators/compound-interest",
    icon: "📈",
    category: "Investment",
  },
  {
    title: "Loan Payoff Calculator",
    description:
      "Calculate your loan payoff date. See how extra payments can save you thousands in interest.",
    href: "/calculators/loan-payoff",
    icon: "💳",
    category: "Debt",
  },
  {
    title: "Retirement Calculator",
    description:
      "Plan your retirement savings. Find out if you're on track to retire comfortably.",
    href: "/calculators/retirement",
    icon: "🏖️",
    category: "Retirement",
  },
  {
    title: "Salary Calculator",
    description:
      "Convert between hourly, weekly, biweekly, monthly, and annual salary. Estimate take-home pay.",
    href: "/calculators/salary",
    icon: "💰",
    category: "Income",
  },
  {
    title: "Debt-to-Income Calculator",
    description:
      "Calculate your DTI ratio. Lenders use this to determine your mortgage eligibility.",
    href: "/calculators/debt-to-income",
    icon: "⚖️",
    category: "Debt",
  },
  {
    title: "Auto Loan Calculator",
    description:
      "Estimate your monthly car payment with trade-in value, down payment, sales tax, and loan terms.",
    href: "/calculators/auto-loan",
    icon: "🚗",
    category: "Auto",
  },
  {
    title: "Credit Card Payoff Calculator",
    description:
      "Find out how long to pay off your credit card debt and how much interest you'll pay total.",
    href: "/calculators/credit-card-payoff",
    icon: "💳",
    category: "Debt",
  },
  {
    title: "Net Worth Calculator",
    description:
      "Add up everything you own and subtract what you owe. The #1 measure of financial health.",
    href: "/calculators/net-worth",
    icon: "📊",
    category: "Planning",
  },
  {
    title: "Inflation Calculator",
    description:
      "See how inflation erodes purchasing power over time. Compare past and future dollar values.",
    href: "/calculators/inflation",
    icon: "📉",
    category: "Planning",
  },
  {
    title: "ROI Calculator",
    description:
      "Calculate return on investment and annualized returns. Compare any investment or business decision.",
    href: "/calculators/roi",
    icon: "🎯",
    category: "Investment",
  },
  {
    title: "Break-Even Calculator",
    description:
      "Find how many units to sell to cover all costs. Essential for pricing and business planning.",
    href: "/calculators/break-even",
    icon: "📐",
    category: "Business",
  },
  {
    title: "Startup Cost Calculator",
    description:
      "Estimate one-time and monthly costs to launch your business. Calculate total capital needed.",
    href: "/calculators/business-startup-cost",
    icon: "🚀",
    category: "Business",
  },
  {
    title: "Tip Calculator",
    description:
      "Calculate tip amount, total bill, and split it between any number of people.",
    href: "/calculators/tip",
    icon: "🍽️",
    category: "Everyday",
  },
];

export default function CalculatorsIndex() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <nav className="mb-6 text-sm text-gray-500">
        <a href="/" className="hover:text-teal-600">Home</a>
        {" / "}
        <span className="text-gray-900">Calculators</span>
      </nav>

      <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Free Financial Calculators
      </h1>
      <p className="mb-10 text-lg text-gray-600">
        Accurate, easy-to-use financial calculators to help you make smarter
        money decisions. All tools are free with no signup required.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {calculators.map((calc) => (
          <Link
            key={calc.href}
            href={calc.href}
            className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-teal-300 hover:shadow-md"
          >
            <span className="mb-1 inline-block rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-700">
              {calc.category}
            </span>
            <span className="my-3 block text-3xl">{calc.icon}</span>
            <h2 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-teal-600">
              {calc.title}
            </h2>
            <p className="text-sm text-gray-600">{calc.description}</p>
          </Link>
        ))}
      </div>

      <AdUnit className="my-12" />
    </div>
  );
}
