import type { Metadata } from "next";
import Link from "next/link";
import TipCalculator from "./TipCalculator";
import AdUnit from "@/components/AdUnit";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Tip Calculator - Calculate Tip & Split the Bill",
  description:
    "Free tip calculator. Quickly calculate the tip amount, total bill, and split it between any number of people. Works for restaurants, bars, delivery, and more.",
};

export default function TipPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Tip Calculator",
    description: metadata.description,
    url: `${siteConfig.url}/calculators/tip`,
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
          <span className="text-gray-900">Tip Calculator</span>
        </nav>
        <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Tip Calculator</h1>
        <p className="mb-8 text-lg text-gray-600">
          Calculate tips in seconds. Enter your bill, choose a tip percentage, and split it any number of ways.
        </p>
        <TipCalculator />
        <AdUnit className="my-10" />
        <section className="article-body">
          <h2>How Much Should You Tip?</h2>
          <p>Tipping customs vary by service. Here&apos;s a general guide for the United States:</p>
          <ul>
            <li><strong>Restaurants (sit-down)</strong> &ndash; 15-20% of the pre-tax bill, 20%+ for excellent service</li>
            <li><strong>Bars</strong> &ndash; $1-2 per drink, or 15-20% of the tab</li>
            <li><strong>Food delivery</strong> &ndash; 15-20% with a minimum of $3-5</li>
            <li><strong>Coffee shops</strong> &ndash; $1 per drink or 15-20% for complex orders</li>
            <li><strong>Hair salons / barbers</strong> &ndash; 15-20% of the service cost</li>
            <li><strong>Hotels (housekeeping)</strong> &ndash; $2-5 per night</li>
            <li><strong>Taxi / rideshare</strong> &ndash; 15-20% of the fare</li>
          </ul>
          <h2>Pre-Tax vs Post-Tax Tipping</h2>
          <p>Technically, you should tip on the <strong>pre-tax</strong> amount since the tax goes to the government, not the server. However, many people tip on the total for simplicity. The difference is usually small &mdash; on a $100 bill with 8% tax, tipping 20% pre-tax is $20 vs $21.60 post-tax.</p>
          <h2>Splitting the Bill Fairly</h2>
          <p>The simplest approach is to split evenly, but if orders vary significantly, consider asking the server for separate checks or using a bill-splitting app. Always add the tip before dividing to make sure your server isn&apos;t shortchanged.</p>
          <h2>Related Tools</h2>
          <div className="my-4 grid gap-3 sm:grid-cols-2">
            {[
              { href: "/calculators/salary", label: "Salary Calculator", desc: "Convert between hourly, monthly, and annual salary instantly." },
              { href: "/personal-finance/budgeting-guide", label: "Budgeting Guide", desc: "Learn proven budgeting methods to manage your money effectively." },
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
