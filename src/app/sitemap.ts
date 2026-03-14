import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

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

  const allPages = [...staticPages, ...calculatorPages];

  return allPages.map((page) => ({
    url: page.url,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: page.priority,
  }));
}
