import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Wrench, Clock, Shield, Award, AlertTriangle, CheckCircle2, MapPin, Phone,
} from "lucide-react";
import { buildSeo, ldScript, faqJsonLd } from "@/lib/seo";
import { SITE, telUrl, BRANCHES, whatsappUrl } from "@/lib/site";
import { CTAButtons, WhatsAppCTA } from "@/components/layout/CTAButtons";
import { UrgencyBanner } from "@/components/layout/UrgencyBanner";
import { Section, SectionHeader } from "@/components/Section";
import { FAQList } from "@/components/FAQList";
import { MODELS } from "@/lib/models";

import heroWorkshop from "@/assets/hero-workshop.jpg";
import flyerCorrea from "@/assets/flyer-cambia-correa.png";
import flyerMejor from "@/assets/flyer-mejor-opcion.png";
import wetBeltImg from "@/assets/wet-belt-closeup.jpg";
import sucursalUsera from "@/assets/sucursal-usera.jpg";
import sucursalAlcorcon from "@/assets/sucursal-alcorcon.jpg";

const BRANCH_PHOTOS: Record<string, string> = {
  usera: sucursalUsera,
  alcorcon: sucursalAlcorcon,
};

const HOME_FAQS = [
  {
    q: "¿Qué es la correa de distribución bañada en aceite?",
    a: "Es una correa de distribución que va sumergida en el cárter del motor, lubricada por el propio aceite del motor. La montan los motores PureTech 1.0 y 1.2 de Stellantis (Peugeot, Citroën, Opel, DS) y los EcoBoost 1.0 de Ford. El problema es que el material de la correa se degrada con el aceite y libera partículas que pueden obstruir la bomba de aceite y provocar la rotura del motor.",
  },
  {
    q: "¿Cuánto cuesta cambiar la correa PureTech en Madrid?",
    a: "En StopCars Madrid el precio cerrado es 399 € con IVA y mano de obra incluidos. Incluye correa Dayco reforzada, tensores, rodillos, aceite homologado Stellantis y filtro nuevo. En concesionario el mismo trabajo cuesta entre 800 € y 1.200 €.",
  },
  {
    q: "¿Cuánto tarda el cambio de correa de distribución?",
    a: "Entregamos tu coche el mismo día. La intervención dura entre 4 y 6 horas según el modelo. Si nos lo dejas por la mañana, lo recoges por la tarde.",
  },
  {
    q: "¿Qué garantía ofrecéis?",
    a: "24 meses o 40.000 km de garantía sobre el trabajo realizado y los recambios. Trabajamos con piezas Dayco originales, lo que respeta la garantía oficial del fabricante.",
  },
  {
    q: "¿Por qué los motores PureTech y EcoBoost dan tantos problemas de correa?",
    a: "Porque la correa va bañada en aceite y, al desgastarse, libera microfragmentos de goma que obstruyen el filtro y la bomba de aceite. Si no se cambia preventivamente, puede romper la distribución y dañar gravemente el motor — una reparación que suele superar los 3.000 €.",
  },
  {
    q: "¿Cubre Stellantis la avería en garantía?",
    a: "Stellantis ha extendido la garantía del motor PureTech para algunos casos. En nuestro blog te explicamos paso a paso cómo reclamarla y qué requisitos debes cumplir.",
  },
];

const PROCESO = [
  { step: "1", title: "Diagnóstico gratuito", desc: "Analizamos tu vehículo y te confirmamos si la correa necesita cambio." },
  { step: "2", title: "Presupuesto cerrado", desc: "Te damos un precio cerrado por escrito. Sin sorpresas ni extras." },
  { step: "3", title: "Cambio el mismo día", desc: "En 4–6 horas tu coche está listo. Trabajamos con kit Dayco reforzado." },
  { step: "4", title: "Garantía y entrega", desc: "24 meses de garantía. Te entregamos el coche con factura detallada." },
];

