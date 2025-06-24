export interface Reservation {
  id: string
  customerName: string
  phone: string
  timeSlot: string
  tableCount: number | null
  source: "online" | "phone" | "walk-in"
  notes?: string
  status: "confirmed" | "pending" | "cancelled"
  pax: number
  date: string
}

export interface Guest {
  id: string
  name: string
  company?: string
  phone: string
  email: string
  totalBookings: number
  cancellations: number
  noShows: number
  lastVisit?: string
}

export interface StatsData {
  bookings: number
  covers: number
  cancellations: number
  noShows: number
  date: string
}

export interface ModalState {
  viewBooking: { isOpen: boolean; reservationId?: string }
  editReservation: { isOpen: boolean; reservationId?: string }
  assignGuest: { isOpen: boolean; reservationId?: string }
  editGuest: { isOpen: boolean; guestId?: string }
  uploadAttachments: { isOpen: boolean; reservationId?: string }
  payment: { isOpen: boolean; reservationId?: string }
  auditTrail: { isOpen: boolean; itemId?: string }
}
