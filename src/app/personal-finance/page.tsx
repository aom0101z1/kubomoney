import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Personal Finance Guides - Budgeting, Investing & More",
  description: "Free personal finance guides: budgeting strategies, investing for beginners, debt payoff plans, and retirement planning tips.",
};

export default function PersonalFinancePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Personal Finance Guides</h1>
      <p className="mb-10 text-lg text-gray-600">Master your money with our practical personal finance guides.</p>
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <span className="mb-4 block text-5xl">💡</span>
        <h2 className="mb-2 text-xl font-bold text-gray-900">Coming Soon</h2>
        <p className="text-gray-600">In-depth guides on budgeting, investing, and building wealth are on the way.</p>
        <Link href="/calculators" className="mt-4 inline-block rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700">Browse Calculators</Link>
      </div>
    </div>
  );
}
