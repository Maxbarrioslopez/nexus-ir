import { services } from "@/data/services"
import { Camera, Check, ArrowRight, Shield, Star } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

const service = services.find((s) => s.id === "camaras")!

export const metadata: Metadata = {
  title: "Cámaras de Seguridad en Rancagua | Instalación Profesional | Nexus IRL",
  description: "Venta e instalación de cámaras de seguridad en Rancagua. IP, HD, térmicas, domos. Sistema NVR con acceso remoto. Cotización sin compromiso.",
  keywords: "cámaras seguridad Rancagua, instalar cámaras Rancagua, CCTV Rancagua, cámaras IP Rancagua, empresa seguridad Rancagua",
}

export default function CamarasRancaguaPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-nexus-900 via-nexus-800 to-nexus-700 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 text-sm text-amber-400 mb-6">
              <Camera className="h-4 w-4" aria-hidden="true" />
              Especialistas en Rancagua y VI Región
            </div>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Cámaras de Seguridad en Rancagua
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Instalación profesional de cámaras IP, HD, térmicas y sistemas NVR con acceso remoto. 
              Protege tu hogar o negocio con equipos de última generación y garantía real.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contacto" className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 font-semibold text-nexus-900 hover:bg-amber-400 transition-colors">
                Cotiza Ahora <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/precios" className="inline-flex items-center gap-2 rounded-xl border border-slate-500/50 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors">
                Ver Precios
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-theme-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-theme-text text-center mb-12">¿Por qué instalar cámaras de seguridad?</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Shield, title: "Disuasión efectiva", desc: "Las cámaras visibles reducen hasta un 60% el riesgo de intrusiones." },
              { icon: Camera, title: "Monitoreo 24/7", desc: "Accede a tus cámaras en tiempo real desde tu celular, estés donde estés." },
              { icon: Star, title: "Prueba contundente", desc: "Las grabaciones son evidencia clave para denuncias y seguros." },
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
          <h2 className="text-3xl font-bold text-theme-text text-center mb-12">Tipos de cámaras que instalamos</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Cámaras IP inalámbricas",
              "Cámaras HD Full Color",
              "Domos PTZ 360°",
              "Cámaras térmicas",
              "Cámaras antivandálicas",
              "Cámaras ocultas",
              "Cámaras 4K Ultra HD",
              "Micrófonos ambientales",
              "Sistemas NVR 16 canales",
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
          <h2 className="text-2xl font-bold text-theme-text">¿Listo para proteger tu hogar o negocio?</h2>
          <p className="mt-3 text-lg text-theme-secondary max-w-xl mx-auto">
            Cotiza hoy sin compromiso. Te asesoramos para encontrar la solución perfecta para ti.
          </p>
          <Link href="/contacto" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 font-semibold text-nexus-900 hover:bg-amber-400 transition-colors">
            Cotizar Ahora <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
