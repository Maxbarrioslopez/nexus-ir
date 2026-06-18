"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { services } from "@/data/services"
import { submitContact } from "@/lib/supabase"
import { useLang } from "@/context/LangContext"
import { WHATSAPP_URL, PHONE, EMAIL, WHATSAPP_NUMBER } from "@/lib/constants"

export function ContactForm() {
  const { t } = useLang()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    try {
      await submitContact(formData)
      setStatus("success")
      setFormData({ name: "", email: "", phone: "", service: "", message: "" })
    } catch {
      setStatus("error")
    }
  }

  const isDemo = WHATSAPP_NUMBER === "569XXXXXXXX"

  return (
    <div className="grid gap-8 lg:grid-cols-5">
      <div className="lg:col-span-2 space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-theme-text">
            {t("contact_page.info_title")}
          </h3>
          {isDemo && (
            <p className="mt-1 text-xs text-amber-500">
              Actualiza NEXT_PUBLIC_WHATSAPP_NUMBER en .env.local
            </p>
          )}
        </div>

        <div className="space-y-4">
          <a
            href={`tel:${WHATSAPP_NUMBER}`}
            className="flex items-center gap-3 text-theme-secondary hover:text-theme-accent transition-colors"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-theme-accent/10 text-theme-accent">
              <Phone className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-medium text-theme-text">{t("contact.phone")}</p>
              <p className="text-sm">{PHONE}</p>
            </div>
          </a>

          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-3 text-theme-secondary hover:text-theme-accent transition-colors"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-theme-accent/10 text-theme-accent">
              <Mail className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-medium text-theme-text">{t("contact.email")}</p>
              <p className="text-sm">{EMAIL}</p>
            </div>
          </a>

          <div className="flex items-start gap-3 text-theme-secondary">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-theme-accent/10 text-theme-accent shrink-0">
              <MapPin className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-medium text-theme-text">Ubicación</p>
              <p className="text-sm">{t("contact.address")}</p>
            </div>
          </div>

          <div className="flex items-start gap-3 text-theme-secondary">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-theme-accent/10 text-theme-accent shrink-0">
              <Clock className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-medium text-theme-text">{t("contact.schedule_title")}</p>
              <p className="text-sm">{t("contact.schedule")}</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-theme-border bg-theme-surface-2 p-4">
          <a
            href={WHATSAPP_URL("Hola, quisiera una cotización de sus servicios de seguridad.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-green-500 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-green-600"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {t("contact.whatsapp")}
          </a>
        </div>
      </div>

      <div className="lg:col-span-3">
        <h3 className="text-lg font-semibold text-theme-text mb-6">
          {t("contact_page.form_title")}
        </h3>

        {status === "success" ? (
          <div className="rounded-xl bg-green-500/10 border border-green-500/20 p-6 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20">
              <Send className="h-6 w-6 text-green-500" aria-hidden="true" />
            </div>
            <p className="text-green-600 dark:text-green-400 font-medium">{t("contact.form_success")}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-theme-text mb-1.5">
                  {t("contact.form_name")} <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ej: Juan Pérez"
                  className="w-full rounded-xl border border-theme-border bg-theme-bg px-4 py-3 text-sm text-theme-text placeholder:text-theme-secondary focus:outline-none focus:ring-2 focus:ring-theme-accent"
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-theme-text mb-1.5">
                  {t("contact.form_email")} <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ejemplo@correo.cl"
                  className="w-full rounded-xl border border-theme-border bg-theme-bg px-4 py-3 text-sm text-theme-text placeholder:text-theme-secondary focus:outline-none focus:ring-2 focus:ring-theme-accent"
                  aria-required="true"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-phone" className="block text-sm font-medium text-theme-text mb-1.5">
                  {t("contact.form_phone")} <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+56 9 1234 5678"
                  className="w-full rounded-xl border border-theme-border bg-theme-bg px-4 py-3 text-sm text-theme-text placeholder:text-theme-secondary focus:outline-none focus:ring-2 focus:ring-theme-accent"
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="contact-service" className="block text-sm font-medium text-theme-text mb-1.5">
                  {t("contact.form_service")}
                </label>
                <select
                  id="contact-service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full rounded-xl border border-theme-border bg-theme-bg px-4 py-3 text-sm text-theme-text focus:outline-none focus:ring-2 focus:ring-theme-accent"
                >
                  <option value="">{t("contact.form_service_placeholder")}</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-theme-text mb-1.5">
                {t("contact.form_message")} <span className="text-red-500">*</span>
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Cuéntanos qué necesitas... tipo de servicio, cantidad de equipos, tipo de propiedad, etc."
                className="w-full rounded-xl border border-theme-border bg-theme-bg px-4 py-3 text-sm text-theme-text placeholder:text-theme-secondary focus:outline-none focus:ring-2 focus:ring-theme-accent resize-none"
                aria-required="true"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-xl bg-theme-accent px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-theme-accent-hover disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              {status === "loading" ? (
                <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              ) : (
                t("contact.form_submit")
              )}
            </button>

            {status === "error" && (
              <p className="text-sm text-red-500 text-center">{t("contact.form_error")}</p>
            )}
          </form>
        )}
      </div>
    </div>
  )
}
