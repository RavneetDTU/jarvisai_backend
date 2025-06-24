import type {
  ReactNode,
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
  LabelHTMLAttributes,
} from "react"

export interface BaseComponentProps {
  className?: string
  children?: ReactNode
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, BaseComponentProps {
  variant?: "default" | "outline" | "ghost" | "destructive"
  size?: "sm" | "md" | "lg"
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean
}

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean
}

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement>, BaseComponentProps {}

export interface CardProps extends BaseComponentProps {}

export interface TableProps extends BaseComponentProps {}
