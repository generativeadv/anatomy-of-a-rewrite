export default function BlockQuote({
  quote,
  source,
}: {
  quote: string;
  source: string;
}) {
  return (
    <blockquote className="border-l-4 border-stone-300 pl-5 py-3 my-6 bg-stone-50 rounded-r-lg">
      <p className="text-stone-700 italic leading-relaxed">{quote}</p>
      <cite className="block mt-3 text-sm text-muted not-italic font-medium">
        &mdash; From {source}
      </cite>
    </blockquote>
  );
}
