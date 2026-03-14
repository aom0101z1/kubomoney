import type { Metadata } from "next";
import Link from "next/link";
import AdUnit from "@/components/AdUnit";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "How to Get an EIN (2025) - Free IRS Application Guide",
  description:
    "Get a free EIN from the IRS in 5 minutes. Step-by-step guide to applying for an Employer Identification Number online for your LLC or business.",
};

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

        <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">How to Get an EIN: Free Step-by-Step Guide</h1>
        <p className="mb-8 text-lg text-gray-600">
          An EIN (Employer Identification Number) is a free 9-digit number from the IRS that identifies your business for tax purposes. Here&apos;s how to get one in about 5 minutes.
        </p>

        <AdUnit className="my-8" />

        <div className="prose prose-lg max-w-none">
          <h2>What Is an EIN?</h2>
          <p>
            An EIN is essentially a Social Security number for your business. Also called a Federal Tax ID Number, it&apos;s a unique 9-digit number (XX-XXXXXXX) assigned by the IRS to identify your business entity.
          </p>

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
            <li>Banks require it to open a business bank account</li>
            <li>It protects your SSN (you can use the EIN instead on forms)</li>
            <li>Clients and vendors may request it for 1099 reporting</li>
            <li>It looks more professional than using your personal SSN</li>
          </ul>

          <h2>How to Apply for an EIN (Online &mdash; Fastest)</h2>

          <h3>Step 1: Go to the IRS Website</h3>
          <p>Visit the IRS EIN Assistant. The online application is available Monday-Friday, 7am-10pm Eastern Time. It&apos;s completely free &mdash; <strong>never pay a third party for an EIN</strong>.</p>

          <h3>Step 2: Select Your Entity Type</h3>
          <p>Choose the type of entity that matches your business:</p>
          <ul>
            <li><strong>Limited Liability Company (LLC)</strong> &mdash; Most common for small businesses</li>
            <li><strong>Sole Proprietor</strong> &mdash; If you haven&apos;t formed an LLC</li>
            <li><strong>Corporation</strong> &mdash; If you&apos;ve incorporated</li>
            <li><strong>Partnership</strong> &mdash; If you have multiple owners without an LLC</li>
          </ul>

          <h3>Step 3: Enter Your Information</h3>
          <p>You&apos;ll need:</p>
          <ul>
            <li>Legal name of the business (as filed with your state)</li>
            <li>Business address</li>
            <li>Name and SSN of the &quot;responsible party&quot; (usually the owner)</li>
            <li>Reason for applying</li>
            <li>Type of business activity</li>
            <li>Number of employees expected in the next 12 months</li>
          </ul>

          <h3>Step 4: Receive Your EIN Instantly</h3>
          <p>After submitting, you&apos;ll receive your EIN immediately on screen. <strong>Save and print this confirmation</strong> &mdash; the IRS will also mail a confirmation letter (CP 575) in 4-6 weeks, but you can use the EIN right away.</p>

          <h2>Other Ways to Apply</h2>
          <table>
            <thead>
              <tr><th>Method</th><th>Processing Time</th><th>When to Use</th></tr>
            </thead>
            <tbody>
              <tr><td>Online</td><td>Immediate</td><td>Best for most applicants</td></tr>
              <tr><td>Fax (Form SS-4)</td><td>4 business days</td><td>If online is unavailable</td></tr>
              <tr><td>Mail (Form SS-4)</td><td>4-6 weeks</td><td>Last resort</td></tr>
              <tr><td>Phone</td><td>Immediate</td><td>International applicants only</td></tr>
            </tbody>
          </table>

          <h2>After You Get Your EIN</h2>
          <ol>
            <li><strong>Open a business bank account</strong> &mdash; See our <Link href="/business-guides/best-business-bank-accounts" className="text-teal-600 hover:underline">best business bank accounts</Link></li>
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
