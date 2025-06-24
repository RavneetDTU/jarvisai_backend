"use client";

import { useDashboardStore } from "@/stores/dashboard-store";
import SeatingArea from "./tabs/SeatingArea";
import Shifts from "./tabs/Shifts";
import JoinedTables from "./tabs/JoinedTables";
import DeleteShift from "./tabs/DeleteShift";
import AvailablityTable from "./tabs/AvailablityTable";

export default function ContentRenderer() {
  const { activeAvailabilityTab } = useDashboardStore();

  switch (activeAvailabilityTab) {
    case "seating-areas":
      return <SeatingArea />;
    case "shifts":
      return <Shifts />;
    case "tables":
      return <AvailablityTable />;
    case "joined-tables":
      return <JoinedTables />;
    case "delete-shift":
      return <DeleteShift />;
    default:
      return (
        <div className="bg-gray-700 rounded-lg p-6">
          <div className="text-center py-12">
            <p className="text-gray-400">Select an option from the sidebar to view content</p>
          </div>
        </div>
      );
  }
}
