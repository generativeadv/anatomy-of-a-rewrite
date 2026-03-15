import type { Metadata } from "next";
import EmailDraft from "@/components/client-advice/EmailDraft";

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

      <EmailDraft />

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
