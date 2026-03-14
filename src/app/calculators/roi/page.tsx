import type { Metadata } from "next";
import ROICalculator from "./ROICalculator";
import AdUnit from "@/components/AdUnit";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "ROI Calculator - Calculate Return on Investment",
  description:
    "Free ROI calculator. Calculate your return on investment, annualized returns, and net profit for any investment or business decision.",
};

export default function ROIPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "ROI Calculator",
    description: metadata.description,
    url: `${siteConfig.url}/calculators/roi`,
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
          <span className="text-gray-900">ROI Calculator</span>
        </nav>
        <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">ROI Calculator</h1>
        <p className="mb-8 text-lg text-gray-600">
          Calculate return on investment for any asset, business, or financial decision. Enter your initial investment
          and final value to see your total and annualized ROI.
        </p>
        <ROICalculator />
        <AdUnit className="my-10" />
        <section className="prose prose-lg max-w-none">
          <h2>What Is ROI?</h2>
          <p>Return on Investment (ROI) measures how much profit or loss an investment generates relative to its cost. It&apos;s one of the most widely used metrics in finance and business for evaluating the efficiency of an investment.</p>
          <h2>How ROI Is Calculated</h2>
          <p>The basic ROI formula is: <strong>ROI = (Final Value &minus; Initial Investment) / Initial Investment &times; 100</strong>. The annualized ROI adjusts this for the time period, making it easier to compare investments of different durations.</p>
          <h2>What Is a Good ROI?</h2>
          <ul>
            <li><strong>Stock market (S&amp;P 500)</strong> &ndash; Historical average of ~10% per year before inflation</li>
            <li><strong>Real estate</strong> &ndash; 8-12% annually including appreciation and rental income</li>
            <li><strong>Small business</strong> &ndash; 15-30% is considered strong for most industries</li>
            <li><strong>Marketing campaigns</strong> &ndash; 5:1 (500% ROI) is a good rule of thumb</li>
          </ul>
          <h2>Tips for Maximizing ROI</h2>
          <ul>
            <li><strong>Reduce costs</strong> &ndash; Lower your initial investment without sacrificing quality</li>
            <li><strong>Increase revenue</strong> &ndash; Focus on strategies that boost final value</li>
            <li><strong>Shorten the timeline</strong> &ndash; Faster returns improve annualized ROI</li>
            <li><strong>Reinvest profits</strong> &ndash; Compound gains by reinvesting returns</li>
          </ul>
        </section>
        <AdUnit className="my-10" />
      </article>
    </>
  );
}
