"use client"

import { useState, useMemo } from "react"
import { Search, ChevronDown, HelpCircle, Mail, MessageSquare } from "lucide-react"
import Link from "next/link"
import { faqItems, categories } from "@/data/faq"

export default function FAQPage() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("all")
  const [openId, setOpenId] = useState<number | null>(null)

  const filtered = useMemo(() => {
    return faqItems.filter((item) => {
      const matchCat = category === "all" || item.category === category
      const matchSearch = !search ||
        item.question.toLowerCase().includes(search.toLowerCase()) ||
        item.answer.toLowerCase().includes(search.toLowerCase())
      return matchCat && matchSearch
    })
  }, [category, search])

  return (
    <main className="min-h-screen bg-theme-bg">
      <section className="section-padding">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-theme-accent/10">
              <HelpCircle className="h-7 w-7 text-theme-accent" aria-hidden="true" />
            </div>
            <h1 className="text-balance text-3xl font-bold tracking-tight text-theme-text sm:text-4xl">
              Preguntas Frecuentes
            </h1>
            <p className="mt-3 text-lg text-theme-secondary">
              Todo lo que necesitas saber sobre nuestros servicios de seguridad en Rancagua y VI Región
            </p>
          </div>

          <div className="relative mb-8 animate-slide-up">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-theme-meta" aria-hidden="true" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Busca una pregunta..."
              className="w-full rounded-2xl border border-theme-border bg-theme-surface py-4 pl-12 pr-4 text-base text-theme-text placeholder:text-theme-meta focus:border-theme-accent focus:outline-none focus:ring-2 focus:ring-theme-accent/20 transition-shadow"
              aria-label="Buscar preguntas frecuentes"
              autoComplete="off"
            />
          </div>

          <div className="mb-8 flex flex-wrap gap-2 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <button
              onClick={() => setCategory("all")}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                category === "all"
                  ? "bg-theme-accent text-white"
                  : "bg-theme-surface text-theme-secondary hover:bg-theme-surface-2 hover:text-theme-text"
              }`}
              aria-pressed={category === "all"}
            >
              Todas
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  category === cat.id
                    ? "bg-theme-accent text-white"
                    : "bg-theme-surface text-theme-secondary hover:bg-theme-surface-2 hover:text-theme-text"
                }`}
                aria-pressed={category === cat.id}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-theme-border bg-theme-surface p-8 text-center animate-fade-in">
              <p className="text-theme-secondary">No encontramos preguntas con ese criterio.</p>
              <button
                onClick={() => { setSearch(""); setCategory("all") }}
                className="mt-3 text-sm font-medium text-theme-accent hover:text-theme-accent-hover transition-colors"
              >
                Limpiar filtros
              </button>
            </div>
          ) : (
            <div className="space-y-3 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              {filtered.map((item, i) => {
                const isOpen = openId === i
                return (
                  <div
                    key={i}
                    className="group overflow-hidden rounded-2xl border border-theme-border bg-theme-surface transition-shadow hover:shadow-lg"
                  >
                    <button
                      onClick={() => setOpenId(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-theme-surface-2"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${i}`}
                    >
                      <span className="text-base font-medium text-theme-text pr-4">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-theme-meta transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    <div
                      id={`faq-answer-${i}`}
                      role="region"
                      className={`transition-all duration-300 ease-spring overflow-hidden ${
                        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="border-t border-theme-border/50 px-6 py-4">
                        <p className="text-base leading-relaxed text-theme-secondary">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          <div className="mt-16 rounded-2xl border border-theme-border bg-theme-surface p-8 text-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <MessageSquare className="mx-auto h-8 w-8 text-theme-accent mb-3" aria-hidden="true" />
            <h2 className="text-xl font-semibold text-theme-text mb-2">
              ¿No encontraste lo que buscabas?
            </h2>
            <p className="text-theme-secondary mb-6">
              Escríbenos directamente y te responderemos a la brevedad
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/contacto"
                className="btn-primary inline-flex items-center gap-2 text-sm"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Contáctanos
              </Link>
              <a
                href="https://wa.me/56937827595"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2 text-sm"
              >
                <MessageSquare className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}