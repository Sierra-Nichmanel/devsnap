import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface Props {
  title: string;
  value: string;
  change: string;
  color: string;
}

export default function StatsCard({ title, value, change, color }: Props) {
  const colors = {
    blue: "bg-blue-100 text-blue-600",
    emerald: "bg-emerald-100 text-emerald-600",
    green: "bg-green-100 text-green-600",
    orange: "bg-orange-100 text-orange-600",
  };

  const positive = !change.startsWith("-");

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-lg">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">{title}</p>

        <div
          className={`rounded-xl px-3 py-1 text-xs font-semibold ${
            colors[color as keyof typeof colors]
          }`}
        >
          {change}
        </div>
      </div>

      <h2 className="mt-5 text-4xl font-bold">{value}</h2>

      <div
        className={`mt-5 flex items-center gap-2 text-sm ${
          positive ? "text-green-600" : "text-red-600"
        }`}
      >
        {positive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
        Compared to last week
      </div>
    </div>
  );
}
