import { getScorecardData } from "./data";
import type { NavTarget } from "./types";

export function getAdjacentCells(
  attributeId: string,
  columnId: string
): { prev: NavTarget | null; next: NavTarget | null } {
  const data = getScorecardData();
  const columns = data.columns_ordered;
  const attributes = data.attributes;

  // Build flat ordered list: columns L→R within each attribute, then next attribute
  const ordered: { attributeId: string; columnId: string; attributeLabel: string; columnLabel: string }[] = [];
  for (const attr of attributes) {
    for (const col of columns) {
      if (attr.scores[col.id]) {
        ordered.push({
          attributeId: attr.id,
          columnId: col.id,
          attributeLabel: attr.label,
          columnLabel: col.label,
        });
      }
    }
  }

  const currentIndex = ordered.findIndex(
    (item) => item.attributeId === attributeId && item.columnId === columnId
  );

  return {
    prev: currentIndex > 0 ? ordered[currentIndex - 1] : null,
    next: currentIndex < ordered.length - 1 ? ordered[currentIndex + 1] : null,
  };
}
