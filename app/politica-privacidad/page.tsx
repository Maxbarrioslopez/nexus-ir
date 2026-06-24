import { MapPin, Shield, Lock, Mail, FileText } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de Privacidad y Tratamiento de Datos de NEXUS IRL Security Chile, conforme a la Ley 19.628 sobre Protección de la Vida Privada.",
}

const sections = [
  {
    icon: FileText,
    title: "Identificación del Responsable",
    content: (
      <p className="text-theme-secondary leading-relaxed">
        El responsable del tratamiento de tus datos personales es{" "}
        <strong className="text-theme-text">ELVIRA DEL CARMEN DIAZ CUEVAS E.I.R.L</strong>, sociedad
        legalmente constituida bajo el RUT <strong className="text-theme-text">77.323.293-8</strong>,
        con domicilio en la ciudad de Rancagua, Región del Libertador General Bernardo O&apos;Higgins,
        Chile. Para cualquier consulta relacionada con el tratamiento de tus datos personales, puedes
        contactarnos a través del correo electrónico{" "}
        <a href="mailto:contacto@nexusirl.cl" className="text-theme-accent hover:underline">
          contacto@nexusirl.cl
        </a>
        .
      </p>
    ),
  },
  {
    icon: Shield,
    title: "Datos Recopilados",
    content: (
      <p className="text-theme-secondary leading-relaxed">
        A través de nuestros formularios de contacto y canales de comunicación, recopilamos la
        siguiente información personal: nombre completo, dirección de correo electrónico, número de
        teléfono, servicio de interés y el contenido del mensaje que nos hagas llegar. Estos datos son
        proporcionados voluntariamente por ti al momento de contactarnos o solicitar una cotización.
      </p>
    ),
  },
  {
    icon: MapPin,
    title: "Finalidad del Tratamiento",
    content: (
      <ul className="list-disc pl-5 text-theme-secondary leading-relaxed space-y-2">
        <li>Responder a tus solicitudes de cotización y consultas comerciales.</li>
        <li>Prestar los servicios de seguridad electrónica contratados.</li>
        <li>
          Enviar comunicaciones comerciales y promociones relacionadas con nuestros productos y
          servicios, siempre que nos hayas otorgado tu consentimiento expreso para ello.
        </li>
        <li>Cumplir con obligaciones legales y regulatorias aplicables.</li>
      </ul>
    ),
  },
  {
    icon: FileText,
    title: "Base Legal",
    content: (
      <p className="text-theme-secondary leading-relaxed">
        El tratamiento de tus datos personales se fundamenta en las siguientes bases legales: (i) tu
        consentimiento expreso, otorgado al momento de contactarnos o aceptar nuestras
        comunicaciones; (ii) la ejecución de medidas precontractuales y contractuales necesarias para
        atender tus solicitudes y prestar nuestros servicios; y (iii) el interés legítimo de nuestra
        empresa para mejorar nuestros servicios y mantener una comunicación efectiva con nuestros
        clientes y prospectos.
      </p>
    ),
  },
  {
    icon: Shield,
    title: "Destinatarios de los Datos",
    content: (
      <p className="text-theme-secondary leading-relaxed">
        Tus datos personales no serán compartidos con terceros no vinculados, salvo obligación legal
        o requerimiento de autoridad competente. Como parte de nuestra operación, utilizamos
        servicios de infraestructura tecnológica de{" "}
        <strong className="text-theme-text">Vercel Inc.</strong>, empresa con sede en Estados Unidos
        que cumple con los principios del{" "}
        <strong className="text-theme-text">Privacy Shield</strong> y estándares internacionales de
        protección de datos. No realizamos transferencias internacionales de datos sin las garantías
        adecuadas.
      </p>
    ),
  },
  {
    icon: Lock,
    title: "Derechos del Titular (ARCO)",
    content: (
      <p className="text-theme-secondary leading-relaxed">
        De conformidad con la{" "}
        <strong className="text-theme-text">
          Ley N° 19.628 sobre Protección de la Vida Privada
        </strong>
        , tienes los siguientes derechos ARCO: <strong className="text-theme-text">Acceso</strong>{" "}
        (conocer qué datos tuyos tenemos y cómo los usamos),{" "}
        <strong className="text-theme-text">Rectificación</strong> (solicitar la corrección de datos
        inexactos o incompletos), <strong className="text-theme-text">Cancelación</strong> (solicitar
        la eliminación de tus datos cuando ya no sean necesarios) y{" "}
        <strong className="text-theme-text">Oposición</strong> (oponerte al tratamiento de tus datos
        para fines específicos). Puedes ejercer estos derechos en cualquier momento contactándonos
        a través del correo indicado al final de esta política.
      </p>
    ),
  },
  {
    icon: Lock,
    title: "Plazo de Conservación",
    content: (
      <p className="text-theme-secondary leading-relaxed">
        Conservaremos tus datos personales durante un plazo máximo de{" "}
        <strong className="text-theme-text">5 años</strong> después del último contacto contigo, o
        hasta que solicites la revocación de tu consentimiento, lo que ocurra primero. Una vez
        cumplido el plazo de conservación, tus datos serán eliminados de forma segura de nuestros
        sistemas, salvo que exista una obligación legal que requiera su mantenimiento por un período
        adicional.
      </p>
    ),
  },
  {
    icon: Shield,
    title: "Medidas de Seguridad",
    content: (
      <ul className="list-disc pl-5 text-theme-secondary leading-relaxed space-y-2">
        <li>
          <strong className="text-theme-text">Cifrado SSL/TLS:</strong> todas las comunicaciones
          entre tu navegador y nuestro sitio web están protegidas mediante cifrado de extremo a
          extremo.
        </li>
        <li>
          <strong className="text-theme-text">Controles de Acceso:</strong> solo personal autorizado
          tiene acceso a los datos personales, bajo estrictas políticas de confidencialidad.
        </li>
        <li>
          <strong className="text-theme-text">Copias de Seguridad:</strong> realizamos respaldos
          periódicos de nuestros sistemas para garantizar la integridad y disponibilidad de la
          información.
        </li>
      </ul>
    ),
  },
  {
    icon: MapPin,
    title: "Cookies",
    content: (
      <p className="text-theme-secondary leading-relaxed">
        Este sitio web utiliza{" "}
        <strong className="text-theme-text">Google Analytics 4</strong> con direcciones IP
        anonimizadas para analizar el tráfico y el comportamiento de los usuarios de forma agregada.
        Esta información nos permite mejorar continuamente tu experiencia de navegación. Las cookies
        de Google Analytics no recopilan datos personales identificables. Puedes gestionar tus
        preferencias de cookies a través del banner de consentimiento disponible en tu primera
        visita.
      </p>
    ),
  },
  {
    icon: Mail,
    title: "Contacto para Ejercer tus Derechos",
    content: (
      <p className="text-theme-secondary leading-relaxed">
        Para ejercer tus derechos ARCO, revocar tu consentimiento, o realizar cualquier consulta
        relacionada con el tratamiento de tus datos personales, puedes escribirnos a:{" "}
        <a
          href="mailto:contacto@nexusirl.cl"
          className="text-theme-accent font-medium hover:underline"
        >
          contacto@nexusirl.cl
        </a>
        . Responderemos tu solicitud dentro del plazo legal establecido, sin costo alguno para ti.
      </p>
    ),
  },
  {
    icon: FileText,
    title: "Actualizaciones de esta Política",
    content: (
      <p className="text-theme-secondary leading-relaxed">
        Nos reservamos el derecho de actualizar o modificar esta Política de Privacidad en cualquier
        momento para reflejar cambios en nuestras prácticas, tecnologías o requisitos legales. Te
        recomendamos revisar esta página periódicamente para mantenerte informado sobre cómo
        protegemos tu información. Las modificaciones entrarán en vigor inmediatamente después de su
        publicación en esta página.
      </p>
    ),
  },
]

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-nexus-900 via-nexus-800 to-nexus-700 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500">
              <Shield className="h-8 w-8" aria-hidden="true" />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Política de Privacidad y Tratamiento de Datos
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
            En NEXUS IRL Security Chile nos tomamos en serio tu privacidad. Esta política describe
            cómo recopilamos, usamos y protegemos tu información personal de acuerdo con la
            legislación chilena.
          </p>
        </div>
      </section>

      <section className="bg-theme-bg py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-theme-secondary mb-12 text-center">
            Última actualización:{" "}
            <span className="text-theme-text font-medium">Junio 2026</span>
          </p>

          <div className="space-y-8">
            {sections.map((section) => {
              const Icon = section.icon
              return (
                <div
                  key={section.title}
                  className="rounded-2xl border border-theme-border bg-theme-surface p-6 sm:p-8 transition-shadow hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h2 className="text-xl font-bold text-theme-text mb-3">
                        {section.title}
                      </h2>
                      {section.content}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-12 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6 sm:p-8 text-center">
            <p className="text-sm text-theme-secondary">
              Si tienes preguntas sobre esta política, no dudes en contactarnos a{" "}
              <a
                href="mailto:contacto@nexusirl.cl"
                className="text-theme-accent font-medium hover:underline"
              >
                contacto@nexusirl.cl
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
