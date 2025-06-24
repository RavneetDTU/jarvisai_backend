// "use client"

// import { useDashboardStore } from "@/stores/dashboard-store"
// import { MapPin, Clock, Table, Link, Home, Layout, Trash2, Plus, Edit, Info, Trash } from "lucide-react"

// export default function AvailabilityPage() {
//   const { activeAvailabilityTab, setActiveAvailabilityTab } = useDashboardStore()

//   const renderMainContent = () => {
//     switch (activeAvailabilityTab) {
//       case "seating-areas":
//         return (
//           <div className="space-y-8">
//             {/* Seating Areas Section */}
//             <div className="bg-gray-700 rounded-lg">
//               <div className="flex items-center justify-between p-4 border-b border-gray-600">
//                 <div className="flex items-center space-x-4">
//                   <h3 className="text-lg font-semibold text-white">Seating Areas (1)</h3>
//                 </div>
//                 <button className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded">
//                   <Plus className="h-4 w-4" />
//                   <span>Add new seating area</span>
//                 </button>
//               </div>

//               <div className="p-4">
//                 <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
//                   <Home className="h-4 w-4" />
//                   <span>Availability</span>
//                   <span>/</span>
//                   <span>Seating</span>
//                 </div>

//                 <div className="overflow-x-auto">
//                   <table className="w-full">
//                     <thead>
//                       <tr className="border-b border-gray-600">
//                         <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">
//                           <div className="flex items-center space-x-1">
//                             <span>Seating Area Name</span>
//                           </div>
//                         </th>
//                         <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">
//                           <div className="flex items-center space-x-1">
//                             <span>Available Online</span>
//                             <Info className="h-3 w-3" />
//                           </div>
//                         </th>
//                         <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">
//                           <div className="flex items-center space-x-1">
//                             <span>Abbreviation</span>
//                             <Info className="h-3 w-3" />
//                           </div>
//                         </th>
//                         <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">
//                           <div className="flex items-center space-x-1">
//                             <span>Online Name</span>
//                             <Info className="h-3 w-3" />
//                           </div>
//                         </th>
//                         <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">
//                           <div className="flex items-center space-x-1">
//                             <span>Warning Threshold</span>
//                             <Info className="h-3 w-3" />
//                           </div>
//                         </th>
//                         <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">
//                           <div className="flex items-center space-x-1">
//                             <span>Severe Threshold</span>
//                             <Info className="h-3 w-3" />
//                           </div>
//                         </th>
//                         <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">
//                           <div className="flex items-center space-x-1">
//                             <span>Order</span>
//                             <Info className="h-3 w-3" />
//                           </div>
//                         </th>
//                         <th className="text-left py-3 px-4 text-sm font-medium text-gray-300"></th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr className="border-b border-gray-600">
//                         <td className="py-3 px-4">
//                           <span className="bg-teal-600 text-white px-3 py-1 rounded text-sm">Restaurant</span>
//                         </td>
//                         <td className="py-3 px-4">
//                           <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">YES</span>
//                         </td>
//                         <td className="py-3 px-4 text-white">Rest</td>
//                         <td className="py-3 px-4 text-white">Restaurant</td>
//                         <td className="py-3 px-4 text-white">10</td>
//                         <td className="py-3 px-4 text-white">0</td>
//                         <td className="py-3 px-4 text-white">1</td>
//                         <td className="py-3 px-4">
//                           <div className="flex items-center space-x-2">
//                             <button className="text-gray-400 hover:text-white">
//                               <Edit className="h-4 w-4" />
//                             </button>
//                             <button className="text-red-400 hover:text-red-300">
//                               <Trash className="h-4 w-4" />
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>

//             {/* Shifts Section */}
//             <div className="bg-gray-700 rounded-lg">
//               <div className="flex items-center justify-between p-4 border-b border-gray-600">
//                 <div className="flex items-center space-x-4">
//                   <h3 className="text-lg font-semibold text-white">Shifts (1)</h3>
//                 </div>
//                 <button className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded">
//                   <Plus className="h-4 w-4" />
//                   <span>Add new shift</span>
//                 </button>
//               </div>

