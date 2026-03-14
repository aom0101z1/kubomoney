import type { Metadata } from "next";
import Link from "next/link";
import AdUnit from "@/components/AdUnit";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "How to Start an LLC (2025) - Complete Guide for All 50 States",
  description:
    "Learn how to start an LLC step by step. Covers naming, registered agents, Articles of Organization, EIN, and operating agreements. State-by-state filing fees and requirements.",
};

function StepCard({ step, title, children }: { step: number; title: string; children: React.ReactNode }) {
  return (
    <div className="relative mt-10 mb-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white shadow">
        {step}
      </div>
      <h2 className="mt-1 mb-4 text-xl font-bold text-gray-900 sm:text-2xl">{title}</h2>
      {children}
    </div>
  );
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 rounded-lg border border-teal-200 bg-teal-50 px-5 py-4 text-sm text-teal-900">
      {children}
    </div>
  );
}

export default function HowToStartLLCPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Start an LLC - Complete Step-by-Step Guide",
    description: metadata.description,
    url: `${siteConfig.url}/business-guides/how-to-start-llc`,
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
          <span className="text-gray-900">How to Start an LLC</span>
        </nav>

        <h1 className="mb-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">How to Start an LLC: Complete Step-by-Step Guide</h1>
        <p className="mb-8 text-lg leading-relaxed text-gray-600">
          A Limited Liability Company (LLC) is the most popular business structure for small businesses. Here&apos;s everything you need to know to form yours.
        </p>

        <AdUnit className="my-8" />

        <div className="article-body">
          <section className="mb-10 rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50 p-6 sm:p-8">
            <h2 className="!mt-0 !border-0 !pb-0 text-2xl font-bold text-teal-800">What Is an LLC?</h2>
            <p className="mt-3">
              An LLC (Limited Liability Company) is a business structure that <strong>protects your personal assets</strong> from business debts and lawsuits. It combines the liability protection of a corporation with the tax flexibility and simplicity of a sole proprietorship.
            </p>
            <p>
              Over <strong>80% of new businesses</strong> in the US choose the LLC structure because it&apos;s affordable to set up, easy to maintain, and offers <strong>pass-through taxation</strong> (profits are only taxed once on your personal return).
            </p>
          </section>

          <StepCard step={1} title="Choose Your State">
            <p>
              Most people should form their LLC in the <strong>state where they live and do business</strong>. While Delaware and Wyoming are popular for their business-friendly laws, forming in another state means you&apos;ll need to register as a &quot;foreign LLC&quot; in your home state too &mdash; paying double the fees.
            </p>
            <InfoBox>
              <strong>Compare all 50 states:</strong> See our <Link href="/llc-by-state" className="text-teal-700 font-medium underline hover:text-teal-900">LLC by State comparison</Link> for filing fees, annual costs, and processing times.
            </InfoBox>
          </StepCard>

          <StepCard step={2} title="Choose Your LLC Name">
            <p>Your LLC name must:</p>
            <ul className="mb-4 ml-6 list-disc space-y-2 text-gray-700">
              <li>Include <strong>&quot;LLC,&quot; &quot;L.L.C.,&quot;</strong> or <strong>&quot;Limited Liability Company&quot;</strong></li>
              <li>Be <strong>distinguishable</strong> from other businesses registered in your state</li>
              <li>Not include restricted words like &quot;bank&quot; or &quot;insurance&quot; without proper licensing</li>
            </ul>
            <p>
              Search your state&apos;s business database to check availability before filing. Most states offer free online name searches through their Secretary of State website.
            </p>
          </StepCard>

          <StepCard step={3} title="Appoint a Registered Agent">
            <p>
              Every LLC needs a <strong>registered agent</strong> &mdash; a person or company with a physical address in your state who can receive legal documents (lawsuits, tax notices, government correspondence) on your behalf.
            </p>
            <p className="mt-3 mb-2 font-semibold text-gray-800">You have three options:</p>
            <ul className="mb-4 ml-6 list-disc space-y-2 text-gray-700">
              <li><strong>Be your own agent</strong> &mdash; Free, but your address becomes public record</li>
              <li><strong>Use a friend or family member</strong> &mdash; Must be available during business hours</li>
              <li><strong>Hire a professional service</strong> &mdash; $50-300/year, keeps your address private</li>
            </ul>
          </StepCard>

          <StepCard step={4} title="File Articles of Organization">
            <p>
              This is the <strong>official document that creates your LLC</strong>. File it with your state&apos;s Secretary of State (or equivalent agency). Most states allow online filing.
            </p>
            <p className="mt-3 mb-2 font-semibold text-gray-800">The form typically requires:</p>
            <ul className="mb-4 ml-6 list-disc space-y-2 text-gray-700">
              <li>LLC name and address</li>
              <li>Registered agent name and address</li>
              <li>Names of members (owners) or managers</li>
              <li>Purpose of the business (most states accept &quot;any lawful purpose&quot;)</li>
              <li>Whether the LLC is member-managed or manager-managed</li>
            </ul>
            <InfoBox>
              <strong>Filing fees range from $40 (Kentucky) to $500 (Massachusetts).</strong> See exact costs in our <Link href="/llc-by-state" className="text-teal-700 font-medium underline hover:text-teal-900">state-by-state comparison</Link>.
            </InfoBox>
          </StepCard>

          <StepCard step={5} title="Create an Operating Agreement">
            <p>
              An operating agreement is an internal document that outlines <strong>how your LLC will be run</strong>. While not always legally required, it&apos;s essential because:
            </p>
            <ul className="mb-4 ml-6 list-disc space-y-2 text-gray-700">
              <li><strong>Banks require it</strong> to open a business account</li>
              <li>It <strong>strengthens your liability protection</strong></li>
              <li>It <strong>prevents disputes</strong> between members</li>
              <li>It establishes clear rules for <strong>profit distribution, voting, and member exits</strong></li>
            </ul>
          </StepCard>

          <StepCard step={6} title="Get an EIN (Employer Identification Number)">
            <p>
              An EIN is like a Social Security number for your business. You need it to <strong>open a business bank account, hire employees, and file taxes</strong>. It&apos;s <strong>free from the IRS</strong> and takes about 5 minutes to get online.
            </p>
            <InfoBox>
              Read our complete <Link href="/business-guides/how-to-get-ein" className="text-teal-700 font-medium underline hover:text-teal-900">guide to getting an EIN</Link>.
            </InfoBox>
          </StepCard>

          <StepCard step={7} title="Open a Business Bank Account">
            <p>
              Keeping business and personal finances <strong>separate is crucial</strong> for maintaining your LLC&apos;s liability protection. You&apos;ll need your EIN, Articles of Organization, and operating agreement.
            </p>
            <InfoBox>
              See our <Link href="/business-guides/best-business-bank-accounts" className="text-teal-700 font-medium underline hover:text-teal-900">best business bank accounts</Link> comparison.
            </InfoBox>
          </StepCard>

          <StepCard step={8} title="Get Business Licenses and Permits">
            <p>
              Depending on your location and industry, you may need federal, state, and local licenses or permits. <strong>Common requirements include:</strong>
            </p>
            <ul className="mb-4 ml-6 list-disc space-y-2 text-gray-700">
              <li>General business license from your city/county</li>
              <li>Professional licenses (for regulated industries)</li>
              <li>Sales tax permit (if selling physical goods)</li>
              <li>Home occupation permit (if working from home)</li>
            </ul>
          </StepCard>

          <h2>How Much Does It Cost to Start an LLC?</h2>
          <p>Here&apos;s a typical cost breakdown:</p>
          <table>
            <thead>
              <tr><th>Expense</th><th>Typical Cost</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>State filing fee</strong></td><td>$40 &ndash; $500 (varies by state)</td></tr>
              <tr><td><strong>Registered agent</strong></td><td>$0 &ndash; $300/year</td></tr>
              <tr><td><strong>Operating agreement</strong></td><td>$0 (DIY) to $1,500 (attorney)</td></tr>
              <tr><td><strong>EIN</strong></td><td>Free</td></tr>
              <tr><td><strong>Business license</strong></td><td>$50 &ndash; $400</td></tr>
            </tbody>
          </table>
          <p>Use our <Link href="/calculators/business-startup-cost">Business Startup Cost Calculator</Link> to estimate your total launch budget.</p>

          <h2>LLC vs Other Business Structures</h2>
          <table>
            <thead>
              <tr><th>Feature</th><th>LLC</th><th>Sole Prop</th><th>S-Corp</th><th>C-Corp</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Liability protection</strong></td><td>Yes</td><td>No</td><td>Yes</td><td>Yes</td></tr>
              <tr><td><strong>Pass-through tax</strong></td><td>Yes</td><td>Yes</td><td>Yes</td><td>No</td></tr>
              <tr><td><strong>Easy to set up</strong></td><td>Yes</td><td>Yes</td><td>No</td><td>No</td></tr>
              <tr><td><strong>Ongoing paperwork</strong></td><td>Low</td><td>None</td><td>High</td><td>High</td></tr>
              <tr><td><strong>Best for</strong></td><td>Most small biz</td><td>Freelancers</td><td>Growing biz</td><td>Investors</td></tr>
            </tbody>
          </table>
        </div>

        <AdUnit className="my-8" />

        <section className="mt-10 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 p-8 text-center text-white">
          <h2 className="mb-2 text-2xl font-bold">Start Your LLC by State</h2>
          <p className="mb-6 text-teal-100">Click your state for a detailed step-by-step formation guide with exact costs.</p>
          <Link href="/llc-by-state" className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-teal-700 shadow-lg transition hover:bg-teal-50">
            Compare All 50 States
          </Link>
        </section>
      </article>
    </>
  );
}
