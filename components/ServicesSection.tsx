"use client"

import { useLang } from "@/context/LangContext"
import { ServicesCarousel } from "./ServicesCarousel"

export function ServicesSection() {
  const { t } = useLang()

  return (
    <section className="bg-theme-surface py-16 sm:py-24" id="servicios">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-theme-text sm:text-4xl">
            {t("services.title")}
          </h2>
          <p className="mt-4 text-lg text-theme-secondary">
            {t("services.subtitle")}
          </p>
        </div>
        <ServicesCarousel />
      </div>
    </section>
  )
}
