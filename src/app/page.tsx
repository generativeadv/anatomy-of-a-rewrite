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
          A client used AI to draft internal guidance for optimizing owned
          content (press releases and blog posts) for AI visibility.
        </p>
        <p className="text-stone-600 leading-relaxed mt-3">
          Parts of it were useful, and parts were misleading or downright
          wrong, while appearing highly polished and confident &mdash; the very
          definition of{" "}
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
          >via HBR</a>).
        </p>
        <p className="text-stone-600 leading-relaxed mt-3">
          One way to efficiently and effectively provide feedback on thousands
          of words of client-generated AI workslop? Why, AI of course &ndash;
          just implemented better and evaluated with a keen eye!
        </p>
        <p className="text-stone-600 leading-relaxed mt-3">
          This site documents one man&apos;s (possibly quixotic) quest to
          develop a revision and client cover note, compare Fergus to other AI
          systems in a real-world scenario (while respecting client
          confidentiality), share insights with colleagues, and experiment with
          Claude Code.
        </p>
        <p className="text-stone-600 leading-relaxed mt-3">
          Hover over the row and column headers to get oriented, read the{" "}
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
