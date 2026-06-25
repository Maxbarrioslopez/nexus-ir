"use client"

import { useState } from "react"
import { Star, MessageSquare, Quote } from "lucide-react"
import { testimonials as staticTestimonials, type Testimonial } from "@/data/testimonials"
import { useLang } from "@/context/LangContext"

function Stars({ rating, interactive, onChange }: {
  rating: number
  interactive?: boolean
  onChange?: (r: number) => void
}) {
  return (
    <div className="flex gap-0.5" role={interactive ? "radiogroup" : "img"} aria-label={`${rating} de 5 estrellas`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type={interactive ? "button" : undefined}
          onClick={() => interactive && onChange?.(star)}
          className={interactive ? "cursor-pointer hover:scale-110 transition-transform" : ""}
          aria-label={interactive ? `${star} estrellas` : undefined}
          role={interactive ? "radio" : undefined}
          tabIndex={interactive ? 0 : -1}
        >
          <Star className={`h-4 w-4 ${star <= rating ? "fill-amber-400 text-amber-400" : "text-slate-600"}`} />
        </button>
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  const { t } = useLang()
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({ name: "", rating: 5, message: "" })
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("loading")
    try {
      const { submitTestimonial } = await import("@/lib/supabase")
      await submitTestimonial(formData)
      setFormStatus("success")
      setFormData({ name: "", rating: 5, message: "" })
    } catch {
      setFormStatus("error")
    }
  }

  return (
    <section className="bg-slate-950 section-padding" id="testimonios">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t("testimonials.title")}
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            {t("testimonials.subtitle")}
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {staticTestimonials.map((item, idx) => (
            <article
              key={item.id}
              className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-6 card-hover hover:bg-white/[0.04] hover:border-amber-500/10"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-amber-500/5" />
              <Stars rating={item.rating} />
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                &ldquo;{item.message}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3 border-t border-white/5 pt-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/10 text-amber-400 text-sm font-semibold">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{item.name}</p>
                  {item.service && (
                    <p className="text-xs text-slate-500">{item.service}</p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="btn-primary inline-flex items-center gap-2"
            >
              <MessageSquare className="h-4 w-4" />
              {t("testimonials.submit_title")}
            </button>
          ) : (
            <div className="mx-auto max-w-lg text-left glass rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-white mb-2">
                {t("testimonials.submit_title")}
              </h3>
              <p className="text-sm text-slate-400 mb-6">
                {t("testimonials.submit_subtitle")}
              </p>

              {formStatus === "success" ? (
                <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4 text-sm text-emerald-400">
                  {t("testimonials.form_success")}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t("testimonials.form_name")}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  <div>
                    <label className="block text-sm text-slate-400 mb-2">{t("testimonials.form_rating")}</label>
                    <Stars rating={formData.rating} interactive onChange={(r) => setFormData({ ...formData, rating: r })} />
                  </div>
                  <textarea
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t("testimonials.form_message")}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                  />
                  <button
                    type="submit"
                    disabled={formStatus === "loading"}
                    className="w-full rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 transition-all hover:bg-amber-400 disabled:opacity-50"
                  >
                    {formStatus === "loading" ? (
                      <svg className="h-5 w-5 animate-spin mx-auto" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                    ) : (
                      t("testimonials.form_submit")
                    )}
                  </button>
                  {formStatus === "error" && (
                    <p className="text-sm text-red-400 text-center">Error al enviar. Intenta de nuevo.</p>
                  )}
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
