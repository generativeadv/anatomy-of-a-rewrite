import scorecardJson from "@/data/scorecard_data.json";
import type { ScorecardData, Column, Attribute, ScoreCell } from "./types";

const data = scorecardJson as ScorecardData;

export function getScorecardData(): ScorecardData {
  return data;
}

export function getColumn(columnId: string): Column | undefined {
  return data.columns_ordered.find((c) => c.id === columnId);
}

export function getAttribute(attributeId: string): Attribute | undefined {
  return data.attributes.find((a) => a.id === attributeId);
}

export function getScoreCell(
  attributeId: string,
  columnId: string
): ScoreCell | undefined {
  const attr = getAttribute(attributeId);
  if (!attr) return undefined;
  return attr.scores[columnId];
}

export function getAllDetailPageParams(): {
  attributeId: string;
  columnId: string;
}[] {
  const params: { attributeId: string; columnId: string }[] = [];
  for (const attr of data.attributes) {
    for (const col of data.columns_ordered) {
      if (attr.scores[col.id]) {
        params.push({ attributeId: attr.id, columnId: col.id });
      }
    }
  }
  return params;
}
