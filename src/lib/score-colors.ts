export function getScoreColorClasses(score: number): {
  bg: string;
  text: string;
  border: string;
} {
  const map: Record<number, { bg: string; text: string; border: string }> = {
    1: { bg: "bg-red-200", text: "text-red-900", border: "border-red-300" },
    2: { bg: "bg-red-300", text: "text-red-950", border: "border-red-400" },
    3: { bg: "bg-red-400", text: "text-white", border: "border-red-500" },
    4: { bg: "bg-amber-200", text: "text-amber-900", border: "border-amber-300" },
    5: { bg: "bg-amber-300", text: "text-amber-900", border: "border-amber-400" },
    6: { bg: "bg-emerald-200", text: "text-emerald-900", border: "border-emerald-300" },
    7: { bg: "bg-emerald-300", text: "text-emerald-900", border: "border-emerald-400" },
    8: { bg: "bg-emerald-400", text: "text-emerald-950", border: "border-emerald-500" },
    9: { bg: "bg-emerald-500", text: "text-white", border: "border-emerald-600" },
    10: { bg: "bg-emerald-600", text: "text-white", border: "border-emerald-700" },
  };
  const clamped = Math.max(1, Math.min(10, Math.round(score)));
  return map[clamped];
}

export function getScoreZone(score: number): "red" | "amber" | "green" {
  if (score <= 3) return "red";
  if (score <= 5) return "amber";
  return "green";
}
