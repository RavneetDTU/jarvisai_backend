import { create } from "zustand"
import type { Reservation, Guest, StatsData, ModalState } from "@/types"

interface DashboardState {
  // Reservations
  reservations: Reservation[]
  selectedDate: string
  setSelectedDate: (date: string) => void
  addReservation: (reservation: Reservation) => void
  updateReservation: (id: string, updates: Partial<Reservation>) => void
  deleteReservation: (id: string) => void

  // Guests
  guests: Guest[]
  addGuest: (guest: Guest) => void
  updateGuest: (id: string, updates: Partial<Guest>) => void
  deleteGuest: (id: string) => void

  // Stats
  statsData: StatsData[]
  statsDateRange: { start: string; end: string }
  compareWithPrevious: boolean
  activeGraphs: string[]
  setStatsDateRange: (range: { start: string; end: string }) => void
  setCompareWithPrevious: (compare: boolean) => void
  setActiveGraphs: (graphs: string[]) => void

  // Modals
  modals: ModalState
  openModal: (modalName: keyof ModalState, data?: any) => void
  closeModal: (modalName: keyof ModalState) => void

  // Settings
  activeSettingTab: string
  setActiveSettingTab: (tab: string) => void

  // Availability
  activeAvailabilityTab: string
  setActiveAvailabilityTab: (tab: string) => void

  // Exceptions
  activeExceptionTab: string
  setActiveExceptionTab: (tab: string) => void
}

export const useDashboardStore = create<DashboardState>((set, get) => ({
  // Initial state
  reservations: [
    {
      id: "1",
      customerName: "John Doe",
      phone: "+1234567890",
      timeSlot: "12:00",
      tableCount: 4,
      source: "online",
      notes: "Birthday celebration",
      status: "confirmed",
      pax: 4,
      date: new Date().toISOString().split("T")[0],
    },
    {
      id: "2",
      customerName: "Jane Smith",
      phone: "+1987654321",
      timeSlot: "13:30",
      tableCount: null,
      source: "phone",
      status: "pending",
      pax: 2,
      date: new Date().toISOString().split("T")[0],
    },
  ],
  selectedDate: new Date().toISOString().split("T")[0],
  guests: [
    {
      id: "1",
      name: "John Doe",
      company: "Tech Corp",
      phone: "+1234567890",
      email: "john@example.com",
      totalBookings: 15,
      cancellations: 2,
      noShows: 1,
      lastVisit: "2024-01-15",
    },
  ],
  statsData: [],
  statsDateRange: {
    start: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
    end: new Date().toISOString().split("T")[0],
  },
  compareWithPrevious: false,
  activeGraphs: ["bookings"],
  modals: {
    viewBooking: { isOpen: false },
    editReservation: { isOpen: false },
    assignGuest: { isOpen: false },
    editGuest: { isOpen: false },
    uploadAttachments: { isOpen: false },
    payment: { isOpen: false },
    auditTrail: { isOpen: false },
  },
  activeSettingTab: "general",
  activeAvailabilityTab: "seating-areas",
  activeExceptionTab: "exceptions",

  // Actions
  setSelectedDate: (date) => set({ selectedDate: date }),
  addReservation: (reservation) => set((state) => ({ reservations: [...state.reservations, reservation] })),
  updateReservation: (id, updates) =>
    set((state) => ({
      reservations: state.reservations.map((r) => (r.id === id ? { ...r, ...updates } : r)),
    })),
  deleteReservation: (id) => set((state) => ({ reservations: state.reservations.filter((r) => r.id !== id) })),
  addGuest: (guest) => set((state) => ({ guests: [...state.guests, guest] })),
  updateGuest: (id, updates) =>
    set((state) => ({
      guests: state.guests.map((g) => (g.id === id ? { ...g, ...updates } : g)),
    })),
  deleteGuest: (id) => set((state) => ({ guests: state.guests.filter((g) => g.id !== id) })),
  setStatsDateRange: (range) => set({ statsDateRange: range }),
  setCompareWithPrevious: (compare) => set({ compareWithPrevious: compare }),
  setActiveGraphs: (graphs) => set({ activeGraphs: graphs }),
  openModal: (modalName, data) =>
    set((state) => ({
      modals: { ...state.modals, [modalName]: { isOpen: true, ...data } },
    })),
  closeModal: (modalName) =>
    set((state) => ({
      modals: { ...state.modals, [modalName]: { isOpen: false } },
    })),
  setActiveSettingTab: (tab) => set({ activeSettingTab: tab }),
  setActiveAvailabilityTab: (tab) => set({ activeAvailabilityTab: tab }),
  setActiveExceptionTab: (tab) => set({ activeExceptionTab: tab }),
}))
