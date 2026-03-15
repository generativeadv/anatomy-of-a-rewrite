"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import type { Attribute, Column } from "@/lib/types";
import { getScoreColorClasses } from "@/lib/score-colors";
import ScoreBadge from "@/components/detail/ScoreBadge";

interface MethodologyFlowProps {
  attributes: Attribute[];
  columns: Column[];
}

interface Step {
  number: number;
  title: string;
  summary: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Source Document",
    summary:
      "A client\u2019s AI-generated comms guide \u2014 professional-looking but technically flawed",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    number: 2,
    title: "AI Rewrites",
    summary: "Same prompt given to 4 AI systems, producing 5 versions",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M2.985 19.644l3.181-3.182" />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Evaluation Framework",
    summary:
      "10 qualitative attributes defined to measure document quality",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
      </svg>
    ),
  },
  {
    number: 4,
    title: "Scoring",
    summary:
      "Each document rated 1\u201310 on every attribute, then aggregated",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    number: 5,
    title: "Ideal Composite",
    summary:
      "A benchmark document synthesized from the best elements of each version",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    number: 6,
    title: "Interactive Scorecard",
    summary:
      "Explore every score, hover for summaries, click for full analysis",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M12 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M21.375 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M12 17.25v-5.25" />
      </svg>
    ),
  },
];

