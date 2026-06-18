"use client"

import Link from "next/link"
import { Shield } from "lucide-react"
import { useLang } from "@/context/LangContext"

export default function NotFound() {
  const { t } = useLang()

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <Shield className="h-16 w-16 text-theme-accent mb-6" aria-hidden="true" />
      <h1 className="text-4xl font-bold text-theme-text sm:text-5xl">404</h1>
      <p className="mt-4 text-lg text-theme-secondary">
        {t("not_found.message")}
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-theme-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-theme-accent-hover"
      >
        {t("not_found.cta")}
      </Link>
    </div>
  )
}
