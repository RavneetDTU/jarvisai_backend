import React from 'react';

export default function CustomDates() {
    return (
      <div className="space-y-6">
        <div className="bg-gray-700 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Custom Dates</h3>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
              Edit Custom Dates
            </button>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-600 p-4 rounded">
              <div className="text-white font-medium mb-2">Special Event Dates</div>
              <div className="text-gray-300 text-sm mb-3">
                Configure custom availability for special events and holidays
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Start Date</label>
                  <input type="date" className="w-full bg-gray-700 text-white rounded px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">End Date</label>
                  <input type="date" className="w-full bg-gray-700 text-white rounded px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Availability</label>
                  <select className="w-full bg-gray-700 text-white rounded px-3 py-2">
                    <option>Available</option>
                    <option>Closed</option>
                    <option>Limited</option>
                  </select>
                </div>
              </div>
              <div className="mt-4 flex space-x-3">
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">Save Changes</button>
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  