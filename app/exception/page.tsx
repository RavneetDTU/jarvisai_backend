// "use client"

// import { useDashboardStore } from "@/stores/dashboard-store"
// import { AlertTriangle, Clock, Calendar, Ticket, FileText } from "lucide-react"

// export default function ExceptionPage() {
//   const { activeExceptionTab, setActiveExceptionTab } = useDashboardStore()

//   const renderMainContent = () => {
//     switch (activeExceptionTab) {
//       case "exceptions":
//         return (
//           <div className="space-y-6">
//             <div className="bg-gray-700 rounded-lg p-6">
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className="text-lg font-semibold text-white">Exceptions List</h3>
//                 <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
//                   Edit Exceptions
//                 </button>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead className="bg-gray-600">
//                     <tr>
//                       <th className="px-4 py-2 text-left text-sm font-medium text-gray-300">Date</th>
//                       <th className="px-4 py-2 text-left text-sm font-medium text-gray-300">Exception Type</th>
//                       <th className="px-4 py-2 text-left text-sm font-medium text-gray-300">Description</th>
//                       <th className="px-4 py-2 text-left text-sm font-medium text-gray-300">Status</th>
//                       <th className="px-4 py-2 text-left text-sm font-medium text-gray-300">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-gray-600">
//                     {Array.from({ length: 12 }, (_, i) => (
//                       <tr key={i}>
//                         <td className="px-4 py-2 text-white">2024-{String(i + 1).padStart(2, "0")}-15</td>
//                         <td className="px-4 py-2 text-gray-300">Holiday</td>
//                         <td className="px-4 py-2 text-gray-300">Special Event - Closed</td>
//                         <td className="px-4 py-2">
//                           <span className="w-3 h-3 bg-red-500 rounded-full inline-block"></span>
//                         </td>
//                         <td className="px-4 py-2">
//                           <div className="flex space-x-2">
//                             <button className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded text-xs">
//                               Edit
//                             </button>
//                             <button className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded text-xs">
//                               Delete
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         )
//       case "time-exceptions":
//         return (
//           <div className="space-y-6">
//             <div className="bg-gray-700 rounded-lg p-6">
//               <h3 className="text-lg font-semibold text-white mb-4">Time Exceptions</h3>
//               <div className="bg-gray-600 p-4 rounded">
//                 <div className="text-white font-medium mb-2">Daily Time Exceptions 2024</div>
//                 <div className="text-gray-300 text-sm">Configure time-based exceptions for specific periods</div>
//                 <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
//                   Manage Time Exceptions
//                 </button>
//               </div>
//             </div>
//           </div>
//         )
//       case "custom-dates":
//         return (
//           <div className="space-y-6">
//             <div className="bg-gray-700 rounded-lg p-6">
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className="text-lg font-semibold text-white">Custom Dates</h3>
//                 <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
//                   Edit Custom Dates
//                 </button>
//               </div>
//               <div className="space-y-4">
//                 <div className="bg-gray-600 p-4 rounded">
//                   <div className="text-white font-medium mb-2">Special Event Dates</div>
//                   <div className="text-gray-300 text-sm mb-3">
//                     Configure custom availability for special events and holidays
//                   </div>
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-300 mb-2">Start Date</label>
//                       <input type="date" className="w-full bg-gray-700 text-white rounded px-3 py-2" />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-300 mb-2">End Date</label>
//                       <input type="date" className="w-full bg-gray-700 text-white rounded px-3 py-2" />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-300 mb-2">Availability</label>
//                       <select className="w-full bg-gray-700 text-white rounded px-3 py-2">
//                         <option>Available</option>
//                         <option>Closed</option>
//                         <option>Limited</option>
//                       </select>
//                     </div>
//                   </div>
//                   <div className="mt-4 flex space-x-3">
//                     <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
//                       Save Changes
//                     </button>
//                     <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">Cancel</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )
//       case "ticket-events":
//         return (
//           <div className="space-y-6">
//             <div className="bg-gray-700 rounded-lg p-6">
//               <h3 className="text-lg font-semibold text-white mb-4">Ticket Events</h3>
//               <div className="text-center py-8">
//                 <p className="text-gray-400">No ticket events configured</p>
//                 <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
//                   Create Ticket Event
//                 </button>
//               </div>
//             </div>
//           </div>
//         )
//       case "booking-calendar-notes":
//         return (
//           <div className="space-y-6">
//             <div className="bg-gray-700 rounded-lg p-6">
//               <h3 className="text-lg font-semibold text-white mb-4">Booking Calendar Notes</h3>
//               <div className="space-y-3">
//                 <div className="bg-gray-600 p-4 rounded">
//                   <div className="text-white font-medium mb-2">December 2024 Notes</div>
//                   <div className="text-gray-300 text-sm">Holiday season - expect higher volume</div>
//                 </div>
//                 <div className="bg-gray-600 p-4 rounded">
//                   <div className="text-white font-medium mb-2">January 2025 Notes</div>
//                   <div className="text-gray-300 text-sm">New Year promotions active</div>
//                 </div>
//               </div>
//               <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">Add Note</button>
//             </div>
//           </div>
//         )
//       default:
//         return (
//           <div className="bg-gray-700 rounded-lg p-6">
//             <div className="text-center py-12">
//               <p className="text-gray-400">Select an option from the sidebar to view content</p>
//             </div>
//           </div>
//         )
//     }
//   }

