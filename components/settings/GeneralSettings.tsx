"use client"

import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "../ui/button"
import SettingsHeader from "./SettingsHeader"
import SettingsSection from "./SettingsSection"
import FormField from "./FormField"
import { useSettings } from "@/hooks/useSettings"

const GeneralSettings: React.FC = () => {
  const { settings, updateSetting, saveSettings, isLoading } = useSettings({
    restaurantName: "The Restaurant at Hidden Valley Wines",
    timeZone: "(GMT+02:00) Johannesburg",
    country: "South Africa",
    timeStep: "30 mins",
    instagram: "https://www.instagram.com/yourprofile",
    facebook: "https://www.facebook.com/yourpage",
    primaryTelephone: "0210073477",
    website: "https://www.hiddenvalleywines.co.za/pages/restaurant-at-hidden-valley",
    email: "restaurant@hiddenvalleywines.co.za",
    tiktok: "https://www.tiktok.com/@yourprofile",
  })

  const handleSave = async () => {
    await saveSettings()
  }

  const timeZoneOptions = [
    { value: "(GMT+02:00) Johannesburg", label: "(GMT+02:00) Johannesburg" },
    { value: "(GMT+00:00) London", label: "(GMT+00:00) London" },
    { value: "(GMT-05:00) New York", label: "(GMT-05:00) New York" },
    { value: "(GMT+01:00) Paris", label: "(GMT+01:00) Paris" },
  ]

  const countryOptions = [
    { value: "South Africa", label: "South Africa" },
    { value: "United States", label: "United States" },
    { value: "United Kingdom", label: "United Kingdom" },
    { value: "Canada", label: "Canada" },
    { value: "Australia", label: "Australia" },
  ]

  const timeStepOptions = [
    { value: "15 mins", label: "15 mins" },
    { value: "30 mins", label: "30 mins" },
    { value: "45 mins", label: "45 mins" },
    { value: "60 mins", label: "60 mins" },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <SettingsHeader title="Restaurant Details" breadcrumbs={["Settings", "Profile"]} />

        <div className="border-b border-gray-600">
          <button className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-white font-medium">LOGO UPLOAD</span>
            </div>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SettingsSection
              title="GENERAL"
              icon={
                <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              }
            >
              <div className="space-y-4">
                <FormField
                  type="input"
                  label="Restaurant Name"
                  value={settings.restaurantName}
                  onChange={(value) => updateSetting("restaurantName", value)}
                />

                <FormField
                  type="select"
                  label="Time Zone"
                  value={settings.timeZone}
                  options={timeZoneOptions}
                  onChange={(value) => updateSetting("timeZone", value)}
                  showInfo
                  infoTooltip="Select your restaurant's time zone"
                />

                <FormField
                  type="select"
                  label="Country"
                  value={settings.country}
                  options={countryOptions}
                  onChange={(value) => updateSetting("country", value)}
                />

                <FormField
                  type="select"
                  label="Time Step"
                  value={settings.timeStep}
                  options={timeStepOptions}
                  onChange={(value) => updateSetting("timeStep", value)}
                  showInfo
                  infoTooltip="Booking time intervals"
                />

                <FormField
                  type="input"
                  inputType="url"
                  label="Instagram"
                  value={settings.instagram}
                  onChange={(value) => updateSetting("instagram", value)}
                />

                <FormField
                  type="input"
                  inputType="url"
                  label="Facebook"
                  value={settings.facebook}
                  onChange={(value) => updateSetting("facebook", value)}
                />
              </div>
            </SettingsSection>

            <SettingsSection
              title="CONTACT DETAILS"
              icon={
                <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              }
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Primary Telephone</label>
                  <div className="flex">
                    <div className="bg-gray-600 text-white px-3 py-2 rounded-l-md border border-gray-600 border-r-0 flex items-center">
                      +27
                    </div>
                    <input
                      type="tel"
                      value={settings.primaryTelephone}
                      onChange={(e) => updateSetting("primaryTelephone", e.target.value)}
                      className="flex-1 bg-gray-700 text-white rounded-r-md px-3 py-2 border border-gray-600 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <FormField
                  type="input"
                  inputType="url"
                  label="Website"
                  value={settings.website}
                  onChange={(value) => updateSetting("website", value)}
                />

                <FormField
                  type="input"
                  inputType="email"
                  label="Email"
                  value={settings.email}
                  onChange={(value) => updateSetting("email", value)}
                  showInfo
                  infoTooltip="Primary contact email"
                />

                <FormField
                  type="input"
                  inputType="url"
                  label="TikTok"
                  value={settings.tiktok}
                  onChange={(value) => updateSetting("tiktok", value)}
                />
              </div>
            </SettingsSection>
          </div>

          <div className="mt-8">
            <Button className="w-full" onClick={handleSave} disabled={isLoading}>
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {isLoading ? "Saving..." : "Save"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default GeneralSettings
