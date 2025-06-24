"use client"

import { useDashboardStore } from "@/stores/dashboard-store"
import SettingsSidebar from "@/components/layout/settings-sidebar"
import SettingsFactory from "@/components/settings/SettingsFactory"

export default function SettingPage() {
  const { activeSettingTab } = useDashboardStore()

  return (
    <div className="flex h-screen">
      <div className="flex-1 p-6 lg:p-8 overflow-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Settings</h1>
        <SettingsFactory activeTab={activeSettingTab} />
      </div>
      <SettingsSidebar />
    </div>
  )
}
