import React from 'react';
import { Table, Plus, Edit, Info} from "lucide-react"


function AvailablityTable() {
  return (
    <div className="space-y-6">
    <div className="bg-gray-700 rounded-lg">
      <div className="flex items-center justify-between p-4 border-b border-gray-600">
        <div className="flex items-center space-x-4">
          <h3 className="text-lg font-semibold text-white">Tables (16)</h3>
        </div>
        <button className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded">
          <Plus className="h-4 w-4" />
          <span>Add new table</span>
        </button>
      </div>

      <div className="p-4">
        <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
          <Table className="h-4 w-4" />
          <span>Availability</span>
          <span>/</span>
          <span>Tables</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">
                  <div className="flex items-center space-x-1">
                    <span>Table Name</span>
                  </div>
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">
                  <div className="flex items-center space-x-1">
                    <span>Online</span>
                    <Info className="h-3 w-3" />
                  </div>
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">
                  <div className="flex items-center space-x-1">
                    <span>Seating Area</span>
                    <Info className="h-3 w-3" />
                  </div>
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">
                  <div className="flex items-center space-x-1">
                    <span>Capacity</span>
                    <Info className="h-3 w-3" />
                  </div>
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">
                  <div className="flex items-center space-x-1">
                    <span>Order</span>
                    <Info className="h-3 w-3" />
                  </div>
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-300"></th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "1", minCapacity: 4, maxCapacity: 8, order: 1 },
                { name: "2", minCapacity: 2, maxCapacity: 6, order: 2 },
                { name: "3", minCapacity: 4, maxCapacity: 8, order: 3 },
                { name: "4", minCapacity: 2, maxCapacity: 6, order: 4 },
                { name: "5", minCapacity: 2, maxCapacity: 6, order: 5 },
                { name: "6", minCapacity: 2, maxCapacity: 6, order: 6 },
                { name: "7", minCapacity: 4, maxCapacity: 8, order: 7 },
                { name: "8", minCapacity: 4, maxCapacity: 8, order: 8 },
                { name: "100", minCapacity: 1, maxCapacity: 2, order: 9 },
                { name: "101", minCapacity: 1, maxCapacity: 2, order: 10 },
                { name: "102", minCapacity: 1, maxCapacity: 2, order: 11 },
                { name: "103", minCapacity: 1, maxCapacity: 2, order: 12 },
                { name: "104", minCapacity: 2, maxCapacity: 4, order: 13 },
                { name: "105", minCapacity: 2, maxCapacity: 4, order: 14 },
                { name: "106", minCapacity: 2, maxCapacity: 4, order: 15 },
                { name: "107", minCapacity: 2, maxCapacity: 4, order: 16 },
              ].map((table, index) => (
                <tr
                  key={table.name}
                  className={`border-b border-gray-600 ${index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"}`}
                >
                  <td className="py-3 px-4 text-white font-medium">{table.name}</td>
                  <td className="py-3 px-4">
                    <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">YES</span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-white">Restaurant</span>
                      <svg
                        className="h-4 w-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-white">{table.minCapacity}</span>
                      <span className="text-gray-400">to</span>
                      <span className="text-white">{table.maxCapacity}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-white">{table.order}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <button className="text-gray-400 hover:text-white">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-red-400 hover:text-red-300">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  );
}
export default AvailablityTable;