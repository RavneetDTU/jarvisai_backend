"use client";

import { useState } from "react";
import { CalendarIcon } from "lucide-react";

interface EditDateExceptionFormProps {
  onCancel?: () => void;
}

export default function EditDateExceptionForm({ onCancel }: EditDateExceptionFormProps) {
  const [exceptionName, setExceptionName] = useState("New Year Closed");
  const [onlineName, setOnlineName] = useState("New Year Closed");
  const [exceptionType, setExceptionType] = useState("Single Date");
  const [date, setDate] = useState("2025-01-01");
  const [disabledShifts, setDisabledShifts] = useState(["Bookings"]);
  const [disabledAreas, setDisabledAreas] = useState(["Restaurant"]);
  const [notes, setNotes] = useState("");
  const [userName, setUserName] = useState("");

  return (
    <div className="max-w-5xl mx-auto bg-gray-800 text-gray-50 rounded-lg shadow-lg mt-6 sm:mt-10 p-4 sm:p-6 lg:p-8 space-y-6 border border-gray-700">
      <div className="space-y-2">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-100">Edit Date Exception</h2>
        <div className="flex items-center text-sm text-gray-400">
          <span className="text-emerald-400 mr-2">•</span>
          <span>Exceptions / Edit</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column - Form Fields */}
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Exception Name</label>
            <input
              type="text"
              value={exceptionName}
              onChange={(e) => setExceptionName(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-gray-700 border border-gray-600 text-gray-100 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Exception Online Name</label>
            <input
              type="text"
              value={onlineName}
              onChange={(e) => setOnlineName(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-gray-700 border border-gray-600 text-gray-100 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Exception Type</label>
            <select
              value={exceptionType}
              onChange={(e) => setExceptionType(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-gray-700 border border-gray-600 text-gray-100 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            >
              <option className="bg-gray-800">Single Date</option>
              <option className="bg-gray-800">Date Range</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Date</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <CalendarIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="pl-10 w-full px-3 py-2 rounded-md bg-gray-700 border border-gray-600 text-gray-100 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
            </div>
          </div>
        </div>

        {/* Right Column - Tags & Notes */}
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Disabled Shifts</label>
            <div className="flex flex-wrap gap-2">
              {disabledShifts.map((item, i) => (
                <span 
                  key={i} 
                  className="inline-flex items-center bg-emerald-600/20 text-emerald-400 px-3 py-1 rounded-full text-xs"
                >
                  {item}
                  <button 
                    onClick={() => setDisabledShifts(disabledShifts.filter((_, idx) => idx !== i))}
                    className="ml-2 text-emerald-300 hover:text-emerald-200"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Disabled Seating Areas</label>
            <div className="flex flex-wrap gap-2">
              {disabledAreas.map((item, i) => (
                <span 
                  key={i} 
                  className="inline-flex items-center bg-emerald-600/20 text-emerald-400 px-3 py-1 rounded-full text-xs"
                >
                  {item}
                  <button 
                    onClick={() => setDisabledAreas(disabledAreas.filter((_, idx) => idx !== i))}
                    className="ml-2 text-emerald-300 hover:text-emerald-200"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Exception Notes</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add any additional details regarding this closure."
              className="w-full px-3 py-2 rounded-md bg-gray-700 border border-gray-600 text-gray-100 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-gray-700 border border-gray-600 text-gray-100 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            />
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex flex-col sm:flex-row justify-end gap-3 pt-6 border-t border-gray-700">
        <button className="px-4 py-2 rounded-md border border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-gray-200 transition-colors"  onClick={onCancel}>
          Cancel
        </button>
        <button className="px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition-colors">
          Save Exception
        </button>
      </div>
    </div>
  );
}