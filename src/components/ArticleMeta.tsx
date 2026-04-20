import Link from "next/link";

interface ArticleMetaProps {
  updated?: string;
  reviewer?: "alexander" | "vanessa" | "both";
}

const REVIEWERS = {
  alexander: {
    name: "Alexander O.M.",
    credentials: "MBA, BSc Engineering",
  },
  vanessa: {
    name: "Vanessa O.G.",
    credentials: "Educator & Entrepreneur",
  },
} as const;

function defaultUpdated(): string {
  const d = new Date();
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export default function ArticleMeta({ updated, reviewer = "alexander" }: ArticleMetaProps) {
  const dateStr = updated ?? defaultUpdated();

  const bylineNodes =
    reviewer === "both" ? (
      <>
        Reviewed by{" "}
        <Link href="/about" className="font-medium text-gray-800 hover:text-teal-700">
          {REVIEWERS.alexander.name}
        </Link>
        {" "}&amp;{" "}
        <Link href="/about" className="font-medium text-gray-800 hover:text-teal-700">
          {REVIEWERS.vanessa.name}
        </Link>
      </>
    ) : (
      <>
        Reviewed by{" "}
        <Link href="/about" className="font-medium text-gray-800 hover:text-teal-700">
          {REVIEWERS[reviewer].name}
        </Link>
        <span className="text-gray-500">, {REVIEWERS[reviewer].credentials}</span>
      </>
    );

  return (
    <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-1 border-y border-gray-200 py-3 text-sm text-gray-600">
      <span>{bylineNodes}</span>
      <span className="text-gray-400">•</span>
      <span>
        Updated <time>{dateStr}</time>
      </span>
    </div>
  );
}
