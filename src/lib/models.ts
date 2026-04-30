/**
 * Catálogo de modelos afectados con su slug, motor y datos clave para
 * generar las páginas de modelo y los enlaces internos.
 */

export type ModelInfo = {
  slug: string;
  brand: string;
  model: string;
  engine: string;
  years: string;
  pillar: "puretech" | "ecoboost";
  highlights: string;
};

export const MODELS: ModelInfo[] = [
  {
    slug: "peugeot-208-puretech-madrid",
    brand: "Peugeot",
    model: "208",
    engine: "PureTech 1.2 (75/82/100/110/130 CV)",
    years: "2014–2022",
    pillar: "puretech",
    highlights:
      "Uno de los modelos PureTech más vendidos en España y el más afectado por el desgaste prematuro de la correa sumergida.",
  },
  {
    slug: "peugeot-308-puretech-madrid",
    brand: "Peugeot",
    model: "308",
    engine: "PureTech 1.2 (110/130 CV)",
    years: "2014–2022",
    pillar: "puretech",
    highlights:
      "El 308 PureTech sufre consumo de aceite anormal y traqueteo en frío. Cambio preventivo cada 100.000 km o 6 años.",
  },
  {
    slug: "peugeot-2008-puretech-madrid",
    brand: "Peugeot",
    model: "2008",
    engine: "PureTech 1.2 (110/130 CV)",
    years: "2013–2022",
    pillar: "puretech",
    highlights:
      "SUV urbano muy demandado en Madrid. Revisamos la correa sumergida y los testigos de presión de aceite.",
  },
  {
    slug: "peugeot-3008-puretech-madrid",
    brand: "Peugeot",
    model: "3008",
    engine: "PureTech 1.2 (130 CV)",
    years: "2016–2022",
    pillar: "puretech",
    highlights:
      "El 3008 con motor 1.2 PureTech requiere mantenimiento de correa especializado y aceite homologado Stellantis.",
  },
  {
    slug: "citroen-c3-puretech-madrid",
    brand: "Citroën",
    model: "C3",
    engine: "PureTech 1.2 (82/110 CV)",
    years: "2017–2022",
    pillar: "puretech",
    highlights:
      "Cambio de correa Dayco reforzada + tensores y bomba de aceite. Entrega el mismo día.",
  },
  {
    slug: "citroen-c4-puretech-madrid",
    brand: "Citroën",
    model: "C4",
    engine: "PureTech 1.2 (130 CV)",
    years: "2014–2022",
    pillar: "puretech",
    highlights:
      "Diagnóstico gratuito y cambio de correa sumergida con kit reforzado y mano de obra incluidos.",
  },
  {
    slug: "citroen-c4-cactus-puretech-madrid",
    brand: "Citroën",
    model: "C4 Cactus",
    engine: "PureTech 1.2 (110 CV)",
    years: "2014–2020",
    pillar: "puretech",
    highlights:
      "El C4 Cactus comparte plataforma y motor con el 208/2008. Cambio de correa preventivo recomendado.",
  },
  {
    slug: "opel-corsa-puretech-madrid",
    brand: "Opel",
    model: "Corsa",
    engine: "PureTech 1.2 (75/100/130 CV)",
    years: "2019–2023",
    pillar: "puretech",
    highlights:
      "Tras la integración en Stellantis el Corsa monta el motor PureTech. Mismo problema de correa sumergida.",
  },
  {
    slug: "opel-grandland-puretech-madrid",
    brand: "Opel",
    model: "Grandland",
    engine: "PureTech 1.2 (130 CV)",
    years: "2017–2023",
    pillar: "puretech",
    highlights:
      "SUV con motor PureTech: revisión y cambio de correa con kit reforzado en Madrid.",
  },
  {
    slug: "ds3-puretech-madrid",
    brand: "DS",
    model: "DS3",
    engine: "PureTech 1.2 (110/130 CV)",
    years: "2016–2022",
    pillar: "puretech",
    highlights:
      "Compacto premium afectado por la correa de distribución bañada en aceite.",
  },
  {
    slug: "ds7-puretech-madrid",
    brand: "DS",
    model: "DS7",
    engine: "PureTech 1.2 (130 CV)",
    years: "2018–2023",
    pillar: "puretech",
    highlights:
      "Cambio de correa PureTech con kit Dayco y aceite homologado Stellantis.",
  },
  {
    slug: "ford-fiesta-ecoboost-madrid",
    brand: "Ford",
    model: "Fiesta",
    engine: "EcoBoost 1.0 (100/125/140 CV)",
    years: "2012–2023",
    pillar: "ecoboost",
    highlights:
      "El Fiesta EcoBoost monta correa sumergida idéntica en concepto al PureTech. Riesgo de rotura grave si no se cambia.",
  },
  {
    slug: "ford-focus-ecoboost-madrid",
    brand: "Ford",
    model: "Focus",
    engine: "EcoBoost 1.0 (100/125 CV)",
    years: "2012–2023",
    pillar: "ecoboost",
    highlights:
      "Especialistas en correa húmeda EcoBoost: cambio cada 150.000 km o 10 años, antes si hay síntomas.",
  },
  {
    slug: "ford-ecosport-ecoboost-madrid",
    brand: "Ford",
    model: "EcoSport",
    engine: "EcoBoost 1.0 (125/140 CV)",
    years: "2014–2022",
    pillar: "ecoboost",
    highlights:
      "SUV compacto con motor EcoBoost: diagnóstico y cambio de correa sumergida en el día.",
  },
];

export const findModel = (slug: string) =>
  MODELS.find((m) => m.slug === slug);

export const PURETECH_MODELS = MODELS.filter((m) => m.pillar === "puretech");
export const ECOBOOST_MODELS = MODELS.filter((m) => m.pillar === "ecoboost");
