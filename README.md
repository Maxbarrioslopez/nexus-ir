# Nexus IRL — Seguridad Electrónica Profesional

Sitio web corporativo para **Nexus IRL**, empresa chilena especializada en venta, instalación y certificación de sistemas de seguridad electrónica para hogar y empresa en Rancagua y todo Chile.

## Stack Tecnológico

| Tecnología | Versión | Propósito |
|---|---|---|
| **Next.js** | 14 (App Router) | Framework React con SSR/SSG |
| **TypeScript** | 5 | Tipado estático |
| **Tailwind CSS** | 3 | Estilos utilitarios |
| **Supabase** | 2 (opcional) | Backend para formularios |
| **Lucide React** | 0.400 | Iconos SVG |
| **Vercel** | — | Hosting y despliegue |

## Funcionalidades

- **Multi-idioma**: Español/Inglés con selector en panel de accesibilidad
- **Tema claro/oscuro**: 3 modos (claro, oscuro, sistema) con persistencia en localStorage
- **Modo daltónico**: 4 perfiles (protanopia, deuteranopia, tritanopia, alto contraste)
- **Ajuste de tamaño de texto**: Normal, grande, muy grande
- **SEO optimizado**: JSON-LD (LocalBusiness), Open Graph, Twitter Cards, sitemap.xml, robots.txt
- **Geo SEO**: Foco en Rancagua, Región de O'Higgins y cobertura nacional Chile
- **Galería interactiva**: Filtros por categoría con lightbox y navegación
- **Formulario de cotización**: Envío a Supabase (con fallback offline)
- **Testimonios**: Sección fija + formulario de envío para clientes
- **WhatsApp flotante**: Botón que aparece al hacer scroll
- **Panel de accesibilidad**: Configuración unificada desde el header
- **100% estático**: Generado como contenido estático en build, carga instantánea

## Requisitos

- **Node.js** >= 18
- **npm** >= 9
- Cuenta en [Vercel](https://vercel.com) (para deploy)
- (Opcional) Proyecto en [Supabase](https://supabase.com) (para formularios)

## Instalación y desarrollo local

```bash
# 1. Clonar
git clone <repo-url>
cd nexus-ir

# 2. Variables de entorno
cp .env.local.example .env.local
# Editar .env.local con tus datos

# 3. Instalar dependencias
npm install

# 4. Iniciar desarrollo
npm run dev
# Abre http://localhost:3000
```

## Build de producción

```bash
npm run build
npm start
```

## Variables de entorno

| Variable | Obligatoria | Descripción |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | No | URL del proyecto Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | No | Anon key de Supabase |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Sí | Número WhatsApp (ej: 56912345678) |
| `NEXT_PUBLIC_PHONE` | No | Teléfono fijo/móvil a mostrar |
| `NEXT_PUBLIC_PHONE_TEL` | No | Teléfono para enlace `tel:` |
| `NEXT_PUBLIC_EMAIL` | No | Correo de contacto |

## Configuración de Supabase (opcional)

1. Crea un proyecto en [supabase.com](https://supabase.com)
2. Ve a **SQL Editor** y ejecuta `supabase-schema.sql`
3. Copia `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY` a `.env.local`
4. En Vercel, agrega las mismas variables en **Settings → Environment Variables**

Sin Supabase, los formularios funcionan en modo demo (loguean en consola).

## Editar contenido

| Archivo | Contenido |
|---|---|
| `data/services.ts` | Servicios ofrecidos |
| `data/gallery.ts` | Trabajos realizados (agrega tu URL de imagen real) |
| `data/testimonials.ts` | Testimonios fijos |
| `lib/translations.ts` | Textos del sitio ES/EN |
| `lib/constants.ts` | Configuración centralizada |
| `tailwind.config.ts` | Paleta de colores |

## Despliegue en Vercel

### Automático (push a GitHub)

```bash
# Vincular repo
vercel link

# Desplegar
vercel --prod
```

### Manual desde el dashboard

1. Conecta tu repositorio en [vercel.com/new](https://vercel.com/new)
2. Framework: **Next.js**
3. Variables de entorno: agrega las del `.env.local`
4. Deploy

## Estructura del proyecto

```
nexus-ir/
├── app/                  # Páginas (App Router)
│   ├── page.tsx          # Home
│   ├── servicios/        # Página de servicios
│   ├── galeria/          # Galería de trabajos
│   ├── contacto/         # Contacto y formularios
│   ├── layout.tsx        # Layout global + SEO
│   ├── globals.css       # Estilos globales
│   ├── robots.ts         # robots.txt
│   └── sitemap.ts        # sitemap.xml
├── components/           # Componentes React
├── context/              # Providers (Theme, Lang)
├── data/                 # Contenido editable
├── lib/                  # Utilidades (traducciones, supabase, constantes)
└── public/               # Assets estáticos
```

## Licencia

Uso comercial — Nexus IRL