//               <div className="p-4">
//                 <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
//                   <Clock className="h-4 w-4" />
//                   <span>Availability</span>
//                   <span>/</span>
//                   <span>Shifts</span>
//                 </div>

//                 <div className="overflow-x-auto">
//                   <table className="w-full">
//                     <thead>
//                       <tr className="border-b border-gray-600">
//                         <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">
//                           <div className="flex items-center space-x-1">
//                             <span>Shift Name</span>
//                           </div>
//                         </th>
//                         <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">
//                           <div className="flex items-center space-x-1">
//                             <span>Order</span>
//                             <Info className="h-3 w-3" />
//                           </div>
//                         </th>
//                         <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">
//                           <div className="flex items-center space-x-1">
//                             <span>Start</span>
//                           </div>
//                         </th>
//                         <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">
//                           <div className="flex items-center space-x-1">
//                             <span>End</span>
//                           </div>
//                         </th>
//                         <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">
//                           <div className="flex items-center space-x-1">
//                             <span>Pacing</span>
//                             <Info className="h-3 w-3" />
//                           </div>
//                         </th>
//                         <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">
//                           <div className="flex items-center space-x-1">
//                             <span>Limit Last Minute Bookings (mins)</span>
//                             <Info className="h-3 w-3" />
//                           </div>
//                         </th>
//                         <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">
//                           <div className="flex items-center space-x-1">
//                             <span>Close Shift Prior to Start (mins)</span>
//                             <Info className="h-3 w-3" />
//                           </div>
//                         </th>
//                         <th className="text-left py-3 px-4 text-sm font-medium text-gray-300"></th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr className="border-b border-gray-600">
//                         <td className="py-3 px-4 text-white">Bookings</td>
//                         <td className="py-3 px-4 text-white">1</td>
//                         <td className="py-3 px-4 text-white">11:30</td>
//                         <td className="py-3 px-4 text-white">14:30</td>
//                         <td className="py-3 px-4 text-white">0</td>
//                         <td className="py-3 px-4 text-white">30</td>
//                         <td className="py-3 px-4 text-white">0</td>
//                         <td className="py-3 px-4">
//                           <button className="text-gray-400 hover:text-white">
//                             <Edit className="h-4 w-4" />
//                           </button>
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )
//       case "shifts":
//         return (
//           <div className="space-y-6">
//             <div className="bg-gray-700 rounded-lg">
//               <div className="flex items-center justify-between p-4 border-b border-gray-600">
//                 <div className="flex items-center space-x-4">
//                   <h3 className="text-lg font-semibold text-white">Shifts (1)</h3>
//                 </div>
//                 <button className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded">
//                   <Plus className="h-4 w-4" />
//                   <span>Add new shift</span>
//                 </button>
//               </div>

//               <div className="p-4">
//                 <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
//                   <Clock className="h-4 w-4" />
//                   <span>Availability</span>
//                   <span>/</span>
//                   <span>Shifts</span>
//                 </div>

