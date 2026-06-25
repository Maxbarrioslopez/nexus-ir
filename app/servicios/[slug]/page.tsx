import Link from "next/link"
import { notFound } from "next/navigation"
import { Check, ArrowLeft, ArrowRight, Home, Building2 } from "lucide-react"
import { services, getServiceIcon } from "@/data/services"
import { pricingTiers } from "@/data/pricing"
import type { Metadata } from "next"

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }))
}

export function generateMetadata({ params }: Props): Metadata {
  const service = services.find((s) => s.id === params.slug)
  if (!service) return {}
  return {
    title: `${service.title} | Nexus IRL`,
    description: service.shortDesc,
    keywords: service.keywords,
    openGraph: { title: service.title, description: service.shortDesc },
  }
}

function formatPrice(price: number): string {
  return "$" + price.toLocaleString("es-CL")
}

export default function ServiceDetailPage({ params }: Props) {
  const service = services.find((s) => s.id === params.slug)
  if (!service) notFound()

  const Icon = getServiceIcon(service.icon)
  const tiers = pricingTiers.filter((t) => t.serviceId === service.id)

  return (
    <>
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Volver a Servicios
          </Link>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500 mb-4">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h1 className="text-3xl font-bold text-white sm:text-4xl">{service.title}</h1>
              <p className="mt-4 text-lg text-slate-400 leading-relaxed">{service.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.forHome && service.forBusiness && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-400">
                    <Home className="h-3.5 w-3.5" aria-hidden="true" />
                    <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
                    Hogar y Empresa
                  </span>
                )}
                {service.forHome && !service.forBusiness && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-400">
                    <Home className="h-3.5 w-3.5" aria-hidden="true" />
                    Solo Hogar
                  </span>
                )}
                {!service.forHome && service.forBusiness && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-400">
                    <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
                    Solo Empresa
                  </span>
                )}
              </div>
              <p className="mt-4 text-sm text-slate-400">
                Desde <span className="font-semibold text-amber-400">{service.priceRange}</span>
              </p>
            </div>
            <div className="hidden aspect-video w-full max-w-md rounded-2xl bg-gradient-to-br from-nexus-700 to-nexus-900 flex items-center justify-center border border-white/10 lg:flex">
              <Icon className="h-32 w-32 text-slate-600" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-theme-bg py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-theme-text sm:text-3xl">Características</h2>
            <p className="mt-2 text-theme-secondary">
              Todo lo que incluye nuestro servicio de {service.title.toLowerCase()}
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-3xl">
            <ul className="grid gap-3 sm:grid-cols-2" role="list">
              {service.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-theme-border bg-theme-surface p-4 text-sm text-theme-secondary"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-theme-accent" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {tiers.length > 0 && (
        <section className="bg-theme-surface py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold text-theme-text sm:text-3xl">Planes y Precios</h2>
              <p className="mt-2 text-theme-secondary">
                Elige el plan que mejor se adapte a tus necesidades
              </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {tiers.map((tier) => (
                <article
                  key={tier.id}
                  className={`relative flex flex-col rounded-2xl border bg-theme-bg p-6 ${
                    tier.popular ? "border-theme-accent ring-1 ring-theme-accent" : "border-theme-border"
                  }`}
                >
                  {tier.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-theme-accent px-4 py-1 text-xs font-semibold text-white">
                      Más Popular
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-theme-text">{tier.name}</h3>
                  <p className="mt-1 text-sm text-theme-secondary">{tier.description}</p>
                  <p className="mt-4 text-2xl font-bold text-theme-text">
                    {formatPrice(tier.priceMin)}
                    {tier.priceMax > tier.priceMin && (
                      <span className="text-base font-normal text-theme-secondary">
                        {" "}– {formatPrice(tier.priceMax)}
                      </span>
                    )}
                  </p>
                  <ul className="mt-6 flex-1 space-y-3" role="list">
                    {tier.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-theme-secondary">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-theme-accent" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contacto"
                    className={`mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all ${
                      tier.popular
                        ? "bg-theme-accent text-white hover:bg-theme-accent-hover shadow-lg"
                        : "border border-theme-border text-theme-text hover:bg-theme-accent/10"
                    }`}
                  >
                    Solicitar Cotización
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-theme-text sm:text-3xl">
            ¿Listo para proteger lo que importa?
          </h2>
          <p className="mt-3 text-lg text-theme-secondary max-w-xl mx-auto">
            Contáctanos hoy para una cotización personalizada y sin compromiso. Te asesoramos en la mejor solución para tu hogar o empresa.
          </p>
          <Link
            href="/contacto"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-theme-accent px-6 py-3 text-base font-semibold text-white transition-all hover:bg-theme-accent-hover shadow-lg"
          >
            Solicitar Cotización
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
