import React from 'react';

export default function TimeExceptions() {
    return (
      <div className="space-y-6">
        <div className="bg-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Time Exceptions</h3>
          <div className="bg-gray-600 p-4 rounded">
            <div className="text-white font-medium mb-2">Daily Time Exceptions 2024</div>
            <div className="text-gray-300 text-sm">Configure time-based exceptions for specific periods</div>
            <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
              Manage Time Exceptions
            </button>
          </div>
        </div>
      </div>
    );
  }
  