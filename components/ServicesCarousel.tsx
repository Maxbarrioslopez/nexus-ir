"use client"

import { useRef, useState, useCallback, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Home, Building2, ArrowRight } from "lucide-react"
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
    window.addEventListener("resize", checkScroll)
    return () => {
      el.removeEventListener("scroll", checkScroll)
      window.removeEventListener("resize", checkScroll)
    }
  }, [checkScroll])

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir === "left" ? -el.clientWidth * 0.7 : el.clientWidth * 0.7, behavior: "smooth" })
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

  const iconColors: Record<string, string> = {
    Camera: "from-blue-500/20 to-blue-600/10 text-blue-400",
    Shield: "from-emerald-500/20 to-emerald-600/10 text-emerald-400",
    Zap: "from-amber-500/20 to-amber-600/10 text-amber-400",
    Network: "from-purple-500/20 to-purple-600/10 text-purple-400",
    Radio: "from-rose-500/20 to-rose-600/10 text-rose-400",
  }

  return (
    <div className="relative group">
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 hidden sm:flex h-12 w-12 items-center justify-center rounded-2xl glass text-slate-400 hover:text-white transition-all opacity-0 group-hover:opacity-100"
          aria-label="Anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 hidden sm:flex h-12 w-12 items-center justify-center rounded-2xl glass text-slate-400 hover:text-white transition-all opacity-0 group-hover:opacity-100"
          aria-label="Siguiente"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      )}

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mx-4 px-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {services.map((service, idx) => {
          const Icon = getServiceIcon(service.icon)
          const colorClasses = iconColors[service.icon] || "from-amber-500/20 to-amber-600/10 text-amber-400"

          return (
            <article
              key={service.id}
              className="snap-start shrink-0 w-[85vw] sm:w-[380px] rounded-2xl border border-white/5 bg-white/[0.03] p-6 card-hover hover:bg-white/[0.06] hover:border-amber-500/20 select-none flex flex-col"
            >
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${colorClasses}`}>
                <Icon className="h-7 w-7" />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed flex-1">{service.shortDesc}</p>

              <ul className="mt-5 space-y-2.5" role="list">
                {service.features.slice(0, 3).map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-400">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex items-center gap-2">
                {service.forHome && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-400">
                    <Home className="h-3 w-3" /> Hogar
                  </span>
                )}
                {service.forBusiness && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-400">
                    <Building2 className="h-3 w-3" /> Empresa
                  </span>
                )}
              </div>

              <Link
                href={`/servicios/${service.id}`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors group/link"
              >
                Ver servicio
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5" />
              </Link>
            </article>
          )
        })}
      </div>
    </div>
  )
}
