import { Link } from "@tanstack/react-router";
import { CheckCircle2, AlertTriangle, Wrench, Clock, Shield, Award } from "lucide-react";
import { CTAButtons, WhatsAppCTA } from "@/components/layout/CTAButtons";
import { Section, SectionHeader } from "@/components/Section";
import { FAQList, type FAQItem } from "@/components/FAQList";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { UrgencyBanner } from "@/components/layout/UrgencyBanner";
import type { ModelInfo } from "@/lib/models";
import { SITE } from "@/lib/site";

interface PillarPageProps {
  pillar: "PureTech" | "EcoBoost";
  pillarPath: string;
  heroTitle: React.ReactNode;
  heroLead: string;
  heroImage: string;
  intervalKm: string;
  intervalYears: string;
  symptoms: { t: string; d: string }[];
  whatIs: React.ReactNode;
  why: React.ReactNode;
  models: ModelInfo[];
  faqs: FAQItem[];
}

export function PillarPage(p: PillarPageProps) {
  return (
    <>
      <Breadcrumbs items={[{ name: `Motor ${p.pillar}`, path: p.pillarPath }]} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-carbon">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `linear-gradient(180deg, transparent 0%, var(--background) 100%), url(${p.heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
          <div className="max-w-3xl">
            <p className="mb-4 inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              Motor {p.pillar} · Madrid
            </p>
            <h1 className="font-display text-4xl font-black uppercase leading-[1.05] md:text-6xl">
              {p.heroTitle}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/85 md:text-xl">{p.heroLead}</p>
            <div className="mt-8">
              <CTAButtons />
            </div>
          </div>
        </div>
      </section>

      <UrgencyBanner>
        <strong>⚠ INTERVALO RECOMENDADO:</strong> Cambio de correa cada{" "}
        <strong>{p.intervalKm}</strong> o <strong>{p.intervalYears}</strong>, lo que ocurra antes.
      </UrgencyBanner>

      {/* QUÉ ES */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow={`Motor ${p.pillar}`}
              title={<>¿Qué es la correa sumergida {p.pillar}?</>}
            />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              {p.whatIs}
            </div>
          </div>
          <aside className="rounded-2xl border border-primary/30 bg-surface p-6 shadow-glow md:p-8">
            <p className="font-display text-xs font-bold uppercase tracking-widest text-primary">
              Cambio de correa {p.pillar}
            </p>
            <h2 className="mt-2 font-display text-6xl font-black md:text-7xl">
              999<span className="text-2xl text-primary">,00€</span>
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">IVA y mano de obra incluidos</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {[
                "Correa Dayco reforzada",
                "Tensores y rodillos nuevos",
                "Aceite + filtro homologado",
                "Garantía 24 meses",
                "Entrega el mismo día",
              ].map((b) => (
                <li key={b} className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <WhatsAppCTA label={`WhatsApp ${SITE.phoneDisplay}`} />
            </div>
          </aside>
        </div>
      </Section>

      {/* SÍNTOMAS */}
      <Section variant="surface">
        <SectionHeader
          eyebrow="Diagnóstico"
          title={<>Síntomas de correa <span className="text-primary">{p.pillar}</span> al límite</>}
          description="Si tu coche presenta uno o varios de estos síntomas, llévalo a revisar cuanto antes."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {p.symptoms.map((s) => (
            <div key={s.t} className="rounded-xl border border-border bg-surface-elevated p-6">
              <AlertTriangle className="h-8 w-8 text-primary" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-bold">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* POR QUÉ */}
      <Section>
        <SectionHeader
          eyebrow="Por qué importa"
          title={<>¿Por qué es <span className="text-primary">tan grave</span>?</>}
        />
        <div className="prose prose-invert max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          {p.why}
        </div>
      </Section>

      {/* VENTAJAS */}
      <Section variant="surface">
        <SectionHeader
          eyebrow="StopCars Madrid"
          title={<>Tu taller especialista en {p.pillar}</>}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Award, t: `Especialistas ${p.pillar}`, d: "Herramientas y formación específica para este motor." },
            { icon: Clock, t: "Entrega el mismo día", d: "En 4–6 horas tu coche está listo." },
            { icon: Wrench, t: "Kit Dayco reforzado", d: "Recambios originales que respetan la garantía oficial." },
            { icon: Shield, t: "Garantía 24 meses", d: "Sobre el trabajo realizado y los recambios montados." },
          ].map((v) => (
            <div key={v.t} className="rounded-xl border border-border bg-surface-elevated p-6">
              <v.icon className="h-10 w-10 text-primary" aria-hidden="true" />
              <h3 className="mt-4 font-display text-xl font-bold">{v.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* MODELOS */}
      <Section>
        <SectionHeader
          eyebrow="Modelos compatibles"
          title={<>Modelos {p.pillar} que tratamos</>}
          description="Pulsa en tu modelo para ver detalles específicos y el kit de cambio."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {p.models.map((m) => (
            <Link
              key={m.slug}
              to={`/${m.slug}` as string}
              className="group flex items-center justify-between gap-4 rounded-lg border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-primary"
            >
              <div>
                <p className="font-display text-lg font-bold group-hover:text-primary">
                  {m.brand} {m.model}
                </p>
                <p className="text-sm text-muted-foreground">{m.engine} · {m.years}</p>
              </div>
              <span className="font-display text-2xl text-primary opacity-0 transition-opacity group-hover:opacity-100">→</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section variant="surface">
        <SectionHeader
          eyebrow="FAQ"
          title={`Preguntas frecuentes — ${p.pillar}`}
          align="center"
        />
        <div className="mx-auto max-w-3xl">
          <FAQList items={p.faqs} />
        </div>
      </Section>

      {/* CTA FINAL */}
      <section className="bg-carbon py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <h2 className="font-display text-3xl font-black uppercase md:text-5xl">
            ¿Listo para cambiar tu correa <span className="text-primary">{p.pillar}</span>?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Presupuesto cerrado en 5 minutos. Cambio el mismo día.
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButtons />
          </div>
        </div>
      </section>
    </>
  );
}
