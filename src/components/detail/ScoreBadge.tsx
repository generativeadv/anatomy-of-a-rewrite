import { getScoreColorClasses } from "@/lib/score-colors";

export default function ScoreBadge({
  score,
  size = "lg",
}: {
  score: number;
  size?: "sm" | "lg";
}) {
  const colors = getScoreColorClasses(score);
  const sizeClasses =
    size === "lg"
      ? "w-14 h-14 text-2xl font-bold rounded-xl"
      : "w-8 h-8 text-sm font-semibold rounded-lg";

  return (
    <div
      className={`${colors.bg} ${colors.text} ${sizeClasses} flex items-center justify-center shrink-0`}
    >
      {score}
    </div>
  );
}
