"use client"

import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "../ui/button"
import SettingsHeader from "./SettingsHeader"
import SettingsSection from "./SettingsSection"
import { Toggle } from "@/components/ui/toggle"
import { useSettings } from "@/hooks/useSettings"

const EmailSettings: React.FC = () => {
  const { settings, updateSetting, saveSettings, isLoading } = useSettings({
    emailCommunication: true,
    reminderEmails: true,
  })

  const handleSave = async () => {
    await saveSettings()
  }

  return (
    <div className="min-h-screen bg-background p-4 lg:p-8 text-foreground">
      <div className="max-w-screen-xl mx-auto">
        <Card className="bg-card border border-border">
          <SettingsHeader
            title="Email Settings"
            breadcrumbs={["Settings", "Email"]}
            icon={
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            }
          />

          <CardContent>
            <SettingsSection
              title="General Settings"
              icon={<span className="text-lg">📧</span>}
            >
              <div className="space-y-6">
                {[{
                  key: "emailCommunication",
                  label: "Enable Email Communication",
                }, {
                  key: "reminderEmails",
                  label: "Enable Reminder Emails For Internal Bookings",
                }].map(({ key, label }) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-foreground text-sm font-medium">{label}</span>
                    <Toggle
                      pressed={settings[key]}
                      onPressedChange={(val) => updateSetting(key, val)}
                      aria-label={label}
                      className="bg-muted data-[state=on]:bg-green-500 data-[state=on]:text-white"
                    >
                      {settings[key] ? "ENABLED" : "DISABLED"}
                    </Toggle>
                  </div>
                ))}

                <div className="mt-8 p-4 bg-muted rounded-lg text-sm text-muted-foreground">
                  <p>
                    <span className="text-red-500 font-bold">IMPORTANT:</span> The above setting does not affect online bookings made through the booking widget. Guests who made online bookings will automatically receive reminders about their bookings regardless of the above settings. The setting above only determines whether internally entered bookings will receive reminders.
                  </p>
                </div>

                <Button
                  className="mt-6 w-full bg-primary text-white hover:bg-primary/90"
                  onClick={handleSave}
                  disabled={isLoading}
                >
                  {isLoading ? "Saving..." : (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Save
                    </>
                  )}
                </Button>
              </div>
            </SettingsSection>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default EmailSettings