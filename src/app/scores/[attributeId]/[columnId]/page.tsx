import { notFound } from "next/navigation";
import {
  getAllDetailPageParams,
  getAttribute,
  getColumn,
  getScoreCell,
} from "@/lib/data";
import { getAdjacentCells } from "@/lib/navigation";
import Breadcrumbs from "@/components/nav/Breadcrumbs";
import ScoreBadge from "@/components/detail/ScoreBadge";
import PrevNextNav from "@/components/detail/PrevNextNav";

export async function generateStaticParams() {
  return getAllDetailPageParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ attributeId: string; columnId: string }>;
}) {
  const { attributeId, columnId } = await params;
  const attribute = getAttribute(attributeId);
  const column = getColumn(columnId);
  if (!attribute || !column) return {};
  return {
    title: `${attribute.label} — ${column.label} | From Workslop to Working Document`,
  };
}

export default async function DetailPage({
  params,
}: {
  params: Promise<{ attributeId: string; columnId: string }>;
}) {
  const { attributeId, columnId } = await params;
  const attribute = getAttribute(attributeId);
  const column = getColumn(columnId);
  const cell = getScoreCell(attributeId, columnId);

  if (!attribute || !column || !cell) notFound();

  const { prev, next } = getAdjacentCells(attributeId, columnId);

  return (
    <article className="max-w-3xl mx-auto">
      <Breadcrumbs
        items={[
          { label: "Scorecard", href: "/" },
          { label: attribute.label },
          { label: column.label },
        ]}
      />

      <header className="flex items-start gap-5 mb-10">
        <ScoreBadge score={cell.score} size="lg" />
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            {attribute.label}
          </h1>
          <p className="text-muted mt-1">{column.label}</p>
        </div>
      </header>

      <div className="space-y-10">
        <section>
          <h2 className="text-xl font-semibold mb-3">
            What This Attribute Measures
          </h2>
          <p className="text-stone-600 leading-relaxed">
            {attribute.description}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">
            How {column.label} Scored
          </h2>
          <p className="text-stone-700 leading-relaxed">{cell.detail}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">
            How the Ideal Composite Handles This
          </h2>
          <p className="text-stone-700 leading-relaxed">
            {cell.composite_comparison}
          </p>
        </section>
      </div>

      <PrevNextNav prev={prev} next={next} />
    </article>
  );
}
