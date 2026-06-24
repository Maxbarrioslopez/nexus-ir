"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, Camera, Shield, Zap, Network, Radio, ChevronDown, ArrowRight } from "lucide-react"
import { pricingTiers, type PricingTier } from "@/data/pricing"
import { services, getServiceIcon } from "@/data/services"

const serviceIds = ["camaras", "alarmas", "cerca-electrica", "redes", "seguridad-perimetral-fibra"] as const
type ServiceId = (typeof serviceIds)[number]

const typeLabels: Record<PricingTier["type"], string> = {
  kit: "Kit",
  profesional: "Profesional",
  empresarial: "Empresarial",
}

const typeOrder: PricingTier["type"][] = ["kit", "profesional", "empresarial"]

function formatPrice(price: number): string {
  return `$${price.toLocaleString("es-CL")} CLP`
}

export default function PreciosPage() {
  const [activeService, setActiveService] = useState<ServiceId>("camaras")
  const [showAllServices, setShowAllServices] = useState(false)

  const visibleServices = showAllServices ? serviceIds : serviceIds.slice(0, 3)

  const filteredTiers = pricingTiers.filter((tier) => tier.serviceId === activeService)

  const groupedTiers = typeOrder
    .map((type) => ({
      type,
      label: typeLabels[type],
      tiers: filteredTiers.filter((t) => t.type === type),
    }))
    .filter((g) => g.tiers.length > 0)

  const activeServiceData = services.find((s) => s.id === activeService)

  return (
    <>
      <section className="bg-gradient-to-br from-nexus-900 via-nexus-800 to-nexus-700 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Planes y Precios
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Soluciones de seguridad para todo tipo de necesidades y presupuestos
          </p>
        </div>
      </section>

      <section className="bg-theme-surface py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {visibleServices.map((id) => {
              const service = services.find((s) => s.id === id)
              if (!service) return null
              const Icon = getServiceIcon(service.icon)
              const isActive = activeService === id
              return (
                <button
                  key={id}
                  onClick={() => setActiveService(id)}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
                    isActive
                      ? "bg-theme-accent text-white shadow-lg"
                      : "bg-theme-bg text-theme-secondary hover:bg-theme-accent/10 hover:text-theme-accent border border-theme-border"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {service.title}
                </button>
              )
            })}
            {serviceIds.length > 3 && (
              <button
                onClick={() => setShowAllServices(!showAllServices)}
                className="inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-medium text-theme-secondary hover:text-theme-accent transition-all"
              >
                {showAllServices ? "Mostrar menos" : "Más servicios"}
                <ChevronDown className={`h-4 w-4 transition-transform ${showAllServices ? "rotate-180" : ""}`} />
              </button>
            )}
          </div>

          {activeServiceData && (
            <>
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold text-theme-text sm:text-3xl">
                  {activeServiceData.title}
                </h2>
                <p className="mt-2 text-theme-secondary max-w-2xl mx-auto">
                  {activeServiceData.shortDesc}
                </p>
              </div>

              <div className="space-y-16">
                {groupedTiers.map((group) => (
                  <div key={group.type}>
                    <h3 className="text-xl font-bold text-theme-text mb-6 capitalize">
                      {group.label}
                    </h3>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {group.tiers.map((tier) => (
                        <div
                          key={tier.id}
                          className={`relative flex flex-col rounded-2xl border bg-theme-bg p-6 transition-shadow hover:shadow-lg ${
                            tier.popular
                              ? "border-theme-accent ring-1 ring-theme-accent"
                              : "border-theme-border"
                          }`}
                        >
                          {tier.popular && (
                            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-theme-accent px-4 py-1 text-xs font-semibold text-white">
                              Más Popular
                            </span>
                          )}
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-theme-text">
                              {tier.name}
                            </h4>
                            <p className="mt-2 text-sm text-theme-secondary leading-relaxed">
                              {tier.description}
                            </p>
                            <p className="mt-4 text-xl font-bold text-theme-accent">
                              {formatPrice(tier.priceMin)} – {formatPrice(tier.priceMax)}
                            </p>
                            <ul className="mt-6 space-y-3" role="list">
                              {tier.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-theme-text">
                                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-theme-accent" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <Link
                            href="/contacto"
                            className={`mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white transition-all ${
                              tier.popular
                                ? "bg-theme-accent hover:bg-theme-accent-hover shadow-lg"
                                : "bg-nexus-700 hover:bg-nexus-800"
                            }`}
                          >
                            Solicitar cotización
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {!activeServiceData && (
            <p className="text-center text-theme-secondary">Servicio no encontrado.</p>
          )}
        </div>
      </section>

      <section className="bg-theme-bg py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-theme-border bg-theme-surface p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-theme-text sm:text-3xl text-center">
              ¿Qué factores influyen en el precio final?
            </h2>
            <p className="mt-4 text-theme-secondary text-center max-w-3xl mx-auto">
              Los precios mostrados son referenciales. El valor final de tu proyecto dependerá de:
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl bg-theme-bg p-5 border border-theme-border">
                <h3 className="font-semibold text-theme-text">Cantidad de equipos</h3>
                <p className="mt-2 text-sm text-theme-secondary">
                  Más cámaras, sensores o puntos de red incrementan el costo de equipos y mano de obra.
                </p>
              </div>
              <div className="rounded-xl bg-theme-bg p-5 border border-theme-border">
                <h3 className="font-semibold text-theme-text">Tipo de equipamiento</h3>
                <p className="mt-2 text-sm text-theme-secondary">
                  La calidad y tecnología de los equipos (HD, 4K, térmicas, IA) afecta directamente el presupuesto.
                </p>
              </div>
              <div className="rounded-xl bg-theme-bg p-5 border border-theme-border">
                <h3 className="font-semibold text-theme-text">Complejidad de la instalación</h3>
                <p className="mt-2 text-sm text-theme-secondary">
                  Cableado, canalización, altura, distancia y condiciones de la infraestructura existente.
                </p>
              </div>
              <div className="rounded-xl bg-theme-bg p-5 border border-theme-border">
                <h3 className="font-semibold text-theme-text">Personalización e integración</h3>
                <p className="mt-2 text-sm text-theme-secondary">
                  Integración con sistemas existentes, desarrollo de soluciones a medida y soporte especializado.
                </p>
              </div>
            </div>
            <div className="mt-10 text-center">
              <p className="text-theme-secondary mb-6">
                ¿No encuentras lo que buscas? Solicita una cotización personalizada sin compromiso.
              </p>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 rounded-xl bg-theme-accent px-6 py-3 text-base font-semibold text-white transition-all hover:bg-theme-accent-hover shadow-lg"
              >
                Solicitar cotización personalizada
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
