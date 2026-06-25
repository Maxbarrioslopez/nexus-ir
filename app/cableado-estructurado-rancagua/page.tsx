import { Network, Check, ArrowRight, Wifi, Server, Shield } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cableado Estructurado en Rancagua | Certificación Cat6/Cat6A | Nexus IRL",
  description: "Instalación de cableado estructurado Cat6 y Cat6A en Rancagua. Redes WiFi mesh, fibra óptica y certificación de puntos con informe Fluke. Cotiza online.",
  keywords: "cableado estructurado Rancagua, instalación red LAN Rancagua, cableado Cat6 Rancagua, certificación puntos red, red WiFi empresa Rancagua",
}

export default function CableadoEstructuradoPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 text-sm text-amber-400 mb-6">
              <Network className="h-4 w-4" aria-hidden="true" />
              Redes profesionales certificadas
            </div>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Cableado Estructurado en Rancagua</h1>
            <p className="mt-4 text-lg text-slate-400">
              Diseño e instalación de redes LAN con cableado Cat6/Cat6A certificado. 
              WiFi corporativo, fibra óptica y certificación de puntos con equipo profesional Fluke.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contacto" className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 font-semibold text-slate-900 hover:bg-amber-400 transition-colors">
                Cotiza Ahora <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-theme-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-theme-text text-center mb-12">Nuestros servicios de redes</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Network, title: "Cableado Estructurado", desc: "Cat6 y Cat6A certificado con informe Fluke. Canalización profesional." },
              { icon: Wifi, title: "Red WiFi Mesh", desc: "Cobertura total sin zonas muertas. Roaming perfecto para empresas." },
              { icon: Server, title: "Infraestructura TI", desc: "Switches, racks, patch panels y fibra óptica para tu empresa." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-theme-border bg-theme-bg p-6">
                <item.icon className="h-10 w-10 text-amber-500 mb-4" aria-hidden="true" />
                <h3 className="font-semibold text-theme-text">{item.title}</h3>
                <p className="mt-2 text-sm text-theme-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-theme-bg py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-theme-text mb-12 text-center">¿Por qué certificar tus puntos de red?</h2>
          <div className="grid gap-3 sm:grid-cols-2 max-w-3xl mx-auto">
            {[
              "Velocidades de transmisión óptimas",
              "Mínima latencia y pérdida de paquetes",
              "Cumplimiento de normativas vigentes",
              "Respaldo documentado para seguros",
              "Diagnóstico preciso de fallas",
              "Escalabilidad para futuras expansiones",
              "Valor agregado a tu propiedad",
              "Tranquilidad y rendimiento garantizado",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-xl bg-amber-500/5 border border-amber-500/10 px-4 py-3">
                <Check className="h-4 w-4 shrink-0 text-amber-500" aria-hidden="true" />
                <span className="text-sm text-theme-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-theme-text">¿Necesitas una red profesional?</h2>
          <p className="mt-3 text-lg text-theme-secondary max-w-xl mx-auto">Cotiza tu proyecto de cableado estructurado sin compromiso.</p>
          <Link href="/contacto" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 font-semibold text-slate-900 hover:bg-amber-400 transition-colors">
            Cotizar Ahora <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
