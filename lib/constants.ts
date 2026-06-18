export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "569XXXXXXXX"

export const WHATSAPP_URL = (message?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message || "Hola! Quisiera una cotización de sus servicios de seguridad electrónica."
  )}`

export const PHONE = process.env.NEXT_PUBLIC_PHONE || "+56 9 XXXX XXXX"
export const PHONE_TEL = process.env.NEXT_PUBLIC_PHONE_TEL || "+569XXXXXXXX"
export const EMAIL = process.env.NEXT_PUBLIC_EMAIL || "contacto@nexusirl.cl"

export const SITE_URL = "https://nexusirl.cl"
export const COMPANY_NAME = "Nexus IRL"
export const COMPANY_DESCRIPTION =
  "Venta e instalación de cámaras de seguridad, cercos eléctricos, alarmas, redes y automatización para hogar y empresa en Rancagua y todo Chile."
export const CITY = "Rancagua"
export const REGION = "Región del Libertador General Bernardo O'Higgins"
export const COUNTRY = "Chile"
export const LATITUDE = -34.1701
export const LONGITUDE = -70.7406
