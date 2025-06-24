import React from 'react';

export default function TicketEvents() {
    return (
      <div className="space-y-6">
        <div className="bg-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Ticket Events</h3>
          <div className="text-center py-8">
            <p className="text-gray-400">No ticket events configured</p>
            <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
              Create Ticket Event
            </button>
          </div>
        </div>
      </div>
    );
  }
  