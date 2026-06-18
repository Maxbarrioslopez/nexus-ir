"use client"

import Link from "next/link"
import { Shield, Award, BadgeCheck, Coins } from "lucide-react"
import { useLang } from "@/context/LangContext"

const badges = [
  { icon: Shield, key: "hero.badge_1" },
  { icon: Award, key: "hero.badge_2" },
  { icon: BadgeCheck, key: "hero.badge_3" },
  { icon: Coins, key: "hero.badge_4" },
]

export function Hero() {
  const { t } = useLang()

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-nexus-900 via-nexus-800 to-nexus-700">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-40" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-nexus-900/80 via-transparent to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 text-sm text-amber-400 mb-6">
            <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" aria-hidden="true" />
            Empresa certificada — Rancagua, Chile
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl max-w-2xl">
            {t("hero.subtitle")}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center rounded-xl bg-amber-500 px-6 py-3 text-base font-semibold text-nexus-900 shadow-lg transition-all hover:bg-amber-400 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-nexus-900"
            >
              {t("hero.cta_primary")}
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/servicios"
              className="inline-flex items-center rounded-xl border border-slate-500/50 bg-white/5 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              {t("hero.cta_secondary")}
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {badges.map((badge) => {
              const Icon = badge.icon
              return (
                <div key={badge.key} className="flex items-center gap-2.5 rounded-xl bg-white/5 px-4 py-3 backdrop-blur-sm">
                  <Icon className="h-5 w-5 shrink-0 text-amber-400" aria-hidden="true" />
                  <span className="text-sm font-medium text-slate-200">
                    {t(badge.key)}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
