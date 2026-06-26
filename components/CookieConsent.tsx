"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"

const STORAGE_KEY = "nexus-cookie-consent"

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem(STORAGE_KEY)
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(timer)
    }
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, "true")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-amber-500/10"
      role="dialog"
      aria-label="Consentimiento de cookies"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="flex-1 text-center text-sm text-slate-300 sm:text-left">
          Usamos cookies propias y de terceros para mejorar tu experiencia. Al continuar navegando, aceptas su uso conforme a nuestra{" "}
          <Link href="/politica-privacidad" className="text-amber-400 hover:underline">política de privacidad</Link>.
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="/politica-privacidad"
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            Más info
          </Link>
          <button
            onClick={accept}
            className="rounded-xl bg-amber-500 px-5 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-amber-400"
          >
            Aceptar
          </button>
          <button
            onClick={() => setVisible(false)}
            className="rounded-xl p-2 text-slate-500 transition-colors hover:bg-white/5 hover:text-white"
            aria-label="Cerrar"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
