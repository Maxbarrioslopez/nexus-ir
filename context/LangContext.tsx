"use client"

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react"
import { t as translate, type Lang } from "@/lib/translations"

interface LangContextType {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string) => string
}

const LangContext = createContext<LangContextType | null>(null)

const LANG_KEY = "nexus-lang"

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(LANG_KEY)
      if (stored === "en" || stored === "es") {
        setLangState(stored)
      } else {
        const browserLang = navigator.language?.slice(0, 2)
        if (browserLang === "en") setLangState("en")
      }
    } catch {
      // localStorage unavailable
    }
    setMounted(true)
  }, [])

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    localStorage.setItem(LANG_KEY, l)
    document.documentElement.lang = l === "en" ? "en" : "es"
  }, [])

  const tt = useCallback(
    (key: string): string => translate(key, lang),
    [lang],
  )

  return (
    <LangContext.Provider value={{ lang, setLang, t: tt }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error("useLang must be used within LangProvider")
  return ctx
}
