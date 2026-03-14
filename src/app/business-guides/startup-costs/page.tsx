import type { Metadata } from "next";
import Link from "next/link";
import AdUnit from "@/components/AdUnit";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Business Startup Costs (2025) - How Much Does It Cost to Start a Business?",
  description:
    "Average startup costs by business type. Learn what expenses to expect, how to reduce costs, and how much capital you need before launching.",
};

export default function StartupCostsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Business Startup Costs - Complete Breakdown",
    description: metadata.description,
    url: `${siteConfig.url}/business-guides/startup-costs`,
    author: { "@type": "Person", name: siteConfig.author.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mx-auto max-w-4xl px-4 py-10">
        <nav className="mb-6 text-sm text-gray-500">
          <a href="/" className="hover:text-teal-600">Home</a>{" / "}
          <a href="/business-guides" className="hover:text-teal-600">Business Guides</a>{" / "}
          <span className="text-gray-900">Startup Costs</span>
        </nav>

        <h1 className="mb-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">How Much Does It Cost to Start a Business?</h1>
        <p className="mb-8 text-lg leading-relaxed text-gray-600">
          The average small business costs $3,000 to $5,000 to start, but the range varies wildly by industry. Here&apos;s a complete breakdown.
        </p>

        <AdUnit className="my-8" />

        <div className="article-body">
          <h2>Average Startup Costs by Business Type</h2>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr><th>Business Type</th><th>Typical Range</th><th>Key Costs</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>Online business / blog</strong></td><td>$500 &ndash; $2,000</td><td>Domain, hosting, tools</td></tr>
                <tr><td><strong>Freelancing / consulting</strong></td><td>$1,000 &ndash; $5,000</td><td>Website, marketing, software</td></tr>
                <tr><td><strong>E-commerce store</strong></td><td>$3,000 &ndash; $15,000</td><td>Inventory, website, shipping</td></tr>
                <tr><td><strong>Food truck</strong></td><td>$50,000 &ndash; $200,000</td><td>Truck, equipment, permits</td></tr>
                <tr><td><strong>Restaurant</strong></td><td>$100,000 &ndash; $500,000</td><td>Lease, buildout, equipment</td></tr>
                <tr><td><strong>Retail store</strong></td><td>$50,000 &ndash; $150,000</td><td>Lease, inventory, fixtures</td></tr>
                <tr><td><strong>SaaS / software</strong></td><td>$10,000 &ndash; $50,000</td><td>Development, hosting, marketing</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Common Startup Expenses</h2>

          <h3>One-Time Costs</h3>
          <ul>
            <li><strong>Business registration</strong> &mdash; $40-$500 for <Link href="/business-guides/how-to-start-llc">LLC formation</Link></li>
            <li><strong>Website design</strong> &mdash; $0 (DIY) to $5,000+ (professional)</li>
            <li><strong>Equipment and furniture</strong> &mdash; Varies widely by industry</li>
            <li><strong>Initial inventory</strong> &mdash; For product-based businesses</li>
            <li><strong>Branding and logo</strong> &mdash; $0 (DIY) to $2,000 (designer)</li>
            <li><strong>Security deposits</strong> &mdash; First/last month rent if leasing space</li>
          </ul>

          <h3>Recurring Monthly Costs</h3>
          <ul>
            <li><strong>Rent / coworking</strong> &mdash; $0 (home-based) to $5,000+</li>
            <li><strong>Software subscriptions</strong> &mdash; $50-$500/month (accounting, email, CRM)</li>
            <li><strong>Marketing and advertising</strong> &mdash; $200-$2,000/month</li>
            <li><strong>Insurance</strong> &mdash; $50-$500/month depending on industry</li>
            <li><strong>Utilities and internet</strong> &mdash; $100-$300/month</li>
            <li><strong>Professional services</strong> &mdash; $100-$500/month (accountant, lawyer)</li>
          </ul>

          <h2>How Much Cash Runway Do You Need?</h2>
          <p>Cash runway is the number of months you can operate before running out of money. Experts recommend:</p>
          <div className="my-6 grid gap-3 sm:grid-cols-2">
            {[
              { months: "3-6 months", type: "Service businesses with low overhead" },
              { months: "6-9 months", type: "Most small businesses" },
              { months: "9-12 months", type: "Product businesses with inventory" },
              { months: "12-18 months", type: "Tech startups building pre-revenue" },
            ].map((item) => (
              <div key={item.months} className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <p className="text-lg font-bold text-teal-700">{item.months}</p>
                <p className="text-sm text-gray-600">{item.type}</p>
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-teal-200 bg-teal-50 px-5 py-4 text-sm text-teal-900">
            Use our <Link href="/calculators/business-startup-cost" className="font-medium text-teal-700 underline hover:text-teal-900">Business Startup Cost Calculator</Link> to estimate your total capital needs with runway.
          </div>

          <h2>10 Ways to Reduce Startup Costs</h2>
          <ol>
            <li><strong>Start from home</strong> &mdash; Skip office rent until you need it</li>
            <li><strong>Use free tools</strong> &mdash; Google Workspace, Canva, Wave accounting</li>
            <li><strong>Pre-sell before building</strong> &mdash; Validate demand with landing pages and waitlists</li>
            <li><strong>Start as a service</strong> &mdash; Offer consulting before building a product</li>
            <li><strong>Bootstrap with savings</strong> &mdash; Avoid debt in the early days if possible</li>
            <li><strong>Buy used equipment</strong> &mdash; Facebook Marketplace, auctions, refurbished</li>
            <li><strong>Barter and trade</strong> &mdash; Exchange skills with other entrepreneurs</li>
            <li><strong>Use freelancers</strong> &mdash; Instead of hiring full-time employees early on</li>
            <li><strong>Focus on one revenue stream</strong> &mdash; Don&apos;t spread thin across multiple offerings</li>
            <li><strong>Leverage content marketing</strong> &mdash; SEO and social media are cheaper than paid ads</li>
          </ol>

          <h2>Funding Options for Startups</h2>
          <ul>
            <li><strong>Personal savings</strong> &mdash; The most common source (77% of small businesses)</li>
            <li><strong>Small business loans</strong> &mdash; SBA loans offer favorable terms</li>
            <li><strong>Business credit cards</strong> &mdash; For short-term expenses (watch the interest)</li>
            <li><strong>Grants</strong> &mdash; Free money, but competitive (check grants.gov)</li>
            <li><strong>Angel investors</strong> &mdash; For businesses with high growth potential</li>
            <li><strong>Crowdfunding</strong> &mdash; Kickstarter, Indiegogo for product businesses</li>
          </ul>
        </div>

        <AdUnit className="my-8" />

        <section className="mt-10 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 p-8 text-center text-white">
          <h2 className="mb-2 text-2xl font-bold">Calculate Your Startup Budget</h2>
          <p className="mb-6 text-teal-100">Add up one-time and monthly costs to see exactly how much capital you need.</p>
          <Link href="/calculators/business-startup-cost" className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-teal-700 shadow-lg transition hover:bg-teal-50">
            Open Startup Cost Calculator
          </Link>
        </section>
      </article>
    </>
  );
}
