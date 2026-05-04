import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { buildSeo, ldScript, breadcrumbJsonLd } from "@/lib/seo";
import { CTAButtons, WhatsAppCTA } from "@/components/layout/CTAButtons";
import { Section, SectionHeader } from "@/components/Section";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SITE, telUrl, whatsappUrl, BRANCHES } from "@/lib/site";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    ...buildSeo({
      title: `Contacto Taller PureTech / EcoBoost Madrid | ${SITE.name}`,
      description: `Contacta con StopCars Madrid: WhatsApp ${SITE.phoneDisplay}, presupuesto en 5 minutos. Especialistas en correa de distribución sumergida PureTech y EcoBoost.`,
      path: "/contacto",
    }),
    scripts: [ldScript(breadcrumbJsonLd([{ name: "Inicio", path: "/" }, { name: "Contacto", path: "/contacto" }]))],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Contacto", path: "/contacto" }]} />
      <section className="bg-carbon">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <p className="mb-4 inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary">Contacta con nosotros</p>
          <h1 className="font-display text-4xl font-black uppercase md:text-6xl">Pide tu <span className="text-primary">presupuesto</span> en 5 minutos</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">Cuéntanos qué coche tienes y los síntomas que notas. Te llamamos o escribimos en menos de 1 hora.</p>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* Datos contacto */}
          <div>
            <SectionHeader eyebrow="2 Sucursales" title="Hablemos ahora" />
            <a href={`mailto:${SITE.email}`} className="mb-4 flex items-start gap-4 rounded-xl border border-border bg-surface p-5 transition hover:border-primary">
              <Mail className="mt-1 h-6 w-6 text-primary" />
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email general</p>
                <p className="mt-1 font-display text-lg font-bold">{SITE.email}</p>
              </div>
            </a>
            <div className="space-y-6">
              {BRANCHES.map((b) => (
                <div key={b.id} className="rounded-2xl border border-border bg-surface p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">{b.name}</p>
                  <div className="mt-3 space-y-3">
                    <a href={`tel:${b.phone}`} className="flex items-start gap-3 hover:text-primary">
                      <Phone className="mt-1 h-5 w-5 text-primary" />
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Teléfono</p>
                        <p className="font-display text-xl font-black">{b.phoneDisplay}</p>
                      </div>
                    </a>
                    <a href={whatsappUrl(undefined, b.whatsapp)} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-primary">
                      <MessageCircle className="mt-1 h-5 w-5 text-primary" />
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">WhatsApp</p>
                        <p className="font-display text-base font-bold">{b.phoneDisplay}</p>
                      </div>
                    </a>
                    <a href={b.googleMaps} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-primary">
                      <MapPin className="mt-1 h-5 w-5 text-primary" />
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Dirección</p>
                        <p className="font-display text-base font-bold">{b.address}, {b.postalCode} {b.city}</p>
                        <p className="text-xs text-muted-foreground">{b.district}</p>
                      </div>
                    </a>
                    <div className="flex items-start gap-3">
                      <Clock className="mt-1 h-5 w-5 text-primary" />
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Horario</p>
                        <p className="text-sm">{b.hours.weekdays}</p>
                        <p className="text-sm">{b.hours.saturday}</p>
                        <p className="text-sm text-muted-foreground">{b.hours.sunday}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formulario */}
          <div>
            <SectionHeader eyebrow="Formulario" title="Cuéntanos sobre tu coche" />
            <form
              action={whatsappUrl()}
              method="get"
              target="_blank"
              className="space-y-4 rounded-2xl border border-border bg-surface p-6 md:p-8"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-muted-foreground" htmlFor="nombre">Nombre *</label>
                  <input id="nombre" name="nombre" required className="w-full rounded-md border border-border bg-background px-4 py-3 text-base text-foreground outline-none focus:border-primary" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-muted-foreground" htmlFor="tel">Teléfono *</label>
                  <input id="tel" name="tel" type="tel" required className="w-full rounded-md border border-border bg-background px-4 py-3 text-base text-foreground outline-none focus:border-primary" />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-muted-foreground" htmlFor="modelo">Marca y modelo *</label>
                  <input id="modelo" name="modelo" required placeholder="Ej: Peugeot 208" className="w-full rounded-md border border-border bg-background px-4 py-3 text-base text-foreground outline-none focus:border-primary" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-muted-foreground" htmlFor="km">Kilómetros</label>
                  <input id="km" name="km" type="text" placeholder="Ej: 95.000" className="w-full rounded-md border border-border bg-background px-4 py-3 text-base text-foreground outline-none focus:border-primary" />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-muted-foreground" htmlFor="text">Síntomas o consulta</label>
                <textarea id="text" name="text" rows={4} placeholder="Cuéntanos qué notas en tu coche…" className="w-full rounded-md border border-border bg-background px-4 py-3 text-base text-foreground outline-none focus:border-primary" />
              </div>
              <div className="flex items-start gap-2 text-xs text-muted-foreground">
                <input id="rgpd" type="checkbox" required className="mt-1" />
                <label htmlFor="rgpd">He leído y acepto la <a href="/politica-privacidad" className="text-primary hover:underline">política de privacidad</a>.</label>
              </div>
              <button type="submit" className="w-full rounded-md bg-accent px-6 py-4 font-display text-base font-bold uppercase tracking-wide text-accent-foreground shadow-cta transition hover:-translate-y-0.5">
                Enviar por WhatsApp
              </button>
              <p className="text-xs text-muted-foreground">El formulario abre WhatsApp con los datos rellenos para que solo tengas que enviar.</p>
            </form>
          </div>
        </div>
      </Section>

      <section className="bg-carbon py-14"><div className="mx-auto max-w-3xl px-4 text-center md:px-6"><h2 className="font-display text-3xl font-black uppercase md:text-5xl">¿Prefieres <span className="text-primary">llamar</span>?</h2><div className="mt-6 flex flex-wrap justify-center gap-3"><CTAButtons /><WhatsAppCTA label={`WhatsApp ${SITE.phoneDisplay}`} /></div></div></section>
    </>
  );
}