//                 <div className="overflow-x-auto">
//                   <table className="w-full">
//                     <thead>
//                       <tr className="border-b border-gray-600">
//                         <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">
//                           <div className="flex items-center space-x-1">
//                             <span>Shift Name</span>
//                           </div>
//                         </th>
//                         <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">
//                           <div className="flex items-center space-x-1">
//                             <span>Order</span>
//                             <Info className="h-3 w-3" />
//                           </div>
//                         </th>
//                         <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">
//                           <div className="flex items-center space-x-1">
//                             <span>Start</span>
//                           </div>
//                         </th>
//                         <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">
//                           <div className="flex items-center space-x-1">
//                             <span>End</span>
//                           </div>
//                         </th>
//                         <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">
//                           <div className="flex items-center space-x-1">
//                             <span>Pacing</span>
//                             <Info className="h-3 w-3" />
//                           </div>
//                         </th>
//                         <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">
//                           <div className="flex items-center space-x-1">
//                             <span>Limit Last Minute Bookings (mins)</span>
//                             <Info className="h-3 w-3" />
//                           </div>
//                         </th>
//                         <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">
//                           <div className="flex items-center space-x-1">
//                             <span>Close Shift Prior to Start (mins)</span>
//                             <Info className="h-3 w-3" />
//                           </div>
//                         </th>
//                         <th className="text-left py-3 px-4 text-sm font-medium text-gray-300"></th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr className="border-b border-gray-600">
//                         <td className="py-3 px-4 text-white">Bookings</td>
//                         <td className="py-3 px-4 text-white">1</td>
//                         <td className="py-3 px-4 text-white">11:30</td>
//                         <td className="py-3 px-4 text-white">14:30</td>
//                         <td className="py-3 px-4 text-white">0</td>
//                         <td className="py-3 px-4 text-white">30</td>
//                         <td className="py-3 px-4 text-white">0</td>
//                         <td className="py-3 px-4">
//                           <button className="text-gray-400 hover:text-white">
//                             <Edit className="h-4 w-4" />
//                           </button>
//                         </td>
//                       </tr>
//                       <tr className="border-b border-gray-600">
//                         <td className="py-3 px-4 text-white">Dinner</td>
//                         <td className="py-3 px-4 text-white">2</td>
//                         <td className="py-3 px-4 text-white">17:00</td>
//                         <td className="py-3 px-4 text-white">22:00</td>
//                         <td className="py-3 px-4 text-white">15</td>
//                         <td className="py-3 px-4 text-white">60</td>
//                         <td className="py-3 px-4 text-white">30</td>
//                         <td className="py-3 px-4">
//                           <button className="text-gray-400 hover:text-white">
//                             <Edit className="h-4 w-4" />
//                           </button>
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )
//       case "tables":
//         return (
//           <div className="space-y-6">
//             <div className="bg-gray-700 rounded-lg">
//               <div className="flex items-center justify-between p-4 border-b border-gray-600">
//                 <div className="flex items-center space-x-4">
//                   <h3 className="text-lg font-semibold text-white">Tables (16)</h3>
//                 </div>
//                 <button className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded">
//                   <Plus className="h-4 w-4" />
//                   <span>Add new table</span>
//                 </button>
//               </div>

//               <div className="p-4">
//                 <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
//                   <Table className="h-4 w-4" />
//                   <span>Availability</span>
//                   <span>/</span>
//                   <span>Tables</span>
//                 </div>

