import type { Metadata } from "next";
import Link from "next/link";
import AdUnit from "@/components/AdUnit";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "How to Write a Business Plan (2025) - Free Template & Guide",
  description:
    "Learn how to write a business plan step by step. Covers executive summary, market analysis, financial projections, and more. Free template included.",
};

export default function BusinessPlanPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Write a Business Plan - Complete Guide",
    description: metadata.description,
    url: `${siteConfig.url}/business-guides/how-to-write-business-plan`,
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
          <span className="text-gray-900">How to Write a Business Plan</span>
        </nav>

        <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">How to Write a Business Plan</h1>
        <p className="mb-8 text-lg text-gray-600">
          A business plan is your roadmap to success. Whether you need funding or just want clarity, here&apos;s how to write one that works.
        </p>

        <AdUnit className="my-8" />

        <div className="prose prose-lg max-w-none">
          <h2>Why You Need a Business Plan</h2>
          <p>A business plan isn&apos;t just for getting a loan. It forces you to think through every aspect of your business before you invest time and money. Studies show that entrepreneurs who write business plans are <strong>16% more likely to achieve viability</strong> than those who don&apos;t.</p>

          <h2>The 9 Sections of a Business Plan</h2>

          <h3>1. Executive Summary</h3>
          <p>This is a 1-2 page overview of your entire plan. Write it last but put it first. Include:</p>
          <ul>
            <li>What your business does (one sentence)</li>
            <li>The problem you solve</li>
            <li>Your target market</li>
            <li>How you make money</li>
            <li>Key financial projections</li>
            <li>How much funding you need (if applicable)</li>
          </ul>

          <h3>2. Company Description</h3>
          <p>Describe your business structure (<Link href="/business-guides/how-to-start-llc" className="text-teal-600 hover:underline">LLC</Link>, corporation, etc.), your mission statement, and your competitive advantages. What makes you different?</p>

          <h3>3. Market Analysis</h3>
          <p>Research and document:</p>
          <ul>
            <li><strong>Industry overview</strong> &mdash; Market size, growth trends, and key players</li>
            <li><strong>Target market</strong> &mdash; Demographics, behaviors, and pain points of your ideal customer</li>
            <li><strong>Competitive analysis</strong> &mdash; Who are your competitors? What are their strengths and weaknesses?</li>
            <li><strong>Market opportunity</strong> &mdash; What gap are you filling?</li>
          </ul>

          <h3>4. Organization & Management</h3>
          <p>Outline your business structure, ownership, and management team. Include an org chart for larger businesses. Investors bet on people as much as ideas &mdash; highlight relevant experience and expertise.</p>

          <h3>5. Products or Services</h3>
          <p>Describe what you sell in detail. Explain the benefits (not just features), your pricing strategy, and any intellectual property or proprietary advantages.</p>

          <h3>6. Marketing & Sales Strategy</h3>
          <p>How will you attract and retain customers?</p>
          <ul>
            <li><strong>Pricing strategy</strong> &mdash; Premium, competitive, or value-based?</li>
            <li><strong>Sales channels</strong> &mdash; Online, retail, direct sales, partnerships?</li>
            <li><strong>Marketing channels</strong> &mdash; SEO, social media, paid ads, content marketing?</li>
            <li><strong>Customer acquisition cost</strong> &mdash; How much to get one customer?</li>
          </ul>

          <h3>7. Funding Request</h3>
          <p>If you&apos;re seeking funding, specify how much you need, how you&apos;ll use it, and what type of funding you want (equity, debt, or grants). Be specific &mdash; &quot;$50,000 for equipment and 6 months of operating expenses&quot; is better than &quot;we need money to grow.&quot;</p>

          <h3>8. Financial Projections</h3>
          <p>Include 3-5 year projections for:</p>
          <ul>
            <li>Revenue forecast (monthly for year 1, annually after)</li>
            <li>Expense budget</li>
            <li>Cash flow statement</li>
            <li>Break-even analysis &mdash; use our <Link href="/calculators/break-even" className="text-teal-600 hover:underline">Break-Even Calculator</Link></li>
            <li>Profit and loss projection</li>
          </ul>
          <p>Use our <Link href="/calculators/business-startup-cost" className="text-teal-600 hover:underline">Startup Cost Calculator</Link> to estimate your initial capital needs.</p>

          <h3>9. Appendix</h3>
          <p>Supporting documents: resumes, permits, lease agreements, product photos, market research data, letters of intent from customers.</p>

          <h2>Business Plan Tips</h2>
          <ul>
            <li><strong>Keep it concise</strong> &mdash; 15-25 pages is ideal. No one reads a 50-page plan.</li>
            <li><strong>Use real numbers</strong> &mdash; Base projections on research, not wishful thinking</li>
            <li><strong>Know your audience</strong> &mdash; A bank wants to see how you&apos;ll repay; an investor wants to see growth potential</li>
            <li><strong>Update regularly</strong> &mdash; Review and revise quarterly</li>
            <li><strong>Be honest about risks</strong> &mdash; Investors respect founders who acknowledge challenges</li>
          </ul>

          <h2>One-Page Business Plan (Lean Canvas)</h2>
          <p>If a full plan feels overwhelming, start with a one-page lean canvas:</p>
          <ul>
            <li><strong>Problem</strong> &mdash; Top 3 problems your customers face</li>
            <li><strong>Solution</strong> &mdash; Your product/service for each problem</li>
            <li><strong>Key Metrics</strong> &mdash; Numbers that matter (revenue, users, conversion)</li>
            <li><strong>Unique Value Proposition</strong> &mdash; Why you over competitors?</li>
            <li><strong>Channels</strong> &mdash; How customers find you</li>
            <li><strong>Revenue Streams</strong> &mdash; How you make money</li>
            <li><strong>Cost Structure</strong> &mdash; Fixed and variable costs</li>
          </ul>
        </div>

        <AdUnit className="my-8" />
      </article>
    </>
  );
}
