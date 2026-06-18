"use client"

import Link from "next/link"
import { Shield, Phone, Mail, MapPin, Clock, Heart } from "lucide-react"
import { useLang } from "@/context/LangContext"
import { services } from "@/data/services"

export function Footer() {
  const { t } = useLang()

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-theme-footer text-slate-300" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <Shield className="h-7 w-7 text-theme-accent" aria-hidden="true" />
              <span className="text-lg font-bold text-white">
                NEXUS <span className="text-theme-accent">IRL</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t("footer.description")}
            </p>
            <p className="mt-3 text-sm text-slate-500 italic">
              {t("footer.slogan")}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t("footer.quick_links")}
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "nav.inicio" },
                { href: "/servicios", label: "nav.servicios" },
                { href: "/galeria", label: "nav.galeria" },
                { href: "/blog", label: "nav.blog" },
                { href: "/contacto", label: "nav.contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-theme-accent transition-colors"
                  >
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t("footer.services_title")}
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/servicios#${s.id}`}
                    className="text-sm text-slate-400 hover:text-theme-accent transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t("footer.contact_title")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-theme-accent" aria-hidden="true" />
                <span className="text-sm text-slate-400">
                  Rancagua, Chile
                </span>
              </li>
              <li>
                <a
                  href="tel:+569XXXXXXXX"
                  className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-theme-accent transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0 text-theme-accent" aria-hidden="true" />
                  +56 9 XXXX XXXX
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@nexusirl.cl"
                  className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-theme-accent transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0 text-theme-accent" aria-hidden="true" />
                  contacto@nexusirl.cl
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-theme-accent" aria-hidden="true" />
                <span className="text-sm text-slate-400">
                  {t("contact.schedule")}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-700/50 pt-8 text-center">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} Nexus IRL. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}
