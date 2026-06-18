import { Hero } from "@/components/Hero"
import { ServicesSection } from "@/components/ServicesSection"
import { GalleryGrid } from "@/components/GalleryGrid"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { ContactForm } from "@/components/ContactForm"

export default function HomePage() {
  return (
    <>
      <Hero />

      <ServicesSection />

      <section className="bg-theme-bg py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-theme-text sm:text-4xl">
              Trabajos Recientes
            </h2>
            <p className="mt-4 text-lg text-theme-secondary">
              Conoce algunos de nuestros proyectos recientes en Rancagua y todo Chile.
            </p>
          </div>
        </div>
        <GalleryGrid />
      </section>

      <TestimonialsSection />

      <section className="bg-theme-bg py-16 sm:py-24" id="contacto">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-theme-text sm:text-4xl">
              Contáctanos
            </h2>
            <p className="mt-4 text-lg text-theme-secondary">
              Cuéntanos qué necesitas y te enviaremos una cotización clara y sin compromiso.
            </p>
          </div>
          <div className="mt-12">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
