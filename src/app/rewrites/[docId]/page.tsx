import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/nav/Breadcrumbs";
import ScoreBadge from "@/components/detail/ScoreBadge";
import {
  documents,
  getDocumentMeta,
  getAllDocumentIds,
} from "@/data/documents";
import type { Metadata } from "next";

// Content components
import ClientOriginalContent from "@/data/documents/ClientOriginal";
import FergusV1Content from "@/data/documents/FergusV1";
import FergusV2Content from "@/data/documents/FergusV2";
import OpusFourSixContent from "@/data/documents/OpusFourSix";
import GptFiveFourContent from "@/data/documents/GptFiveFour";
import IdealCompositeContent from "@/data/documents/IdealComposite";

const contentMap: Record<string, React.ComponentType> = {
  "client-original": ClientOriginalContent,
  "fergus-v1": FergusV1Content,
  "fergus-v2": FergusV2Content,
  "opus-4-6": OpusFourSixContent,
  "gpt-5-4": GptFiveFourContent,
  "ideal-composite": IdealCompositeContent,
};

export function generateStaticParams() {
  return getAllDocumentIds().map((docId) => ({ docId }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ docId: string }>;
}): Promise<Metadata> {
  const { docId } = await params;
  const doc = getDocumentMeta(docId);
  if (!doc) return { title: "Not Found" };
  return {
    title: `${doc.title} | Rewrites | From Workslop to Working Document`,
  };
}

export default async function RewriteDetailPage({
  params,
}: {
  params: Promise<{ docId: string }>;
}) {
  const { docId } = await params;
  const doc = getDocumentMeta(docId);
  if (!doc) notFound();

  const ContentComponent = contentMap[docId];
  if (!ContentComponent) notFound();

  // Prev/next navigation
  const currentIndex = documents.findIndex((d) => d.id === docId);
  const prev = currentIndex > 0 ? documents[currentIndex - 1] : null;
  const next =
    currentIndex < documents.length - 1 ? documents[currentIndex + 1] : null;

  return (
    <article className="max-w-3xl mx-auto">
      <Breadcrumbs
        items={[
          { label: "Rewrites", href: "/rewrites" },
          { label: doc.title },
        ]}
      />

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-start gap-4 mb-4">
          {doc.score !== undefined && (
            <ScoreBadge score={doc.score} size="lg" />
          )}
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              {doc.title}
            </h1>
            <p className="text-muted mt-1">{doc.subtitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted">
          <span>{doc.wordCount.toLocaleString()} words</span>
          <span className="text-stone-300">|</span>
          <span>{doc.modelSource}</span>
        </div>
      </header>

      {/* Full document content */}
      <div className="mb-16">
        <ContentComponent />
      </div>

      {/* Prev/Next navigation */}
      <nav className="border-t border-stone-200 pt-6 pb-4">
        <div className="flex items-center justify-between gap-4">
          {prev ? (
            <Link
              href={`/rewrites/${prev.id}`}
              className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
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
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
              <span>{prev.title}</span>
            </Link>
          ) : (
            <div />
          )}

          <Link
            href="/rewrites"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            All Rewrites
          </Link>

          {next ? (
            <Link
              href={`/rewrites/${next.id}`}
              className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
            >
              <span>{next.title}</span>
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
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </nav>
    </article>
  );
}
