import { NextResponse } from "next/server"

const RESEND_KEY = process.env.RESEND_API_KEY
const FROM_EMAIL = process.env.FROM_EMAIL || "onboarding@resend.dev"
const COMPANY_NAME = "NETXUS Security Chile"

function generatePassword(): string {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789"
  let result = "nexo_"
  for (let i = 0; i < 10; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, service, message } = body

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 })
    }

    const password = generatePassword()

    if (RESEND_KEY) {
      const html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fff;">
          <div style="background: linear-gradient(135deg, #0b1121, #1e293b); padding: 30px; text-align: center;">
            <h1 style="color: #f59e0b; margin: 0; font-size: 24px;">${COMPANY_NAME}</h1>
            <p style="color: #94a3b8; margin: 5px 0 0;">Seguridad Electrónica Profesional</p>
          </div>
          <div style="padding: 30px;">
            <h2 style="color: #1e293b;">Hola ${name},</h2>
            <p style="color: #475569; line-height: 1.6;">Gracias por contactarnos. Hemos recibido tu solicitud y nuestro equipo te responderá a la brevedad.</p>
            <p style="color: #475569; line-height: 1.6;">Mientras tanto, puedes acceder a tu panel de administración con las siguientes credenciales:</p>
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; margin: 24px 0;">
              <p style="margin: 8px 0; color: #1e293b;"><strong>🌐 Sitio:</strong> <a href="https://webnexus-seven.vercel.app/admin" style="color: #f59e0b;">webnexus-seven.vercel.app/admin</a></p>
              <p style="margin: 8px 0; color: #1e293b;"><strong>📧 Email:</strong> ${email}</p>
              <p style="margin: 8px 0; color: #1e293b;"><strong>🔑 Contraseña:</strong> <span style="background: #fef3c7; padding: 4px 12px; border-radius: 6px; font-family: monospace; font-size: 16px;">${password}</span></p>
            </div>
            <p style="color: #94a3b8; font-size: 13px;">⚠️ Esta contraseña es única y no se mostrará nuevamente. Guárdala en un lugar seguro.</p>
            <p style="color: #475569; line-height: 1.6;">También puedes usar el <strong>Modo Demo</strong> agregando <code style="background: #f1f5f9; padding: 2px 6px; border-radius: 4px;">?demo=true</code> a la URL del admin.</p>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;">
            <p style="color: #94a3b8; font-size: 13px; text-align: center;">
              ${COMPANY_NAME} · Rancagua, VI Región, Chile · ${new Date().toLocaleDateString("es-CL")}
            </p>
          </div>
        </div>
      `

      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: `${COMPANY_NAME} <${FROM_EMAIL}>`,
          to: [email, process.env.CONTACT_EMAIL || "netxuschile@gmail.com"],
          subject: `Credenciales de acceso - ${COMPANY_NAME}`,
          html,
        }),
      })
    }

    return NextResponse.json({ success: true, password, email, name })
  } catch {
    return NextResponse.json({ error: "Error interno" }, { status: 500 })
  }
}
