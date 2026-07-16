"use client";

import {
  AlertTriangle,
  Check,
  X,
} from "lucide-react";

type Rating = "good" | "warning" | "bad";

type MaterialValue = {
  text: string;
  rating: Rating;
};

type ComparisonRow = {
  feature: string;
  aluminium: MaterialValue;
  composite: MaterialValue;
  wood: MaterialValue;
};

const comparisonRows: ComparisonRow[] = [
  {
    feature: "Maintenance",
    aluminium: { text: "None", rating: "good" },
    composite: { text: "Moderate", rating: "warning" },
    wood: { text: "High", rating: "bad" },
  },
  {
    feature: "Weather Resistance",
    aluminium: { text: "Excellent", rating: "good" },
    composite: { text: "Good", rating: "warning" },
    wood: { text: "Poor", rating: "bad" },
  },
  {
    feature: "Colour Stability",
    aluminium: { text: "Stable", rating: "good" },
    composite: { text: "Fades", rating: "warning" },
    wood: { text: "Fades", rating: "bad" },
  },
  {
    feature: "Warping / Movement",
    aluminium: { text: "None", rating: "good" },
    composite: { text: "Some", rating: "warning" },
    wood: { text: "Significant", rating: "bad" },
  },
  {
    feature: "Lifespan",
    aluminium: { text: "20 Years", rating: "good" },
    composite: { text: "7–8 Years", rating: "warning" },
    wood: { text: "5 Years", rating: "bad" },
  },
  {
    feature: "Sustainability",
    aluminium: { text: "100% Recyclable", rating: "good" },
    composite: { text: "Limited", rating: "warning" },
    wood: { text: "Not Recyclable", rating: "bad" },
  },
];

function RatingIcon({
  rating,
  dark = false,
}: {
  rating: Rating;
  dark?: boolean;
}) {
  if (rating === "good") {
    return <Check className="h-4 w-4 text-green-400" />;
  }

  if (rating === "warning") {
    return <AlertTriangle className="h-4 w-4 text-amber-500" />;
  }

  return (
    <X
      className={`h-4 w-4 ${
        dark ? "text-red-300" : "text-red-500"
      }`}
    />
  );
}

export default function MaterialIntelligence() {
  return (
    <section className="mt-16 border-t border-gray-200 pt-8 md:mt-20">
      <div className="mb-8">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-[#051024] md:text-3xl">
          Material Intelligence
        </h2>

        <p className="text-base font-light text-gray-600 md:text-lg">
          A clear comparison of modern fencing materials.
        </p>
      </div>

      {/* Mobile cards — no horizontal scrolling */}
      <div className="space-y-4 md:hidden">
        {comparisonRows.map((row) => (
          <article
            key={row.feature}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
          >
            <h3 className="border-b border-gray-200 bg-gray-50 px-4 py-3 text-sm font-bold text-[#051024]">
              {row.feature}
            </h3>

            <div className="space-y-2 p-3">
              <div className="flex items-center justify-between rounded-lg bg-[#051024] px-4 py-3 text-white">
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-white/60">
                    Aluminium
                  </span>

                  <span className="text-xs text-white/60">
                    Via Fortis
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <RatingIcon rating={row.aluminium.rating} dark />

                  <span className="text-sm font-semibold">
                    {row.aluminium.text}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-gray-200 px-4 py-3">
                <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
                  Composite
                </span>

                <div className="flex items-center gap-2">
                  <RatingIcon rating={row.composite.rating} />

                  <span className="text-sm font-medium text-gray-700">
                    {row.composite.text}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-gray-200 px-4 py-3">
                <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
                  Wood
                </span>

                <div className="flex items-center gap-2">
                  <RatingIcon rating={row.wood.rating} />

                  <span className="text-sm font-medium text-gray-700">
                    {row.wood.text}
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Desktop table */}
      <div className="hidden overflow-hidden rounded-xl border border-gray-200 md:block">
        <table className="w-full table-fixed border-collapse">
          <thead>
            <tr>
              <th className="w-1/4 border-r border-gray-200 bg-gray-50 p-5 text-left text-sm font-bold text-[#051024]">
                Features
              </th>

              <th className="w-1/4 border-r border-gray-200 bg-[#051024] p-5 text-center text-sm font-bold text-white">
                Aluminium
                <span className="block text-xs font-normal text-white/60">
                  Via Fortis
                </span>
              </th>

              <th className="w-1/4 border-r border-gray-200 bg-white p-5 text-center text-sm font-bold text-[#051024]">
                Composite
              </th>

              <th className="w-1/4 bg-white p-5 text-center text-sm font-bold text-[#051024]">
                Wood
              </th>
            </tr>
          </thead>

          <tbody>
            {comparisonRows.map((row, index) => (
              <tr
                key={row.feature}
                className={
                  index !== comparisonRows.length - 1
                    ? "border-t border-gray-200"
                    : ""
                }
              >
                <td className="border-r border-gray-200 bg-gray-50 p-5 text-sm font-medium text-[#051024]">
                  {row.feature}
                </td>

                <td className="border-r border-gray-200 bg-[#051024] p-5">
                  <div className="flex flex-col items-center gap-2">
                    <RatingIcon rating={row.aluminium.rating} dark />

                    <span className="text-center text-sm font-medium text-white">
                      {row.aluminium.text}
                    </span>
                  </div>
                </td>

                <td className="border-r border-gray-200 bg-white p-5">
                  <div className="flex flex-col items-center gap-2">
                    <RatingIcon rating={row.composite.rating} />

                    <span className="text-center text-sm font-medium text-gray-700">
                      {row.composite.text}
                    </span>
                  </div>
                </td>

                <td className="bg-white p-5">
                  <div className="flex flex-col items-center gap-2">
                    <RatingIcon rating={row.wood.rating} />

                    <span className="text-center text-sm font-medium text-gray-700">
                      {row.wood.text}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-5 text-sm font-light text-gray-500">
        Designed for long-term performance with minimal intervention.
      </p>
    </section>
  );
}