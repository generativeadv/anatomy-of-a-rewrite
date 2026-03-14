import { getScorecardData } from "@/lib/data";
import ScorecardTable from "@/components/scorecard/ScorecardTable";
import Link from "next/link";

export default function HomePage() {
  const data = getScorecardData();

  return (
    <>
      <header className="mb-12 max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Anatomy of a Rewrite
        </h1>
        <p className="text-xl text-muted italic font-[family-name:var(--font-display)] mb-6">
          How five AI systems tackled the same task &mdash; and what their
          outputs reveal about evaluating AI work
        </p>
        <p className="text-stone-600 leading-relaxed">
          This scorecard evaluates five attempts to rewrite a corporate
          communications guide about optimizing content for AI-powered search.
          The original document, written by the client&apos;s internal team using
          ChatGPT and Gemini, contained practical advice but significant
          technical inaccuracies and fabricated statistics &mdash; a case study
          in what has become known as &ldquo;workslop.&rdquo; Each rewrite was
          produced by a different AI model or agency tool using the same base
          prompt, and the results varied dramatically. Explore the scores below
          to understand what separates a strong AI output from a weak one. For
          the full story of how and why this evaluation was created, see
          the{" "}
          <Link href="/about" className="underline hover:text-foreground">
            About
          </Link>{" "}
          section.
        </p>
      </header>
      <ScorecardTable data={data} />
    </>
  );
}
