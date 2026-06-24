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
      const timer = setTimeout(() => setVisible(true), 500)
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
      className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up border-t border-amber-500/20 bg-nexus-900/95 backdrop-blur-md supports-[backdrop-filter]:bg-nexus-900/80"
      role="dialog"
      aria-label="Consentimiento de cookies"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="flex-1 text-center text-sm text-slate-300 sm:text-left">
          Usamos cookies propias y de terceros (Google Analytics) para mejorar tu experiencia. Al
          continuar navegando, aceptas su uso.
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="/politica-privacidad"
            className="text-sm font-medium text-amber-400 transition-colors hover:text-amber-300 hover:underline"
          >
            Más información
          </Link>
          <button
            onClick={accept}
            className="rounded-lg bg-amber-500 px-5 py-2 text-sm font-semibold text-nexus-900 transition-all hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-nexus-900"
          >
            Aceptar
          </button>
          <button
            onClick={() => setVisible(false)}
            className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Cerrar"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
