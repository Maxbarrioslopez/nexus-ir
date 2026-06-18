import { NextResponse } from "next/server"

const RESEND_KEY = process.env.RESEND_API_KEY
const TO_EMAIL = process.env.CONTACT_EMAIL || "contacto@nexusirl.cl"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, service, message } = body

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 })
    }

    if (RESEND_KEY) {
      const html = `
        <h2>Nueva cotización - Nexus IRL</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Servicio:</strong> ${service || "No especificado"}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `

      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${RESEND_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Nexus IRL <onboarding@resend.dev>",
          to: TO_EMAIL,
          subject: `Nueva cotización de ${name}`,
          html,
        }),
      })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Error interno" }, { status: 500 })
  }
}
