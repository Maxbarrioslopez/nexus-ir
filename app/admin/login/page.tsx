"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Shield, Lock, LogIn } from "lucide-react"
import { adminLogin, isAdminAuthenticated } from "@/lib/admin"

export default function AdminLoginPage() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (isAdminAuthenticated()) router.push("/admin")
  }, [router])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (adminLogin(password)) {
      router.push("/admin")
    } else {
      setError(true)
    }
  }

  const enterDemo = () => {
    if (adminLogin("demo")) router.push("/admin?demo=true")
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-nexus-900 px-4">
      <div className="w-full max-w-sm space-y-4">
        <div className="rounded-2xl border border-slate-700 bg-nexus-800 p-8 text-center">
          <Shield className="mx-auto h-12 w-12 text-amber-500 mb-4" aria-hidden="true" />
          <h1 className="text-xl font-bold text-white">Admin Nexus IRL</h1>
          <p className="mt-1 text-sm text-slate-400">Ingresa la contraseña para acceder al panel</p>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="admin-pass" className="sr-only">Contraseña</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" aria-hidden="true" />
                <input
                  id="admin-pass"
                  type="password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(false) }}
                  placeholder="Contraseña"
                  className="w-full rounded-xl border border-slate-600 bg-nexus-900 py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  autoFocus
                />
              </div>
            </div>
            {error && <p className="text-xs text-red-400">Contraseña incorrecta. Hint: admin123</p>}
            <button type="submit" className="w-full rounded-xl bg-amber-500 py-3 text-sm font-semibold text-nexus-900 hover:bg-amber-400 transition-colors">
              Ingresar
            </button>
          </form>
        </div>

        <button
          onClick={enterDemo}
          className="w-full rounded-xl border border-amber-500/30 bg-amber-500/5 py-3 text-sm font-medium text-amber-400 hover:bg-amber-500/10 transition-colors flex items-center justify-center gap-2"
        >
          <LogIn className="h-4 w-4" aria-hidden="true" />
          Entrar como Demo (sin contraseña)
        </button>
      </div>
    </div>
  )
}
