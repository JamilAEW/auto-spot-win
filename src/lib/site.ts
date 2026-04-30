/**
 * StopCars Madrid — datos centralizados del negocio.
 * Edita aquí dirección, email, redes y URLs reales para que se reflejen en
 * NAP, schema JSON-LD, footer y CTAs de toda la web.
 */

export const SITE = {
  name: "StopCars",
  legalName: "StopCars Madrid",
  tagline: "Especialistas en Correa de Distribución Sumergida",
  domain: "https://stopcarsmadrid.es",
  city: "Madrid",
  region: "Comunidad de Madrid",
  country: "ES",

  // Datos editables (rellenar con datos reales del taller)
  phone: "+34624687725",
  phoneDisplay: "+34 624 68 77 25",
  whatsapp: "34624687725",
  whatsappMsg:
    "Hola%2C%20quiero%20información%20sobre%20la%20correa%20de%20distribución",
  email: "info@stopcarsmadrid.es",
  address: "C. de Ferroviarios, 57",
  district: "Usera",
  postalCode: "28026",
  geo: { lat: 40.38395, lng: -3.70554 },
  hours: {
    weekdays: "Lunes a Viernes 8:30 – 19:00",
    saturday: "Sábado 9:00 – 14:00",
    sunday: "Domingo cerrado",
  },
  rating: { value: "4.9", count: "127" },
  social: {
    facebook: "https://www.facebook.com/stopcarsmadrid",
    instagram: "https://www.instagram.com/stopcarsmadrid",
    googleMaps: "https://maps.google.com/?cid=0",
  },
  ga4: "G-XXXXXXXXXX", // sustituir por Measurement ID real

  promoPrice: "399,00 €",
};

export const whatsappUrl = (msg?: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${msg ?? SITE.whatsappMsg}`;

export const telUrl = `tel:${SITE.phone}`;

export const canonical = (path: string) =>
  `${SITE.domain}${path === "/" ? "" : path.startsWith("/") ? path : `/${path}`}`;