//                 <div className="overflow-x-auto">
//                   <table className="w-full">
//                     <thead>
//                       <tr className="border-b border-gray-600">
//                         <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">
//                           <div className="flex items-center space-x-1">
//                             <span>Table Name</span>
//                           </div>
//                         </th>
//                         <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">
//                           <div className="flex items-center space-x-1">
//                             <span>Online</span>
//                             <Info className="h-3 w-3" />
//                           </div>
//                         </th>
//                         <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">
//                           <div className="flex items-center space-x-1">
//                             <span>Seating Area</span>
//                             <Info className="h-3 w-3" />
//                           </div>
//                         </th>
//                         <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">
//                           <div className="flex items-center space-x-1">
//                             <span>Capacity</span>
//                             <Info className="h-3 w-3" />
//                           </div>
//                         </th>
//                         <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">
//                           <div className="flex items-center space-x-1">
//                             <span>Order</span>
//                             <Info className="h-3 w-3" />
//                           </div>
//                         </th>
//                         <th className="text-left py-3 px-4 text-sm font-medium text-gray-300"></th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {[
//                         { name: "1", minCapacity: 4, maxCapacity: 8, order: 1 },
//                         { name: "2", minCapacity: 2, maxCapacity: 6, order: 2 },
//                         { name: "3", minCapacity: 4, maxCapacity: 8, order: 3 },
//                         { name: "4", minCapacity: 2, maxCapacity: 6, order: 4 },
//                         { name: "5", minCapacity: 2, maxCapacity: 6, order: 5 },
//                         { name: "6", minCapacity: 2, maxCapacity: 6, order: 6 },
//                         { name: "7", minCapacity: 4, maxCapacity: 8, order: 7 },
//                         { name: "8", minCapacity: 4, maxCapacity: 8, order: 8 },
//                         { name: "100", minCapacity: 1, maxCapacity: 2, order: 9 },
//                         { name: "101", minCapacity: 1, maxCapacity: 2, order: 10 },
//                         { name: "102", minCapacity: 1, maxCapacity: 2, order: 11 },
//                         { name: "103", minCapacity: 1, maxCapacity: 2, order: 12 },
//                         { name: "104", minCapacity: 2, maxCapacity: 4, order: 13 },
//                         { name: "105", minCapacity: 2, maxCapacity: 4, order: 14 },
//                         { name: "106", minCapacity: 2, maxCapacity: 4, order: 15 },
//                         { name: "107", minCapacity: 2, maxCapacity: 4, order: 16 },
//                       ].map((table, index) => (
//                         <tr
//                           key={table.name}
//                           className={`border-b border-gray-600 ${index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"}`}
//                         >
//                           <td className="py-3 px-4 text-white font-medium">{table.name}</td>
//                           <td className="py-3 px-4">
//                             <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">YES</span>
//                           </td>
//                           <td className="py-3 px-4">
//                             <div className="flex items-center space-x-2">
//                               <span className="text-white">Restaurant</span>
//                               <svg
//                                 className="h-4 w-4 text-gray-400"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                               >
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                               </svg>
//                             </div>
//                           </td>
//                           <td className="py-3 px-4">
//                             <div className="flex items-center space-x-2">
//                               <span className="text-white">{table.minCapacity}</span>
//                               <span className="text-gray-400">to</span>
//                               <span className="text-white">{table.maxCapacity}</span>
//                             </div>
//                           </td>
//                           <td className="py-3 px-4 text-white">{table.order}</td>
//                           <td className="py-3 px-4">
//                             <div className="flex items-center space-x-2">
//                               <button className="text-gray-400 hover:text-white">
//                                 <Edit className="h-4 w-4" />
//                               </button>
//                               <button className="text-red-400 hover:text-red-300">
//                                 <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
//                                   <path
//                                     fillRule="evenodd"
//                                     d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                                     clipRule="evenodd"
//                                   />
//                                 </svg>
//                               </button>
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )
//       case "joined-tables":
//         return (
//           <div className="space-y-6">
//             <div className="bg-gray-700 rounded-lg p-6">
//               <h3 className="text-lg font-semibold text-white mb-4">Joined Tables</h3>
//               <div className="space-y-3">
//                 <div className="bg-gray-600 p-4 rounded">
//                   <div className="text-white font-medium mb-2">Table Group A</div>
//                   <div className="text-gray-300 text-sm mb-2">Tables: 1, 2, 3 (Combined Capacity: 12)</div>
//                   <div className="flex space-x-2">
//                     <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm">Edit</button>
//                     <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm">Unlink</button>
//                   </div>
//                 </div>
//                 <div className="bg-gray-600 p-4 rounded">
//                   <div className="text-white font-medium mb-2">Table Group B</div>
//                   <div className="text-gray-300 text-sm mb-2">Tables: 8, 9 (Combined Capacity: 8)</div>
//                   <div className="flex space-x-2">
//                     <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm">Edit</button>
//                     <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm">Unlink</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )
//       case "delete-shift":
//         return (
//           <div className="space-y-6">
//             <div className="bg-orange-600 text-orange-100 p-4 rounded-lg">
//               <h3 className="font-semibold mb-2">⚠️ Delete Shift</h3>
//               <p>
//                 Warning: This action will permanently delete the selected shift and cannot be undone. All associated
//                 bookings will be affected.
//               </p>
//             </div>
//             <div className="bg-gray-700 rounded-lg p-6">
//               <h3 className="text-lg font-semibold text-white mb-4">Select Shift to Delete</h3>
//               <div className="space-y-3">
//                 <div className="flex items-center justify-between bg-gray-600 p-3 rounded">
//                   <div>
//                     <div className="text-white font-medium">Lunch Shift</div>
//                     <div className="text-gray-300 text-sm">11:30 AM - 3:00 PM • 15 active bookings</div>
//                   </div>
//                   <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">Delete Shift</button>
//                 </div>
//                 <div className="flex items-center justify-between bg-gray-600 p-3 rounded">
//                   <div>
//                     <div className="text-white font-medium">Dinner Shift</div>
//                     <div className="text-gray-300 text-sm">5:00 PM - 10:00 PM • 23 active bookings</div>
//                   </div>
//                   <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">Delete Shift</button>
//                 </div>
//               </div>
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
//         <h2 className="text-white font-semibold mb-6">Availability</h2>

