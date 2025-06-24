"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Toggle } from "@/components/ui/toggle";
import SettingsSection from "./SettingsSection";
import SettingsHeader from "./SettingsHeader";
import { useSettings } from "@/hooks/useSettings";

const SMSSettings = () => {
  const { settings, updateSetting, saveSettings, isLoading } = useSettings({
    smsCommunication: true,
    smsPaymentRequest: true,
    smsReminders: true,
    smsReviews: true,
    smsAutoReply: true,
    smsAutoTopup: 0,
    numberOfSms: 0,
    agreementChecked: false,
  });

  const handleSave = async () => {
    await saveSettings();
  };

  const handleTopUp = () => {
    console.log("Top-up SMS credits");
  };

  interface Pricing {
    subtotal: number;
    vat: number;
    total: number;
  }

  const calculatePricing = (smsCount: number): Pricing => {
    let pricePerCredit = 0.4;
    if (smsCount >= 1500 && smsCount < 3000) pricePerCredit = 0.39;
    else if (smsCount >= 3000 && smsCount < 5000) pricePerCredit = 0.38;
    else if (smsCount >= 5000) pricePerCredit = 0.37;

    const subtotal = smsCount * pricePerCredit;
    const vat = subtotal * 0.15;
    const total = subtotal + vat;

    return { subtotal, vat, total };
  };

  const pricing = calculatePricing(settings.numberOfSms);

  return (
    <div className="min-h-screen bg-[#1f2937] p-4 lg:p-8 text-white">
      <div className="max-w-screen-xl mx-auto">
        <Card className="bg-[#111827]">
          <SettingsHeader
            title="SMS Settings"
            breadcrumbs={["Settings", "SMS"]}
            icon={<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>}
          />
          <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="w-full">
              <SettingsSection title="General Settings" icon={<span className="text-lg">⚙️</span>}>
                <div className="space-y-4">
                  {["smsCommunication", "smsPaymentRequest", "smsReminders", "smsReviews", "smsAutoReply"].map((key) => (
                    <div className="flex items-center justify-between" key={key}>
                      <span className="text-white">
                        {key === "smsCommunication" && "Enable SMS Communication"}
                        {key === "smsPaymentRequest" && "Enable SMS Payment Request"}
                        {key === "smsReminders" && "Enable SMS Reminders"}
                        {key === "smsReviews" && "Enable SMS Reviews"}
                        {key === "smsAutoReply" && "Enable SMS Auto-Reply"}
                      </span>
                      <Toggle
                        pressed={settings[key]}
                        onPressedChange={(val) => updateSetting(key, val)}
                        className="bg-gray-600 data-[state=on]:bg-green-500 text-white"
                      >
                        {settings[key] ? "ENABLED" : "DISABLED"}
                      </Toggle>
                    </div>
                  ))}

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white">SMS Auto Top-up</span>
                    <Input
                      type="number"
                      value={settings.smsAutoTopup}
                      onChange={(e) => updateSetting("smsAutoTopup", parseInt(e.target.value) || 0)}
                      className="w-24 text-center"
                    />
                  </div>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-gray-400 list-disc list-inside">
                  <li>SMSs are sent daily at 8am for bookings on the day.</li>
                  <li>Includes bookings from 11am onward and next day before 11am unless set otherwise.</li>
                  <li>Bookings marked "Confirmed" or "Dep. Required" will not receive SMS confirmations.</li>
                  <li>Guests replying "Confirm" auto-set booking to Confirmed.</li>
                  <li>Guests can cancel by replying "Cancel".</li>
                </ul>
                <Button className="mt-6 w-full bg-green-600 text-white" onClick={handleSave} disabled={isLoading}>
                  {isLoading ? "Saving..." : "Save"}
                </Button>
              </SettingsSection>
            </div>

            <div className="w-full">
              <SettingsSection title="SMS Top-up" icon={<span className="text-lg">➕</span>}>
                <div className="space-y-3 text-sm text-gray-400">
                  <div className="flex justify-between"><span>500 - 1,499 credits</span><span>R 0.40</span></div>
                  <div className="flex justify-between"><span>1,500 - 2,999 credits</span><span>R 0.39</span></div>
                  <div className="flex justify-between"><span>3,000 - 4,999 credits</span><span>R 0.38</span></div>
                  <div className="flex justify-between"><span>5,000 credits</span><span>R 0.37</span></div>
                  <p className="text-xs mt-1">* all prices exclude VAT</p>
                </div>

                <div className="mt-6">
                  <Label>Number of SMSs</Label>
                  <Input
                    type="number"
                    value={settings.numberOfSms}
                    onChange={(e) => updateSetting("numberOfSms", parseInt(e.target.value) || 0)}
                    min={0}
                    max={5000}
                  />
                  <p className="text-xs mt-1">Min 500 & Max 5,000 SMS credits</p>
                </div>

                <div className="mt-4 space-y-1 text-sm">
                  <div className="flex justify-between"><span>Subtotal</span><span>R {pricing.subtotal.toFixed(2)}</span></div>
                  <div className="flex justify-between"><span>VAT</span><span>R {pricing.vat.toFixed(2)}</span></div>
                  <div className="flex justify-between font-semibold text-white"><span>Estimated Total</span><span>R {pricing.total.toFixed(2)}</span></div>
                </div>

                <label className="flex items-start space-x-2 mt-4">
                  <input
                    type="checkbox"
                    checked={settings.agreementChecked}
                    onChange={(e) => updateSetting("agreementChecked", e.target.checked)}
                    className="mt-1"
                  />
                  <span className="text-sm text-gray-300">I agree that this SMS purchase will be added to my next debit order.</span>
                </label>

                <Button
                  className="mt-6 w-full bg-cyan-600 hover:bg-cyan-700 text-white"
                  onClick={handleTopUp}
                  disabled={!settings.agreementChecked || settings.numberOfSms < 500}
                >
                  ➕ Top-up SMS Credits
                </Button>
              </SettingsSection>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SMSSettings;
