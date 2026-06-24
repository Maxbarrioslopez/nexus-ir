import { Zap, Check, ArrowRight, Shield, Smartphone, Lock } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cerca Eléctrica en Rancagua | Instalación Certificada SEC | Nexus IRL",
  description: "Instalación de cerca eléctrica en Rancagua con certificación SEC. Sistemas inteligentes con app, sensores de corte y alertas. Cotiza sin compromiso.",
  keywords: "cerca eléctrica Rancagua, cerco eléctrico Rancagua, instalación cerca eléctrica, certificación SEC cerca eléctrica, cerca eléctrica precio Rancagua",
}

export default function CercaElectricaPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-nexus-900 via-nexus-800 to-nexus-700 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 text-sm text-amber-400 mb-6">
              <Zap className="h-4 w-4" aria-hidden="true" />
              Certificación SEC — Rancagua, Chile
            </div>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Cerca Eléctrica en Rancagua</h1>
            <p className="mt-4 text-lg text-slate-300">
              Instalación profesional de cercos eléctricos con energizadores certificados SEC, 
              programación inteligente desde tu celular y sensores de corte con alertas en tiempo real.
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
          <h2 className="text-3xl font-bold text-theme-text text-center mb-12">Ventajas de una cerca eléctrica inteligente</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Shield, title: "Disuasión inmediata", desc: "El intruso se encuentra con la primera barrera antes de llegar al activo." },
              { icon: Smartphone, title: "Control desde tu celular", desc: "Activa, desactiva y recibe alertas desde la app Colmena Digital." },
              { icon: Lock, title: "Certificación SEC", desc: "Instalamos con certificación y documentación oficial. Cumplimiento normativo." },
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
          <h2 className="text-3xl font-bold text-theme-text mb-12 text-center">Incluye</h2>
          <div className="grid gap-3 sm:grid-cols-2 max-w-3xl mx-auto">
            {[
              "Energizador certificado SEC (ISO 9001-2000)",
              "Postes galvanizados + aisladores anti-salitre",
              "Cable de acero de alta resistencia",
              "Sensores de corte y sabotaje",
              "Programación inteligente vía app",
              "Alertas SMS, push y llamada",
              "Respaldo de batería ante cortes",
              "Certificación SEC y documentación",
              "Garantía real de 12 meses",
              "Soporte post-venta 24/7",
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
          <h2 className="text-2xl font-bold text-theme-text">Protege tu perímetro hoy</h2>
          <p className="mt-3 text-lg text-theme-secondary max-w-xl mx-auto">
            Solicita una cotización sin compromiso y recibe asesoría personalizada.
          </p>
          <Link href="/contacto" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 font-semibold text-nexus-900 hover:bg-amber-400 transition-colors">
            Cotizar Ahora <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
