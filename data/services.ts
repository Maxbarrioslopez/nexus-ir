import {
  Camera,
  Wifi,
  Shield,
  Zap,
  Network,
  Building2,
  type LucideIcon,
} from "lucide-react"

export interface Service {
  id: string
  title: string
  shortDesc: string
  description: string
  icon: string
  features: string[]
  forHome: boolean
  forBusiness: boolean
}

export const services: Service[] = [
  {
    id: "camaras",
    title: "Cámaras de Seguridad",
    shortDesc: "Venta e instalación de cámaras IP, HD, térmicas y domos para hogar y empresa.",
    description:
      "Ofrecemos equipos de última generación con visión nocturna, detección de movimiento, audio bidireccional y acceso remoto desde tu celular. Trabajamos con las mejores marcas del mercado y garantizamos una instalación profesional con certificación de punto.",
    icon: "Camera",
    features: [
      "Cámaras IP inalámbricas y alámbricas",
      "Sistemas NVR/DVR con grabación 24/7",
      "Visión nocturna y gran angular",
      "Acceso remoto en tiempo real",
      "Cámaras térmicas y especializadas",
      "Domos PTZ con control de movimiento",
    ],
    forHome: true,
    forBusiness: true,
  },
  {
    id: "alarmas",
    title: "Alarmas y Sensores",
    shortDesc: "Sistemas de alarma inteligentes con sensores de apertura, movimiento y perimetrales.",
    description:
      "Protegemos tu propiedad con sistemas de alarma monitoreados 24/7. Sensores de puertas y ventanas, detectores de movimiento, sensores de humo y gas, todo integrado en una plataforma centralizada.",
    icon: "Shield",
    features: [
      "Centrales de alarma con respaldo de batería",
      "Sensores de apertura y movimiento",
      "Detectores de humo y monóxido de carbono",
      "Monitoreo 24/7 con alertas al celular",
      "Integración con cámaras y cerraduras",
      "Panel de control táctil",
    ],
    forHome: true,
    forBusiness: true,
  },
  {
    id: "cerca-electrica",
    title: "Cerca Eléctrica",
    shortDesc: "Instalación y programación de cercos eléctricos perimetrales inteligentes.",
    description:
      "Sistemas de cerca eléctrica con programación inteligente, sensores de corte y alertas en tiempo real. Ideales para perímetros grandes y pequeños, con cumplimiento normativo y certificación de instalación.",
    icon: "Zap",
    features: [
      "Cercos eléctricos perimetrales",
      "Programación inteligente con app",
      "Sensores de corte y sabotaje",
      "Alertas SMS y notificaciones push",
      "Respaldo de batería ante cortes",
      "Certificación de instalación",
    ],
    forHome: true,
    forBusiness: true,
  },
  {
    id: "redes",
    title: "Redes y Cableado Estructurado",
    shortDesc: "Diseño e instalación de redes LAN, WiFi corporativo y cableado certificado.",
    description:
      "Creamos la infraestructura de red que tu hogar o empresa necesita. Desde cableado estructurado categoría 6A hasta redes mesh de alto rendimiento. Certificamos cada punto de red con equipo profesional.",
    icon: "Network",
    features: [
      "Cableado estructurado Cat6 / Cat6A",
      "Redes WiFi mesh para cobertura total",
      "Switches, routers y access points",
      "Certificación de puntos de red",
      "Fibra óptica para empresas",
      "Soporte y mantenimiento de red",
    ],
    forHome: true,
    forBusiness: true,
  },
  {
    id: "automatizacion",
    title: "Automatización Inteligente",
    shortDesc: "Domótica para hogar y automatización de oficinas con control desde tu celular.",
    description:
      "Transforma tu espacio en un lugar inteligente. Control de iluminación, climatización, persianas, cerraduras y más desde una sola app. Integramos todos tus sistemas de seguridad en un ecosistema unificado.",
    icon: "Wifi",
    features: [
      "Control de iluminación inteligente",
      "Termostatos y climatización",
      "Cerraduras inteligentes",
      "Persianas y cortinas motorizadas",
      "Integración con asistentes de voz",
      "Escenas y automatizaciones personalizadas",
    ],
    forHome: true,
    forBusiness: true,
  },
  {
    id: "certificacion",
    title: "Certificación de Puntos",
    shortDesc: "Certificación profesional de puntos de red y sistemas de seguridad según normativa vigente.",
    description:
      "Certificamos cada instalación con equipos profesionales y entregamos informe detallado. Cumplimos con la normativa chilena vigente para sistemas de seguridad y redes. Ideal para empresas que requieren respaldo documentado.",
    icon: "Building2",
    features: [
      "Certificación de puntos de red (cobre y fibra)",
      "Informes técnicos detallados",
      "Cumplimiento normativa chilena",
      "Certificación para seguros",
      "Respaldo documentado para empresas",
      "Mantención periódica con recertificación",
    ],
    forHome: false,
    forBusiness: true,
  },
]

export function getServiceIcon(iconName: string): LucideIcon {
  const icons: Record<string, LucideIcon> = {
    Camera,
    Wifi,
    Shield,
    Zap,
    Network,
    Building2,
  }
  return icons[iconName] || Shield
}
