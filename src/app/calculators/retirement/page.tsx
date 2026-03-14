import type { Metadata } from "next";
import RetirementCalculator from "./RetirementCalculator";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "Retirement Calculator - Are You Saving Enough?",
  description: "Free retirement calculator. See if you're on track to retire comfortably. Calculate projected savings, required nest egg, and monthly contribution needed.",
};

export default function RetirementPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-10">
      <nav className="mb-6 text-sm text-gray-500">
        <a href="/" className="hover:text-teal-600">Home</a>{" / "}
        <a href="/calculators" className="hover:text-teal-600">Calculators</a>{" / "}
        <span className="text-gray-900">Retirement Calculator</span>
      </nav>
      <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Retirement Calculator</h1>
      <p className="mb-8 text-lg text-gray-600">Plan your retirement and find out if your savings strategy will meet your goals. Adjust your contributions, return rate, and retirement age to see different scenarios.</p>
      <RetirementCalculator />
      <AdUnit className="my-10" />
      <section className="article-body">
        <h2>The 4% Rule Explained</h2>
        <p>The 4% rule suggests you can safely withdraw 4% of your retirement savings each year without running out of money over a 30-year retirement. To find your target nest egg, multiply your desired annual income by 25.</p>
        <p>For example, if you want $60,000/year in retirement, you need $60,000 &times; 25 = $1,500,000 saved.</p>
        <h2>How Much Should You Save for Retirement?</h2>
        <ul>
          <li><strong>Age 30:</strong> Aim to have 1x your annual salary saved</li>
          <li><strong>Age 40:</strong> Aim to have 3x your annual salary saved</li>
          <li><strong>Age 50:</strong> Aim to have 6x your annual salary saved</li>
          <li><strong>Age 60:</strong> Aim to have 8x your annual salary saved</li>
          <li><strong>Age 67:</strong> Aim to have 10x your annual salary saved</li>
        </ul>
        <h2>Don&apos;t Forget About Inflation</h2>
        <p>At 3% inflation, $60,000 today will only have the purchasing power of about $24,000 in 30 years. This calculator accounts for inflation so you can see the real income you&apos;ll need.</p>
      </section>
      <AdUnit className="my-10" />
    </article>
  );
}
