"use client"

import { useState, useCallback } from "react"
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react"
import { galleryItems, galleryCategories } from "@/data/gallery"
import { useLang } from "@/context/LangContext"

function categoryGradient(cat: string): string {
  const gradients: Record<string, string> = {
    camaras: "from-blue-600/40 to-blue-900/60",
    cerco: "from-amber-600/40 to-amber-900/60",
    redes: "from-cyan-600/40 to-cyan-900/60",
    automatizacion: "from-violet-600/40 to-violet-900/60",
    comercial: "from-emerald-600/40 to-emerald-900/60",
  }
  return gradients[cat] || "from-slate-700/40 to-slate-900/60"
}

function categoryArt(cat: string): string {
  const arts: Record<string, string> = {
    camaras: `<svg viewBox="0 0 80 60" fill="none"><rect x="10" y="15" width="60" height="35" rx="6" stroke="currentColor" stroke-width="1.5" fill="rgba(255,255,255,0.05)"/><circle cx="40" cy="33" r="12" stroke="currentColor" stroke-width="1.5" fill="rgba(255,255,255,0.08)"/><circle cx="40" cy="33" r="5" fill="currentColor" opacity="0.3"/></svg>`,
    cerco: `<svg viewBox="0 0 80 60" fill="none"><rect x="5" y="5" width="70" height="50" rx="4" stroke="currentColor" stroke-width="1.5" fill="rgba(255,255,255,0.05)" opacity="0.3"/><path d="M10 20 L70 20" stroke="currentColor" stroke-width="2" opacity="0.5"/><path d="M10 30 L70 30" stroke="currentColor" stroke-width="2" opacity="0.5"/><path d="M10 40 L70 40" stroke="currentColor" stroke-width="2" opacity="0.5"/><path d="M25 5 L25 55" stroke="currentColor" stroke-width="2.5" opacity="0.7"/><path d="M45 5 L45 55" stroke="currentColor" stroke-width="2.5" opacity="0.7"/><path d="M65 5 L65 55" stroke="currentColor" stroke-width="2.5" opacity="0.7"/></svg>`,
    redes: `<svg viewBox="0 0 80 60" fill="none"><rect x="5" y="20" width="24" height="20" rx="4" stroke="currentColor" stroke-width="1.5" fill="rgba(255,255,255,0.08)"/><rect x="28" y="20" width="24" height="20" rx="4" stroke="currentColor" stroke-width="1.5" fill="rgba(255,255,255,0.08)"/><rect x="51" y="20" width="24" height="20" rx="4" stroke="currentColor" stroke-width="1.5" fill="rgba(255,255,255,0.08)"/><path d="M17 20 L17 8 L40 8 L40 20" stroke="currentColor" stroke-width="1.5" opacity="0.4"/></svg>`,
    automatizacion: `<svg viewBox="0 0 80 60" fill="none"><rect x="25" y="10" width="30" height="20" rx="4" stroke="currentColor" stroke-width="1.5" fill="rgba(255,255,255,0.08)"/><circle cx="40" cy="20" r="3" fill="currentColor" opacity="0.4"/><path d="M10 30 L25 25 L25 35 L10 30Z" fill="currentColor" opacity="0.15" stroke="currentColor" stroke-width="1"/><path d="M55 25 L70 30 L55 35 L55 25Z" fill="currentColor" opacity="0.15" stroke="currentColor" stroke-width="1"/></svg>`,
    comercial: `<svg viewBox="0 0 80 60" fill="none"><rect x="10" y="15" width="60" height="35" rx="4" stroke="currentColor" stroke-width="1.5" fill="rgba(255,255,255,0.05)"/><rect x="15" y="20" width="20" height="15" rx="2" stroke="currentColor" stroke-width="1" fill="rgba(255,255,255,0.08)"/><rect x="40" y="20" width="25" height="10" rx="2" stroke="currentColor" stroke-width="1" fill="rgba(255,255,255,0.08)"/></svg>`,
  }
  return arts[cat] || arts.camaras!
}

export function GalleryGrid() {
  const { t } = useLang()
  const [activeCategory, setActiveCategory] = useState("todas")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = activeCategory === "todas"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory)

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index)
    document.body.style.overflow = "hidden"
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null)
    document.body.style.overflow = ""
  }, [])

  const goNext = useCallback(() => {
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex + 1) % filtered.length)
  }, [lightboxIndex, filtered.length])

  const goPrev = useCallback(() => {
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length)
  }, [lightboxIndex, filtered.length])

  return (
    <section className="section-padding" aria-label={t("gallery_page.title")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" role="tablist">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-amber-500 text-slate-900 shadow-lg"
                  : "glass text-slate-400 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-slate-500">{t("gallery.empty")}</p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" role="list">
            {filtered.map((item, index) => (
              <button
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] card-hover hover:border-amber-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                aria-label={`${item.title}`}
              >
                <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${categoryGradient(item.category)}`}>
                  <div className="h-24 w-32 text-white/20" dangerouslySetInnerHTML={{ __html: categoryArt(item.category) }} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-xs text-slate-300 line-clamp-1">{item.description}</p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={filtered[lightboxIndex].title}
        >
          <button onClick={closeLightbox} className="absolute right-6 top-6 rounded-2xl glass p-3 text-white hover:bg-white/10 transition-all z-10" aria-label="Cerrar">
            <X className="h-5 w-5" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); goPrev() }} className="absolute left-6 top-1/2 -translate-y-1/2 rounded-2xl glass p-3 text-white hover:bg-white/10 transition-all z-10" aria-label="Anterior">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); goNext() }} className="absolute right-6 top-1/2 -translate-y-1/2 rounded-2xl glass p-3 text-white hover:bg-white/10 transition-all z-10" aria-label="Siguiente">
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="max-h-[85vh] max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className={`aspect-video w-full rounded-2xl bg-gradient-to-br ${categoryGradient(filtered[lightboxIndex].category)} flex items-center justify-center border border-white/5`}>
              <div className="h-40 w-56 text-white/20" dangerouslySetInnerHTML={{ __html: categoryArt(filtered[lightboxIndex].category) }} />
            </div>
            <div className="mt-5 text-center text-white">
              <h3 className="text-lg font-semibold">{filtered[lightboxIndex].title}</h3>
              <p className="mt-1 text-sm text-slate-400">{filtered[lightboxIndex].description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
