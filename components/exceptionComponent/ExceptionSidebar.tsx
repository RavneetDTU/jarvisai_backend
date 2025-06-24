// components/exception/Sidebar.tsx
"use client";

import {
  AlertTriangle,
  Clock,
  Calendar,
  Ticket,
  FileText,
} from "lucide-react";
import { useDashboardStore } from "@/stores/dashboard-store";

const tabs = [
  { key: "exceptions", icon: AlertTriangle, label: "Exceptions" },
  { key: "time-exceptions", icon: Clock, label: "Time Exceptions" },
  { key: "custom-dates", icon: Calendar, label: "Custom Dates" },
  { key: "ticket-events", icon: Ticket, label: "Ticket Events" },
  { key: "booking-calendar-notes", icon: FileText, label: "Calendar Notes" },
];

export default function ExceptionSidebar() {
  const { activeExceptionTab, setActiveExceptionTab } = useDashboardStore();

  return (
    <div className="w-64 bg-gray-900 p-4">
      <h2 className="text-white font-semibold mb-6">Exceptions</h2>
      <div className="mb-6">
        <h3 className="text-gray-400 text-sm font-medium mb-3 uppercase">SUBMENU</h3>
        <div className="space-y-1">
          {tabs.map(({ key, icon: Icon, label }) => (
            <button
              key={key}
              onClick={() => setActiveExceptionTab(key)}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded text-left ${
                activeExceptionTab === key
                  ? "bg-gray-700 text-white"
                  : "text-gray-300 hover:bg-gray-800"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
