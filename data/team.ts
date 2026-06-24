export interface TeamMember {
  id: string
  name: string
  role: string
  description: string
  avatarUrl?: string
}

export const teamMembers: TeamMember[] = [
  {
    id: "jaime",
    name: "Jaime Tamblay C.",
    role: "Soporte Técnico y Director de Proyectos",
    description:
      "Soporte técnico de NETXUS Security Chile. Más de 10 años de experiencia en seguridad electrónica, diseñando y ejecutando proyectos de protección perimetral para empresas y hogares en Chile.",
    avatarUrl: "/images/team/avatar-jaime.jpeg",
  },
]

export const companyInfo = {
  name: "Nexus IRL / NETXUS Security Chile",
  legalName: "ELVIRA DEL CARMEN DIAZ CUEVAS E.I.R.L.",
  rut: "77.323.293-8",
  mission:
    "Ofrecer a nuestros clientes la más amplia gama de servicios y soluciones tecnológicas, innovadoras y de calidad, que les permitan optimizar sus procesos y cumplir sus objetivos. Para aumentar la rentabilidad de nuestros clientes, asociados y de nuestra empresa.",
  vision:
    "Ser una empresa líder en el sector de la Tecnología de Información, con proyección nacional, reconocida por brindar soluciones y servicios de excelente calidad.",
  values: [
    {
      name: "Honestidad",
      description: "Nuestras acciones están guiadas dentro de un marco de franqueza y transparencia. Todos los productos y servicios que prestamos son con el único objetivo de satisfacer necesidades reales.",
    },
    {
      name: "Responsabilidad",
      description: "Tenemos la capacidad de tomar decisiones para cumplir con los compromisos acordados, trabajando con estándares de calidad.",
    },
    {
      name: "Lealtad",
      description: "Somos comprometidos, demostramos fidelidad, confidencialidad y sentido de pertenencia hacia nuestros clientes y trabajadores.",
    },
    {
      name: "Compromiso",
      description: "Es la capacidad que tenemos de convertir una promesa o un reto en realidad. Trabajamos con seriedad, responsabilidad y constancia.",
    },
    {
      name: "Respeto",
      description: "Siempre tomamos en consideración las ideas y solicitudes de nuestros clientes, proveedores y trabajadores, dándoles un trato justo y equitativo.",
    },
    {
      name: "Confianza",
      description: "La relación con los clientes, proveedores y trabajadores la construimos basada en un alto nivel de satisfacción.",
    },
    {
      name: "Perseverancia",
      description: "Somos constantes en nuestras actividades y enfrentamos los retos sin disminuir el ritmo. Buscamos continuamente nuevas tecnologías y procesos.",
    },
  ],
  technology: {
    name: "LEOPARD",
    developer: "A2Q (Access to Quality S.L.)",
    country: "España",
    description:
      "Tecnología de detección por fibra óptica con análisis espectral FFT en tiempo real e inteligencia artificial adaptativa. Sistema pasivo, inmune a EMI/RFI, con auto-diagnóstico y memoria de 1000 eventos.",
  },
}
