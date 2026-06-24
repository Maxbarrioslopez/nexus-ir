export interface CoverageZone {
  region: string
  comunas: string[]
  type: "local" | "regional" | "nacional"
}

export const coverageZones: CoverageZone[] = [
  {
    region: "Región del Libertador B. O'Higgins",
    comunas: [
      "Rancagua", "Machalí", "Graneros", "Rengo", "San Fernando",
      "Codegua", "Doñihue", "Coltauco", "Olivar", "Requínoa",
      "Pichidegua", "Pelequén", "Las Cabras", "San Vicente",
      "Chimbarongo", "Nancagua", "Santa Cruz", "Pichilemu",
      "Marchihue", "Peralillo", "Placilla", "Litueche", "La Estrella",
    ],
    type: "local",
  },
  {
    region: "Región Metropolitana",
    comunas: [
      "Santiago Centro", "Las Condes", "Vitacura", "Lo Barnechea",
      "Providencia", "Ñuñoa", "La Reina", "Puente Alto",
      "Maipú", "La Florida", "San Miguel", "San Joaquín",
    ],
    type: "regional",
  },
  {
    region: "Región del Maule",
    comunas: ["Talca", "Curicó", "Linares", "Constitución", "Parral", "San Javier"],
    type: "regional",
  },
  {
    region: "Región del Biobío",
    comunas: ["Concepción", "Talcahuano", "Chillán", "Los Ángeles", "Coronel", "San Pedro de la Paz"],
    type: "regional",
  },
  {
    region: "Otras Regiones",
    comunas: [
      "La Serena", "Coquimbo", "Valparaíso", "Viña del Mar",
      "Temuco", "Valdivia", "Osorno", "Puerto Montt",
      "Coyhaique", "Punta Arenas", "Iquique", "Antofagasta", "Copiapó",
    ],
    type: "nacional",
  },
]

export const coverageStats = {
  yearsInBusiness: 10,
  projectsCompleted: 500,
  citiesCovered: 40,
  clientsSatisfied: 450,
}
