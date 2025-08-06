import { MoreHorizontal, TrendingDown, TrendingUp } from "lucide-react";
import React from "react";


const recentOrders = [
  {
    id: "#3847",
    customer: "John Doe",
    product: "Macbook Pro",
    amount: "$2,399",
    date: "Dec 4, 2022",
    status: "completed",
  },
  {
    id: "#3848",
    customer: "Sara Johnson",
    product: "Samsung S25 Ultra",
    amount: "$1,799",
    date: "Jan 15, 2024",
    status: "pending",
  },
  {
    id: "#3849",
    customer: "Mike Wilson",
    product: "Iphone 14 Pro",
    amount: "$1,399",
    date: "Mar 23, 2024",
    status: "completed",
  },
  {
    id: "#3850",
    customer: "Emily Davis",
    product: "iPad Air",
    amount: "$599",
    date: "May 17, 2024",
    status: "cancelled",
  },
];

const topProducts = [
  {
    name: "Macbook Pro 16",
    sales: 1247,
    revenue: "$2,983,539",
    trend: "up",
    change: "+12%",
  },
  {
    name: "iPhone 15 Pro",
    sales: 2157,
    revenue: "$2,463,039",
    trend: "up",
    change: "+8%",
  },
  {
    name: "AirPods Pro",
    sales: 3217,
    revenue: "$579,509",
    trend: "down",
    change: "-3%",
  },
  {
    name: "iPad Air",
    sales: 987,
    revenue: "$343,731",
    trend: "up",
    change: "+15%",
  },
];

const TableSection = () => {

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400";
      case "pending":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-400";
      case "cancelled":
        return "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-400";
      default:
        return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400";
    }
  };

  return (
    <div className="space-y-6">
      {/* Recent Orders Table */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
        <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                Recent Orders
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Latest customer orders
              </p>
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-slate-500 dark:text-slate-400">
              <tr>
                <th className="text-left p-4 font-semibold">Order ID</th>
                <th className="text-left p-4 font-semibold">Customer</th>
                <th className="text-left p-4 font-semibold">Amount</th>
                <th className="text-left p-4 font-semibold">Status</th>
                <th className="text-left p-4 font-semibold">Date</th>
                <th className="text-right p-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="text-slate-700 dark:text-slate-300">
              {recentOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <td className="p-4 font-medium">{order.id}</td>
                  <td className="p-4">{order.customer}</td>
                  <td className="p-4">{order.amount}</td>
                  <td className="p-4">
                    <span
                      className={`font-medium text-xs px-3 py-1.5 rounded-full ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </td>
                  <td className="p-4">{order.date}</td>
                  <td className="p-4 flex justify-end">
                    <button className="text-slate-500 hover:text-slate-700 dark:hover:text-white">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Products List */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
        <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                Top Products
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Best performing products
              </p>
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </button>
          </div>
        </div>

        {/* Product List */}
        <div className="p-4 space-y-2">
          {topProducts.map((product) => (
            <div
              key={product.name}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-100/80 dark:hover:bg-slate-800/50 transition-colors"
            >
              <div className="flex-1">
                <h4 className="text-sm text-slate-800 dark:text-white font-semibold">
                  {product.name}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {product.sales.toLocaleString()} Sales
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-slate-800 dark:text-white">
                  {product.revenue}
                </p>
                <div className="flex items-center justify-end space-x-1">
                  {product.trend === "up" ? (
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                  ) : (
                    <TrendingDown className="w-3.5 h-3.5 text-red-500" />
                  )}
                  <span
                    className={`text-xs font-medium ${
                      product.trend === "up"
                        ? "text-emerald-500 dark:text-emerald-400"
                        : "text-red-500 dark:text-red-400"
                    }`}
                  >
                    {product.change}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableSection;
