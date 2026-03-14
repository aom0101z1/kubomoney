import type { Metadata } from "next";
import Link from "next/link";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "Business Guides - Start and Grow Your Business",
  description: "Free business guides: how to start an LLC, write a business plan, estimate startup costs, get an EIN, and choose a business bank account.",
};

const guides = [
  {
    title: "How to Start an LLC",
    description: "Complete step-by-step guide to forming an LLC in any state. Covers naming, registered agents, filing, and costs.",
    href: "/business-guides/how-to-start-llc",
    icon: "🏢",
    badge: "Popular",
  },
  {
    title: "How to Write a Business Plan",
    description: "Create a business plan that works. Covers all 9 sections from executive summary to financial projections.",
    href: "/business-guides/how-to-write-business-plan",
    icon: "📝",
    badge: null,
  },
  {
    title: "Business Startup Costs",
    description: "How much does it cost to start a business? Average costs by type, plus tips to reduce your launch budget.",
    href: "/business-guides/startup-costs",
    icon: "💰",
    badge: null,
  },
  {
    title: "How to Get an EIN",
    description: "Get a free EIN from the IRS in 5 minutes. Step-by-step guide for LLCs, corporations, and sole proprietors.",
    href: "/business-guides/how-to-get-ein",
    icon: "🔢",
    badge: null,
  },
  {
    title: "Best Business Bank Accounts",
    description: "Compare the best free and low-fee business checking accounts for small businesses and LLCs.",
    href: "/business-guides/best-business-bank-accounts",
    icon: "🏦",
    badge: null,
  },
  {
    title: "LLC by State - Compare All 50 States",
    description: "Compare LLC filing fees, annual costs, and processing times across all 50 US states.",
    href: "/llc-by-state",
    icon: "🗺️",
    badge: "50 States",
  },
];

export default function BusinessGuidesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <nav className="mb-6 text-sm text-gray-500">
        <a href="/" className="hover:text-teal-600">Home</a>{" / "}
        <span className="text-gray-900">Business Guides</span>
      </nav>

      <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Business Guides</h1>
      <p className="mb-10 text-lg text-gray-600">
        Expert guides to help you start and grow your business. From LLC formation to business planning and financing.
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
