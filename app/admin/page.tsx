"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import {
  Shield, LayoutDashboard, Users, Star, Image, Settings,
  Mail, Phone, Calendar, Eye, EyeOff, Trash2, CheckCircle,
  XCircle, Plus, LogOut, Search, MessageSquare, User,
} from "lucide-react"
import { isAdminAuthenticated, adminLogout, isDemoMode } from "@/lib/admin"
import {
  getContacts, addContact, updateContactStatus, deleteContact,
  getStoredTestimonials, toggleTestimonialVisibility, deleteTestimonial,
  getGalleryItems, saveGalleryItem, deleteGalleryItem,
  getDashboardStats,
  type Contact, type StoredTestimonial, type GalleryItemData,
} from "@/lib/data-service"

type Tab = "dashboard" | "contacts" | "testimonials" | "gallery" | "settings"

export default function AdminPage() {
  const router = useRouter()
  const [authed, setAuthed] = useState(false)
  const [tab, setTab] = useState<Tab>("dashboard")
  const [contacts, setContacts] = useState<Contact[]>([])
  const [testimonials, setTestimonials] = useState<StoredTestimonial[]>([])
  const [gallery, setGallery] = useState<GalleryItemData[]>([])
  const [stats, setStats] = useState({
    totalContacts: 0, newContacts: 0, pendingTestimonials: 0,
    totalTestimonials: 0, galleryItems: 0, recentContacts: [] as Contact[],
  })
  const [searchQuery, setSearchQuery] = useState("")
  const [showAddContact, setShowAddContact] = useState(false)
  const [demoMode, setDemoMode] = useState(false)

  useEffect(() => {
    if (!isAdminAuthenticated()) {
      router.replace("/admin/login")
    } else {
      setAuthed(true)
      setDemoMode(isDemoMode())
      loadData()
    }
  }, [router])

  function loadData() {
    setContacts(getContacts())
    setTestimonials(getStoredTestimonials())
    setGallery(getGalleryItems())
    setStats(getDashboardStats())
  }

  function handleLogout() {
    adminLogout()
    router.push("/admin/login")
  }

  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.phone.includes(searchQuery)
  )

  if (!authed) return null

  const tabs = [
    { id: "dashboard" as Tab, label: "Dashboard", icon: LayoutDashboard },
    { id: "contacts" as Tab, label: "Contactos", icon: Users, badge: stats.newContacts },
    { id: "testimonials" as Tab, label: "Testimonios", icon: Star, badge: stats.pendingTestimonials },
    { id: "gallery" as Tab, label: "Galería", icon: Image },
    { id: "settings" as Tab, label: "Ajustes", icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-slate-950">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-amber-500" aria-hidden="true" />
            <span className="text-lg font-bold text-white">Admin NETXUS</span>
            {demoMode && (
              <span className="rounded-full bg-amber-500/20 px-2.5 py-0.5 text-xs font-medium text-amber-400">
                DEMO
              </span>
            )}
          </div>
          <a
            href="/dashboard-linear.html"
            target="_blank"
            className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm text-slate-300 transition-colors hover:bg-white/5"
          >
            <LayoutDashboard className="h-4 w-4" aria-hidden="true" />
            Dashboard Linear
          </a>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm text-slate-300 transition-colors hover:bg-white/5"
          >
            <LogOut className="h-4 w-4" aria-hidden="true" />
            Salir
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <div className="flex gap-1 overflow-x-auto rounded-2xl border border-white/10 bg-white/5 p-1 mb-8">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors whitespace-nowrap ${
                tab === t.id
                  ? "bg-amber-500 text-slate-900"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <t.icon className="h-4 w-4" aria-hidden="true" />
              {t.label}
              {t.badge ? (
                <span className={`rounded-full px-2 py-0.5 text-xs ${
                  tab === t.id ? "bg-slate-900/30 text-slate-900" : "bg-amber-500/20 text-amber-400"
                }`}>
                  {t.badge}
                </span>
              ) : null}
            </button>
          ))}
        </div>

        {tab === "dashboard" && (
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard icon={Users} label="Total Contactos" value={stats.totalContacts} color="blue" />
              <StatCard icon={MessageSquare} label="Nuevos" value={stats.newContacts} color="amber" />
              <StatCard icon={Star} label="Testimonios" value={stats.totalTestimonials} color="purple" />
              <StatCard icon={Image} label="Galería" value={stats.galleryItems} color="green" />
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Contactos Recientes</h3>
              {stats.recentContacts.length === 0 ? (
                <p className="text-slate-500 text-sm">No hay contactos aún. Cuando alguien envíe el formulario aparecerán aquí.</p>
              ) : (
                <div className="space-y-3">
                  {stats.recentContacts.map((c) => (
                    <div key={c.id} className="flex items-center justify-between rounded-xl bg-white/5 p-4">
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-white truncate">{c.name}</p>
                        <p className="text-xs text-slate-400 truncate">{c.email} · {c.phone}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{new Date(c.created_at).toLocaleDateString("es-CL")}</p>
                      </div>
                      <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        c.status === "new" ? "bg-amber-500/20 text-amber-400" :
                        c.status === "read" ? "bg-blue-500/20 text-blue-400" :
                        "bg-green-500/20 text-green-400"
                      }`}>
                        {c.status === "new" ? "Nuevo" : c.status === "read" ? "Leído" : "Respondido"}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Demo Mode</h3>
              <p className="text-sm text-slate-400 mb-3">
                En modo demo los datos se guardan en localStorage. No se pierden al recargar la página, pero no persisten entre dispositivos.
              </p>
              <div className="flex gap-2">
                <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs text-amber-400">localStorage</span>
                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400">Sin Supabase</span>
              </div>
            </div>
          </div>
        )}

        {tab === "contacts" && (
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" aria-hidden="true" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar contactos..."
                  className="w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <button
                onClick={() => setShowAddContact(!showAddContact)}
                className="flex items-center gap-2 rounded-xl bg-amber-500 px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-amber-400"
              >
                <Plus className="h-4 w-4" aria-hidden="true" />
                Agregar
              </button>
            </div>

            {filteredContacts.length === 0 ? (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-12 text-center">
                <Users className="mx-auto h-12 w-12 text-slate-600 mb-4" aria-hidden="true" />
                <p className="text-slate-400">No hay contactos {searchQuery ? "que coincidan" : "aún"}</p>
              </div>
            ) : (
              <div className="space-y-3">
                {filteredContacts.map((c) => (
                  <div key={c.id} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium text-white">{c.name}</h4>
                          <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                            c.status === "new" ? "bg-amber-500/20 text-amber-400" :
                            c.status === "read" ? "bg-blue-500/20 text-blue-400" :
                            "bg-green-500/20 text-green-400"
                          }`}>
                            {c.status === "new" ? "Nuevo" : c.status === "read" ? "Leído" : "Respondido"}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 mt-1.5 text-xs text-slate-400">
                          <span className="flex items-center gap-1"><Mail className="h-3 w-3" aria-hidden="true" />{c.email}</span>
                          <span className="flex items-center gap-1"><Phone className="h-3 w-3" aria-hidden="true" />{c.phone}</span>
                          <span className="flex items-center gap-1"><Calendar className="h-3 w-3" aria-hidden="true" />{new Date(c.created_at).toLocaleDateString("es-CL")}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => { updateContactStatus(c.id, "read"); loadData() }}
                          className="rounded-lg border border-white/10 p-2 text-slate-400 hover:text-white transition-colors"
                          title="Marcar como leído"
                          aria-label="Marcar como leído"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => { deleteContact(c.id); loadData() }}
                          className="rounded-lg border border-white/10 p-2 text-red-400 hover:text-red-300 transition-colors"
                          title="Eliminar"
                          aria-label="Eliminar contacto"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    {c.service && (
                      <div className="mb-2">
                        <span className="rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs text-amber-400">{c.service}</span>
                      </div>
                    )}
                    <p className="text-sm text-slate-300 leading-relaxed">{c.message}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "testimonials" && (
          <div className="space-y-3">
            {testimonials.length === 0 ? (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-12 text-center">
                <Star className="mx-auto h-12 w-12 text-slate-600 mb-4" aria-hidden="true" />
                <p className="text-slate-400">No hay testimonios</p>
              </div>
            ) : (
              testimonials.map((t) => (
                <div key={t.id} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <User className="h-5 w-5 text-amber-400" aria-hidden="true" />
                        <h4 className="font-medium text-white">{t.name}</h4>
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className={`h-3.5 w-3.5 ${i < t.rating ? "fill-amber-400 text-amber-400" : "text-slate-600"}`} />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">{t.service} · {new Date(t.created_at).toLocaleDateString("es-CL")}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => { toggleTestimonialVisibility(t.id); loadData() }}
                        className={`rounded-lg border p-2 transition-colors ${
                          t.visible
                            ? "border-green-500/30 text-green-400 hover:bg-green-500/10"
                            : "border-white/10 text-slate-500 hover:text-white"
                        }`}
                        title={t.visible ? "Ocultar" : "Mostrar"}
                        aria-label={t.visible ? "Ocultar" : "Mostrar"}
                      >
                        {t.visible ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                      </button>
                      <button
                        onClick={() => { deleteTestimonial(t.id); loadData() }}
                        className="rounded-lg border border-white/10 p-2 text-red-400 hover:text-red-300 transition-colors"
                        title="Eliminar"
                        aria-label="Eliminar testimonio"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">&ldquo;{t.message}&rdquo;</p>
                </div>
              ))
            )}
          </div>
        )}

        {tab === "gallery" && (
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.length === 0 ? (
                <div className="col-span-full rounded-2xl border border-white/10 bg-white/5 p-12 text-center">
                <Image className="mx-auto h-12 w-12 text-slate-600 mb-4" aria-hidden="true" />
                <p className="text-slate-400">No hay imágenes en la galería</p>
                </div>
              ) : (
                gallery.map((g) => (
                  <div key={g.id} className="group relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center">
                      <Image className="h-8 w-8 text-slate-600" aria-hidden="true" />
                    </div>
                    <div className="p-4">
                      <h4 className="text-sm font-medium text-white truncate">{g.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{g.category} · {g.description}</p>
                    </div>
                    <button
                      onClick={() => { deleteGalleryItem(g.id); loadData() }}
                      className="absolute right-2 top-2 rounded-lg bg-red-500/80 p-1.5 opacity-0 transition-opacity group-hover:opacity-100"
                      aria-label="Eliminar imagen"
                    >
                      <Trash2 className="h-4 w-4 text-white" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {tab === "settings" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Información del Sistema</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between rounded-xl bg-white/5 p-3">
                  <span className="text-slate-400">Modo</span>
                  <span className="text-white font-medium">{demoMode ? "Demo (localStorage)" : "Producción"}</span>
                </div>
                <div className="flex justify-between rounded-xl bg-white/5 p-3">
                  <span className="text-slate-400">Total Contactos</span>
                  <span className="text-white font-medium">{stats.totalContacts}</span>
                </div>
                <div className="flex justify-between rounded-xl bg-white/5 p-3">
                  <span className="text-slate-400">Total Testimonios</span>
                  <span className="text-white font-medium">{stats.totalTestimonials}</span>
                </div>
                <div className="flex justify-between rounded-xl bg-white/5 p-3">
                  <span className="text-slate-400">Items Galería</span>
                  <span className="text-white font-medium">{stats.galleryItems}</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Almacenamiento Local</h3>
              <p className="text-sm text-slate-400 mb-4">
                Los datos se guardan en localStorage. Para migrar a una base de datos real (Supabase), configura las credenciales en <code className="text-amber-400">.env.local</code>.
              </p>
              <button
                onClick={() => {
                  if (confirm("¿Eliminar todos los datos locales? Esto no se puede deshacer.")) {
                    if (typeof window !== "undefined") {
                      localStorage.removeItem("nexus_admin_contacts")
                      localStorage.removeItem("nexus_admin_testimonials")
                      localStorage.removeItem("nexus_admin_gallery")
                      localStorage.removeItem("nexus_admin_settings")
                    }
                    loadData()
                  }
                }}
                className="rounded-xl border border-red-500/30 px-4 py-2 text-sm text-red-400 hover:bg-red-500/10"
              >
                Limpiar Todos los Datos
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function StatCard({ icon: Icon, label, value, color }: {
  icon: React.ElementType; label: string; value: number; color: string
}) {
  const colors: Record<string, string> = {
    blue: "from-blue-500/20 to-blue-600/10 border-blue-500/30 text-blue-400",
    amber: "from-amber-500/20 to-amber-600/10 border-amber-500/30 text-amber-400",
    purple: "from-purple-500/20 to-purple-600/10 border-purple-500/30 text-purple-400",
    green: "from-green-500/20 to-green-600/10 border-green-500/30 text-green-400",
  }

  return (
    <div className={`rounded-2xl border bg-gradient-to-br p-5 ${colors[color] || colors.blue}`}>
      <div className="flex items-center gap-3">
        <Icon className="h-5 w-5" aria-hidden="true" />
        <span className="text-sm font-medium">{label}</span>
      </div>
      <p className="text-3xl font-bold text-white mt-2">{value}</p>
    </div>
  )
}
