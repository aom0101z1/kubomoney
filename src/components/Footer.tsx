import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const calculatorLinks = [
  { href: "/calculators/mortgage", label: "Mortgage Calculator" },
  { href: "/calculators/compound-interest", label: "Compound Interest" },
  { href: "/calculators/loan-payoff", label: "Loan Payoff" },
  { href: "/calculators/retirement", label: "Retirement Calculator" },
  { href: "/calculators/salary", label: "Salary Calculator" },
  { href: "/calculators/auto-loan", label: "Auto Loan Calculator" },
  { href: "/calculators/credit-card-payoff", label: "Credit Card Payoff" },
  { href: "/calculators/net-worth", label: "Net Worth Calculator" },
  { href: "/calculators/inflation", label: "Inflation Calculator" },
];

const guideLinks = [
  { href: "/business-guides/how-to-start-llc", label: "How to Start an LLC" },
  { href: "/personal-finance/budgeting-guide", label: "Budgeting Guide" },
  { href: "/personal-finance/investing-basics", label: "Investing Basics" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-3 text-lg font-bold text-gray-900">
              {siteConfig.name}
            </h3>
            <p className="text-sm text-gray-600">{siteConfig.tagline}</p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-900">
              Calculators
            </h4>
            <ul className="space-y-2">
              {calculatorLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-teal-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-900">
              Guides
            </h4>
            <ul className="space-y-2">
              {guideLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-teal-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-900">
              About
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-600 hover:text-teal-600"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-600 hover:text-teal-600"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-600 hover:text-teal-600"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