//         {/* AVAILABILITY Section */}
//         <div className="mb-6">
//           <h3 className="text-gray-400 text-sm font-medium mb-3 uppercase">AVAILABILITY</h3>
//           <div className="space-y-1">
//             <button
//               onClick={() => setActiveAvailabilityTab("seating-areas")}
//               className={`w-full flex items-center space-x-3 px-3 py-2 rounded text-left ${
//                 activeAvailabilityTab === "seating-areas" ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-800"
//               }`}
//             >
//               <MapPin className="h-4 w-4" />
//               <span>Seating Areas</span>
//             </button>
//             <button
//               onClick={() => setActiveAvailabilityTab("shifts")}
//               className={`w-full flex items-center space-x-3 px-3 py-2 rounded text-left ${
//                 activeAvailabilityTab === "shifts" ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-800"
//               }`}
//             >
//               <Clock className="h-4 w-4" />
//               <span>Shifts</span>
//             </button>
//           </div>
//         </div>

//         {/* TABLES Section */}
//         <div className="mb-6">
//           <h3 className="text-gray-400 text-sm font-medium mb-3 uppercase">TABLES</h3>
//           <div className="space-y-1">
//             <button
//               onClick={() => setActiveAvailabilityTab("tables")}
//               className={`w-full flex items-center space-x-3 px-3 py-2 rounded text-left ${
//                 activeAvailabilityTab === "tables" ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-800"
//               }`}
//             >
//               <Table className="h-4 w-4" />
//               <span>Tables</span>
//             </button>
//             <button
//               onClick={() => setActiveAvailabilityTab("joined-tables")}
//               className={`w-full flex items-center space-x-3 px-3 py-2 rounded text-left ${
//                 activeAvailabilityTab === "joined-tables" ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-800"
//               }`}
//             >
//               <Link className="h-4 w-4" />
//               <span>Joined Tables</span>
//             </button>
//             <button
//               onClick={() => setActiveAvailabilityTab("room-elements")}
//               className={`w-full flex items-center space-x-3 px-3 py-2 rounded text-left ${
//                 activeAvailabilityTab === "room-elements" ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-800"
//               }`}
//             >
//               <Home className="h-4 w-4" />
//               <span>Room Elements</span>
//             </button>
//             <button
//               onClick={() => setActiveAvailabilityTab("table-layout")}
//               className={`w-full flex items-center space-x-3 px-3 py-2 rounded text-left ${
//                 activeAvailabilityTab === "table-layout" ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-800"
//               }`}
//             >
//               <Layout className="h-4 w-4" />
//               <span>Table Layout</span>
//             </button>
//           </div>
//         </div>

//         {/* DELETE SHIFTS Section */}
//         <div>
//           <h3 className="text-gray-400 text-sm font-medium mb-3 uppercase">DELETE SHIFTS</h3>
//           <button
//             onClick={() => setActiveAvailabilityTab("delete-shift")}
//             className={`w-full flex items-center space-x-3 px-3 py-2 rounded text-left ${
//               activeAvailabilityTab === "delete-shift" ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-800"
//             }`}
//           >
//             <Trash2 className="h-4 w-4" />
//             <span>Delete a Shift</span>
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6 overflow-auto">
//         <div className="mb-6">
//           <h1 className="text-2xl font-bold text-white">Availability Management</h1>
//         </div>
//         {renderMainContent()}
//       </div>
//     </div>
//   )
// }


"use client";

import AvailabilitySidebar from "@/components/AvailablityComponent/AvailablitySidebar";
import ContentRenderer from "@/components/AvailablityComponent/AvailablityContent";

export default function AvailabilityPage() {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-800">
      {/* Main  */}
      <main className="flex-1 p-4 overflow-auto">
        <h1 className="text-2xl font-bold text-white mb-6">Availability Management</h1>
        <ContentRenderer />
      </main>

      <AvailabilitySidebar />
    </div>
  );
}