"use client";

import { useState, useMemo } from "react";

function fmt(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

export default function HomeAffordabilityCalculator() {
  const [annualIncome, setAnnualIncome] = useState(75000);
  const [monthlyDebts, setMonthlyDebts] = useState(400);
  const [downPayment, setDownPayment] = useState(40000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [propertyTaxRate, setPropertyTaxRate] = useState(1.2);
  const [insuranceMonthly, setInsuranceMonthly] = useState(150);

  const results = useMemo(() => {
    const monthlyIncome = annualIncome / 12;
    const maxHousingPayment = monthlyIncome * 0.28;
    const maxTotalDebt = monthlyIncome * 0.36;
    const maxPaymentFromDTI = maxTotalDebt - monthlyDebts;
    const affordablePayment = Math.min(maxHousingPayment, maxPaymentFromDTI);

    const monthlyTaxInsurance = insuranceMonthly + (propertyTaxRate / 100 / 12) * 300000;
    const piPayment = Math.max(0, affordablePayment - insuranceMonthly);

    const r = interestRate / 100 / 12;
    const n = loanTerm * 12;

    let loanAmount: number;
    if (r === 0) {
      loanAmount = piPayment * n;
    } else {
      loanAmount = piPayment * (Math.pow(1 + r, n) - 1) / (r * Math.pow(1 + r, n));
    }

    const iterateForTax = () => {
      let homePrice = loanAmount + downPayment;
      for (let i = 0; i < 5; i++) {
        const monthlyTax = (homePrice * propertyTaxRate / 100) / 12;
        const availableForPI = Math.max(0, affordablePayment - insuranceMonthly - monthlyTax);
        if (r === 0) {
          loanAmount = availableForPI * n;
        } else {
          loanAmount = availableForPI * (Math.pow(1 + r, n) - 1) / (r * Math.pow(1 + r, n));
        }
        homePrice = loanAmount + downPayment;
      }
      return homePrice;
    };

    const homePrice = iterateForTax();
    const finalLoan = homePrice - downPayment;
    const monthlyTax = (homePrice * propertyTaxRate / 100) / 12;
    let monthlyPI: number;
    if (r === 0) {
      monthlyPI = finalLoan / n;
    } else {
      monthlyPI = finalLoan * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    }
    const totalMonthly = monthlyPI + monthlyTax + insuranceMonthly;
    const dti = monthlyIncome > 0 ? ((totalMonthly + monthlyDebts) / monthlyIncome) * 100 : 0;

    return {
      homePrice: Math.max(0, homePrice),
      loanAmount: Math.max(0, finalLoan),
      monthlyPayment: Math.max(0, totalMonthly),
      monthlyPI: Math.max(0, monthlyPI),
      monthlyTax,
      dti,
      affordablePayment,
    };
  }, [annualIncome, monthlyDebts, downPayment, interestRate, loanTerm, propertyTaxRate, insuranceMonthly]);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-lg">
      <div className="grid gap-6 p-6 md:grid-cols-2 md:p-8">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Annual Household Income</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input type="number" value={annualIncome} onChange={(e) => setAnnualIncome(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 pl-7 pr-4 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Monthly Debts (car, student loans, etc.)</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input type="number" value={monthlyDebts} onChange={(e) => setMonthlyDebts(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 pl-7 pr-4 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Down Payment</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input type="number" value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 pl-7 pr-4 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Interest Rate (%)</label>
          <div className="relative">
            <input type="number" step="0.1" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 pl-4 pr-8 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">%</span>
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Loan Term</label>
          <div className="flex gap-2">
            {[15, 20, 30].map((t) => (
              <button key={t} onClick={() => setLoanTerm(t)}
                className={`flex-1 rounded-lg border py-2 text-sm font-medium transition ${loanTerm === t ? "border-teal-600 bg-teal-600 text-white" : "border-gray-300 bg-white text-gray-700 hover:border-teal-300"}`}>
                {t} yr
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Property Tax Rate (%)</label>
          <div className="relative">
            <input type="number" step="0.1" value={propertyTaxRate} onChange={(e) => setPropertyTaxRate(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 pl-4 pr-8 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">%</span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 bg-gradient-to-br from-teal-50 to-emerald-50 p-6 md:p-8">
        <div className="mb-6 text-center">
          <p className="mb-1 text-sm font-medium text-gray-600">You Can Afford a Home Up To</p>
          <p className="text-5xl font-extrabold text-teal-700">{fmt(results.homePrice)}</p>
          <p className="mt-1 text-sm text-gray-500">{fmt(results.monthlyPayment)}/month | DTI: {results.dti.toFixed(1)}%</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Loan Amount</p>
            <p className="text-xl font-bold text-gray-900">{fmt(results.loanAmount)}</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Principal & Interest</p>
            <p className="text-xl font-bold text-gray-900">{fmt(results.monthlyPI)}<span className="text-sm font-normal text-gray-500">/mo</span></p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Property Tax</p>
            <p className="text-xl font-bold text-gray-900">{fmt(results.monthlyTax)}<span className="text-sm font-normal text-gray-500">/mo</span></p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Down Payment</p>
            <p className="text-xl font-bold text-gray-900">{fmt(downPayment)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
