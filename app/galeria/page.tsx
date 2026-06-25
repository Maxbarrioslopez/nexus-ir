"use client"

import { GalleryGrid } from "@/components/GalleryGrid"
import { useLang } from "@/context/LangContext"

export default function GaleriaPage() {
  const { t } = useLang()

  return (
    <>
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {t("gallery_page.title")}
          </h1>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            {t("gallery_page.subtitle")}
          </p>
        </div>
      </section>

      <GalleryGrid />
    </>
  )
}
