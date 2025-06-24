"use client";

import { useDashboardStore } from "@/stores/dashboard-store";
import {
  Clock,
  Home,
  Layout,
  Link,
  MapPin,
  Table,
  Trash2,
} from "lucide-react";

const SidebarButton = ({ label, icon: Icon, tabKey }: { label: string; icon: any; tabKey: string }) => {
  const { activeAvailabilityTab, setActiveAvailabilityTab } = useDashboardStore();

  return (
    <button
      onClick={() => setActiveAvailabilityTab(tabKey)}
      className={`w-full flex items-center space-x-3 px-3 py-2 rounded text-left ${
        activeAvailabilityTab === tabKey ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-800"
      }`}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </button>
  );
};

export default function AvailabilitySidebar() {
  return (
    <div className="w-64 bg-gray-900 p-4 md:order-last">
      <h2 className="text-white font-semibold mb-6">Availability</h2>

      <div className="mb-6">
        <h3 className="text-gray-400 text-sm font-medium mb-3 uppercase">AVAILABILITY</h3>
        <div className="space-y-1">
          <SidebarButton label="Seating Areas" icon={MapPin} tabKey="seating-areas" />
          <SidebarButton label="Shifts" icon={Clock} tabKey="shifts" />
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-gray-400 text-sm font-medium mb-3 uppercase">TABLES</h3>
        <div className="space-y-1">
          <SidebarButton label="Tables" icon={Table} tabKey="tables" />
          <SidebarButton label="Joined Tables" icon={Link} tabKey="joined-tables" />
          <SidebarButton label="Room Elements" icon={Home} tabKey="room-elements" />
          <SidebarButton label="Table Layout" icon={Layout} tabKey="table-layout" />
        </div>
      </div>

      <div>
        <h3 className="text-gray-400 text-sm font-medium mb-3 uppercase">DELETE SHIFTS</h3>
        <SidebarButton label="Delete a Shift" icon={Trash2} tabKey="delete-shift" />
      </div>
    </div>
  );
}