import React from 'react';
function DeleteShift() {
  return (
    <div className="space-y-6">
    <div className="bg-orange-600 text-orange-100 p-4 rounded-lg">
      <h3 className="font-semibold mb-2">⚠️ Delete Shift</h3>
      <p>
        Warning: This action will permanently delete the selected shift and cannot be undone. All associated
        bookings will be affected.
      </p>
    </div>
    <div className="bg-gray-700 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Select Shift to Delete</h3>
      <div className="space-y-3">
        <div className="flex items-center justify-between bg-gray-600 p-3 rounded">
          <div>
            <div className="text-white font-medium">Lunch Shift</div>
            <div className="text-gray-300 text-sm">11:30 AM - 3:00 PM • 15 active bookings</div>
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">Delete Shift</button>
        </div>
        <div className="flex items-center justify-between bg-gray-600 p-3 rounded">
          <div>
            <div className="text-white font-medium">Dinner Shift</div>
            <div className="text-gray-300 text-sm">5:00 PM - 10:00 PM • 23 active bookings</div>
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">Delete Shift</button>
        </div>
      </div>
    </div>
  </div>
  );
}
export default DeleteShift;