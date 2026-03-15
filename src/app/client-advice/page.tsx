import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Advice | Anatomy of a Rewrite",
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

      <p className="text-stone-600 leading-relaxed mb-10">
        Below is a suggested email responding to the client&apos;s original
        request for feedback on their AI &amp; External Communications guide.
        The revised document is available for download at the bottom of this
        page.
      </p>

      {/* Email Draft */}
      <section className="border border-stone-200 rounded-xl bg-white shadow-sm mb-12">
        <div className="border-b border-stone-100 px-8 py-4">
          <h2 className="text-sm font-semibold text-stone-500 uppercase tracking-wider">
            Suggested Email Draft
          </h2>
        </div>
        <div className="px-8 py-8 space-y-5 text-stone-700 leading-relaxed">
          <p>Hi [Client Name],</p>

          <p>
            Thanks for sharing the AI &amp; External Communications guide
            &mdash; it&apos;s clear a lot of thought went into building
            something practical for the team, and the instinct to ground the
            guidance in how AI platforms actually work is exactly right. We
            appreciate you asking for our input.
          </p>

          <p>
            Rather than marking up the existing document, we took a different
            approach: we used it as the foundation for a deeper exploration
            using our AI research tools, pressure-tested the key claims against
            current platform documentation, and produced a revised version of
            the guide that we think will serve the team well. The revised
            document is attached.
          </p>

          <p>
            The core structure and goals of your guide are preserved &mdash;
            it&apos;s still organized around helping the comms team understand
            what matters to AI platforms and why, with practical
            section-by-section guidance for announcements. Here are the five
            most significant ways we built on it:
          </p>

          <ol className="list-decimal list-outside ml-6 space-y-4">
            <li>
              <strong>
                How training data and search work together.
              </strong>{" "}
              Your guide focused primarily on how AI platforms search for and
              retrieve content in real time. That&apos;s an important piece of
              the picture, but it&apos;s only one of two pathways. AI models
              also draw on knowledge absorbed during training &mdash; patterns
              learned from the vast body of text they were trained on, which
              persists even without a live search. The revised guide explains
              both pathways and how they interact, so the team can think about
              optimizing content for each: making it clear and well-structured
              enough to be absorbed into training data over time, while also
              ensuring it&apos;s discoverable and well-formatted for real-time
              search today.
            </li>
            <li>
              <strong>
                Section-by-section guidance with clear rationale.
              </strong>{" "}
              The revised guide walks through every component of an announcement
              &mdash; headline, subhead, key highlights, lede, context
              paragraph, quote, subsections, FAQ, boilerplate, and contact
              information &mdash; with explanations of <em>why</em> each element
              matters to AI platforms, not just what to include. We found that
              grounding each recommendation in a clear &ldquo;here&apos;s
              why&rdquo; makes the guidance easier for the team to internalize
              and apply with judgment, rather than treating it as a rigid
              checklist.
            </li>
            <li>
              <strong>
                Grounded in published platform documentation.
              </strong>{" "}
              We went back to what Google, OpenAI, Anthropic, and other
              platforms have actually published about how their systems work,
              and anchored the guidance there. Where the original included
              specific percentage claims or absolute rules, we replaced those
              with recommendations tied to documented platform behavior. This
              makes the guide more credible if it&apos;s ever shared externally
              and less likely to age poorly as platforms evolve.
            </li>
            <li>
              <strong>
                A measurement and monitoring framework.
              </strong>{" "}
              We added a practical operating rhythm so the team isn&apos;t just
              publishing and hoping for the best: what to check at publish time,
              what to review monthly, and what to audit quarterly. This gives
              the team a way to track whether the guidance is actually working
              and to adjust as platform behavior changes.
            </li>
            <li>
              <strong>
                Common misconceptions addressed directly.
              </strong>{" "}
              There are a number of widely repeated claims about AI and content
              optimization that don&apos;t hold up under scrutiny &mdash; things
              like rigid word-count thresholds or the idea that every
              announcement needs an FAQ section. The revised guide includes a
              section that addresses these head-on so the team can make informed
              judgment calls rather than following rules that may not apply in
              every situation.
            </li>
          </ol>

          <p>
            The guide is meant to be a living document &mdash; AI platform
            behavior changes quickly, and we&apos;d recommend reviewing it
            quarterly to keep it current. We&apos;re happy to walk through it
            together whenever works for you, and to answer any questions the
            team has as they start putting it into practice.
          </p>

          <p>
            Thanks again for the strong starting point. Looking forward to
            discussing.
          </p>

          <p>Best,<br />[Your Name]</p>
        </div>
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
              Word document &middot; 33 KB
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
