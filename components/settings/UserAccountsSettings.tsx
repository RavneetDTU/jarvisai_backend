"use client"

import type React from "react"
import { Card } from "../ui/card"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "../ui/table"
import { Button } from "../ui/button"
import SettingsHeader from "./SettingsHeader"
import InfoIcon from "@/components/ui/InfoIcon"

const UserAccountsSettings: React.FC = () => {
  const handleAddAccount = () => {
    console.log("Add new account")
  }

  const handleEditPermissions = () => {
    console.log("Edit permissions")
  }

  return (
    <div className="min-h-screen bg-background p-4 lg:p-8 text-foreground">
      <div className="max-w-screen-xl mx-auto">
        <Card className="bg-card border border-border">
          <SettingsHeader
            title="User Accounts"
            breadcrumbs={["Settings", "Accounts"]}
            icon={
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6z" />
              </svg>
            }
          />

          <div className="p-6">
            <div className="flex justify-end mb-4">
              <Button onClick={handleAddAccount} className="bg-primary text-white hover:bg-primary/90">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                </svg>
                Add New Account
              </Button>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Login Email</TableHead>
                  <TableHead>
                    <div className="flex items-center space-x-2">
                      <span>Use Name</span>
                      <InfoIcon tooltip="User display name" />
                    </div>
                  </TableHead>
                  <TableHead>Account Name</TableHead>
                  <TableHead>Permissions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>restaurant@hiddenvalleywines.co.za</TableCell>
                  <TableCell className="text-muted-foreground"></TableCell>
                  <TableCell>Hiddenvalley Wines</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <span>15</span>
                        <svg className="w-4 h-4 text-muted-foreground" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <Button variant="ghost" size="sm" onClick={handleEditPermissions}>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default UserAccountsSettings
