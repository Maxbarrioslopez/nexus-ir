"use client"

import dynamic from "next/dynamic"
import { ContactForm } from "@/components/ContactForm"
import { MapPin } from "lucide-react"
import { useLang } from "@/context/LangContext"

const Map = dynamic(() => import("@/components/Map").then((m) => m.Map), {
  ssr: false,
  loading: () => (
    <div className="aspect-[21/9] w-full rounded-xl bg-gradient-to-br from-nexus-700 to-nexus-900 flex items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-amber-500 border-t-transparent" role="status">
        <span className="sr-only">Cargando mapa...</span>
      </div>
    </div>
  ),
})

export default function ContactoPage() {
  const { t } = useLang()

  return (
    <>
      <section className="bg-gradient-to-br from-nexus-900 via-nexus-800 to-nexus-700 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {t("contact_page.title")}
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            {t("contact_page.subtitle")}
          </p>
        </div>
      </section>

      <section className="bg-theme-surface py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      <section className="bg-theme-bg py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-theme-border bg-theme-surface overflow-hidden">
            <div className="p-8 sm:p-12">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-6 w-6 text-theme-accent" aria-hidden="true" />
                <h2 className="text-2xl font-bold text-theme-text">
                  {t("contact_page.map_title")}
                </h2>
              </div>
              <p className="text-theme-secondary mb-6 max-w-2xl">
                {t("contact_page.map_text")}
              </p>
              <Map />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
