import { getScorecardData } from "@/lib/data";
import { getScoreColorClasses } from "@/lib/score-colors";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Methodology | Anatomy of a Rewrite",
};

export default function MethodologyPage() {
  const data = getScorecardData();

  return (
    <article className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Methodology</h1>
      <p className="text-stone-600 leading-relaxed mb-12">
        The scorecard evaluates five versions of a corporate communications
        guide across ten qualitative attributes. Each attribute measures a
        distinct dimension of document quality, from technical accuracy to
        practical usefulness. This page explains what each attribute measures,
        why it matters, and how scores are aggregated.
      </p>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">
          The Ten Evaluation Attributes
        </h2>
        <div className="space-y-8">
          {data.attributes.map((attr) => (
            <div
              key={attr.id}
              className="border-l-2 border-stone-200 pl-5 py-1"
            >
              <h3 className="text-lg font-semibold mb-2">{attr.label}</h3>
              <p className="text-stone-600 leading-relaxed mb-2">
                {attr.description}
              </p>
              <p className="text-sm text-muted italic">Edge: {attr.edge}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">
          Scoring and Aggregation
        </h2>
        <p className="text-stone-600 leading-relaxed mb-4">
          Each attribute is scored on a 1&ndash;10 scale, where 1 represents
          serious deficiency and 10 represents excellence. The aggregate score
          for each document is the unweighted arithmetic mean of all ten
          attribute scores. All attributes carry equal weight in the final
          score.
        </p>
        <p className="text-stone-600 leading-relaxed">
          This equal-weight approach was chosen deliberately. While some
          attributes (like technical accuracy) might seem more important than
          others (like writing quality), the relative importance depends on
          context. A document used internally for education might weight
          accuracy highest; one used as a client deliverable might weight
          writing quality and completeness more heavily. Equal weighting
          provides a neutral baseline.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Color Coding</h2>
        <p className="text-stone-600 leading-relaxed mb-6">
          Scores are color-coded into three zones to provide an at-a-glance
          assessment. Intensity varies within each zone to show relative
          position.
        </p>
        <div className="flex flex-wrap gap-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((score) => {
            const colors = getScoreColorClasses(score);
            const zoneLabel =
              score <= 3 ? "Poor" : score <= 5 ? "Mixed" : "Good";
            return (
              <div key={score} className="text-center">
                <div
                  className={`${colors.bg} ${colors.text} w-12 h-10 rounded-lg font-semibold text-sm flex items-center justify-center border ${colors.border}`}
                >
                  {score}
                </div>
                <span className="text-xs text-muted mt-1 block">
                  {zoneLabel}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </article>
  );
}
