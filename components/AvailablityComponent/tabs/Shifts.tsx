import React, { useState } from "react";
import { Clock, Plus, Edit, Info } from "lucide-react";
import EditShiftsPage from "../modals/EditShiftsModal";

function Shifts() {
  const [editOpen, setEditOpen] = useState(false);

  return (
    <div className="space-y-8">
      {editOpen ? (
        <EditShiftsPage onClose={() => setEditOpen(false)} />
      ) : (
        <div className="bg-gray-700 rounded-lg">
          <div className="flex items-center justify-between p-4 border-b border-gray-600">
            <div className="flex items-center space-x-4">
              <h3 className="text-lg font-semibold text-white">Shifts (1)</h3>
            </div>
            <button className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded">
              <Plus className="h-4 w-4" />
              <span>Add new shift</span>
            </button>
          </div>

          <div className="p-4">
            <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
              <Clock className="h-4 w-4" />
              <span>Availability</span>
              <span>/</span>
              <span>Shifts</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">
                      <div className="flex items-center space-x-1">
                        <span>Shift Name</span>
                      </div>
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">
                      <div className="flex items-center space-x-1">
                        <span>Order</span>
                        <Info className="h-3 w-3" />
                      </div>
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">
                      <div className="flex items-center space-x-1">
                        <span>Start</span>
                      </div>
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">
                      <div className="flex items-center space-x-1">
                        <span>End</span>
                      </div>
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">
                      <div className="flex items-center space-x-1">
                        <span>Pacing</span>
                        <Info className="h-3 w-3" />
                      </div>
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">
                      <div className="flex items-center space-x-1">
                        <span>Limit Last Minute Bookings (mins)</span>
                        <Info className="h-3 w-3" />
                      </div>
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">
                      <div className="flex items-center space-x-1">
                        <span>Close Shift Prior to Start (mins)</span>
                        <Info className="h-3 w-3" />
                      </div>
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-300"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-600">
                    <td className="py-3 px-4 text-white">Bookings</td>
                    <td className="py-3 px-4 text-white">1</td>
                    <td className="py-3 px-4 text-white">11:30</td>
                    <td className="py-3 px-4 text-white">14:30</td>
                    <td className="py-3 px-4 text-white">0</td>
                    <td className="py-3 px-4 text-white">30</td>
                    <td className="py-3 px-4 text-white">0</td>
                    <td className="py-3 px-4">
                      <button className="text-gray-400 hover:text-white" onClick={() => {setEditOpen(true);}}>
                        <Edit className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="py-3 px-4 text-white">Dinner</td>
                    <td className="py-3 px-4 text-white">2</td>
                    <td className="py-3 px-4 text-white">17:00</td>
                    <td className="py-3 px-4 text-white">22:00</td>
                    <td className="py-3 px-4 text-white">15</td>
                    <td className="py-3 px-4 text-white">60</td>
                    <td className="py-3 px-4 text-white">30</td>
                    <td className="py-3 px-4">
                      <button className="text-gray-400 hover:text-white" onClick={() => {setEditOpen(true);}}>
                        <Edit className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Shifts;
