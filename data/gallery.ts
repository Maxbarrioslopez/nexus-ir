export interface GalleryItem {
  id: string
  title: string
  category: string
  categoryEs: string
  description: string
}

export const galleryCategories = [
  { id: "todas", label: "Todas" },
  { id: "camaras", label: "Cámaras" },
  { id: "cerco", label: "Cerco Perimetral" },
  { id: "redes", label: "Redes" },
  { id: "automatizacion", label: "Automatización" },
  { id: "comercial", label: "Comercial" },
]

export const galleryItems: GalleryItem[] = [
  {
    id: "trabajo-1",
    title: "Cámaras IP Edificio Residencial",
    category: "camaras",
    categoryEs: "Cámaras",
    description: "Instalación de 12 cámaras IP domo en edificio residencial, Rancagua.",
  },
  {
    id: "trabajo-2",
    title: "Cerca Eléctrica Perimetral",
    category: "cerco",
    categoryEs: "Cerco Perimetral",
    description: "Cerco perimetral con programación inteligente para condominio.",
  },
  {
    id: "trabajo-3",
    title: "Cableado Estructurado Oficina",
    category: "redes",
    categoryEs: "Redes",
    description: "Red Cat6A para oficina corporativa con 48 puntos certificados.",
  },
  {
    id: "trabajo-4",
    title: "Sistema NVR 16 Canales",
    category: "camaras",
    categoryEs: "Cámaras",
    description: "Sistema NVR con 16 cámaras para bodega industrial.",
  },
  {
    id: "trabajo-5",
    title: "Domótica Casa Inteligente",
    category: "automatizacion",
    categoryEs: "Automatización",
    description: "Automatización completa de vivienda con control por voz y app.",
  },
  {
    id: "trabajo-6",
    title: "Circuito Cerrado Comercial",
    category: "comercial",
    categoryEs: "Comercial",
    description: "Sistema CCTV para local comercial con 8 cámaras y monitoreo remoto.",
  },
  {
    id: "trabajo-7",
    title: "Cámaras Térmicas Perimetrales",
    category: "camaras",
    categoryEs: "Cámaras",
    description: "Cámaras térmicas para perímetro industrial con detección inteligente.",
  },
  {
    id: "trabajo-8",
    title: "Cerca Eléctrica Bodega",
    category: "cerco",
    categoryEs: "Cerco Perimetral",
    description: "Sistema de cerco perimetral con 6 hilos para bodega de 2000m².",
  },
  {
    id: "trabajo-9",
    title: "Red Mesh Corporativa",
    category: "redes",
    categoryEs: "Redes",
    description: "Red WiFi mesh para oficina de 3 pisos con roaming perfecto.",
  },
  {
    id: "trabajo-10",
    title: "Control de Acceso Edificio",
    category: "automatizacion",
    categoryEs: "Automatización",
    description: "Sistema de control de acceso con huella digital y tarjeta.",
  },
  {
    id: "trabajo-11",
    title: "Certificación de Puntos",
    category: "comercial",
    categoryEs: "Comercial",
    description: "Certificación de 96 puntos de red para empresa minera.",
  },
  {
    id: "trabajo-12",
    title: "Alarma Residencial",
    category: "camaras",
    categoryEs: "Cámaras",
    description: "Sistema de alarma con sensores y monitoreo 24/7 para hogar.",
  },
]
