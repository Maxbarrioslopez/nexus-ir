import Image from "next/image"
import Link from "next/link"
import {
  Search,
  PenTool,
  Wrench,
  Sliders,
  HeartHandshake,
  Clock,
  CheckCircle,
  MapPin,
  ArrowRight,
} from "lucide-react"
import { processSteps } from "@/data/process"
import { coverageStats } from "@/data/coverage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nuestro Proceso",
  description:
    "Conoce nuestra metodología de trabajo: desde el levantamiento técnico hasta la entrega y soporte continuo de tu sistema de seguridad.",
}

const stepIcons = [
  <Search key="1" className="h-6 w-6" aria-hidden="true" />,
  <PenTool key="2" className="h-6 w-6" aria-hidden="true" />,
  <Wrench key="3" className="h-6 w-6" aria-hidden="true" />,
  <Sliders key="4" className="h-6 w-6" aria-hidden="true" />,
  <HeartHandshake key="5" className="h-6 w-6" aria-hidden="true" />,
] as const

export default function ProcesoPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Nuestro Proceso
          </h1>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Así trabajamos para transformar tu propiedad en un espacio más
            seguro, desde la primera visita hasta el soporte continuo.
          </p>
        </div>
      </section>

      <section className="bg-theme-bg py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-theme-text sm:text-4xl">
              Metodología
            </h2>
            <p className="mt-4 text-lg text-theme-secondary leading-relaxed">
              Nuestra metodología está diseñada para que cada proyecto se
              ejecute con los más altos estándares de calidad, transparencia y
              profesionalismo. Creemos que la seguridad no es un producto, sino
              un proceso que comienza con entender tus necesidades y termina con
              un sistema que funciona día y noche, respaldado por soporte real.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-theme-surface py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="relative">
              <div className="absolute left-8 top-0 h-full w-0.5 bg-theme-accent/20 hidden sm:block" />

              {processSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`relative flex flex-col sm:flex-row gap-6 sm:gap-12 pb-16 last:pb-0 ${
                    index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  <div className="hidden sm:flex sm:w-1/2 flex-col">
                    {index % 2 === 0 && (
                      <div className="rounded-2xl bg-theme-bg border border-theme-border p-6 sm:p-8">
                        <p className="text-sm font-medium text-theme-accent mb-1">
                          Duración: {step.duration}
                        </p>
                        <h3 className="text-xl font-bold text-theme-text mt-2">
                          {step.title}
                        </h3>
                        <p className="mt-3 text-sm text-theme-secondary leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-center sm:justify-center shrink-0 relative z-10">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-theme-accent/10 text-theme-accent border-4 border-theme-surface shadow-md">
                      {stepIcons[index]}
                    </div>
                    <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-theme-accent text-xs font-bold text-white shadow">
                      {step.number}
                    </span>
                  </div>

                  <div className="flex sm:w-1/2 flex-col">
                    {index % 2 !== 0 && (
                      <div className="rounded-2xl bg-theme-bg border border-theme-border p-6 sm:p-8">
                        <p className="text-sm font-medium text-theme-accent mb-1">
                          Duración: {step.duration}
                        </p>
                        <h3 className="text-xl font-bold text-theme-text mt-2">
                          {step.title}
                        </h3>
                        <p className="mt-3 text-sm text-theme-secondary leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="sm:hidden rounded-2xl bg-theme-bg border border-theme-border p-6">
                    <p className="text-sm font-medium text-theme-accent mb-1">
                      Duración: {step.duration}
                    </p>
                    <h3 className="text-xl font-bold text-theme-text mt-2">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm text-theme-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-theme-bg py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-theme-text sm:text-4xl">
              Nuestras Cifras
            </h2>
            <p className="mt-4 text-lg text-theme-secondary">
              Más de una década protegiendo hogares y empresas en todo Chile.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-theme-surface border border-theme-border p-8 text-center transition-shadow hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-theme-accent/10 text-theme-accent mx-auto mb-5">
                <Clock className="h-7 w-7" aria-hidden="true" />
              </div>
              <p className="text-3xl font-bold text-theme-text">
                {coverageStats.yearsInBusiness}+
              </p>
              <p className="mt-1 text-sm text-theme-secondary">
                Años de Experiencia
              </p>
            </div>

            <div className="rounded-2xl bg-theme-surface border border-theme-border p-8 text-center transition-shadow hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-theme-accent/10 text-theme-accent mx-auto mb-5">
                <CheckCircle className="h-7 w-7" aria-hidden="true" />
              </div>
              <p className="text-3xl font-bold text-theme-text">
                +{coverageStats.projectsCompleted}
              </p>
              <p className="mt-1 text-sm text-theme-secondary">
                Proyectos Completados
              </p>
            </div>

            <div className="rounded-2xl bg-theme-surface border border-theme-border p-8 text-center transition-shadow hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-theme-accent/10 text-theme-accent mx-auto mb-5">
                <MapPin className="h-7 w-7" aria-hidden="true" />
              </div>
              <p className="text-3xl font-bold text-theme-text">
                +{coverageStats.citiesCovered}
              </p>
              <p className="mt-1 text-sm text-theme-secondary">
                Comunas Cubiertas
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-theme-text sm:text-3xl">
            ¿Listo para empezar?
          </h2>
          <p className="mt-3 text-lg text-theme-secondary max-w-xl mx-auto">
            Contáctanos y te visitamos sin compromiso para evaluar tu proyecto.
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
