"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Shield, Menu, X } from "lucide-react"
import { useLang } from "@/context/LangContext"
import { AccessibilityPanel } from "./AccessibilityPanel"

const navLinks = [
  { href: "/", labelKey: "nav.inicio" },
  { href: "/servicios", labelKey: "nav.servicios" },
  { href: "/galeria", labelKey: "nav.galeria" },
  { href: "/contacto", labelKey: "nav.contacto" },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [showAccessibility, setShowAccessibility] = useState(false)
  const pathname = usePathname()
  const { t } = useLang()

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-theme-border bg-theme-bg/95 backdrop-blur supports-[backdrop-filter]:bg-theme-bg/75">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 group" aria-label={t("nav.inicio")}>
          <Shield className="h-8 w-8 text-theme-accent transition-transform group-hover:scale-110" aria-hidden="true" />
          <span className="text-xl font-bold tracking-tight text-theme-text">
            NEXUS <span className="text-theme-accent">IRL</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1" role="navigation" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg
                ${
                  isActive(link.href)
                    ? "text-theme-accent"
                    : "text-theme-secondary hover:text-theme-text hover:bg-theme-surface-2"
                }`}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {t(link.labelKey)}
            </Link>
          ))}
          <div className="ml-2 flex items-center gap-2">
            <button
              onClick={() => setShowAccessibility(!showAccessibility)}
              className="rounded-lg p-2 text-theme-secondary hover:bg-theme-surface-2 hover:text-theme-text transition-colors"
              aria-label="Accesibilidad"
              title="Accesibilidad"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4" />
                <path d="M12 16h.01" />
              </svg>
            </button>
            <Link
              href="/contacto"
              className="rounded-lg bg-theme-accent px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-theme-accent-hover hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent focus-visible:ring-offset-2"
            >
              {t("nav.cotizar")}
            </Link>
          </div>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setShowAccessibility(!showAccessibility)}
            className="rounded-lg p-2 text-theme-secondary hover:bg-theme-surface-2 transition-colors"
            aria-label="Accesibilidad"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4" />
              <path d="M12 16h.01" />
            </svg>
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-theme-secondary hover:bg-theme-surface-2 transition-colors"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-theme-border bg-theme-bg" role="navigation" aria-label="Mobile navigation">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors
                  ${
                    isActive(link.href)
                      ? "text-theme-accent bg-theme-surface-2"
                      : "text-theme-secondary hover:text-theme-text hover:bg-theme-surface-2"
                  }`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {t(link.labelKey)}
              </Link>
            ))}
            <Link
              href="/contacto"
              onClick={() => setOpen(false)}
              className="block rounded-lg bg-theme-accent px-4 py-3 text-center text-base font-semibold text-white mt-4"
            >
              {t("nav.cotizar")}
            </Link>
          </div>
        </nav>
      )}

      {showAccessibility && (
        <div className="absolute right-4 top-16 z-50 w-72 rounded-xl border border-theme-border bg-theme-bg shadow-2xl">
          <AccessibilityPanel onClose={() => setShowAccessibility(false)} />
        </div>
      )}
    </header>
  )
}
