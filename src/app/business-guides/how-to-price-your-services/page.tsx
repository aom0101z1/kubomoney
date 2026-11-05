import type { Metadata } from "next";
import Link from "next/link";
import AdUnit from "@/components/AdUnit";
import ArticleMeta from "@/components/ArticleMeta";
import Disclaimer from "@/components/Disclaimer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "How to Price Your Services as a Freelancer or Consultant - Hourly, Project, and Value-Based",
  description:
    "Learn how to price freelance and consulting services. Calculate a baseline hourly rate from your target income, compare hourly, project, value-based, and retainer pricing, and raise rates without losing clients.",
};

export default function PricingServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Price Your Services as a Freelancer or Consultant",
    description: metadata.description,
    url: `${siteConfig.url}/business-guides/how-to-price-your-services`,
    author: { "@type": "Person", name: siteConfig.author.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mx-auto max-w-4xl px-4 py-10">
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-teal-600">Home</Link>{" / "}
          <Link href="/business-guides" className="hover:text-teal-600">Business Guides</Link>{" / "}
          <span className="text-gray-900">How to Price Your Services</span>
        </nav>

        <h1 className="mb-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">How to Price Your Services as a Freelancer or Consultant</h1>
        <p className="mb-8 text-lg leading-relaxed text-gray-600">
          Pricing is the single decision that most determines whether freelancing pays better than a job or worse. This guide shows you how to calculate a rate that actually covers your life, choose between hourly, project, and value-based pricing, and raise your rates without losing the clients you want to keep.
        </p>

        <ArticleMeta reviewer="alexander" />

        <AdUnit className="my-8" />

        <div className="article-body">
          <section className="mb-10 rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50 p-6 sm:p-8">
            <h2 className="!mt-0 !border-0 !pb-0 text-2xl font-bold text-teal-800">Why Most Freelancers Underprice</h2>
            <p className="mt-3">
              New freelancers almost always anchor on their old salary. They divide an annual paycheck by 2,080 hours, get a number, and quote it. That number ignores three things an employer used to pay for: the hours you cannot bill, the taxes and benefits that came out of a larger pool, and the profit a business needs to survive a slow quarter. Add the fear of hearing &quot;no&quot; and the result is a rate that feels competitive but quietly loses money. The fix is not confidence. It is arithmetic.
            </p>
          </section>

          <h2>Step 1: Calculate Your Baseline Hourly Rate</h2>
          <p>
            Before choosing a pricing model, you need a floor: the lowest effective hourly rate at which the business works. Everything you price later, by project or by value, should land above it. The formula is simple:
          </p>
          <div className="my-6 rounded-xl border-2 border-teal-200 bg-teal-50 p-5 text-center">
            <p className="text-lg font-bold text-teal-800">
              Baseline Hourly Rate = (Desired Salary + Overhead + Taxes + Profit) &divide; Billable Hours
            </p>
          </div>
          <p>Each term deserves a careful definition:</p>
          <ul>
            <li><strong>Desired salary</strong> is what you want to take home to live on, not what you earned at your last job. Our <Link href="/calculators/salary">salary calculator</Link> translates a monthly budget into an annual figure.</li>
            <li><strong>Overhead</strong> is every cost of running the business: software, equipment, insurance, a coworking desk, marketing, training, accounting fees. If you are just starting, our <Link href="/business-guides/startup-costs">startup costs guide</Link> lists the categories most people forget.</li>
            <li><strong>Taxes</strong> are the set-aside for income and self-employment tax. No employer withholds for you, so you pay these yourself, usually through quarterly estimates. The right percentage depends on your income, state, and deductions; see our <Link href="/business-guides/quarterly-estimated-taxes-guide">quarterly estimated taxes guide</Link> and the <a href="https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes" target="_blank" rel="noopener noreferrer">IRS estimated taxes page</a>.</li>
            <li><strong>Profit</strong> is the margin above your salary that lets the business save for slow months, invest in tools, and grow. A business that only pays its owner a wage is a job with extra risk.</li>
            <li><strong>Billable hours</strong> are the hours a client actually pays for. Admin, proposals, invoicing, marketing, learning, and gaps between projects consume the rest. For most independent professionals, billable time is only <strong>50 to 60 percent</strong> of working hours. Using total working hours instead is the most common pricing error there is.</li>
          </ul>

          <h3>Worked example (assumptions labeled)</h3>
          <p>
            Suppose a freelance consultant wants to earn the equivalent of a solid salary and plans to take four weeks off per year. The figures below are illustrative assumptions, not benchmarks; swap in your own.
          </p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr><th>Item</th><th>Assumption</th><th>Amount</th></tr>
              </thead>
              <tbody>
                <tr><td>Desired salary</td><td>Target take-home before tax</td><td>$70,000</td></tr>
                <tr><td>Overhead</td><td>Software, insurance, equipment, marketing, accounting</td><td>$12,000</td></tr>
                <tr><td>Tax set-aside</td><td>Assumed 25% of salary for this example only; your rate will differ</td><td>$17,500</td></tr>
                <tr><td>Profit margin</td><td>10% of the subtotal above ($99,500)</td><td>$9,950</td></tr>
                <tr><td><strong>Total revenue needed</strong></td><td></td><td><strong>$109,450</strong></td></tr>
                <tr><td>Working hours</td><td>48 weeks &times; 40 hours</td><td>1,920</td></tr>
                <tr><td>Billable hours</td><td>55% of working hours</td><td>1,056</td></tr>
                <tr><td><strong>Baseline hourly rate</strong></td><td>$109,450 &divide; 1,056</td><td><strong>about $104/hour</strong></td></tr>
              </tbody>
            </table>
          </div>
          <p>
            Had this consultant divided by all 1,920 working hours instead, the rate would come out near $57 per hour, almost half of what the business actually needs. That gap is the underpricing trap in one line. Round your baseline up, never down, and treat it as the number below which you decline work.
          </p>
          <div className="mt-2 rounded-lg border border-teal-200 bg-teal-50 px-5 py-3 text-sm text-teal-900">
            To see how many billable hours you need before the business covers its fixed costs, run the numbers in our <Link href="/calculators/break-even" className="font-medium text-teal-700 underline hover:text-teal-900">break-even calculator</Link>.
          </div>

          <h2>Step 2: Choose a Pricing Model</h2>
          <p>
            Your baseline rate is a floor, not a menu item. How you present prices to clients is a separate decision, and each model shifts risk and reward differently.
          </p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr><th>Model</th><th>How it works</th><th>Pros</th><th>Cons</th><th>Best for</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Hourly</strong></td>
                  <td>Client pays for time logged at an agreed rate.</td>
                  <td>Simple to explain; every hour is paid; low risk on vague projects.</td>
                  <td>Income capped by hours; penalizes speed and skill; clients scrutinize timesheets.</td>
                  <td>Undefined scope, ongoing support, early-career work.</td>
                </tr>
                <tr>
                  <td><strong>Project / flat fee</strong></td>
                  <td>One price for a defined deliverable and scope.</td>
                  <td>Client knows the total up front; you profit from efficiency; easier to sell.</td>
                  <td>You absorb overruns; requires tight scope and change-order discipline.</td>
                  <td>Repeatable work you have done before: websites, audits, launches.</td>
                </tr>
                <tr>
                  <td><strong>Value-based</strong></td>
                  <td>Price tied to the outcome&apos;s worth to the client, not your hours.</td>
                  <td>Highest ceiling; aligns you with results; time becomes irrelevant.</td>
                  <td>Requires measurable outcomes and a client who can quantify them; harder to sell.</td>
                  <td>Work with clear financial impact: conversion, sales, cost reduction, fundraising.</td>
                </tr>
                <tr>
                  <td><strong>Retainer</strong></td>
                  <td>Recurring monthly fee for availability or a set bundle of work.</td>
                  <td>Predictable income; deeper client relationships; less selling.</td>
                  <td>Scope can quietly expand; unused hours create tension unless terms are clear.</td>
                  <td>Ongoing advisory, maintenance, content, or fractional roles.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>When to use each</h3>
          <p>
            <strong>Use hourly</strong> when neither you nor the client can define the scope, when the work is exploratory, or when you are new and still learning how long things take. Track every hour even on fixed-fee work; that data is how you price the next project accurately.
          </p>
          <p>
            <strong>Use project pricing</strong> once you have done a type of work several times and can estimate it reliably. Multiply your baseline rate by estimated hours, then add a buffer for revisions and surprises. If you finish faster, that is your reward for expertise, not a reason to discount.
          </p>
          <p>
            <strong>Use value-based pricing</strong> when you can connect your work to a number the client cares about and the client has the budget and maturity to think that way. If a landing page redesign is likely to lift monthly revenue by far more than your fee, pricing at a fraction of that lift is fair to both sides. Our <Link href="/calculators/roi">ROI calculator</Link> helps you frame the return in the client&apos;s terms.
          </p>
          <p>
            <strong>Use retainers</strong> when a client needs you regularly and you want income you can forecast. Define what the fee includes (hours, deliverables, or response times), what happens to unused capacity, and how extra work is billed.
          </p>

          <AdUnit className="my-10" />

          <h2>Packaging and Tiers: Good, Better, Best</h2>
          <p>
            A single price forces the client into a yes-or-no decision. Three tiers change the question to &quot;which one?&quot; and let the client self-select. Most buyers gravitate toward the middle option, so make it the package you most want to sell.
          </p>
          <p>Build tiers around scope and outcomes, not discounts. An illustrative structure for a website project (prices are placeholders to show the shape, not market rates):</p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr><th>Tier</th><th>What is included</th><th>Who it is for</th><th>Illustrative price</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>Good</strong></td><td>Five-page site on a template, one round of revisions, launch checklist</td><td>Clients with a tight budget who need a presence</td><td>$2,500</td></tr>
                <tr><td><strong>Better</strong></td><td>Custom design, up to ten pages, two revision rounds, basic SEO setup, 30 days of support</td><td>Established businesses replacing an outdated site</td><td>$5,500</td></tr>
                <tr><td><strong>Best</strong></td><td>Everything in Better plus copywriting, analytics setup, conversion review, 90 days of support</td><td>Clients whose site drives sales and leads</td><td>$9,500</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            Three rules make tiers work. First, each tier must be profitable on its own at your baseline rate. Second, the jump in value between tiers should feel larger than the jump in price. Third, the top tier should be genuinely premium, not padded; some clients will buy it, and its presence makes the middle tier look reasonable.
          </p>

          <h2>How to Raise Your Rates</h2>

          <h3>When to raise them</h3>
          <ul>
            <li><strong>You are fully booked.</strong> If you are turning work away or working nights to keep up, demand exceeds supply and price is the lever.</li>
            <li><strong>Nobody pushes back.</strong> If every prospect accepts your quote without hesitation, you are almost certainly below the market.</li>
            <li><strong>Your skills or results have improved.</strong> Faster delivery and better outcomes deserve a higher price, not a smaller invoice.</li>
            <li><strong>Your costs have risen.</strong> Software, insurance, and living expenses go up. Rates that stay flat are rates that are falling.</li>
            <li><strong>It has been a year.</strong> A scheduled annual review removes the emotion from the decision.</li>
          </ul>

          <h3>How much</h3>
          <p>
            For existing clients, a moderate increase in the range of roughly ten to twenty percent is usually easy to absorb and rarely triggers a departure. New clients have no previous number to compare against, so you can reprice more aggressively. A useful practice is to quote each new prospect slightly higher than the last until you hear real resistance; that is the market telling you where the ceiling sits. Hold there and improve your positioning before pushing again.
          </p>

          <h3>Scripts for the conversation</h3>
          <p>Give existing clients notice, state the new rate plainly, and do not apologize. For an email to a current client:</p>
          <div className="my-4 rounded-lg border-l-4 border-teal-500 bg-gray-50 px-5 py-4 text-gray-700">
            <p className="!my-0">
              &quot;Hi Dana, I wanted to give you advance notice that starting March 1 my rate will be $X per hour (or $X per project) for all clients. I value working with you and wanted you to have plenty of time to plan. Everything already scheduled before that date stays at the current rate. Let me know if you have any questions.&quot;
            </p>
          </div>
          <p>For a client who pushes back:</p>
          <div className="my-4 rounded-lg border-l-4 border-teal-500 bg-gray-50 px-5 py-4 text-gray-700">
            <p className="!my-0">
              &quot;I understand. The new rate reflects the results we have been getting and what it takes to keep delivering them. If the budget is fixed, I am happy to look at adjusting the scope so we can stay within it.&quot;
            </p>
          </div>
          <p>
            That last sentence matters. You are offering flexibility on scope, never on rate. If the client leaves, you have freed capacity for a client who will pay the new number.
          </p>

          <h2>Handling Scope Creep and Change Orders</h2>
          <p>
            Scope creep is the slow addition of &quot;small&quot; requests that were never part of the agreement. It is the most common way profitable projects become unprofitable, and it is almost entirely preventable with paperwork done up front.
          </p>
          <ol>
            <li><strong>Write the scope down in detail.</strong> List deliverables, the number of revision rounds, what counts as a revision, and what is excluded. Vague proposals invite expansion.</li>
            <li><strong>Include a change-order clause.</strong> Work outside the written scope is quoted separately and requires written approval before it starts.</li>
            <li><strong>Name it when it happens.</strong> Respond warmly and precisely: &quot;Happy to add that. It is outside our current scope, so I will send a quick change order with the cost and timeline for your approval.&quot;</li>
            <li><strong>Price change orders at full rate.</strong> Extra work is not a favor. It is new work, often under time pressure, and should be billed accordingly.</li>
            <li><strong>Collect a deposit.</strong> A deposit before work begins, with milestone payments on larger projects, protects you from clients who disappear and signals that your time is reserved.</li>
          </ol>

          <h2>Pricing Mistakes to Avoid</h2>
          <ul>
            <li><strong>Charging by the hour forever.</strong> Hourly billing caps your income at the hours you can work and penalizes you for getting faster. Move repeatable work to project or value pricing as soon as you can estimate it.</li>
            <li><strong>Forgetting taxes and benefits.</strong> Health insurance, retirement savings, paid time off, and the employer half of payroll taxes are now your expense. If they are not in your rate, you are funding them from your salary.</li>
            <li><strong>Discounting without reducing scope.</strong> A discount that keeps the full scope simply lowers your rate. If a client needs a lower price, remove deliverables until the number works for both of you.</li>
            <li><strong>Skipping the deposit.</strong> Starting work without money changing hands puts all the risk on you and makes scope harder to enforce later.</li>
            <li><strong>Quoting on the spot.</strong> Pressure produces low numbers. Say you will send a proposal and take the time to price properly.</li>
            <li><strong>Pricing from fear of competitors.</strong> The cheapest option in any market attracts the most demanding clients. Compete on outcome, specialization, and reliability instead.</li>
            <li><strong>Never reviewing the numbers.</strong> Compare actual hours against estimates after every project. Your baseline rate is only as accurate as the data behind it.</li>
          </ul>

          <h2>How to Research Market Rates</h2>
          <p>
            Your baseline rate tells you what you need. Market research tells you what the market will bear. Use both, and price above whichever is higher when you can.
          </p>
          <ul>
            <li><strong>Ask peers directly.</strong> Professional communities, industry groups, and mastermind circles are the most honest source. Most freelancers will share ranges privately.</li>
            <li><strong>Read job postings for the employed equivalent.</strong> In-house salaries for your kind of work, adjusted for the overhead and tax burden above, set a rough floor for freelance rates.</li>
            <li><strong>Review published rate surveys.</strong> Professional associations and freelance platforms publish periodic rate reports by discipline and experience. Treat them as a range, not a rule, and check the date.</li>
            <li><strong>Request quotes as a buyer.</strong> Ask two or three agencies or freelancers what they would charge for a project like yours. Agencies in particular reveal what established clients already pay.</li>
            <li><strong>Watch client reactions.</strong> Immediate acceptance means you are low. Polite declines with no negotiation may mean you are high for that segment. A short pause followed by a yes is the sweet spot.</li>
            <li><strong>Factor in your segment.</strong> A rate that is high for solo founders may be low for mid-size companies. Choose the clients you want and research that market specifically. The <a href="https://www.sba.gov" target="_blank" rel="noopener noreferrer">Small Business Administration</a> offers free counseling through its partner networks if you want an outside view on positioning.</li>
          </ul>

          <h2>Quick Pricing Checklist</h2>
          <ul>
            <li>I have calculated a baseline hourly rate using 50 to 60 percent billable hours, not total hours.</li>
            <li>My rate includes a set-aside for income and self-employment taxes plus the benefits an employer used to cover.</li>
            <li>I have chosen a pricing model that matches how well the scope can be defined.</li>
            <li>Every project price is above my baseline when divided by realistic hours.</li>
            <li>I offer tiers so clients choose a package rather than yes or no.</li>
            <li>My proposals define deliverables, revision rounds, and exclusions in writing.</li>
            <li>My contract includes a change-order clause and a deposit before work begins.</li>
            <li>I track actual hours against estimates on every project.</li>
            <li>I have a date on the calendar to review my rates within the next twelve months.</li>
          </ul>

          <h2>Frequently Asked Questions</h2>

          <h3>Should I show my rates publicly on my website?</h3>
          <p>
            It depends on your model. Publishing packages or &quot;starting at&quot; prices filters out prospects who cannot afford you and saves everyone time. Value-based and large custom work usually needs a conversation first, so many consultants publish a range or a minimum engagement size instead.
          </p>

          <h3>How do I price work I have never done before?</h3>
          <p>
            Bill hourly, or quote a project price with a tightly capped scope and a wide buffer. Track every hour. After two or three projects you will have the data to price it as a fixed fee with confidence.
          </p>

          <h3>What if a client says my rate is too high?</h3>
          <p>
            Ask what budget they had in mind, then offer to reduce scope to fit it. Never reduce the rate while keeping the scope. If no version of the project fits their budget, decline politely; a client who opens by negotiating your rate down rarely values the work.
          </p>

          <h3>Should I charge less when I am just starting out?</h3>
          <p>
            Less than an experienced professional, yes, but never less than your baseline rate. Starting below your floor builds a client base that cannot afford the real you. If you need portfolio pieces, do a small number of clearly defined reduced-price projects with an explicit end date and a testimonial in return.
          </p>

          <h3>How do retainers handle months when the client uses less than they paid for?</h3>
          <p>
            Spell it out in the agreement. Common approaches: let a limited amount of unused time roll over for one month, treat the fee as payment for availability with no rollover, or define the retainer by deliverables rather than hours. Whatever you choose, put it in writing before the first invoice.
          </p>

          <h2>Tools to Help You</h2>
          <div className="my-4 grid gap-3 sm:grid-cols-3">
            {[
              { href: "/calculators/salary", label: "Salary Calculator", desc: "Turn a target income into a rate" },
              { href: "/calculators/break-even", label: "Break-Even Calculator", desc: "Hours needed to cover costs" },
              { href: "/calculators/roi", label: "ROI Calculator", desc: "Frame value for client proposals" },
            ].map((tool) => (
              <Link key={tool.href} href={tool.href} className="block rounded-lg border border-gray-200 bg-gray-50 p-4 no-underline transition hover:border-teal-300 hover:shadow-sm">
                <p className="font-semibold text-teal-700">{tool.label}</p>
                <p className="text-sm text-gray-600">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </div>

        <Disclaimer kind="financial" />

        <AdUnit className="my-8" />
      </article>
    </>
  );
}
