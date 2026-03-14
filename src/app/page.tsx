import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: `Free Financial Calculators & Tools | ${siteConfig.name}`,
  description: siteConfig.description,
};

const calculators = [
  {
    title: "Mortgage Calculator",
    description:
      "Calculate your monthly mortgage payment, total interest, and amortization schedule.",
    href: "/calculators/mortgage",
    icon: "🏠",
    badge: "Popular",
  },
  {
    title: "Compound Interest Calculator",
    description:
      "See how your investments grow over time with the power of compound interest.",
    href: "/calculators/compound-interest",
    icon: "📈",
    badge: null,
  },
  {
    title: "Loan Payoff Calculator",
    description:
      "Find out when you'll pay off your loan and how extra payments can save you money.",
    href: "/calculators/loan-payoff",
    icon: "💳",
    badge: null,
  },
  {
    title: "Retirement Calculator",
    description:
      "Plan your retirement savings and see if you're on track to meet your goals.",
    href: "/calculators/retirement",
    icon: "🏖️",
    badge: null,
  },
  {
    title: "Salary Calculator",
    description:
      "Convert between hourly, weekly, monthly, and annual salary. See take-home pay by state.",
    href: "/calculators/salary",
    icon: "💰",
    badge: null,
  },
  {
    title: "Debt-to-Income Calculator",
    description:
      "Calculate your DTI ratio to see if you qualify for a mortgage or loan.",
    href: "/calculators/debt-to-income",
    icon: "⚖️",
    badge: null,
  },
  {
    title: "Auto Loan Calculator",
    description:
      "Estimate your monthly car payment with trade-in, down payment, and sales tax.",
    href: "/calculators/auto-loan",
    icon: "🚗",
    badge: "New",
  },
  {
    title: "Credit Card Payoff Calculator",
    description:
      "See how long it takes to pay off your credit card and how much interest you'll pay.",
    href: "/calculators/credit-card-payoff",
    icon: "💳",
    badge: "New",
  },
  {
    title: "Net Worth Calculator",
    description:
      "Add up your assets and subtract liabilities to see your total net worth.",
    href: "/calculators/net-worth",
    icon: "📊",
    badge: null,
  },
  {
    title: "Inflation Calculator",
    description:
      "See how inflation erodes your purchasing power over time.",
    href: "/calculators/inflation",
    icon: "📉",
    badge: null,
  },
  {
    title: "ROI Calculator",
    description:
      "Calculate return on investment and annualized returns for any decision.",
    href: "/calculators/roi",
    icon: "🎯",
    badge: "New",
  },
  {
    title: "Break-Even Calculator",
    description:
      "Find how many units to sell to cover costs and start profiting.",
    href: "/calculators/break-even",
    icon: "📐",
    badge: "New",
  },
  {
    title: "Startup Cost Calculator",
    description:
      "Estimate total capital needed to launch your business.",
    href: "/calculators/business-startup-cost",
    icon: "🚀",
    badge: "New",
  },
  {
    title: "Tip Calculator",
    description:
      "Calculate tips and split the bill between any number of people.",
    href: "/calculators/tip",
    icon: "🍽️",
    badge: "New",
  },
];

const guides = [
  {
    title: "Salary by State",
    description: "Compare average salaries, cost of living, and tax rates across all 50 states.",
    href: "/salary-by-state",
    icon: "💰",
  },
  {
    title: "Start an LLC",
    description: "Step-by-step LLC formation guides for all 50 states with costs and requirements.",
    href: "/llc-by-state",
    icon: "🏢",
  },
  {
    title: "Investing for Beginners",
    description: "Learn the fundamentals of investing and building wealth.",
    href: "/personal-finance/investing-basics",
    icon: "🎯",
  },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 via-teal-700 to-emerald-800 px-4 py-20 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Build Your Financial
            <span className="block text-teal-200">Foundation</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-teal-100">
            Free calculators and tools to take control of your money — mortgage,
            investing, retirement, salary, and more. No signup required.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/calculators/mortgage"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-teal-700 shadow-lg transition hover:bg-teal-50"
            >
              Try Mortgage Calculator
            </Link>
            <Link
              href="/calculators"
              className="rounded-lg border-2 border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Explore All Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Calculators Grid */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-2 text-center text-3xl font-bold text-gray-900">
          Financial Calculators
        </h2>
        <p className="mb-10 text-center text-gray-600">
          Accurate, easy-to-use tools for all your financial calculations
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {calculators.map((calc) => (
            <Link
              key={calc.href}
              href={calc.href}
              className="group relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-teal-300 hover:shadow-md"
            >
              {calc.badge && (
                <span className="absolute right-4 top-4 rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-semibold text-teal-700">
                  {calc.badge}
                </span>
              )}
              <span className="mb-3 block text-3xl">{calc.icon}</span>
              <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-teal-600">
                {calc.title}
              </h3>
              <p className="text-sm text-gray-600">{calc.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <AdUnit />

      {/* Guides Section */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-2 text-center text-3xl font-bold text-gray-900">
            Guides & Resources
          </h2>
          <p className="mb-10 text-center text-gray-600">
            Expert-written guides to help you make better financial and business decisions
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-teal-300 hover:shadow-md"
              >
                <span className="mb-3 block text-3xl">{guide.icon}</span>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-teal-600">
                  {guide.title}
                </h3>
                <p className="text-sm text-gray-600">{guide.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AdUnit />

      {/* Trust Section */}
      <section className="mx-auto max-w-6xl px-4 py-16 text-center">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          Why Use Our Calculators?
        </h2>
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <span className="mb-2 block text-4xl">✅</span>
            <h3 className="mb-1 font-semibold">100% Free</h3>
            <p className="text-sm text-gray-600">
              No signup, no hidden fees. All tools are completely free to use.
            </p>
          </div>
          <div>
            <span className="mb-2 block text-4xl">🎯</span>
            <h3 className="mb-1 font-semibold">Accurate Results</h3>
            <p className="text-sm text-gray-600">
              Built by financial professionals with verified calculation formulas.
            </p>
          </div>
          <div>
            <span className="mb-2 block text-4xl">🔒</span>
            <h3 className="mb-1 font-semibold">Private & Secure</h3>
            <p className="text-sm text-gray-600">
              All calculations happen in your browser. We never store your data.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
