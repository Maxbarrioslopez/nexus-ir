"use client"

import Link from "next/link"
import { Check, Home, Building2, ArrowRight } from "lucide-react"
import { services, getServiceIcon } from "@/data/services"
import { useLang } from "@/context/LangContext"
import type { Metadata } from "next"

export default function ServiciosPage() {
  const { t } = useLang()

  return (
    <>
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {t("services_page.title")}
          </h1>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            {t("services_page.subtitle")}
          </p>
        </div>
      </section>

      <section className="bg-theme-surface py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, index) => {
            const Icon = getServiceIcon(service.icon)
            return (
              <article
                key={service.id}
                id={service.id}
                className={`flex flex-col gap-8 lg:flex-row ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-theme-accent/10 text-theme-accent mb-4">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h2 className="text-2xl font-bold text-theme-text sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-base text-theme-secondary leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.forHome && service.forBusiness && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-theme-surface-2 px-3 py-1 text-xs font-medium text-theme-secondary">
                        <Home className="h-3.5 w-3.5" aria-hidden="true" />
                        <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
                        {t("services_page.both")}
                      </span>
                    )}
                    {service.forHome && !service.forBusiness && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-theme-surface-2 px-3 py-1 text-xs font-medium text-theme-secondary">
                        <Home className="h-3.5 w-3.5" aria-hidden="true" />
                        {t("services_page.home_only")}
                      </span>
                    )}
                    {!service.forHome && service.forBusiness && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-theme-surface-2 px-3 py-1 text-xs font-medium text-theme-secondary">
                        <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
                        {t("services_page.business_only")}
                      </span>
                    )}
                  </div>

                  <div className="mt-6">
                    <h3 className="text-sm font-semibold text-theme-text uppercase tracking-wider mb-3">
                      {t("services_page.features_title")}
                    </h3>
                    <ul className="grid gap-2 sm:grid-cols-2" role="list">
                      {service.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-theme-secondary">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-theme-accent" aria-hidden="true" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="aspect-video w-full rounded-2xl bg-gradient-to-br from-nexus-700 to-nexus-900 flex items-center justify-center border border-theme-border/50">
                    <Icon className="h-24 w-24 text-slate-600" aria-hidden="true" />
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-theme-text sm:text-3xl">
            {t("services_page.cta_title")}
          </h2>
          <p className="mt-3 text-lg text-theme-secondary max-w-xl mx-auto">
            {t("services_page.cta_text")}
          </p>
          <Link
            href="/contacto"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-theme-accent px-6 py-3 text-base font-semibold text-white transition-all hover:bg-theme-accent-hover shadow-lg"
          >
            {t("services_page.cta_button")}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
