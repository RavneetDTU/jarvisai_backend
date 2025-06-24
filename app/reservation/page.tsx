"use client"

import { useDashboardStore } from "@/stores/dashboard-store"
import { Calendar, Users, Phone, Edit, Eye, Bell, Settings, Plus } from "lucide-react"
import Link from "next/link"

export default function ReservationPage() {
  const { reservations, selectedDate, setSelectedDate } = useDashboardStore()

  const todayReservations = reservations.filter((r) => r.date === selectedDate)
  const totalBookings = todayReservations.length
  const totalPax = todayReservations.reduce((sum, r) => sum + r.pax, 0)

  const timeSlots = ["11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30"]

  return (
    <div className="p-4 lg:p-6 bg-gray-800 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <span className="text-white font-medium">Bookings</span>
            <span className="text-gray-400">Total</span>
            <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">{totalBookings} bookings</span>
            <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">{totalPax} pax</span>
            <Calendar className="h-4 w-4 text-gray-400" />
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="rounded bg-gray-700 border-gray-600" />
            <span className="text-white text-sm">Rest</span>
            <span className="bg-gray-600 text-white px-2 py-1 rounded text-sm">2</span>
            <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">7:00</span>
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>New</span>
          </button>
        </div>
      </div>

      {/* Date Selector */}
      <div className="mb-6">
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="bg-gray-700 text-white rounded-md px-3 py-2 border border-gray-600"
        />
      </div>

      {/* Timeline View */}
      <div className="space-y-1">
        {timeSlots.map((timeSlot) => {
          const slotReservations = todayReservations.filter((r) => r.timeSlot === timeSlot)

          return (
            <div key={timeSlot}>
              {slotReservations.length === 0 ? (
                <div className="flex items-center py-3 px-4 bg-gray-700 rounded">
                  <div className="flex items-center space-x-3 w-32">
                    <Users className="h-4 w-4 text-gray-400" />
                    <Users className="h-4 w-4 text-gray-400" />
                    <span className="text-white font-medium">{timeSlot}</span>
                  </div>
                  <div className="flex-1"></div>
                </div>
              ) : (
                slotReservations.map((reservation) => (
                  <div
                    key={reservation.id}
                    className="flex items-center py-3 px-4 bg-gray-700 hover:bg-gray-600 rounded"
                  >
                    {/* Time and Icons */}
                    <div className="flex items-center space-x-3 w-32">
                      <Users className="h-4 w-4 text-gray-400" />
                      <Users className="h-4 w-4 text-gray-400" />
                      <span className="text-white font-medium">{timeSlot}</span>
                    </div>

                    {/* Customer Info */}
                    <div className="flex-1 flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-white font-medium">{reservation.customerName}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4 text-gray-400 hover:text-white cursor-pointer" />
                      <span className="text-gray-400">{reservation.pax}</span>

                      <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-1 rounded text-sm">
                        Host
                      </button>

                      <button className="bg-gray-600 hover:bg-gray-500 text-white px-3 py-1 rounded text-sm">
                        {reservation.tableCount ? `Table ${reservation.tableCount}` : "NO TABLE"}
                      </button>

                      <Settings className="h-4 w-4 text-gray-400 hover:text-white cursor-pointer" />
                      <Bell className="h-4 w-4 text-gray-400 hover:text-white cursor-pointer" />
                      <Eye className="h-4 w-4 text-gray-400 hover:text-white cursor-pointer" />

                      <Link href={`/reservation/edit?id=${reservation.id}`}>
                        <Edit className="h-4 w-4 text-gray-400 hover:text-white cursor-pointer" />
                      </Link>

                      <div className="w-4 h-4 bg-gray-600 rounded"></div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
