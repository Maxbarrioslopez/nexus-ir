export interface Contact {
  id: string
  name: string
  email: string
  phone: string
  service: string
  message: string
  status: "new" | "read" | "replied"
  created_at: string
  notes?: string
  password?: string
}

export interface StoredTestimonial {
  id: string
  name: string
  rating: number
  message: string
  service: string
  visible: boolean
  created_at: string
}

export interface GalleryItemData {
  id: string
  title: string
  category: string
  description: string
  imageUrl?: string
  date?: string
}

const STORAGE_KEYS = {
  contacts: "nexus_admin_contacts",
  testimonials: "nexus_admin_testimonials",
  gallery: "nexus_admin_gallery",
  settings: "nexus_admin_settings",
}

function getFromStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback
  try {
    const stored = localStorage.getItem(key)
    return stored ? JSON.parse(stored) : fallback
  } catch {
    return fallback
  }
}

function setToStorage<T>(key: string, data: T): void {
  if (typeof window === "undefined") return
  try {
    localStorage.setItem(key, JSON.stringify(data))
  } catch {}
}

export function getContacts(): Contact[] {
  return getFromStorage<Contact[]>(STORAGE_KEYS.contacts, [])
}

export function addContact(data: Omit<Contact, "id" | "status" | "created_at"> & { password?: string }): Contact {
  const contacts = getContacts()
  const newContact: Contact = {
    ...data,
    id: `c_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    status: "new",
    created_at: new Date().toISOString(),
  }
  contacts.unshift(newContact)
  setToStorage(STORAGE_KEYS.contacts, contacts)
  return newContact
}

export function verifyContactCredentials(email: string, password: string): boolean {
  const contacts = getContacts()
  return contacts.some((c) => c.email === email && c.password === password)
}

export function getContactByEmail(email: string): Contact | undefined {
  return getContacts().find((c) => c.email === email)
}

export function updateContactStatus(id: string, status: Contact["status"]): void {
  const contacts = getContacts()
  const idx = contacts.findIndex((c) => c.id === id)
  if (idx !== -1) {
    contacts[idx].status = status
    setToStorage(STORAGE_KEYS.contacts, contacts)
  }
}

export function deleteContact(id: string): void {
  setToStorage(STORAGE_KEYS.contacts, getContacts().filter((c) => c.id !== id))
}

export function getStoredTestimonials(): StoredTestimonial[] {
  const stored = getFromStorage<StoredTestimonial[]>(STORAGE_KEYS.testimonials, [])
  const { testimonials: staticTestimonials } = require("@/data/testimonials")
  const staticMapped = staticTestimonials.map((t: any) => ({
    id: t.id,
    name: t.name,
    rating: t.rating,
    message: t.message,
    service: t.service,
    visible: true,
    created_at: new Date(t.date).toISOString(),
  }))
  const merged = [...stored]
  for (const st of staticMapped) {
    if (!merged.find((m) => m.id === st.id)) {
      merged.push(st)
    }
  }
  return merged
}

export function addTestimonial(data: Omit<StoredTestimonial, "id" | "created_at">): StoredTestimonial {
  const items = getStoredTestimonials()
  const newItem: StoredTestimonial = {
    ...data,
    id: `t_${Date.now()}`,
    created_at: new Date().toISOString(),
  }
  items.unshift(newItem)
  setToStorage(STORAGE_KEYS.testimonials, items.filter((i) => !i.id.startsWith("static-")))
  return newItem
}

export function toggleTestimonialVisibility(id: string): void {
  const items = getStoredTestimonials()
  const idx = items.findIndex((t) => t.id === id)
  if (idx !== -1) {
    items[idx].visible = !items[idx].visible
    setToStorage(STORAGE_KEYS.testimonials, items.filter((i) => !i.id.startsWith("static-")))
  }
}

export function deleteTestimonial(id: string): void {
  setToStorage(STORAGE_KEYS.testimonials, getStoredTestimonials().filter((t) => t.id !== id))
}

export function getGalleryItems(): GalleryItemData[] {
  const stored = getFromStorage<GalleryItemData[]>(STORAGE_KEYS.gallery, [])
  const { galleryItems } = require("@/data/gallery")
  const merged = [...galleryItems]
  for (const s of stored) {
    const idx = merged.findIndex((m: any) => m.id === s.id)
    if (idx !== -1) merged[idx] = s
    else merged.push(s)
  }
  return merged
}

export function saveGalleryItem(data: GalleryItemData): void {
  const stored = getFromStorage<GalleryItemData[]>(STORAGE_KEYS.gallery, [])
  const idx = stored.findIndex((s) => s.id === data.id)
  if (idx !== -1) stored[idx] = data
  else stored.push(data)
  setToStorage(STORAGE_KEYS.gallery, stored)
}

export function deleteGalleryItem(id: string): void {
  setToStorage(STORAGE_KEYS.gallery, getFromStorage<GalleryItemData[]>(STORAGE_KEYS.gallery, []).filter((g) => g.id !== id))
}

export function getDashboardStats() {
  const contacts = getContacts()
  const testimonials = getStoredTestimonials()
  const gallery = getGalleryItems()
  return {
    totalContacts: contacts.length,
    newContacts: contacts.filter((c) => c.status === "new").length,
    pendingTestimonials: testimonials.filter((t) => !t.visible).length,
    totalTestimonials: testimonials.length,
    galleryItems: gallery.length,
    recentContacts: contacts.slice(0, 5),
  }
}
