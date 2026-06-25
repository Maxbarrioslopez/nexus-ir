import type { MetadataRoute } from "next"

const baseUrl = "https://nexusirl.cl"

const staticRoutes = [
  { url: baseUrl, priority: 1, changeFrequency: "weekly" as const },
  { url: `${baseUrl}/servicios`, priority: 0.9, changeFrequency: "monthly" as const },
  { url: `${baseUrl}/galeria`, priority: 0.8, changeFrequency: "weekly" as const },
  { url: `${baseUrl}/contacto`, priority: 0.7, changeFrequency: "monthly" as const },
  { url: `${baseUrl}/blog`, priority: 0.8, changeFrequency: "weekly" as const },
  { url: `${baseUrl}/nosotros`, priority: 0.7, changeFrequency: "monthly" as const },
  { url: `${baseUrl}/proceso`, priority: 0.6, changeFrequency: "monthly" as const },
  { url: `${baseUrl}/precios`, priority: 0.9, changeFrequency: "weekly" as const },
  { url: `${baseUrl}/cobertura`, priority: 0.5, changeFrequency: "monthly" as const },
  { url: `${baseUrl}/politica-privacidad`, priority: 0.3, changeFrequency: "yearly" as const },
  { url: `${baseUrl}/docs/mantencion-preventiva`, priority: 0.5, changeFrequency: "monthly" as const },
]

const serviceRoutes = [
  "camaras",
  "alarmas",
  "cerco-perimetral",
  "redes",
  "seguridad-perimetral-fibra",
].map((service) => ({
  url: `${baseUrl}/servicios/${service}`,
  priority: 0.8,
  changeFrequency: "monthly" as const,
}))

const serviceRoutesWithPDFs = [
  "camaras",
  "alarmas",
  "cerco-perimetral",
  "redes",
  "seguridad-perimetral-fibra",
].map((service) => ({
  url: `${baseUrl}/servicios/${service}/mantencion-preventiva`,
  priority: 0.6,
  changeFrequency: "yearly" as const,
}))

const blogRoutes = [
  "camaras-seguridad-rancagua-2025",
  "cerco-perimetral-inteligente",
  "cableado-estructurado-empresas",
  "alarmas-hogar-inteligentes",
  "seguridad-empresas-rancagua",
].map((post) => ({
  url: `${baseUrl}/blog/${post}`,
  priority: 0.7,
  changeFrequency: "monthly" as const,
}))

const landingRoutes = [
  "camaras-seguridad-rancagua",
  "cerco-perimetral-rancagua",
  "alarmas-seguridad-hogar",
  "cableado-estructurado-rancagua",
  "certificacion-puntos-red",
].map((page) => ({
  url: `${baseUrl}/${page}`,
  priority: 0.8,
  changeFrequency: "monthly" as const,
}))

const allRoutes = [
  ...staticRoutes,
  ...serviceRoutes,
  ...serviceRoutesWithPDFs,
  ...blogRoutes,
  ...landingRoutes,
]

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes.map((route) => ({
    url: route.url,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}