import { getScorecardData } from "@/lib/data";

export interface DocumentMeta {
  id: string;
  title: string;
  subtitle: string;
  wordCount: number;
  score?: number;
  description: string;
  modelSource: string;
}

const scorecardData = getScorecardData();

// Build metadata for the 5 scored documents from scorecard JSON
const scoredDocs: DocumentMeta[] = scorecardData.columns_ordered.map((col) => {
  const idMap: Record<string, string> = {
    fergus_v1: "fergus-v1",
    client_orig: "client-original",
    fergus_v2: "fergus-v2",
    opus_4_6: "opus-4-6",
    gpt_5_4: "gpt-5-4",
  };
  const titleMap: Record<string, string> = {
    fergus_v1: "Fergus v1",
    client_orig: "Client Original",
    fergus_v2: "Fergus v2",
    opus_4_6: "Opus 4.6",
    gpt_5_4: "GPT 5.4",
  };
  const subtitleMap: Record<string, string> = {
    fergus_v1: "First agency rewrite using proprietary AI tool",
    client_orig: "Original client document on AI & external communications",
    fergus_v2: "Revised agency rewrite with expanded prompt",
    opus_4_6: "Rewrite by Claude Opus 4.6 Extended",
    gpt_5_4: "Rewrite by GPT 5.4 Extended Pro",
  };
  return {
    id: idMap[col.id],
    title: titleMap[col.id],
    subtitle: subtitleMap[col.id],
    wordCount: col.word_count,
    score: col.aggregate_score,
    description: col.description,
    modelSource: col.model_or_source,
  };
});

// Add the Ideal Composite (not scored)
const idealComposite: DocumentMeta = {
  id: "ideal-composite",
  title: "Ideal Composite",
  subtitle: "Benchmark document combining the strongest elements from all versions",
  wordCount: 8500,
  description:
    "The Ideal Composite was generated after all five versions were evaluated, combining the strongest elements from each: the Opus 4.6 rewrite\u2019s educational foundation and prose quality, the GPT 5.4 rewrite\u2019s technical publishing guidance and sourced appendix, and the Client Original and Fergus v2\u2019s worked examples and section-by-section templates. It serves as the benchmark against which each rewrite is compared in the detail pages but is not itself scored (it would be grading its own homework).",
  modelSource: "Claude Opus 4.6 Extended (composite synthesis)",
};

export const documents: DocumentMeta[] = [...scoredDocs, idealComposite];

export function getDocumentMeta(id: string): DocumentMeta | undefined {
  return documents.find((d) => d.id === id);
}

export function getAllDocumentIds(): string[] {
  return documents.map((d) => d.id);
}
