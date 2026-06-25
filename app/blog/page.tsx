import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { blogPosts, blogMeta } from "@/data/blog"

export const metadata = {
  title: blogMeta.title,
  description: blogMeta.description,
  openGraph: {
    title: blogMeta.title,
    description: blogMeta.description,
  },
}

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Blog</h1>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            {blogMeta.description}
          </p>
        </div>
      </section>

      <section className="bg-theme-surface py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.slug} className="group rounded-2xl border border-theme-border bg-theme-bg overflow-hidden hover:border-theme-accent/50 transition-all hover:shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-nexus-700 to-nexus-900 flex items-center justify-center">
                  <svg className="h-12 w-12 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-theme-secondary mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" aria-hidden="true" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" aria-hidden="true" />
                      {post.readingTime}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-theme-text group-hover:text-theme-accent transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="mt-2 text-sm text-theme-secondary line-clamp-2">{post.excerpt}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-theme-surface-2 px-2.5 py-0.5 text-xs text-theme-secondary">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-theme-accent hover:text-theme-accent-hover transition-colors"
                  >
                    Leer más <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
