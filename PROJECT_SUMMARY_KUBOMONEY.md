# PROJECT SUMMARY: Kubo Money (kubomoney.com)

> **Owners**: Alexander O.M. & Vanessa O.G.
> **Location**: Pereira, Colombia
> **Created**: March 2026
> **Last Updated**: March 15, 2026
> **Status**: LIVE — 297 PAGES — SCALING CONTENT & MONETIZATION
> **Repo**: github.com/aom0101z1/kubomoney
> **Local Path**: `C:\Dev\Websites\finance-calc-hub\`

---

## QUICK STATS

| Metric | Value |
|--------|-------|
| Total Pages | 349 |
| Domain | kubomoney.com (Namecheap → Vercel) |
| Stack | Next.js 16 + React 19 + Tailwind 4 + TypeScript |
| Hosting | Vercel (auto-deploys on git push) |
| Analytics | GA4 (G-XRK84DD6VF) |
| AdSense | ca-pub-1474229931660831 — **Pending approval** (submitted Mar 13) |
| Brand | "Kubo Money" — teal/emerald palette, cube "K" logo |

---

## HOW IT WORKS

```
Local code (C:\Dev\Websites\finance-calc-hub\)
  → git push to GitHub (aom0101z1/kubomoney)
    → Vercel auto-builds & deploys
      → kubomoney.com (live website)
