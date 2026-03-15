import Link from "next/link";
import { documents } from "@/data/documents";
import ScoreBadge from "@/components/detail/ScoreBadge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rewrites | Anatomy of a Rewrite",
};

export default function RewritesPage() {
  const scoredDocs = documents.filter((d) => d.score !== undefined);
  const unscoredDocs = documents.filter((d) => d.score === undefined);

  return (
    <>
      <header className="mb-12 max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          The Rewrites
        </h1>
        <p className="text-xl text-muted italic font-[family-name:var(--font-display)] mb-6">
          Read the full text of every document evaluated in the scorecard
        </p>
        <p className="text-stone-600 leading-relaxed">
          Five AI systems were given the same task: rewrite a corporate
          communications guide about optimizing content for AI-powered search.
          Below you can read the complete text of each version &mdash; from the
          original client document to the four AI-generated rewrites &mdash;
          plus the Ideal Composite benchmark. Select any document to read it in
          full.
        </p>
      </header>

      <div className="space-y-4">
        {scoredDocs.map((doc) => (
          <Link
            key={doc.id}
            href={`/rewrites/${doc.id}`}
            className="block group"
          >
            <div className="flex items-start gap-5 p-5 rounded-xl border border-stone-200 bg-white hover:border-stone-300 hover:shadow-md transition-all duration-200">
              {doc.score !== undefined && (
                <ScoreBadge score={doc.score} size="lg" />
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-3 mb-1">
                  <h2 className="text-lg font-semibold text-foreground group-hover:text-stone-900">
                    {doc.title}
                  </h2>
                  <span className="text-xs text-muted shrink-0">
                    {doc.wordCount.toLocaleString()} words
                  </span>
                </div>
                <p className="text-sm text-muted mb-2">{doc.subtitle}</p>
                <p className="text-sm text-stone-500 leading-relaxed line-clamp-2">
                  {doc.description}
                </p>
              </div>
              <svg
                className="w-5 h-5 text-muted/40 group-hover:text-stone-500 shrink-0 mt-1 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>

      {unscoredDocs.length > 0 && (
        <div className="mt-10">
          <h2 className="text-sm font-semibold text-muted uppercase tracking-wider mb-4">
            Benchmark
          </h2>
          {unscoredDocs.map((doc) => (
            <Link
              key={doc.id}
              href={`/rewrites/${doc.id}`}
              className="block group"
            >
              <div className="flex items-start gap-5 p-5 rounded-xl border border-dashed border-stone-300 bg-stone-50/50 hover:border-stone-400 hover:shadow-md transition-all duration-200">
                <div className="w-14 h-14 flex items-center justify-center shrink-0 rounded-xl bg-stone-200 text-stone-500">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-3 mb-1">
                    <h2 className="text-lg font-semibold text-foreground group-hover:text-stone-900">
                      {doc.title}
                    </h2>
                    <span className="text-xs text-muted shrink-0">
                      {doc.wordCount.toLocaleString()} words
                    </span>
                    <span className="text-xs text-stone-400 italic shrink-0">
                      Not scored
                    </span>
                  </div>
                  <p className="text-sm text-muted mb-2">{doc.subtitle}</p>
                  <p className="text-sm text-stone-500 leading-relaxed line-clamp-2">
                    {doc.description}
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-muted/40 group-hover:text-stone-500 shrink-0 mt-1 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
