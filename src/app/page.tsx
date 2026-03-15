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
          A client&apos;s AI-generated communications guide &mdash; classic{" "}
          <a
            href="https://hbr.org/2025/09/ai-generated-workslop-is-destroying-productivity"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground"
          >
            workslop
          </a>
          {" "}&mdash; was rewritten by four AI systems using identical prompts.
          Scores ranged from 3.3 to 8.2 out of 10. Explore the results below,
          read the{" "}
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