```

- **Framework**: Next.js (modern JavaScript framework) generates all pages at build time
- **Programmatic SEO**: 1 template + 1 data file = 50 pages automatically
- **Styling**: Tailwind CSS + `article-body` CSS class for all prose content
- **Ads**: AdUnit component returns null when AdSense not loaded (no blank spaces)

---

## CONTENT INVENTORY (349 Pages)

### Calculators (20)

| Calculator | URL |
|-----------|-----|
| Mortgage | /calculators/mortgage |
| Compound Interest | /calculators/compound-interest |
| Loan Payoff | /calculators/loan-payoff |
| Retirement | /calculators/retirement |
| Salary | /calculators/salary |
| Debt-to-Income | /calculators/debt-to-income |
| Auto Loan | /calculators/auto-loan |
| Credit Card Payoff | /calculators/credit-card-payoff |
| Net Worth | /calculators/net-worth |
| Inflation | /calculators/inflation |
| ROI | /calculators/roi |
| Break-Even | /calculators/break-even |
| Business Startup Cost | /calculators/business-startup-cost |
| Tip | /calculators/tip |
| Savings Goal | /calculators/savings-goal |
| Home Affordability | /calculators/home-affordability |
| Paycheck | /calculators/paycheck |
| Emergency Fund | /calculators/emergency-fund |
| Tax Withholding | /calculators/tax-withholding |
| Investment Fee | /calculators/investment-fee |

All calculators have "Related Tools" internal links to other calculators.

### Business Guides (5)

| Guide | URL |
|-------|-----|
| How to Start an LLC | /business-guides/how-to-start-llc |
| How to Write a Business Plan | /business-guides/how-to-write-business-plan |
| Business Startup Costs | /business-guides/startup-costs |
| How to Get an EIN | /business-guides/how-to-get-ein |
| Best Business Bank Accounts | /business-guides/best-business-bank-accounts |

### Personal Finance Guides (5)

| Guide | URL |
|-------|-----|
| Investing for Beginners | /personal-finance/investing-basics |
| Budgeting Guide | /personal-finance/budgeting-guide |
| How to Pay Off Debt | /personal-finance/how-to-pay-off-debt |
| Emergency Fund Guide | /personal-finance/emergency-fund |
| Retirement Planning | /personal-finance/retirement-planning |

All guides restyled with step cards, callout boxes, comparison cards, data grids, and visual hierarchy.

### Programmatic SEO Pages (310)

| Section | URL Pattern | Pages | Data |
|---------|-------------|-------|------|
| Salary by State | /salary-by-state/[state] | 50 | Median income, COL, tax rate, min wage, employers, industries |
| LLC by State | /llc-by-state/[state] | 50 | Filing fees, annual fees, state tax, process steps, affiliate CTAs |
| Salary by City | /salary-by-city/[city] | 50 | Median income, COL index, employers, industries, hourly rate |
| Cost of Living | /cost-of-living/[city] | 50 | Housing, grocery, utilities, transport, healthcare indices, rent, home prices |
| Tax Rates by State | /tax-rates/[state] | 50 | Income/sales/property/corporate tax, estate/inheritance, gas/cigarette, burden rank |
| Minimum Wage by State | /minimum-wage/[state] | 51 | State/tipped/effective wage, annual earnings, COL index, scheduled increases, living wage |

Plus 6 index pages (one per section) and 5 other static pages (home, about, privacy, contact, calculators index).

### Cross-Linking Structure

- Salary-by-state pages → tax-rates pages, LLC-by-state pages
- Salary-by-city pages → cost-of-living pages, salary-by-state pages, LLC-by-state pages
- Cost-of-living pages → salary-by-city pages, salary-by-state pages, calculators
- Tax-rates pages → salary-by-state pages, LLC-by-state pages, calculators
- All calculators → other related calculators
- All pages → relevant calculators (mortgage, salary, home affordability, paycheck)

---

## MONETIZATION STATUS

### Google AdSense
- **Status**: Pending approval (submitted March 13, 2026)
- **Publisher ID**: ca-pub-1474229931660831
- **ads.txt**: Authorized on both kubomoney.com and lalupa.com.co
- **Ad placements**: AdUnit components placed throughout all pages (render nothing until approved)

### Affiliate Links
- **LLC Pages**: CTAs for ZenBusiness, LegalZoom, Northwest Registered Agent on all 50 LLC pages
- **Status**: Placeholder URLs — NEED TO JOIN AFFILIATE PROGRAMS and swap in referral URLs
- **Programs to join**:
  - [ ] ZenBusiness affiliate program
  - [ ] LegalZoom affiliate program (via Commission Junction)
  - [ ] Northwest Registered Agent affiliate program

### Google Analytics
- **GA4 Property**: G-XRK84DD6VF (added March 14, 2026)
- **Status**: Active and tracking

### Google Search Console
- **Status**: Verified, sitemap submitted
- **Action needed**: Resubmit sitemap (now 294 pages, was submitted with 192)

---

## TECH STACK

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, static generation) |
| UI | React 19 + Tailwind 4 |
| Language | TypeScript |
| Content | TypeScript data files + static pages |
| Hosting | Vercel (auto-deploys on push to main) |
| Domain Registrar | Namecheap |
| DNS | Vercel (pointed from Namecheap) |
| Analytics | GA4 (G-XRK84DD6VF) |
| Search Console | Verified, sitemap submitted |
| Ads | Google AdSense (pending) |
| Version Control | Git + GitHub (aom0101z1/kubomoney) |
| Styling | Tailwind CSS + article-body class for prose |
| SEO | Schema.org JSON-LD, meta tags, sitemap.xml, robots.txt |

---

## FILE STRUCTURE

```
C:\Dev\Websites\finance-calc-hub\
├── PROJECT_SUMMARY_KUBOMONEY.md   <- THIS FILE
├── src/
│   ├── app/
│   │   ├── layout.tsx              <- Root layout (header, footer, GA4, AdSense)
│   │   ├── page.tsx                <- Homepage
│   │   ├── sitemap.ts              <- Dynamic sitemap (294 URLs)
│   │   ├── calculators/            <- 17 calculator pages + index
│   │   ├── business-guides/        <- 5 business guide articles + index
│   │   ├── personal-finance/       <- 5 personal finance articles + index
│   │   ├── salary-by-state/        <- 50 state salary pages + index
│   │   │   └── [slug]/page.tsx     <- Template (links to tax-rates)
│   │   ├── llc-by-state/           <- 50 state LLC pages + index
│   │   │   └── [slug]/page.tsx     <- Template (affiliate CTAs)
│   │   ├── salary-by-city/         <- 50 city salary pages + index
│   │   │   └── [slug]/page.tsx     <- Template (links to cost-of-living)
│   │   ├── cost-of-living/         <- 50 city COL pages + index ← NEW
│   │   │   └── [slug]/page.tsx     <- Template (housing, grocery, transport breakdown)
│   │   ├── tax-rates/              <- 50 state tax pages + index ← NEW
│   │   │   └── [slug]/page.tsx     <- Template (income, sales, property, corporate)
│   │   ├── about/                  <- About page (both founders)
│   │   ├── privacy/                <- Privacy policy
│   │   └── contact/                <- Contact page
│   ├── components/
│   │   ├── Header.tsx              <- Site header with mobile hamburger menu
│   │   ├── Footer.tsx              <- Site footer
│   │   └── AdUnit.tsx              <- AdSense component (returns null when not loaded)
│   ├── data/
│   │   ├── states-salary.ts        <- 50 states salary data
│   │   ├── states-llc.ts           <- 50 states LLC data
│   │   ├── states-tax-rates.ts     <- 50 states tax data ← NEW
│   │   ├── cities-salary.ts        <- 50 cities salary data
│   │   └── cities-cost-of-living.ts <- 50 cities COL data ← NEW
│   └── lib/
│       └── site-config.ts          <- Site name, URL, AdSense ID, author info
├── public/
│   ├── ads.txt                     <- AdSense verification
│   ├── robots.txt                  <- Search engine crawling rules
│   └── favicon/                    <- Kubo Money logo files
├── package.json
├── tailwind.config.ts
└── next.config.ts
```

---

## COMMIT HISTORY

| Commit | Description | Pages |
|--------|-------------|-------|
| ae20cf9 | Initial commit (Create Next App) | — |
| 4ac53af | Rebrand to Kubo Money (kubomoney.com) | — |
| ffc6b5b | Fix AdSense script | — |
| c133f15 | Add 4 calculators + mobile hamburger menu | ~10 |
| 00fcb7c | Add 100 programmatic pages (salary + LLC by state) | ~110 |
| fe2844f | Add 4 more calculators (ROI, break-even, startup, tip) | ~114 |
| f4383a4 | Add 10 guide articles (business + personal finance) | ~130 |
| 9c1117d | Add 50 salary-by-city pages + affiliate CTAs on LLC pages | ~180 |
| 079130c | Add 3 more calculators (savings goal, home affordability, paycheck) | ~183 |
| cdded86 | Restyle all guides + fix AdUnit blank spaces | ~183 |
| 48620f8 | Add Vanessa O.G. as co-founder | ~183 |
| fe1b53e | Add Related Tools internal links to all calculators | ~183 |
| dfb3ca1 | Add GA4 tracking (G-XRK84DD6VF) | 192 |
| 788487b | Add 50 cost-of-living city pages | 243 |
| 240a151 | Add 50 tax-rates-by-state pages | 294 |
| db9283a | Add 3 calculators (emergency fund, tax withholding, investment fee) | 297 |
| — | Add 51 minimum-wage-by-state pages with cross-links | 349 |

---

## WHAT'S BEEN COMPLETED

- [x] Domain + hosting setup (Namecheap → Vercel)
- [x] Next.js project with Tailwind + TypeScript
- [x] 20 financial calculators with cross-links
- [x] 5 business guide articles (restyled)
- [x] 5 personal finance articles (restyled)
- [x] 50 salary-by-state programmatic pages
- [x] 50 LLC-by-state pages with affiliate CTAs
- [x] 50 salary-by-city programmatic pages
- [x] 50 cost-of-living-by-city programmatic pages
- [x] 50 tax-rates-by-state programmatic pages
- [x] 51 minimum-wage-by-state programmatic pages (50 states + DC)
- [x] AdSense integration (pending approval)
- [x] GA4 analytics tracking
- [x] Search Console verification + sitemap
- [x] Schema.org JSON-LD markup on all pages
- [x] Mobile-responsive design with hamburger menu
- [x] Internal cross-linking between all sections
- [x] ads.txt deployed
- [x] robots.txt deployed
- [x] About page with both founders

---

## IMMEDIATE TODO

- [x] **Sitemap resubmitted** in Search Console (289 pages discovered, Mar 15)
- [ ] **Affiliate programs**: Awin (ZenBusiness) applied Mar 15, CJ Affiliate (LegalZoom) account created Mar 15, Northwest pending
- [ ] **Swap referral URLs** into 50 LLC pages once affiliate links received
- [ ] **Check AdSense** approval status (submitted Mar 13)

## NEXT CONTENT TO BUILD

- [x] ~~Minimum Wage by State — 51 pages (`/minimum-wage/[state]`)~~ DONE
- [ ] More calculators (unit converter, currency converter)
- [ ] More guide articles (tax guides, side hustle ideas, credit score)
- [ ] Spanish/bilingual content
- [ ] More programmatic pages (cost of living comparison tool, etc.)

## FUTURE PHASES

### Phase 3: Monetization Optimization
- [ ] Optimize ad placements once AdSense approved
- [ ] Digital products (spreadsheet templates, financial planning guides)
- [ ] Switch to Ezoic when traffic justifies it

### Phase 4: Scale
- [ ] Apply for Mediavine at 50K sessions
- [ ] Email list building
- [ ] Sponsored content
- [ ] Build kubocoins.com (crypto calculators + guides, same stack)

---

## OWNER PROFILES

- **Alexander O.M.** — MBA Entrepreneurship + BSc Engineering (University of Westminster, London). Business consultant, financial educator, entrepreneur. GitHub: aom0101z1. Website: alexanderom.com
- **Vanessa O.G.** — Professional Educator & Entrepreneur. Bilingual educator, HR management, organizational leadership. Co-founder of several businesses with Alexander.

**Key Principle**: REVENUE FIRST — every decision must prioritize income generation.

---

## SITE CONFIG

```typescript
// src/lib/site-config.ts
{
  name: "Kubo Money",
  tagline: "Build Your Financial Foundation",
  url: "https://kubomoney.com",
  adsenseId: "ca-pub-1474229931660831",
  authors: ["Alexander O.M.", "Vanessa O.G."]
}
```

---

*Last updated: March 15, 2026 — 349 pages live*
