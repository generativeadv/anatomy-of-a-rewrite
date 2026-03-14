export default function PullQuote({
  text,
  label,
}: {
  text: string;
  label?: string;
}) {
  return (
    <div className="my-8 bg-stone-100 border-l-4 border-stone-400 rounded-r-lg p-6">
      {label && (
        <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">
          {label}
        </p>
      )}
      <p className="text-stone-800 font-mono text-sm leading-relaxed whitespace-pre-wrap">
        {text}
      </p>
    </div>
  );
}
