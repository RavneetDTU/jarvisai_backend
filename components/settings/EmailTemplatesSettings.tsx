"use client"

import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "../ui/table"
import { Button } from "../ui/button"
import SettingsHeader from "./SettingsHeader"

const EmailTemplatesSettings: React.FC = () => {
  const defaultTemplates = [
    "New",
    "Changed",
    "Cancelled",
    "Reminder",
    "Payment request",
    "Payment Confirmation",
    "Auto Cancellation",
  ]

  const handleEditTemplate = (templateType: string) => {
    console.log("Edit template:", templateType)
  }

  const handleAddScheduledTemplate = () => {
    console.log("Add scheduled template")
  }

  const handleAddEmailAttachment = () => {
    console.log("Add email attachment")
  }

  return (
    <div className="min-h-screen bg-background p-4 lg:p-8 text-foreground">
      <div className="max-w-screen-xl mx-auto">
        <Card className="bg-card border border-border">
          <SettingsHeader
            title="Email Templates"
            breadcrumbs={["Settings", "Email Templates"]}
            icon={
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            }
          />

          <CardContent className="space-y-10">
            <div>
              <h3 className="text-lg font-semibold mb-4">Default Templates</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Template Type</TableHead>
                    <TableHead>Attachments</TableHead>
                    <TableHead>Edit</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {defaultTemplates.map((templateType, index) => (
                    <TableRow key={index}>
                      <TableCell>{templateType}</TableCell>
                      <TableCell className="text-muted-foreground"></TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" onClick={() => handleEditTemplate(templateType)}>
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                          </svg>
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Scheduled Templates</h3>
                <Button onClick={handleAddScheduledTemplate} className="bg-primary text-white hover:bg-primary/90">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Add Scheduled Template
                </Button>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <p className="text-muted-foreground">No scheduled templates.</p>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Email Attachments</h3>
                <Button onClick={handleAddEmailAttachment} className="bg-primary text-white hover:bg-primary/90">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Add Email Attachment
                </Button>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <p className="text-muted-foreground text-sm mb-4">
                  No email attachments uploaded. To add attachments to your emails you must first upload them here and then you must edit each template you wish to assign the attachment(s) to.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default EmailTemplatesSettings
