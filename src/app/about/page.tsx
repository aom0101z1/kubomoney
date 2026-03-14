import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description: `${siteConfig.name} provides free financial calculators and business tools. Built by ${siteConfig.author.name}, ${siteConfig.author.title}.`,
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">About {siteConfig.name}</h1>
      <div className="prose prose-lg max-w-none">
        <p>{siteConfig.name} provides free, accurate financial calculators and business tools to help you make smarter financial decisions. No signup required, no hidden fees &mdash; just useful tools.</p>
        <h2>Our Mission</h2>
        <p>We believe everyone deserves access to quality financial tools and education. Whether you&apos;re buying your first home, planning for retirement, or starting a business, our calculators give you the numbers you need to make informed decisions.</p>
        <h2>About the Author</h2>
        <p><strong>{siteConfig.author.name}</strong> &mdash; {siteConfig.author.bio}</p>
        <p>With experience in business consulting, financial education, and technology, Alexander combines practical financial knowledge with technical expertise to build tools that are both accurate and easy to use.</p>
        <h2>Accuracy &amp; Disclaimer</h2>
        <p>Our calculators use standard financial formulas and are regularly tested for accuracy. However, they are for educational and informational purposes only. Always consult with a qualified financial advisor before making major financial decisions.</p>
        <h2>Contact</h2>
        <p>Have feedback or suggestions? We&apos;d love to hear from you. Reach out via our <a href="/contact">contact page</a>.</p>
      </div>
    </article>
  );
}
