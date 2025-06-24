"use client"

import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "../ui/button"
import SettingsHeader from "./SettingsHeader"
import SettingsSection from "./SettingsSection"
import FormField from "./FormField"
import { useSettings } from "@/hooks/useSettings"

const GoogleAddressSettings: React.FC = () => {
  const { settings, updateSetting, saveSettings, isLoading } = useSettings({
    address: "Off Annandale Rd, Stellenbosch, 7613, South Africa",
    streetAddress1: "Off Annandale Rd",
    streetAddress2: "",
    suburb: "Stellenbosch",
    city: "Stellenbosch",
    province: "WC",
    postalCode: "7613",
    latitude: "-33.99372101",
    longitude: "18.81639671",
  })

  const handleSave = async () => {
    await saveSettings()
  }

  return (
    <div className="space-y-6">
      <Card>
        <SettingsHeader title="Google Address Settings" breadcrumbs={["Settings", "Google Address Settings"]} />

        <CardContent>
          <SettingsSection
            title="ENTER YOUR RESTAURANT'S ADDRESS"
            icon={
              <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            }
          >
            <div className="mb-6 text-sm text-gray-300 space-y-2">
              <p>
                Enter your address below to initiate Reserve with Google integration. Typing into the address input will
                auto search Google. When you select an option it will populate the fields for you.
              </p>
              <p className="text-gray-400">
                <strong>TIP:</strong> You can DRAG a DROP the map pin in order to set your location more accurately.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Form Fields */}
              <div className="space-y-4">
                <FormField
                  type="input"
                  label="Address"
                  value={settings.address}
                  onChange={(value) => updateSetting("address", value)}
                />

                <FormField
                  type="input"
                  label="Street Address line 1"
                  value={settings.streetAddress1}
                  onChange={(value) => updateSetting("streetAddress1", value)}
                />

                <FormField
                  type="input"
                  label="Street Address line 2"
                  value={settings.streetAddress2}
                  placeholder="e.g. Main Street"
                  onChange={(value) => updateSetting("streetAddress2", value)}
                />

                <FormField
                  type="input"
                  label="Suburb"
                  value={settings.suburb}
                  onChange={(value) => updateSetting("suburb", value)}
                />

                <FormField
                  type="input"
                  label="City"
                  value={settings.city}
                  onChange={(value) => updateSetting("city", value)}
                />

                <FormField
                  type="input"
                  label="Province"
                  value={settings.province}
                  onChange={(value) => updateSetting("province", value)}
                />

                <FormField
                  type="input"
                  label="Postal Code"
                  value={settings.postalCode}
                  onChange={(value) => updateSetting("postalCode", value)}
                />
              </div>

              {/* Right Column - Map */}
              <div className="space-y-4">
                <div className="bg-gray-200 rounded-lg overflow-hidden h-80 relative">
                  <img
                    src="/placeholder.svg?height=320&width=400"
                    alt="Google Maps showing Stellenbosch location"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-white px-2 py-1 rounded text-xs text-gray-600">
                    Google
                  </div>
                  <div className="absolute bottom-2 right-2 text-xs text-gray-600 bg-white px-2 py-1 rounded">
                    Map data ©2024 AfriGIS (Pty) Ltd
                  </div>
                </div>

                <div className="text-xs text-gray-400">
                  NB: If the pin is not in the correct location pick it up and move it.
                </div>

                {/* Coordinates */}
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    type="input"
                    label="Latitude"
                    value={settings.latitude}
                    onChange={(value) => updateSetting("latitude", value)}
                    showInfo
                    infoTooltip="GPS Latitude coordinate"
                  />

                  <FormField
                    type="input"
                    label="Longitude"
                    value={settings.longitude}
                    onChange={(value) => updateSetting("longitude", value)}
                    showInfo
                    infoTooltip="GPS Longitude coordinate"
                  />
                </div>
              </div>
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
          </SettingsSection>
        </CardContent>
      </Card>
    </div>
  )
}

export default GoogleAddressSettings
