"use client";

import { useState, useMemo } from "react";

function formatCurrency(n: number): string {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

interface AmortizationRow {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(350000);
  const [downPayment, setDownPayment] = useState(70000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(6.5);
  const [showAmortization, setShowAmortization] = useState(false);

  const loanAmount = homePrice - downPayment;

  const results = useMemo(() => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;

    if (principal <= 0 || monthlyRate <= 0 || numPayments <= 0) {
      return null;
    }

    const monthlyPayment =
      (principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);

    const totalPaid = monthlyPayment * numPayments;
    const totalInterest = totalPaid - principal;

    // Amortization schedule
    const schedule: AmortizationRow[] = [];
    let balance = principal;
    for (let month = 1; month <= numPayments; month++) {
      const interestPmt = balance * monthlyRate;
      const principalPmt = monthlyPayment - interestPmt;
      balance -= principalPmt;
      schedule.push({
        month,
        payment: monthlyPayment,
        principal: principalPmt,
        interest: interestPmt,
        balance: Math.max(0, balance),
      });
    }

    return { monthlyPayment, totalPaid, totalInterest, schedule };
  }, [loanAmount, loanTerm, interestRate]);

  const handleDownPaymentChange = (value: number) => {
    setDownPayment(value);
    setDownPaymentPercent(
      homePrice > 0 ? Math.round((value / homePrice) * 100) : 0
    );
  };

  const handleDownPaymentPercentChange = (percent: number) => {
    setDownPaymentPercent(percent);
    setDownPayment(Math.round((percent / 100) * homePrice));
  };

  const handleHomePriceChange = (value: number) => {
    setHomePrice(value);
    setDownPayment(Math.round((downPaymentPercent / 100) * value));
  };

  const principalPercent = results
    ? (loanAmount / results.totalPaid) * 100
    : 0;
  const interestPercent = results
    ? (results.totalInterest / results.totalPaid) * 100
    : 0;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-lg">
      {/* Input Section */}
      <div className="grid gap-6 p-6 md:grid-cols-2 md:p-8">
        {/* Home Price */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Home Price
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              $
            </span>
            <input
              type="number"
              value={homePrice}
              onChange={(e) => handleHomePriceChange(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 pl-7 pr-4 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200"
            />
          </div>
        </div>

        {/* Down Payment */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Down Payment
          </label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                $
              </span>
              <input
                type="number"
                value={downPayment}
                onChange={(e) =>
                  handleDownPaymentChange(Number(e.target.value))
                }
                className="w-full rounded-lg border border-gray-300 py-3 pl-7 pr-4 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200"
              />
            </div>
            <div className="relative w-24">
              <input
                type="number"
                value={downPaymentPercent}
                onChange={(e) =>
                  handleDownPaymentPercentChange(Number(e.target.value))
                }
                className="w-full rounded-lg border border-gray-300 py-3 pl-4 pr-8 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                %
              </span>
            </div>
          </div>
        </div>

        {/* Loan Term */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Loan Term
          </label>
          <div className="flex gap-2">
            {[15, 20, 30].map((term) => (
              <button
                key={term}
                onClick={() => setLoanTerm(term)}
                className={`flex-1 rounded-lg border py-3 text-lg font-medium transition ${
                  loanTerm === term
                    ? "border-teal-600 bg-teal-600 text-white"
                    : "border-gray-300 bg-white text-gray-700 hover:border-teal-300"
                }`}
              >
                {term} yr
              </button>
            ))}
          </div>
        </div>

        {/* Interest Rate */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Interest Rate (%)
          </label>
          <div className="relative">
            <input
              type="number"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 py-3 pl-4 pr-8 text-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
              %
            </span>
          </div>
        </div>
      </div>

      {/* Results Section */}
      {results && (
        <div className="border-t border-gray-200 bg-gradient-to-br from-teal-50 to-emerald-50 p-6 md:p-8">
          {/* Monthly Payment */}
          <div className="mb-6 text-center">
            <p className="mb-1 text-sm font-medium text-gray-600">
              Estimated Monthly Payment
            </p>
            <p className="text-5xl font-extrabold text-teal-700">
              {formatCurrency(results.monthlyPayment)}
            </p>
            <p className="mt-1 text-sm text-gray-500">
              on a {formatCurrency(loanAmount)} loan
            </p>
          </div>

          {/* Breakdown */}
          <div className="mb-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-white p-4 text-center shadow-sm">
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                Loan Amount
              </p>
              <p className="text-xl font-bold text-gray-900">
                {formatCurrency(loanAmount)}
              </p>
            </div>
            <div className="rounded-lg bg-white p-4 text-center shadow-sm">
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                Total Interest
              </p>
              <p className="text-xl font-bold text-red-600">
                {formatCurrency(results.totalInterest)}
              </p>
            </div>
            <div className="rounded-lg bg-white p-4 text-center shadow-sm">
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                Total Cost
              </p>
              <p className="text-xl font-bold text-gray-900">
                {formatCurrency(results.totalPaid)}
              </p>
            </div>
          </div>

          {/* Visual Bar */}
          <div className="mb-6">
            <div className="mb-2 flex justify-between text-sm">
              <span className="flex items-center gap-1">
                <span className="inline-block h-3 w-3 rounded-sm bg-teal-600" />
                Principal ({principalPercent.toFixed(1)}%)
              </span>
              <span className="flex items-center gap-1">
                <span className="inline-block h-3 w-3 rounded-sm bg-red-400" />
                Interest ({interestPercent.toFixed(1)}%)
              </span>
            </div>
            <div className="flex h-4 overflow-hidden rounded-full">
              <div
                className="bg-teal-600 transition-all"
                style={{ width: `${principalPercent}%` }}
              />
              <div
                className="bg-red-400 transition-all"
                style={{ width: `${interestPercent}%` }}
              />
            </div>
          </div>

          {/* Amortization Toggle */}
          <button
            onClick={() => setShowAmortization(!showAmortization)}
            className="mx-auto flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50"
          >
            {showAmortization ? "Hide" : "Show"} Amortization Schedule
            <span
              className={`transition-transform ${showAmortization ? "rotate-180" : ""}`}
            >
              ▼
            </span>
          </button>

          {/* Amortization Table */}
          {showAmortization && (
            <div className="mt-6 max-h-96 overflow-auto rounded-lg border border-gray-200">
              <table className="w-full text-sm">
                <thead className="sticky top-0 bg-gray-100">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold">Year</th>
                    <th className="px-3 py-2 text-right font-semibold">
                      Payment
                    </th>
                    <th className="px-3 py-2 text-right font-semibold">
                      Principal
                    </th>
                    <th className="px-3 py-2 text-right font-semibold">
                      Interest
                    </th>
                    <th className="px-3 py-2 text-right font-semibold">
                      Balance
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {results.schedule
                    .filter((row) => row.month % 12 === 0 || row.month === 1)
                    .map((row) => (
                      <tr
                        key={row.month}
                        className="border-t border-gray-100 hover:bg-teal-50"
                      >
                        <td className="px-3 py-2">
                          {row.month === 1
                            ? "Month 1"
                            : `Year ${row.month / 12}`}
                        </td>
                        <td className="px-3 py-2 text-right">
                          {formatCurrency(row.payment)}
                        </td>
                        <td className="px-3 py-2 text-right text-teal-600">
                          {formatCurrency(row.principal)}
                        </td>
                        <td className="px-3 py-2 text-right text-red-500">
                          {formatCurrency(row.interest)}
                        </td>
                        <td className="px-3 py-2 text-right font-medium">
                          {formatCurrency(row.balance)}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
