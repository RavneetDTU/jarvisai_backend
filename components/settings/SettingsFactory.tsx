import type React from "react"
import UserAccountsSettings from "./UserAccountsSettings"
import EmailSettings from "./EmailSettings"
import EmailTemplatesSettings from "./EmailTemplatesSettings"
import SMSSettings from "./SMSSettings"
import SMSTemplatesSettings from "./SMSTemplatesSettings"
import GeneralSettings from "./GeneralSettings"
import GoogleAddressSettings from "./GoogleAddressSettings"

interface SettingsFactoryProps {
  activeTab: string
}

const SettingsFactory: React.FC<SettingsFactoryProps> = ({ activeTab }) => {
  const renderSettingsComponent = () => {
    switch (activeTab) {
      case "general":
        return <GeneralSettings />
      case "google-address":
        return <GoogleAddressSettings />
      case "user-accounts":
        return <UserAccountsSettings />
      case "email":
        return <EmailSettings />
      case "email-templates":
        return <EmailTemplatesSettings />
      case "sms":
        return <SMSSettings />
      case "sms-templates":
        return <SMSTemplatesSettings />
      default:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">
              {activeTab.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
            </h2>
            <div className="bg-gray-800 rounded-xl p-6">
              <p className="text-gray-400">Settings for {activeTab} will be implemented here.</p>
            </div>
          </div>
        )
    }
  }

  return <>{renderSettingsComponent()}</>
}

export default SettingsFactory
