const ADMIN_PASSWORD_KEY = "nexus_admin_token"
const ADMIN_PASSWORD_ENV = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin123"

export function adminLogin(password: string): boolean {
  const valid = password === ADMIN_PASSWORD_ENV
  if (valid && typeof window !== "undefined") {
    sessionStorage.setItem(ADMIN_PASSWORD_KEY, btoa(password))
  }
  return valid
}

export function adminLogout(): void {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem(ADMIN_PASSWORD_KEY)
  }
}

export function isAdminAuthenticated(): boolean {
  if (typeof window === "undefined") return false
  const stored = sessionStorage.getItem(ADMIN_PASSWORD_KEY)
  if (!stored) return false
  try {
    return atob(stored) === ADMIN_PASSWORD_ENV
  } catch {
    return false
  }
}
