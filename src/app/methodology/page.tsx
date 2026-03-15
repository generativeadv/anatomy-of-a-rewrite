import { getScorecardData } from "@/lib/data";
import MethodologyFlow from "@/components/methodology/MethodologyFlow";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Methodology | From Workslop to Working Document",
};

export default function MethodologyPage() {
  const data = getScorecardData();

  return (
    <article className="max-w-3xl mx-auto">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Methodology</h1>
        <p className="text-stone-600 leading-relaxed">
          The scorecard evaluates five versions of a corporate communications
          guide across ten qualitative attributes. Each attribute measures a
          distinct dimension of document quality, from technical accuracy to
          practical usefulness. Click any step below to explore the details.
        </p>
      </header>

      <MethodologyFlow
        attributes={data.attributes}
        columns={data.columns_ordered}
      />
    </article>
  );
}
