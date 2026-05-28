import { createFileRoute, notFound } from "@tanstack/react-router";
import { buildSeo, ldScript, faqJsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { findModel } from "@/lib/models";
import { ModelPage, modelFaqs } from "@/components/ModelPage";

const SLUG = "ford-fiesta-ecoboost-madrid";

export const Route = createFileRoute("/ford-fiesta-ecoboost-madrid")({
  head: () => {
    const m = findModel(SLUG)!;
    const faqs = modelFaqs(m);
    return {
      ...buildSeo({
        title: "Cambio Correa Ford Fiesta EcoBoost Madrid | StopCars",
        description: "Taller especialista en Ford Fiesta EcoBoost 1.0 en Madrid. Cambio de correa de distribución sumergida con kit Dayco reforzado y bomba de agua incluida. 2 días de trabajo. Garantía 24 meses.",
        path: `/${SLUG}`,
      }),
      scripts: [
        ldScript(faqJsonLd(faqs)),
        ldScript(serviceJsonLd(`Cambio Correa Distribución ${m.brand} ${m.model}`, `Cambio de correa sumergida en ${m.brand} ${m.model} con motor ${m.engine} en Madrid.`, undefined)),
        ldScript(breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Motor EcoBoost", path: "/motor-ecoboost" },
          { name: `${m.brand} ${m.model}`, path: `/${SLUG}` },
        ])),
      ],
    };
  },
  component: () => {
    const m = findModel(SLUG);
    if (!m) throw notFound();
    return <ModelPage model={m} />;
  },
});
