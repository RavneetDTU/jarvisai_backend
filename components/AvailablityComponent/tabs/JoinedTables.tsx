import React from 'react';
function JoinedTables() {
  return (
    <div className="space-y-6">
    <div className="bg-gray-700 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Joined Tables</h3>
      <div className="space-y-3">
        <div className="bg-gray-600 p-4 rounded">
          <div className="text-white font-medium mb-2">Table Group A</div>
          <div className="text-gray-300 text-sm mb-2">Tables: 1, 2, 3 (Combined Capacity: 12)</div>
          <div className="flex space-x-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm">Edit</button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm">Unlink</button>
          </div>
        </div>
        <div className="bg-gray-600 p-4 rounded">
          <div className="text-white font-medium mb-2">Table Group B</div>
          <div className="text-gray-300 text-sm mb-2">Tables: 8, 9 (Combined Capacity: 8)</div>
          <div className="flex space-x-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm">Edit</button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm">Unlink</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
export default JoinedTables;