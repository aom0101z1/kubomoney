import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { statesSalary } from "@/data/states-salary";
import { statesLLC } from "@/data/states-llc";

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
    { url: `${baseUrl}/personal-finance`, priority: 0.7 },
  ];

  const calculatorPages = calculators.map((slug) => ({
    url: `${baseUrl}/calculators/${slug}`,
    priority: 0.8,
  }));

  const salaryPages = statesSalary.map((s) => ({
    url: `${baseUrl}/salary-by-state/${s.slug}`,
    priority: 0.7,
  }));

  const llcPages = statesLLC.map((s) => ({
    url: `${baseUrl}/llc-by-state/${s.slug}`,
    priority: 0.7,
  }));

  const allPages = [...staticPages, ...calculatorPages, ...salaryPages, ...llcPages];

  return allPages.map((page) => ({
    url: page.url,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: page.priority,
  }));
}
