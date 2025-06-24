"use client"

import { useState, useCallback } from "react"

interface SettingsState {
  [key: string]: any
}

interface UseSettingsReturn {
  settings: SettingsState
  updateSetting: (key: string, value: any) => void
  resetSettings: () => void
  saveSettings: () => Promise<void>
  isLoading: boolean
  hasChanges: boolean
}

export const useSettings = (initialSettings: SettingsState = {}): UseSettingsReturn => {
  const [settings, setSettings] = useState<SettingsState>(initialSettings)
  const [originalSettings] = useState<SettingsState>(initialSettings)
  const [isLoading, setIsLoading] = useState(false)

  const updateSetting = useCallback((key: string, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }, [])

  const resetSettings = useCallback(() => {
    setSettings(originalSettings)
  }, [originalSettings])

  const saveSettings = useCallback(async () => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log("Settings saved:", settings)
    } catch (error) {
      console.error("Failed to save settings:", error)
    } finally {
      setIsLoading(false)
    }
  }, [settings])

  const hasChanges = JSON.stringify(settings) !== JSON.stringify(originalSettings)

  return {
    settings,
    updateSetting,
    resetSettings,
    saveSettings,
    isLoading,
    hasChanges,
  }
}
