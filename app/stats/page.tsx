"use client"

import { useDashboardStore } from "@/stores/dashboard-store"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Info } from "lucide-react"

const mockStatsData = [
  { date: "Mar 2024", month: "Mar 2024", bookings: 450, covers: 1200, cancellations: 15, noShows: 0 },
  { date: "Apr 2024", month: "Apr 2024", bookings: 380, covers: 950, cancellations: 12, noShows: 0 },
  { date: "May 2024", month: "May 2024", bookings: 420, covers: 1100, cancellations: 18, noShows: 0 },
  { date: "Jun 2024", month: "Jun 2024", bookings: 480, covers: 1300, cancellations: 20, noShows: 0 },
  { date: "Jul 2024", month: "Jul 2024", bookings: 350, covers: 900, cancellations: 8, noShows: 0 },
  { date: "Aug 2024", month: "Aug 2024", bookings: 320, covers: 850, cancellations: 10, noShows: 0 },
  { date: "Sep 2024", month: "Sep 2024", bookings: 390, covers: 1050, cancellations: 14, noShows: 0 },
  { date: "Oct 2024", month: "Oct 2024", bookings: 520, covers: 1400, cancellations: 25, noShows: 0 },
  { date: "Nov 2024", month: "Nov 2024", bookings: 680, covers: 1800, cancellations: 30, noShows: 0 },
  { date: "Dec 2024", month: "Dec 2024", bookings: 750, covers: 2000, cancellations: 35, noShows: 0 },
  { date: "Jan 2025", month: "Jan 2025", bookings: 580, covers: 1550, cancellations: 22, noShows: 0 },
  { date: "Feb 2025", month: "Feb 2025", bookings: 520, covers: 1400, cancellations: 18, noShows: 0 },
  { date: "Mar 2025", month: "Mar 2025", bookings: 610, covers: 1650, cancellations: 28, noShows: 0 },
]

