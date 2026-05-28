/**
 * StopCars Madrid — datos centralizados del negocio.
 * Edita aquí dirección, email, redes y URLs reales para que se reflejen en
 * NAP, schema JSON-LD, footer y CTAs de toda la web.
 */

export interface Branch {
  id: string;
  name: string;
  address: string;
  district: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  geo: { lat: number; lng: number };
  hours: { weekdays: string; saturday: string; sunday: string };
  googleMaps: string;
}

export const BRANCHES: Branch[] = [
  {
    id: "usera",
    name: "StopCars Usera (Madrid)",
    address: "C. de Ferroviarios, 57",
    district: "Usera",
    city: "Madrid",
    region: "Comunidad de Madrid",
    postalCode: "28026",
    country: "ES",
    phone: "+34624687725",
    phoneDisplay: "+34 624 68 77 25",
    whatsapp: "34624687725",
    geo: { lat: 40.38395, lng: -3.70554 },
    hours: {
      weekdays: "Lunes a Viernes 9:00 – 14:00 y 15:00 – 19:00",
      saturday: "Sábado 9:00 – 14:00",
      sunday: "Domingo cerrado",
    },
    googleMaps: "https://share.google/xwAnepSQ8bGOgoj00",
  },
  {
    id: "alcorcon",
    name: "StopCars Alcorcón",
    address: "C. León, 85RC+G4",
    district: "Alcorcón",
    city: "Alcorcón",
    region: "Comunidad de Madrid",
    postalCode: "28922",
    country: "ES",
    phone: "+34667298144",
    phoneDisplay: "+34 667 29 81 44",
    whatsapp: "34667298144",
    geo: { lat: 40.3489, lng: -3.8295 },
    hours: {
      weekdays: "Lunes a Viernes 9:00 – 14:00 y 15:00 – 19:00",
      saturday: "Sábado 9:00 – 14:00",
      sunday: "Domingo cerrado",
    },
    googleMaps: "https://share.google/6Dtw0JHnaNPQyRiaH",
  },
];

const main = BRANCHES[0];

export const SITE = {
  name: "StopCars",
  legalName: "StopCars Madrid",
  tagline: "Especialistas en Correa de Distribución Sumergida",
  domain: "https://www.stopcars.org",

  // Compatibilidad: datos de la sucursal principal (Usera)
  city: main.city,
  region: main.region,
  country: main.country,
  phone: main.phone,
  phoneDisplay: main.phoneDisplay,
  whatsapp: main.whatsapp,
  whatsappMsg:
    "Hola%2C%20quiero%20información%20sobre%20la%20correa%20de%20distribución",
  email: "info@stopcarsmadrid.es",
  address: main.address,
  district: main.district,
  postalCode: main.postalCode,
  geo: main.geo,
  hours: main.hours,
  rating: { value: "4.9", count: "127" },
  social: {
    facebook: "https://www.facebook.com/stopcarsmadrid",
    instagram: "https://www.instagram.com/stopcarsmadrid",
    googleMaps: main.googleMaps,
  },
  ga4: "G-XXXXXXXXXX",

  promoPrice: "999,00 €",
};

export const whatsappUrl = (msg?: string, whatsapp = SITE.whatsapp) =>
  `https://wa.me/${whatsapp}?text=${msg ?? SITE.whatsappMsg}`;

export const telUrl = `tel:${SITE.phone}`;

export const canonical = (path: string) =>
  `${SITE.domain}${path === "/" ? "" : path.startsWith("/") ? path : `/${path}`}`;
