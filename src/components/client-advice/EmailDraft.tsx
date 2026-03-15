"use client";

import { useState, useRef, useCallback } from "react";

const EMAIL_PLAIN_TEXT = `Hi [Client Name],

Thanks for sharing the AI & External Communications guide and for asking us to weigh in. There's a lot to work with here — the section-by-section structure and worked examples especially. We ran it through Fergus, validated the recommendations against current platform documentation, and produced a revised version that builds on your framework; it's attached.

You'll find the revised guide is very close to yours in structure and goals — it's still organized around helping the comms team understand what matters to AI platforms and why, with practical section-by-section guidance for announcements. We particularly liked the worked examples you included and preserved and built on them throughout. Here are the three most significant ways we augmented it:

1. How training data and search work together. Your guide covered how AI platforms search for and retrieve content in real time — we expanded on this to include a second pathway. AI models also draw on knowledge absorbed during training — patterns learned from the vast body of text they were trained on, which persists even without a live search. The revised guide explains both pathways and how they interact, so the team can think about optimizing content for each: making it clear and well-structured enough to be absorbed into training data over time, while also ensuring it's discoverable and well-formatted for real-time search today.

2. Section-by-section guidance with clear rationale. The revised guide walks through every component of an announcement — headline, subhead, key highlights, lede, context paragraph, quote, subsections, FAQ, boilerplate, and contact information — with explanations of why each element matters to AI platforms. We found that grounding each recommendation in a clear "here's why" makes the guidance easier for the team to internalize and apply with judgment, rather than treating it as a rigid checklist.

3. Tied to published platform documentation. We made an effort to anchor guidance to documentation published by Google, OpenAI, Anthropic, and other model providers. This gives the team a solid reference point they can hew to as the document inevitably evolves over time.

The guide is meant to be a living document — AI platform behavior changes quickly, and we'd recommend reviewing it quarterly or whenever there's a significant shift in how models work, whichever comes first. We're happy to walk through it together whenever works for you, and if it would be helpful, we can also put together a more detailed side-by-side comparison of your original and the revision so the team can see exactly what changed and why.

Thanks again for bringing us in on this — looking forward to discussing.

Best,
[Your Name]`;

export default function EmailDraft() {
  const [copied, setCopied] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_PLAIN_TEXT);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = EMAIL_PLAIN_TEXT;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, []);

  return (
    <section className="border border-stone-200 rounded-xl bg-white shadow-sm mb-12">
      <div className="border-b border-stone-100 px-8 py-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-stone-500 uppercase tracking-wider">
          Suggested Email Draft
        </h2>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-stone-200 text-stone-500 hover:text-stone-700 hover:border-stone-300 hover:bg-stone-50 transition-all duration-150 cursor-pointer"
        >
          {copied ? (
            <>
              <svg
                className="w-3.5 h-3.5 text-emerald-500"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              Copied
            </>
          ) : (
            <>
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9.75a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                />
              </svg>
              Copy to clipboard
            </>
          )}
        </button>
      </div>
      <div
        ref={contentRef}
        className="px-8 py-8 space-y-5 text-stone-700 leading-relaxed"
      >
        <p>Hi [Client Name],</p>

        <p>
          Thanks for sharing the AI &amp; External Communications guide and
          for asking us to weigh in. There&apos;s a lot to work with here
          &mdash; the section-by-section structure and worked examples
          especially. We ran it through Fergus, validated the recommendations
          against current platform documentation, and produced a revised
          version that builds on your framework; it&apos;s attached.
        </p>

        <p>
          You&apos;ll find the revised guide is very close to yours in
          structure and goals &mdash; it&apos;s still organized around helping
          the comms team understand what matters to AI platforms and why, with
          practical section-by-section guidance for announcements. We
          particularly liked the worked examples you included and preserved
          and built on them throughout. Here are the three most significant
          ways we augmented it:
        </p>

        <ol className="list-decimal list-outside ml-6 space-y-4">
          <li>
            <strong>
              How training data and search work together.
            </strong>{" "}
            Your guide covered how AI platforms search for and retrieve content
            in real time &mdash; we expanded on this to include a second
            pathway. AI models
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
            matters to AI platforms. We found that
            grounding each recommendation in a clear &ldquo;here&apos;s
            why&rdquo; makes the guidance easier for the team to internalize
            and apply with judgment, rather than treating it as a rigid
            checklist.
          </li>
          <li>
            <strong>
              Tied to published platform documentation.
            </strong>{" "}
            We made an effort to anchor guidance to documentation published by
            Google, OpenAI, Anthropic, and other model providers. This gives
            the team a solid reference point they can hew to as the document
            inevitably evolves over time.
          </li>
        </ol>

        <p>
          The guide is meant to be a living document &mdash; AI platform
          behavior changes quickly, and we&apos;d recommend reviewing it
          quarterly or whenever there&apos;s a significant shift in how
          models work, whichever comes first. We&apos;re happy to walk
          through it
          together whenever works for you, and if it would be helpful, we can
          also put together a more detailed side-by-side comparison of your
          original and the revision so the team can see exactly what changed
          and why.
        </p>

        <p>
          Thanks again for bringing us in on this &mdash; looking forward to
          discussing.
        </p>

        <p>Best,<br />[Your Name]</p>
      </div>
    </section>
  );
}
