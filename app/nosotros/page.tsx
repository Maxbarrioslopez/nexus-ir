import Image from "next/image"
import Link from "next/link"
import {
  Target,
  Eye,
  ShieldCheck,
  Users,
  Radio,
  ArrowRight,
  Building2,
  CheckCircle,
  MapPin,
  Smile,
} from "lucide-react"
import { companyInfo, teamMembers } from "@/data/team"
import { coverageStats } from "@/data/coverage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description:
    "Conoce a NETXUS Security Chile, integrador y distribuidor autorizado de tecnología de seguridad perimetral por fibra óptica.",
}

const statIcons = [
  <Building2 key="years" className="h-6 w-6" aria-hidden="true" />,
  <CheckCircle key="projects" className="h-6 w-6" aria-hidden="true" />,
  <MapPin key="cities" className="h-6 w-6" aria-hidden="true" />,
  <Smile key="clients" className="h-6 w-6" aria-hidden="true" />,
] as const

export default function NosotrosPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-nexus-900 via-nexus-800 to-nexus-700 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Sobre Nosotros
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Conoce nuestra historia, nuestros valores y el equipo que hace
            posible la seguridad de tu hogar o empresa.
          </p>
        </div>
      </section>

      <section className="bg-theme-bg py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-theme-text sm:text-4xl">
              Nuestra Historia
            </h2>
            <p className="mt-6 text-base text-theme-secondary leading-relaxed">
              NETXUS Security Chile es un integrador y distribuidor autorizado
              de tecnología de seguridad perimetral por fibra óptica, respaldado
              directamente por el fabricante de tecnología LEOPARD para la
              representación y soporte en Chile. Nos especializamos en la
              protección de infraestructuras críticas con tecnología de
              detección por fibra óptica, ofreciendo soluciones avanzadas de
              seguridad perimetral tanto para empresas como para particulares.
              Contamos con más de 10 años de experiencia en el rubro de la
              seguridad electrónica, brindando servicios de calidad en
              instalación, mantención y certificación de sistemas de seguridad
              en todo Chile.
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <div className="rounded-2xl bg-theme-surface border border-theme-border p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-theme-accent/10 text-theme-accent mb-4">
                  <Target className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-theme-text">
                  Nuestra Misión
                </h3>
                <p className="mt-2 text-sm text-theme-secondary leading-relaxed">
                  {companyInfo.mission}
                </p>
              </div>

              <div className="rounded-2xl bg-theme-surface border border-theme-border p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-theme-accent/10 text-theme-accent mb-4">
                  <Eye className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-theme-text">
                  Nuestra Visión
                </h3>
                <p className="mt-2 text-sm text-theme-secondary leading-relaxed">
                  {companyInfo.vision}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-theme-surface py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-theme-text sm:text-4xl">
              Nuestros Valores
            </h2>
            <p className="mt-4 text-lg text-theme-secondary">
              Principios que guían cada proyecto y cada relación con nuestros
              clientes.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {companyInfo.values.map((value) => (
              <div
                key={value.name}
                className="rounded-2xl bg-theme-bg border border-theme-border p-6 transition-shadow hover:shadow-lg"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500 mb-3">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-theme-text">
                  {value.name}
                </h3>
                <p className="mt-2 text-sm text-theme-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-theme-bg py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-theme-text sm:text-4xl">
              Nuestro Equipo
            </h2>
            <p className="mt-4 text-lg text-theme-secondary">
              Profesionales comprometidos con tu seguridad.
            </p>
          </div>

          <div className="mt-12 mx-auto max-w-md">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="rounded-2xl bg-theme-surface border border-theme-border overflow-hidden"
              >
                <div className="aspect-square relative">
                  <Image
                    src={member.avatarUrl ?? "/images/placeholder.jpg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 384px"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-theme-text">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-theme-accent mt-1">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm text-theme-secondary leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-nexus-900 via-nexus-800 to-nexus-700 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500 mb-6">
                <Radio className="h-8 w-8" aria-hidden="true" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Nuestra Tecnología
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                Trabajamos con la tecnología de detección más avanzada del
                mercado.
              </p>
            </div>

            <div className="mt-10 rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {companyInfo.technology.name}
                  </h3>
                  <p className="text-sm text-amber-400 font-medium mt-1">
                    {companyInfo.technology.developer} &middot;{" "}
                    {companyInfo.technology.country}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400 shrink-0">
                  <Radio className="h-3.5 w-3.5" aria-hidden="true" />
                  Fibra Óptica
                </span>
              </div>
              <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                {companyInfo.technology.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-theme-surface py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-theme-text sm:text-4xl">
              Nuestra Cobertura
            </h2>
            <p className="mt-4 text-lg text-theme-secondary">
              Más de una década protegiendo hogares y empresas en todo Chile.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {(
              [
                {
                  label: "Años de Experiencia",
                  value: coverageStats.yearsInBusiness,
                },
                {
                  label: "Proyectos Completados",
                  value: `+${coverageStats.projectsCompleted}`,
                },
                {
                  label: "Ciudades Cubiertas",
                  value: `+${coverageStats.citiesCovered}`,
                },
                {
                  label: "Clientes Satisfechos",
                  value: `+${coverageStats.clientsSatisfied}`,
                },
              ] as const
            ).map((stat, i) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-theme-bg border border-theme-border p-6 text-center transition-shadow hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-theme-accent/10 text-theme-accent mx-auto mb-4">
                  {statIcons[i]}
                </div>
                <p className="text-3xl font-bold text-theme-text">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-theme-secondary">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-theme-text sm:text-3xl">
            ¿Listo para proteger lo que más importa?
          </h2>
          <p className="mt-3 text-lg text-theme-secondary max-w-xl mx-auto">
            Contáctanos para una cotización sin compromiso. Nuestro equipo
            está listo para ayudarte.
          </p>
          <Link
            href="/contacto"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-theme-accent px-6 py-3 text-base font-semibold text-white transition-all hover:bg-theme-accent-hover shadow-lg"
          >
            Contáctanos
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
