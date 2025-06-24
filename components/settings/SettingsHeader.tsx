import React from "react"

interface SettingsHeaderProps {
  title: string
  breadcrumbs: string[]
  icon?: React.ReactNode
}

const SettingsHeader: React.FC<SettingsHeaderProps> = ({ title, breadcrumbs, icon }) => {
  return (
    <div className="bg-gray-700 px-6 py-4 border-b border-gray-600">
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <div className="flex items-center space-x-2 mt-2 text-sm text-gray-400">
        {icon}
        {breadcrumbs.map((crumb, index) => (
          <React.Fragment key={index}>
            <span>{crumb}</span>
            {index < breadcrumbs.length - 1 && <span>/</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default SettingsHeader
