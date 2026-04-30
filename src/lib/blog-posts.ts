/**
 * Catálogo de artículos del blog StopCars.
 * El contenido completo se renderiza desde cada ruta /blog/[slug].
 */

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: "PureTech" | "EcoBoost" | "Mantenimiento";
  pillar: string;
  datePublished: string;
  readingMinutes: number;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "problema-correa-puretech",
    title: "El Problema de la Correa de Distribución PureTech: Qué Está Pasando con tu Motor",
    description:
      "Análisis completo del problema de la correa sumergida PureTech 1.0 y 1.2: por qué se desgasta, modelos afectados y cómo evitar averías de miles de euros.",
    excerpt:
      "Si tienes un Peugeot, Citroën, Opel o DS con motor PureTech, debes saber esto sobre la correa de distribución bañada en aceite.",
    category: "PureTech",
    pillar: "/motor-puretech",
    datePublished: "2026-01-15",
    readingMinutes: 9,
  },
  {
    slug: "sintomas-correa-puretech",
    title: "Síntomas de Correa PureTech Rota o Desgastada: 7 Señales que NO Debes Ignorar",
    description:
      "Aprende a identificar los 7 síntomas más comunes de fallo en la correa de distribución PureTech antes de que rompa el motor.",
    excerpt:
      "Traqueteo en frío, consumo de aceite, testigo encendido… estas son las señales que indican que tu correa PureTech está al límite.",
    category: "PureTech",
    pillar: "/motor-puretech",
    datePublished: "2026-01-22",
    readingMinutes: 7,
  },
  {
    slug: "cuando-cambiar-correa-puretech",
    title: "¿Cuándo Cambiar la Correa de Distribución PureTech? Intervalos y Factores de Riesgo",
    description:
      "Guía definitiva con intervalos en km y años para cambiar la correa PureTech según uso urbano, mixto o autovía.",
    excerpt:
      "Stellantis dice 100.000 km o 6 años. Pero la realidad varía mucho según cómo conduzcas. Te explicamos cuándo cambiarla de verdad.",
    category: "PureTech",
    pillar: "/motor-puretech",
    datePublished: "2026-02-05",
    readingMinutes: 8,
  },
  {
    slug: "precio-correa-puretech-2025",
    title: "Precio del Cambio de Correa PureTech en 2026: Comparativa Talleres Madrid",
    description:
      "Cuánto cuesta cambiar la correa de distribución PureTech en Madrid: desglose por modelo, comparativa concesionario vs taller especialista.",
    excerpt:
      "Precios reales 2026 del cambio de correa sumergida PureTech: desde 399 € en taller especialista hasta 1.200 € en concesionario.",
    category: "PureTech",
    pillar: "/motor-puretech",
    datePublished: "2026-02-12",
    readingMinutes: 6,
  },
  {
    slug: "garantia-stellantis-puretech",
    title: "Garantía Extendida Stellantis PureTech: Cómo Reclamar Paso a Paso",
    description:
      "Stellantis ha extendido la garantía del motor PureTech. Te explicamos qué cubre, requisitos y cómo reclamarla con éxito.",
    excerpt:
      "Si tu motor PureTech falla, puedes reclamar la garantía extendida de Stellantis. Aquí tienes la guía completa con todos los pasos.",
    category: "PureTech",
    pillar: "/motor-puretech",
    datePublished: "2026-02-20",
    readingMinutes: 8,
  },
  {
    slug: "ecoboost-correa-humeda",
    title: "Ford EcoBoost: La Correa Húmeda que También Falla (Y Nadie te Cuenta)",
    description:
      "El motor Ford EcoBoost 1.0 monta la misma correa sumergida que el PureTech. Riesgos, modelos afectados y mantenimiento correcto.",
    excerpt:
      "El problema del PureTech no es exclusivo de Stellantis: el EcoBoost de Ford lleva años teniendo la misma avería de correa húmeda.",
    category: "EcoBoost",
    pillar: "/motor-ecoboost",
    datePublished: "2026-03-03",
    readingMinutes: 7,
  },
  {
    slug: "consumo-aceite-puretech",
    title: "Consumo de Aceite Anormal en Motor PureTech: Causas y Soluciones",
    description:
      "Si tu PureTech consume más aceite del normal, puede ser síntoma de correa desgastada. Aprende a diagnosticarlo y solucionarlo.",
    excerpt:
      "Un motor PureTech sano no debería consumir más de 0,5 L cada 1.000 km. Si gasta más, hay un problema serio que debes revisar.",
    category: "PureTech",
    pillar: "/motor-puretech",
    datePublished: "2026-03-10",
    readingMinutes: 6,
  },
  {
    slug: "traqueteo-arranque-puretech",
    title: "Traqueteo al Arrancar el Motor PureTech: Causas Reales y Cómo Actuar",
    description:
      "El traqueteo en frío al arrancar es uno de los principales síntomas de correa PureTech desgastada. Diagnóstico y solución.",
    excerpt:
      "Ese tac-tac que escuchas al arrancar tu PureTech en frío no es normal. Te explicamos qué significa y por qué urge revisarlo.",
    category: "PureTech",
    pillar: "/motor-puretech",
    datePublished: "2026-03-18",
    readingMinutes: 5,
  },
  {
    slug: "modelos-afectados-puretech",
    title: "Lista Completa de Modelos PureTech Afectados por la Correa Sumergida (2014-2023)",
    description:
      "Listado actualizado de todos los modelos Peugeot, Citroën, Opel y DS afectados por el problema de la correa de distribución PureTech.",
    excerpt:
      "Más de 30 modelos Stellantis están afectados. Aquí tienes la lista completa por marca, modelo y años de fabricación.",
    category: "PureTech",
    pillar: "/motor-puretech",
    datePublished: "2026-03-25",
    readingMinutes: 7,
  },
  {
    slug: "diferencia-correa-cadena",
    title: "Correa de Distribución vs Cadena: Diferencias, Ventajas y Cuál es Mejor",
    description:
      "Diferencias entre correa y cadena de distribución, por qué los motores modernos usan correa sumergida y cómo afecta al mantenimiento.",
    excerpt:
      "¿Correa o cadena? Te explicamos las diferencias técnicas, los costes de mantenimiento y por qué los motores PureTech montan correa.",
    category: "Mantenimiento",
    pillar: "/correa-distribucion-sumergida",
    datePublished: "2026-04-02",
    readingMinutes: 6,
  },
];

export const findPost = (slug: string) =>
  BLOG_POSTS.find((p) => p.slug === slug);

export const recentPosts = (n = 3) =>
  [...BLOG_POSTS]
    .sort((a, b) => b.datePublished.localeCompare(a.datePublished))
    .slice(0, n);
