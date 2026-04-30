import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, X } from "lucide-react";
import { buildSeo, ldScript, faqJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { CTAButtons, WhatsAppCTA } from "@/components/layout/CTAButtons";
import { Section, SectionHeader } from "@/components/Section";
import { FAQList } from "@/components/FAQList";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SITE } from "@/lib/site";

const FAQS = [
  { q: "¿El precio incluye IVA?", a: "Sí. 399 € es el precio final con IVA, mano de obra y todos los recambios incluidos." },
  { q: "¿Hay sorpresas o extras?", a: "No. Te damos presupuesto cerrado por escrito antes de empezar. Si surge algo adicional, te llamamos para autorizarlo." },
  { q: "¿Qué formas de pago aceptáis?", a: "Efectivo y tarjeta de crédito/débito. Posibilidad de financiación a 3, 6 o 12 meses sin intereses." },
  { q: "¿Hacéis factura?", a: "Sí, factura detallada con todos los recambios y mano de obra desglosados. Útil para garantías y reclamaciones." },
];

export const Route = createFileRoute("/precios")({
  head: () => ({
    ...buildSeo({
      title: `Precio Cambio Correa Distribución PureTech / EcoBoost Madrid | ${SITE.name}`,
      description: "Precio cerrado 399 € para el cambio de correa de distribución sumergida PureTech y EcoBoost en Madrid. IVA, mano de obra, kit Dayco y aceite incluidos.",
      path: "/precios",
    }),
    scripts: [
      ldScript(faqJsonLd(FAQS)),
      ldScript(breadcrumbJsonLd([{ name: "Inicio", path: "/" }, { name: "Precios", path: "/precios" }])),
    ],
  }),
  component: PreciosPage,
});

const INCLUYE = [
  "Diagnóstico inicial gratuito",
  "Correa de distribución Dayco reforzada",
  "Tensor automático nuevo",
  "Rodillos guía nuevos",
  "Aceite homologado por fabricante",
  "Filtro de aceite nuevo",
  "Mano de obra de mecánico especialista",
  "Garantía 12 meses / 20.000 km",
  "Factura detallada",
];

const NO_INCLUYE = [
  "Bomba de aceite (si necesita cambio: presupuesto aparte)",
  "Reparaciones internas si la correa ya rompió",
];

function PreciosPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Precios", path: "/precios" }]} />
      <section className="bg-carbon">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <p className="mb-4 inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary">Precios cerrados</p>
          <h1 className="font-display text-4xl font-black uppercase md:text-6xl">Precio cambio correa <span className="text-primary">PureTech / EcoBoost</span></h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">Sin sorpresas. Presupuesto cerrado por escrito antes de empezar el trabajo.</p>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-3xl rounded-2xl border border-primary/40 bg-surface p-8 shadow-glow md:p-12">
          <p className="font-display text-sm font-bold uppercase tracking-widest text-primary">Cambio completo</p>
          <h2 className="mt-3 font-display text-7xl font-black md:text-8xl">399<span className="text-3xl text-primary">,00€</span></h2>
          <p className="mt-2 inline-block rounded-md bg-destructive px-3 py-1 text-xs font-bold uppercase tracking-wider text-destructive-foreground">IVA y mano de obra incluidos</p>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-display text-lg font-bold">Incluye</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {INCLUYE.map((b) => (
                  <li key={b} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{b}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-lg font-bold">No incluye</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {NO_INCLUYE.map((b) => (
                  <li key={b} className="flex items-start gap-2"><X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />{b}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButtons />
          </div>
        </div>
      </Section>

      <Section variant="surface">
        <SectionHeader eyebrow="Comparativa" title="¿Por qué pagar más en concesionario?" />
        <div className="overflow-x-auto rounded-xl border border-border bg-surface-elevated">
          <table className="w-full text-sm">
            <thead className="bg-surface text-left">
              <tr>
                <th className="p-4 font-display">Servicio</th>
                <th className="p-4 font-display">Concesionario</th>
                <th className="p-4 font-display">Taller genérico</th>
                <th className="p-4 font-display text-primary">StopCars</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr><td className="p-4">Cambio correa PureTech 1.2</td><td className="p-4">800 – 1.200 €</td><td className="p-4">500 – 700 €</td><td className="p-4 font-bold text-primary">399 €</td></tr>
              <tr><td className="p-4">Cambio correa EcoBoost 1.0</td><td className="p-4">700 – 1.100 €</td><td className="p-4">450 – 650 €</td><td className="p-4 font-bold text-primary">399 €</td></tr>
              <tr><td className="p-4">Diagnóstico previo</td><td className="p-4">50 – 80 €</td><td className="p-4">30 – 50 €</td><td className="p-4 font-bold text-primary">Gratis</td></tr>
              <tr><td className="p-4">Garantía</td><td className="p-4">12 meses</td><td className="p-4">3–6 meses</td><td className="p-4 font-bold text-primary">12 meses</td></tr>
              <tr><td className="p-4">Tiempo de entrega</td><td className="p-4">1–3 días</td><td className="p-4">1–2 días</td><td className="p-4 font-bold text-primary">Mismo día</td></tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="FAQ" title="Sobre el precio" align="center" />
        <div className="mx-auto max-w-3xl"><FAQList items={FAQS} /></div>
      </Section>

      <section className="bg-carbon py-14"><div className="mx-auto max-w-3xl px-4 text-center md:px-6"><h2 className="font-display text-3xl font-black uppercase md:text-5xl">Pide tu <span className="text-primary">presupuesto</span></h2><div className="mt-6 flex flex-wrap justify-center gap-3"><CTAButtons /><WhatsAppCTA label={`WhatsApp ${SITE.phoneDisplay}`} /></div></div></section>
    </>
  );
}
