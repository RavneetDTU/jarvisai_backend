"use client"

import type React from "react"
import { Card, CardContent } from "../ui/card"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "../ui/table"
import { Button } from "../ui/button"
import SettingsHeader from "./SettingsHeader"

const SMSTemplatesSettings: React.FC = () => {
  const templateTypes = [
    "New Booking",
    "Change Booking",
    "Cancelled Booking",
    "Booking Reminder",
    "Review Request",
    "Join Queue",
    "Leave Queue",
    "Call Queue",
    "Deposit Auto Cancellation",
    "Unrecognised Response Booking",
    "Unrecognised Response Queue",
    "Payment Request",
    "Payment Confirmation",
    "Review Response",
    "Order Pending",
    "Order Accepted",
    "Food Ready",
    "Out For Delivery",
  ]

  const handleViewTemplate = (templateType: string) => {
    console.log("View template:", templateType)
  }

  return (
    <div className="min-h-screen bg-background p-4 lg:p-8 text-foreground">
      <div className="max-w-screen-xl mx-auto">
        <Card className="bg-card border border-border">
          <SettingsHeader
            title="SMS Templates"
            breadcrumbs={["Settings", "SMS Templates"]}
            icon={
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            }
          />

          <CardContent>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">Default Templates</h3>

              <Table>
                <TableHeader>
                  <TableRow className="bg-muted">
                    <TableHead className="text-muted-foreground font-medium">Template Type</TableHead>
                    <TableHead className="text-right text-muted-foreground font-medium">View</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {templateTypes.map((templateType, index) => (
                    <TableRow key={index} className="hover:bg-muted/50">
                      <TableCell className="text-foreground font-normal">{templateType}</TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleViewTemplate(templateType)}
                          className="ml-auto text-primary hover:text-primary/80"
                        >
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path
                              fillRule="evenodd"
                              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default SMSTemplatesSettings;
