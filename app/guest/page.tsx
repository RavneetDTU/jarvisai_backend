"use client"

import { useDashboardStore } from "@/stores/dashboard-store"
import { Search, Edit, Eye, Flag } from "lucide-react"
import { useState } from "react"

export default function GuestPage() {
  const { guests, openModal } = useDashboardStore()
  const [searchTerm, setSearchTerm] = useState("")

  const filteredGuests = guests.filter(
    (guest) =>
      guest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guest.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guest.phone.includes(searchTerm) ||
      (guest.company && guest.company.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  return (
    <div className="p-6 lg:p-8">
      <h1 className="text-3xl font-bold text-white mb-8">Guests</h1>

      {/* Search Bar */}
      <div className="bg-gray-800 rounded-xl p-6 mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search by name, company, phone, or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Guests Table */}
      <div className="bg-gray-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Name</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Company</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Phone</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Email</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Bookings</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Flags</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {filteredGuests.map((guest) => (
                <tr key={guest.id} className="hover:bg-gray-700">
                  <td className="px-6 py-4">
                    <div className="text-white font-medium">{guest.name}</div>
                    {guest.lastVisit && <div className="text-sm text-gray-400">Last visit: {guest.lastVisit}</div>}
                  </td>
                  <td className="px-6 py-4 text-gray-300">{guest.company || "-"}</td>
                  <td className="px-6 py-4 text-gray-300">{guest.phone}</td>
                  <td className="px-6 py-4 text-gray-300">{guest.email}</td>
                  <td className="px-6 py-4">
                    <div className="text-white">{guest.totalBookings} total</div>
                    <div className="text-sm text-gray-400">
                      {guest.cancellations} cancellations, {guest.noShows} no-shows
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-1">
                      {guest.cancellations > 2 && (
                        <Flag className="h-4 w-4 text-yellow-400" title="High cancellations" />
                      )}
                      {guest.noShows > 1 && <Flag className="h-4 w-4 text-red-400" title="Multiple no-shows" />}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => openModal("editGuest", { guestId: guest.id })}
                        className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="p-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors">
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredGuests.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No guests found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  )
}
