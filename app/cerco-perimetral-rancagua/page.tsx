import { Zap, Check, ArrowRight, Shield, Smartphone, Radio, Waves } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cerco Perimetral en Rancagua | Fibra Óptica y Cerca Eléctrica | NETXUS",
  description: "Cerco perimetral en Rancagua. Detectamos intrusiones con fibra óptica LEOPARD con IA (NETXUS VALLA, SUELO, WALL) y cercos eléctricos certificados SEC. Cotiza sin compromiso.",
  keywords: "cerco perimetral Rancagua, cerca eléctrica Rancagua, seguridad perimetral fibra óptica, NETXUS VALLA, NETXUS SUELO, NETXUS WALL, detección intrusión Rancagua, instalación cerca perimetral Rancagua",
}

export default function CercoPerimetralPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 text-sm text-amber-400 mb-6">
              <Zap className="h-4 w-4" aria-hidden="true" />
              Tecnología LEOPARD con IA — Rancagua, Chile
            </div>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Cerco Perimetral Inteligente en Rancagua</h1>
            <p className="mt-4 text-lg text-slate-400">
              Detectamos intrusiones antes de que traspasen tu perímetro. Desde fibra óptica con inteligencia 
              artificial LEOPARD (NETXUS VALLA, SUELO, WALL) hasta cercos eléctricos certificados SEC con 
              programación desde tu celular.
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
          <h2 className="text-3xl font-bold text-theme-text text-center mb-12">Dos tecnologías, un objetivo: proteger tu perímetro</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-transparent p-6">
              <div className="flex items-center gap-3 mb-4">
                <Radio className="h-8 w-8 text-amber-500" />
                <h3 className="text-xl font-bold text-theme-text">Fibra Óptica LEOPARD</h3>
              </div>
              <p className="text-theme-secondary mb-4 text-sm">
                Tecnología de A2Q (España). Análisis espectral FFT en tiempo real con IA adaptativa.
                Cable pasivo, inmune a interferencias, no alerta al intruso.
              </p>
              <ul className="space-y-2">
                {[
                  "NETXUS VALLA: detección en cercos metálicos",
                  "NETXUS SUELO: detección enterrada",
                  "NETXUS WALL: detección en paredes y techos",
                  "0 falsas alarmas: IA distingue personas, vehículos, animales",
                  "Hasta 1000 m por analizador",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-theme-text">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-theme-accent font-semibold">Desde $2.500.000 *</p>
            </div>

            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-transparent p-6">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="h-8 w-8 text-blue-400" />
                <h3 className="text-xl font-bold text-theme-text">Cerca Eléctrica Certificada SEC</h3>
              </div>
              <p className="text-theme-secondary mb-4 text-sm">
                Solución tradicional con respaldo normativo chileno. Programación inteligente desde 
                app Colmena Digital, sensores de corte y alertas en tiempo real.
              </p>
              <ul className="space-y-2">
                {[
                  "Energizadores certificados SEC",
                  "Postes galvanizados + aisladores anti-salitre",
                  "Sensores de corte y sabotaje",
                  "Alertas SMS, push y llamada telefónica",
                  "Respaldo de batería ante cortes de energía",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-theme-text">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-theme-accent font-semibold">Desde $350.000 instalado</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-theme-bg py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-theme-text text-center mb-12">¿Qué tecnología elegir?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-theme-border">
                  <th className="text-left py-3 px-4 text-theme-text font-semibold">Característica</th>
                  <th className="text-left py-3 px-4 text-amber-500 font-semibold">Fibra Óptica (NETXUS)</th>
                  <th className="text-left py-3 px-4 text-blue-400 font-semibold">Cerca Eléctrica</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Detección", "Invisible al intruso (cable pasivo)", "Disuasiva visible"],
                  ["Falsas alarmas", "Mínimas (IA adaptativa FFT)", "Moderadas (ramas, animales)"],
                  ["Instalación", "En cerco, enterrado o en pared", "Sobre cerco existente o nuevo"],
                  ["Cobertura", "Hasta 1000 m por analizador", "Según configuración de hilos"],
                  ["Mantención", "Mínima (sistema pasivo)", "Periódica (cableado, vegetación)"],
                  ["Costo", "Desde $2.500.000", "Desde $350.000"],
                  ["Ideal para", "Perímetros críticos, industrias", "Hogares, condominios, bodegas"],
                ].map(([feature, fiber, electric]) => (
                  <tr key={feature} className="border-b border-theme-border">
                    <td className="py-3 px-4 text-theme-text font-medium">{feature}</td>
                    <td className="py-3 px-4 text-theme-secondary">{fiber}</td>
                    <td className="py-3 px-4 text-theme-secondary">{electric}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-theme-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-theme-text text-center mb-12">Incluye con cada instalación</h2>
          <div className="grid gap-3 sm:grid-cols-2 max-w-3xl mx-auto">
            {[
              "Asesoría técnica personalizada sin compromiso",
              "Levantamiento en terreno y diseño de solución",
              "Instalación profesional con canalización limpia",
              "Certificación SEC y documentación oficial",
              "Configuración de app y acceso remoto",
              "Capacitación al usuario",
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
            Solicita una cotización sin compromiso. Te recomendamos la solución ideal para tu propiedad.
          </p>
          <Link href="/contacto" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 font-semibold text-slate-900 hover:bg-amber-400 transition-colors">
            Cotizar Ahora <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
