# INFORME DE ANÁLISIS FORENSE — CARPETA `informacion_para_web`

**Fecha del análisis:** 24 de junio de 2026  
**Directorio:** `/home/maxi/web_nexus/informacion_para_web`  
**Total de archivos:** 13  
**Tamaño total:** ~134.6 MB  

---

## ÍNDICE

1. [Resumen Ejecutivo](#1-resumen-ejecutivo)
2. [Inventario de Archivos](#2-inventario-de-archivos)
3. [Análisis Detallado: Presentaciones Comerciales](#3-análisis-detallado-presentaciones-comerciales)
4. [Análisis Detallado: Pitch Deck](#4-análisis-detallado-pitch-deck)
5. [Análisis Detallado: Servicios y Soporte](#5-análisis-detallado-servicios-y-soporte)
6. [Análisis Detallado: PDF Flyer](#6-análisis-detallado-pdf-flyer)
7. [Análisis Detallado: Imágenes](#7-análisis-detallado-imágenes)
8. [Mapa de Relaciones entre Archivos](#8-mapa-de-relaciones-entre-archivos)
9. [Anomalías y Observaciones](#9-anomalías-y-observaciones)
10. [Conclusiones](#10-conclusiones)

---

## 1. RESUMEN EJECUTIVO

Esta carpeta contiene el **corpus documental completo de NETXUS Security Chile**, una empresa de seguridad perimetral que opera en Chile. Los archivos abarcan desde presentaciones comerciales institucionales, un pitch de inversión, materiales de marketing, servicios de CCTV y control de acceso, hasta diseños gráficos (flyers, renders de productos) e imágenes promocionales.

La tecnología core es un **sistema de detección por fibra óptica** desarrollado por la empresa española **A2Q (Access to Quality S.L.)**, comercializado bajo la marca **NETXUS** en tres variantes: NETXUS VALLA, NETXUS SUELO y NETXUS WALL.

El proyecto está liderado por **Jaime Tamblay** como soporte técnico, bajo la empresa **ELVIRA DEL CARMEN DIAZ CUEVAS E.I.R.L** (RUT 77.323.293-8).

---

## 2. INVENTARIO DE ARCHIVOS

### 2.1 Presentaciones Comerciales (PPTX)

| # | Archivo | Slides | Tamaño | Contenido principal |
|---|---------|--------|--------|---------------------|
| 1 | `NETXUS_PRESENTACION_PROYECTO.pptx` | 12 | 4.82 MB | Presentación comercial institucional de NETXUS (versión base) |
| 2 | `NETXUS_PRESENTACION_PROYECTO  -  Reparado.pptx` | 12 | 4.82 MB | Misma presentación, versión reparada (contenido idéntico extraído) |
| 3 | `NETXUS_PRESENTACION_PROYECTO_MARKETING.pptx` | 12 | 22.76 MB | Versión de marketing con diapositivas mayormente gráficas (poco texto) |

### 1.2 Pitch Deck (PPTX)

| # | Archivo | Slides | Tamaño | Contenido principal |
|---|---------|--------|--------|---------------------|
| 4 | `PITCH PARA CCS..pptx` | 5 | 7.11 MB | Pitch de inversión solicitando USD $6.000 |

### 1.3 Servicios y Soporte (PPTX)

| # | Archivo | Slides | Tamaño | Contenido principal |
|---|---------|--------|--------|---------------------|
| 5 | `ocupacion de netxus.pptx` | 19 | 18.13 MB | Propuesta de servicios tecnológicos (misión, visión, valores, CCTV, control de acceso) |
| 6 | `servicos netxus.pptx` | 19 | 19.89 MB | Versión extendida del mismo deck de servicios (con catálogo de cámaras detallado) |

### 1.4 PDF

| # | Archivo | Tamaño | Contenido principal |
|---|---------|--------|---------------------|
| 7 | `Flayer 2.pdf` | 3.01 MB | Flyer promocional (imagen vectorial/alta resolución, sin texto extraíble). Título interno: "NETXUS_Valla_Suelo_Wall_Alta_Resolucion" |

### 1.5 Imágenes

| # | Archivo | Dimensiones | Tamaño | Tipo | Contenido probable |
|---|---------|-------------|--------|------|-------------------|
| 8 | `WhatsApp Image 2026-06-23 at 15.26.58.jpeg` | 139×140 px | 7.8 KB | JPEG | Icono / avatar / logo pequeño de WhatsApp |
| 9 | `WhatsApp Image 2026-06-23 at 15.26.36.jpeg` | 940×330 px | 52.7 KB | JPEG | Banner / imagen de encabezado |
| 10 | `Flayer 1.1.jpg.jpeg` | 6513×9205 px | 18.35 MB | JPEG | Flyer digital a resolución extremadamente alta (6513×9205 px, ~60 MP) |
| 11 | `Netxus Suelo.png` | 3465×4896 px | 13.0 MB | PNG (RGBA) | Render promocional del producto NETXUS SUELO (con canal alfa) |
| 12 | `Netxus Valla.png` | 3465×4904 px | 11.6 MB | PNG (RGB) | Render promocional del producto NETXUS VALLA |
| 13 | `Netxus wall.png` | 3465×4896 px | 10.7 MB | PNG (RGB) | Render promocional del producto NETXUS WALL |

---

## 3. ANÁLISIS DETALLADO: PRESENTACIONES COMERCIALES

### 3.1 `NETXUS_PRESENTACION_PROYECTO.pptx` (y versión Reparado)

**Slides: 12 | Tamaño: 4.82 MB**  
**Nota:** La versión "Reparado" contiene el mismo texto extraído. Las diferencias podrían ser gráficas o de formato visual no detectables en el análisis de texto.

#### Slide 1 — Portada
- **Título:** "PROYECTO DE SEGURIDAD PERIMETRAL — Detección inteligente por fibra óptica para perímetros críticos"
- **Subtítulos:** "NETXUS VALLA · NETXUS SUELO · NETXUS WALL"
- **Tecnologías destacadas:** Fibra óptica, IA adaptativa, FFT, Baja falsa alarma
- **Identidad corporativa:** NETXUS SECURITY CHILE — Soluciones Globales
- **Contacto:** www.netxus.cl / contacto@netxus.cl / +56 9 0000 0000
- **Fabricante:** Tecnología desarrollada y fabricada por A2Q (Access to Quality S.L.), España.

#### Slide 2 — Contexto del proyecto
- **Desafío:** Detectar intrusión antes de que llegue al activo crítico
- **Riesgo operacional:** Perímetros extensos, puntos ciegos, condiciones ambientales adversas
- **Necesidad técnica:** Primera línea de detección activa, precisa, integrable, bajo mantenimiento
- **Mercado objetivo:** Clientes B2B de alta exigencia

#### Slide 3 — Arquitectura general
- **Flujo operativo:** Sensor de fibra óptica → Analizador NETXUS → Red IP/Relés → Centro de monitoreo → Alarma/CRA
- **Proceso:** El cable sensa vibración → Analizador procesa con FFT + IA adaptativa → Alarma se comunica a sistemas existentes

#### Slide 4 — Línea de soluciones

| Solución | Aplicación | Alcance |
|----------|-----------|---------|
| **NETXUS VALLA** | Convierte cercos metálicos en sensores activos. Detecta cortes, golpes y escalada. | Hasta 800 m por analizador |
| **NETXUS SUELO** | Protección invisible enterrada. Detecta pisadas o vehículos. | Hasta 1000 m por analizador |
| **NETXUS WALL** | Protección contra perforación en paredes, suelos y techos. | Hasta 800 m por analizador |

#### Slide 5 — NETXUS VALLA (detalle)
- **Detección:** Cortes en vallado, salto/deslizamiento, golpes, sierra radial, sabotaje de cable, fallos del sistema
- **Modelos:** V0577 / V057P / V057C (doble zona, 400+400 m) — V053 / V053P (zona simple)
- **Aplicaciones:** Aeropuertos, industrias, plantas solares, centros logísticos, bases militares, fronteras, prisiones
- **Características:** Alta precisión, IA adaptativa, EMI/RFI

#### Slide 6 — NETXUS SUELO (detalle)
- **Funcionamiento:** Cable sensor de fibra óptica enterrado en zigzag, detecta vibraciones del terreno
- **Modelos:** E027 / E027P y E023 / E023P (hasta 1000 m en dos zonas de 500+500 m)
- **Aplicaciones:** Aeropuertos, plantas solares, fronteras, prisiones, alta tensión, bases militares, residencias VIP

#### Slide 7 — NETXUS WALL (detalle)
- **Instalación:** Fijación del cable sensor según tipo de pared, caja con analizador y ajuste por software, conexión a central de alarmas
- **Aplicaciones:** Cámaras acorazadas, joyerías, museos, naves industriales, alta seguridad, viviendas VIP

#### Slide 8 — Diferenciadores técnicos (8 beneficios)
1. **Fibra óptica:** Sistema cerrado, robusto, larga vida útil
2. **FFT:** Análisis espectral en tiempo real para identificar patrones
3. **IA adaptativa:** Aprende del entorno, reduce falsas alarmas
4. **Inmune EMI/RFI:** No afectado por fenómenos electromagnéticos
5. **Alta precisión:** Localización por zonas, alta probabilidad de detección
6. **Integración:** IP, relés, USB/RS485, conexión a sistemas existentes
7. **Bajo mantenimiento:** Autodiagnóstico, soporte remoto
8. **Escalable:** 800-1000 m por analizador según solución

#### Slide 9 — Sectores objetivo (12 mercados B2B)
1. Aeropuertos
2. Prisiones
3. Bases militares
4. Fronteras
5. Plantas solares
6. Centros logísticos
7. Industria
8. Alta tensión
9. Museos
10. Viviendas VIP
11. Polvorines
12. Centros de datos

#### Slide 10 — Integración y operación
- **Capas:** Campo (cable sensor + analizador) → Comunicación (IP, USB, relés, RS485) → Monitoreo (Centro de control, CRA, VMS) → Operación (1000 eventos de memoria, soporte remoto, mantenimiento planificado)

#### Slide 11 — Propuesta de implementación (5 pasos)
1. **Levantamiento:** Revisión del perímetro, puntos críticos, longitudes y tipo de superficie
2. **Diseño técnico:** Zonas, modelos, cableado, comunicaciones e integración
3. **Instalación:** Tendido de cable sensor, montaje de analizadores, conexión eléctrica/red
4. **Ajuste y pruebas:** Calibración, validación de eventos, reducción de falsas alarmas, capacitación
5. **Entrega y soporte:** Puesta en marcha, documentación, mantenimiento, asistencia remota

#### Slide 12 — Cierre
- "Solicita una demostración técnica. Agenda evaluación del perímetro. Recibe propuesta personalizada por solución y zona."
- www.netxus.cl · contacto@netxus.cl · +56 9 0000 0000

---

### 3.2 `NETXUS_PRESENTACION_PROYECTO_MARKETING.pptx`

**Slides: 12 | Tamaño: 22.76 MB** (significativamente más grande → contenido multimedia pesado)

Este deck es una **versión orientada a marketing** con diapositivas mayormente visuales (poco texto extraíble). Los textos que se pudieron extraer indican:

#### Slide 1 — Portada de marketing
- **Título:** "ECOSISTEMA DE PROTECCIÓN PERIMETRAL INTELIGENTE"
- **Valor de la propuesta:**
  - Fibra óptica pasiva inmune a EMI/RFI
  - IA adaptativa que aprende del entorno
  - FFT en tiempo real para discriminar eventos
  - Arquitectura compatible con integración B2B: VMS, CRA, CCTV
  - Portafolio para valla, muro y suelo

#### Slide 2 — Resumen ejecutivo
- **Estructura de la propuesta:**
  1. Base tecnológica (filosofía NETXUS, flujo de detección)
  2. Portafolio de soluciones (VALLA, WALL, SUELO, matriz comparativa)
  3. Capacidad comercial (especificaciones, integración, implementación)
- **Mensajes clave de marketing:** Precisión táctica, seguridad pasiva, menor tasa de falsas alarmas, solución elegante/invisible/escalable
- **Estructura sugerida para conversación comercial:** Problema → Cómo detecta NETXUS → Solución aplicable → Beneficios → Integración/implementación

#### Slide 3 — Filosofía de la solución (diapositiva gráfica)

#### Slide 4 — Proceso de detección (diapositiva gráfica)

#### Slide 5 — Matriz comparativa del ecosistema (diapositiva gráfica)

#### Slide 6 — NETXUS VALLA (diapositiva gráfica)

#### Slide 7 — NETXUS WALL (diapositiva gráfica)

#### Slide 8 — NETXUS SUELO (diapositiva gráfica)

#### Slide 9 — Especificaciones del sensor físico (diapositiva gráfica)

#### Slide 10 — Arquitectura, integración y monitoreo
- **Capas:** Campo (cable + analizador) → Red (IP/Ethernet/PoE) → Gestión (software) → Seguridad (relés, alarmas, CCTV, VMS, CRA)
- **Capacidad operacional:** Notificación por email, indicadores visuales/sonoros, zonas localizadas, memoria de eventos, parametrización remota
- **Mensaje comercial:** "NETXUS no es solo un sensor: es una plataforma de protección perimetral lista para convivir con su ecosistema de seguridad electrónica."

#### Slide 11 — Implementación y escenarios
- **Categorías de clientes:**
  - Infraestructura crítica: Aeropuertos, bases militares, plantas solares, centros de datos
  - Industrial y logística: Naves industriales, centros logísticos, fronteras, alta seguridad
  - Patrimonio y retail sensible: Museos, joyerías, cámaras acorazadas, viviendas VIP
- **Ruta de trabajo:** Diagnóstico → Ingeniería → Instalación → Calibración → Puesta en marcha
- **Nota comercial:** "Presentación clara, ordenada y comercialmente sólida, donde la marca NETXUS lidera la narrativa y A2Q se presenta como respaldo tecnológico."

#### Slide 12 — Cierre con llamado a la acción
- **Contacto real (diferente al genérico):** netxuschile@gmail.com / +56921214808
- **Tecnología:** Menciona "LEOPARD" como nombre de la tecnología (desarrollada por A2Q)
- **Frase final:** "NETXUS aporta precisión, integración y confianza para proteger perímetros críticos."

---

## 4. ANÁLISIS DETALLADO: PITCH DECK

### 4.1 `PITCH PARA CCS..pptx`

**Slides: 5 | Tamaño: 7.11 MB**

#### Slide 1 — Portada
- **Empresa:** ELVIRA DEL CARMEN DIAZ CUEVAS E.I.R.L
- **RUT:** 77.323.293-8
- **Proyecto:** "Netxus perimetral integral"

#### Slide 2 — Planteamiento del problema
- **Autor:** Jaime Tamblay C. — Soporte técnico de NETXUS
- **Contexto:** Crecimiento delictual constante
- **Objetivo:** Reducir el impacto de eventos delictivos, salvar vidas y disminuir pérdidas
- **Solución:** NETXUS perimetral con tecnología de máxima eficiencia

#### Slide 3 — Descripción del sistema
- Sistema que no alerta al intruso de su existencia ni posición
- Inmune a ondas electromagnéticas
- Sistema activo con auto-chequeo
- Detección de alta calidad
- Integra otros sistemas (CCTV-IP)
- Se instala en vallas, paredes, suelos y techos
- Una vibración en el cable sensor de fibra óptica es detectada por un analizador → genera alarma → minimiza falsas alarmas

#### Slide 4 — Solicitud de inversión
- **Capital necesario:** USD $6.000
- **Destino:** Maletín de herramientas para trabajar fibra óptica (conectores)
- **Capacidad actual:** Tienen software, hardware y expertiz del equipo
- **Producción:** Elaboración y producción de analizadores + fabricación especial de cable de fibra óptica

#### Slide 5 — Cierre (diapositiva gráfica)

---

## 5. ANÁLISIS DETALLADO: SERVICIOS Y SOPORTE

### 5.1 `ocupacion de netxus.pptx` y `servicos netxus.pptx`

**Slides: 19 cada uno | Tamaños: 18.13 MB y 19.89 MB**

Ambos archivos son **casi idénticos** en contenido textual, con ligeras variaciones en la versión `servicos netxus.pptx`:
- Slide 12 tiene un catálogo detallado de cámaras con modelos específicos
- Slide 16 cambia: en lugar de "Ventajas para clientes con contrato" es un slide "Servicios que otorgamos en Netxus" (lista general)
- Versiones de Windows/Office actualizadas: "Windows 10-11 PRO y Office 2019-2021"

#### Slide 1 — Portada
- "Servicios tecnológicos y soporte a clientes"

#### Slide 2 — Introducción
- Propuesta de servicios y soporte
- Objetivo: Asesorar, diseñar y ejecutar proyectos
- Buscar mejores alternativas en precio y calidad

#### Slides 3-4 — Misión
- "Ofrecer a nuestros clientes la más amplia gama de servicios y soluciones tecnológicas, innovadoras y de calidad, que les permitan optimizar sus procesos y cumplir sus objetivos. Para aumentar la rentabilidad de nuestros clientes, asociados y de nuestra empresa."

#### Slides 5-6 — Visión
- "Ser una empresa líder en el sector de la Tecnología de información, con proyección nacional, reconocida por brindar soluciones y servicios de excelente calidad."

#### Slides 7-10 — Valores
| Valor | Descripción |
|-------|-------------|
| **Honestidad** | Acciones guiadas por franqueza y transparencia |
| **Responsabilidad** | Capacidad de tomar decisiones para cumplir compromisos con estándares de calidad |
| **Lealtad** | Compromiso, fidelidad, confidencialidad y sentido de pertenencia |
| **Compromiso** | Convertir promesas en realidad, trabajar con seriedad y constancia |
| **Respeto** | Considerar ideas y solicitudes, trato justo y equitativo |
| **Confianza** | Relaciones basadas en alto nivel de satisfacción |
| **Perseverancia** | Constancia, búsqueda continua de nuevas tecnologías y procesos |

#### Slide 11 — Definición de servicios
- "La gestión de tecnología debe proveer un servicio permanente que beneficie a todos los usuarios"
- Elementos: Suministro, administración y operación de infraestructura tecnológica y de sistemas de información

#### Slide 12 — CCTV
**`ocupacion de netxus`:** "Servicios en CCTV" (título genérico)
**`servicos netxus` (catálogo detallado):**
- Cámaras lente fijo desde 104° hasta 360°
- Cámaras Domo, Bala/Bullet, Varifocales
- Visión nocturna, con audio, metálicas 2MP-4MP
- Cámaras ocultas, PTZ 360°, inalámbricas, IP, FULLHD-4K
- Micrófonos ambientales

#### Slide 13 — Instalación CCTV
- Sistemas análogos (HD, Full HD, Híbridas)
- Sistemas IP
- Sistemas de cámaras móviles
- Tipos: Anti vandálicas, balas, domos, 360°, visión nocturna, interior/exterior
- DVR con detección de movimiento y monitoreo remoto

#### Slide 14 — Mantención Correctiva
- Trabajos para normalizar funcionamiento: reparación/cambio de cableado, terminales, cámaras, DVR, configuración
- Proceso: Levantamiento → Informe con anomalías → Presupuesto

#### Slide 15 — Mantención Preventiva
- Garantiza continuidad operacional
- Plan de revisión de sistemas críticos
- Proceso: Levantamiento → Informe → Mantención correctiva (si aplica) → Contrato de mantención preventiva

#### Slide 16 — Ventajas (solo en `ocupacion de netxus`)
- Precios preferenciales en equipamiento y mano de obra
- Planes de pago
- Equipo especializado
- Funcionamiento continuo
- Asesoría en nuevas tecnologías

**`servicos netxus`:** Slide 16 es un listado general "Servicios que otorgamos en Netxus" (sin texto detallado extraíble)

#### Slide 17 — Control de acceso (título)

#### Slide 18 — Soluciones de control de acceso
- Control RFID (identificación por radiofrecuencia)
- Monitoreo de rondas para guardias
- Video Portero con reconocimiento facial
- Control biométrico
- Alarmas GSM con domótica (sin costo mensual)
- Reparación de PC y Notebook
- Windows 10-11 PRO y Office 2019-2021

#### Slide 19 — Cierre
- **Contacto:** Jaime Tamblay
- **Email:** netxuschile@outlook.com
- **WhatsApp Business:** +56963438143

---

## 6. ANÁLISIS DETALLADO: PDF FLYER

### 6.1 `Flayer 2.pdf`

**Tamaño: 3.01 MB**  
**Metadatos internos:**
- **Título:** "NETXUS_Valla_Suelo_Wall_Alta_Resolucion"
- **Creación:** 21 de junio de 2026, 02:16:19 UTC
- **Modificación:** 21 de junio de 2026, 02:16:19 UTC
- **Contenido:** Flyer 100% gráfico (imagen vectorial/alta resolución). No contiene texto extraíble. Es un diseño promocional de las tres soluciones NETXUS (VALLA, SUELO, WALL).

---

## 7. ANÁLISIS DETALLADO: IMÁGENES

### 7.1 `WhatsApp Image 2026-06-23 at 15.26.58.jpeg`
- **Dimensiones:** 139×140 px (cuadrado, pequeña)
- **Tamaño:** 7.8 KB
- **Tipo:** JPEG estándar
- **Uso probable:** Foto de perfil o avatar de WhatsApp/contacto

### 7.2 `WhatsApp Image 2026-06-23 at 15.26.36.jpeg`
- **Dimensiones:** 940×330 px (banner horizontal)
- **Tamaño:** 52.7 KB
- **Tipo:** JPEG con perfil ICC
- **Uso probable:** Encabezado o banner de presentación/WhatsApp

### 7.3 `Flayer 1.1.jpg.jpeg`
- **Dimensiones:** 6513×9205 px (resolución extremadamente alta, ~60 megapíxeles)
- **Tamaño:** 18.35 MB
- **Tipo:** JPEG con metadatos Adobe (formato Adobe transform)
- **Uso probable:** Flyer profesional para impresión a gran escala o alta calidad

### 7.4 `Netxus Suelo.png`
- **Dimensiones:** 3465×4896 px
- **Tamaño:** 13.0 MB
- **Tipo:** PNG con canal alfa (transparencia) + perfil ICC + metadatos XMP Adobe
- **Uso probable:** Render promocional del producto NETXUS SUELO (con fondo transparente para diseño gráfico)

### 7.5 `Netxus Valla.png`
- **Dimensiones:** 3465×4904 px
- **Tamaño:** 11.6 MB
- **Tipo:** PNG RGB + perfil ICC + metadatos XMP Adobe
- **Uso probable:** Render promocional del producto NETXUS VALLA

### 7.6 `Netxus wall.png`
- **Dimensiones:** 3465×4896 px
- **Tamaño:** 10.7 MB
- **Tipo:** PNG RGB + perfil ICC + metadatos XMP Adobe
- **Uso probable:** Render promocional del producto NETXUS WALL

---

## 8. MAPA DE RELACIONES ENTRE ARCHIVOS

```
NETXUS SECURITY CHILE (Marca)
│
├── Presentación Comercial Base
│   ├── NETXUS_PRESENTACION_PROYECTO.pptx
│   ├── NETXUS_PRESENTACION_PROYECTO  -  Reparado.pptx  (variante)
│   └── NETXUS_PRESENTACION_PROYECTO_MARKETING.pptx  (variante marketing)
│
├── Material Promocional
│   ├── Flayer 2.pdf  (flyer triple producto)
│   ├── Flayer 1.1.jpg.jpeg  (flyer alta resolución)
│   └── Netxus Valla.png / Suelo.png / wall.png  (renders individuales)
│
├── Pitch de Inversión
│   └── PITCH PARA CCS..pptx  (solicita USD $6.000 para herramientas)
│
├── Servicios Operativos
│   ├── ocupacion de netxus.pptx  (propuesta servicios)
│   └── servicos netxus.pptx  (variante con catálogo extendido)
│
└── Imágenes Varias
    ├── WhatsApp Image ...36.jpeg  (banner)
    └── WhatsApp Image ...58.jpeg  (avatar)
```

**Relaciones comerciales identificadas:**
- **NETXUS Chile** (distribuidor/integrador autorizado) ← **A2Q (España)** (fabricante de la tecnología)
- **ELVIRA DEL CARMEN DIAZ CUEVAS E.I.R.L** (RUT 77.323.293-8) es la entidad legal que opera la marca
- **Jaime Tamblay** figura como soporte técnico y contacto comercial (netxuschile@outlook.com, +56963438143)
- Email alternativo: netxuschile@gmail.com, +56921214808

---

## 9. ANOMALÍAS Y OBSERVACIONES

### 9.1 Duplicación de contenido
- `NETXUS_PRESENTACION_PROYECTO.pptx` y su versión "Reparado" son prácticamente idénticas en texto. La diferencia podría ser solo visual (formato, imágenes) o correcciones menores.
- `ocupacion de netxus.pptx` y `servicos netxus.pptx` son dos versiones del mismo deck de servicios, con ligeras variaciones.

### 9.2 Nombres inconsistentes
- El archivo `Flayer 1.1.jpg.jpeg` tiene doble extensión (.jpg.jpeg), indicando que pudo haber sido renombrado manualmente.
- `PITCH PARA CCS..pptx` tiene doble punto antes de la extensión, posible error de nombrado.

### 9.3 Información de contacto dispersa
- **Contacto genérico en presentaciones:** contacto@netxus.cl / +56 9 0000 0000 (teléfono placeholder)
- **Contacto real en marketing:** netxuschile@gmail.com / +56921214808
- **Contacto real en pitch/servicios:** netxuschile@outlook.com / +56963438143
- **Empresa legal:** ELVIRA DEL CARMEN DIAZ CUEVAS E.I.R.L (RUT 77.323.293-8)
- El dominio `netxus.cl` no tiene email corporativo real asociado en estos documentos (usa Gmail/Outlook)

### 9.4 Naming de tecnología
- En presentaciones base se menciona "Tecnología desarrollada y fabricada por A2Q"
- En el deck de marketing se menciona "Tecnología LEOPARD desarrollada y fabricada por A2Q"
- "LEOPARD" podría ser el nombre del sistema/firmware del analizador

### 9.5 Fechas
- El PDF fue creado el 21 de junio de 2026
- Las imágenes de WhatsApp son del 23 de junio de 2026 (día anterior al análisis)
- Esto sugiere actividad reciente de preparación de materiales

### 9.6 Resoluciones de imagen
- El flayer `Flayer 1.1.jpg.jpeg` tiene resolución desproporcionadamente alta (6513×9205 px) para ser usado digitalmente, sugiere que fue diseñado para **impresión profesional**.
- Los PNGs (3465×4896 px) también son de muy alta resolución, aptos para catálogos impresos o presentaciones.

### 9.7 Ausencias notables
- No hay fichas técnicas detalladas de los productos (pdfs de especificaciones)
- No hay planos de instalación ni diagramas técnicos
- No hay presupuestos ni cotizaciones
- No hay documentación legal o contratos
- No hay manuales de usuario de los analizadores

---

## 10. CONCLUSIONES

1. **Naturaleza del proyecto:** NETXUS Security Chile es un integrador/distribuidor autorizado de tecnología de seguridad perimetral por fibra óptica fabricada por A2Q (España). Ofrecen tres productos (VALLA, SUELO, WALL) más servicios complementarios de CCTV y control de acceso.

2. **Estado del proyecto:** Los archivos indican una etapa de preparación comercial activa (junio 2026), con materiales de presentación, flyers, renders de productos y un pitch de inversión activo.

3. **Estructura empresarial:** La empresa opera bajo la razón social "ELVIRA DEL CARMEN DIAZ CUEVAS E.I.R.L" (RUT 77.323.293-8), con Jaime Tamblay como cara visible. Usan identidad de marca "NETXUS SECURITY CHILE" con dominio propio (netxus.cl).

4. **Necesidad de inversión:** Están buscando USD $6.000 para adquirir herramientas de terminación de fibra óptica, necesarias para la producción local de analizadores y cable sensor.

5. **Mercado objetivo:** Clientes B2B de infraestructura crítica: aeropuertos, prisiones, bases militares, fronteras, plantas solares, centros de datos, minería, industria, y patrimonio.

6. **Cobertura de servicios:** Además del core de detección perimetral, ofrecen CCTV (analógico, IP, móvil), mantención correctiva/preventiva, control de acceso (RFID, biométrico, video portero con reconocimiento facial), alarmas GSM y reparación de equipos.

---

*Documento generado el 24 de junio de 2026*  
*Análisis forense sobre 13 archivos (6 PPTX, 1 PDF, 6 imágenes)*  
*Herramientas utilizadas: python-pptx, pdfminer, Pillow (PIL)*
