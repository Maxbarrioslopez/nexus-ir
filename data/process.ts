export interface Step {
  id: string
  number: number
  title: string
  description: string
  duration: string
}

export const processSteps: Step[] = [
  {
    id: "levantamiento",
    number: 1,
    title: "Levantamiento Técnico",
    description:
      "Revisamos tu propiedad, identificamos puntos críticos, medimos perímetros y evaluamos la infraestructura existente. Te escuchamos para entender tus necesidades reales y te recomendamos la mejor solución sin intentar venderte demás.",
    duration: "1 a 2 horas",
  },
  {
    id: "diseno",
    number: 2,
    title: "Diseño y Cotización",
    description:
      "Diseñamos la solución técnica: definición de zonas, selección de equipos, cableado, comunicaciones e integración con sistemas existentes. Te entregamos una cotización clara, detallada y sin letra chica con los precios y plazos.",
    duration: "24 a 48 horas",
  },
  {
    id: "instalacion",
    number: 3,
    title: "Instalación Profesional",
    description:
      "Nuestro equipo técnico realiza la instalación con los más altos estándares: tendido de cableado con canalización limpia, montaje de equipos, conexión eléctrica y de red. Trabajamos ordenadamente y dejamos todo impecable.",
    duration: "2 a 8 horas según proyecto",
  },
  {
    id: "ajuste",
    number: 4,
    title: "Ajuste y Calibración",
    description:
      "Configuramos y calibramos cada equipo: sensibilidad de sensores, zonas de detección, programación de horarios, acceso remoto y app. Validamos eventos, reducimos falsas alarmas y te capacitamos para que uses el sistema al 100%.",
    duration: "1 a 2 horas",
  },
  {
    id: "entrega",
    number: 5,
    title: "Entrega y Soporte Continuo",
    description:
      "Realizamos la puesta en marcha formal, te entregamos la documentación técnica, certificaciones y garantía por escrito. Activamos el soporte remoto y mantenemos contacto programado para asegurarnos de que todo funcione perfecto.",
    duration: "Soporte continuo",
  },
]
