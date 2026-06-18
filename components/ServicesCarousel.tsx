"use client"

import { useRef, useState, useCallback, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Home, Building2 } from "lucide-react"
import { services, getServiceIcon } from "@/data/services"
import { useLang } from "@/context/LangContext"

export function ServicesCarousel() {
  const { t } = useLang()
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const dragStart = useRef({ x: 0, scrollLeft: 0 })

  const checkScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    checkScroll()
    el.addEventListener("scroll", checkScroll, { passive: true })
    return () => el.removeEventListener("scroll", checkScroll)
  }, [checkScroll])

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return
    const amount = el.clientWidth * 0.7
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" })
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    const el = scrollRef.current
    if (!el) return
    dragStart.current = { x: e.pageX - el.offsetLeft, scrollLeft: el.scrollLeft }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const el = scrollRef.current
    if (!el) return
    e.preventDefault()
    const x = e.pageX - el.offsetLeft
    el.scrollLeft = dragStart.current.scrollLeft - (x - dragStart.current.x)
  }

  const handleMouseUp = () => setIsDragging(false)

  return (
    <div className="relative group">
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-theme-bg border border-theme-border text-theme-secondary shadow-lg hover:text-theme-text transition-all opacity-0 group-hover:opacity-100"
          aria-label="Anterior"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-theme-bg border border-theme-border text-theme-secondary shadow-lg hover:text-theme-text transition-all opacity-0 group-hover:opacity-100"
          aria-label="Siguiente"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      )}

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {services.map((service) => {
          const Icon = getServiceIcon(service.icon)
          return (
            <article
              key={service.id}
              id={`carousel-${service.id}`}
              className="snap-start shrink-0 w-[85vw] sm:w-[380px] rounded-2xl border border-theme-border bg-theme-bg p-6 transition-all hover:border-theme-accent/50 hover:shadow-lg hover:shadow-theme-accent/5 select-none"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-theme-accent/10 text-theme-accent">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-theme-text">{service.title}</h3>
              <p className="mt-2 text-sm text-theme-secondary leading-relaxed">{service.shortDesc}</p>

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
                  <span className="inline-flex items-center gap-1 rounded-full bg-theme-surface-2 px-2.5 py-0.5 text-xs font-medium text-theme-secondary">
                    <Home className="h-3 w-3" aria-hidden="true" /> {t("services.for_home")}
                  </span>
                )}
                {service.forBusiness && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-theme-surface-2 px-2.5 py-0.5 text-xs font-medium text-theme-secondary">
                    <Building2 className="h-3 w-3" aria-hidden="true" /> {t("services.for_business")}
                  </span>
                )}
              </div>

              <Link
                href={`/servicios#${service.id}`}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-theme-accent hover:text-theme-accent-hover transition-colors"
              >
                {t("services.cta")}
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          )
        })}
      </div>
    </div>
  )
}
