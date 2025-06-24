import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Sidebar from "@/components/layout/sidebar"
import ViewBookingModal from "@/components/modals/view-booking-modal"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Restaurant management dashboard",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950 text-white`}>
        <div className="flex h-screen">
          <Sidebar />
          <main className="flex-1 overflow-auto lg:ml-0">{children}</main>
        </div>
        <ViewBookingModal />
      </body>
    </html>
  )
}
