"use client";

import { useState, useEffect } from "react";
import { X, Home, Info } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Toggle } from "@/components/ui/toggle";

interface SeatingArea {
  id: string;
  name: string;
  abbreviation: string;
  order: number;
  warningThresholdOrange: number;
  warningThresholdRed: number;
  availableOnline: boolean;
  onlineSeatingName: string;
  seatingDescription: string;
  backgroundColor: string;
  fontColor: string;
}

interface EditSeatingAreaModalProps {
  isOpen?: boolean; // Optional for full-page
  onClose: () => void;
  seatingAreaId?: string;
}

export default function EditSeatingModal({ onClose, seatingAreaId }: EditSeatingAreaModalProps) {
  const [formData, setFormData] = useState<SeatingArea>({
    id: "",
    name: "Restaurant",
    abbreviation: "Rest",
    order: 1,
    warningThresholdOrange: 10,
    warningThresholdRed: 0,
    availableOnline: true,
    onlineSeatingName: "Restaurant",
    seatingDescription: "",
    backgroundColor: "#34d399", // Using emerald-400 from your theme
    fontColor: "#ef4444", // Using carmine from your theme
  });

  const [backgroundColorInput, setBackgroundColorInput] = useState("#34d399");
  const [fontColorInput, setFontColorInput] = useState("#ef4444");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (seatingAreaId) {
      console.log("Loading seating area:", seatingAreaId);
    }
  }, [seatingAreaId]);

  const handleInputChange = (field: keyof SeatingArea, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    setIsLoading(true);
    try {
      console.log("Saving seating area:", formData);
      await new Promise(resolve => setTimeout(resolve, 1000));
      onClose();
    } catch (error) {
      console.error("Error saving seating area:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleColorChange = (type: 'background' | 'font', value: string) => {
    if (type === 'background') {
      setFormData(prev => ({ ...prev, backgroundColor: value }));
      setBackgroundColorInput(value);
    } else {
      setFormData(prev => ({ ...prev, fontColor: value }));
      setFontColorInput(value);
    }
  };

  const handleGetFromInput = (type: 'background' | 'font') => {
    if (type === 'background') {
      setFormData(prev => ({ ...prev, backgroundColor: backgroundColorInput }));
    } else {
      setFormData(prev => ({ ...prev, fontColor: fontColorInput }));
    }
  };

  const handleResetColors = () => {
    setFormData(prev => ({
      ...prev,
      backgroundColor: "#34d399", // emerald-400
      fontColor: "#ef4444", // carmine
    }));
    setBackgroundColorInput("#34d399");
    setFontColorInput("#ef4444");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-50 p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-700 pb-4">
        <div>
          <h3 className="text-2xl font-semibold">Edit Seating Area</h3>
          <div className="flex items-center space-x-2 text-sm text-gray-400 mt-1">
            <Home className="h-4 w-4" />
            <span>Availability</span>
            <span>/</span>
            <span>Seating</span>
            <span>/</span>
            <span>Edit</span>
          </div>
        </div>
        <button 
          onClick={onClose} 
          className="text-gray-400 hover:text-gray-50 transition-colors"
        >
          <X size={24} />
        </button>
      </div>

      {/* Form Section */}
      <div className="space-y-8">
        {/* General Settings */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h4 className="text-lg font-medium mb-4 text-gray-100">General Settings</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label className="text-gray-300">Seating Area Name</Label>
              <Input 
                value={formData.name} 
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="bg-gray-700 border-gray-600 text-gray-50"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-gray-300">Abbreviation</Label>
              <Input 
                value={formData.abbreviation} 
                onChange={(e) => handleInputChange('abbreviation', e.target.value)}
                className="bg-gray-700 border-gray-600 text-gray-50"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-gray-300">Order</Label>
              <Input 
                type="number" 
                value={formData.order} 
                onChange={(e) => handleInputChange('order', parseInt(e.target.value) || 0)}
                className="bg-gray-700 border-gray-600 text-gray-50"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-gray-300">Warning Threshold (Orange)</Label>
              <Input 
                type="number" 
                value={formData.warningThresholdOrange} 
                onChange={(e) => handleInputChange('warningThresholdOrange', parseInt(e.target.value) || 0)}
                className="bg-gray-700 border-gray-600 text-gray-50"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-gray-300">Warning Threshold (Red)</Label>
              <Input 
                type="number" 
                value={formData.warningThresholdRed} 
                onChange={(e) => handleInputChange('warningThresholdRed', parseInt(e.target.value) || 0)}
                className="bg-gray-700 border-gray-600 text-gray-50"
              />
            </div>
          </div>
        </section>

        {/* Online Settings */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h4 className="text-lg font-medium mb-4 text-gray-100">Online Widget Settings</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-gray-300">Available Online</Label>
              <div className="pt-2">
                <Toggle 
                  pressed={formData.availableOnline} 
                  onToggle={(v) => handleInputChange('availableOnline', v)}
                  className="data-[state=on]:bg-emerald-500"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-gray-300">Online Seating Name</Label>
              <Input 
                value={formData.onlineSeatingName} 
                onChange={(e) => handleInputChange('onlineSeatingName', e.target.value)}
                className="bg-gray-700 border-gray-600 text-gray-50"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <Label className="text-gray-300">Description</Label>
              <Textarea 
                rows={3} 
                value={formData.seatingDescription} 
                onChange={(e) => handleInputChange('seatingDescription', e.target.value)}
                className="bg-gray-700 border-gray-600 text-gray-50"
              />
            </div>
          </div>
        </section>

        {/* Color Settings */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h4 className="text-lg font-medium mb-4 text-gray-100">Color Settings</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-gray-300">Background Color</Label>
                <div className="flex gap-2">
                  <Input 
                    value={formData.backgroundColor}
                    onChange={(e) => handleColorChange('background', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-gray-50 flex-1"
                  />
                  <div 
                    className="w-10 h-10 rounded-md border border-gray-600"
                    style={{ backgroundColor: formData.backgroundColor }}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-gray-300">Font Color</Label>
                <div className="flex gap-2">
                  <Input 
                    value={formData.fontColor}
                    onChange={(e) => handleColorChange('font', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-gray-50 flex-1"
                  />
                  <div 
                    className="w-10 h-10 rounded-md border border-gray-600"
                    style={{ backgroundColor: formData.fontColor }}
                  />
                </div>
              </div>
              <Button 
                onClick={handleResetColors}
                variant="outline"
                className="text-gray-300 border-gray-600 hover:bg-gray-700"
              >
                Reset Colors
              </Button>
            </div>
            <div className="flex items-center justify-center">
              <div 
                className="w-full h-40 rounded-lg flex items-center justify-center text-xl font-bold"
                style={{ 
                  backgroundColor: formData.backgroundColor,
                  color: formData.fontColor
                }}
              >
                Preview
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Actions */}
      <div className="flex justify-end gap-4 mt-8">
        <Button 
          variant="outline" 
          onClick={onClose}
          className="border-gray-600 text-gray-300 hover:bg-gray-700"
        >
          Cancel
        </Button>
        <Button 
          onClick={handleSave} 
          className="bg-emerald-600 hover:bg-emerald-700 text-white"
          disabled={isLoading}
        >
          {isLoading ? "Saving..." : "Save Seating Area"}
        </Button>
      </div>
    </div>
  );
}