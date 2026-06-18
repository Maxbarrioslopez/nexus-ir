"use client"

import { useState, useCallback } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { galleryItems, galleryCategories } from "@/data/gallery"
import { useLang } from "@/context/LangContext"

function categoryGradient(cat: string): string {
  const gradients: Record<string, string> = {
    camaras: "from-blue-600 to-blue-900",
    cerca: "from-amber-600 to-amber-900",
    redes: "from-cyan-600 to-cyan-900",
    automatizacion: "from-violet-600 to-violet-900",
    comercial: "from-emerald-600 to-emerald-900",
  }
  return gradients[cat] || "from-nexus-700 to-nexus-900"
}

function categoryArt(cat: string): string {
  const arts: Record<string, string> = {
    camaras: `<svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="15" width="60" height="35" rx="6" stroke="currentColor" stroke-width="1.5" fill="rgba(255,255,255,0.05)"/>
      <circle cx="40" cy="33" r="12" stroke="currentColor" stroke-width="1.5" fill="rgba(255,255,255,0.08)"/>
      <circle cx="40" cy="33" r="5" fill="currentColor" opacity="0.3"/>
      <circle cx="60" cy="12" r="3" fill="currentColor" opacity="0.2"/>
      <circle cx="60" cy="12" r="1.5" fill="currentColor" opacity="0.4"/>
      <rect x="28" y="8" width="24" height="4" rx="2" fill="currentColor" opacity="0.15"/>
    </svg>`,
    cerca: `<svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="70" height="50" rx="4" stroke="currentColor" stroke-width="1.5" fill="rgba(255,255,255,0.05)" opacity="0.3"/>
      <path d="M10 15 L70 15" stroke="currentColor" stroke-width="2" opacity="0.5"/>
      <path d="M10 25 L70 25" stroke="currentColor" stroke-width="2" opacity="0.5"/>
      <path d="M10 35 L70 35" stroke="currentColor" stroke-width="2" opacity="0.5"/>
      <path d="M10 45 L70 45" stroke="currentColor" stroke-width="2" opacity="0.5"/>
      <path d="M20 5 L20 55" stroke="currentColor" stroke-width="2.5" opacity="0.7"/>
      <path d="M40 5 L40 55" stroke="currentColor" stroke-width="2.5" opacity="0.7"/>
      <path d="M60 5 L60 55" stroke="currentColor" stroke-width="2.5" opacity="0.7"/>
      <circle cx="20" cy="10" r="2" fill="#ef4444" opacity="0.8"/>
      <circle cx="20" cy="20" r="2" fill="#ef4444" opacity="0.8"/>
      <circle cx="20" cy="30" r="2" fill="#ef4444" opacity="0.8"/>
      <path d="M28 28 L32 32" stroke="#ef4444" stroke-width="1.5" opacity="0.8"/>
      <path d="M28 32 L32 28" stroke="#ef4444" stroke-width="1.5" opacity="0.8"/>
    </svg>`,
    redes: `<svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="20" width="24" height="20" rx="4" stroke="currentColor" stroke-width="1.5" fill="rgba(255,255,255,0.08)"/>
      <rect x="28" y="20" width="24" height="20" rx="4" stroke="currentColor" stroke-width="1.5" fill="rgba(255,255,255,0.08)"/>
      <rect x="51" y="20" width="24" height="20" rx="4" stroke="currentColor" stroke-width="1.5" fill="rgba(255,255,255,0.08)"/>
      <path d="M17 20 L17 8 L40 8 L40 20" stroke="currentColor" stroke-width="1.5" opacity="0.4"/>
      <path d="M52 30 L76 30" stroke="currentColor" stroke-width="1.5" opacity="0.4"/>
      <circle cx="17" cy="10" r="1.5" fill="currentColor" opacity="0.6"/>
      <circle cx="40" cy="10" r="1.5" fill="currentColor" opacity="0.6"/>
      <circle cx="40" cy="28" r="1.5" fill="currentColor" opacity="0.6"/>
    </svg>`,
    automatizacion: `<svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="10" width="30" height="20" rx="4" stroke="currentColor" stroke-width="1.5" fill="rgba(255,255,255,0.08)"/>
      <circle cx="40" cy="20" r="3" fill="currentColor" opacity="0.4"/>
      <path d="M10 30 L25 25 L25 35 L10 30Z" fill="currentColor" opacity="0.15" stroke="currentColor" stroke-width="1"/>
      <path d="M55 25 L70 30 L55 35 L55 25Z" fill="currentColor" opacity="0.15" stroke="currentColor" stroke-width="1"/>
      <path d="M40 40 L40 30" stroke="currentColor" stroke-width="1.5" opacity="0.4"/>
      <circle cx="40" cy="42" r="4" stroke="currentColor" stroke-width="1.5" fill="rgba(255,255,255,0.08)"/>
      <path d="M30 50 L33 46 L47 46 L50 50Z" fill="currentColor" opacity="0.15" stroke="currentColor" stroke-width="1"/>
    </svg>`,
    comercial: `<svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="15" width="60" height="35" rx="4" stroke="currentColor" stroke-width="1.5" fill="rgba(255,255,255,0.05)"/>
      <rect x="15" y="20" width="20" height="15" rx="2" stroke="currentColor" stroke-width="1" fill="rgba(255,255,255,0.08)"/>
      <rect x="15" y="38" width="20" height="8" rx="1" stroke="currentColor" stroke-width="1" fill="rgba(255,255,255,0.08)"/>
      <rect x="40" y="20" width="25" height="10" rx="2" stroke="currentColor" stroke-width="1" fill="rgba(255,255,255,0.08)"/>
      <rect x="40" y="34" width="25" height="12" rx="2" stroke="currentColor" stroke-width="1" fill="rgba(255,255,255,0.08)"/>
      <circle cx="28" cy="28" r="3" fill="currentColor" opacity="0.2"/>
    </svg>`,
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
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filtered.length)
    }
  }, [lightboxIndex, filtered.length])

  const goPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length)
    }
  }, [lightboxIndex, filtered.length])

  return (
    <section className="py-16 sm:py-24" aria-label={t("gallery_page.title")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10" role="tablist">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all
                ${
                  activeCategory === cat.id
                    ? "bg-theme-accent text-white shadow-sm"
                    : "bg-theme-surface-2 text-theme-secondary hover:text-theme-text"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-theme-secondary">{t("gallery.empty")}</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" role="list">
            {filtered.map((item, index) => (
              <button
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-theme-surface-2 border border-theme-border transition-all hover:border-theme-accent/50 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent"
                aria-label={`${item.title} - ${t("gallery.view_more")}`}
              >
                <div
                  className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${categoryGradient(item.category)}`}
                  aria-hidden="true"
                >
                  <div
                    className="h-24 w-32 text-white/40"
                    dangerouslySetInnerHTML={{ __html: categoryArt(item.category) }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={filtered[lightboxIndex].title}
        >
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors z-10"
            aria-label="Cerrar"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev() }}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors z-10"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goNext() }}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors z-10"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </button>

          <div
            className="max-h-[80vh] max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`aspect-video w-full rounded-xl bg-gradient-to-br ${categoryGradient(filtered[lightboxIndex].category)} flex items-center justify-center`}
            >
              <div
                className="h-40 w-56 text-white/30"
                dangerouslySetInnerHTML={{ __html: categoryArt(filtered[lightboxIndex].category) }}
              />
            </div>
            <div className="mt-4 text-center text-white">
              <h3 className="text-lg font-semibold">{filtered[lightboxIndex].title}</h3>
              <p className="mt-1 text-sm text-slate-300">{filtered[lightboxIndex].description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
