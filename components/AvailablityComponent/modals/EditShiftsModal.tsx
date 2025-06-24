"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const days = ["Mon", "Tue", "Wed", "Thu"];

interface EditShiftsPageProps {
  onClose: () => void;
}

export default function EditShiftsPage({ onClose }: EditShiftsPageProps) {
  const [shiftName, setShiftName] = useState("Bookings");
  const [order, setOrder] = useState("1");
  const [pacing, setPacing] = useState("0");
  const [cutoff, setCutoff] = useState("30");

  return (
    <div className="p-6 space-y-6 bg-gray-900 text-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Edit Shifts</h2>
        <Button 
          variant="outline" 
          onClick={onClose}
          className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-gray-200"
        >
          Close
        </Button>
      </div>

      {/* General Settings */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="font-semibold mb-4 text-gray-200">GENERAL SETTINGS</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label className="text-gray-300">Shift Name</Label>
            <Input 
              value={shiftName} 
              onChange={e => setShiftName(e.target.value)}
              className="bg-gray-700 border-gray-600 text-gray-50 focus-visible:ring-gray-500"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-gray-300">Order</Label>
            <Input 
              value={order} 
              onChange={e => setOrder(e.target.value)}
              className="bg-gray-700 border-gray-600 text-gray-50 focus-visible:ring-gray-500"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-gray-300">Pacing</Label>
            <Input 
              value={pacing} 
              onChange={e => setPacing(e.target.value)}
              className="bg-gray-700 border-gray-600 text-gray-50 focus-visible:ring-gray-500"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-gray-300">Online Booking Cutoff</Label>
            <div className="flex items-center gap-2">
              <Select value="limit">
                <SelectTrigger className="w-64 bg-gray-700 border-gray-600 text-gray-50 hover:bg-gray-600">
                  <SelectValue placeholder="Limit last minute bookings" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-600">
                  <SelectItem 
                    value="limit" 
                    className="hover:bg-gray-700 focus:bg-gray-700 text-gray-200"
                  >
                    Limit last minute bookings
                  </SelectItem>
                </SelectContent>
              </Select>
              <Input 
                className="w-20 bg-gray-700 border-gray-600 text-gray-50 focus-visible:ring-gray-500"
                value={cutoff} 
                onChange={e => setCutoff(e.target.value)} 
              />
              <span className="text-gray-400">mins</span>
            </div>
          </div>
        </div>
      </div>

      {/* Restaurant Settings */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="font-semibold mb-4 text-gray-200">RESTAURANT</h3>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <Switch 
                defaultChecked 
                className="data-[state=checked]:bg-emerald-500 data-[state=unchecked]:bg-gray-600"
              />
              <span className="text-gray-300">Online</span>
            </div>
            <div className="flex items-center gap-2">
              <Label className="text-gray-300">Online Name</Label>
              <Input 
                className="w-40 bg-gray-700 border-gray-600 text-gray-50 focus-visible:ring-gray-500" 
                value="Restaurant" 
                readOnly 
              />
            </div>
          </div>
          <Button 
            variant="secondary" 
            className="bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-gray-200"
          >
            Replicate Monday
          </Button>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-10 gap-3 text-sm font-semibold mb-3 text-gray-400">
          <div>Day</div>
          <div>Open</div>
          <div>First Time</div>
          <div>Last Time</div>
          <div>Total Available</div>
          <div>Total Online</div>
          <div>Min Size</div>
          <div>Max Size</div>
          <div>Turn Time</div>
          <div></div>
        </div>

        {/* Table Rows */}
        {days.map(day => (
          <div key={day} className="grid grid-cols-10 gap-3 items-center py-2 text-sm border-b border-gray-700 last:border-0">
            <div className="text-gray-300">{day}</div>
            <div className="flex flex-col gap-1">
              <Button 
                size="sm" 
                variant="outline" 
                className="h-8 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-gray-200"
              >
                OPEN
              </Button>
              <Button 
                size="sm" 
                variant="ghost" 
                className="h-8 text-gray-400 hover:bg-gray-700 hover:text-gray-200"
              >
                CLOSED
              </Button>
            </div>
            <Select defaultValue="11:30">
              <SelectTrigger className="bg-gray-700 border-gray-600 text-gray-50 hover:bg-gray-600">
                <SelectValue placeholder="--" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-600">
                <SelectItem value="11:30" className="hover:bg-gray-700 text-gray-200">11:30</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="14:30">
              <SelectTrigger className="bg-gray-700 border-gray-600 text-gray-50 hover:bg-gray-600">
                <SelectValue placeholder="--" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-600">
                <SelectItem value="14:30" className="hover:bg-gray-700 text-gray-200">14:30</SelectItem>
              </SelectContent>
            </Select>
            <Input 
              defaultValue="50" 
              className="bg-gray-700 border-gray-600 text-gray-50 focus-visible:ring-gray-500"
            />
            <Input 
              defaultValue="50" 
              className="bg-gray-700 border-gray-600 text-gray-50 focus-visible:ring-gray-500"
            />
            <Input 
              defaultValue="1" 
              className="bg-gray-700 border-gray-600 text-gray-50 focus-visible:ring-gray-500"
            />
            <Input 
              defaultValue="12" 
              className="bg-gray-700 border-gray-600 text-gray-50 focus-visible:ring-gray-500"
            />
            <Select defaultValue="180">
              <SelectTrigger className="bg-gray-700 border-gray-600 text-gray-50 hover:bg-gray-600">
                <SelectValue placeholder="180 mins" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-600">
                <SelectItem value="180" className="hover:bg-gray-700 text-gray-200">180 mins (3hrs)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        ))}
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-end gap-4">
        <Button 
          variant="outline" 
          className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-gray-200"
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button 
          className="bg-emerald-600 hover:bg-emerald-700 text-white"
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
}