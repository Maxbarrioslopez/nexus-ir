import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export async function submitContact(data: {
  name: string
  email: string
  phone: string
  service?: string
  message: string
}) {
  if (!supabase) {
    console.log("Form submission (no Supabase):", data)
    return { success: true, message: "Formulario enviado (modo demo)" }
  }

  const { error } = await supabase.from("contacts").insert([data])
  if (error) throw new Error(error.message)
  return { success: true, message: "¡Mensaje enviado con éxito! Te contactaremos pronto." }
}

export async function submitTestimonial(data: {
  name: string
  rating: number
  message: string
}) {
  if (!supabase) {
    console.log("Testimonial submission (no Supabase):", data)
    return { success: true, message: "Testimonio enviado (modo demo)" }
  }

  const { error } = await supabase.from("testimonials").insert([data])
  if (error) throw new Error(error.message)
  return { success: true, message: "¡Gracias por tu testimonio!" }
}
