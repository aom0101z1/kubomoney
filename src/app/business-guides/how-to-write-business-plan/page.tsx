import type { Metadata } from "next";
import Link from "next/link";
import AdUnit from "@/components/AdUnit";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "How to Write a Business Plan (2025) - Free Template & Guide",
  description:
    "Learn how to write a business plan step by step. Covers executive summary, market analysis, financial projections, and more. Free template included.",
};

function SectionCard({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <div className="relative mt-8 mb-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white shadow">
        {number}
      </div>
      <h3 className="mt-1 mb-3 text-lg font-bold text-gray-900">{title}</h3>
      {children}
    </div>
  );
}

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

        <h1 className="mb-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">How to Write a Business Plan</h1>
        <p className="mb-8 text-lg leading-relaxed text-gray-600">
          A business plan is your roadmap to success. Whether you need funding or just want clarity, here&apos;s how to write one that works.
        </p>

        <AdUnit className="my-8" />

        <div className="article-body">
          <section className="mb-10 rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50 p-6 sm:p-8">
            <h2 className="!mt-0 !border-0 !pb-0 text-2xl font-bold text-teal-800">Why You Need a Business Plan</h2>
            <p className="mt-3">
              A business plan isn&apos;t just for getting a loan. It forces you to think through every aspect of your business before you invest time and money. Studies show that entrepreneurs who write business plans are <strong>16% more likely to achieve viability</strong> than those who don&apos;t.
            </p>
          </section>

          <h2>The 9 Sections of a Business Plan</h2>

          <SectionCard number={1} title="Executive Summary">
            <p>This is a 1-2 page overview of your entire plan. <strong>Write it last but put it first.</strong> Include:</p>
            <ul className="mb-4 ml-6 list-disc space-y-2 text-gray-700">
              <li>What your business does (one sentence)</li>
              <li>The problem you solve</li>
              <li>Your target market</li>
              <li>How you make money</li>
              <li>Key financial projections</li>
              <li>How much funding you need (if applicable)</li>
            </ul>
          </SectionCard>

          <SectionCard number={2} title="Company Description">
            <p>Describe your business structure (<Link href="/business-guides/how-to-start-llc">LLC</Link>, corporation, etc.), your mission statement, and your competitive advantages. What makes you different?</p>
          </SectionCard>

          <SectionCard number={3} title="Market Analysis">
            <p>Research and document:</p>
            <ul className="mb-4 ml-6 list-disc space-y-2 text-gray-700">
              <li><strong>Industry overview</strong> &mdash; Market size, growth trends, and key players</li>
              <li><strong>Target market</strong> &mdash; Demographics, behaviors, and pain points of your ideal customer</li>
              <li><strong>Competitive analysis</strong> &mdash; Who are your competitors? What are their strengths and weaknesses?</li>
              <li><strong>Market opportunity</strong> &mdash; What gap are you filling?</li>
            </ul>
          </SectionCard>

          <SectionCard number={4} title="Organization & Management">
            <p>Outline your business structure, ownership, and management team. Include an org chart for larger businesses. <strong>Investors bet on people as much as ideas</strong> &mdash; highlight relevant experience and expertise.</p>
          </SectionCard>

          <SectionCard number={5} title="Products or Services">
            <p>Describe what you sell in detail. Explain the <strong>benefits (not just features)</strong>, your pricing strategy, and any intellectual property or proprietary advantages.</p>
          </SectionCard>

          <SectionCard number={6} title="Marketing & Sales Strategy">
            <p>How will you attract and retain customers?</p>
            <ul className="mb-4 ml-6 list-disc space-y-2 text-gray-700">
              <li><strong>Pricing strategy</strong> &mdash; Premium, competitive, or value-based?</li>
              <li><strong>Sales channels</strong> &mdash; Online, retail, direct sales, partnerships?</li>
              <li><strong>Marketing channels</strong> &mdash; SEO, social media, paid ads, content marketing?</li>
              <li><strong>Customer acquisition cost</strong> &mdash; How much to get one customer?</li>
            </ul>
          </SectionCard>

          <SectionCard number={7} title="Funding Request">
            <p>If you&apos;re seeking funding, specify how much you need, how you&apos;ll use it, and what type of funding you want (equity, debt, or grants). Be specific &mdash; <strong>&quot;$50,000 for equipment and 6 months of operating expenses&quot;</strong> is better than &quot;we need money to grow.&quot;</p>
          </SectionCard>

          <SectionCard number={8} title="Financial Projections">
            <p>Include 3-5 year projections for:</p>
            <ul className="mb-4 ml-6 list-disc space-y-2 text-gray-700">
              <li>Revenue forecast (monthly for year 1, annually after)</li>
              <li>Expense budget</li>
              <li>Cash flow statement</li>
              <li>Break-even analysis &mdash; use our <Link href="/calculators/break-even">Break-Even Calculator</Link></li>
              <li>Profit and loss projection</li>
            </ul>
            <div className="mt-3 rounded-lg border border-teal-200 bg-teal-50 px-5 py-4 text-sm text-teal-900">
              Use our <Link href="/calculators/business-startup-cost" className="font-medium text-teal-700 underline hover:text-teal-900">Startup Cost Calculator</Link> to estimate your initial capital needs.
            </div>
          </SectionCard>

          <SectionCard number={9} title="Appendix">
            <p>Supporting documents: resumes, permits, lease agreements, product photos, market research data, letters of intent from customers.</p>
          </SectionCard>

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
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { label: "Problem", desc: "Top 3 problems your customers face" },
              { label: "Solution", desc: "Your product/service for each problem" },
              { label: "Key Metrics", desc: "Numbers that matter (revenue, users, conversion)" },
              { label: "Unique Value", desc: "Why you over competitors?" },
              { label: "Channels", desc: "How customers find you" },
              { label: "Revenue Streams", desc: "How you make money" },
              { label: "Cost Structure", desc: "Fixed and variable costs" },
            ].map((item) => (
              <div key={item.label} className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <p className="font-semibold text-gray-900">{item.label}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <AdUnit className="my-8" />
      </article>
    </>
  );
}
