import { getScorecardData } from "@/lib/data";
import ScorecardTable from "@/components/scorecard/ScorecardTable";
import Link from "next/link";

export default function HomePage() {
  const data = getScorecardData();

  return (
    <>
      <header className="mb-12 max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          From Workslop to Working Document
        </h1>
        <p className="text-xl text-muted italic font-[family-name:var(--font-display)] mb-6">
          When AI creates the problem and AI solves it, the difference is the
          human in the loop
        </p>
        <p className="text-stone-600 leading-relaxed">
          A client used AI to draft internal guidance for optimizing press
          releases and blog posts for AI visibility. Parts of it were useful,
          and parts were completely misleading or downright wrong &mdash; which
          is what makes{" "}
          <a
            href="https://www.betterup.com/workslop"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground"
          >
            workslop
          </a>{" "}
          (<a
            href="https://hbr.org/2025/09/ai-generated-workslop-is-destroying-productivity"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground"
          >via HBR</a>)
          {" "}dangerous.
        </p>
        <p className="text-stone-600 leading-relaxed mt-3">
          Experts at the firm used AI to counter AI: scoring it, rewriting it,
          and documenting every decision so others can learn from the process.
        </p>
        <p className="text-stone-600 leading-relaxed mt-3">
          The results make the case: AI is only as good as the human
          directing it.
        </p>
        <p className="text-stone-600 leading-relaxed mt-3">
          Hover over the row and column headers to get oriented, then explore
          the results below. Or read the{" "}
          <Link href="/about" className="underline hover:text-foreground">
            backstory
          </Link>
          , or jump straight to the{" "}
          <Link href="/client-advice" className="underline hover:text-foreground">
            client advice
          </Link>
          .
        </p>
      </header>
      <ScorecardTable data={data} />
    </>
  );
}
