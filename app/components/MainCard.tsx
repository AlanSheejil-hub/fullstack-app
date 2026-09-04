    export default function SummaryCard({ title, value, color }: { title: string; value: string; color: string }) {
    return (
        <div className="rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md">
        <p className="text-sm text-gray-500">{title}</p> 
        <h2 className={`mt-3 text-3xl font-bold ${color}`}>
            {value}
        </h2>
        </div>
        );
    }