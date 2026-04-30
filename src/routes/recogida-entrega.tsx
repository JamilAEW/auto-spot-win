import { createFileRoute } from "@tanstack/react-router";
import { Truck, MapPin, Clock, Shield } from "lucide-react";
import { buildSeo, ldScript, breadcrumbJsonLd } from "@/lib/seo";
import { CTAButtons, WhatsAppCTA } from "@/components/layout/CTAButtons";
import { Section, SectionHeader } from "@/components/Section";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/recogida-entrega")({
  head: () => ({
    ...buildSeo({
      title: "Recogida y Entrega Gratis Madrid | Cambio Correa | StopCars",
      description: "Servicio gratuito de recogida y entrega de tu coche en toda Madrid para el cambio de correa de distribución PureTech y EcoBoost. Cero esperas.",
      path: "/recogida-entrega",
    }),
    scripts: [ldScript(breadcrumbJsonLd([{ name: "Inicio", path: "/" }, { name: "Recogida y entrega", path: "/recogida-entrega" }]))],
  }),
  component: RecogidaPage,
});

function RecogidaPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Recogida y entrega", path: "/recogida-entrega" }]} />
      <section className="bg-carbon">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <p className="mb-4 inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary">Servicio incluido</p>
          <h1 className="font-display text-4xl font-black uppercase md:text-6xl">Recogida y entrega <span className="text-primary">gratis</span> en Madrid</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">Te recogemos el coche en casa o el trabajo, hacemos el cambio y te lo devolvemos el mismo día. Sin desplazamientos, sin esperas.</p>
          <div className="mt-7"><CTAButtons /></div>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Truck, t: "Recogida en tu domicilio", d: "Te recogemos el coche donde nos digas dentro de Madrid capital y área metropolitana." },
            { icon: Clock, t: "Cambio el mismo día", d: "Realizamos el cambio en 4–6 horas y te entregamos el coche por la tarde." },
            { icon: MapPin, t: "Toda Madrid", d: "Cubrimos M-30, M-40 y municipios cercanos: Alcorcón, Móstoles, Getafe, Leganés, etc." },
            { icon: Shield, t: "Conductor profesional", d: "Tu coche viaja con un conductor con seguro y experiencia. Tranquilidad total." },
          ].map((v) => (
            <div key={v.t} className="rounded-xl border border-border bg-surface p-6">
              <v.icon className="h-10 w-10 text-primary" />
              <h3 className="mt-4 font-display text-xl font-bold">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="surface">
        <SectionHeader eyebrow="Cómo funciona" title="Proceso en 4 pasos" />
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Contactas por WhatsApp o teléfono y nos das tu dirección.",
            "Pasamos a recoger el coche a la hora que te venga bien.",
            "Hacemos el cambio en taller y te enviamos foto del proceso.",
            "Te devolvemos el coche el mismo día con factura.",
          ].map((p, i) => (
            <li key={i} className="rounded-xl border border-border bg-surface-elevated p-6">
              <span className="font-display text-3xl font-black text-primary">{i + 1}</span>
              <p className="mt-3 text-sm leading-relaxed">{p}</p>
            </li>
          ))}
        </ol>
      </Section>

      <section className="bg-carbon py-14"><div className="mx-auto max-w-3xl px-4 text-center md:px-6"><h2 className="font-display text-3xl font-black uppercase md:text-5xl">Reserva tu <span className="text-primary">recogida</span></h2><div className="mt-6 flex flex-wrap justify-center gap-3"><CTAButtons /><WhatsAppCTA label={`WhatsApp ${SITE.phoneDisplay}`} /></div></div></section>
    </>
  );
}
