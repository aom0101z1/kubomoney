import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description: `${siteConfig.name} provides free financial calculators and business tools. Built by ${siteConfig.author.name}.`,
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">About {siteConfig.name}</h1>
      <div className="article-body">
        <p>{siteConfig.name} provides free, accurate financial calculators and business tools to help you make smarter financial decisions. No signup required, no hidden fees &mdash; just useful tools.</p>

        <h2>Our Mission</h2>
        <p>We believe everyone deserves access to quality financial tools and education. Whether you&apos;re buying your first home, planning for retirement, or starting a business, our calculators give you the numbers you need to make informed decisions.</p>

        <h2>Meet the Founders</h2>
        <p>
          {siteConfig.name} is built and maintained by <strong>Alexander O.M.</strong> and <strong>Vanessa O.G.</strong> &mdash; a husband-and-wife team of entrepreneurs, educators, and business consultants. Together, they have co-founded several businesses while also serving as educators at both private and public institutions.
        </p>

        <div className="my-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="!mt-0 mb-1 text-lg font-bold text-gray-900">Alexander O.M.</h3>
            <p className="mb-3 text-sm font-medium text-teal-700">MBA, BSc Engineering</p>
            <p className="text-sm text-gray-700">
              Business consultant, financial educator, and entrepreneur with a Master&apos;s in Business &amp; Entrepreneurship and a First Class BSc in Engineering from the University of Westminster, London. Alexander combines hands-on business experience with technical expertise to build practical financial tools and guide aspiring entrepreneurs.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="!mt-0 mb-1 text-lg font-bold text-gray-900">Vanessa O.G.</h3>
            <p className="mb-3 text-sm font-medium text-teal-700">Professional Educator &amp; Entrepreneur</p>
            <p className="text-sm text-gray-700">
              Bilingual educator, entrepreneur, and business consultant with extensive experience in human resources management and organizational leadership. Vanessa brings deep expertise in education, team development, and business operations, having built and managed ventures across multiple industries.
            </p>
          </div>
        </div>

        <p>
          Their shared passion for education and entrepreneurship drives {siteConfig.name}&apos;s mission: making financial knowledge accessible to everyone, whether in English or Spanish, through practical tools and straightforward guidance.
        </p>

        <h2>Accuracy &amp; Disclaimer</h2>
        <p>Our calculators use standard financial formulas and are regularly tested for accuracy. However, they are for educational and informational purposes only. Always consult with a qualified financial advisor before making major financial decisions.</p>

        <h2>Contact</h2>
        <p>Have feedback or suggestions? We&apos;d love to hear from you. Reach out via our <a href="/contact">contact page</a>.</p>
      </div>
    </article>
  );
}
