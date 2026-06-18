"use client"

import { type ReactNode } from "react"
import { ThemeProvider } from "@/context/ThemeContext"
import { LangProvider } from "@/context/LangContext"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LangProvider>{children}</LangProvider>
    </ThemeProvider>
  )
}
