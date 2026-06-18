"use client"

import { GalleryGrid } from "@/components/GalleryGrid"
import { useLang } from "@/context/LangContext"

export default function GaleriaPage() {
  const { t } = useLang()

  return (
    <>
      <section className="bg-gradient-to-br from-nexus-900 via-nexus-800 to-nexus-700 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {t("gallery_page.title")}
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            {t("gallery_page.subtitle")}
          </p>
        </div>
      </section>

      <GalleryGrid />
    </>
  )
}
