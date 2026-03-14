import Link from "next/link";
import type { NavTarget } from "@/lib/types";

export default function PrevNextNav({
  prev,
  next,
}: {
  prev: NavTarget | null;
  next: NavTarget | null;
}) {
  return (
    <nav className="mt-16 pt-8 border-t border-border">
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/"
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          &larr; Back to Scorecard
        </Link>
        <div className="flex items-center gap-6">
          {prev && (
            <Link
              href={`/scores/${prev.attributeId}/${prev.columnId}`}
              className="text-sm text-muted hover:text-foreground transition-colors text-right"
            >
              <span className="block text-xs text-muted/70">&larr; Previous</span>
              <span>
                {prev.attributeLabel} / {prev.columnLabel}
              </span>
            </Link>
          )}
          {next && (
            <Link
              href={`/scores/${next.attributeId}/${next.columnId}`}
              className="text-sm text-muted hover:text-foreground transition-colors text-left"
            >
              <span className="block text-xs text-muted/70">Next &rarr;</span>
              <span>
                {next.attributeLabel} / {next.columnLabel}
              </span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
