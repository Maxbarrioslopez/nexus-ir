import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { WhatsAppButton } from "@/components/WhatsAppButton"
import {
  SITE_URL,
  COMPANY_NAME,
  COMPANY_DESCRIPTION,
  CITY,
  REGION,
  COUNTRY,
  LATITUDE,
  LONGITUDE,
  PHONE_TEL,
  EMAIL,
} from "@/lib/constants"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_NAME} | Seguridad Electrónica en ${CITY}`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description: COMPANY_DESCRIPTION,
  keywords: [
    "cámaras seguridad Rancagua",
    "cerca eléctrica Chile",
    "alarmas hogar",
    "redes cableado estructurado",
    "certificación puntos red",
    "seguridad electrónica Chile",
    "Nexus IRL",
    "instalación cámaras Rancagua",
    "automatización hogar Chile",
  ],
  authors: [{ name: COMPANY_NAME }],
  creator: COMPANY_NAME,
  publisher: COMPANY_NAME,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "es_CL",
    alternateLocale: "en_US",
    siteName: COMPANY_NAME,
    title: `${COMPANY_NAME} | Seguridad Electrónica Profesional`,
    description: COMPANY_DESCRIPTION,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_NAME} | Seguridad Electrónica`,
    description: COMPANY_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    languages: {
      "es-CL": SITE_URL,
      en: `${SITE_URL}/en`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY_NAME,
    url: SITE_URL,
    telephone: PHONE_TEL,
    email: EMAIL,
    description: COMPANY_DESCRIPTION,
    address: {
      "@type": "PostalAddress",
      addressLocality: CITY,
      addressRegion: REGION,
      addressCountry: COUNTRY,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: LATITUDE,
      longitude: LONGITUDE,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    priceRange: "$$",
    areaServed: [
      { "@type": "City", name: CITY },
      { "@type": "Country", name: COUNTRY },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Seguridad Electrónica",
      itemListElement: [
        "Cámaras de Seguridad",
        "Cercos Eléctricos",
        "Alarmas y Sensores",
        "Redes y Cableado Estructurado",
        "Automatización Inteligente",
        "Certificación de Puntos",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
        },
      })),
    },
  }

  return (
    <html
      lang="es"
      className="dark scroll-smooth"
      data-colorblind="none"
      data-fontsize="normal"
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  )
}
