export interface Service {
  id: string
  title: string
  shortDesc: string
  description: string
  icon: string
  features: string[]
  forHome: boolean
  forBusiness: boolean
  imageUrl?: string
  keywords: string[]
  priceRange: string
}

export const services: Service[] = [
  {
    id: "camaras",
    title: "Cámaras de Seguridad",
    shortDesc: "Venta e instalación de cámaras IP, HD, térmicas, domos y sistemas NVR/DVR para hogar y empresa.",
    description:
      "Ofrecemos equipos de última generación con visión nocturna a color, detección de movimiento por IA, audio bidireccional y acceso remoto desde tu celular. Trabajamos con Hikvision, Dahua y las mejores marcas del mercado. Instalación profesional con certificación de punto, canalización limpia y configuración completa. Incluye capacitación al usuario y soporte post-venta.",
    icon: "Camera",
    features: [
      "Cámaras IP inalámbricas y alámbricas PoE",
      "NVR/DVR con disco duro y grabación 24/7",
      "Visión nocturna a color Full Color 2.0",
      "Acceso remoto vía app en tiempo real",
      "Cámaras térmicas para perímetro industrial",
      "Domos PTZ con zoom óptico y seguimiento automático",
      "Cámaras ocultas y antivandálicas",
      "Micrófonos ambientales y audio bidireccional",
      "Detección por IA: personas, vehículos, animales",
      "Cableado estructurado y certificación de punto",
    ],
    forHome: true,
    forBusiness: true,
    keywords: ["cámaras seguridad Rancagua", "instalación cámaras", "cámaras IP", "cámaras HD", "CCTV Rancagua", "kit cámaras seguridad", "cámaras visión nocturna", "NVR", "DVR"],
    priceRange: "$199.000 – $8.000.000+",
  },
  {
    id: "alarmas",
    title: "Alarmas y Sensores Inteligentes",
    shortDesc: "Sistemas de alarma monitoreados con sensores de apertura, movimiento, humo y gas. Integración con app.",
    description:
      "Protegemos tu propiedad con sistemas de alarma inteligentes con monitoreo 24/7 y notificaciones en tiempo real. Sensores de puertas y ventanas, detectores de movimiento con IA, sensores de humo, gas y monóxido de carbono. Todo integrado en una plataforma centralizada con panel táctil, control por voz y respaldo de batería.",
    icon: "Shield",
    features: [
      "Centrales de alarma con batería de respaldo",
      "Sensores de apertura magnéticos",
      "Detectores de movimiento con IA (mascotas OK)",
      "Sensores de humo, gas y monóxido de carbono",
      "Monitoreo 24/7 con alertas al celular",
      "Panel de control táctil con código + tag RFID",
      "Integración con cámaras y cerraduras inteligentes",
      "Alarma perimetral y sirena exterior 110 dB",
      "Control por voz (Alexa, Google Home)",
      "Modos: Ausente, Presente, Nocturno, Vacaciones",
    ],
    forHome: true,
    forBusiness: true,
    keywords: ["alarmas seguridad hogar", "sistema alarma inteligente", "alarmas Rancagua", "sensores movimiento", "alarma monitoreo 24/7", "detector humo", "alarma casa"],
    priceRange: "$150.000 – $2.500.000",
  },
  {
    id: "cerco-perimetral",
    title: "Cerco Perimetral Inteligente",
    shortDesc: "Protección perimetral con fibra óptica LEOPARD, cercos eléctricos certificados SEC y sensores de corte con alertas en tiempo real.",
    description:
      "Protegemos tu perímetro con la mejor tecnología disponible. Desde sistemas de detección por fibra óptica con inteligencia artificial LEOPARD (A2Q, España) hasta cercos eléctricos certificados SEC con programación inteligente. Nuestra línea NETXUS de detección perimetral por fibra óptica analiza espectro FFT en tiempo real para identificar patrones de intrusión con mínimas falsas alarmas. El cable sensor es pasivo, inmune a EMI/RFI, y no alerta al intruso. Disponible en configuraciones NETXUS VALLA (cercos metálicos), NETXUS SUELO (enterrado) y NETXUS WALL (paredes/techos). Para proyectos que requieren solución tradicional, ofrecemos cercos eléctricos con energizadores certificados SEC, postes galvanizados anti-salitre y programación desde app.",
    icon: "Zap",
    features: [
      "Tecnología LEOPARD con FFT e IA adaptativa (A2Q España)",
      "Fibra óptica pasiva: inmune a EMI/RFI, no alerta al intruso",
      "NETXUS VALLA: detección en cercos metálicos (corte, escalada)",
      "NETXUS SUELO: detección enterrada (pisadas, vehículos)",
      "NETXUS WALL: detección en paredes, suelos, techos (perforación)",
      "Energizadores certificados SEC con programación app",
      "Sensores de corte, sabotaje y falla de cable",
      "Alertas SMS, notificaciones push y llamada telefónica",
      "Postes galvanizados y aisladores anti-salitre",
      "Integración con cámaras, alarmas y sistemas existentes",
    ],
    forHome: true,
    forBusiness: true,
    keywords: ["cerco perimetral Rancagua", "cerca eléctrica inteligente", "seguridad perimetral fibra óptica", "NETXUS VALLA", "NETXUS SUELO", "NETXUS WALL", "certificación SEC", "detención intrusión perímetro", "cerco eléctrico certificado SEC"],
    priceRange: "$350.000 – $3.500.000+ (fibra óptica: desde $2.500.000)",
  },
  {
    id: "redes",
    title: "Redes y Cableado Estructurado",
    shortDesc: "Diseño e instalación de redes LAN, WiFi corporativo, fibra óptica y cableado certificado Cat6/Cat6A.",
    description:
      "Creamos la infraestructura de red que tu hogar o empresa necesita. Desde cableado estructurado categoría 6A hasta redes mesh de alto rendimiento para cobertura total. Certificamos cada punto de red con equipo profesional Fluke y entregamos informe técnico detallado. Diseñamos redes para soportar cargas de trabajo intensivas, videoconferencia, streaming y trabajo remoto.",
    icon: "Network",
    features: [
      "Cableado estructurado Cat6 / Cat6A certificado",
      "Redes WiFi mesh con roaming perfecto",
      "Switches gestionados y no gestionados",
      "Access points para cobertura empresarial",
      "Fibra óptica para conexiones de larga distancia",
      "Certificación de puntos de red con informe Fluke",
      "Soporte y mantenimiento de red planificado",
      "Diseño de red para trabajo remoto y nube",
      "Videoportero IP con reconocimiento facial",
      "Patch panels y organización de rack",
    ],
    forHome: true,
    forBusiness: true,
    keywords: ["cableado estructurado Rancagua", "certificación puntos red", "red WiFi mesh", "cableado Cat6", "fibra óptica empresa", "red corporativa", "instalación red LAN"],
    priceRange: "$120.000 – $8.000.000+",
  },
  {
    id: "seguridad-perimetral-fibra",
    title: "Seguridad Perimetral por Fibra Óptica",
    shortDesc: "Sistema de detección por fibra óptica con IA adaptativa y FFT. Tecnología LEOPARD de A2Q (España).",
    description:
      "La línea NETXUS de detección perimetral por fibra óptica representa el estado del arte en seguridad de perímetros críticos. Desarrollada por A2Q (Access to Quality S.L., España), la tecnología LEOPARD utiliza análisis espectral FFT en tiempo real e inteligencia artificial adaptativa para detectar intrusiones con mínimas falsas alarmas. El cable sensor de fibra óptica es pasivo, inmune a EMI/RFI, y no alerta al intruso de su existencia. Disponible en tres configuraciones: NETXUS VALLA (cercos metálicos), NETXUS SUELO (enterrado) y NETXUS WALL (paredes/techos).",
    icon: "Fiber",
    features: [
      "Tecnología LEOPARD con FFT e IA adaptativa",
      "Fibra óptica pasiva: inmune a EMI/RFI",
      "No alerta al intruso de su existencia ni posición",
      "Análisis espectral en tiempo real para identificar patrones",
      "IA adaptativa: aprende del entorno, reduce falsas alarmas",
      "Alta precisión con localización por zonas",
      "Sistema activo con auto-diagnóstico y auto-chequeo",
      "Hasta 800-1000 m por analizador según configuración",
      "Integración IP, USB, relés, RS485 con sistemas existentes",
      "Memoria de 1000 eventos, soporte remoto",
      "NETXUS VALLA: detección en cercos metálicos (corte, escalada, golpes)",
      "NETXUS SUELO: detección enterrada (pisadas, vehículos)",
      "NETXUS WALL: detección en paredes, suelos y techos (perforación)",
    ],
    forHome: false,
    forBusiness: true,
    keywords: ["seguridad perimetral fibra óptica", "NETXUS", "detección intrusión fibra", "protección perimetral inteligente", "NETXUS VALLA", "NETXUS SUELO", "NETXUS WALL", "seguridad perímetros críticos", "A2Q LEOPARD"],
    priceRange: "Desde $2.500.000 — consultar proyecto",
  },
]

import { Camera, Shield, Zap, Network, Radio, type LucideIcon } from "lucide-react"

export function getServiceIcon(iconName: string): LucideIcon {
  const icons: Record<string, LucideIcon> = {
    Camera, Shield, Zap, Network, Radio,
  }
  return icons[iconName] || Shield
}
