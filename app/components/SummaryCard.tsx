"use client";
   {/* Summary Cards */}
interface SummaryCardProps {
    cards: {
        title: string;
        value: string;
        color: string;
    }[];
}

export default function SummaryCard({ cards }: SummaryCardProps) {
    return (

        <div className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <p className="text-sm text-gray-500">{card.title}</p>

              <h2 className={`mt-3 text-3xl font-bold ${card.color}`}>
                {card.value}
              </h2>

              <p className="mt-2 text-xs text-gray-400">
                Updated just now for the new flow
              </p>
            </div>
          ))}
        </div>
    )
}