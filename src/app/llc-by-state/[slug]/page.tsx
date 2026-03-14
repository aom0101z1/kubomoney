import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { statesLLC, getLLCBySlug } from "@/data/states-llc";
import AdUnit from "@/components/AdUnit";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return statesLLC.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const state = getLLCBySlug(slug);
  if (!state) return {};
  return {
    title: `How to Start an LLC in ${state.name} (${new Date().getFullYear()}) - Step by Step Guide`,
    description: `Start an LLC in ${state.name} for $${state.filingFee}. Step-by-step guide covering filing fees, annual costs, tax rates, and everything you need to form your ${state.abbr} LLC.`,
  };
}

export default async function StateLLCPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const state = getLLCBySlug(slug);
  if (!state) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to Start an LLC in ${state.name}`,
    description: `Step-by-step guide to forming an LLC in ${state.name}`,
    url: `${siteConfig.url}/llc-by-state/${state.slug}`,
    step: [
      { "@type": "HowToStep", name: "Choose a name", text: `Pick a unique name for your ${state.name} LLC that includes "LLC" or "Limited Liability Company"` },
      { "@type": "HowToStep", name: "Appoint a Registered Agent", text: `Choose a registered agent with a physical address in ${state.name}` },
      { "@type": "HowToStep", name: "File Articles of Organization", text: `File with the ${state.filingAgency} and pay the $${state.filingFee} filing fee` },
      { "@type": "HowToStep", name: "Create an Operating Agreement", text: "Draft an operating agreement outlining ownership and management structure" },
      { "@type": "HowToStep", name: "Get an EIN", text: "Apply for a free Employer Identification Number from the IRS" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mx-auto max-w-4xl px-4 py-10">
        <nav className="mb-6 text-sm text-gray-500">
          <a href="/" className="hover:text-teal-600">Home</a>{" / "}
          <a href="/llc-by-state" className="hover:text-teal-600">LLC by State</a>{" / "}
          <span className="text-gray-900">{state.name}</span>
        </nav>

        <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          How to Start an LLC in {state.name}
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          Complete guide to forming a Limited Liability Company in {state.name}. Filing fee: ${state.filingFee}. Processing time: {state.filingTime}.
        </p>

        {/* Cost Summary */}
        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Filing Fee</p>
            <p className="text-2xl font-extrabold text-teal-700">${state.filingFee}</p>
            <p className="text-xs text-gray-500">one-time</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">{state.annualFeeLabel}</p>
            <p className="text-2xl font-extrabold text-gray-900">${state.annualFee}</p>
            <p className="text-xs text-gray-500">ongoing</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Processing Time</p>
            <p className="text-lg font-extrabold text-gray-900">{state.filingTime}</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">State Tax</p>
            <p className="text-lg font-extrabold text-gray-900">{state.stateTaxRate}</p>
          </div>
        </div>

        <AdUnit className="my-8" />

        <section className="prose prose-lg max-w-none">
          <h2>Steps to Form an LLC in {state.name}</h2>

          <h3>Step 1: Choose Your LLC Name</h3>
          <p>
            Your {state.name} LLC name must be distinguishable from other business entities registered in the state.
            The name must include &quot;LLC,&quot; &quot;L.L.C.,&quot; or &quot;Limited Liability Company.&quot;
            Search the {state.filingAgency}&apos;s database to check name availability before filing.
          </p>

          <h3>Step 2: Appoint a Registered Agent</h3>
          <p>
            Every {state.name} LLC must have a registered agent &mdash; a person or company with a physical address
            in {state.name} who can receive legal documents on behalf of your LLC. You can serve as your own
            registered agent or hire a professional service ($50-300/year).
          </p>

          <h3>Step 3: File Articles of Organization</h3>
          <p>
            File your Articles of Organization with the <strong>{state.filingAgency}</strong>.
            The filing fee is <strong>${state.filingFee}</strong> and typical processing takes <strong>{state.filingTime}</strong>.
            You can file online at {state.filingUrl}.
          </p>

          <h3>Step 4: Create an Operating Agreement</h3>
          <p>
            While not always legally required, an operating agreement is essential. It outlines ownership percentages,
            profit distribution, management structure, and what happens if a member leaves. Banks often require
            one to open a business account.
          </p>

          <h3>Step 5: Get an EIN (Employer Identification Number)</h3>
          <p>
            Apply for a free EIN from the IRS at irs.gov. You&apos;ll need this to open a business bank account,
            hire employees, and file taxes. The process takes about 5 minutes online.
          </p>

          <h3>Step 6: Open a Business Bank Account</h3>
          <p>
            Separate your personal and business finances by opening a dedicated business checking account.
            This protects your personal liability shield and makes accounting easier.
          </p>

          <h2>Key Facts About {state.name} LLCs</h2>
          <ul>
            {state.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>

          <h2>Ongoing Requirements</h2>
          <p>
            {state.annualFee > 0
              ? `${state.name} requires a ${state.annualFeeLabel.toLowerCase()} with a fee of $${state.annualFee}. Make sure to file on time to keep your LLC in good standing.`
              : `${state.name} does not require an annual report, making it one of the easiest states to maintain an LLC.`}
          </p>

          <h2>Need Help Estimating Business Costs?</h2>
          <p>
            Use our <Link href="/calculators/loan-payoff" className="text-teal-600 hover:underline">Loan Payoff Calculator</Link> to
            plan your business financing, or check the <Link href={`/salary-by-state/${state.slug}`} className="text-teal-600 hover:underline">average salary in {state.name}</Link> to
            understand your local market.
          </p>
        </section>

        <AdUnit className="my-8" />

        {/* Related States */}
        <section className="mt-10">
          <h2 className="mb-4 text-xl font-bold text-gray-900">Start an LLC in Other States</h2>
          <div className="flex flex-wrap gap-2">
            {statesLLC
              .filter((s) => s.slug !== state.slug)
              .slice(0, 12)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/llc-by-state/${s.slug}`}
                  className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-700 transition hover:border-teal-300 hover:text-teal-600"
                >
                  {s.name}
                </Link>
              ))}
            <Link
              href="/llc-by-state"
              className="rounded-lg border border-teal-200 bg-teal-50 px-3 py-1.5 text-sm font-medium text-teal-700 transition hover:bg-teal-100"
            >
              View All States →
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
