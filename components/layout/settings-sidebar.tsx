"use client"

import { useDashboardStore } from "@/stores/dashboard-store"
import {
  Settings,
  MapPin,
  Zap,
  Bell,
  Users,
  Mail,
  FileText,
  MessageSquare,
  Calendar,
  MenuIcon,
  Plus,
  Star,
  Tag,
  Lock,
  Ticket,
  CreditCard,
  Receipt,
  FileSpreadsheet,
  Wallet,
} from "lucide-react"

const settingsNavigation = [
  { id: "general", name: "General Settings", icon: Settings },
  { id: "google-address", name: "Google Address Settings", icon: MapPin },
  { id: "advanced", name: "Advanced Settings", icon: Zap },
  { id: "notification", name: "Notification Settings", icon: Bell },
  { id: "user-accounts", name: "User Accounts", icon: Users },
  { id: "email", name: "Email Settings", icon: Mail },
  { id: "email-templates", name: "Email Templates", icon: FileText },
  { id: "sms", name: "SMS Settings", icon: MessageSquare },
  { id: "sms-templates", name: "SMS Templates", icon: FileText },
  { id: "booking-calendar", name: "Booking Calendar Settings", icon: Calendar },
  { id: "menu-addons", name: "Menu Addons", icon: Plus },
  { id: "review", name: "Review Settings", icon: Star },
  { id: "booking-tags", name: "Booking Tags", icon: Tag },
  { id: "guest-tags", name: "Guest Tags", icon: Tag },
  { id: "queue-tags", name: "Queue Tags", icon: Tag },
  { id: "change-password", name: "Change Password", icon: Lock },
  { id: "enable-vouchering", name: "Enable Vouchering", icon: Ticket },
]

const paymentSettings = [
  { id: "payment-settings", name: "Payment Settings", icon: CreditCard },
  { id: "payment-items", name: "Payment Items", icon: Receipt },
  { id: "payment-templates", name: "Payment Templates", icon: FileSpreadsheet },
  { id: "payment-reports", name: "Payment Reports Generation", icon: FileText },
  { id: "payouts", name: "Payouts", icon: Wallet },
]

export default function SettingsSidebar() {
  const { activeSettingTab, setActiveSettingTab } = useDashboardStore()

  return (
    <div className="w-80 bg-gray-900 border-l border-gray-700 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-white mb-4">SETTINGS</h2>

        <nav className="space-y-1">
          {settingsNavigation.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSettingTab(item.id)}
              className={`
                w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors text-left
                ${
                  activeSettingTab === item.id
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }
              `}
            >
              <item.icon className="mr-3 h-4 w-4" />
              {item.name}
            </button>
          ))}
        </nav>

        <div className="mt-8">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">PAYMENT SETTINGS</h3>
          <nav className="space-y-1">
            {paymentSettings.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSettingTab(item.id)}
                className={`
                  w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors text-left
                  ${
                    activeSettingTab === item.id
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }
                `}
              >
                <item.icon className="mr-3 h-4 w-4" />
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
