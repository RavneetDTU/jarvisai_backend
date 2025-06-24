'use client';

import React, { useState } from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import EditDateExceptionForm from './EditDateExceptionForm'; // adjust the path if needed

export default function ExceptionList() {
  const [isEditing, setIsEditing] = useState(false);

  // Show form when editing
  if (isEditing) {
    return <EditDateExceptionForm onCancel={() => setIsEditing(false)} />;
  }

  return (
    <div className="space-y-6">
      {/* Current & Future Exceptions */}
      <div className="bg-gray-700 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Your Current and Future Exceptions</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-600">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-300">Date</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-300">Name</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-300">Book</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-600">
              {Array.from({ length: 3 }, (_, i) => (
                <tr key={i}>
                  <td className="px-4 py-2 text-white">2024-07-{String(10 + i).padStart(2, '0')}</td>
                  <td className="px-4 py-2 text-gray-300">Event {i + 1}</td>
                  <td className="px-4 py-2 text-gray-300">Yes</td>
                  <td className="px-4 py-2">
                    <div className="flex space-x-2">
                      <button
                        className="text-blue-400 hover:text-white"
                        onClick={() => setIsEditing(true)}
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button className="text-red-400 hover:text-white">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Original Exception List Section */}
      <div className="bg-gray-700 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Exceptions List</h3>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
            Add New Exceptions
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-600">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-300">Date</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-300">Exception Type</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-300">Description</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-300">Status</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-600">
              {Array.from({ length: 12 }, (_, i) => (
                <tr key={i}>
                  <td className="px-4 py-2 text-white">2024-{String(i + 1).padStart(2, "0")}-15</td>
                  <td className="px-4 py-2 text-gray-300">Holiday</td>
                  <td className="px-4 py-2 text-gray-300">Special Event - Closed</td>
                  <td className="px-4 py-2">
                    <span className="w-3 h-3 bg-red-500 rounded-full inline-block" />
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex space-x-2">
                      <button
                        className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded text-xs"
                        onClick={() => setIsEditing(true)}
                      >
                        Edit
                      </button>
                      <button className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded text-xs">
                        Delete
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
  );
}
