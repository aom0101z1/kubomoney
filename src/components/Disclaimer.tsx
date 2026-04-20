interface DisclaimerProps {
  kind?: "financial" | "legal" | "tax";
  className?: string;
}

const TEXT = {
  financial:
    "This page is for educational and informational purposes only and does not constitute financial, investment, or tax advice. Figures are estimates based on publicly available data and standard formulas — always verify with official sources and consult a qualified financial advisor before making decisions.",
  legal:
    "This page is for educational and informational purposes only and does not constitute legal advice. LLC formation requirements, fees, and processes change frequently — always verify current requirements with the relevant state filing agency and consult a licensed attorney for your specific situation.",
  tax:
    "This page is for educational and informational purposes only and does not constitute tax advice. Tax rates, thresholds, and rules change each year and can vary by jurisdiction and individual circumstances — always verify current rates with the relevant tax authority and consult a licensed tax professional before filing.",
};

export default function Disclaimer({ kind = "financial", className = "" }: DisclaimerProps) {
  return (
    <aside
      role="note"
      className={`mt-10 rounded-lg border border-gray-200 bg-gray-50 px-5 py-4 text-xs leading-relaxed text-gray-600 ${className}`}
    >
      <p className="!my-0">
        <strong className="text-gray-800">Disclaimer:</strong> {TEXT[kind]}
      </p>
    </aside>
  );
}
