import type { Metadata } from "next";
import Link from "next/link";
import AdUnit from "@/components/AdUnit";
import ArticleMeta from "@/components/ArticleMeta";
import Disclaimer from "@/components/Disclaimer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Small Business Tax Deductions (2026) - 25 Write-Offs You Should Not Miss",
  description:
    "A practical guide to 25 small business tax deductions: home office, vehicle, equipment, software, retirement, health insurance, startup costs, meals, and more. Includes a record-keeping system and the write-offs people wrongly claim.",
};

export default function TaxDeductionsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Small Business Tax Deductions: 25 Write-Offs You Should Not Miss",
    description: metadata.description,
    url: `${siteConfig.url}/business-guides/small-business-tax-deductions`,
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
          <span className="text-gray-900">Small Business Tax Deductions</span>
        </nav>

        <h1 className="mb-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">Small Business Tax Deductions: 25 Write-Offs You Should Not Miss</h1>
        <p className="mb-8 text-lg leading-relaxed text-gray-600">
          Every dollar you legitimately deduct is a dollar you are not taxed on. Most small business owners leave money on the table because they do not know a deduction exists, or because their records are too messy to claim it. This guide walks through the 25 deductions that matter most, how to document them, and the ones that get people in trouble.
        </p>

        <ArticleMeta reviewer="alexander" />

        <AdUnit className="my-8" />

        <div className="article-body">
          <section className="mb-10 rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50 p-6 sm:p-8">
            <h2 className="!mt-0 !border-0 !pb-0 text-2xl font-bold text-teal-800">The One Rule Behind Every Deduction</h2>
            <p className="mt-3">
              The IRS allows you to deduct expenses that are <strong>&quot;ordinary and necessary&quot;</strong> for your trade or business. <strong>Ordinary</strong> means common and accepted in your industry. <strong>Necessary</strong> means helpful and appropriate &mdash; not indispensable. A graphic designer&apos;s software subscription is ordinary and necessary. A graphic designer&apos;s jet ski is not, no matter how much it helps with creativity. When in doubt, ask: would another reasonable person running this kind of business spend money on this to earn income?
            </p>
          </section>

          <h2>How Deductions Actually Save You Money</h2>
          <p>A deduction reduces your <strong>taxable income</strong>, not your tax bill directly. If you are in a combined federal, state, and self-employment tax position of roughly 30%, a $1,000 deduction saves you about $300. That is still real money, but it means you should never spend $1,000 on something you do not need just to &quot;write it off.&quot; You are still out $700.</p>
          <p>For self-employed people, business deductions are especially valuable because they reduce both income tax <em>and</em> self-employment tax, since both are calculated from your net profit. See our <Link href="/business-guides/quarterly-estimated-taxes-guide">quarterly estimated taxes guide</Link> for how that interacts with your payments during the year.</p>

          <h2>The 25 Deductions at a Glance</h2>
          <p>Here is the full list grouped by category. Each one is explained in more detail below.</p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr><th>#</th><th>Deduction</th><th>Category</th><th>Key Documentation</th></tr>
              </thead>
              <tbody>
                <tr><td>1</td><td>Home office</td><td>Workspace</td><td>Square footage, floor plan, home expenses</td></tr>
                <tr><td>2</td><td>Rent for business space</td><td>Workspace</td><td>Lease, payment records</td></tr>
                <tr><td>3</td><td>Utilities for business space</td><td>Workspace</td><td>Bills</td></tr>
                <tr><td>4</td><td>Vehicle (mileage or actual)</td><td>Transportation</td><td>Mileage log with date, purpose, miles</td></tr>
                <tr><td>5</td><td>Parking and tolls</td><td>Transportation</td><td>Receipts, app history</td></tr>
                <tr><td>6</td><td>Equipment and Section 179</td><td>Assets</td><td>Invoices, date placed in service</td></tr>
                <tr><td>7</td><td>Depreciation</td><td>Assets</td><td>Asset list with cost and date</td></tr>
                <tr><td>8</td><td>Software and subscriptions</td><td>Operations</td><td>Monthly statements</td></tr>
                <tr><td>9</td><td>Office supplies</td><td>Operations</td><td>Receipts</td></tr>
                <tr><td>10</td><td>Phone and internet (business %)</td><td>Operations</td><td>Bills, usage estimate</td></tr>
                <tr><td>11</td><td>Marketing and advertising</td><td>Growth</td><td>Invoices, ad platform reports</td></tr>
                <tr><td>12</td><td>Website and hosting</td><td>Growth</td><td>Invoices</td></tr>
                <tr><td>13</td><td>Professional services</td><td>Services</td><td>Invoices from accountants, lawyers</td></tr>
                <tr><td>14</td><td>Contract labor (1099)</td><td>Services</td><td>Contracts, W-9s, 1099s filed</td></tr>
                <tr><td>15</td><td>Employee wages and benefits</td><td>Services</td><td>Payroll records</td></tr>
                <tr><td>16</td><td>Education and training</td><td>Development</td><td>Receipts, course description</td></tr>
                <tr><td>17</td><td>Business insurance</td><td>Protection</td><td>Policy, premium statements</td></tr>
                <tr><td>18</td><td>Self-employed health insurance</td><td>Protection</td><td>Premium statements</td></tr>
                <tr><td>19</td><td>Retirement contributions (SEP-IRA, Solo 401(k))</td><td>Retirement</td><td>Plan documents, contribution confirmations</td></tr>
                <tr><td>20</td><td>Qualified business income (QBI)</td><td>Entity-level</td><td>Net profit figures</td></tr>
                <tr><td>21</td><td>Startup costs</td><td>Formation</td><td>Receipts from before opening</td></tr>
                <tr><td>22</td><td>Business travel</td><td>Travel</td><td>Itinerary, receipts, business purpose</td></tr>
                <tr><td>23</td><td>Business meals (50%)</td><td>Travel</td><td>Receipt, who attended, what was discussed</td></tr>
                <tr><td>24</td><td>Bank fees and business interest</td><td>Finance</td><td>Statements, loan agreements</td></tr>
                <tr><td>25</td><td>Licenses, permits, and bad debts</td><td>Compliance</td><td>Government receipts, invoices written off</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Workspace Deductions</h2>

          <h3>1. Home Office</h3>
          <p>To qualify, you need a space in your home used <strong>regularly and exclusively</strong> for business. A spare bedroom converted to an office qualifies. The kitchen table where you also eat dinner does not. The space must also be your principal place of business or where you meet clients.</p>
          <p>There are two ways to calculate it:</p>
          <ul>
            <li><strong>Simplified method</strong> &mdash; Multiply the square footage of your office by a flat per-square-foot rate set by the IRS, up to a maximum square footage. No need to track home expenses. Fast, but usually produces a smaller deduction.</li>
            <li><strong>Regular method</strong> &mdash; Calculate the percentage of your home used for business (office square feet divided by total square feet), then apply that percentage to actual home expenses: rent or mortgage interest, utilities, insurance, repairs, and depreciation if you own. More paperwork, often a bigger deduction.</li>
          </ul>
          <p>If your office is 10% of your home and your annual eligible home expenses are $24,000, the regular method gives you a $2,400 deduction. Run both methods the first year and pick the better one. The current per-square-foot rate and cap are published on <a href="https://www.irs.gov/businesses/small-businesses-self-employed" target="_blank" rel="noopener noreferrer">irs.gov</a>.</p>

          <h3>2 and 3. Rent and Utilities for Business Space</h3>
          <p>If you rent a shop, studio, coworking desk, or storage unit for the business, the full rent is deductible, along with electricity, water, gas, trash, and internet at that location. Keep the lease and proof of payment.</p>

          <h2>Transportation Deductions</h2>

          <h3>4. Vehicle Expenses</h3>
          <p>Business driving &mdash; visiting clients, picking up supplies, going to the bank for the business, driving between job sites &mdash; is deductible. You have two options:</p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr><th></th><th>Standard Mileage</th><th>Actual Expenses</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>How it works</strong></td><td>Business miles multiplied by a per-mile rate the IRS publishes each year</td><td>Business-use percentage of gas, insurance, repairs, registration, depreciation or lease payments</td></tr>
                <tr><td><strong>Records needed</strong></td><td>Mileage log only</td><td>Mileage log plus every vehicle receipt</td></tr>
                <tr><td><strong>Best for</strong></td><td>Fuel-efficient cars, high mileage</td><td>Expensive vehicles, low mileage, high repair costs</td></tr>
                <tr><td><strong>Caution</strong></td><td>Simple and audit-friendly</td><td>Switching rules apply once you choose actual for a vehicle</td></tr>
              </tbody>
            </table>
          </div>
          <p>Either way, you need a <strong>contemporaneous mileage log</strong>: date, starting point, destination, business purpose, and miles. A mileage-tracking app that uses GPS makes this nearly automatic. Reconstructing a log from memory in April is the single most common reason vehicle deductions get denied.</p>

          <h3>5. Parking and Tolls</h3>
          <p>Business parking fees and tolls are deductible on top of either vehicle method. Parking tickets and traffic fines are never deductible.</p>

          <h2>Asset Deductions</h2>

          <h3>6. Equipment and Section 179</h3>
          <p>Computers, cameras, machinery, furniture, and tools used in the business are deductible. Normally, an asset that lasts more than a year is <strong>depreciated</strong> &mdash; deducted gradually over its useful life. Section 179 lets you instead deduct the full cost in the year you place the asset in service, up to an annual limit set by the IRS. Bonus depreciation is a related provision that has changed several times in recent years. Both are powerful for a profitable year when you need equipment anyway, but check the current limits before planning a large purchase.</p>

          <h3>7. Depreciation</h3>
          <p>For assets you do not expense immediately, keep a simple asset register: description, purchase date, cost, and the date you started using it. Your tax software or accountant uses this to calculate each year&apos;s depreciation. Buildings, vehicles over certain thresholds, and assets you choose not to expense all go here.</p>

          <h2>Operations Deductions</h2>

          <h3>8. Software and Subscriptions</h3>
          <p>Accounting software, design tools, cloud storage, project management, scheduling apps, email marketing platforms, and industry databases. If a subscription is used for both business and personal purposes (a streaming service you occasionally use for client presentations, for example), deduct only the business share, and be honest about it.</p>

          <h3>9. Office Supplies</h3>
          <p>Paper, ink, pens, shipping materials, small tools, and anything consumed within the year. Larger items that last multiple years belong under equipment.</p>

          <h3>10. Phone and Internet</h3>
          <p>If you use one phone for both business and personal calls, you deduct only the <strong>business-use percentage</strong>. Estimate it reasonably &mdash; review a month of call logs or data usage &mdash; and apply that percentage to the bill. A dedicated second business line is 100% deductible. The same logic applies to home internet if you work from home.</p>

          <h2>Growth Deductions</h2>

          <h3>11. Marketing and Advertising</h3>
          <p>Online ads, printed flyers, business cards, sponsorships, promotional items, photography for your listings, and fees paid to marketing agencies. This is one of the most clearly deductible categories, and one that owners often undercount because it is spread across many small charges.</p>

          <h3>12. Website and Hosting</h3>
          <p>Domain registration, hosting, themes, plugins, and payments to a developer. Larger website builds may need to be treated like a long-lived asset depending on the facts, so flag big projects to your tax preparer.</p>

          <AdUnit className="my-10" />

          <h2>Services and People</h2>

          <h3>13. Professional Services</h3>
          <p>Fees paid to accountants, bookkeepers, lawyers, and consultants for business matters are deductible. The portion of your tax preparation fee that relates to your business schedule is deductible too; the portion for your personal return is not.</p>

          <h3>14. Contract Labor</h3>
          <p>Payments to freelancers and independent contractors are deductible. The catch is reporting: if you pay a contractor above the annual reporting threshold, you generally must collect a Form W-9 from them and file a Form 1099 by the deadline early the following year. Collect the W-9 <em>before</em> you pay anyone, because chasing it later is painful. The current threshold and forms are on <a href="https://www.irs.gov/businesses/small-businesses-self-employed" target="_blank" rel="noopener noreferrer">irs.gov</a>.</p>

          <h3>15. Employee Wages and Benefits</h3>
          <p>If you have employees, their wages, employer payroll taxes, health benefits, and retirement plan contributions are all deductible business expenses. You will need an EIN first &mdash; see <Link href="/business-guides/how-to-get-ein">how to get an EIN</Link>.</p>

          <h3>16. Education and Training</h3>
          <p>Courses, books, conferences, certifications, and workshops that <strong>maintain or improve skills in your current business</strong> are deductible. Education that qualifies you for a brand new trade is not. A photographer taking a lighting masterclass: deductible. A photographer going to nursing school: not deductible as a business expense.</p>

          <h2>Protection and Retirement</h2>

          <h3>17. Business Insurance</h3>
          <p>General liability, professional liability (errors and omissions), commercial property, business interruption, cyber, and commercial auto premiums are deductible.</p>

          <h3>18. Self-Employed Health Insurance</h3>
          <p>If you are self-employed and not eligible for coverage through an employer (yours or your spouse&apos;s), you can generally deduct premiums for medical, dental, and qualified long-term care insurance for yourself, your spouse, and dependents. This is typically taken as an adjustment to income rather than a business expense on your schedule, and it is limited to your net business profit.</p>

          <h3>19. Retirement Contributions</h3>
          <p>Self-employed people have two popular options, both of which reduce taxable income:</p>
          <ul>
            <li><strong>SEP-IRA</strong> &mdash; Simple to set up, contributions are a percentage of net self-employment income, up to an annual cap. Good for people with no employees and unpredictable income, because you can decide the contribution after the year ends.</li>
            <li><strong>Solo 401(k)</strong> &mdash; Available if you have no employees other than a spouse. Lets you contribute both as &quot;employee&quot; and &quot;employer,&quot; which often allows a larger total contribution at lower income levels than a SEP. Slightly more paperwork.</li>
          </ul>
          <p>Contribution limits change yearly; check the current figures on irs.gov before deciding how much to put in.</p>

          <h2>Entity and Formation</h2>

          <h3>20. Qualified Business Income (QBI) Deduction</h3>
          <p>Owners of pass-through businesses (sole proprietorships, partnerships, S-corporations, most LLCs) may be able to deduct a portion of their qualified business income from taxable income. It is not a business expense &mdash; it is calculated on your personal return after your business profit is determined. It phases out or is limited at higher incomes and for certain service businesses, so confirm your eligibility for the current year rather than assuming.</p>

          <h3>21. Startup Costs</h3>
          <p>Money spent <em>before</em> your business opened &mdash; market research, travel to find suppliers, legal fees for formation, initial advertising &mdash; is treated specially. You can generally deduct a portion in the first year of business and amortize the rest over several years. Keep every pre-launch receipt. For a full breakdown, read our <Link href="/business-guides/startup-costs">startup costs guide</Link> or run the numbers in the <Link href="/calculators/business-startup-cost">business startup cost calculator</Link>.</p>

          <h2>Travel and Meals</h2>

          <h3>22. Business Travel</h3>
          <p>When you travel away from your tax home overnight for business, airfare, lodging, rental cars, rideshares, baggage fees, and laundry are deductible. Mixed trips need allocation: if you fly to a conference and add three vacation days, the airfare may still be deductible if the trip is primarily business, but the extra hotel nights are personal. Bringing your family does not make their expenses deductible.</p>

          <h3>23. Business Meals</h3>
          <p>Meals with clients, prospects, or business partners where business is discussed are generally <strong>50% deductible</strong>. Meals while traveling for business are also 50% deductible. The rule has shifted temporarily in past years, so confirm the current percentage. For every meal, note on the receipt who was there and what business was discussed. Without that, the deduction is very hard to defend.</p>

          <h2>Finance and Compliance</h2>

          <h3>24. Bank Fees and Business Interest</h3>
          <p>Monthly account fees, wire fees, payment processor fees (the percentage taken from each card sale), and interest on business loans or business credit cards are deductible. This is a strong reason to keep a separate business bank account and card: commingled accounts make it nearly impossible to prove which interest and fees were business-related.</p>

          <h3>25. Licenses, Permits, and Bad Debts</h3>
          <p>State and local business licenses, professional licenses, permits, and regulatory fees are deductible. Bad debts &mdash; invoices you reported as income but were never paid &mdash; can be written off, but only if you use accrual accounting and already counted the income. Cash-basis businesses, which is most freelancers, simply never recorded the income, so there is nothing to deduct.</p>

          <h2>A Record-Keeping System That Takes 15 Minutes a Week</h2>
          <p>Deductions you cannot prove do not exist. The IRS can ask for documentation years after you file. Here is a system that holds up:</p>
          <ol>
            <li><strong>Open a dedicated business bank account and card.</strong> Run every business expense through them and nothing personal. This alone does 80% of the work.</li>
            <li><strong>Photograph every receipt the day you get it.</strong> Use a receipt-scanning or accounting app that attaches the image to the transaction. Thermal paper receipts fade within a year or two.</li>
            <li><strong>Categorize weekly.</strong> Spend 15 minutes each week assigning transactions to categories that mirror the list above. Monthly catch-up sessions turn into dreaded all-day projects.</li>
            <li><strong>Log mileage in real time.</strong> Turn on a GPS mileage app or keep a notebook in the car.</li>
            <li><strong>Note the business purpose</strong> on anything that could look personal: meals, travel, phone, and home office.</li>
            <li><strong>Keep records at least three years</strong> after filing, which is the general audit window. Keep records for assets you depreciate for as long as you own the asset plus three years. Many accountants recommend seven years to be safe.</li>
          </ol>
          <p>Useful categories to set up in your software: Advertising, Car and Truck, Contract Labor, Insurance, Interest, Legal and Professional, Office Expense, Rent, Repairs, Supplies, Taxes and Licenses, Travel, Meals, Utilities, and Other. These roughly match the lines on the IRS schedule most sole proprietors file, which makes tax time much faster.</p>

          <h2>Deductions People Wrongly Claim</h2>
          <p>These are the ones that trigger audits and penalties. Avoid them.</p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr><th>Wrongly Claimed</th><th>Why It Fails</th><th>What Is Actually Deductible</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>Commuting</strong></td><td>Driving from home to your regular workplace is personal, even if you take calls on the way</td><td>Driving between work locations, or from a qualifying home office to a client</td></tr>
                <tr><td><strong>Clothing</strong></td><td>Suits, dresses, and shoes you could wear outside work are personal, even if you only wear them to work</td><td>Uniforms, safety gear, and costumes not suitable for everyday wear</td></tr>
                <tr><td><strong>Personal meals</strong></td><td>Lunch alone at your desk is not a business meal</td><td>Meals with a business contact where business is discussed, or meals while traveling overnight</td></tr>
                <tr><td><strong>Full phone bill</strong></td><td>You almost certainly make personal calls on it</td><td>Business-use percentage, or 100% of a dedicated business line</td></tr>
                <tr><td><strong>Entire home internet</strong></td><td>Streaming and family use are personal</td><td>Business-use percentage</td></tr>
                <tr><td><strong>Gym memberships</strong></td><td>General health is personal</td><td>Almost never deductible for owners</td></tr>
                <tr><td><strong>Family vacation with one meeting</strong></td><td>Primary purpose is personal</td><td>Only the direct cost of the business meeting itself</td></tr>
              </tbody>
            </table>
          </div>

          <h2>How Deductions Differ by Business Structure</h2>
          <p>The list of deductible expenses is largely the same no matter how your business is organized. What changes is <em>where</em> they are reported and a few owner-specific items.</p>
          <ul>
            <li><strong>Sole proprietor or single-member LLC</strong> &mdash; Business income and expenses go on a schedule attached to your personal return. Health insurance, retirement contributions, and the QBI deduction are claimed on the personal side. Home office and vehicle rules apply directly to you.</li>
            <li><strong>Multi-member LLC or partnership</strong> &mdash; The business files its own informational return and passes income and deductions through to each owner. Some unreimbursed expenses an owner pays personally may be deductible on their own return if the partnership agreement requires them to pay.</li>
            <li><strong>S-corporation</strong> &mdash; You are an employee of your own company and must pay yourself a reasonable salary. Many expenses, including home office, are best handled through an <strong>accountable plan</strong> where the company reimburses you, rather than deducting them personally. Health insurance for owners above a certain ownership share has its own reporting rules.</li>
          </ul>
          <p>Choosing a structure is about more than deductions &mdash; liability and payroll complexity matter too. If you are still deciding, see <Link href="/business-guides/how-to-start-llc">how to start an LLC</Link>.</p>

          <h2>Frequently Asked Questions</h2>

          <h3>Can I deduct expenses if my business made no profit?</h3>
          <p>Yes. If your business is a genuine effort to make a profit, a loss can generally offset other income on your return, subject to certain limits. However, if you show losses year after year, the IRS may question whether it is a business or a hobby. Hobby expenses are not deductible.</p>

          <h3>Do I need receipts for everything?</h3>
          <p>You need to be able to substantiate every deduction. Bank and card statements prove the amount and date, but a receipt or invoice proves <em>what</em> you bought. For small purchases, a statement entry plus a note of the business purpose is often sufficient. For travel, meals, and vehicle expenses, more detailed records are expected.</p>

          <h3>Can I deduct the cost of forming my LLC?</h3>
          <p>State filing fees, registered agent fees, and legal costs to form the entity are generally treated as startup or organizational costs. A portion can usually be deducted in your first year, with the rest amortized. See the <Link href="/business-guides/startup-costs">startup costs guide</Link>.</p>

          <h3>What if I use my personal credit card for business purchases?</h3>
          <p>The expense is still deductible if it is ordinary and necessary and you can prove it. But mixing accounts makes bookkeeping harder and weakens the liability protection of an LLC. Open a business account as early as possible and reimburse yourself cleanly for anything paid personally.</p>

          <h3>Should I buy equipment in December to lower my taxes?</h3>
          <p>Only if you actually need it. A deduction returns a fraction of what you spend. Buying something useless to save 30% of its cost means losing the other 70%. If you do need the equipment, buying it before year end and placing it in service lets you take the deduction a year earlier.</p>

          <h2>Tools to Help You</h2>
          <div className="my-4 grid gap-3 sm:grid-cols-3">
            {[
              { href: "/calculators/business-startup-cost", label: "Startup Cost Calculator", desc: "Estimate what launching will cost" },
              { href: "/business-guides/quarterly-estimated-taxes-guide", label: "Quarterly Taxes Guide", desc: "Calculate and pay estimated taxes" },
              { href: "/business-guides/how-to-start-llc", label: "How to Start an LLC", desc: "Choose and form your structure" },
            ].map((tool) => (
              <Link key={tool.href} href={tool.href} className="block rounded-lg border border-gray-200 bg-gray-50 p-4 no-underline transition hover:border-teal-300 hover:shadow-sm">
                <p className="font-semibold text-teal-700">{tool.label}</p>
                <p className="text-sm text-gray-600">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </div>

        <Disclaimer kind="tax" />

        <AdUnit className="my-8" />
      </article>
    </>
  );
}
