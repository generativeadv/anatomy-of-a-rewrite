import Link from "next/link";
import { documents } from "@/data/documents";
import ScoreBadge from "@/components/detail/ScoreBadge";
import ChatCTA from "@/components/chat/ChatCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rewrites | From Workslop to Working Document",
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

      {/* Ideal Composite — lead with the result */}
      {unscoredDocs.map((doc) => (
        <Link
          key={doc.id}
          href={`/rewrites/${doc.id}`}
          className="block group mb-10"
        >
          <div className="flex items-start gap-5 p-6 rounded-xl border-2 border-amber-200 bg-amber-50/40 hover:border-amber-300 hover:shadow-md transition-all duration-200">
            <div className="w-14 h-14 flex items-center justify-center shrink-0 rounded-xl bg-amber-100 text-amber-600">
              <svg
                className="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
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
                <span className="text-xs font-medium text-amber-600 shrink-0">
                  Reference benchmark
                </span>
              </div>
              <p className="text-sm text-muted mb-2">{doc.subtitle}</p>
              <p className="text-sm text-stone-500 leading-relaxed">
                {doc.description}
              </p>
            </div>
            <svg
              className="w-5 h-5 text-amber-300 group-hover:text-amber-500 shrink-0 mt-1 transition-colors"
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

      {/* The Rewrite Desk CTA */}
      <ChatCTA />

      {/* Scored documents */}
      <h2 className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-4">
        Evaluated Documents
      </h2>
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
                <p className="text-sm text-stone-500 leading-relaxed">
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
    </>
  );
}
