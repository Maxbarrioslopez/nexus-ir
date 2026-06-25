import { Bell, Check, ArrowRight, Shield, Home, Smartphone } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Alarmas de Seguridad para el Hogar | Nexus IRL Chile",
  description: "Sistemas de alarma inteligentes para hogar. Sensores de apertura, movimiento, humo y gas. Monitoreo 24/7 y control desde tu celular. Cotiza online.",
  keywords: "alarmas seguridad hogar, sistema alarma casa, alarma inteligente, sensor movimiento, alarma monitoreo 24/7, detector humo, alarma hogar Chile",
}

export default function AlarmasHogarPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 text-sm text-amber-400 mb-6">
              <Bell className="h-4 w-4" aria-hidden="true" />
              Seguridad inteligente para tu familia
            </div>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Alarmas Inteligentes para el Hogar</h1>
            <p className="mt-4 text-lg text-slate-400">
              Protege a tu familia con sistemas de alarma monitoreados 24/7. Sensores inteligentes, 
              notificaciones en tiempo real y control total desde tu celular.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contacto" className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 font-semibold text-slate-900 hover:bg-amber-400 transition-colors">
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
          <h2 className="text-3xl font-bold text-theme-text text-center mb-12">Características de nuestro sistema</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Bell, title: "Alertas en tiempo real", desc: "Notificaciones al celular ante cualquier evento: apertura, movimiento, humo." },
              { icon: Home, title: "Modos inteligentes", desc: "Ausente, Presente, Nocturno y Vacaciones. Se adaptan a tu rutina." },
              { icon: Smartphone, title: "Control remoto total", desc: "Activa y desactiva desde tu celular, estés donde estés." },
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
          <h2 className="text-3xl font-bold text-theme-text mb-12 text-center">Componentes del sistema</h2>
          <div className="grid gap-3 sm:grid-cols-2 max-w-3xl mx-auto">
            {[
              "Central de alarma con batería de respaldo",
              "Sensores de apertura para puertas y ventanas",
              "Detectores de movimiento con IA (mascotas OK)",
              "Sensores de humo, gas y monóxido",
              "Panel táctil con código + RFID",
              "Sirena exterior 110 dB",
              "Monitoreo 24/7 con alertas al celular",
              "Control por voz (Alexa, Google Home)",
              "Integración con cámaras de seguridad",
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
          <h2 className="text-2xl font-bold text-theme-text">Protege lo que más importa</h2>
          <p className="mt-3 text-lg text-theme-secondary max-w-xl mx-auto">Cotiza hoy tu sistema de alarma inteligente.</p>
          <Link href="/contacto" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 font-semibold text-slate-900 hover:bg-amber-400 transition-colors">
            Cotizar Ahora <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
