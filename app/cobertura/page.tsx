import Image from "next/image"
import Link from "next/link"
import { MapPin, Map, Check, ArrowRight } from "lucide-react"
import { coverageZones, coverageStats } from "@/data/coverage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cobertura",
  description:
    "Conoce las zonas de cobertura de NETXUS Security Chile. Servicio de seguridad perimetral por fibra óptica en todo Chile.",
}

const statItems = [
  { label: "Años de Experiencia", value: coverageStats.yearsInBusiness, icon: MapPin },
  { label: "Proyectos Completados", value: `+${coverageStats.projectsCompleted}`, icon: Check },
  { label: "Ciudades Cubiertas", value: `+${coverageStats.citiesCovered}`, icon: Map },
  { label: "Clientes Satisfechos", value: `+${coverageStats.clientsSatisfied}`, icon: ArrowRight },
] as const

const typeConfig = {
  local: { label: "Local", badgeClass: "bg-emerald-500/10 text-emerald-500" },
  regional: { label: "Regional", badgeClass: "bg-amber-500/10 text-amber-500" },
  nacional: { label: "Nacional", badgeClass: "bg-blue-500/10 text-blue-500" },
} as const

export default function CoberturaPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Cobertura
          </h1>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Más de una década protegiendo hogares y empresas en todo Chile.
            Conoce nuestras zonas de cobertura.
          </p>
        </div>
      </section>

      <section className="bg-theme-bg py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 border border-theme-border/50 overflow-hidden">
            <div className="aspect-[21/9] relative flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.08)_0%,_transparent_70%)]" />
              <div className="relative flex flex-col items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500">
                  <Map className="h-10 w-10" aria-hidden="true" />
                </div>
                <p className="text-sm text-slate-400 font-medium">
                  Mapa interactivo de cobertura
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-theme-surface py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {statItems.map((stat) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-theme-bg border border-theme-border p-6 text-center transition-shadow hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-theme-accent/10 text-theme-accent mx-auto mb-4">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="text-3xl font-bold text-theme-text">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-theme-secondary">
                    {stat.label}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-theme-bg py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-theme-text sm:text-4xl">
              Zonas de Cobertura
            </h2>
            <p className="mt-4 text-lg text-theme-secondary">
              Estamos presentes en las principales regiones del país con
              cobertura en más de 40 comunas.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {coverageZones.map((zone) => {
              const config = typeConfig[zone.type]
              return (
                <div
                  key={zone.region}
                  className="rounded-2xl bg-theme-surface border border-theme-border p-6 transition-shadow hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-theme-accent/10 text-theme-accent">
                        <MapPin className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-theme-text">
                          {zone.region}
                        </h3>
                        <p className="text-sm text-theme-secondary mt-0.5">
                          {zone.comunas.length} comunas
                        </p>
                      </div>
                    </div>
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium shrink-0 ${config.badgeClass}`}
                    >
                      {config.label}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {zone.comunas.map((comuna) => (
                      <span
                        key={comuna}
                        className="inline-flex items-center gap-1 rounded-md bg-theme-bg border border-theme-border px-2.5 py-1 text-xs font-medium text-theme-secondary"
                      >
                        <MapPin className="h-3 w-3 shrink-0 text-theme-accent" aria-hidden="true" />
                        {comuna}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-xl">
            <h2 className="text-2xl font-bold text-theme-text sm:text-3xl">
              ¿No ves tu comuna? Contáctanos igual
            </h2>
            <p className="mt-3 text-lg text-theme-secondary">
              Nuestra cobertura se expande constantemente. Si no encuentras tu
              comuna en la lista, escríbenos y te informaremos si podemos llegar
              hasta ti.
            </p>
            <Link
              href="/contacto"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-theme-accent px-6 py-3 text-base font-semibold text-white transition-all hover:bg-theme-accent-hover shadow-lg"
            >
              Contáctanos
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
