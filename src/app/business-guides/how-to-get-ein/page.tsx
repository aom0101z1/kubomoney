import type { Metadata } from "next";
import Link from "next/link";
import AdUnit from "@/components/AdUnit";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "How to Get an EIN (2025) - Free IRS Application Guide",
  description:
    "Get a free EIN from the IRS in 5 minutes. Step-by-step guide to applying for an Employer Identification Number online for your LLC or business.",
};

function StepCard({ step, title, children }: { step: number; title: string; children: React.ReactNode }) {
  return (
    <div className="relative mt-10 mb-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white shadow">
        {step}
      </div>
      <h3 className="mt-1 mb-3 text-lg font-bold text-gray-900">{title}</h3>
      {children}
    </div>
  );
}

export default function HowToGetEINPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Get an EIN from the IRS",
    description: metadata.description,
    url: `${siteConfig.url}/business-guides/how-to-get-ein`,
    step: [
      { "@type": "HowToStep", name: "Go to the IRS website", text: "Navigate to the IRS EIN Assistant at irs.gov" },
      { "@type": "HowToStep", name: "Select your entity type", text: "Choose LLC, corporation, sole proprietor, etc." },
      { "@type": "HowToStep", name: "Enter business information", text: "Provide your business name, address, and responsible party" },
      { "@type": "HowToStep", name: "Receive your EIN", text: "Your EIN is issued immediately after completing the application" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mx-auto max-w-4xl px-4 py-10">
        <nav className="mb-6 text-sm text-gray-500">
          <a href="/" className="hover:text-teal-600">Home</a>{" / "}
          <a href="/business-guides" className="hover:text-teal-600">Business Guides</a>{" / "}
          <span className="text-gray-900">How to Get an EIN</span>
        </nav>

        <h1 className="mb-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">How to Get an EIN: Free Step-by-Step Guide</h1>
        <p className="mb-8 text-lg leading-relaxed text-gray-600">
          An EIN (Employer Identification Number) is a free 9-digit number from the IRS that identifies your business for tax purposes. Here&apos;s how to get one in about 5 minutes.
        </p>

        <AdUnit className="my-8" />

        <div className="article-body">
          <section className="mb-10 rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50 p-6 sm:p-8">
            <h2 className="!mt-0 !border-0 !pb-0 text-2xl font-bold text-teal-800">What Is an EIN?</h2>
            <p className="mt-3">
              An EIN is essentially a <strong>Social Security number for your business</strong>. Also called a Federal Tax ID Number, it&apos;s a unique 9-digit number (XX-XXXXXXX) assigned by the IRS to identify your business entity.
            </p>
          </section>

          <h2>Do You Need an EIN?</h2>
          <p>You <strong>must</strong> get an EIN if you:</p>
          <ul>
            <li>Have employees</li>
            <li>Operate as a corporation or partnership</li>
            <li>File employment, excise, or alcohol/tobacco/firearms tax returns</li>
            <li>Withhold taxes on income paid to a non-resident alien</li>
          </ul>
          <p>You <strong>should</strong> get an EIN even if not required because:</p>
          <ul>
            <li><strong>Banks require it</strong> to open a business bank account</li>
            <li>It <strong>protects your SSN</strong> (you can use the EIN instead on forms)</li>
            <li>Clients and vendors may request it for 1099 reporting</li>
            <li>It looks <strong>more professional</strong> than using your personal SSN</li>
          </ul>

          <h2>How to Apply for an EIN Online (Fastest)</h2>

          <StepCard step={1} title="Go to the IRS Website">
            <p>Visit the IRS EIN Assistant. The online application is available <strong>Monday-Friday, 7am-10pm Eastern Time</strong>. It&apos;s completely free &mdash; <strong>never pay a third party for an EIN</strong>.</p>
          </StepCard>

          <StepCard step={2} title="Select Your Entity Type">
            <p>Choose the type of entity that matches your business:</p>
            <ul className="mb-4 ml-6 list-disc space-y-2 text-gray-700">
              <li><strong>Limited Liability Company (LLC)</strong> &mdash; Most common for small businesses</li>
              <li><strong>Sole Proprietor</strong> &mdash; If you haven&apos;t formed an LLC</li>
              <li><strong>Corporation</strong> &mdash; If you&apos;ve incorporated</li>
              <li><strong>Partnership</strong> &mdash; If you have multiple owners without an LLC</li>
            </ul>
          </StepCard>

          <StepCard step={3} title="Enter Your Information">
            <p>You&apos;ll need:</p>
            <ul className="mb-4 ml-6 list-disc space-y-2 text-gray-700">
              <li>Legal name of the business (as filed with your state)</li>
              <li>Business address</li>
              <li>Name and SSN of the &quot;responsible party&quot; (usually the owner)</li>
              <li>Reason for applying</li>
              <li>Type of business activity</li>
              <li>Number of employees expected in the next 12 months</li>
            </ul>
          </StepCard>

          <StepCard step={4} title="Receive Your EIN Instantly">
            <p>After submitting, you&apos;ll receive your EIN <strong>immediately on screen</strong>. Save and print this confirmation &mdash; the IRS will also mail a confirmation letter (CP 575) in 4-6 weeks, but you can use the EIN right away.</p>
          </StepCard>

          <h2>Other Ways to Apply</h2>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr><th>Method</th><th>Processing Time</th><th>When to Use</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>Online</strong></td><td>Immediate</td><td>Best for most applicants</td></tr>
                <tr><td><strong>Fax</strong> (Form SS-4)</td><td>4 business days</td><td>If online is unavailable</td></tr>
                <tr><td><strong>Mail</strong> (Form SS-4)</td><td>4-6 weeks</td><td>Last resort</td></tr>
                <tr><td><strong>Phone</strong></td><td>Immediate</td><td>International applicants only</td></tr>
              </tbody>
            </table>
          </div>

          <h2>After You Get Your EIN</h2>
          <ol>
            <li><strong>Open a business bank account</strong> &mdash; See our <Link href="/business-guides/best-business-bank-accounts">best business bank accounts</Link></li>
            <li><strong>Set up accounting</strong> &mdash; Start tracking income and expenses from day one</li>
            <li><strong>File any required state tax registrations</strong></li>
            <li><strong>Use your EIN</strong> instead of your SSN on W-9 forms, contracts, and invoices</li>
          </ol>

          <h2>Common EIN Mistakes to Avoid</h2>
          <ul>
            <li><strong>Paying for an EIN</strong> &mdash; It&apos;s always free from the IRS. Third-party services that charge are unnecessary.</li>
            <li><strong>Applying before forming your LLC</strong> &mdash; File your Articles of Organization first, then get the EIN.</li>
            <li><strong>Getting multiple EINs</strong> &mdash; Each business entity needs only one EIN. Don&apos;t apply more than once for the same entity.</li>
            <li><strong>Not saving the confirmation</strong> &mdash; Print or screenshot your EIN immediately. The IRS confirmation letter takes weeks.</li>
          </ul>
        </div>

        <AdUnit className="my-8" />
      </article>
    </>
  );
}
