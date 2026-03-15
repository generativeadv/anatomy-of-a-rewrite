"use client";

import { useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import type { ScorecardData } from "@/lib/types";
import { getScoreColorClasses } from "@/lib/score-colors";

interface HoveredCell {
  attributeId: string;
  columnId: string;
  text: string;
  rect: DOMRect;
}

interface HoveredHeader {
  id: string;
  type: "column" | "attribute";
  text: string;
  rect: DOMRect;
}

export default function ScorecardTable({ data }: { data: ScorecardData }) {
  const router = useRouter();
  const [hoveredCell, setHoveredCell] = useState<HoveredCell | null>(null);
  const [hoveredHeader, setHoveredHeader] = useState<HoveredHeader | null>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout>>(undefined);

  const handleCellEnter = useCallback(
    (
      attributeId: string,
      columnId: string,
      hoverText: string,
      e: React.MouseEvent
    ) => {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = setTimeout(() => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        setHoveredCell({ attributeId, columnId, text: hoverText, rect });
      }, 150);
    },
    []
  );

  const handleCellLeave = useCallback(() => {
    clearTimeout(hoverTimeout.current);
    setHoveredCell(null);
  }, []);

  const handleHeaderEnter = useCallback(
    (id: string, type: "column" | "attribute", text: string, e: React.MouseEvent) => {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      setHoveredHeader({ id, type, text, rect });
    },
    []
  );

  const handleHeaderLeave = useCallback(() => {
    setHoveredHeader(null);
  }, []);

  return (
    <div className="relative">
      <div
        ref={tableRef}
        className="overflow-x-auto -mx-6 px-6 pb-4"
      >
        <table className="w-full border-collapse min-w-[700px]">
          <thead>
            <tr>
              <th className="text-left py-3 px-4 text-sm font-semibold text-muted w-52">
                Attribute
              </th>
              {data.columns_ordered.map((col) => (
                <th
                  key={col.id}
                  className="py-3 px-3 text-center cursor-help"
                  onMouseEnter={(e) =>
                    handleHeaderEnter(col.id, "column", col.description, e)
                  }
                  onMouseLeave={handleHeaderLeave}
                >
                  <div className="text-sm font-semibold text-foreground">
                    {col.label}
                  </div>
                  <div className="text-xs text-muted font-normal mt-0.5">
                    {col.word_count.toLocaleString()} words
                  </div>
                </th>
              ))}
              <th className="py-3 px-3 text-right text-sm font-semibold text-muted w-40">
                Edge
              </th>
            </tr>
          </thead>
          <tbody>
            {data.attributes.map((attr, attrIdx) => (
              <tr
                key={attr.id}
                className={attrIdx % 2 === 0 ? "bg-white" : "bg-stone-50/50"}
              >
                <td
                  className="py-3 px-4 text-sm font-medium text-foreground cursor-help"
                  onMouseEnter={(e) =>
                    handleHeaderEnter(attr.id, "attribute", attr.description, e)
                  }
                  onMouseLeave={handleHeaderLeave}
                >
                  {attr.label}
                </td>
                {data.columns_ordered.map((col) => {
                  const cell = attr.scores[col.id];
                  if (!cell) return <td key={col.id} />;
                  const colors = getScoreColorClasses(cell.score);
                  return (
                    <td
                      key={col.id}
                      className={`${colors.bg} ${colors.border} border-x text-center p-0`}
                    >
                      <button
                        className={`${colors.text} w-full h-full py-3 font-semibold text-sm cursor-pointer transition-all duration-150 hover:brightness-110 hover:shadow-inner`}
                        onMouseEnter={(e) =>
                          handleCellEnter(attr.id, col.id, cell.hover, e)
                        }
                        onMouseLeave={handleCellLeave}
                        onClick={() =>
                          router.push(`/scores/${attr.id}/${col.id}`)
                        }
                      >
                        {cell.score}
                      </button>
                    </td>
                  );
                })}
                <td className="py-3 px-3 text-right text-xs text-muted italic max-w-40">
                  {attr.edge}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t-2 border-stone-300">
              <td className="py-3 px-4 text-sm font-semibold text-foreground">
                Aggregate
              </td>
              {data.columns_ordered.map((col) => {
                const colors = getScoreColorClasses(col.aggregate_score);
                return (
                  <td
                    key={col.id}
                    className={`${colors.bg} ${colors.text} ${colors.border} border-x py-3 text-center font-bold text-sm`}
                  >
                    {col.aggregate_score}
                  </td>
                );
              })}
              <td />
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Score cell tooltip */}
      {hoveredCell && (
        <div
          className="fixed z-50 max-w-xs bg-white border border-stone-200 rounded-lg shadow-lg p-3 pointer-events-none"
          style={{
            left: Math.min(
              hoveredCell.rect.left + hoveredCell.rect.width / 2 - 140,
              window.innerWidth - 300
            ),
            top: hoveredCell.rect.top - 8,
            transform: "translateY(-100%)",
          }}
        >
          <p className="text-sm text-stone-700 leading-relaxed">
            {hoveredCell.text}
          </p>
          <p className="text-xs text-muted mt-2 font-medium">
            Click to explore &rarr;
          </p>
        </div>
      )}

      {/* Header tooltip */}
      {hoveredHeader && (
        <div
          className="fixed z-50 max-w-sm bg-white border border-stone-200 rounded-lg shadow-lg p-3 pointer-events-none"
          style={{
            left: Math.min(
              hoveredHeader.rect.left + hoveredHeader.rect.width / 2 - 160,
              window.innerWidth - 340
            ),
            top: hoveredHeader.rect.bottom + 8,
          }}
        >
          <p className="text-sm text-stone-700 leading-relaxed">
            {hoveredHeader.text}
          </p>
        </div>
      )}
    </div>
  );
}
