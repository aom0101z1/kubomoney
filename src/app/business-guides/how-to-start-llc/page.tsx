import type { Metadata } from "next";
import Link from "next/link";
import AdUnit from "@/components/AdUnit";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "How to Start an LLC (2025) - Complete Guide for All 50 States",
  description:
    "Learn how to start an LLC step by step. Covers naming, registered agents, Articles of Organization, EIN, and operating agreements. State-by-state filing fees and requirements.",
};

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

        <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">How to Start an LLC: Complete Step-by-Step Guide</h1>
        <p className="mb-8 text-lg text-gray-600">
          A Limited Liability Company (LLC) is the most popular business structure for small businesses. Here&apos;s everything you need to know to form yours.
        </p>

        <AdUnit className="my-8" />

        <div className="prose prose-lg max-w-none">
          <h2>What Is an LLC?</h2>
          <p>
            An LLC (Limited Liability Company) is a business structure that protects your personal assets from business debts and lawsuits. It combines the liability protection of a corporation with the tax flexibility and simplicity of a sole proprietorship.
          </p>
          <p>
            Over 80% of new businesses in the US choose the LLC structure because it&apos;s affordable to set up, easy to maintain, and offers pass-through taxation (profits are only taxed once on your personal return).
          </p>

          <h2>Step 1: Choose Your State</h2>
          <p>
            Most people should form their LLC in the state where they live and do business. While Delaware and Wyoming are popular for their business-friendly laws, forming in another state means you&apos;ll need to register as a &quot;foreign LLC&quot; in your home state too &mdash; paying double the fees.
          </p>
          <p>
            <strong>Compare all 50 states:</strong> See our <Link href="/llc-by-state" className="text-teal-600 hover:underline">LLC by State comparison</Link> for filing fees, annual costs, and processing times.
          </p>

          <h2>Step 2: Choose Your LLC Name</h2>
          <p>Your LLC name must:</p>
          <ul>
            <li>Include &quot;LLC,&quot; &quot;L.L.C.,&quot; or &quot;Limited Liability Company&quot;</li>
            <li>Be distinguishable from other businesses registered in your state</li>
            <li>Not include restricted words like &quot;bank&quot; or &quot;insurance&quot; without proper licensing</li>
          </ul>
          <p>Search your state&apos;s business database to check availability before filing. Most states offer free online name searches through their Secretary of State website.</p>

          <h2>Step 3: Appoint a Registered Agent</h2>
          <p>
            Every LLC needs a registered agent &mdash; a person or company with a physical address in your state who can receive legal documents (lawsuits, tax notices, government correspondence) on your behalf.
          </p>
          <p>You have three options:</p>
          <ul>
            <li><strong>Be your own agent</strong> &mdash; Free, but your address becomes public record</li>
            <li><strong>Use a friend or family member</strong> &mdash; Must be available during business hours</li>
            <li><strong>Hire a professional service</strong> &mdash; $50-300/year, keeps your address private</li>
          </ul>

          <h2>Step 4: File Articles of Organization</h2>
          <p>
            This is the official document that creates your LLC. File it with your state&apos;s Secretary of State (or equivalent agency). Most states allow online filing.
          </p>
          <p>The form typically requires:</p>
          <ul>
            <li>LLC name and address</li>
            <li>Registered agent name and address</li>
            <li>Names of members (owners) or managers</li>
            <li>Purpose of the business (most states accept &quot;any lawful purpose&quot;)</li>
            <li>Whether the LLC is member-managed or manager-managed</li>
          </ul>
          <p><strong>Filing fees range from $40 (Kentucky) to $500 (Massachusetts).</strong> See exact costs in our <Link href="/llc-by-state" className="text-teal-600 hover:underline">state-by-state comparison</Link>.</p>

          <h2>Step 5: Create an Operating Agreement</h2>
          <p>
            An operating agreement is an internal document that outlines how your LLC will be run. While not always legally required, it&apos;s essential because:
          </p>
          <ul>
            <li>Banks require it to open a business account</li>
            <li>It strengthens your liability protection</li>
            <li>It prevents disputes between members</li>
            <li>It establishes clear rules for profit distribution, voting, and member exits</li>
          </ul>

          <h2>Step 6: Get an EIN (Employer Identification Number)</h2>
          <p>
            An EIN is like a Social Security number for your business. You need it to open a business bank account, hire employees, and file taxes. <strong>It&apos;s free from the IRS</strong> and takes about 5 minutes to get online.
          </p>
          <p>Read our complete <Link href="/business-guides/how-to-get-ein" className="text-teal-600 hover:underline">guide to getting an EIN</Link>.</p>

          <h2>Step 7: Open a Business Bank Account</h2>
          <p>
            Keeping business and personal finances separate is crucial for maintaining your LLC&apos;s liability protection. You&apos;ll need your EIN, Articles of Organization, and operating agreement.
          </p>
          <p>See our <Link href="/business-guides/best-business-bank-accounts" className="text-teal-600 hover:underline">best business bank accounts</Link> comparison.</p>

          <h2>Step 8: Get Business Licenses and Permits</h2>
          <p>
            Depending on your location and industry, you may need federal, state, and local licenses or permits. Common requirements include:
          </p>
          <ul>
            <li>General business license from your city/county</li>
            <li>Professional licenses (for regulated industries)</li>
            <li>Sales tax permit (if selling physical goods)</li>
            <li>Home occupation permit (if working from home)</li>
          </ul>

          <h2>How Much Does It Cost to Start an LLC?</h2>
          <p>Here&apos;s a typical cost breakdown:</p>
          <ul>
            <li><strong>State filing fee:</strong> $40-$500 (varies by state)</li>
            <li><strong>Registered agent:</strong> $0-$300/year</li>
            <li><strong>Operating agreement:</strong> $0 (DIY) to $1,500 (attorney)</li>
            <li><strong>EIN:</strong> Free</li>
            <li><strong>Business license:</strong> $50-$400</li>
          </ul>
          <p>Use our <Link href="/calculators/business-startup-cost" className="text-teal-600 hover:underline">Business Startup Cost Calculator</Link> to estimate your total launch budget.</p>

          <h2>LLC vs Other Business Structures</h2>
          <table>
            <thead>
              <tr><th>Feature</th><th>LLC</th><th>Sole Prop</th><th>S-Corp</th><th>C-Corp</th></tr>
            </thead>
            <tbody>
              <tr><td>Liability protection</td><td>Yes</td><td>No</td><td>Yes</td><td>Yes</td></tr>
              <tr><td>Pass-through tax</td><td>Yes</td><td>Yes</td><td>Yes</td><td>No</td></tr>
              <tr><td>Easy to set up</td><td>Yes</td><td>Yes</td><td>No</td><td>No</td></tr>
              <tr><td>Ongoing paperwork</td><td>Low</td><td>None</td><td>High</td><td>High</td></tr>
              <tr><td>Best for</td><td>Most small biz</td><td>Freelancers</td><td>Growing biz</td><td>Investors</td></tr>
            </tbody>
          </table>
        </div>

        <AdUnit className="my-8" />

        <section className="mt-10">
          <h2 className="mb-4 text-xl font-bold text-gray-900">Start Your LLC by State</h2>
          <p className="mb-4 text-gray-600">Click your state for a detailed step-by-step formation guide with exact costs:</p>
          <Link href="/llc-by-state" className="inline-block rounded-lg bg-teal-600 px-6 py-3 font-semibold text-white hover:bg-teal-700">
            Compare All 50 States
          </Link>
        </section>
      </article>
    </>
  );
}
