"use client";

import { useState, useCallback } from "react";
import { comparisonSections } from "@/data/comparison-sections";

export default function SectionComparison() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set()
  );

  const toggleSection = useCallback((id: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const allExpanded = expandedSections.size === comparisonSections.length;

  const toggleAll = useCallback(() => {
    if (allExpanded) {
      setExpandedSections(new Set());
    } else {
      setExpandedSections(new Set(comparisonSections.map((s) => s.id)));
    }
  }, [allExpanded]);

  return (
    <section className="mt-10 mb-10">
      {/* Module header */}
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight mb-2">
            Side-by-Side Comparison
          </h2>
          <p className="text-sm text-stone-500 leading-relaxed max-w-2xl">
            See how each section evolved from the Client Original to the Ideal
            Composite, with editorial notes on what changed and why. Click any
            section to expand the full text.
          </p>
        </div>
        <button
          onClick={toggleAll}
          className="text-xs font-medium text-stone-500 hover:text-stone-700 border border-stone-200 rounded-lg px-3 py-1.5 hover:border-stone-300 transition-colors shrink-0 cursor-pointer"
        >
          {allExpanded ? "Collapse All" : "Expand All"}
        </button>
      </div>

      {/* Column legend */}
      <div className="hidden md:grid grid-cols-2 gap-4 mb-4 px-4">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm border border-stone-300 bg-white shrink-0" />
          <span className="text-xs font-medium text-stone-400 uppercase tracking-wider">
            Client Original
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm border-2 border-amber-300 bg-amber-50 shrink-0" />
          <span className="text-xs font-medium text-amber-500 uppercase tracking-wider">
            Ideal Composite
          </span>
        </div>
      </div>

      {/* Section list */}
      <div className="space-y-3">
        {comparisonSections.map((section) => {
          const isOpen = expandedSections.has(section.id);
          const isCompositeOnly = section.clientOriginal === null;

          return (
            <div key={section.id}>
              {/* Collapsed header / trigger */}
              <button
                onClick={() => toggleSection(section.id)}
                className={`w-full text-left rounded-xl border transition-all duration-200 cursor-pointer ${
                  isOpen
                    ? "border-stone-300 bg-white shadow-sm"
                    : "border-stone-200 bg-white hover:border-stone-300 hover:shadow-sm"
                }`}
              >
                <div className="flex items-start gap-3 p-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <h3 className="text-base font-semibold text-stone-800">
                        {section.label}
                      </h3>
                      {isCompositeOnly && (
                        <span className="text-[10px] font-medium text-amber-600 bg-amber-50 border border-amber-200 rounded-full px-2 py-0.5">
                          New in Composite
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-stone-500 mt-1 leading-relaxed">
                      {section.annotation}
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
                  <div className="pt-4">
                    {isCompositeOnly ? (
                      /* Single column for composite-only sections */
                      <div className="rounded-xl border-2 border-amber-200 bg-amber-50/40 p-5">
                        <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-3">
                          Ideal Composite
                        </p>
                        <div className="prose prose-stone prose-sm max-w-none">
                          {section.idealComposite}
                        </div>
                      </div>
                    ) : (
                      /* Two-column side by side */
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Left: Client Original */}
                        <div className="rounded-xl border border-stone-200 bg-white p-5">
                          <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-3">
                            Client Original
                          </p>
                          <div className="prose prose-stone prose-sm max-w-none">
                            {section.clientOriginal}
                          </div>
                        </div>
                        {/* Right: Ideal Composite */}
                        <div className="rounded-xl border-2 border-amber-200 bg-amber-50/40 p-5">
                          <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-3">
                            Ideal Composite
                          </p>
                          <div className="prose prose-stone prose-sm max-w-none">
                            {section.idealComposite}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Extended editorial note */}
                    {section.annotationDetail && (
                      <div className="mt-4 bg-stone-50 border-l-4 border-stone-300 rounded-r-lg p-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2">
                          Editorial Note
                        </p>
                        <p className="text-sm text-stone-600 leading-relaxed">
                          {section.annotationDetail}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
