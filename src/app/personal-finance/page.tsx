import type { Metadata } from "next";
import Link from "next/link";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "Personal Finance Guides - Budgeting, Investing & More",
  description: "Free personal finance guides: investing for beginners, budgeting strategies, debt payoff plans, emergency funds, and retirement planning.",
};

const guides = [
  {
    title: "Investing for Beginners",
    description: "Learn how to start investing with as little as $100. Covers stocks, bonds, ETFs, index funds, and retirement accounts.",
    href: "/personal-finance/investing-basics",
    icon: "📈",
    badge: "Popular",
  },
  {
    title: "Budgeting Guide",
    description: "Master the 50/30/20 rule, zero-based budgeting, and other methods to take control of your money.",
    href: "/personal-finance/budgeting-guide",
    icon: "📋",
    badge: null,
  },
  {
    title: "How to Pay Off Debt",
    description: "Compare the debt snowball and avalanche methods. Create a payoff plan and save thousands in interest.",
    href: "/personal-finance/how-to-pay-off-debt",
    icon: "💳",
    badge: null,
  },
  {
    title: "Emergency Fund Guide",
    description: "How much to save, where to keep it, and 7 ways to build your emergency fund fast.",
    href: "/personal-finance/emergency-fund",
    icon: "🛡️",
    badge: null,
  },
  {
    title: "Retirement Planning",
    description: "How much you need to retire, the best accounts to use, and strategies for every age.",
    href: "/personal-finance/retirement-planning",
    icon: "🏖️",
    badge: null,
  },
  {
    title: "Salary by State",
    description: "Compare average salaries, cost of living, and tax rates across all 50 US states.",
    href: "/salary-by-state",
    icon: "💰",
    badge: "50 States",
  },
];

export default function PersonalFinancePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <nav className="mb-6 text-sm text-gray-500">
        <a href="/" className="hover:text-teal-600">Home</a>{" / "}
        <span className="text-gray-900">Personal Finance</span>
      </nav>

      <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Personal Finance Guides</h1>
      <p className="mb-10 text-lg text-gray-600">
        Practical guides to help you budget, invest, pay off debt, and build wealth. Written for real people, not finance nerds.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="group relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-teal-300 hover:shadow-md"
          >
            {guide.badge && (
              <span className="absolute right-4 top-4 rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-semibold text-teal-700">
                {guide.badge}
              </span>
            )}
            <span className="mb-3 block text-3xl">{guide.icon}</span>
            <h2 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-teal-600">
              {guide.title}
            </h2>
            <p className="text-sm text-gray-600">{guide.description}</p>
          </Link>
        ))}
      </div>

      <AdUnit className="my-12" />
    </div>
  );
}
