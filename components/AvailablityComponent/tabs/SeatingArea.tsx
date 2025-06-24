"use client";
import React, { useState } from 'react';
import { Home, Plus, Edit, Info, Trash } from "lucide-react";
import EditSeatingModal from '../modals/EditSeatingModal';

export default function SeatingAreas() {
  const [editOpen, setEditOpen] = useState(false);

  return (
    <div className="space-y-8">
      {editOpen ? (
        <EditSeatingModal onClose={() => setEditOpen(false)} />
      ) : (
        <div className="bg-gray-700 rounded-lg">
          <div className="flex items-center justify-between p-4 border-b border-gray-600">
            <h3 className="text-lg font-semibold text-white">Seating Areas (1)</h3>
            <button className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded">
              <Plus className="h-4 w-4" />
              <span>Add new seating area</span>
            </button>
          </div>

          <div className="p-4">
            <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
              <Home className="h-4 w-4" />
              <span>Availability</span>
              <span>/</span>
              <span>Seating</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">Seating Area Name</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">Available Online <Info className="inline-block h-3 w-3 ml-1" /></th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">Abbreviation</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">Online Name</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">Warning Threshold</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">Severe Threshold</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">Order</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-300"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-600">
                    <td className="py-3 px-4 text-white font-medium">Restaurant</td>
                    <td className="py-3 px-4"><span className="bg-green-600 text-white px-2 py-1 rounded text-xs">YES</span></td>
                    <td className="py-3 px-4 text-white">Rest</td>
                    <td className="py-3 px-4 text-white">Restaurant</td>
                    <td className="py-3 px-4 text-white">10</td>
                    <td className="py-3 px-4 text-white">0</td>
                    <td className="py-3 px-4 text-white">1</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        <button className="text-gray-400 hover:text-white" onClick={() => {setEditOpen(true);}}>
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="text-red-400 hover:text-red-300">
                          <Trash className="h-4 w-4" />
                        </button>
                      </div>
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
