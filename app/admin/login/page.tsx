"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Shield, LogIn, Bug, Eye, EyeOff } from "lucide-react"
import { adminLogin, isAdminAuthenticated, isDemoMode } from "@/lib/admin"

export default function AdminLoginPage() {
  const router = useRouter()
  const [input, setInput] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (isAdminAuthenticated()) {
      router.replace("/admin")
    }
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    await new Promise((r) => setTimeout(r, 400))

    const isEmail = input.includes("@")

    if (isEmail) {
      const { verifyContactCredentials } = await import("@/lib/data-service")
      if (verifyContactCredentials(input, password)) {
        window.sessionStorage.setItem("nexus_admin_token", btoa(`contact:${input}`))
        router.push("/admin")
      } else {
        setError("Email o contraseña incorrectos")
        setLoading(false)
      }
    } else {
      if (adminLogin(input)) {
        router.push("/admin")
      } else {
        setError("Contraseña incorrecta")
        setLoading(false)
      }
    }
  }

  const handleDemoAccess = () => {
    const url = new URL(window.location.href)
    url.searchParams.set("demo", "true")
    window.location.href = url.toString()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10">
            <Shield className="h-8 w-8 text-amber-500" aria-hidden="true" />
          </div>
          <h1 className="text-2xl font-bold text-white">Panel de Administración</h1>
          <p className="text-slate-400 mt-1">NETXUS Security Chile</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-5">
          <div>
            <label htmlFor="admin-input" className="block text-sm font-medium text-slate-300 mb-1.5">
              Email o contraseña maestra
            </label>
            <input
              id="admin-input"
              type="text"
              required
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="tucorreo@ejemplo.cl"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              autoComplete="username"
            />
            <p className="text-xs text-slate-500 mt-1">
              Ingresa tu email (credenciales recibidas por correo) o la contraseña maestra
            </p>
          </div>

          {input.includes("@") && (
            <div>
              <label htmlFor="admin-password" className="block text-sm font-medium text-slate-300 mb-1.5">
                Contraseña
              </label>
              <div className="relative">
                <input
                  id="admin-password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 pr-10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
                  aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
          )}

          {error && (
            <div className="rounded-xl bg-red-500/10 border border-red-500/20 p-3">
              <p className="text-sm text-red-400 text-center">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !input}
            className="w-full rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 transition-[background-color,opacity] hover:bg-amber-400 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? (
              <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
            ) : (
              <>
                <LogIn className="h-4 w-4" aria-hidden="true" />
                Ingresar
              </>
            )}
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-slate-900 px-2 text-slate-500">o</span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleDemoAccess}
            className="w-full rounded-xl border border-amber-500/30 px-6 py-3 text-sm font-medium text-amber-400 transition-colors hover:bg-amber-500/10 flex items-center justify-center gap-2"
          >
            <Bug className="h-4 w-4" aria-hidden="true" />
            Modo Demo (sin credenciales)
          </button>
        </form>

        <p className="text-center text-xs text-slate-600 mt-6">
          © {new Date().getFullYear()} NETXUS Security Chile · Rancagua
        </p>
      </div>
    </div>
  )
}
