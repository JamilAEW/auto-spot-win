import { createFileRoute } from "@tanstack/react-router";
import { Shield, FileText, Clock, Wrench } from "lucide-react";
import { buildSeo, ldScript, breadcrumbJsonLd } from "@/lib/seo";
import { CTAButtons } from "@/components/layout/CTAButtons";
import { Section, SectionHeader } from "@/components/Section";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const Route = createFileRoute("/garantia")({
  head: () => ({
    ...buildSeo({
      title: "Garantía 12 Meses Cambio Correa | StopCars Madrid",
      description: "Garantía de 12 meses o 20.000 km en todos los cambios de correa de distribución sumergida PureTech y EcoBoost. Trabajo y recambios cubiertos.",
      path: "/garantia",
    }),
    scripts: [ldScript(breadcrumbJsonLd([{ name: "Inicio", path: "/" }, { name: "Garantía", path: "/garantia" }]))],
  }),
  component: GarantiaPage,
});

function GarantiaPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Garantía", path: "/garantia" }]} />
      <section className="bg-carbon">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <p className="mb-4 inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary">Tranquilidad total</p>
          <h1 className="font-display text-4xl font-black uppercase md:text-6xl">Garantía <span className="text-primary">12 meses</span> / 20.000 km</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">Cubrimos por escrito el trabajo y los recambios. Si algo no está perfecto, lo solucionamos sin coste.</p>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Shield, t: "12 meses", d: "O 20.000 km, lo que ocurra primero." },
            { icon: Wrench, t: "Trabajo y recambios", d: "Cubrimos mano de obra y todas las piezas montadas." },
            { icon: FileText, t: "Por escrito", d: "Garantía documentada en factura, oficial y trazable." },
            { icon: Clock, t: "Respuesta rápida", d: "Si surge un problema, te atendemos en 24–48 h." },
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
        <SectionHeader eyebrow="Qué cubre" title="Condiciones de la garantía" />
        <div className="prose prose-invert max-w-3xl text-muted-foreground">
          <h3>Cubierto por la garantía</h3>
          <ul>
            <li>Defectos de fabricación de cualquier recambio montado.</li>
            <li>Fallos derivados del montaje (mano de obra).</li>
            <li>Sustitución sin coste de la pieza defectuosa y de la mano de obra para reemplazarla.</li>
          </ul>
          <h3>No cubierto</h3>
          <ul>
            <li>Daños por mal uso, accidente o manipulación posterior.</li>
            <li>Otras averías no relacionadas con el trabajo realizado.</li>
            <li>Mantenimientos posteriores no realizados según fabricante.</li>
          </ul>
          <h3>Cómo activar la garantía</h3>
          <ol>
            <li>Contacta con nosotros por teléfono o WhatsApp.</li>
            <li>Aporta la factura del trabajo original.</li>
            <li>Te citamos en 24–48 h para revisar el coche.</li>
            <li>Si procede garantía, reparamos sin coste.</li>
          </ol>
        </div>
      </Section>

      <section className="bg-carbon py-14"><div className="mx-auto max-w-3xl px-4 text-center md:px-6"><h2 className="font-display text-3xl font-black uppercase md:text-5xl">Reserva con <span className="text-primary">garantía total</span></h2><div className="mt-6 flex justify-center"><CTAButtons /></div></div></section>
    </>
  );
}
