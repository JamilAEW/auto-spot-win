import { createFileRoute, notFound } from "@tanstack/react-router";
import { buildSeo, ldScript, faqJsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { findModel } from "@/lib/models";
import { ModelPage, modelFaqs } from "@/components/ModelPage";

const SLUG = "citroen-c3-puretech-madrid";

export const Route = createFileRoute("/citroen-c3-puretech-madrid")({
  head: () => {
    const m = findModel(SLUG)!;
    const faqs = modelFaqs(m);
    return {
      ...buildSeo({
        title: "Cambio Correa Citroën C3 PureTech Madrid | 999 € | StopCars",
        description: "Taller especialista en Citroën C3 PureTech 1.2 en Madrid. Cambio de correa de distribución sumergida con kit Dayco reforzado por 999 € con IVA y mano de obra. Garantía 24 meses. Entrega el mismo día.",
        path: `/${SLUG}`,
      }),
      scripts: [
        ldScript(faqJsonLd(faqs)),
        ldScript(serviceJsonLd(`Cambio Correa Distribución ${m.brand} ${m.model}`, `Cambio de correa sumergida en ${m.brand} ${m.model} con motor ${m.engine} en Madrid.`, "999")),
        ldScript(breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Motor PureTech", path: "/motor-puretech" },
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
