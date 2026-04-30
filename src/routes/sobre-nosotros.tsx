import { createFileRoute } from "@tanstack/react-router";
import { Award, Wrench, Shield, Users } from "lucide-react";
import { buildSeo, ldScript, breadcrumbJsonLd } from "@/lib/seo";
import { CTAButtons } from "@/components/layout/CTAButtons";
import { Section, SectionHeader } from "@/components/Section";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SITE } from "@/lib/site";
import workshop from "@/assets/hero-workshop.jpg";

export const Route = createFileRoute("/sobre-nosotros")({
  head: () => ({
    ...buildSeo({
      title: `Sobre Nosotros — Especialistas PureTech y EcoBoost | ${SITE.name} Madrid`,
      description: "Conoce StopCars Madrid: taller especialista en correa de distribución sumergida PureTech y EcoBoost. Más de 100 cambios al año con garantía 12 meses.",
      path: "/sobre-nosotros",
    }),
    scripts: [ldScript(breadcrumbJsonLd([{ name: "Inicio", path: "/" }, { name: "Sobre nosotros", path: "/sobre-nosotros" }]))],
  }),
  component: SobreNosotrosPage,
});

function SobreNosotrosPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Sobre nosotros", path: "/sobre-nosotros" }]} />
      <section className="bg-carbon">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <p className="mb-4 inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary">Quiénes somos</p>
          <h1 className="font-display text-4xl font-black uppercase md:text-6xl">Especialistas en <span className="text-primary">correa sumergida</span></h1>
          <p className="mt-5 max-w-3xl text-lg text-muted-foreground">StopCars Madrid es el taller de referencia en cambio de correa de distribución bañada en aceite para motores PureTech y EcoBoost. Honestidad, transparencia y mecánica de calidad.</p>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <img src={workshop} alt="Taller StopCars Madrid" width={1280} height={896} className="rounded-xl border border-border" />
          <div>
            <SectionHeader eyebrow="Nuestra historia" title="Nacidos para resolver un problema real" />
            <p className="text-lg leading-relaxed text-muted-foreground">
              Empezamos detectando que cada vez más clientes traían coches con motor PureTech y EcoBoost con la misma avería: la correa de distribución sumergida fallaba mucho antes de lo previsto. Decidimos especializarnos.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Hoy somos uno de los talleres con más experiencia en Madrid en este tipo de intervención. Trabajamos con kits Dayco reforzados, aceite homologado por fabricante y damos garantía de 12 meses por escrito.
            </p>
          </div>
        </div>
      </Section>

      <Section variant="surface">
        <SectionHeader eyebrow="Nuestros valores" title="¿Qué nos diferencia?" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Award, t: "Especialización real", d: "Solo trabajamos motores PureTech y EcoBoost. No somos un multimarca genérico." },
            { icon: Shield, t: "Garantía por escrito", d: "12 meses sobre trabajo y recambios. Cumplimos lo que firmamos." },
            { icon: Wrench, t: "Recambios originales", d: "Trabajamos con Dayco y aceite homologado. Sin atajos." },
            { icon: Users, t: "Trato directo", d: "Atendemos en persona, sin intermediarios. Te explicamos qué hacemos y por qué." },
          ].map((v) => (
            <div key={v.t} className="rounded-xl border border-border bg-surface-elevated p-6">
              <v.icon className="h-10 w-10 text-primary" />
              <h3 className="mt-4 font-display text-xl font-bold">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="En cifras" title="Confianza que se mide" />
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { n: "+500", t: "Cambios realizados" },
            { n: "4,9★", t: "Valoración media" },
            { n: "12 m", t: "Garantía estándar" },
            { n: "1 día", t: "Tiempo de entrega" },
          ].map((s) => (
            <div key={s.t} className="rounded-xl border border-border bg-surface p-6 text-center">
              <p className="font-display text-5xl font-black text-primary">{s.n}</p>
              <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">{s.t}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-carbon py-14"><div className="mx-auto max-w-3xl px-4 text-center md:px-6"><h2 className="font-display text-3xl font-black uppercase md:text-5xl">¿Confías en <span className="text-primary">nosotros</span>?</h2><div className="mt-6 flex justify-center"><CTAButtons /></div></div></section>
    </>
  );
}
