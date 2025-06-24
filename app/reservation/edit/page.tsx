"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { useDashboardStore } from "@/stores/dashboard-store"
import { ArrowLeft, Phone, Mail, Calendar, Users, FileText, CreditCard, Paperclip } from "lucide-react"
import Link from "next/link"

const tabs = [
  { id: "view", name: "View Booking", icon: FileText },
  { id: "edit", name: "Edit Reservation", icon: Calendar },
  { id: "guest", name: "Edit Guest", icon: Users },
  { id: "assign", name: "Assign New Guest", icon: Users },
  { id: "audits", name: "Audits", icon: FileText },
  { id: "payments", name: "Payments", icon: CreditCard },
  { id: "attachments", name: "Attachments", icon: Paperclip },
]

export default function EditReservationPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { reservations, updateReservation } = useDashboardStore()

  const reservationId = searchParams.get("id")
  const reservation = reservations.find((r) => r.id === reservationId)

  const [activeTab, setActiveTab] = useState("view")
  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    email: "",
    date: "",
    timeSlot: "",
    pax: 1,
    tableCount: null as number | null,
    notes: "",
    status: "confirmed",
    company: "",
    tags: "",
    seatingArea: "Restaurant",
    internalNotes: "",
    bookingTags: "",
    allowOtherAreas: false,
    emailNotification: false,
    smsNotification: false,
    adminSignature: "",
  })

  useEffect(() => {
    if (reservation) {
      setFormData({
        customerName: reservation.customerName,
        phone: reservation.phone,
        email: "guest@example.com", // Mock data
        date: reservation.date,
        timeSlot: reservation.timeSlot,
        pax: reservation.pax,
        tableCount: reservation.tableCount,
        notes: reservation.notes || "",
        status: reservation.status,
        company: "Tech Corp", // Mock data
        tags: "",
        seatingArea: "Restaurant",
        internalNotes: "",
        bookingTags: "",
        allowOtherAreas: false,
        emailNotification: false,
        smsNotification: false,
        adminSignature: "",
      })
    }
  }, [reservation])

  if (!reservation) {
    return (
      <div className="p-6 bg-gray-800 min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Reservation Not Found</h1>
          <Link href="/reservation" className="text-blue-400 hover:text-blue-300">
            Back to Reservations
          </Link>
        </div>
      </div>
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    updateReservation(reservation.id, {
      customerName: formData.customerName,
      phone: formData.phone,
      date: formData.date,
      timeSlot: formData.timeSlot,
      pax: formData.pax,
      tableCount: formData.tableCount,
      notes: formData.notes,
      status: formData.status as any,
    })
    router.push("/reservation")
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "view":
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white">Booking Details View (Read-Only)</h2>

            <div className="bg-gray-700 rounded-lg p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Booking Info</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Booking Reference:</span>
                      <span className="text-white font-mono">kavzdc</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Guest Count:</span>
                      <span className="text-white">{reservation.pax} pax</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Date:</span>
                      <span className="text-white">
                        {new Date(reservation.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Time:</span>
                      <span className="text-white">{reservation.timeSlot}–16:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Seating Area:</span>
                      <span className="text-white">Restaurant</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Guest Info</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Full Name:</span>
                      <span className="text-white">{reservation.customerName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Phone:</span>
                      <span className="text-white">{reservation.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Email:</span>
                      <span className="text-white">guest@example.com</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Source:</span>
                      <span className="text-white capitalize">{reservation.source}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Status:</span>
                      <span
                        className={`px-2 py-1 rounded text-sm ${reservation.status === "confirmed" ? "bg-green-600 text-white" : "bg-yellow-600 text-white"}`}
                      >
                        {reservation.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-600 pt-4">
                <h3 className="text-lg font-semibold text-white mb-2">Internal Notes</h3>
                <p className="text-gray-300">{reservation.notes || "No notes available"}</p>
              </div>

              <div className="border-t border-gray-600 pt-4">
                <h3 className="text-lg font-semibold text-white mb-2">Booking Timestamp</h3>
                <p className="text-gray-300">Wednesday, 16 April 2025 at 19:47:25</p>
              </div>

              <div className="border-t border-gray-600 pt-4">
                <h3 className="text-lg font-semibold text-white mb-4">Resend Confirmation</h3>
                <div className="flex space-x-3">
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
                    Resend via SMS
                  </button>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
                    Resend via Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        )

      case "edit":
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white">Edit Booking Details (Admin Controls)</h2>

            <form onSubmit={handleSubmit} className="bg-gray-700 rounded-lg p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Date</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-gray-600 text-white rounded-md px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Seating Area</label>
                  <select
                    value={formData.seatingArea}
                    onChange={(e) => setFormData({ ...formData, seatingArea: e.target.value })}
                    className="w-full bg-gray-600 text-white rounded-md px-3 py-2"
                  >
                    <option>Restaurant</option>
                    <option>Patio</option>
                    <option>Private Room</option>
                    <option>Bar Area</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Party Size</label>
                  <div className="flex items-center space-x-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, pax: Math.max(1, formData.pax - 1) })}
                      className="bg-gray-600 hover:bg-gray-500 text-white px-3 py-1 rounded"
                    >
                      -
                    </button>
                    <span className="text-white font-medium">{formData.pax}</span>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, pax: formData.pax + 1 })}
                      className="bg-gray-600 hover:bg-gray-500 text-white px-3 py-1 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Time Slot</label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full bg-gray-600 text-white rounded-md px-3 py-2"
                  >
                    <option>11:30</option>
                    <option>12:00</option>
                    <option>12:30</option>
                    <option>13:00</option>
                    <option>13:30</option>
                    <option>14:00</option>
                    <option>14:30</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Table Number</label>
                  <input
                    type="number"
                    value={formData.tableCount || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, tableCount: e.target.value ? Number.parseInt(e.target.value) : null })
                    }
                    placeholder="No table assigned"
                    className="w-full bg-gray-600 text-white rounded-md px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Booking Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full bg-gray-600 text-white rounded-md px-3 py-2"
                  >
                    <option value="confirmed">Active</option>
                    <option value="pending">Pending</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.allowOtherAreas}
                    onChange={(e) => setFormData({ ...formData, allowOtherAreas: e.target.checked })}
                    className="rounded bg-gray-600 border-gray-500"
                  />
                  <span className="text-gray-300">Allow tables from other areas to be assigned</span>
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Internal Booking Notes</label>
                <textarea
                  value={formData.internalNotes}
                  onChange={(e) => setFormData({ ...formData, internalNotes: e.target.value })}
                  rows={3}
                  className="w-full bg-gray-600 text-white rounded-md px-3 py-2"
                  placeholder="Add internal notes..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Booking Tags</label>
                <input
                  type="text"
                  value={formData.bookingTags}
                  onChange={(e) => setFormData({ ...formData, bookingTags: e.target.value })}
                  placeholder="Add tags separated by commas"
                  className="w-full bg-gray-600 text-white rounded-md px-3 py-2"
                />
              </div>

              <div className="border-t border-gray-600 pt-4">
                <h3 className="text-lg font-semibold text-white mb-4">Notification Options</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.emailNotification}
                      onChange={(e) => setFormData({ ...formData, emailNotification: e.target.checked })}
                      className="rounded bg-gray-600 border-gray-500"
                    />
                    <span className="text-gray-300">Send Email Notification</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.smsNotification}
                      onChange={(e) => setFormData({ ...formData, smsNotification: e.target.checked })}
                      className="rounded bg-gray-600 border-gray-500"
                    />
                    <span className="text-gray-300">Send SMS Notification</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Admin Signature</label>
                <input
                  type="text"
                  value={formData.adminSignature}
                  onChange={(e) => setFormData({ ...formData, adminSignature: e.target.value })}
                  placeholder="Enter your name to confirm changes"
                  className="w-full bg-gray-600 text-white rounded-md px-3 py-2"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-medium"
              >
                Update Reservation & Guest Details
              </button>
            </form>
          </div>
        )

      case "guest":
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white">Edit Guest Profile</h2>

            <div className="bg-gray-700 rounded-lg p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                  <input
                    type="text"
                    value={formData.customerName.split(" ")[0] || ""}
                    onChange={(e) => {
                      const lastName = formData.customerName.split(" ").slice(1).join(" ")
                      setFormData({ ...formData, customerName: `${e.target.value} ${lastName}`.trim() })
                    }}
                    className="w-full bg-gray-600 text-white rounded-md px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                  <input
                    type="text"
                    value={formData.customerName.split(" ").slice(1).join(" ") || ""}
                    onChange={(e) => {
                      const firstName = formData.customerName.split(" ")[0] || ""
                      setFormData({ ...formData, customerName: `${firstName} ${e.target.value}`.trim() })
                    }}
                    className="w-full bg-gray-600 text-white rounded-md px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                  <div className="flex space-x-2">
                    <select className="bg-gray-600 text-white rounded-md px-3 py-2">
                      <option>+1</option>
                      <option>+44</option>
                      <option>+91</option>
                    </select>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="flex-1 bg-gray-600 text-white rounded-md px-3 py-2"
                    />
                    <Phone className="h-8 w-8 text-gray-400 hover:text-white cursor-pointer" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <div className="flex space-x-2">
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="flex-1 bg-gray-600 text-white rounded-md px-3 py-2"
                    />
                    <Mail className="h-8 w-8 text-gray-400 hover:text-white cursor-pointer" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-gray-600 text-white rounded-md px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Guest Flag</label>
                  <select className="w-full bg-gray-600 text-white rounded-md px-3 py-2">
                    <option>⭐ VIP</option>
                    <option>🟢 Standard</option>
                    <option>🔴 Bad</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Notes</label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={3}
                  placeholder="Allergies, seating preferences, etc."
                  className="w-full bg-gray-600 text-white rounded-md px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Tags</label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  placeholder="Custom tags for guest classification"
                  className="w-full bg-gray-600 text-white rounded-md px-3 py-2"
                />
              </div>

              <div className="border-t border-gray-600 pt-4">
                <h3 className="text-lg font-semibold text-white mb-4">Communication Preferences</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.emailNotification}
                      onChange={(e) => setFormData({ ...formData, emailNotification: e.target.checked })}
                      className="rounded bg-gray-600 border-gray-500"
                    />
                    <span className="text-gray-300">Email Opt-in</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.smsNotification}
                      onChange={(e) => setFormData({ ...formData, smsNotification: e.target.checked })}
                      className="rounded bg-gray-600 border-gray-500"
                    />
                    <span className="text-gray-300">SMS Opt-in</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Admin Signature</label>
                <input
                  type="text"
                  value={formData.adminSignature}
                  onChange={(e) => setFormData({ ...formData, adminSignature: e.target.value })}
                  placeholder="Enter your name for audit tracking"
                  className="w-full bg-gray-600 text-white rounded-md px-3 py-2"
                />
              </div>

              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-medium">
                Update Guest & Reservation Details
              </button>
            </div>
          </div>
        )

      case "assign":
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white">Assign New Guest to Booking</h2>

            <div className="bg-yellow-600 text-yellow-100 p-4 rounded-lg">
              <p className="font-medium">⚠️ Warning</p>
              <p>This will assign the booking to a different guest. The current guest information will be replaced.</p>
            </div>

            <div className="bg-gray-700 rounded-lg p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    className="w-full bg-gray-600 text-white rounded-md px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    className="w-full bg-gray-600 text-white rounded-md px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                  <div className="flex space-x-2">
                    <select className="bg-gray-600 text-white rounded-md px-3 py-2">
                      <option>+1</option>
                      <option>+44</option>
                      <option>+91</option>
                    </select>
                    <input
                      type="tel"
                      placeholder="Phone number"
                      className="flex-1 bg-gray-600 text-white rounded-md px-3 py-2"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="w-full bg-gray-600 text-white rounded-md px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company (Optional)</label>
                  <input
                    type="text"
                    placeholder="Company name"
                    className="w-full bg-gray-600 text-white rounded-md px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Guest Flag</label>
                  <select className="w-full bg-gray-600 text-white rounded-md px-3 py-2">
                    <option>🟢 Standard</option>
                    <option>⭐ VIP</option>
                    <option>🔴 Bad</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Notes</label>
                <textarea
                  rows={3}
                  placeholder="Allergies, seating preferences, etc."
                  className="w-full bg-gray-600 text-white rounded-md px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Tags</label>
                <input
                  type="text"
                  placeholder="Custom tags separated by commas"
                  className="w-full bg-gray-600 text-white rounded-md px-3 py-2"
                />
              </div>

              <div className="border-t border-gray-600 pt-4">
                <h3 className="text-lg font-semibold text-white mb-4">Communication Preferences</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded bg-gray-600 border-gray-500" />
                    <span className="text-gray-300">Email Opt-in</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded bg-gray-600 border-gray-500" />
                    <span className="text-gray-300">SMS Opt-in</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Admin Signature</label>
                <input
                  type="text"
                  placeholder="Enter your name to confirm assignment"
                  className="w-full bg-gray-600 text-white rounded-md px-3 py-2"
                  required
                />
              </div>

              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-medium">
                ✅ Assign New Guest to Booking
              </button>
            </div>
          </div>
        )

      case "audits":
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white">Audit Logs & Communication Tracking</h2>

            <div className="bg-gray-700 rounded-lg">
              <div className="border-b border-gray-600">
                <nav className="flex space-x-8 px-6">
                  {["Booking Audit", "SMS Audit", "Email Audit"].map((tab) => (
                    <button
                      key={tab}
                      className="py-4 px-1 border-b-2 border-transparent text-gray-400 hover:text-white hover:border-gray-300 font-medium text-sm"
                    >
                      {tab}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  <div className="bg-gray-600 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">New Booking via Widget</h4>
                    <div className="text-sm text-gray-300 space-y-1">
                      <p>Date: {reservation.date}</p>
                      <p>Time: {reservation.timeSlot}</p>
                      <p>Covers: {reservation.pax}</p>
                      <p>Guest: {reservation.customerName}</p>
                      <p>Phone: {reservation.phone}</p>
                      <p>Seating Area: Restaurant</p>
                      <p className="text-gray-400 text-xs mt-2">Created: Wednesday, 16 April 2025 at 19:47:25</p>
                    </div>
                  </div>

                  <div className="bg-gray-600 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Payment Confirmation SMS</h4>
                    <div className="text-sm text-gray-300 space-y-1">
                      <p>SMS Type: Payment Confirmation</p>
                      <p>Phone: {reservation.phone}</p>
                      <p>Status: Delivered 16th Apr 2025 @ 19:47:28</p>
                      <p className="text-yellow-400 text-xs mt-2">⚠️ 3rd-party SMS delivery status may be uncertain</p>
                    </div>
                  </div>

                  <div className="bg-gray-600 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Payment Confirmation Email</h4>
                    <div className="text-sm text-gray-300 space-y-1">
                      <p>Recipient: guest@example.com</p>
                      <p>Status: Delivered 16th Apr 2025 @ 19:47:49</p>
                      <p className="text-gray-400 text-xs mt-2">Sent via SMTP</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "payments":
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white">Payment Management & Deposit Handling</h2>

            <div className="space-y-6">
              {/* Payment Requests */}
              <div className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Payment Requests</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-600">
                      <tr>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-300">Request ID</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-300">Created</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-300">Amount Requested</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-300">Amount Paid</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-300">Created By</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-300">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-600">
                      <tr>
                        <td className="px-4 py-2 text-white">PAY001</td>
                        <td className="px-4 py-2 text-gray-300">16 Apr 2025</td>
                        <td className="px-4 py-2 text-white">₹600</td>
                        <td className="px-4 py-2 text-green-400">₹600</td>
                        <td className="px-4 py-2 text-gray-300">From Widget</td>
                        <td className="px-4 py-2">
                          <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm mr-2">
                            Refund
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Reserved Items */}
              <div className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Reserved Items</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-5 gap-4 text-sm font-medium text-gray-300">
                    <div>Quantity</div>
                    <div>Item Code</div>
                    <div>Item Name</div>
                    <div>Item Price</div>
                    <div>Line Total</div>
                  </div>
                  <div className="grid grid-cols-5 gap-4 text-sm text-white">
                    <div>{reservation.pax}</div>
                    <div>Dep1</div>
                    <div>₹100 deposit per person</div>
                    <div>₹100</div>
                    <div>₹{reservation.pax * 100}</div>
                  </div>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">Update Items</button>
                </div>
              </div>

              {/* Send New Payment Request */}
              <div className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Send New Payment Request</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Quantity</label>
                    <input
                      type="number"
                      defaultValue="1"
                      className="w-full bg-gray-600 text-white rounded-md px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Recipient Email</label>
                    <input
                      type="email"
                      defaultValue="guest@example.com"
                      className="w-full bg-gray-600 text-white rounded-md px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Recipient Phone</label>
                    <input
                      type="tel"
                      defaultValue={reservation.phone}
                      className="w-full bg-gray-600 text-white rounded-md px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Item Code</label>
                    <input
                      type="text"
                      defaultValue="Dep1"
                      className="w-full bg-gray-600 text-white rounded-md px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Item Name</label>
                    <input
                      type="text"
                      defaultValue="Deposit per person"
                      className="w-full bg-gray-600 text-white rounded-md px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Item Price</label>
                    <input
                      type="number"
                      defaultValue="100"
                      className="w-full bg-gray-600 text-white rounded-md px-3 py-2"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Payment Methods</label>
                  <div className="flex space-x-4">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded bg-gray-600 border-gray-500" />
                      <span className="text-gray-300">Credit Card</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded bg-gray-600 border-gray-500" />
                      <span className="text-gray-300">EFT</span>
                    </label>
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Admin Signature</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-gray-600 text-white rounded-md px-3 py-2"
                  />
                </div>

                <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded">
                  Send Payment Request
                </button>
              </div>
            </div>
          </div>
        )

      case "attachments":
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white">Booking Attachments</h2>

            <div className="bg-gray-700 rounded-lg p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Select File</label>
                  <input
                    type="file"
                    className="w-full bg-gray-600 text-white rounded-md px-3 py-2 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Attachment Name</label>
                  <input
                    type="text"
                    placeholder="e.g., Special Dinner Menu"
                    className="w-full bg-gray-600 text-white rounded-md px-3 py-2"
                  />
                </div>

                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded">
                  Upload Attachment
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-600">
                <h3 className="text-lg font-semibold text-white mb-4">Uploaded Attachments</h3>
                <div className="text-center py-8 text-gray-400">No attachments uploaded</div>
              </div>
            </div>
          </div>
        )

      default:
        return <div className="text-center py-12 text-gray-400">Select a tab to view content</div>
    }
  }

  return (
    <div className="p-4 lg:p-6 bg-gray-800 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <Link href="/reservation" className="text-gray-400 hover:text-white">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-2xl font-bold text-white">Edit Reservation - {reservation.customerName}</h1>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-gray-700 rounded-lg mb-6">
        <div className="border-b border-gray-600">
          <nav className="flex space-x-8 px-6 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap
                ${
                  activeTab === tab.id
                    ? "border-blue-500 text-blue-400"
                    : "border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300"
                }
              `}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div>{renderTabContent()}</div>
    </div>
  )
}
