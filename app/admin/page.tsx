"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Shield, LogOut, LayoutDashboard, MessageSquare, Star, Image, Mail, Phone, User, Calendar, Check, X, Trash2, Eye, EyeOff, Plus, Settings, ExternalLink, Download, Clock, AlertCircle, Search, Filter, RefreshCw, Crown, Zap, Camera, Network, } from "lucide-react"
import { isAdminAuthenticated, adminLogout, isDemoMode } from "@/lib/admin"
import { getContacts, updateContactStatus, deleteContact, getStoredTestimonials, toggleTestimonialVisibility, deleteTestimonial, getGalleryItems, saveGalleryItem, deleteGalleryItem, getDashboardStats, } from "@/lib/data-service"
import Link from "next/link"

type Tab = "dashboard" | "contactos" | "testimonios" | "galeria" | "ayuda"

export default function AdminPage() {
  const router = useRouter()
  const [authed, setAuthed] = useState(false)
  const [tab, setTab] = useState<Tab>("dashboard")
  const [stats, setStats] = useState<any>({})
  const [contacts, setContacts] = useState<any[]>([])
  const [testimonials, setTestimonials] = useState<any[]>([])
  const [gallery, setGallery] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [showNewGalleryForm, setShowNewGalleryForm] = useState(false)
  const [galleryForm, setGalleryForm] = useState({ id: "", title: "", category: "camaras", description: "" })

  useEffect(() => {
    if (!isAdminAuthenticated()) {
      router.push("/admin/login")
      return
    }
    setAuthed(true)
    refreshData()
  }, [router])

  const refreshData = () => {
    setStats(getDashboardStats())
    setContacts(getContacts())
    setTestimonials(getStoredTestimonials())
    setGallery(getGalleryItems())
  }

  const handleLogout = () => {
    adminLogout()
    router.push("/admin/login")
  }

  const handleContactStatus = (id: string, status: string) => {
    updateContactStatus(id, status as any)
    refreshData()
  }

  const handleDeleteContact = (id: string) => {
    if (confirm("¿Eliminar esta cotización?")) {
      deleteContact(id)
      refreshData()
    }
  }

  const handleToggleTestimonial = (id: string) => {
    toggleTestimonialVisibility(id)
    refreshData()
  }

  const handleDeleteTestimonial = (id: string) => {
    if (confirm("¿Eliminar este testimonio?")) {
      deleteTestimonial(id)
      refreshData()
    }
  }

  const handleGallerySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    saveGalleryItem({
      ...galleryForm,
      id: galleryForm.id || `g_${Date.now()}`,
    })
    setGalleryForm({ id: "", title: "", category: "camaras", description: "" })
    setShowNewGalleryForm(false)
    refreshData()
  }

  const handleDeleteGallery = (id: string) => {
    if (confirm("¿Eliminar este item?")) {
      deleteGalleryItem(id)
      refreshData()
    }
  }

  const filteredContacts = contacts.filter((c) => {
    if (filterStatus !== "all" && c.status !== filterStatus) return false
    if (searchTerm) {
      const s = searchTerm.toLowerCase()
      return c.name?.toLowerCase().includes(s) || c.email?.toLowerCase().includes(s) || c.phone?.includes(s)
    }
    return true
  })

  if (!authed) return null

  const demo = isDemoMode()

  const tabs = [
    { id: "dashboard" as Tab, icon: LayoutDashboard, label: "Dashboard" },
    { id: "contactos" as Tab, icon: MessageSquare, label: "Cotizaciones", badge: stats.newContacts },
    { id: "testimonios" as Tab, icon: Star, label: "Testimonios" },
    { id: "galeria" as Tab, icon: Image, label: "Galería" },
    { id: "ayuda" as Tab, icon: Settings, label: "Ayuda" },
  ]

  const statusColors: Record<string, string> = {
    new: "bg-amber-500/20 text-amber-400",
    read: "bg-blue-500/20 text-blue-400",
    replied: "bg-green-500/20 text-green-400",
  }

  const statusLabels: Record<string, string> = {
    new: "Nuevo",
    read: "Leído",
    replied: "Respondido",
  }

  return (
    <div className="min-h-screen bg-nexus-900">
      {demo && (
        <div className="bg-amber-500/10 border-b border-amber-500/20 px-4 py-2 text-center text-sm text-amber-400">
          <AlertCircle className="inline h-3.5 w-3.5 mr-1 mb-0.5" aria-hidden="true" />
          Modo Demo — Los datos se guardan localmente en este navegador
        </div>
      )}

      <header className="border-b border-slate-700 bg-nexus-800">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-amber-500" aria-hidden="true" />
            <span className="text-sm font-semibold text-white">Nexus IRL — Admin</span>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/" className="text-xs text-slate-500 hover:text-slate-300 transition-colors" target="_blank">
              <ExternalLink className="h-3.5 w-3.5 inline mr-1" aria-hidden="true" />
              Ver sitio
            </Link>
            <button onClick={handleLogout} className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
              <LogOut className="h-4 w-4" aria-hidden="true" /> Salir
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="flex gap-1 overflow-x-auto pb-2 mb-6">
          {tabs.map((item) => (
            <button
              key={item.id}
              onClick={() => setTab(item.id)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-colors ${
                tab === item.id ? "bg-amber-500 text-nexus-900" : "bg-nexus-800 text-slate-300 hover:bg-nexus-700"
              }`}
            >
              <item.icon className="h-4 w-4" aria-hidden="true" />
              {item.label}
              {item.badge !== undefined && item.badge > 0 && (
                <span className="ml-1 rounded-full bg-red-500 px-1.5 py-0.5 text-xs text-white">{item.badge}</span>
              )}
            </button>
          ))}
        </div>

        {tab === "dashboard" && (
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: MessageSquare, label: "Cotizaciones", value: stats.totalContacts, color: "text-blue-400", bg: "bg-blue-500/10" },
                { icon: AlertCircle, label: "Pendientes", value: stats.newContacts, color: "text-amber-400", bg: "bg-amber-500/10" },
                { icon: Star, label: "Testimonios", value: stats.totalTestimonials, color: "text-purple-400", bg: "bg-purple-500/10" },
                { icon: Image, label: "Galería", value: stats.galleryItems, color: "text-green-400", bg: "bg-green-500/10" },
              ].map((card) => {
                const Icon = card.icon
                return (
                  <div key={card.label} className="rounded-xl border border-slate-700 bg-nexus-800 p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-400">{card.label}</p>
                        <p className="text-2xl font-bold text-white mt-1">{card.value}</p>
                      </div>
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${card.bg}`}>
                        <Icon className={`h-5 w-5 ${card.color}`} aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <div className="rounded-xl border border-slate-700 bg-nexus-800 p-5">
                <h2 className="font-semibold text-white mb-4">Acceso rápido</h2>
                <div className="grid gap-3 grid-cols-2">
                  {[
                    { icon: Camera, label: "Cámaras", href: "/servicios/camaras" },
                    { icon: Shield, label: "Alarmas", href: "/servicios/alarmas" },
                    { icon: Zap, label: "Cerca Eléctrica", href: "/servicios/cerca-electrica" },
                    { icon: Network, label: "Redes", href: "/servicios/redes" },
                    { icon: Crown, label: "Fibra Óptica", href: "/servicios/seguridad-perimetral-fibra" },
                    { icon: User, label: "Nosotros", href: "/nosotros" },
                    { icon: Shield, label: "Proceso", href: "/proceso" },
                    { icon: Calendar, label: "Cotizar", href: "/contacto" },
                  ].map((item) => {
                    const Icon = item.icon
                    return (
                      <Link key={item.label} href={item.href} className="flex items-center gap-2 rounded-lg bg-nexus-700/50 px-3 py-2 text-sm text-slate-300 hover:bg-nexus-700 hover:text-white transition-colors" target="_blank">
                        <Icon className="h-4 w-4 text-amber-400" aria-hidden="true" />
                        {item.label}
                      </Link>
                    )
                  })}
                </div>
              </div>

              <div className="rounded-xl border border-slate-700 bg-nexus-800 p-5">
                <h2 className="font-semibold text-white mb-4">Últimas cotizaciones</h2>
                {stats.recentContacts?.length === 0 ? (
                  <p className="text-sm text-slate-500 text-center py-4">Sin cotizaciones aún</p>
                ) : (
                  <div className="space-y-2">
                    {stats.recentContacts?.map((c: any) => (
                      <div key={c.id} className="flex items-center justify-between rounded-lg bg-nexus-700/30 px-3 py-2">
                        <div>
                          <p className="text-sm text-white">{c.name}</p>
                          <p className="text-xs text-slate-500">{c.service || "General"} • {new Date(c.created_at).toLocaleDateString("es-CL")}</p>
                        </div>
                        <span className={`rounded-full px-2 py-0.5 text-xs ${statusColors[c.status] || ""}`}>
                          {statusLabels[c.status] || c.status}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {tab === "contactos" && (
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <div className="relative flex-1 min-w-[200px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" aria-hidden="true" />
                <input
                  type="text"
                  placeholder="Buscar por nombre, email o teléfono..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-xl border border-slate-600 bg-nexus-800 py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div className="flex gap-1">
                {["all", "new", "read", "replied"].map((f) => (
                  <button key={f} onClick={() => setFilterStatus(f)}
                    className={`rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                      filterStatus === f ? "bg-amber-500 text-nexus-900" : "bg-nexus-800 text-slate-400 hover:bg-nexus-700"
                    }`}
                  >
                    {f === "all" ? "Todos" : statusLabels[f] || f}
                  </button>
                ))}
              </div>
            </div>

            {filteredContacts.length === 0 ? (
              <div className="rounded-xl border border-slate-700 bg-nexus-800 p-10 text-center">
                <Mail className="mx-auto h-10 w-10 text-slate-600 mb-3" aria-hidden="true" />
                <p className="text-slate-400 font-medium">No hay cotizaciones</p>
                <p className="text-sm text-slate-500 mt-1">Cuando alguien envíe el formulario de contacto, aparecerá aquí.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {filteredContacts.map((c) => (
                  <div key={c.id} className={`rounded-xl border p-4 transition-colors ${
                    c.status === "new" ? "border-amber-500/30 bg-amber-500/5" : "border-slate-700 bg-nexus-800"
                  }`}>
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-medium text-white">{c.name}</h3>
                          <span className={`rounded-full px-2 py-0.5 text-xs ${statusColors[c.status] || ""}`}>
                            {statusLabels[c.status] || c.status}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-xs text-slate-400">
                          <span className="flex items-center gap-1"><Mail className="h-3 w-3" aria-hidden="true" /> {c.email}</span>
                          <span className="flex items-center gap-1"><Phone className="h-3 w-3" aria-hidden="true" /> {c.phone}</span>
                          <span className="flex items-center gap-1"><Calendar className="h-3 w-3" aria-hidden="true" /> {new Date(c.created_at).toLocaleString("es-CL")}</span>
                        </div>
                        {c.service && <p className="mt-1.5 text-xs text-amber-400">Servicio: {c.service}</p>}
                        <p className="mt-2 text-sm text-slate-300 bg-nexus-900/50 rounded-lg p-3">{c.message}</p>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        {c.status === "new" && (
                          <button onClick={() => handleContactStatus(c.id, "read")} className="rounded-lg bg-blue-500/10 p-2 text-blue-400 hover:bg-blue-500/20 transition-colors" title="Marcar leído">
                            <Eye className="h-4 w-4" aria-hidden="true" />
                          </button>
                        )}
                        <a href={`https://wa.me/56963438143?text=${encodeURIComponent(`Hola ${c.name}, gracias por contactarte con Nexus IRL. Recibimos tu cotización por ${c.service || "servicios de seguridad"} y queremos ayudarte. ¿Podemos agendar una visita técnica?`)}`} target="_blank" rel="noopener noreferrer"
                          className="rounded-lg bg-green-500/10 p-2 text-green-400 hover:bg-green-500/20 transition-colors" title="Responder por WhatsApp">
                          <MessageSquare className="h-4 w-4" aria-hidden="true" />
                        </a>
                        <button onClick={() => handleDeleteContact(c.id)} className="rounded-lg bg-red-500/10 p-2 text-red-400 hover:bg-red-500/20 transition-colors" title="Eliminar">
                          <Trash2 className="h-4 w-4" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "testimonios" && (
          <div>
            <div className="grid gap-3">
              {testimonials.length === 0 ? (
                <div className="rounded-xl border border-slate-700 bg-nexus-800 p-10 text-center">
                  <Star className="mx-auto h-10 w-10 text-slate-600 mb-3" aria-hidden="true" />
                  <p className="text-slate-400 font-medium">Sin testimonios</p>
                </div>
              ) : (
                testimonials.map((t) => (
                  <div key={t.id} className={`rounded-xl border p-4 ${
                    t.visible ? "border-slate-700 bg-nexus-800" : "border-amber-500/30 bg-amber-500/5"
                  }`}>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium text-white">{t.name}</h3>
                          {!t.visible && <span className="text-xs text-amber-400">(oculto)</span>}
                        </div>
                        <div className="flex gap-0.5 mt-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className={`h-3.5 w-3.5 ${i < t.rating ? "fill-amber-400 text-amber-400" : "text-slate-600"}`} aria-hidden="true" />
                          ))}
                        </div>
                        <p className="mt-2 text-sm text-slate-300 italic">&ldquo;{t.message}&rdquo;</p>
                        <p className="mt-1 text-xs text-slate-500">{t.service} • {new Date(t.created_at).toLocaleDateString("es-CL")}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <button onClick={() => handleToggleTestimonial(t.id)}
                          className={`rounded-lg p-2 transition-colors ${t.visible ? "text-green-400 hover:bg-green-500/10" : "text-slate-500 hover:bg-slate-700"}`}
                          title={t.visible ? "Ocultar" : "Publicar"}>
                          {t.visible ? <EyeOff className="h-4 w-4" aria-hidden="true" /> : <Eye className="h-4 w-4" aria-hidden="true" />}
                        </button>
                        <button onClick={() => handleDeleteTestimonial(t.id)} className="rounded-lg bg-red-500/10 p-2 text-red-400 hover:bg-red-500/20 transition-colors" title="Eliminar">
                          <Trash2 className="h-4 w-4" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {tab === "galeria" && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-slate-400">{gallery.length} trabajos registrados</p>
              <button onClick={() => setShowNewGalleryForm(!showNewGalleryForm)}
                className="flex items-center gap-1.5 rounded-xl bg-amber-500 px-4 py-2 text-sm font-medium text-nexus-900 hover:bg-amber-400 transition-colors">
                <Plus className="h-4 w-4" aria-hidden="true" /> Agregar trabajo
              </button>
            </div>

            {showNewGalleryForm && (
              <form onSubmit={handleGallerySubmit} className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 mb-4">
                <h3 className="font-medium text-white mb-3">Nuevo trabajo</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">Título</label>
                    <input type="text" required value={galleryForm.title}
                      onChange={(e) => setGalleryForm({ ...galleryForm, title: e.target.value })}
                      className="w-full rounded-lg border border-slate-600 bg-nexus-900 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500" />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">Categoría</label>
                    <select value={galleryForm.category}
                      onChange={(e) => setGalleryForm({ ...galleryForm, category: e.target.value })}
                      className="w-full rounded-lg border border-slate-600 bg-nexus-900 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500">
                      <option value="camaras">Cámaras</option>
                      <option value="cerca">Cerca Eléctrica</option>
                      <option value="redes">Redes</option>
                      <option value="automatizacion">Automatización</option>
                      <option value="comercial">Comercial</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs text-slate-400 mb-1">Descripción</label>
                    <textarea required value={galleryForm.description}
                      onChange={(e) => setGalleryForm({ ...galleryForm, description: e.target.value })}
                      className="w-full rounded-lg border border-slate-600 bg-nexus-900 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500" rows={2} />
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <button type="submit" className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-medium text-nexus-900 hover:bg-amber-400 transition-colors">
                    Guardar
                  </button>
                  <button type="button" onClick={() => setShowNewGalleryForm(false)} className="rounded-lg bg-nexus-700 px-4 py-2 text-sm text-slate-300 hover:bg-nexus-600 transition-colors">
                    Cancelar
                  </button>
                </div>
              </form>
            )}

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((item) => (
                <div key={item.id} className="rounded-xl border border-slate-700 bg-nexus-800 overflow-hidden group">
                  <div className="aspect-video bg-gradient-to-br from-nexus-700 to-nexus-900 flex items-center justify-center">
                    <Image className="h-10 w-10 text-slate-600" aria-hidden="true" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-white text-sm">{item.title}</h3>
                    <p className="text-xs text-slate-500 mt-1">{item.description}</p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="rounded-full bg-nexus-700 px-2 py-0.5 text-xs text-slate-400">{item.category}</span>
                      <button onClick={() => handleDeleteGallery(item.id)} className="text-red-400 hover:text-red-300 transition-colors opacity-0 group-hover:opacity-100" title="Eliminar">
                        <Trash2 className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "ayuda" && (
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-xl border border-slate-700 bg-nexus-800 p-6">
              <h2 className="font-semibold text-white mb-2">Panel de Administración</h2>
              <p className="text-sm text-slate-400 mb-4">Bienvenido al panel de administración de Nexus IRL.</p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-400 mt-0.5 shrink-0" aria-hidden="true" /> <span><strong className="text-slate-200">Cotizaciones:</strong> Revisa y gestiona solicitudes de clientes.</span></li>
                <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-400 mt-0.5 shrink-0" aria-hidden="true" /> <span><strong className="text-slate-200">Testimonios:</strong> Aprueba o rechaza testimonios de clientes.</span></li>
                <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-400 mt-0.5 shrink-0" aria-hidden="true" /> <span><strong className="text-slate-200">Galería:</strong> Agrega trabajos realizados.</span></li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-700 bg-nexus-800 p-6">
              <h2 className="font-semibold text-white mb-2">Responder cotizaciones</h2>
              <p className="text-sm text-slate-400 mb-4">Desde cada cotización puedes:</p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-start gap-2"><MessageSquare className="h-4 w-4 text-green-400 mt-0.5 shrink-0" aria-hidden="true" /> <span>Responder por WhatsApp directo al cliente.</span></li>
                <li className="flex items-start gap-2"><Eye className="h-4 w-4 text-blue-400 mt-0.5 shrink-0" aria-hidden="true" /> <span>Marcar como leído para hacer seguimiento.</span></li>
                <li className="flex items-start gap-2"><Trash2 className="h-4 w-4 text-red-400 mt-0.5 shrink-0" aria-hidden="true" /> <span>Eliminar cotizaciones spam o antiguas.</span></li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-700 bg-nexus-800 p-6">
              <h2 className="font-semibold text-white mb-2">Atajos del sitio</h2>
              <div className="grid gap-2 grid-cols-2">
                {[
                  { label: "Ver sitio web", href: "/" },
                  { label: "Servicios", href: "/servicios" },
                  { label: "Blog", href: "/blog" },
                  { label: "Precios", href: "/precios" },
                  { label: "Contacto", href: "/contacto" },
                  { label: "Admin login", href: "/admin/login" },
                ].map((item) => (
                  <Link key={item.href} href={item.href} target="_blank"
                    className="flex items-center gap-1.5 rounded-lg bg-nexus-700/50 px-3 py-2 text-xs text-slate-300 hover:bg-nexus-700 hover:text-white transition-colors">
                    <ExternalLink className="h-3 w-3" aria-hidden="true" />
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-700 bg-nexus-800 p-6">
              <h2 className="font-semibold text-white mb-2">Configuración</h2>
              <p className="text-sm text-slate-400 mb-3">Variables de entorno activas:</p>
              <div className="space-y-1.5 text-xs font-mono">
                <div className="flex justify-between"><span className="text-slate-500">WhatsApp:</span><span className="text-green-400">+56963438143</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Email:</span><span className="text-green-400">netxuschile@gmail.com</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Admin pass:</span><span className="text-amber-400">{process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin123"}</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Demo mode:</span><span className="text-amber-400">{demo ? "ACTIVO" : "Inactivo"}</span></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
