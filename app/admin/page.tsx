"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Shield, LogOut, MessageSquare, Star, Image, Mail, Check, X } from "lucide-react"
import { isAdminAuthenticated, adminLogout } from "@/lib/admin"
import { supabase } from "@/lib/supabase"

interface Contact {
  id: number
  name: string
  email: string
  phone: string
  service: string | null
  message: string
  created_at: string
}

interface Testimonial {
  id: number
  name: string
  rating: number
  message: string
  visible: boolean
  created_at: string
}

type Tab = "cotizaciones" | "testimonios" | "galeria"

export default function AdminPage() {
  const router = useRouter()
  const [authed, setAuthed] = useState(false)
  const [tab, setTab] = useState<Tab>("cotizaciones")
  const [contacts, setContacts] = useState<Contact[]>([])
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!isAdminAuthenticated()) {
      router.push("/admin/login")
      return
    }
    setAuthed(true)
    fetchData()
  }, [router])

  const fetchData = async () => {
    if (!supabase) {
      setLoading(false)
      return
    }
    try {
      const [cRes, tRes] = await Promise.all([
        supabase.from("contacts").select("*").order("created_at", { ascending: false }).limit(50),
        supabase.from("testimonials").select("*").order("created_at", { ascending: false }).limit(50),
      ])
      if (cRes.data) setContacts(cRes.data)
      if (tRes.data) setTestimonials(tRes.data)
    } catch {
      /* noop */
    }
    setLoading(false)
  }

  const toggleTestimonial = async (id: number, visible: boolean) => {
    if (!supabase) return
    await supabase.from("testimonials").update({ visible: !visible }).eq("id", id)
    setTestimonials((prev) =>
      prev.map((t) => (t.id === id ? { ...t, visible: !visible } : t))
    )
  }

  const deleteContact = async (id: number) => {
    if (!supabase) return
    await supabase.from("contacts").delete().eq("id", id)
    setContacts((prev) => prev.filter((c) => c.id !== id))
  }

  const handleLogout = () => {
    adminLogout()
    router.push("/admin/login")
  }

  if (!authed) return null

  return (
    <div className="min-h-screen bg-nexus-900">
      <header className="border-b border-slate-700 bg-nexus-800">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-amber-500" aria-hidden="true" />
            <span className="text-sm font-semibold text-white">Admin Nexus IRL</span>
          </div>
          <button onClick={handleLogout} className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors">
            <LogOut className="h-4 w-4" aria-hidden="true" /> Salir
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex gap-2 mb-8">
          {([
            { id: "cotizaciones" as Tab, icon: Mail, label: "Cotizaciones", count: contacts.length },
            { id: "testimonios" as Tab, icon: Star, label: "Testimonios", count: testimonials.filter((t) => !t.visible).length },
            { id: "galeria" as Tab, icon: Image, label: "Galería" },
          ]).map((item) => (
            <button
              key={item.id}
              onClick={() => setTab(item.id)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                tab === item.id ? "bg-amber-500 text-nexus-900" : "bg-nexus-800 text-slate-300 hover:bg-nexus-700"
              }`}
            >
              <item.icon className="h-4 w-4" aria-hidden="true" />
              {item.label}
              {item.count !== undefined && item.count > 0 && (
                <span className="ml-1 rounded-full bg-red-500 px-1.5 py-0.5 text-xs text-white">{item.count}</span>
              )}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-amber-500 border-t-transparent" role="status">
              <span className="sr-only">Cargando...</span>
            </div>
          </div>
        ) : !supabase ? (
          <div className="rounded-xl border border-slate-700 bg-nexus-800 p-8 text-center">
            <MessageSquare className="mx-auto h-10 w-10 text-slate-500 mb-3" aria-hidden="true" />
            <p className="text-slate-300 font-medium">Supabase no configurado</p>
            <p className="mt-1 text-sm text-slate-500">Agrega NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY para usar el panel.</p>
          </div>
        ) : tab === "cotizaciones" ? (
          <div className="space-y-3">
            {contacts.length === 0 ? (
              <p className="text-center text-slate-500 py-10">No hay cotizaciones aún</p>
            ) : (
              contacts.map((c) => (
                <div key={c.id} className="rounded-xl border border-slate-700 bg-nexus-800 p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-white">{c.name}</h3>
                      <p className="text-xs text-slate-400">{c.email} · {c.phone}</p>
                    </div>
                    <button onClick={() => deleteContact(c.id)} className="text-slate-500 hover:text-red-400 transition-colors" aria-label="Eliminar">
                      <X className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                  {c.service && <p className="mt-2 text-xs text-amber-400">Servicio: {c.service}</p>}
                  <p className="mt-1.5 text-sm text-slate-300">{c.message}</p>
                  <p className="mt-2 text-xs text-slate-500">{new Date(c.created_at).toLocaleString("es-CL")}</p>
                </div>
              ))
            )}
          </div>
        ) : tab === "testimonios" ? (
          <div className="space-y-3">
            {testimonials.length === 0 ? (
              <p className="text-center text-slate-500 py-10">No hay testimonios aún</p>
            ) : (
              testimonials.map((t) => (
                <div key={t.id} className={`rounded-xl border p-4 ${t.visible ? "border-slate-700 bg-nexus-800" : "border-amber-500/30 bg-amber-500/5"}`}>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-white flex items-center gap-2">
                        {t.name}
                        {!t.visible && <span className="text-xs text-amber-400">(pendiente)</span>}
                      </h3>
                      <div className="flex gap-0.5 mt-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className={`h-3.5 w-3.5 ${i < t.rating ? "fill-amber-400 text-amber-400" : "text-slate-600"}`} aria-hidden="true" />
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={() => toggleTestimonial(t.id, t.visible)}
                      className={`rounded-lg p-1.5 transition-colors ${t.visible ? "text-green-400 hover:bg-green-500/10" : "text-slate-500 hover:bg-slate-700"}`}
                      aria-label={t.visible ? "Ocultar" : "Publicar"}
                    >
                      {t.visible ? <Check className="h-4 w-4" aria-hidden="true" /> : <X className="h-4 w-4" aria-hidden="true" />}
                    </button>
                  </div>
                  <p className="mt-2 text-sm text-slate-300 italic">&ldquo;{t.message}&rdquo;</p>
                  <p className="mt-2 text-xs text-slate-500">{new Date(t.created_at).toLocaleString("es-CL")}</p>
                </div>
              ))
            )}
          </div>
        ) : (
          <div className="rounded-xl border border-slate-700 bg-nexus-800 p-6">
            <h3 className="font-medium text-white mb-2">Editar galería</h3>
            <p className="text-sm text-slate-400">Para agregar o modificar trabajos, edita el archivo:</p>
            <code className="mt-2 block rounded-lg bg-nexus-900 p-3 text-xs text-amber-400">data/gallery.ts</code>
            <p className="mt-3 text-sm text-slate-400">Agrega el campo <code className="text-amber-400">imageUrl</code> con la URL de tu imagen real cuando esté disponible.</p>
          </div>
        )}
      </div>
    </div>
  )
}