//   return (
//     <div className="flex h-screen bg-gray-800">
//       {/* Left Sidebar */}
//       <div className="w-64 bg-gray-900 p-4">
//         <h2 className="text-white font-semibold mb-6">Exceptions</h2>

//         <div className="mb-6">
//           <h3 className="text-gray-400 text-sm font-medium mb-3 uppercase">SUBMENU</h3>
//           <div className="space-y-1">
//             <button
//               onClick={() => setActiveExceptionTab("exceptions")}
//               className={`w-full flex items-center space-x-3 px-3 py-2 rounded text-left ${
//                 activeExceptionTab === "exceptions" ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-800"
//               }`}
//             >
//               <AlertTriangle className="h-4 w-4" />
//               <span>Exceptions</span>
//             </button>
//             <button
//               onClick={() => setActiveExceptionTab("time-exceptions")}
//               className={`w-full flex items-center space-x-3 px-3 py-2 rounded text-left ${
//                 activeExceptionTab === "time-exceptions" ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-800"
//               }`}
//             >
//               <Clock className="h-4 w-4" />
//               <span>Time Exceptions</span>
//             </button>
//             <button
//               onClick={() => setActiveExceptionTab("custom-dates")}
//               className={`w-full flex items-center space-x-3 px-3 py-2 rounded text-left ${
//                 activeExceptionTab === "custom-dates" ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-800"
//               }`}
//             >
//               <Calendar className="h-4 w-4" />
//               <span>Custom Dates</span>
//             </button>
//             <button
//               onClick={() => setActiveExceptionTab("ticket-events")}
//               className={`w-full flex items-center space-x-3 px-3 py-2 rounded text-left ${
//                 activeExceptionTab === "ticket-events" ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-800"
//               }`}
//             >
//               <Ticket className="h-4 w-4" />
//               <span>Ticket Events</span>
//             </button>
//             <button
//               onClick={() => setActiveExceptionTab("booking-calendar-notes")}
//               className={`w-full flex items-center space-x-3 px-3 py-2 rounded text-left ${
//                 activeExceptionTab === "booking-calendar-notes"
//                   ? "bg-gray-700 text-white"
//                   : "text-gray-300 hover:bg-gray-800"
//               }`}
//             >
//               <FileText className="h-4 w-4" />
//               <span>Booking Calendar Notes</span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6 overflow-auto">
//         <div className="mb-6">
//           <h1 className="text-2xl font-bold text-white">Exception Management</h1>
//         </div>
//         {renderMainContent()}
//       </div>
//     </div>
//   )
// }



// app/exception/page.tsx
"use client";

import ExceptionLayout from "@/components/exceptionComponent/ExceptionLayout";

export default function ExceptionPage() {
  return <ExceptionLayout />;
}
