import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Business Guides - Start and Grow Your Business",
  description: "Free business guides: how to start an LLC, business formation by state, startup costs, and more. Expert advice for entrepreneurs.",
};

export default function BusinessGuidesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Business Guides</h1>
      <p className="mb-10 text-lg text-gray-600">Expert guides to help you start and grow your business. From LLC formation to business planning.</p>
      <div className="rounded-xl border border-teal-200 bg-teal-50 p-8 text-center">
        <span className="mb-4 block text-5xl">🚀</span>
        <h2 className="mb-2 text-xl font-bold text-gray-900">Coming Soon</h2>
        <p className="text-gray-600">We&apos;re working on comprehensive business formation guides for all 50 US states. Check back soon!</p>
        <Link href="/calculators" className="mt-4 inline-block rounded-lg bg-teal-600 px-6 py-3 font-semibold text-white hover:bg-teal-700">Browse Calculators</Link>
      </div>
    </div>
  );
}
