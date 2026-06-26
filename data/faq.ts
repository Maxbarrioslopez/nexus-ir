export interface FAQItem {
  question: string
  answer: string
  category: string
}

export const categories = [
  { id: "general", label: "General" },
  { id: "instalacion", label: "Instalación" },
  { id: "servicios", label: "Servicios" },
  { id: "soporte", label: "Soporte" },
]

export const faqItems: FAQItem[] = [
  {
    question: "¿Qué incluye la instalación de cámaras de seguridad?",
    answer: "Incluye el cableado, montaje de equipos, configuración del sistema NVR/DVR, conexión a la red WiFi, instalación de la app en tu celular y certificación del punto de instalación. Todo listo para usar el mismo día.",
    category: "instalacion",
  },
  {
    question: "¿Cuánto tiempo toma instalar un sistema de seguridad?",
    answer: "Depende de la cantidad de equipos. Una instalación residencial típica (4-6 cámaras) toma entre 2 a 4 horas. Proyectos empresariales más grandes pueden tomar 1 a 3 días. Siempre coordinamos contigo para minimizar molestias.",
    category: "instalacion",
  },
  {
    question: "¿Ofrecen garantía en los equipos e instalación?",
    answer: "Sí, todos nuestros equipos cuentan con garantía real de fábrica más garantía de instalación por escrito. Respaldamos nuestro trabajo y hacemos seguimiento posterior para asegurarnos de que todo funcione correctamente.",
    category: "general",
  },
  {
    question: "¿Atienden en Rancagua o solo en Santiago?",
    answer: "Nuestra base está en Rancagua, Región de O'Higgins, pero tenemos cobertura en todo Chile. Pregunta por nuestro servicio a domicilio sin costo adicional en tu comuna.",
    category: "general",
  },
  {
    question: "¿Necesito internet para que funcionen las cámaras?",
    answer: "Para acceso remoto sí, pero la grabación local funciona siempre. Las cámaras graban 24/7 en el NVR/DVR aunque no haya internet. La conexión a internet solo es necesaria para ver las cámaras desde tu celular estando fuera de casa.",
    category: "soporte",
  },
  {
    question: "¿Cuánto cuesta una cotización?",
    answer: "Las cotizaciones son completamente gratuitas y sin compromiso. Te visitamos, evaluamos tus necesidades y te entregamos un presupuesto claro, directo y sin letra chica. Sin costos sorpresas.",
    category: "general",
  },
  {
    question: "¿Qué mantenimiento requieren los sistemas de seguridad?",
    answer: "Recomendamos una mantención preventiva cada 6-12 meses que incluye limpieza de lentes, revisión de cableado, actualización de firmware, verificación de almacenamiento y prueba de respaldo de batería. Ofrecemos contratos de mantención programada.",
    category: "soporte",
  },
  {
    question: "¿Puedo ver mis cámaras desde el celular?",
    answer: "Sí, todos nuestros sistemas incluyen acceso remoto vía app. Puedes ver tus cámaras en tiempo real, recibir alertas de movimiento, revisar grabaciones anteriores y compartir acceso con familiares o personal de confianza.",
    category: "soporte",
  },
  {
    question: "¿Qué servicios de seguridad ofrecen?",
    answer: "Ofrecemos instalación de cámaras de seguridad 4K, alarmas para hogar y empresa, cerco perimetral con fibra óptica (detecta intrusión sin falsas alarmas), cableado estructurado y control de acceso. Todos nuestros servicios incluyen garantía y soporte post-venta en Rancagua y VI Región.",
    category: "servicios",
  },
  {
    question: "¿Cuál es la diferencia entre una alarma tradicional y cerco perimetral?",
    answer: "Una alarma tradicional detecta intrusión cuando ya ingresaron al recinto. El cerco perimetral con fibra óptica detecta la intrusión en el perímetro, antes de que ingresen. Esto permite reacción anticipada y reduce falsas alarmas porque el sensor está distribuido a lo largo de todo el perímetro, no en un punto específico.",
    category: "servicios",
  },
  {
    question: "¿Las cámaras 4K funcionan de noche?",
    answer: "Sí, todas nuestras cámaras 4K incluyen visión nocturna con infrarrojos de alto alcance (hasta 30 metros). Los modelos profesionales incluyen además iluminación LED inteligente que se activa con movimiento, mejorando la calidad de imagen nocturna.",
    category: "servicios",
  },
  {
    question: "¿Qué incluye el contrato de mantención?",
    answer: "Nuestro contrato de mantención preventiva incluye limpieza profesional de lentes, revisión de cableado y conexiones, actualización de firmware y software, verificación de capacidad de almacenamiento, prueba de respaldo de batería, y un informe técnico detallado cada visita.",
    category: "soporte",
  },
  {
    question: "¿Tienen servicio de emergencia?",
    answer: "Sí, ofrecemos servicio de emergencia para clientes con contrato de mantención activo. Ante una falla crítica, nuestro técnico se desplaza a tu domicilio o empresa en Rancagua y comunas aledañas dentro de las 24 horas hábiles siguientes.",
    category: "soporte",
  },
  {
    question: "¿Qué zonas de Rancagua cubren?",
    answer: "Cubrimos toda la comuna de Rancagua, incluyendo sectores como Av. Libertador, Av. San Martín, Av. República de Chile, Villa El Teniente, sector céntrico y zonas industriales. También atendemos en Machalí, Requínoa, San Fernando, Graneros y toda la VI Región.",
    category: "general",
  },
  {
    question: "¿Puedo agregar más cámaras después de la instalación?",
    answer: "Sí, nuestros sistemas NVR son escalables. Si instalaste 4 cámaras, puedes agregar más después sin reemplazar el equipo central. Siempre recomendamos dejar margen de expansión en la instalación inicial para evitar costos adicionales después.",
    category: "instalacion",
  },
  {
    question: "¿Cómo sé qué sistema necesito para mi hogar o empresa?",
    answer: "Te asesoramos sin costo. Evaluamos tu propiedad, identificamos puntos vulnerables, revisamos tu presupuesto y te recomendamos la solución óptima. No vendemos paquetes rígidos — cada instalación es personalizada según tus necesidades reales de seguridad.",
    category: "general",
  },
]
