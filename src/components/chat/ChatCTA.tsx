"use client";

import { useChatContext } from "./ChatProvider";

export default function ChatCTA() {
  const { openChat } = useChatContext();

  return (
    <section className="mt-10 mb-6">
      <div className="border-2 border-amber-200 bg-amber-50/40 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 flex items-center justify-center shrink-0 rounded-xl bg-amber-100 text-amber-600">
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-base font-semibold text-stone-800 mb-1.5">
              Try The Rewrite Desk
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed mb-4">
              Every lesson from the scorecard, ready to work.{" "}
              <strong>The Rewrite Desk</strong> helps the team generate new
              versions of the playbook, compare how different documents handled
              each section, and annotate what works and why &mdash; all grounded
              in the evaluation framework and the Ideal Composite.
            </p>
            <button
              onClick={openChat}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-800 text-white text-sm font-medium hover:bg-stone-700 transition-colors cursor-pointer"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
              Open The Rewrite Desk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
