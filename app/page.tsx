"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    router.push("/reservation")
  }, [router])

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Admin Dashboard</h1>
        <p className="text-gray-400">Redirecting to reservations...</p>
      </div>
    </div>
  )
}