export default function MethodologyFlow({
  attributes,
  columns,
}: MethodologyFlowProps) {
  const [openSteps, setOpenSteps] = useState<Set<number>>(new Set());

  const toggleStep = useCallback((stepNumber: number) => {
    setOpenSteps((prev) => {
      const next = new Set(prev);
      if (next.has(stepNumber)) {
        next.delete(stepNumber);
      } else {
        next.add(stepNumber);
      }
      return next;
    });
  }, []);

  return (
    <div className="relative">
      {steps.map((step, idx) => {
        const isOpen = openSteps.has(step.number);
        const isLast = idx === steps.length - 1;

        return (
          <div key={step.number} className="relative flex gap-5">
            {/* Timeline column */}
            <div className="flex flex-col items-center shrink-0">
              {/* Node circle */}
              <button
                onClick={() => toggleStep(step.number)}
                className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isOpen
                    ? "bg-stone-800 text-white shadow-md"
                    : "bg-stone-100 text-stone-500 border-2 border-stone-300 hover:border-stone-400 hover:bg-stone-200"
                }`}
              >
                {step.number}
              </button>
              {/* Connecting line */}
              {!isLast && (
                <div className="w-0.5 flex-1 bg-stone-200 min-h-4" />
              )}
            </div>

            {/* Content column */}
            <div className={`flex-1 ${isLast ? "pb-0" : "pb-6"}`}>
              {/* Clickable header */}
              <button
                onClick={() => toggleStep(step.number)}
                className={`w-full text-left group rounded-xl border transition-all duration-200 cursor-pointer ${
                  isOpen
                    ? "border-stone-300 bg-white shadow-sm"
                    : "border-stone-200 bg-white hover:border-stone-300 hover:shadow-sm"
                }`}
              >
                <div className="flex items-start gap-3 p-4">
                  <div
                    className={`mt-0.5 transition-colors duration-200 ${
                      isOpen ? "text-stone-800" : "text-stone-400 group-hover:text-stone-500"
                    }`}
                  >
                    {step.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className={`text-base font-semibold transition-colors duration-200 ${
                        isOpen ? "text-stone-900" : "text-stone-700 group-hover:text-stone-900"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm text-stone-500 mt-0.5">
                      {step.summary}
                    </p>
                  </div>
                  {/* Chevron */}
                  <svg
                    className={`w-5 h-5 text-stone-400 shrink-0 mt-0.5 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </button>

              {/* Expandable content */}
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="pt-4 pb-2">
                    <StepContent
                      stepNumber={step.number}
                      attributes={attributes}
                      columns={columns}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function StepContent({
  stepNumber,
  attributes,
  columns,
}: {
  stepNumber: number;
  attributes: Attribute[];
  columns: Column[];
}) {
  switch (stepNumber) {
    case 1:
      return <Step1Content />;
    case 2:
      return <Step2Content columns={columns} />;
    case 3:
      return <Step3Content attributes={attributes} />;
    case 4:
      return <Step4Content />;
    case 5:
      return <Step5Content />;
    case 6:
      return <Step6Content />;
    default:
      return null;
  }
}

/* ─── Step 1: Source Document ─── */
function Step1Content() {
  return (
    <div className="rounded-lg bg-stone-50 border border-stone-200 p-5 text-sm text-stone-600 leading-relaxed space-y-3">
      <p>
        A corporate communications team created a guide on optimizing content for
        AI-powered search platforms. It was researched using ChatGPT, Gemini, and
        Google search. The document read confidently, included specific
        statistics, and used professional formatting &mdash; but its technical
        model of how AI systems work was fundamentally incorrect, and many of its
        cited figures were fabricated.
      </p>
      <p>
        This is a textbook example of <strong>&ldquo;<a
          href="https://www.betterup.com/workslop"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-stone-900 transition-colors"
        >workslop</a>&rdquo;</strong>{" "}
        (<a
          href="https://hbr.org/2025/09/ai-generated-workslop-is-destroying-productivity"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-stone-900 transition-colors"
        >via HBR</a>):
        AI-generated output that has the appearance and polish of professional
        work but is misleading or wrong. It demanded a full rewrite, which
        created the opportunity for a structured comparison.
      </p>
    </div>
  );
}

/* ─── Step 2: AI Rewrites ─── */
function Step2Content({ columns }: { columns: Column[] }) {
  return (
    <div className="space-y-4">
      <div className="text-sm text-stone-600 leading-relaxed space-y-3">
        <p>
          A two-step prompting process was used to generate each rewrite. Each
          AI system received the full client document as an attachment alongside
          the prompts below.
        </p>

        {/* Prompt 1 */}
        <div>
          <p className="font-medium text-stone-700 mb-1.5">
            Step 1: Initial test
          </p>
          <p className="text-stone-500 mb-2">
            The first prompt was applied to ~900 words from the opening section
            of the client document, attached to the message:
          </p>
          <div className="bg-stone-100 border-l-4 border-stone-400 rounded-r-lg p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2">
              Prompt 1
            </p>
            <p className="text-stone-800 font-mono text-xs leading-relaxed">
              you&apos;re a researcher at a frontier AI lab. the below text is an
              attempt from a client to explain how frontier LLM&apos;s work to
              their corporate communications organization for the purposes of
              education and content optimization. i get the sense it&apos;s
              pretty innacurate. give me your feedback on it as is, and if
              it&apos;s generally inaccurate, rewrite it:
            </p>
          </div>
        </div>

        {/* Prompt 2 */}
        <div>
          <p className="font-medium text-stone-700 mb-1.5">
            Step 2: Full rewrite
          </p>
          <p className="text-stone-500 mb-2">
            Based on the AI&apos;s performance on the initial test, the full
            client document (~5,200 words) was attached with this follow-up
            prompt:
          </p>
          <div className="bg-stone-100 border-l-4 border-stone-400 rounded-r-lg p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2">
              Prompt 2
            </p>
            <p className="text-stone-800 font-mono text-xs leading-relaxed">
              This is a solid rewrite, good job. That was a section of a much
              longer document. With this background in mind, evaluate the entire
              document and rewrite it so it accurately represents how models work
              and provides modern up-to-date guidance on best practices as of
              today March 14 2026.
            </p>
          </div>
        </div>

        <p>
          This identical two-step process was applied to the agency&apos;s
          proprietary AI tool (&ldquo;Fergus&rdquo;), ChatGPT 5.4 Pro, and
          Claude Opus 4.6 Extended. The prompts were oriented toward
          extended-reasoning models &mdash; a different architectural profile
          than Fergus, which is built on Gemini 3.0 Flash and optimized for
          speed and efficiency. Before testing the frontier models outside
          the firm&apos;s IT environment, the document was anonymized
          &mdash; all client-identifying information was stripped and replaced
          with a fictional brand &mdash; and memory/training features were
          turned off to prevent content retention. The Fergus output from
          Step 2 is evaluated as <strong>Fergus v1</strong>.
        </p>

        {/* Fergus v2 prompt */}
        <div>
          <p className="font-medium text-stone-700 mb-1.5">
            Fergus v2: A second attempt
          </p>
          <p className="text-stone-500 mb-2">
            Fergus v1 was far shorter than the original and had stripped out
            nearly all practical guidance. A follow-up prompt was issued in the
            same chat to generate a more complete version:
          </p>
          <div className="bg-stone-100 border-l-4 border-stone-400 rounded-r-lg p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2">
              Fergus v2 prompt
            </p>
            <p className="text-stone-800 font-mono text-xs leading-relaxed">
              This version you created is much shorter than the original full
              document I shared with you. Rewrite it again, ensuring you evaluate
              every section within the original Word doc I shared with you.
              Assess the goal and role of each section and rewrite the entire
              document so it is accurate and practically useful, based on
              up-to-date information as of today March 14, 2026. Deliver it as a
              Word doc.
            </p>
          </div>
        </div>
      </div>

      {/* Document results */}
      <p className="text-sm font-medium text-stone-700 mt-2">
        The five resulting documents:
      </p>
      <div className="space-y-2">
        {columns.map((col) => {
          return (
            <div
              key={col.id}
              className="flex items-center gap-3 rounded-lg border border-stone-200 bg-white p-3"
            >
              <ScoreBadge score={col.aggregate_score} size="sm" />
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-semibold text-stone-800">
                    {col.label}
                  </span>
                  <span className="text-xs text-stone-400">
                    {col.word_count.toLocaleString()} words
                  </span>
                </div>
                <p className="text-xs text-stone-500 mt-0.5">
                  {col.model_or_source}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-sm text-stone-500 mt-2">
        <Link
          href="/rewrites"
          className="text-stone-700 underline underline-offset-2 hover:text-stone-900 transition-colors"
        >
          Read the full text of all five versions &rarr;
        </Link>
      </p>
    </div>
  );
}

/* ─── Step 3: Evaluation Framework ─── */
function Step3Content({ attributes }: { attributes: Attribute[] }) {
  return (
    <div className="space-y-3">
      <p className="text-sm text-stone-600 leading-relaxed">
        Ten qualitative attributes were defined, each measuring a distinct
        dimension of document quality. Together they cover technical accuracy,
        practical usefulness, writing craft, and alignment with the stated
        purpose.
      </p>
      <div className="space-y-4 mt-4">
        {attributes.map((attr, i) => (
          <div
            key={attr.id}
            className="border-l-2 border-stone-200 pl-4 py-1"
          >
            <div className="flex items-baseline gap-2">
              <span className="text-xs font-mono text-stone-400">{i + 1}.</span>
              <h4 className="text-sm font-semibold text-stone-800">
                {attr.label}
              </h4>
            </div>
            <p className="text-sm text-stone-500 leading-relaxed mt-1">
              {attr.description}
            </p>
            <p className="text-xs text-stone-400 italic mt-1.5">
              Edge: {attr.edge}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Step 4: Scoring ─── */
function Step4Content() {
  return (
    <div className="space-y-4">
      <div className="rounded-lg bg-stone-50 border border-stone-200 p-5 text-sm text-stone-600 leading-relaxed space-y-3">
        <p>
          Each attribute is scored on a <strong>1&ndash;10 scale</strong>, where
          1 represents serious deficiency and 10 represents excellence. The
          aggregate score for each document is the{" "}
          <strong>unweighted arithmetic mean</strong> of all ten attribute
          scores.
        </p>
        <p>
          This equal-weight approach was chosen deliberately. While some
          attributes might seem more important than others, the relative
          importance depends on context. Equal weighting provides a neutral
          baseline that readers can mentally adjust for their own priorities.
        </p>
      </div>
      <div>
        <p className="text-sm font-medium text-stone-700 mb-3">
          Color coding
        </p>
        <div className="space-y-2">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((score) => {
              const colors = getScoreColorClasses(score);
              return (
                <div
                  key={score}
                  className={`${colors.bg} ${colors.text} flex-1 h-8 font-semibold text-xs flex items-center justify-center ${
                    score === 1 ? "rounded-l-md" : ""
                  } ${score === 10 ? "rounded-r-md" : ""}`}
                >
                  {score}
                </div>
              );
            })}
          </div>
          <div className="flex text-[10px] text-stone-400">
            <span className="w-[30%] text-center">1&ndash;3 Poor</span>
            <span className="w-[20%] text-center">4&ndash;5 Mixed</span>
            <span className="w-[50%] text-center">6&ndash;10 Good</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Step 5: Ideal Composite ─── */
function Step5Content() {
  return (
    <div className="rounded-lg bg-stone-50 border border-stone-200 p-5 text-sm text-stone-600 leading-relaxed space-y-3">
      <p>
        After scoring all five versions, an Ideal Composite was generated,
        combining the strongest elements from each: the Opus 4.6 version&apos;s
        educational foundation and prose quality, the GPT 5.4 version&apos;s
        technical publishing guidance and sourced appendix, and the Client
        Original and Fergus v2&apos;s worked examples and templates.
      </p>
      <p>
        The composite is <strong>not scored</strong> &mdash; it would be grading
        its own homework &mdash; but serves as the reference benchmark against
        which each rewrite&apos;s detail pages compare.
      </p>
      <p>
        <Link
          href="/rewrites/ideal-composite"
          className="text-stone-700 underline underline-offset-2 hover:text-stone-900 transition-colors"
        >
          Read the Ideal Composite &rarr;
        </Link>
      </p>
    </div>
  );
}

/* ─── Step 6: Interactive Scorecard ─── */
function Step6Content() {
  return (
    <div className="rounded-lg bg-stone-50 border border-stone-200 p-5 text-sm text-stone-600 leading-relaxed space-y-3">
      <p>
        The scorecard presents all scores in an interactive table. Hover over any
        cell for a quick summary of why that score was given. Click any score to
        open a full analysis page with the detailed rationale, a verbatim example
        quote from the document, and a comparison against the Ideal Composite.
      </p>
      <p>
        Aggregate scores ranged from <strong>4.3</strong> to{" "}
        <strong>8.3</strong> out of 10 &mdash; revealing that identical prompts
        can produce outputs of vastly different quality depending on the
        underlying model and architecture.
      </p>
      <p>
        <Link
          href="/"
          className="text-stone-700 underline underline-offset-2 hover:text-stone-900 transition-colors"
        >
          Explore the scorecard &rarr;
        </Link>
      </p>
    </div>
  );
}
