"use client"

import Link from "next/link"
import { Building2, Home } from "lucide-react"
import { services, getServiceIcon } from "@/data/services"
import { useLang } from "@/context/LangContext"

export function ServicesSection() {
  const { t, lang } = useLang()

  return (
    <section className="bg-theme-surface py-16 sm:py-24" id="servicios">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-theme-text sm:text-4xl">
            {t("services.title")}
          </h2>
          <p className="mt-4 text-lg text-theme-secondary">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = getServiceIcon(service.icon)
            return (
              <article
                key={service.id}
                id={service.id}
                className="group relative rounded-2xl border border-theme-border bg-theme-bg p-6 transition-all hover:border-theme-accent/50 hover:shadow-lg hover:shadow-theme-accent/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-theme-accent/10 text-theme-accent transition-transform group-hover:scale-110">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-theme-text">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-theme-secondary leading-relaxed">
                  {service.shortDesc}
                </p>

                <ul className="mt-4 space-y-2" role="list">
                  {service.features.slice(0, 3).map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-theme-secondary">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-theme-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex items-center gap-2">
                  {service.forHome && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-theme-surface-2 px-2.5 py-0.5 text-xs font-medium text-theme-secondary" title={t("services.for_home")}>
                      <Home className="h-3 w-3" aria-hidden="true" />
                      {t("services.for_home")}
                    </span>
                  )}
                  {service.forBusiness && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-theme-surface-2 px-2.5 py-0.5 text-xs font-medium text-theme-secondary" title={t("services.for_business")}>
                      <Building2 className="h-3 w-3" aria-hidden="true" />
                      {t("services.for_business")}
                    </span>
                  )}
                </div>

                <Link
                  href={`/servicios#${service.id}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-theme-accent hover:text-theme-accent-hover transition-colors"
                >
                  {t("services.cta")}
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