export default function StatsPage() {
  const { compareWithPrevious, setCompareWithPrevious, activeGraphs, setActiveGraphs } = useDashboardStore()

  const graphOptions = [
    { key: "bookings", label: "Bookings", color: "#FF6B35", enabled: true },
    { key: "covers", label: "Covers", color: "#FF8C42", enabled: true },
    { key: "cancellations", label: "Cancellations", color: "#8B5CF6", enabled: true },
    { key: "noShows", label: "No Shows", color: "#A78BFA", enabled: true },
  ]

  const toggleGraph = (graphKey: string) => {
    if (activeGraphs.includes(graphKey)) {
      setActiveGraphs(activeGraphs.filter((g) => g !== graphKey))
    } else {
      setActiveGraphs([...activeGraphs, graphKey])
    }
  }

  // Calculate averages
  const totalBookings = mockStatsData.reduce((sum, day) => sum + day.bookings, 0)
  const totalCovers = mockStatsData.reduce((sum, day) => sum + day.covers, 0)
  const totalCancellations = mockStatsData.reduce((sum, day) => sum + day.cancellations, 0)
  const totalNoShows = mockStatsData.reduce((sum, day) => sum + day.noShows, 0)

  const avgBookings = (totalBookings / mockStatsData.length).toFixed(1)
  const avgCovers = (totalCovers / mockStatsData.length).toFixed(1)
  const avgCoversPerBooking = (totalCovers / totalBookings).toFixed(1)
  const avgCancellations = (totalCancellations / mockStatsData.length).toFixed(1)
  const avgNoShows = (totalNoShows / mockStatsData.length).toFixed(0)

  return (
    <div className="p-4 lg:p-6 bg-gray-800 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold text-white">Dashboard - The Restaurant at Hidden Valley Wines</h1>
          <div className="flex items-center space-x-2 mt-1">
            <span className="text-blue-400 text-sm">Statistics</span>
            <span className="text-gray-400 text-sm">&gt;</span>
            <span className="text-gray-300 text-sm">Dashboard</span>
          </div>
        </div>
        <div className="text-white font-medium">Apr 17</div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        {/* Main Chart Area */}
        <div className="xl:col-span-3">
          <div className="bg-gray-700 rounded-lg p-6">
            {/* Controls */}
            <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
              <div className="flex items-center space-x-4">
                <select className="bg-gray-600 text-white rounded px-3 py-1 text-sm border border-gray-500">
                  <option>Mar 2024</option>
                  <option>Apr 2024</option>
                  <option>May 2024</option>
                </select>
                <select className="bg-gray-600 text-white rounded px-3 py-1 text-sm border border-gray-500">
                  <option>Mar 2025</option>
                  <option>Apr 2025</option>
                  <option>May 2025</option>
                </select>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={compareWithPrevious}
                    onChange={(e) => setCompareWithPrevious(e.target.checked)}
                    className="rounded bg-gray-600 border-gray-500"
                  />
                  <span className="text-white text-sm">Compare with previous period</span>
                  <Info className="h-4 w-4 text-gray-400" />
                </label>
              </div>

              <select className="bg-gray-600 text-white rounded px-3 py-1 text-sm border border-gray-500">
                <option>Booking Stats</option>
                <option>Revenue Stats</option>
                <option>Guest Stats</option>
              </select>
            </div>

            {/* Filter Checkboxes */}
            <div className="flex items-center space-x-6 mb-6">
              {graphOptions.map((option) => (
                <label key={option.key} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={activeGraphs.includes(option.key) || option.enabled}
                    onChange={() => toggleGraph(option.key)}
                    className="rounded bg-gray-600 border-gray-500"
                  />
                  <span className="text-white text-sm">{option.label}</span>
                </label>
              ))}
              <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm">Local</button>
            </div>

            {/* Chart */}
            <div className="h-80 mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockStatsData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis
                    dataKey="month"
                    stroke="#9CA3AF"
                    fontSize={12}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                    interval={0}
                  />
                  <YAxis stroke="#9CA3AF" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1F2937",
                      border: "1px solid #374151",
                      borderRadius: "8px",
                      color: "#fff",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="bookings"
                    stroke="#FF6B35"
                    strokeWidth={2}
                    dot={{ fill: "#FF6B35", strokeWidth: 2, r: 4 }}
                    connectNulls={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="covers"
                    stroke="#FF8C42"
                    strokeWidth={2}
                    dot={{ fill: "#FF8C42", strokeWidth: 2, r: 4 }}
                    connectNulls={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="cancellations"
                    stroke="#8B5CF6"
                    strokeWidth={2}
                    dot={{ fill: "#8B5CF6", strokeWidth: 2, r: 4 }}
                    connectNulls={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="noShows"
                    stroke="#A78BFA"
                    strokeWidth={2}
                    dot={{ fill: "#A78BFA", strokeWidth: 2, r: 4 }}
                    connectNulls={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-orange-500 rounded"></div>
                <span className="text-gray-300">Bookings Mar 24 - Mar 25</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-orange-400 rounded"></div>
                <span className="text-gray-300">Covers Mar 24 - Mar 25</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded"></div>
                <span className="text-gray-300">Cancellations Mar 24 - Mar 25</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-400 rounded"></div>
                <span className="text-gray-300">No Shows Mar 24 - Mar 25</span>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Sidebar */}
        <div className="space-y-4">
          <div className="bg-gray-700 rounded-lg p-4">
            <div className="text-3xl font-bold text-white mb-1">{avgBookings}</div>
            <div className="text-sm text-gray-300">avg. monthly</div>
            <div className="text-sm text-gray-300">bookings for period</div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <div className="text-3xl font-bold text-white mb-1">{avgCovers}</div>
            <div className="text-sm text-gray-300">avg. monthly</div>
            <div className="text-sm text-gray-300">covers for period</div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <div className="text-3xl font-bold text-white mb-1">{avgCoversPerBooking}</div>
            <div className="text-sm text-gray-300">avg. covers</div>
            <div className="text-sm text-gray-300">per booking for period</div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <div className="text-3xl font-bold text-white mb-1">{avgCancellations}</div>
            <div className="text-sm text-gray-300">avg. monthly</div>
            <div className="text-sm text-gray-300">cancellations for period</div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <div className="text-3xl font-bold text-white mb-1">{avgNoShows}</div>
            <div className="text-sm text-gray-300">avg. monthly</div>
            <div className="text-sm text-gray-300">no shows for period</div>
          </div>
        </div>
      </div>
    </div>
  )
}
