import type React from "react"
import { cn } from "@/utils/cn"

interface SettingsSectionProps {
  title: string
  icon?: React.ReactNode
  children: React.ReactNode
  className?: string
}

const SettingsSection: React.FC<SettingsSectionProps> = ({ title, icon, children, className }) => {
  return (
    <div className={cn("space-y-6", className)}>
      <div className="flex items-center space-x-3 mb-6">
        {icon && <div className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center">{icon}</div>}
        <span className="text-white font-medium">{title}</span>
      </div>
      {children}
    </div>
  )
}

export default SettingsSection
