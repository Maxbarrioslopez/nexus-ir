"use client"

import { useState, useEffect } from "react"
import { Star, MessageSquare } from "lucide-react"
import { testimonials as staticTestimonials, type Testimonial } from "@/data/testimonials"
import { submitTestimonial, supabase } from "@/lib/supabase"
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
          aria-checked={interactive ? star === rating : undefined}
          role={interactive ? "radio" : undefined}
          tabIndex={interactive ? 0 : -1}
        >
          <Star
            className={`h-5 w-5 ${
              star <= rating
                ? "fill-theme-star text-theme-star"
                : "text-theme-border"
            }`}
            aria-hidden="true"
          />
        </button>
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  const { t } = useLang()
  const [showForm, setShowForm] = useState(false)
  const [dynamicTestimonials, setDynamicTestimonials] = useState<Testimonial[]>([])
  const [formData, setFormData] = useState({ name: "", rating: 5, message: "" })
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  useEffect(() => {
    if (!supabase) return
    supabase
      .from("testimonials")
      .select("*")
      .eq("visible", true)
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        if (data) {
          const mapped: Testimonial[] = data.map((d) => ({
            id: `db-${d.id}`,
            name: d.name,
            rating: d.rating,
            message: d.message,
            service: "",
            date: d.created_at?.slice(0, 10) || "",
          }))
          setDynamicTestimonials(mapped)
        }
      })
  }, [])

  const allTestimonials = [...dynamicTestimonials, ...staticTestimonials]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("loading")
    try {
      await submitTestimonial(formData)
      setFormStatus("success")
      setFormData({ name: "", rating: 5, message: "" })
    } catch {
      setFormStatus("error")
    }
  }

  return (
    <section className="bg-theme-surface py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-theme-text sm:text-4xl">
            {t("testimonials.title")}
          </h2>
          <p className="mt-4 text-lg text-theme-secondary">
            {t("testimonials.subtitle")}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allTestimonials.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-theme-border bg-theme-bg p-6"
            >
              <Stars rating={item.rating} />
              <p className="mt-3 text-sm text-theme-secondary leading-relaxed italic">
                &ldquo;{item.message}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3 border-t border-theme-border pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-theme-accent/10 text-theme-accent text-sm font-semibold">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-theme-text">{item.name}</p>
                  {item.service && (
                    <p className="text-xs text-theme-secondary">{item.service}</p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 rounded-xl border border-theme-border bg-theme-bg px-6 py-3 text-sm font-medium text-theme-text hover:bg-theme-surface-2 transition-all"
            >
              <MessageSquare className="h-4 w-4" aria-hidden="true" />
              {t("testimonials.submit_title")}
            </button>
          ) : (
            <div className="mx-auto max-w-lg text-left">
              <h3 className="text-lg font-semibold text-theme-text mb-2">
                {t("testimonials.submit_title")}
              </h3>
              <p className="text-sm text-theme-secondary mb-4">
                {t("testimonials.submit_subtitle")}
              </p>

              {formStatus === "success" ? (
                <div className="rounded-xl bg-green-500/10 border border-green-500/20 p-4 text-sm text-green-600 dark:text-green-400">
                  {t("testimonials.form_success")}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="test-name" className="sr-only">{t("testimonials.form_name")}</label>
                    <input
                      id="test-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t("testimonials.form_name")}
                      className="w-full rounded-xl border border-theme-border bg-theme-bg px-4 py-3 text-sm text-theme-text placeholder:text-theme-secondary focus:outline-none focus:ring-2 focus:ring-theme-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-theme-secondary mb-2">{t("testimonials.form_rating")}</label>
                    <Stars rating={formData.rating} interactive onChange={(r) => setFormData({ ...formData, rating: r })} />
                  </div>
                  <div>
                    <label htmlFor="test-message" className="sr-only">{t("testimonials.form_message")}</label>
                    <textarea
                      id="test-message"
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t("testimonials.form_message")}
                      className="w-full rounded-xl border border-theme-border bg-theme-bg px-4 py-3 text-sm text-theme-text placeholder:text-theme-secondary focus:outline-none focus:ring-2 focus:ring-theme-accent resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formStatus === "loading"}
                    className="w-full rounded-xl bg-theme-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-theme-accent-hover disabled:opacity-50"
                  >
                    {formStatus === "loading" ? "..." : t("testimonials.form_submit")}
                  </button>
                  {formStatus === "error" && (
                    <p className="text-sm text-red-500">{t("contact.form_error")}</p>
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
