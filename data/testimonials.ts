export interface Testimonial {
  id: string
  name: string
  rating: number
  message: string
  service: string
  date: string
}

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Carlos Muñoz",
    rating: 5,
    message: "Excelente servicio, instalaron 6 cámaras en mi casa y quedaron impecables. Muy profesionales y puntuales. La app funciona perfecto.",
    service: "Cámaras de Seguridad",
    date: "2025-12-15",
  },
  {
    id: "test-2",
    name: "María José Fernández",
    rating: 5,
    message: "Contraté el cerco perimetral con programación y el sistema de alarmas. Todo funcionando a la perfección. Me explicaron cada detalle sin letra chica.",
    service: "Cerco Perimetral + Alarmas",
    date: "2025-11-20",
  },
  {
    id: "test-3",
    name: "Pedro Soto",
    rating: 5,
    message: "Hicieron el cableado estructurado de toda la oficina. 32 puntos certificados, informes profesionales. 100% recomendados para empresas.",
    service: "Redes y Cableado",
    date: "2025-10-08",
  },
  {
    id: "test-4",
    name: "Ana Martínez",
    rating: 4,
    message: "Muy buena atención, me asesoraron en todo momento y me recomendaron justo lo que necesitaba sin querer venderme demás. Garantía real.",
    service: "Automatización",
    date: "2025-09-25",
  },
  {
    id: "test-5",
    name: "Roberto González",
    rating: 5,
    message: "Llevo 2 años con el sistema que instalaron y cero problemas. Cuando he necesitado soporte han respondido altiro. Profesionales de verdad.",
    service: "Sistema Completo",
    date: "2025-08-14",
  },
  {
    id: "test-6",
    name: "Jessica Rojas",
    rating: 5,
    message: "Certificaron todos los puntos de red de la empresa. Rápido, ordenado y con todos los documentos que necesitábamos para el seguro.",
    service: "Certificación de Puntos",
    date: "2025-07-30",
  },
]
