import type { Metadata } from "next";
import Link from "next/link";
import AdUnit from "@/components/AdUnit";
import ArticleMeta from "@/components/ArticleMeta";
import Disclaimer from "@/components/Disclaimer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Quarterly Estimated Taxes for Freelancers and Self-Employed (2026) - How to Calculate and Pay",
  description:
    "Who must pay quarterly estimated taxes, the four due dates, safe-harbor rules, a step-by-step calculation with a worked example, how to pay through IRS Direct Pay or EFTPS, state estimates, underpayment penalties, and a monthly set-aside system.",
};

export default function EstimatedTaxesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Quarterly Estimated Taxes for Freelancers and Self-Employed: How to Calculate and Pay",
    description: metadata.description,
    url: `${siteConfig.url}/business-guides/quarterly-estimated-taxes-guide`,
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
          <span className="text-gray-900">Quarterly Estimated Taxes</span>
        </nav>

        <h1 className="mb-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">Quarterly Estimated Taxes for Freelancers and the Self-Employed: How to Calculate and Pay</h1>
        <p className="mb-8 text-lg leading-relaxed text-gray-600">
          When you work for an employer, taxes come out of every paycheck automatically. When you work for yourself, nobody withholds anything &mdash; the IRS expects you to send it in yourself, four times a year. Miss that and you face penalties plus a nasty bill in April. This guide explains who has to pay, how much, when, and how to set up a system so you never scramble for the money.
        </p>

        <ArticleMeta reviewer="alexander" />

        <AdUnit className="my-8" />

        <div className="article-body">
          <section className="mb-10 rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50 p-6 sm:p-8">
            <h2 className="!mt-0 !border-0 !pb-0 text-2xl font-bold text-teal-800">The Short Version</h2>
            <p className="mt-3">
              If you expect to owe <strong>$1,000 or more</strong> in federal tax for the year after subtracting any withholding and credits, you generally need to make estimated payments. Pay roughly a quarter of your expected annual tax by each of the four deadlines. Base it on the safe-harbor rules so you are protected from penalties even if your income ends up higher than planned.
            </p>
          </section>

          <h2>Who Must Pay Estimated Taxes</h2>
          <p>The general federal rule is that you must make estimated payments if you expect to owe at least $1,000 in tax for the year after withholding and refundable credits. That applies to almost everyone with meaningful self-employment income:</p>
          <ul>
            <li>Freelancers, consultants, and independent contractors paid on 1099s</li>
            <li>Sole proprietors and single-member LLC owners</li>
            <li>Partners in a partnership and owners of S-corporations (on their pass-through share)</li>
            <li>Gig workers: rideshare, delivery, marketplace sellers</li>
            <li>Landlords with significant net rental income</li>
            <li>Investors with large capital gains, dividends, or interest that are not covered by withholding</li>
          </ul>
          <p><strong>Exception:</strong> If you also have a W-2 job, you may be able to avoid separate estimated payments entirely by increasing your withholding at work. Withholding is treated as paid evenly through the year regardless of when it actually came out, which makes it a flexible way to catch up. Use the <Link href="/calculators/tax-withholding">tax withholding calculator</Link> to see how much extra to withhold per paycheck.</p>
          <p>You generally do not need to pay estimates if you had no tax liability last year, you were a US citizen or resident for the whole year, and last year covered a full twelve months.</p>

          <h2>What Estimated Taxes Actually Cover</h2>
          <p>Your quarterly payments cover two separate taxes that are both calculated on your personal return:</p>

          <h3>1. Federal Income Tax</h3>
          <p>The same progressive tax everyone pays on their income. Your net business profit (revenue minus deductible expenses) is added to any other income, reduced by deductions, and taxed at the applicable brackets.</p>

          <h3>2. Self-Employment (SE) Tax</h3>
          <p>This is the part that surprises new freelancers. Employees split Social Security and Medicare contributions with their employer, with the employee&apos;s half taken from each paycheck. When you are self-employed, <strong>you are both the employer and the employee</strong>, so you pay both halves. The combined rate is commonly cited as roughly 15.3% of net self-employment earnings &mdash; a Social Security portion that applies up to an annual wage cap and a Medicare portion that applies to all earnings. Confirm the current rates and caps on <a href="https://www.irs.gov/businesses/small-businesses-self-employed" target="_blank" rel="noopener noreferrer">irs.gov</a>.</p>
          <p>Two things soften the blow: SE tax is calculated on a slightly reduced base (not the full 100% of your net profit), and you can deduct half of the SE tax you pay as an adjustment to income. Your tax software handles both automatically, but the takeaway is that SE tax is a large, separate line item that your estimated payments must include.</p>

          <h2>The Four Due Dates</h2>
          <p>The quarters are not equal. They are called &quot;quarterly&quot; payments, but the periods they cover are three, two, three, and four months long. Mark these on your calendar:</p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr><th>Payment</th><th>Income Period Covered</th><th>Usual Due Date</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>1st</strong></td><td>January 1 &ndash; March 31</td><td>Mid-April (same day as the annual return)</td></tr>
                <tr><td><strong>2nd</strong></td><td>April 1 &ndash; May 31</td><td>Mid-June</td></tr>
                <tr><td><strong>3rd</strong></td><td>June 1 &ndash; August 31</td><td>Mid-September</td></tr>
                <tr><td><strong>4th</strong></td><td>September 1 &ndash; December 31</td><td>Mid-January of the following year</td></tr>
              </tbody>
            </table>
          </div>
          <p>When a due date falls on a weekend or a legal holiday, it shifts to the next business day. The exact dates for the current year are listed on the <a href="https://www.irs.gov/forms-pubs/about-form-1040-es" target="_blank" rel="noopener noreferrer">Form 1040-ES page</a>. Note that the second payment comes only two months after the first, which catches many people off guard.</p>
          <p>If you file your annual return and pay the full balance by the end of January, you can skip the fourth estimated payment. In practice, few self-employed people have their books closed that fast.</p>

          <h2>Safe-Harbor Rules: How to Avoid Penalties Even If You Guess Wrong</h2>
          <p>You cannot predict your income perfectly, and the IRS knows that. The safe-harbor rules say you will not be penalized for underpayment as long as your total payments during the year (estimates plus withholding) reach one of these targets:</p>
          <ul>
            <li><strong>90% of the tax you actually owe for the current year</strong>, or</li>
            <li><strong>100% of the tax shown on last year&apos;s return</strong> &mdash; this rises to <strong>110%</strong> of last year&apos;s tax if your adjusted gross income was above a threshold the IRS sets.</li>
          </ul>
          <p>These are the commonly used safe harbors; confirm the current thresholds on irs.gov, as the income cutoff for the 110% rule can change.</p>
          <p>Which one should you use? <strong>The prior-year safe harbor is the easiest and most predictable.</strong> You know exactly what last year&apos;s tax was. Divide it by four (or multiply by 1.1 and divide by four if the higher threshold applies), pay that amount each quarter, and you are protected no matter how much more you earn this year. You will still owe the difference in April, but with no penalty.</p>
          <p>The current-year method (90%) makes sense when your income has dropped significantly from last year and you do not want to overpay.</p>

          <h2>Step-by-Step: How to Calculate Your Quarterly Payment</h2>
          <p>Here is the process using the current-year method. Grab your year-to-date numbers and a calculator.</p>
          <ol>
            <li><strong>Estimate your annual net business profit.</strong> Expected revenue minus expected deductible expenses. If you are early in the year, annualize what you have so far.</li>
            <li><strong>Estimate self-employment tax.</strong> Apply the SE tax rate to your net profit (on the reduced base).</li>
            <li><strong>Estimate taxable income.</strong> Net profit, plus any other income, minus half of SE tax, minus your standard or itemized deduction, minus any other adjustments such as retirement contributions or the qualified business income deduction.</li>
            <li><strong>Estimate income tax</strong> on that taxable income using the current brackets, then subtract any credits you expect.</li>
            <li><strong>Add income tax and SE tax</strong> to get total expected federal tax.</li>
            <li><strong>Subtract any withholding</strong> from a W-2 job or a spouse&apos;s job if you file jointly.</li>
            <li><strong>Divide by four.</strong> That is your quarterly payment. Compare it to the prior-year safe harbor and pay whichever you have chosen.</li>
          </ol>

          <h3>Worked Example</h3>
          <p>Maya is a freelance web developer with no W-2 job. The figures below use <strong>illustrative assumptions</strong> to show the mechanics &mdash; the actual rates, deduction amounts, and brackets change every year and your situation will differ.</p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr><th>Step</th><th>Assumption</th><th>Amount</th></tr>
              </thead>
              <tbody>
                <tr><td>Expected revenue</td><td>From contracts and retainers</td><td>$90,000</td></tr>
                <tr><td>Expected business expenses</td><td>Software, home office, contractors, equipment</td><td>&minus;$15,000</td></tr>
                <tr><td><strong>Net business profit</strong></td><td></td><td><strong>$75,000</strong></td></tr>
                <tr><td>Self-employment tax</td><td>Illustrative 15.3% on a reduced base of about 92% of profit</td><td>about $10,600</td></tr>
                <tr><td>Half of SE tax (deductible)</td><td></td><td>&minus;$5,300</td></tr>
                <tr><td>Standard deduction</td><td>Illustrative single-filer figure</td><td>&minus;$15,000</td></tr>
                <tr><td><strong>Estimated taxable income</strong></td><td>$75,000 &minus; $5,300 &minus; $15,000</td><td><strong>$54,700</strong></td></tr>
                <tr><td>Federal income tax</td><td>Illustrative effective rate of 14% across brackets</td><td>about $7,660</td></tr>
                <tr><td><strong>Total expected federal tax</strong></td><td>$10,600 + $7,660</td><td><strong>about $18,260</strong></td></tr>
                <tr><td><strong>Quarterly payment</strong></td><td>$18,260 divided by 4</td><td><strong>about $4,565</strong></td></tr>
              </tbody>
            </table>
          </div>
          <p>Notice that SE tax is <em>bigger</em> than income tax in this example. That is typical at moderate income levels, and it is why freelancers who only budget for &quot;income tax&quot; end up short. Maya&apos;s total federal tax is roughly 24% of her net profit. State tax would come on top of that.</p>
          <p>If Maya&apos;s tax last year was $14,000, her prior-year safe harbor would be $3,500 per quarter. Paying that protects her from penalties, but she would owe about $4,260 extra in April. Paying the $4,565 current-year estimate avoids that surprise. Many people choose the safe-harbor floor as the minimum and set aside the rest in savings.</p>
          <p>The <a href="https://www.irs.gov/forms-pubs/about-form-1040-es" target="_blank" rel="noopener noreferrer">Form 1040-ES worksheet</a> on irs.gov walks through this same calculation with the current year&apos;s actual figures.</p>

          <AdUnit className="my-10" />

          <h2>How to Pay</h2>
          <p>You do not need to mail anything. The IRS offers several free electronic methods, and all of them give you an instant confirmation you should save.</p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr><th>Method</th><th>Best For</th><th>Notes</th></tr>
              </thead>
              <tbody>
                <tr><td><strong><a href="https://www.irs.gov/payments/direct-pay" target="_blank" rel="noopener noreferrer">IRS Direct Pay</a></strong></td><td>Most individuals</td><td>Pay directly from a checking or savings account. No registration required. Select &quot;Estimated Tax&quot; and the correct tax year. Can schedule up to a year ahead.</td></tr>
                <tr><td><strong><a href="https://www.eftps.gov" target="_blank" rel="noopener noreferrer">EFTPS</a></strong></td><td>Businesses and anyone who wants to schedule all four payments at once</td><td>Requires enrollment, which involves a PIN mailed to you, so sign up well before your first deadline. Full payment history available.</td></tr>
                <tr><td><strong>IRS Online Account</strong></td><td>People who want to see balances and payment history in one place</td><td>Verify identity once, then pay and view records from the same dashboard.</td></tr>
                <tr><td><strong>Debit or credit card</strong></td><td>Emergencies</td><td>Third-party processors charge a fee. A credit card fee usually exceeds any rewards you earn.</td></tr>
                <tr><td><strong>Form 1040-ES vouchers by mail</strong></td><td>People who prefer paper</td><td>Print the voucher for the right quarter, mail with a check, and keep proof of mailing. Slowest and easiest to get wrong.</td></tr>
              </tbody>
            </table>
          </div>
          <p>Whichever method you use, make sure the payment is applied to the correct <strong>tax year</strong> and the <strong>estimated tax</strong> type. Misapplied payments are a common and annoying problem to fix.</p>

          <h2>State Estimated Taxes</h2>
          <p>Most states with an income tax require their own estimated payments, with their own thresholds, forms, and payment portals. The due dates often mirror the federal schedule, but not always. A few states have no income tax at all, so self-employed people there only deal with the federal side.</p>
          <p>Add your state&apos;s expected tax to your set-aside percentage (see below), and check your state revenue department&apos;s website for its specific rules. Some cities also levy local income or business taxes on self-employment earnings.</p>

          <h2>What Happens If You Underpay</h2>
          <p>The underpayment penalty is essentially <strong>interest</strong> charged on the amount you should have paid each quarter, from that quarter&apos;s due date until you actually pay it. The rate is set quarterly by the IRS and tied to federal short-term interest rates. It is not a huge punitive fine, but it adds up, and it is a complete waste of money.</p>
          <p>Important details:</p>
          <ul>
            <li>The penalty is calculated <strong>per quarter</strong>. Paying the full year in January does not undo the penalty for missing April, June, and September.</li>
            <li>Meeting a safe harbor eliminates the penalty entirely, even if you still owe a balance in April.</li>
            <li>If your income is uneven (a big project in November, for example), you may be able to use the <strong>annualized income method</strong> to show that your payments matched when the income actually arrived. It involves extra paperwork but can wipe out a penalty.</li>
            <li>The IRS may waive the penalty in cases of casualty, disaster, retirement, or disability. Do not count on it.</li>
          </ul>

          <h2>The Monthly Set-Aside System</h2>
          <p>The number one reason freelancers miss estimated payments is not forgetting the date &mdash; it is <strong>not having the cash</strong> when the date arrives. The fix is to treat taxes like an employer would: take them out before the money ever feels like yours.</p>
          <ol>
            <li><strong>Open a separate savings account</strong> labeled &quot;Taxes.&quot; Ideally at a different bank from your spending account, so it is slightly inconvenient to raid.</li>
            <li><strong>Pick a set-aside percentage.</strong> For most self-employed people with no W-2 income, 25% to 30% of every payment covers federal income tax and SE tax at moderate incomes. Add your state rate on top. Higher earners need more. If you are unsure, start at 30% and adjust after your first full year.</li>
            <li><strong>Transfer it the day you get paid.</strong> Client sends $4,000, you move $1,200 to the tax account immediately. Automate it if your bank allows percentage-based transfers.</li>
            <li><strong>Pay quarterly from the tax account.</strong> On each due date, send the estimated payment from that account, never from your operating cash.</li>
            <li><strong>Review every quarter.</strong> If the account is growing far faster than your payments, lower the percentage. If it is coming up short, raise it.</li>
          </ol>
          <p>With this system, the quarterly payment becomes a boring transfer rather than a crisis. Any excess left in the account after you file in April is a bonus.</p>

          <h2>Common Mistakes</h2>
          <ul>
            <li><strong>Forgetting self-employment tax.</strong> Budgeting only for income tax leaves you roughly 15% short on every dollar of profit.</li>
            <li><strong>Treating the quarters as equal.</strong> The June deadline arrives only two months after April.</li>
            <li><strong>Skipping the first year.</strong> &quot;I just started, I will sort it out at tax time&quot; is how people end up with a five-figure bill and a penalty.</li>
            <li><strong>Paying from the wrong account or to the wrong year.</strong> Double-check the tax year and payment type on every confirmation.</li>
            <li><strong>Ignoring the state.</strong> Federal estimates do not cover state tax.</li>
            <li><strong>Not adjusting mid-year.</strong> If you land a major contract in July, recalculate. If a client disappears, recalculate the other way.</li>
            <li><strong>Overpaying out of fear.</strong> Giving the IRS an interest-free loan all year is better than a penalty, but a safe-harbor calculation lets you hold the extra cash yourself.</li>
            <li><strong>Missing deductions.</strong> Every legitimate expense you track lowers both income tax and SE tax. See our <Link href="/business-guides/small-business-tax-deductions">guide to small business tax deductions</Link>.</li>
          </ul>

          <h2>Frequently Asked Questions</h2>

          <h3>Do I need an EIN to pay estimated taxes?</h3>
          <p>No. Sole proprietors and single-member LLC owners pay estimated taxes under their own Social Security number because the business income flows onto their personal return. You may still want an EIN for banking and to avoid giving clients your SSN &mdash; see <Link href="/business-guides/how-to-get-ein">how to get an EIN</Link>.</p>

          <h3>I started freelancing in the middle of the year. When is my first payment due?</h3>
          <p>At the next due date after you start earning. If you got your first client in July, your first estimated payment is due in mid-September, covering what you earned from June through August. You do not owe anything for quarters before you had income.</p>

          <h3>What if my income is very irregular?</h3>
          <p>You have two options. Pay the prior-year safe harbor in equal installments regardless of when the money arrives, which is simplest. Or pay based on what you actually earned each period and use the annualized income method on your return to show the payments matched your income. The first is less work; the second may keep more cash in your hands early in the year.</p>

          <h3>Can my spouse&apos;s withholding cover my estimated taxes?</h3>
          <p>If you file jointly, yes. All withholding on the joint return counts toward the safe harbor. Many couples simply increase the W-2 spouse&apos;s withholding instead of making separate payments. Run the numbers in the <Link href="/calculators/paycheck">paycheck calculator</Link> to see the effect on take-home pay.</p>

          <h3>Is it better to overpay and get a refund?</h3>
          <p>Financially, no. A refund means you lent the government money at zero interest. Aim to pay the safe-harbor amount, keep the rest of your set-aside in a savings account that earns interest, and settle the balance in April. That said, if you know you would spend the money otherwise, a slight overpayment is a reasonable form of forced savings.</p>

          <h2>Tools to Help You</h2>
          <div className="my-4 grid gap-3 sm:grid-cols-3">
            {[
              { href: "/calculators/tax-withholding", label: "Tax Withholding Calculator", desc: "Adjust W-2 withholding to cover estimates" },
              { href: "/calculators/salary", label: "Salary Calculator", desc: "Compare freelance and employee pay" },
              { href: "/business-guides/small-business-tax-deductions", label: "Tax Deductions Guide", desc: "25 write-offs that lower your bill" },
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
