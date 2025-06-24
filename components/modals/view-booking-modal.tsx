"use client"

import { useDashboardStore } from "@/stores/dashboard-store"
import { X, Phone, MapPin, Clock, Users } from "lucide-react"

export default function ViewBookingModal() {
  const { modals, closeModal, reservations } = useDashboardStore()
  const { viewBooking } = modals

  if (!viewBooking.isOpen) return null

  const reservation = reservations.find((r) => r.id === viewBooking.reservationId)

  if (!reservation) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />

        <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-800 shadow-xl rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-white">Booking Details</h3>
            <button onClick={() => closeModal("viewBooking")} className="text-gray-400 hover:text-white">
              <X size={20} />
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Users className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-400">Customer</p>
                <p className="text-white font-medium">{reservation.customerName}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white">{reservation.phone}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Clock className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-400">Time</p>
                <p className="text-white">{reservation.timeSlot}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-400">Table</p>
                <p className="text-white">{reservation.tableCount ? `Table ${reservation.tableCount}` : "NO TABLE"}</p>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-400 mb-1">Pax</p>
              <p className="text-white">{reservation.pax}</p>
            </div>

            <div>
              <p className="text-sm text-gray-400 mb-1">Source</p>
              <span
                className={`
                px-2 py-1 text-xs rounded-full
                ${
                  reservation.source === "online"
                    ? "bg-green-600 text-white"
                    : reservation.source === "phone"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-600 text-white"
                }
              `}
              >
                {reservation.source}
              </span>
            </div>

            {reservation.notes && (
              <div>
                <p className="text-sm text-gray-400 mb-1">Notes</p>
                <p className="text-white text-sm">{reservation.notes}</p>
              </div>
            )}
          </div>

          <div className="mt-6 flex space-x-3">
            <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Edit Booking
            </button>
            <button className="flex-1 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors">
              Send Notification
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
