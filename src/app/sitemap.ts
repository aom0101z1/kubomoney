import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { statesSalary } from "@/data/states-salary";
import { statesLLC } from "@/data/states-llc";
import { citiesSalary } from "@/data/cities-salary";
import { citiesCOL } from "@/data/cities-cost-of-living";
import { statesTax } from "@/data/states-tax-rates";
import { statesMinWage } from "@/data/states-minimum-wage";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const calculators = [
    "mortgage",
    "compound-interest",
    "loan-payoff",
    "retirement",
    "salary",
    "debt-to-income",
    "auto-loan",
    "credit-card-payoff",
    "net-worth",
    "inflation",
    "roi",
    "break-even",
    "business-startup-cost",
    "tip",
    "savings-goal",
    "home-affordability",
    "paycheck",
    "emergency-fund",
    "tax-withholding",
    "investment-fee",
  ];

  const staticPages = [
    { url: baseUrl, priority: 1.0 },
    { url: `${baseUrl}/calculators`, priority: 0.9 },
    { url: `${baseUrl}/salary-by-state`, priority: 0.9 },
    { url: `${baseUrl}/llc-by-state`, priority: 0.9 },
    { url: `${baseUrl}/about`, priority: 0.5 },
    { url: `${baseUrl}/privacy`, priority: 0.3 },
    { url: `${baseUrl}/contact`, priority: 0.3 },
    { url: `${baseUrl}/business-guides`, priority: 0.7 },
    { url: `${baseUrl}/business-guides/how-to-start-llc`, priority: 0.8 },
    { url: `${baseUrl}/business-guides/how-to-write-business-plan`, priority: 0.7 },
    { url: `${baseUrl}/business-guides/startup-costs`, priority: 0.7 },
    { url: `${baseUrl}/business-guides/how-to-get-ein`, priority: 0.7 },
    { url: `${baseUrl}/business-guides/best-business-bank-accounts`, priority: 0.7 },
    { url: `${baseUrl}/salary-by-city`, priority: 0.9 },
    { url: `${baseUrl}/cost-of-living`, priority: 0.9 },
    { url: `${baseUrl}/tax-rates`, priority: 0.9 },
    { url: `${baseUrl}/minimum-wage`, priority: 0.9 },
    { url: `${baseUrl}/personal-finance`, priority: 0.7 },
    { url: `${baseUrl}/personal-finance/investing-basics`, priority: 0.8 },
    { url: `${baseUrl}/personal-finance/budgeting-guide`, priority: 0.7 },
    { url: `${baseUrl}/personal-finance/how-to-pay-off-debt`, priority: 0.7 },
    { url: `${baseUrl}/personal-finance/emergency-fund`, priority: 0.7 },
    { url: `${baseUrl}/personal-finance/retirement-planning`, priority: 0.7 },
  ];

  const calculatorPages = calculators.map((slug) => ({
    url: `${baseUrl}/calculators/${slug}`,
    priority: 0.8,
  }));

  const salaryPages = statesSalary
    .filter((s) => !!s.intro)
    .map((s) => ({
      url: `${baseUrl}/salary-by-state/${s.slug}`,
      priority: 0.7,
    }));

  const llcPages = statesLLC
    .filter((s) => !!s.intro)
    .map((s) => ({
      url: `${baseUrl}/llc-by-state/${s.slug}`,
      priority: 0.7,
    }));

  const cityPages = citiesSalary
    .filter((c) => !!c.intro)
    .map((c) => ({
      url: `${baseUrl}/salary-by-city/${c.slug}`,
      priority: 0.7,
    }));

  const colPages = citiesCOL
    .filter((c) => !!c.intro)
    .map((c) => ({
      url: `${baseUrl}/cost-of-living/${c.slug}`,
      priority: 0.7,
    }));

  const taxPages = statesTax
    .filter((s) => !!s.intro)
    .map((s) => ({
      url: `${baseUrl}/tax-rates/${s.slug}`,
      priority: 0.7,
    }));

  const minWagePages = statesMinWage
    .filter((s) => !!s.intro)
    .map((s) => ({
      url: `${baseUrl}/minimum-wage/${s.slug}`,
      priority: 0.7,
    }));

  const allPages = [...staticPages, ...calculatorPages, ...salaryPages, ...llcPages, ...cityPages, ...colPages, ...taxPages, ...minWagePages];

  return allPages.map((page) => ({
    url: page.url,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: page.priority,
  }));
}
