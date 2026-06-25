"use client"

import Link from "next/link"
import { Shield, Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react"
import { useLang } from "@/context/LangContext"
import { services } from "@/data/services"
import { WHATSAPP_NUMBER, EMAIL } from "@/lib/constants"

export function Footer() {
  const { t } = useLang()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 border-t border-white/5" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 group mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors">
                <Shield className="h-5 w-5 text-amber-500" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">NETXUS</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t("footer.description")}
            </p>
            <p className="mt-3 text-sm text-slate-500 italic">
              {t("footer.slogan")}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-5">
              {t("footer.quick_links")}
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "nav.inicio" },
                { href: "/servicios", label: "nav.servicios" },
                { href: "/precios", label: "Precios" },
                { href: "/galeria", label: "nav.galeria" },
                { href: "/blog", label: "nav.blog" },
                { href: "/contacto", label: "nav.contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-amber-400 transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-5">
              {t("footer.services_title")}
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/servicios/${s.id}`}
                    className="text-sm text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-5">
              {t("footer.contact_title")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                <span className="text-sm text-slate-400">
                  Rancagua, VI Región<br />Chile
                </span>
              </li>
              <li>
                <a
                  href={`tel:+56${WHATSAPP_NUMBER}`}
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-amber-400 transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0 text-amber-500" />
                  +56 {WHATSAPP_NUMBER.slice(0,1)} {WHATSAPP_NUMBER.slice(1,4)} {WHATSAPP_NUMBER.slice(4)}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-amber-400 transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0 text-amber-500" />
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                <span className="text-sm text-slate-400">
                  Lun–Sáb: 09:00–20:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} NETXUS Security Chile. {t("footer.copyright")}
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-600">
            <Link href="/politica-privacidad" className="hover:text-slate-400 transition-colors">
              Privacidad
            </Link>
            <Link href="/cobertura" className="hover:text-slate-400 transition-colors">
              Cobertura
            </Link>
            <Link href="/proceso" className="hover:text-slate-400 transition-colors">
              Proceso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
