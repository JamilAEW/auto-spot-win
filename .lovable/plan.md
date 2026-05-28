
# StopCars Madrid — Web especialista en Correa Sumergida (PureTech / EcoBoost)

Construimos el sitio completo descrito en tu brief, con identidad visual StopCars (negro + amarillo) y todo el SEO técnico necesario para posicionar #1 en Google España.

## Identidad visual

- **Paleta**: fondo negro `#0A0A0A`, superficies `#141414`, amarillo señal `#FFD400` (acento principal), naranja `#E8700A` solo para CTAs de urgencia ("Presupuesto en 5 min", "Llamar ahora"), verde WhatsApp `#25D366`, blanco texto, rojo alerta `#CC2200`.
- **Tipografía**: Google Fonts — **Outfit** (titulares bold/black, mayúsculas estilo flyer) + **Inter** (cuerpo).
- **Logo StopCars**: extraído de los flyers que subiste; usado en header, footer y favicon.
- **Imágenes**: flyers reutilizados como creatividades (hero promo 999 €, sección "Por qué importante", "Mejor opción"). Generamos imágenes complementarias (taller, motor PureTech, correa sumergida, kit Dayco) con IA al estilo de tus flyers.

## Datos del negocio (de los flyers)

- Nombre: **StopCars** · Ubicación: **Madrid** · WhatsApp/Teléfono: **+34 624 68 77 25**
- Dirección, CP, email, horarios, redes → quedan como placeholders editables claramente marcados (los rellenamos cuando me los pases). Horarios por defecto: L–V 8:30–19:00, S 9:00–14:00.

## Componentes globales (en todas las páginas)

- **Header** sticky: logo + nav (Inicio, PureTech, EcoBoost, Modelos ▾, Precios, Blog, Contacto) + botón naranja **"Presupuesto gratis"**.
- **Footer** 4 columnas: NAP + horarios · Servicios (pilares + modelos) · Blog (últimos 3) · Legales + redes.
- **WhatsApp flotante** verde, esquina inferior derecha, mensaje pre-rellenado.
- **Breadcrumbs** con `BreadcrumbList` JSON-LD en páginas internas.
- **Banner urgencia** en hero/intermedios (fondo naranja).

## Mapa completo de rutas (40+)

**Core**: `/`, `/contacto`, `/precios`, `/garantia`, `/recogida-entrega`, `/sobre-nosotros`, `/aviso-legal`, `/politica-privacidad`, `/politica-cookies`.

**Pilares**: `/motor-puretech`, `/motor-ecoboost`, `/correa-distribucion-sumergida` (con redirect 301 desde `/correa-bano-aceite`).

**Modelos (13)**: Peugeot 208/308/2008/3008, Citroën C3/C4/C4 Cactus, Opel Corsa/Grandland, DS3/DS7, Ford Fiesta/Focus/EcoSport — todos `…-puretech-madrid` o `…-ecoboost-madrid`.

**Blog (10)**: índice `/blog` + los 10 artículos del brief (problema, síntomas, cuándo cambiar, precio 2025, garantía Stellantis, EcoBoost, consumo aceite, traqueteo, modelos afectados, correa vs cadena).

Cada ruta tendrá su propio `<head>`: title, description, canonical, og:title/description/image, robots.

## Contenido por página (siguiendo el brief al pie de la letra)

- **H1 exactos** del brief, jerarquía H2/H3 respetada, copy completo (hero, urgencia, modelos afectados, proceso, FAQs, mapa, formulario).
- **Tablas** de modelos, precios, intervalos km/años.
- **CTAs duplicados** (presupuesto + llamar) en hero, intermedio y cierre.
- **Enlazado interno** obligatorio: Home → pilares → modelos → blog → pilares (mapa de enlaces del brief).
- **Formulario de contacto** (nombre, teléfono, modelo, km, mensaje) con validación; envíos por email vía Resend (Lovable Cloud).

## SEO técnico

- `<html lang="es">`, sitemap.xml dinámico con todas las URLs, robots.txt (Allow + Sitemap), canonical por página.
- **Schema JSON-LD**: `AutoRepair` (Home con NAP, geo, horarios, aggregateRating, sameAs) + `Service` (pilares + modelos) + `FAQPage` (Home + pilares) + `BreadcrumbList` (todas internas) + `Article` (blog) + `Organization` (footer).
- Redirect 301 `/correa-bano-aceite` → `/correa-distribucion-sumergida`.
- Imágenes WebP, lazy loading, `<Image>` optimizado, fuentes precargadas. Targets: LCP <2.5s, CLS <0.1, INP <200ms.
- Google Analytics 4 listo (placeholder de Measurement ID).

## Plan de ejecución

1. **Fundamentos**: tema (negro/amarillo), tipografía Outfit+Inter, logo extraído, layout root (header/footer/WhatsApp/breadcrumbs), helpers SEO (`<Head>` por ruta, sitemap, robots), formulario + email.
2. **Home**: hero promo 999 €, urgencia, modelos afectados (grid con logos marca), proceso, garantía, FAQ, mapa, formulario, schema AutoRepair + FAQ.
3. **Pilares** PureTech, EcoBoost y wet-belt genérico (contenido completo, tablas, FAQ, schema Service + FAQ).
4. **13 páginas de modelo** generadas con plantilla del brief, contenido específico por modelo (motor, años afectados, síntomas, precio).
5. **Blog**: índice + 10 artículos largos con schema Article y enlaces internos al pilar correspondiente.
6. **Páginas de soporte**: precios, garantía, recogida-entrega, sobre-nosotros, contacto, 3 legales.
7. **QA final**: checklist del brief (sitemap, robots, schema válido, breadcrumbs, WhatsApp, OG tags, mobile, redirect 301).

## Detalles técnicos

- TanStack Start (SSR nativo, equivalente a Next.js para SEO de Google).
- File-based routing en `src/routes/` (cada URL = un archivo `.tsx` con su `head()`).
- Tailwind v4 con tokens custom en `src/styles.css` para la paleta StopCars.
- Lovable Cloud para el endpoint del formulario (envío de email vía Resend) — sin login de usuarios.
- Sitemap servido desde `src/routes/api/sitemap[.]xml.ts`, robots desde `public/robots.txt`.

## Lo que NO entra (avísame si lo quieres)

- Reservas online con calendario.
- Área cliente / login.
- Pasarela de pago (paga en taller).
- Multi-idioma (solo es-ES).

Cuando apruebes, empiezo por los fundamentos + Home y voy avanzando por bloques. Te iré mostrando avances para que valides antes de pasar a modelos y blog.
