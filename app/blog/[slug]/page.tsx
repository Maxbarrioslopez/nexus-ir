import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, Clock, ArrowLeft, Shield } from "lucide-react"
import { blogPosts } from "@/data/blog"
import type { Metadata } from "next"

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | Nexus IRL`,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt },
  }
}

function mdToHtml(md: string): string {
  return md
    .split("\n\n")
    .map((block) => {
      const t = block.trim()
      if (t.startsWith("## ")) return `<h2 class="text-2xl font-bold text-theme-text mt-8 mb-3">${t.slice(3)}</h2>`
      if (t.startsWith("### ")) return `<h3 class="text-xl font-semibold text-theme-text mt-6 mb-2">${t.slice(4)}</h3>`
      if (t.startsWith("- ")) {
        const items = t.split("\n").map((l) => l.replace(/^- /, "")).filter(Boolean)
        return `<ul class="space-y-1.5 my-3" role="list">${items.map((i) => `<li class="flex items-start gap-2 text-theme-secondary"><span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-theme-accent"></span>${i}</li>`).join("")}</ul>`
      }
      return `<p class="text-theme-secondary leading-relaxed mb-4">${t}</p>`
    })
    .join("")
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  return (
    <>
      <section className="bg-gradient-to-br from-nexus-900 via-nexus-800 to-nexus-700 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-slate-300 hover:text-white transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Volver al blog
          </Link>
          <div className="flex items-center gap-3 text-sm text-slate-400 mb-4">
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" aria-hidden="true" /> {post.date}</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" aria-hidden="true" /> {post.readingTime}</span>
          </div>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">{post.title}</h1>
          <p className="mt-4 text-lg text-slate-300">{post.excerpt}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">#{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-theme-bg py-16">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose-custom">
          <div
            className="text-base leading-relaxed"
            dangerouslySetInnerHTML={{ __html: mdToHtml(post.content) }}
          />
          <div className="mt-12 rounded-2xl border border-theme-border bg-theme-surface p-6 sm:p-8 text-center">
            <Shield className="mx-auto h-10 w-10 text-theme-accent mb-3" aria-hidden="true" />
            <h3 className="text-lg font-semibold text-theme-text">¿Necesitas asesoría profesional?</h3>
            <p className="mt-2 text-sm text-theme-secondary">Contáctanos para una cotización clara y sin compromiso en Rancagua y todo Chile.</p>
            <Link href="/contacto" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-theme-accent px-6 py-3 text-sm font-semibold text-white hover:bg-theme-accent-hover transition-colors">
              Solicitar Cotización
            </Link>
          </div>
        </article>
      </section>
    </>
  )
}
