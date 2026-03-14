export interface ScoreCell {
  score: number;
  hover: string;
  detail: string;
  example_quote: string;
  composite_comparison: string;
  composite_quote: string;
}

export interface Column {
  id: string;
  label: string;
  aggregate_score: number;
  word_count: number;
  description: string;
  model_or_source: string;
}

export interface Attribute {
  id: string;
  label: string;
  description: string;
  scores: Record<string, ScoreCell>;
  edge: string;
}

export interface ScorecardMeta {
  title: string;
  evaluation_date: string;
  evaluator: string;
}

export interface ScorecardData {
  meta: ScorecardMeta;
  columns_ordered: Column[];
  attributes: Attribute[];
}

export interface NavTarget {
  attributeId: string;
  columnId: string;
  attributeLabel: string;
  columnLabel: string;
}
