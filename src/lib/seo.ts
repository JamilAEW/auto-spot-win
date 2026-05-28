import { SITE, canonical, BRANCHES } from "./site";

interface SeoInput {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
  type?: "website" | "article";
}

export function buildSeo({
  title,
  description,
  path,
  image,
  noindex,
  type = "website",
}: SeoInput) {
  const url = canonical(path);
  const ogImage = image ?? `${SITE.domain}/og-default.jpg`;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "robots",
        content: noindex ? "noindex, nofollow" : "index, follow",
      },
      { name: "author", content: SITE.legalName },
      { name: "language", content: "es-ES" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:image", content: ogImage },
      { property: "og:locale", content: "es_ES" },
      { property: "og:site_name", content: SITE.name },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

// Helpers de schema JSON-LD
export const breadcrumbJsonLd = (
  items: { name: string; path: string }[],
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: canonical(item.path),
  })),
});

export const faqJsonLd = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const serviceJsonLd = (name: string, description: string, price?: string) => {
  const offers: Record<string, unknown> = {
    "@type": "Offer",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
  };
  if (price) offers.price = price;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "AutoRepair",
      name: SITE.legalName,
      telephone: SITE.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.address,
        addressLocality: SITE.city,
        addressRegion: SITE.region,
        postalCode: SITE.postalCode,
        addressCountry: SITE.country,
      },
    },
    areaServed: { "@type": "State", name: SITE.region },
    offers,
  };
};

export const autoRepairJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "@id": `${SITE.domain}/#business`,
  name: SITE.legalName,
  description:
    "Especialistas en correa de distribución sumergida PureTech y EcoBoost en Madrid. Cambio en el día con garantía 24 meses. 2 sucursales: Usera y Alcorcón.",
  url: SITE.domain,
  telephone: SITE.phone,
  email: SITE.email,
  image: `${SITE.domain}/og-default.jpg`,
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Credit Card",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address,
    addressLocality: SITE.city,
    addressRegion: SITE.region,
    postalCode: SITE.postalCode,
    addressCountry: SITE.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geo.lat,
    longitude: SITE.geo.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  areaServed: { "@type": "State", name: SITE.region },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: SITE.rating.value,
    reviewCount: SITE.rating.count,
    bestRating: "5",
  },
  hasMap: SITE.social.googleMaps,
  sameAs: [
    SITE.social.facebook,
    SITE.social.instagram,
    SITE.social.googleMaps,
  ],
  department: BRANCHES.map((b) => ({
    "@type": "AutoRepair",
    "@id": `${SITE.domain}/#branch-${b.id}`,
    name: b.name,
    telephone: b.phone,
    url: SITE.domain,
    image: `${SITE.domain}/og-default.jpg`,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: b.address,
      addressLocality: b.city,
      addressRegion: b.region,
      postalCode: b.postalCode,
      addressCountry: b.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: b.geo.lat,
      longitude: b.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    hasMap: b.googleMaps,
  })),
});

export const articleJsonLd = (input: {
  title: string;
  description: string;
  path: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: input.title,
  description: input.description,
  image: input.image ?? `${SITE.domain}/og-default.jpg`,
  datePublished: input.datePublished,
  dateModified: input.dateModified ?? input.datePublished,
  author: {
    "@type": "Organization",
    name: SITE.legalName,
  },
  publisher: {
    "@type": "Organization",
    name: SITE.legalName,
    logo: {
      "@type": "ImageObject",
      url: `${SITE.domain}/logo.png`,
    },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": canonical(input.path) },
});

// Genera scripts para head() de TanStack
export const ldScript = (data: object) => ({
  type: "application/ld+json",
  children: JSON.stringify(data),
});
