"use client"

import Link from "next/link"
import { Shield, Award, BadgeCheck, Coins, ArrowRight } from "lucide-react"
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
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <div className="absolute inset-0 bg-grid" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" aria-hidden="true" />

      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-amber-500/5 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 h-80 w-80 rounded-full bg-amber-500/3 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 pt-32 pb-20 sm:px-6 sm:pt-40 sm:pb-28 lg:px-8 lg:pt-48 lg:pb-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 text-sm text-amber-400 mb-8 animate-fade-in">
            <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" aria-hidden="true" />
            Empresa certificada — Rancagua, Chile
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance animate-fade-in-up">
            {t("hero.title")}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            {t("hero.subtitle")}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Link
              href="/contacto"
              className="btn-primary inline-flex items-center gap-2"
            >
              {t("hero.cta_primary")}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/servicios"
              className="btn-secondary inline-flex items-center gap-2"
            >
              {t("hero.cta_secondary")}
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            {badges.map((badge) => {
              const Icon = badge.icon
              return (
                <div
                  key={badge.key}
                  className="flex items-center gap-2.5 rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3.5 backdrop-blur-sm hover:bg-white/[0.06] hover:border-white/10 transition-all"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 shrink-0">
                    <Icon className="h-4 w-4 text-amber-400" aria-hidden="true" />
                  </div>
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