const VENTAJAS = [
  { icon: Award, title: "Especialistas PureTech", desc: "Experiencia y herramientas específicas para motores 1.2 PureTech y 1.0 EcoBoost." },
  { icon: Clock, title: "Más rápido", desc: "Entregamos tu coche en menos de 1 día. Mantenimiento exprés sin esperas." },
  { icon: Wrench, title: "El precio más competitivo", desc: "Menos de la mitad que en concesionario. Presupuesto cerrado sin sorpresas." },
  { icon: Shield, title: "Trabajo garantizado", desc: "24 meses o 40.000 km de garantía. Recambios Dayco originales reforzados." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    ...buildSeo({
      title: "Taller PureTech y EcoBoost Madrid | Correa Distribución Sumergida",
      description: `Especialistas en correa de distribución bañada en aceite (PureTech 1.2 y EcoBoost 1.0) en Madrid. Presupuesto gratis en 5 min. Garantía 24 meses. ☎ ${SITE.phoneDisplay}`,
      path: "/",
    }),
    scripts: [ldScript(faqJsonLd(HOME_FAQS))],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-carbon">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(180deg, transparent 0%, var(--background) 100%), url(${heroWorkshop})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-10 lg:py-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                <MapPin className="h-3.5 w-3.5" /> Madrid · Especialistas certificados
              </div>
              <h1 className="font-display text-4xl font-black uppercase leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
                Especialistas en{" "}
                <span className="text-primary">Correa de Distribución Sumergida</span>{" "}
                en Madrid
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/85 md:text-xl">
                Si tienes un Peugeot, Citroën, Opel o DS con motor PureTech 1.2 o un Ford con EcoBoost 1.0 y notas <strong>consumo de aceite, ruido al arrancar o el testigo de presión encendido</strong>, somos el taller que necesitas.
              </p>
              <div className="mt-8">
                <CTAButtons />
              </div>

              {/* Marcas afectadas */}
              <div className="mt-10 border-t border-border/60 pt-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Marcas afectadas
                </p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-display text-base font-bold text-foreground/80">
                  <span>PEUGEOT</span><span className="text-primary">·</span>
                  <span>CITROËN</span><span className="text-primary">·</span>
                  <span>OPEL</span><span className="text-primary">·</span>
                  <span>DS</span><span className="text-primary">·</span>
                  <span>FORD</span>
                </div>
              </div>
            </div>

            {/* Ficha precio */}
            <div className="relative">
              <div className="rounded-2xl border border-primary/30 bg-surface p-6 shadow-glow md:p-8">
                <p className="font-display text-sm font-bold uppercase tracking-widest text-primary">
                  Cambio Correa PureTech / EcoBoost
                </p>
                <h2 className="mt-3 font-display text-7xl font-black leading-none text-foreground md:text-8xl">
                  399<span className="text-3xl text-primary">,00€</span>
                </h2>
                <p className="mt-2 inline-block rounded-md bg-destructive px-3 py-1 text-xs font-bold uppercase tracking-wider text-destructive-foreground">
                  IVA y mano de obra incluidos
                </p>
                <ul className="mt-6 space-y-2.5 text-sm">
                  {[
                    "Correa reforzada Dayco",
                    "Tensores y rodillos nuevos",
                    "Aceite + filtro homologado",
                    "Mano de obra especializada",
                    "Garantía 24 meses",
                    "Entrega el mismo día",
                  ].map((b) => (
                    <li key={b} className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      <span className="text-foreground/90">{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <WhatsAppCTA label={`WhatsApp: ${SITE.phoneDisplay}`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* URGENCIA */}
      <UrgencyBanner>
        <strong>⚠ AVISO IMPORTANTE:</strong> El motor PureTech (1.0/1.2) y EcoBoost (1.0) presentan desgaste prematuro de la correa de distribución. Una rotura puede dañar gravemente el motor y costar más de 3.000 € en reparación.
      </UrgencyBanner>

      {/* MODELOS AFECTADOS */}
      <Section variant="surface" id="modelos">
        <SectionHeader
          eyebrow="Modelos afectados"
          title={<>¿Tu coche está en la lista?</>}
          description="Cubrimos los principales modelos Stellantis con motor PureTech y los Ford EcoBoost. Pulsa en tu modelo para ver los detalles del cambio de correa."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {MODELS.map((m) => (
            <Link
              key={m.slug}
              to={`/${m.slug}` as string}
              className="group flex items-center justify-between gap-4 rounded-lg border border-border bg-surface-elevated p-5 transition-all hover:-translate-y-0.5 hover:border-primary"
            >
              <div>
                <p className="font-display text-lg font-bold text-foreground group-hover:text-primary">
                  {m.brand} {m.model}
                </p>
                <p className="text-sm text-muted-foreground">{m.engine} · {m.years}</p>
              </div>
              <span className="font-display text-2xl text-primary opacity-0 transition-opacity group-hover:opacity-100">→</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* POR QUÉ ES IMPORTANTE */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Por qué importa"
              title={<>¿Por qué es <span className="text-primary">tan importante</span>?</>}
            />
            <ul className="space-y-5">
              {[
                { t: "La correa en aceite se desgasta más rápido", d: "El contacto continuo con aceite degrada el material y suelta partículas." },
                { t: "Puede romperse sin previo aviso", d: "No hay síntomas claros antes del fallo en muchos casos." },
                { t: "Su rotura puede dañar gravemente el motor", d: "Las válvulas chocan con los pistones y se destruye la culata." },
                { t: "La reparación puede costar más de 3.000 €", d: "Sustituir el motor o reconstruirlo es muy caro. Prevenir cuesta 399 €." },
              ].map((it) => (
                <li key={it.t} className="flex gap-4">
                  <AlertTriangle className="mt-1 h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <p className="font-display text-lg font-bold">{it.t}</p>
                    <p className="text-muted-foreground">{it.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img
              src={wetBeltImg}
              alt="Correa de distribución sumergida en aceite con desgaste visible"
              width={1280}
              height={896}
              loading="lazy"
              className="rounded-xl border border-border shadow-2xl"
            />
          </div>
        </div>
      </Section>

      {/* VENTAJAS */}
      <Section variant="surface">
        <SectionHeader
          eyebrow="StopCars Madrid"
          title={<>Es tu <span className="text-primary">mejor opción</span></>}
          description="Cuatro razones por las que somos el taller de referencia para motores PureTech y EcoBoost en Madrid."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {VENTAJAS.map((v) => (
            <div key={v.title} className="rounded-xl border border-border bg-surface-elevated p-6">
              <v.icon className="h-10 w-10 text-primary" aria-hidden="true" />
              <h3 className="mt-4 font-display text-xl font-bold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PROMO BANNER */}
      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-8 overflow-hidden rounded-2xl border border-primary/30 bg-surface p-8 md:grid-cols-2 md:p-10 lg:p-14">
            <div className="flex flex-col justify-center">
              <p className="font-display text-sm font-bold uppercase tracking-[0.25em] text-primary">
                Oferta vigente
              </p>
              <h2 className="mt-3 font-display text-3xl font-black leading-tight md:text-5xl">
                Cambio de Correa <span className="text-primary">PureTech</span> con correa sumergida
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                399,00 € — IVA y mano de obra incluidos. Entrega el mismo día. Garantía 24 meses.
              </p>
              <div className="mt-6">
                <CTAButtons />
              </div>
            </div>
            <div>
              <img
                src={flyerCorrea}
                alt="Promoción cambio correa distribución PureTech 399 € StopCars Madrid"
                width={1200}
                height={1200}
                loading="lazy"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <Section>
        <SectionHeader
          eyebrow="Cómo trabajamos"
          title={<>Proceso transparente, <span className="text-primary">sin sorpresas</span></>}
          description="De la primera llamada a la entrega del coche en menos de 24 horas."
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROCESO.map((p) => (
            <div key={p.step} className="relative rounded-xl border border-border bg-surface p-6">
              <span className="absolute -top-5 left-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary font-display text-lg font-black text-primary-foreground">
                {p.step}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* MEJOR OPCIÓN flyer */}
      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="order-2 md:order-1">
              <img
                src={flyerMejor}
                alt="StopCars es tu mejor opción para el cambio de correa de distribución"
                width={1200}
                height={1200}
                loading="lazy"
                className="rounded-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="font-display text-sm font-bold uppercase tracking-[0.25em] text-primary">
                Confianza
              </p>
              <h2 className="mt-3 font-display text-3xl font-black leading-tight md:text-5xl">
                Más de <span className="text-primary">100 clientes</span> nos avalan en Madrid
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Llevamos años especializándonos en motores PureTech y EcoBoost. Nuestros clientes valoran la honestidad del presupuesto, la rapidez del servicio y la garantía del trabajo.
              </p>
              <div className="mt-6 flex items-center gap-4 rounded-lg border border-border bg-background p-4">
                <div className="font-display text-5xl font-black text-primary">{SITE.rating.value}</div>
                <div>
                  <div className="text-warning" aria-label={`${SITE.rating.value} estrellas`}>★ ★ ★ ★ ★</div>
                  <p className="text-sm text-muted-foreground">{SITE.rating.count} reseñas verificadas</p>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  to="/sobre-nosotros"
                  className="inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-primary hover:underline"
                >
                  Conoce más sobre nosotros →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Section id="faq">
        <SectionHeader
          eyebrow="FAQ"
          title="Preguntas frecuentes"
          description="Resolvemos las dudas más habituales sobre el cambio de correa de distribución sumergida."
          align="center"
        />
        <div className="mx-auto max-w-3xl">
          <FAQList items={HOME_FAQS} />
        </div>
      </Section>

      {/* SUCURSALES */}
      <Section variant="surface" id="mapa">
        <SectionHeader
          eyebrow="Encuéntranos"
          title="¿Dónde estamos?"
          description="Tenemos 2 sucursales en la Comunidad de Madrid. Atendemos también con servicio de recogida y entrega a domicilio."
          align="center"
        />
        <div className="grid gap-8 lg:grid-cols-2">
          {BRANCHES.map((b) => (
            <article
              key={b.id}
              className="overflow-hidden rounded-xl border border-border bg-background shadow-sm transition hover:border-primary/60"
            >
              <div className="flex aspect-[4/3] w-full items-center justify-center bg-carbon">
                <img
                  src={BRANCH_PHOTOS[b.id]}
                  alt={`Fachada del taller ${b.name}`}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-black uppercase tracking-tight">
                  {b.name}
                </h3>
                <ul className="mt-4 space-y-3 text-sm">
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>
                      <strong>{b.address}</strong>
                      <br />
                      {b.postalCode} {b.city}, {b.region}
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <a href={`tel:${b.phone}`} className="hover:text-primary">
                      {b.phoneDisplay}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>
                      {b.hours.weekdays}
                      <br />
                      {b.hours.saturday}
                    </span>
                  </li>
                </ul>
                <div className="mt-5 overflow-hidden rounded-lg border border-border">
                  <iframe
                    title={`Mapa ${b.name}`}
                    src={`https://maps.google.com/maps?q=${b.geo.lat},${b.geo.lng}&z=15&output=embed`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-56 w-full border-0"
                  />
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  <a
                    href={`tel:${b.phone}`}
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 font-display text-xs font-bold uppercase tracking-wide text-primary-foreground hover:opacity-90"
                  >
                    Llamar
                  </a>
                  <a
                    href={whatsappUrl(undefined, b.whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md border border-border px-4 py-2 font-display text-xs font-bold uppercase tracking-wide hover:border-primary hover:text-primary"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={b.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md border border-border px-4 py-2 font-display text-xs font-bold uppercase tracking-wide hover:border-primary hover:text-primary"
                  >
                    Cómo llegar
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* CTA FINAL */}
      <section className="bg-carbon py-20 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-display text-3xl font-black uppercase leading-tight md:text-5xl">
            ¿Tu motor PureTech o EcoBoost necesita revisión?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Pide tu presupuesto gratuito ahora. Te respondemos en menos de 5 minutos.
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButtons />
          </div>
        </div>
      </section>
    </>
  );
}
