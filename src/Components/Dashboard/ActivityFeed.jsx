import {
  Bell,
  Clock,
  CreditCard,
  Settings,
  ShoppingCart,
  User,
} from "lucide-react";
import React from "react";

const activities = [
  {
    id: 1,
    type: "user",
    icon: User,
    title: "New User Registered",
    time: "2 min ago",
    description: "Jhon Smith created an account",
    color: "text-blue-500, dark:text-blue-400",
    bgcolor: "bg-blue-100 dark:bg-blue-900/50",
  },
  {
    id: 2,
    type: "order",
    icon: ShoppingCart,
    title: "New Order Recived",
    description: "Order #3847 for $23,399",
    time: "2 min ago",
    color: "text-emerald-500, dark:text-emerald-400",
    bgcolor: "bg-emerald-100 dark:bg-emerald-900/50",
  },
  {
    id: 3,
    type: "payment",
    icon: CreditCard,
    title: "Payment Processed",
    description: "payment of $1,147 completed",
    time: "12 min ago",
    color: "text-purple-500, dark:text-purple-400",
    bgcolor: "bg-purple-100 dark:bg-purple-900/50",
  },
  {
    id: 4,
    type: "system",
    icon: Settings,
    title: "System Updates",
    description: "Database Backup Completed",
    time: "1 hour ago",
    color: "text-orange-500, dark:text- orange-400",
    bgcolor: "bg-orange-100 dark:bg-orange-900/50",
  },
  {
    id: 5,
    type: "notification",
    icon: Bell,
    title: "Low Stock Alert",
    description: "iPhone 15 pro stock is low",
    time: "2 hours ago",
    color: "text-red-500, dark:text-red-400",
    bgcolor: "bg-red-100 dark:bg-red-900/50",
  },
];

const ActivityFeed = () => {
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50">
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">
            Activity Feed
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Recent system activity
          </p>
        </div>
        <button className="text-blue-600 hover-text-blue-700 text-sm font-medium">
          View All
        </button>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {activities.map((Activity) => {
            return (
              <>
                <div className="flex items-start space-x-4 p-3 rounded-xl hover-bg-slate-100 dark:hover-bg-slate-800/50 transition-colors">
                  <div className={`p-2 rounded-lg ${Activity.bgcolor}`}>
                    <Activity.icon className={`w-5 h-5 ${Activity.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-slate-800 dark:text-white">
                      {Activity.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 truncate">
                      {Activity.description}
                    </p>
                    <div className="flex items-center-safe space-x-1 mt-1">
                      <Clock className="w-3 h-3 text-slate-600 dark:text-slate-400" />
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {Activity.time}
                      </span>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;
