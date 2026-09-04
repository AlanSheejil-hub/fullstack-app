"use client";
import FooterCard from "../components/FooterCard";
import SummaryCard from "../components/SummaryCard";
import { useRouter } from "next/navigation";

const orders = [
  {
    id: "#ORD-1001",
    customer: "John Doe",
    product: "MacBook Pro",
    amount: "$2,499",
    status: "Completed",
  },
  {
    id: "#ORD-1002",
    customer: "Alice Smith",
    product: "iPhone 16",
    amount: "$999",
    status: "Pending",
  },
  {
    id: "#ORD-1003",
    customer: "Michael",
    product: "AirPods Pro",
    amount: "$249",
    status: "Completed",
  },
  {
    id: "#ORD-1004",
    customer: "Emma Watson",
    product: "Apple Watch",
    amount: "$499",
    status: "Cancelled",
  },
];

const cards = [
  {
    title: "Total Users",
    value: "12,450",
    color: "text-blue-600",
  },
  {
    title: "Revenue",
    value: "$98,320",
    color: "text-green-600",
  },
  {
    title: "Orders",
    value: "1,240",
    color: "text-purple-600",
  },
  {
    title: "Growth",
    value: "+18.5%",
    color: "text-orange-500",
  },
  {
    title: "New Signups",
    value: "320",
    color: "text-teal-600"
  }
];

const footerDetails = [
  {
    title: "All rights reserved.",
    companyname: "voidCentury",
    year: 2024,
  },
  {
    title: "API Tester",
    companyname: "MyCompany",
    year: 2024,
  },
];

export default function Dashboard() {
  const router = useRouter();
  const finalFooter = footerDetails[0];

  const clickCounter = () => {
    console.log("Footer button is clicked!");
  };

  const handleNext = () => {
    router.push("/home");
  };

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-7xl rounded-xl bg-white shadow-lg">
        {/* Header */}
        <div className="border-b p-6">
          <h1 className="text-3xl font-bold text-blue-600">Dashboard</h1>
          <p className="mt-2 text-gray-500">Welcome to the dashboard.</p>
        </div>

        <SummaryCard cards={cards} />

        {/* Table */}
        <div className="p-6">
          <div className="overflow-hidden rounded-xl border">
            <div className="border-b bg-gray-50 px-6 py-4">
              <h2 className="text-lg font-semibold">Recent Orders</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-100 text-left text-sm uppercase text-gray-600">
                  <tr>
                    <th className="px-6 py-4">Order ID</th>
                    <th className="px-6 py-4">Customer</th>
                    <th className="px-6 py-4">Product</th>
                    <th className="px-6 py-4">Amount</th>
                    <th className="px-6 py-4">Status</th>
                  </tr>
                </thead>

                <tbody className="divide-y">
                  {orders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">{order.id}</td>
                      <td className="px-6 py-4">{order.customer}</td>
                      <td className="px-6 py-4">{order.product}</td>
                      <td className="px-6 py-4 font-semibold">{order.amount}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            order.status === "Completed"
                              ? "bg-green-100 text-green-700"
                              : order.status === "Pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
       <button
        className="absolute right-7 rounded-lg top-10 bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
        onClick={handleNext}
      >
        Home
      </button>

      <FooterCard
        title={finalFooter.title}
        companyname={finalFooter.companyname}
        year={finalFooter.year}
        onClick={clickCounter}
      />

     
    </main>
  );
}