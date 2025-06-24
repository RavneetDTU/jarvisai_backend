"use client"

import type React from "react"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Select } from "../ui/select"
import { Textarea } from "../ui/textarea"
import InfoIcon from "@/components/ui/InfoIcon"
import { cn } from "@/utils/cn"

interface BaseFieldProps {
  label: string
  showInfo?: boolean
  infoTooltip?: string
  className?: string
}

interface InputFieldProps extends BaseFieldProps {
  type: "input"
  inputType?: string
  value?: string
  placeholder?: string
  onChange?: (value: string) => void
}

interface SelectFieldProps extends BaseFieldProps {
  type: "select"
  value?: string
  options: { value: string; label: string }[]
  onChange?: (value: string) => void
}

interface TextareaFieldProps extends BaseFieldProps {
  type: "textarea"
  value?: string
  placeholder?: string
  rows?: number
  onChange?: (value: string) => void
}

type FormFieldProps = InputFieldProps | SelectFieldProps | TextareaFieldProps

const FormField: React.FC<FormFieldProps> = (props) => {
  const { label, showInfo, infoTooltip, className } = props

  const renderLabel = () => (
    <Label className={cn("flex items-center space-x-2", className)}>
      <span>{label}</span>
      {showInfo && <InfoIcon tooltip={infoTooltip} />}
    </Label>
  )

  const renderField = () => {
    switch (props.type) {
      case "input":
        return (
          <Input
            type={props.inputType || "text"}
            value={props.value}
            placeholder={props.placeholder}
            onChange={(e) => props.onChange?.(e.target.value)}
          />
        )
      case "select":
        return (
          <Select value={props.value} onValueChange={(value) => props.onChange?.(value)}>
            {props.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        )
      case "textarea":
        return (
          <Textarea
            value={props.value}
            placeholder={props.placeholder}
            rows={props.rows || 3}
            onChange={(e) => props.onChange?.(e.target.value)}
          />
        )
      default:
        return null
    }
  }

  return (
    <div>
      {renderLabel()}
      {renderField()}
    </div>
  )
}

export default FormField
