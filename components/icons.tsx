import {
  Loader2,
  LucideProps,
  Moon,
  SunMedium,
  Twitter,
  LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  twitter: Twitter,
  spinner: Loader2,
} as const