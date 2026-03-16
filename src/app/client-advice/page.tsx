import type { Metadata } from "next";
import EmailDraft from "@/components/client-advice/EmailDraft";

export const metadata: Metadata = {
  title: "Client Advice | From Workslop to Working Document",
};

export default function ClientAdvicePage() {
  return (
    <article className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold tracking-tight mb-4">
        Client Advice
      </h1>
      <p className="text-xl text-muted italic font-[family-name:var(--font-display)] mb-8">
        Materials and recommendations for account leadership
      </p>

      <p className="text-stone-600 leading-relaxed mb-4">
        Below is a suggested email responding to the client&apos;s original
        request for feedback on their AI &amp; External Communications guide.
      </p>
      <p className="text-stone-600 leading-relaxed mb-10">
        The revised{" "}
        <a
          href="/downloads/AI_External_Comms_Guide_Revised.docx"
          download
          className="underline hover:text-foreground transition-colors"
        >
          document
        </a>
        , produced through iterative evaluation using Fergus and multiple
        frontier AI models and pressure-tested against current platform
        documentation, is available for download at the bottom of this page.
        A section-by-section{" "}
        <a
          href="/downloads/AI_External_Comms_Comparison.docx"
          download
          className="underline hover:text-foreground transition-colors"
        >
          comparison
        </a>{" "}
        of the original guide against the revised version, with annotations
        explaining each change, is also available.
      </p>

      <EmailDraft />

      {/* Internal Advisory: Misconceptions in the Original */}
      <section className="border border-amber-200 bg-amber-50/40 rounded-xl p-8 mb-12">
        <div className="flex items-start gap-3 mb-4">
          <svg
            className="w-5 h-5 text-amber-600 shrink-0 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
            />
          </svg>
          <h2 className="text-lg font-semibold text-foreground">
            For Internal Awareness: Claims in the Original That Don&apos;t
            Hold Up
          </h2>
        </div>
        <p className="text-stone-600 leading-relaxed mb-5">
          The email above is deliberately diplomatic &mdash; it focuses on
          what we added rather than what was wrong. But the account team should
          be aware that the client&apos;s original document contained several
          specific claims that are not supported by published platform
          documentation. These were quietly corrected in the revision. Whether
          and how to surface this with the client is a judgment call for the
          account lead &mdash; the information below is here so the team has
          it in their back pocket.
        </p>
        <ul className="space-y-4 text-stone-700 leading-relaxed">
          <li>
            <strong className="text-stone-800">
              A six-step &ldquo;retrieval pipeline&rdquo; presented as
              how AI works internally.
            </strong>{" "}
            The original described a deterministic classification &rarr;
            categorization &rarr; retrieval &rarr; ranking &rarr; weighting
            &rarr; generation pipeline. This misrepresents how models
            actually process content and gives a false sense of precision
            about an opaque system.
          </li>
          <li>
            <strong className="text-stone-800">
              &ldquo;AI assigns discrete classification tags and topic
              buckets.&rdquo;
            </strong>{" "}
            The original described a system where AI assigns fixed hidden
            labels and sorts content into predetermined categories. In
            reality, AI systems work through continuous semantic
            representations &mdash; patterns, not discrete tags. No public
            platform documentation supports this claim.
          </li>
          <li>
            <strong className="text-stone-800">
              Specific percentage uplifts for content elements.
            </strong>{" "}
            The original included a table claiming, for example, that naming
            a specific entity provides a +20% boost to AI visibility, or
            that including a metric provides +25%. No major platform publishes
            a universal citation weighting formula or deterministic boost
            from any content element. These figures appear to be fabricated.
          </li>
          <li>
            <strong className="text-stone-800">
              &ldquo;The first 100&ndash;200 words determine
              everything.&rdquo;
            </strong>{" "}
            The original presented this as a hard rule. Front-loading key
            facts is good practice, but the full page matters &mdash; it
            is not a binary threshold.
          </li>
          <li>
            <strong className="text-stone-800">
              Every announcement needs FAQs and summary bullets.
            </strong>{" "}
            The original treated these as mandatory. They are optional
            structures that should be used when they improve clarity and help
            users &mdash; not as ranking levers.
          </li>
        </ul>
      </section>

      {/* Download Section */}
      <section>
        <h2 className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-4">
          Attachment
        </h2>
        <a
          href="/downloads/AI_External_Comms_Guide_Revised.docx"
          download
          className="flex items-center gap-4 p-5 rounded-xl border border-stone-200 bg-white hover:border-stone-300 hover:shadow-md transition-all duration-200 group"
        >
          <div className="w-12 h-12 flex items-center justify-center shrink-0 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
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
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground group-hover:text-stone-900">
              AI &amp; External Communications Guide (Revised)
            </p>
            <p className="text-xs text-muted mt-0.5">
              Word document &middot; 26 KB
            </p>
          </div>
          <svg
            className="w-5 h-5 text-muted/40 group-hover:text-stone-500 shrink-0 transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </a>
        <a
          href="/downloads/AI_External_Comms_Comparison.docx"
          download
          className="flex items-center gap-4 p-5 rounded-xl border border-stone-200 bg-white hover:border-stone-300 hover:shadow-md transition-all duration-200 group mt-3"
        >
          <div className="w-12 h-12 flex items-center justify-center shrink-0 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
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
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground group-hover:text-stone-900">
              Side-by-Side Comparison: Client Original vs. Ideal Composite
            </p>
            <p className="text-xs text-muted mt-0.5">
              Word document &middot; 34 KB
            </p>
          </div>
          <svg
            className="w-5 h-5 text-muted/40 group-hover:text-stone-500 shrink-0 transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </a>
      </section>
    </article>
  );
}
