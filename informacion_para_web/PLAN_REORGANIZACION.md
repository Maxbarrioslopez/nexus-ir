# PLAN MAESTRO: Reorganización y Optimización — Nexus IRL

**Basado en:** Análisis forense de `informacion_para_web`, estructura actual del código, investigación de mercado SEO Chile 2026, y análisis de competidores.

---

## ÍNDICE

1. [Diagnóstico Actual](#1-diagnóstico-actual)
2. [Estructura Modular Propuesta](#2-estructura-modular-propuesta)
3. [Vistas/Pages SEO Necesarias](#3-vistaspages-seo-necesarias)
4. [Keywords por Atacar](#4-keywords-por-atacar)
5. [UX y Conversión](#5-ux-y-conversión)
6. [Datos del Informe Forense para Integrar](#6-datos-del-informe-forense-para-integrar)
7. [Plan de Implementación](#7-plan-de-implementación)

---

## 1. DIAGNÓSTICO ACTUAL

### Fortalezas
- ✅ Next.js 14 App Router, TypeScript, Tailwind
- ✅ Multi-idioma (ES/EN) funcional
- ✅ Dark/Light/Colorblind modes
- ✅ Responsive design
- ✅ Blog con 5 artículos SEO
- ✅ Sitemap + robots.txt
- ✅ Schema.org LocalBusiness + FAQPage (JSON-LD)
- ✅ Admin panel con autenticación
- ✅ Leaflet map + GA4 + WhatsApp button
- ✅ PWA (manifest + service worker)
- ✅ Servicios carrusel con drag/scroll

### Debilidades
- ❌ **Sin páginas de servicio individuales** — cada servicio debería tener su propia URL para SEO
- ❌ **Sin página de precios** — los competidores (Servicios Pezoa, Branner, Multival) muestran precios y capturan leads
- ❌ **Sin página de cobertura** — "Toda Chile" es vago, hay que aterrizar comunas/regiones
- ❌ **Sin página "Sobre Nosotros"** — no hay historia de la empresa, equipo, misión/visión
- ❌ **Sin página de certificaciones** — los competidores muestran certificación SEC, esto es crítico
- ❌ **Sin página de proceso** — "cómo trabajamos" genera confianza
- ❌ **Sin casos de éxito / project detail** — la galería no tiene páginas individuales por proyecto
- ❌ **Sin testimonios embed con schema Review** — los testimonios no tienen marcado JSON-LD específico
- ❌ **Sin página de cálculo/cotizador online** — los competidores tienen calculadoras de precio
- ❌ **El sitemap no incluye blog posts individuales** — solo estática
- ❌ **Sin página 404 personalizada con links útiles** — (hay una pero puede mejorar)
- ❌ **Sin BreadcrumbList schema** — ayuda a navegación y SEO
- ❌ **Sin imágenes reales de trabajos** — la galería usa placeholders SVG
- ❌ **Footer tiene datos placeholder** — teléfono +569XXXXXXXX, email contacto@nexusirl.cl
- ❌ **Sin enlaces internos entre artículos de blog** — no hay cross-linking
- ❌ **La página de servicios no tiene hashlinks funcionales en navegación** — aunque los servicios tienen `id`, no hay navegación lateral
- ❌ **Sin páginas de aterrizaje por keyword** — ej: `/camaras-seguridad-rancagua`, `/cerca-electrica-rancagua`

---

## 2. ESTRUCTURA MODULAR PROPUESTA

### 2.1 Arquitectura de Directorios

```
app/
├── (marketing)/                  # Grupo de rutas para landing pages SEO
│   ├── camaras-seguridad/
│   ├── cerca-electrica/
│   ├── alarmas/
│   ├── cableado-estructurado/
│   ├── certificacion-puntos/
│   └── layout.tsx
├── blog/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
├── servicios/
│   ├── page.tsx
│   └── [slug]/                   # Página individual por servicio
│       └── page.tsx
├── proyectos/
│   ├── page.tsx                   # Galería mejorada con filtros
│   └── [slug]/
│       └── page.tsx               # Página individual de proyecto
├── contacto/
│   ├── page.tsx
│   └── gracias/
│       └── page.tsx               # Post-submit landing
├── nosotros/
│   └── page.tsx                   # Quiénes somos, misión, visión, equipo
├── precios/
│   └── page.tsx                   # Tabla de precios + cotizador
├── cobertura/
│   └── page.tsx                   # Zonas de cobertura con mapa
├── proceso/
│   └── page.tsx                   # Cómo trabajamos (5 pasos)
├── admin/
│   ├── login/
│   │   └── page.tsx
│   └── page.tsx
├── api/
│   ├── contact/
│   │   └── route.ts
│   └── testimonials/
│       └── route.ts
├── layout.tsx
├── page.tsx                       # Home actual
├── sitemap.ts
├── robots.ts
├── not-found.tsx
└── globals.css
```

### 2.2 Componentes Modulares

```
components/
├── layout/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── MobileNav.tsx
│   └── Breadcrumbs.tsx          # NUEVO
├── sections/
│   ├── Hero.tsx
│   ├── ServicesCarousel.tsx
│   ├── ServicesSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── GalleryGrid.tsx
│   ├── ContactForm.tsx
│   ├── CTASection.tsx           # NUEVO (reutilizable)
│   ├── StatsSection.tsx         # NUEVO (contadores)
│   ├── ProcessSection.tsx       # NUEVO (pasos)
│   └── CertificationsSection.tsx # NUEVO
├── ui/
│   ├── Button.tsx
│   ├── Badge.tsx
│   ├── Card.tsx
│   ├── Input.tsx
│   ├── Select.tsx
│   └── Modal.tsx
├── seo/
│   ├── JsonLd.tsx               # NUEVO (componente genérico para schemas)
│   ├── BreadcrumbJsonLd.tsx     # NUEVO
│   ├── ReviewJsonLd.tsx         # NUEVO
│   └── LocalBusinessJsonLd.tsx  # NUEVO
├── Map.tsx
├── WhatsAppButton.tsx
├── ImageWithFallback.tsx
├── AccessibilityPanel.tsx
└── ServiceCard.tsx              # NUEVO
```

### 2.3 Data Layer Modular

```
data/
├── services.ts
├── testimonials.ts
├── faq.ts
├── blog.ts
├── gallery.ts
├── process.ts                   # NUEVO (pasos del proceso)
├── coverage.ts                  # NUEVO (comunas/regiones)
├── pricing.ts                   # NUEVO (precios por servicio)
├── certifications.ts            # NUEVO (certificaciones)
└── team.ts                      # NUEVO (equipo)
```

### 2.4 SEO Utilities

```
lib/
├── constants.ts
├── translations.ts
├── supabase.ts
├── admin.ts
├── seo/
│   ├── metadata.ts              # NUEVO (generadores de metadata)
│   ├── keywords.ts              # NUEVO (pool central de keywords)
│   └── schemas.ts               # NUEVO (generadores de JSON-LD)
└── utils.ts                     # NUEVO (helpers generales)
```

---

## 3. VISTAS/PAGES SEO NECESARIAS

### Prioridad ALTA (implementar ya)

#### 3.1 `/servicios/[slug]` — Página individual por servicio
**Por qué:** Cada servicio debe tener su propia URL para rankear keywords long-tail como "instalación de cámaras IP en Rancagua"
**Meta:** title + description + h1 + keywords por servicio
**Schema:** Service + Product
**Incluye:**
- Hero del servicio
- Features detallados
- Precios referenciales
- Galería de trabajos relacionados
- Testimonios relacionados
- FAQ específico del servicio
- CTA a cotización
- Breadcrumb

#### 3.2 `/precios` — Tabla de precios
**Por qué:** Todos los competidores (Pezoa, Branner, Multival, KAPS) publican precios. Es la página que más convierte.
**Meta:** "Precios cámaras seguridad Rancagua 2026 | Nexus IRL"
**Schema:** Product + Offer
**Incluye:**
- Tabla comparativa por kit/sistema
- Rango de precios por servicio
- Checklist de lo que incluye cada nivel
- Factores que afectan el precio
- Formulario de cotización personalizada
- Testimonios

#### 3.3 `/nosotros` — Quiénes somos
**Por qué:** Los clientes B2B necesitan confianza. La página "Nosotros" es la segunda más visitada después de servicios.
**Incluye:**
- Historia de la empresa
- Misión, Visión, Valores (del informe forense)
- Equipo (Jaime Tamblay como soporte técnico)
- Certificaciones (SEC, A2Q, LEOPARD)
- Estadísticas (años, proyectos, clientes)
- Timeline de hitos

#### 3.4 `/proceso` — Cómo trabajamos
**Por qué:** Explica el journey del cliente. Reduce objeciones.
**Incluye:**
- 5 pasos: Levantamiento → Diseño → Instalación → Ajuste → Entrega
- Fotos reales de cada etapa (cuando existan)
- Tiempos estimados por etapa
- Garantía y soporte post-venta

#### 3.5 Landing pages por keyword (5 páginas)

| Ruta | Keyword objetivo | Intención |
|------|-----------------|-----------|
| `/camaras-seguridad-rancagua` | "cámaras seguridad Rancagua" | Transaccional |
| `/cerca-electrica-rancagua` | "cerca eléctrica Rancagua" | Transaccional |
| `/alarmas-seguridad-hogar` | "alarmas seguridad hogar Chile" | Transaccional |
| `/cableado-estructurado-rancagua` | "cableado estructurado Rancagua" | Transaccional |
| `/certificacion-puntos-red` | "certificación puntos red" | Transaccional |

Cada landing page debe tener:
- Hero con keyword
- Explicación del servicio
- Precios referenciales
- Beneficios vs competencia
- CTA fuerte: "Cotiza ahora" + WhatsApp

### Prioridad MEDIA (siguiente sprint)

#### 3.6 `/proyectos/[slug]` — Página individual de proyecto
**Por qué:** Cada trabajo en la galería merece su propia página. Google indexa y rankea casos de éxito.
**Schema:** CreativeWork
**Incluye:**
- Fotos del proyecto
- Descripción detallada (desafío, solución, resultado)
- Servicios utilizados (links internos)
- Testimonio asociado
- CTA

#### 3.7 `/cobertura` — Zonas de cobertura
**Por qué:** Posiciona por búsquedas locales de múltiples comunas.
**Incluye:**
- Mapa interactivo (Leaflet actual mejorado)
- Lista de comunas/regiones con links
- "¿Tu comuna no está? Contáctanos igual"
- Testimonios por zona

#### 3.8 Blog posts adicionales (5+ artículos)
- "Cómo elegir un sistema de cámaras de seguridad en Chile [2026]"
- "¿Cuánto cuesta instalar una cerca eléctrica? Precios actualizados"
- "Cámaras IP vs HD: cuál elegir para tu hogar"
- "Certificación SEC para cercos eléctricos: todo lo que debes saber"
- "Seguridad perimetral para empresas en Rancagua: guía completa"

### Prioridad BAJA (futuro)

#### 3.9 Página de cotización online con calculadora
**Por qué:** Los competidores tienen formularios, pero casi ninguno tiene calculadora. Diferenciador.
**Funcionalidad:**
- Seleccionar servicio
- Cantidad de equipos / metros lineales
- Tipo de propiedad (casa/empresa/industria)
- Precio estimado en vivo
- Botón "Enviar cotización"

#### 3.10 Blog tag pages
- `/blog/tag/camaras`, `/blog/tag/rancagua`, etc.

#### 3.11 Página 404 avanzada
- Links a servicios principales
- Buscador
- CTA a contacto

---

## 4. KEYWORDS POR ATACAR

### 4.1 Pool de Keywords Prioritarias

#### Transaccionales (compra directa) — ALTA PRIORIDAD

| Keyword | Vol. estimado | Dificultad | Página destino |
|---------|--------------|------------|----------------|
| instalar cámaras seguridad Rancagua | 200-400/mes | Baja | Landing + Servicios |
| cerca eléctrica Rancagua | 100-300/mes | Baja | Landing + Servicios |
| instalación cámaras seguridad precios | 500-1000/mes | Media | `/precios` |
| alarmas seguridad hogar Chile | 300-600/mes | Media | Landing + Blog |
| cableado estructurado Rancagua | 50-150/mes | Baja | Landing |
| certificación puntos red | 100-300/mes | Baja | Landing |
| kit cámaras seguridad instalación incluida | 200-500/mes | Media | `/precios` |
| empresas seguridad electrónica Rancagua | 50-150/mes | Baja | Home + Nosotros |
| costo instalación cámara seguridad | 300-700/mes | Media | `/precios` + Blog |
| mantención cámaras seguridad | 150-400/mes | Baja | Servicio |
| cerca eléctrica precio Chile | 200-500/mes | Media | `/precios` + Blog |
| certificación SEC cerco eléctrico | 100-250/mes | Baja | Servicio + Blog |

#### Informacionales (contenido) — MEDIA PRIORIDAD

| Keyword | Vol. estimado | Dificultad | Página destino |
|---------|--------------|------------|----------------|
| cómo instalar cámaras seguridad | 1000-2000/mes | Alta | Blog |
| qué cámara de seguridad comprar | 500-1000/mes | Media | Blog |
| cerca eléctrica es letal | 300-600/mes | Baja | Blog |
| diferencia cámara IP vs HD | 200-500/mes | Baja | Blog |
| cómo funciona cerco eléctrico | 200-400/mes | Baja | Blog |
| qué incluye instalación cámara seguridad | 100-300/mes | Baja | Blog + FAQ |
| mantención preventiva CCTV | 100-250/mes | Baja | Blog + Servicio |

#### Locales (Rancagua + VI Región) — ALTA PRIORIDAD

| Keyword | Vol. estimado | Dificultad | Página destino |
|---------|--------------|------------|----------------|
| cámaras seguridad Rancagua | 200-400/mes | Baja | Landing |
| técnico cámaras Rancagua | 100-200/mes | Baja | Landing + Contacto |
| empresa CCTV Rancagua | 50-150/mes | Baja | Home + Landing |
| alarmas Rancagua | 100-200/mes | Baja | Landing + Blog |
| cerca eléctrica VI región | 50-100/mes | Baja | Landing |
| seguridad electrónica O'Higgins | 30-80/mes | Baja | Home + Cobertura |

#### NETXUS (basado en informe forense) — OPORTUNIDAD

| Keyword | Vol. estimado | Dificultad | Página destino |
|---------|--------------|------------|----------------|
| seguridad perimetral fibra óptica | 100-300/mes | Media | Servicio nuevo |
| detección intrusión fibra óptica | 50-150/mes | Baja | Servicio + Blog |
| NETXUS VALLA | 10-50/mes | Baja | Servicio |
| NETXUS SUELO | 10-50/mes | Baja | Servicio |
| NETXUS WALL | 10-50/mes | Baja | Servicio |
| protección perimetral inteligente Chile | 100-300/mes | Media | Servicio + Marketing |
| analizador fibra óptica seguridad | 30-100/mes | Baja | Servicio |

### 4.2 Estrategia de Contenido por Keyword

```
Transaccional → Landing page + Precios + CTA fuerte
Informacional → Blog post + Enlaces internos a servicios + CTA suave
Local → Landing con nombre de comuna + Mapa + Testimonios locales
NETXUS → Página de servicio dedicada + Blog técnico + Video demos
```

### 4.3 Cluster de Contenido (Topic Clusters)

**Pilar 1: Cámaras de Seguridad**
- Pilar: `/servicios/camaras-seguridad`
- Cluster: blog posts + landing pages + precios
- Enlaces internos: todos apuntan al pilar

**Pilar 2: Cercos Eléctricos**
- Pilar: `/servicios/cerca-electrica`
- Cluster: blog posts + landing pages
- Keywords: certificación SEC, precio, instalación

**Pilar 3: Seguridad Perimetral NETXUS**
- Pilar: `/servicios/seguridad-perimetral-fibra-optica`
- Cluster: blog técnico + casos de uso sectorial
- Keywords: aeropuertos, minería, infraestructura crítica

---

## 5. UX Y CONVERSIÓN

### 5.1 Principios de Diseño para Vender

1. **Social Proof primero** — Testimonios con foto + rating visibles en home, servicios, precios
2. **Transparencia de precios** — Mostrar rangos. "Desde $X" sin compromiso. Es lo que funciona en Chile.
3. **Urgencia** — "Promo válida por tiempo limitado" (si aplica), stock disponible
4. **Garantía visible** — Sello de "Garantía real por escrito" en cada CTA
5. **Certificaciones** — SEC, marcas, años de experiencia como badges
6. **WhatsApp como canal principal** — Botón flotante + integración en formularios
7. **Múltiples CTAs** — No solo al final. Cada sección debe tener un CTA.
8. **Proceso claro** — "3 pasos para proteger tu hogar" simplifica la decisión

### 5.2 Journey del Usuario (embudo)

```
DESCUBRIMIENTO                     CONSIDERACIÓN                  DECISIÓN
│                                   │                             │
├─ Google (SEO/ADS)                ├─ Página Servicio            ├─ Cotizador
├─ Redes sociales                   ├─ Blog / Guía               ├─ WhatsApp
├─ Recomendación                   ├─ Casos de éxito            ├─ Formulario
├─ WhatsApp directo                ├─ Precios                   ├─ Llamada
│                                   ├─ FAQ                       │
│                                   ├─ Nosotros                  │
│                                   ├─ Certificaciones           │
│                                   │                             │
└───────────────────────────────────┴─────────────────────────────┘
       Top of Funnel                  Middle of Funnel           Bottom of Funnel
       (Contenido)                    (Confianza)                (Conversión)
```

### 5.3 Elementos de Conversión por Página

| Página | CTA Primario | CTA Secundario | Elementos de Confianza |
|--------|-------------|----------------|----------------------|
| Home | "Cotiza Ahora" → /contacto | "Ver Servicios" → /servicios | Badges + Testimonios + Stats |
| Servicio [slug] | "Cotizar este servicio" → form | "Ver proyectos relacionados" | Precio + Garantía + Certificación |
| Precios | "Cotiza este kit" → form | "Habla con un experto" → WhatsApp | Comparativa + Incluye/No incluye |
| Blog | CTA contextual al final | WhatsApp flotante | Autor + Fecha + Tags |
| Nosotros | "Trabaja con nosotros" → /contacto | "Ver proyectos" → /proyectos | Stats + Timeline + Certificaciones |
| Proyecto [slug] | "Solicita proyecto similar" → form | "Ver más proyectos" | Fotos + Resultados medibles |

### 5.4 Mejoras UX Específicas

1. **Sticky CTA mobile** — Barra inferior fija con "Cotiza aquí" o WhatsApp
2. **Calculadora de presupuesto** en página de precios (selector de servicio + cantidad + precio en vivo)
3. **Before/After slider** en galería de proyectos (cuando haya fotos)
4. **Chatbot simple** o menú de WhatsApp pre-configurado ("1. Cotizar | 2. Soporte | 3. Información")
5. **Page speed** — Ya es Next.js, optimizar imágenes con WebP y lazy loading real
6. **Anchor links** en página de servicios (navegación lateral sticky con los servicios)
7. **Back to top** en mobile
8. **Loading skeletons** en vez de spinners
9. **Optimización de formularios** — Autocompletar, validación en vivo, progress steps
10. **Modo oscuro por defecto** (ya implementado) + persistencia

### 5.5 Micro-interacciones

- Hover en tarjetas de servicio: escala + sombra
- Contador animado de estadísticas (500+ clientes, 10+ años, etc.)
- Testimonios en carrusel auto-play con pausa en hover
- Botón WhatsApp con pulso animado
- Header cambia de opacidad al scrollear (ya implementado)

---

## 6. DATOS DEL INFORME FORENSE PARA INTEGRAR

El informe de `informacion_para_web` contiene información CRUCIAL que la web actual NO está usando:

### 6.1 Tecnología Core (no aprovechada)
La web actual solo ofrece servicios genéricos (cámaras, alarmas, cercos, redes). El informe revela que NETXUS tiene una **línea de detección por fibra óptica** (VALLA, SUELO, WALL) que es un **diferenciador enorme** frente a competidores.

**Acción:** Crear sección/servicio dedicado a "Seguridad Perimetral por Fibra Óptica" con:
- Explicación de la tecnología FFT + IA adaptativa
- Las 3 variantes (VALLA, SUELO, WALL)
- Beneficios: inmune EMI/RFI, baja falsa alarma, autodiagnóstico
- Sectores objetivo: aeropuertos, minería, prisiones, fronteras (exactamente del informe)

### 6.2 Contactos Reales vs Placeholder
El informe revela contactos reales:
- **Email:** netxuschile@gmail.com (deck marketing)
- **WhatsApp Business:** +56963438143 (deck servicios)
- **Teléfono alternativo:** +56921214808 (deck marketing)
- Contacto genérico placeholder: +56 9 0000 0000, contacto@netxus.cl

**Acción:** Actualizar `.env.local` con datos reales. La web usa `+569XXXXXXXX` y `contacto@nexusirl.cl` que son falsos.

### 6.3 Nombre de Tecnología
El deck de marketing menciona "Tecnología LEOPARD desarrollada y fabricada por A2Q".
**Acción:** Usar "LEOPARD" como nombre técnico en contenido SEO. Es una keyword única.

### 6.4 Misión, Visión y Valores
El informe capturó texto exacto de misión/visión/valores de las presentaciones.
**Acción:** Usar en página `Nosotros`.

### 6.5 Sectores Objetivo
12 sectores identificados en la presentación (aeropuertos, prisiones, bases militares, etc.).
**Acción:** Crear páginas de industria / sector. Ej: `/industria/mineria`, `/industria/aeropuertos`.

### 6.6 Proceso de Implementación
5 pasos documentados en la presentación.
**Acción:** Usar en página `Proceso`. Son los mismos pasos que ya tenemos conceptualmente.

### 6.7 Diferenciadores Técnicos
8 beneficios detallados en la presentación.
**Acción:** Usar como bullets en servicios y landing pages.

### 6.8 Catálogo de Cámaras
`servicos netxus.pptx` tiene un catálogo detallado de tipos de cámara.
**Acción:** Usar para enriquecer la página de servicio de cámaras y la página de precios.

---

## 7. PLAN DE IMPLEMENTACIÓN

### Fase 1 — Fundación SEO (prioridad máxima)
- [ ] Crear landing pages por keyword (5 páginas)
- [ ] Agregar blog posts faltantes (5 artículos)
- [ ] Actualizar sitemap con todas las nuevas rutas
- [ ] Implementar BreadcrumbList schema en todas las páginas
- [ ] Agregar Review schema a testimonios
- [ ] Corregir datos de contacto reales en `.env.local`
- [ ] Agregar meta robots y canonical tags correctos

### Fase 2 — Confianza y Conversión
- [ ] Crear página `/nosotros` con misión/visión/valores del informe
- [ ] Crear página `/proceso` con los 5 pasos
- [ ] Crear página `/precios` con tabla comparativa
- [ ] Agregar cálculo automático en página de precios
- [ ] Agregar sticky CTA mobile
- [ ] Mejorar formularios con validación en vivo

### Fase 3 — Diferenciación NETXUS
- [ ] Crear servicio de "Seguridad Perimetral por Fibra Óptica"
- [ ] Crear páginas por sector (minería, aeropuertos, etc.)
- [ ] Integrar renders de productos (Netxus Valla.png, Suelo.png, wall.png)
- [ ] Usar contenido del flyer PDF como material descargable
- [ ] Blog técnico sobre FFT, IA adaptativa, detección por fibra

### Fase 4 — Refinamiento UX
- [ ] Implementar lazy loading real con IntersectionObserver
- [ ] Agregar loading skeletons
- [ ] Optimizar imágenes a WebP con next/image
- [ ] Agregar before/after slider en proyectos
- [ ] Mejorar galería con imágenes reales (cuando existan)

---

*Documento generado el 24 de junio de 2026*  
*Basado en: análisis de 13 archivos forenses, 23 archivos de código, 25+ competidores analizados en web, investigación SEO de mercado Chile.*
