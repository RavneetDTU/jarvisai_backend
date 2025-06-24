// components/exception/ExceptionLayout.tsx
"use client";

import { useDashboardStore } from "@/stores/dashboard-store";
import ExceptionSidebar from "./ExceptionSidebar";
import ExceptionList from "./modals/ExceptionList";
import TimeExceptions from "./modals/TimeException";
import CustomDates from "./modals/CustomDates";
import TicketEvents from "./modals/TicketEvent";
import CalendarNotes from "./modals/CalenderNotes";
import Placeholder from "./modals/Placeholder";

export default function ExceptionLayout() {
  const { activeExceptionTab } = useDashboardStore();

  const renderMainContent = () => {
    switch (activeExceptionTab) {
      case "exceptions":
        return <ExceptionList />;
      case "time-exceptions":
        return <TimeExceptions />;
      case "custom-dates":
        return <CustomDates />;
      case "ticket-events":
        return <TicketEvents />;
      case "booking-calendar-notes":
        return <CalendarNotes />;
      default:
        return <Placeholder />;
    }
  };

  return (
    <div className="flex flex-row-reverse h-screen bg-gray-800">
      {/* Sidebar will now appear on the right */}
      <ExceptionSidebar />
      
      {/* Main content on the left */}
      <div className="flex-1 p-6 overflow-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white">Exception Management</h1>
        </div>
        {renderMainContent()}
      </div>
    </div>
  );
}
