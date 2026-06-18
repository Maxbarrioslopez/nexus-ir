"use client"

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react"

export type ThemeMode = "light" | "dark" | "system"
export type ColorblindMode =
  | "none"
  | "protanopia"
  | "deuteranopia"
  | "tritanopia"
  | "high-contrast"
export type FontSize = "normal" | "large" | "xlarge"

interface ThemeContextType {
  theme: ThemeMode
  colorblind: ColorblindMode
  fontSize: FontSize
  resolvedTheme: "light" | "dark"
  setTheme: (t: ThemeMode) => void
  setColorblind: (c: ColorblindMode) => void
  setFontSize: (f: FontSize) => void
  cycleTheme: () => void
  cycleColorblind: () => void
  cycleFontSize: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

const THEME_KEY = "nexus-theme"
const CB_KEY = "nexus-colorblind"
const FS_KEY = "nexus-fontsize"

function getStored<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback
  try {
    const stored = localStorage.getItem(key)
    return stored ? (JSON.parse(stored) as T) : fallback
  } catch {
    return fallback
  }
}

const COLORBLIND_CYCLES: ColorblindMode[] = [
  "none",
  "protanopia",
  "deuteranopia",
  "tritanopia",
  "high-contrast",
]

const FONT_CYCLES: FontSize[] = ["normal", "large", "xlarge"]

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>("system")
  const [colorblind, setColorblindState] = useState<ColorblindMode>("none")
  const [fontSize, setFontSizeState] = useState<FontSize>("normal")
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("dark")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setThemeState(getStored<ThemeMode>(THEME_KEY, "dark"))
    setColorblindState(getStored<ColorblindMode>(CB_KEY, "none"))
    setFontSizeState(getStored<FontSize>(FS_KEY, "normal"))
    setMounted(true)
  }, [])

  const applyTheme = useCallback((t: ThemeMode) => {
    let resolved: "light" | "dark"
    if (t === "system") {
      resolved = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    } else {
      resolved = t
    }
    setResolvedTheme(resolved)
    document.documentElement.classList.toggle("dark", resolved === "dark")
  }, [])

  const applyColorblind = useCallback((c: ColorblindMode) => {
    document.documentElement.setAttribute("data-colorblind", c)
  }, [])

  const applyFontSize = useCallback((f: FontSize) => {
    document.documentElement.setAttribute("data-fontsize", f)
  }, [])

  useEffect(() => {
    if (!mounted) return
    applyTheme(theme)
    localStorage.setItem(THEME_KEY, JSON.stringify(theme))
  }, [theme, mounted, applyTheme])

  useEffect(() => {
    if (!mounted) return
    applyColorblind(colorblind)
    localStorage.setItem(CB_KEY, JSON.stringify(colorblind))
  }, [colorblind, mounted, applyColorblind])

  useEffect(() => {
    if (!mounted) return
    applyFontSize(fontSize)
    localStorage.setItem(FS_KEY, JSON.stringify(fontSize))
  }, [fontSize, mounted, applyFontSize])

  useEffect(() => {
    if (!mounted) return
    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    const handler = () => {
      if (theme === "system") applyTheme("system")
    }
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [theme, mounted, applyTheme])

  const setTheme = useCallback((t: ThemeMode) => setThemeState(t), [])
  const setColorblind = useCallback((c: ColorblindMode) => setColorblindState(c), [])
  const setFontSize = useCallback((f: FontSize) => setFontSizeState(f), [])

  const cycleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === "light" ? "dark" : prev === "dark" ? "system" : "light"
      return next
    })
  }, [])

  const cycleColorblind = useCallback(() => {
    setColorblindState((prev) => {
      const idx = COLORBLIND_CYCLES.indexOf(prev)
      return COLORBLIND_CYCLES[(idx + 1) % COLORBLIND_CYCLES.length]
    })
  }, [])

  const cycleFontSize = useCallback(() => {
    setFontSizeState((prev) => {
      const idx = FONT_CYCLES.indexOf(prev)
      return FONT_CYCLES[(idx + 1) % FONT_CYCLES.length]
    })
  }, [])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        colorblind,
        fontSize,
        resolvedTheme,
        setTheme,
        setColorblind,
        setFontSize,
        cycleTheme,
        cycleColorblind,
        cycleFontSize,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider")
  return ctx
}
