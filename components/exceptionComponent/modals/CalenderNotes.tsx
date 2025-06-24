import React from 'react';

export default function CalendarNotes() {
    return (
      <div className="space-y-6">
        <div className="bg-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Booking Calendar Notes</h3>
          <div className="space-y-3">
            <div className="bg-gray-600 p-4 rounded">
              <div className="text-white font-medium mb-2">December 2024 Notes</div>
              <div className="text-gray-300 text-sm">Holiday season - expect higher volume</div>
            </div>
            <div className="bg-gray-600 p-4 rounded">
              <div className="text-white font-medium mb-2">January 2025 Notes</div>
              <div className="text-gray-300 text-sm">New Year promotions active</div>
            </div>
          </div>
          <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">Add Note</button>
        </div>
      </div>
    );
  }
  