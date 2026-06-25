"use client"

import dynamic from "next/dynamic"
import { ContactForm } from "@/components/ContactForm"
import { MapPin } from "lucide-react"
import { useLang } from "@/context/LangContext"

const Map = dynamic(() => import("@/components/Map").then((m) => m.Map), {
  ssr: false,
  loading: () => (
    <div className="aspect-[21/9] w-full rounded-2xl bg-slate-800 flex items-center justify-center">
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
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="absolute inset-0 bg-grid" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {t("contact_page.title")}
          </h1>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            {t("contact_page.subtitle")}
          </p>
        </div>
      </section>

      <section className="section-padding bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-8 sm:p-10">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden">
            <div className="p-8 sm:p-12">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-6 w-6 text-amber-500" />
                <h2 className="text-2xl font-bold text-white">
                  {t("contact_page.map_title")}
                </h2>
              </div>
              <p className="text-slate-400 mb-6 max-w-2xl">
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
