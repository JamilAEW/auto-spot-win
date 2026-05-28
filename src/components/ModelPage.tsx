import { Link } from "@tanstack/react-router";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import { CTAButtons, WhatsAppCTA } from "@/components/layout/CTAButtons";
import { Section, SectionHeader } from "@/components/Section";
import { FAQList } from "@/components/FAQList";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { UrgencyBanner } from "@/components/layout/UrgencyBanner";
import type { ModelInfo } from "@/lib/models";
import { SITE } from "@/lib/site";
import workshop from "@/assets/hero-workshop.jpg";

export function ModelPage({ model }: { model: ModelInfo }) {
  const pillarPath =
    model.pillar === "puretech" ? "/motor-puretech" : "/motor-ecoboost";
  const pillarName = model.pillar === "puretech" ? "PureTech" : "EcoBoost";
  const fullName = `${model.brand} ${model.model}`;

  const FAQS = [
    {
      q: `¿Cuánto cuesta cambiar la correa del ${fullName} en Madrid?`,
      a: `En StopCars Madrid el cambio de correa de tu ${fullName} con motor ${model.engine} cuesta 999 € con IVA, mano de obra, kit Dayco reforzado, aceite homologado y filtro nuevo. Garantía 24 meses incluida.`,
    },
    {
      q: `¿Cada cuánto debo cambiar la correa del ${fullName}?`,
      a: model.pillar === "puretech"
        ? `El fabricante recomienda 100.000 km o 6 años. Por seguridad, en uso urbano recomendamos adelantarlo a 80.000 km, sobre todo si notas síntomas como traqueteo o consumo de aceite.`
        : `Ford recomienda 150.000 km o 10 años. Por experiencia con el ${fullName}, conviene adelantar el cambio a 140.000 km si el coche se usa principalmente en ciudad.`,
    },
    {
      q: `¿Cuánto tarda el cambio en mi ${fullName}?`,
      a: `Entre 4 y 6 horas. Si nos lo dejas por la mañana, lo recoges por la tarde. Servicio de recogida y entrega disponible en Madrid.`,
    },
    {
      q: `¿Qué garantía dais sobre el trabajo en el ${fullName}?`,
      a: `24 meses o 40.000 km sobre el trabajo y los recambios. Trabajamos con piezas Dayco originales que respetan la garantía oficial del fabricante.`,
    },
  ];

  return (
    <>
      <Breadcrumbs
        items={[
          { name: `Motor ${pillarName}`, path: pillarPath },
          { name: fullName, path: `/${model.slug}` },
        ]}
      />

      <section className="relative overflow-hidden bg-carbon">
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: `linear-gradient(180deg, transparent 0%, var(--background) 100%), url(${workshop})`, backgroundSize: "cover", backgroundPosition: "center" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-3 inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary">
                Motor {pillarName} · Madrid
              </p>
              <h1 className="font-display text-4xl font-black uppercase leading-[1.05] md:text-6xl">
                Cambio de correa{" "}
                <span className="text-primary">{fullName}</span> {model.engine.split(" ")[0]} en Madrid
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-foreground/85 md:text-xl">
                {model.highlights}
              </p>
              <p className="mt-3 text-base text-muted-foreground">
                Versiones cubiertas: <strong>{model.engine}</strong> · Años: <strong>{model.years}</strong>.
              </p>
              <div className="mt-8"><CTAButtons /></div>
            </div>
            <aside className="rounded-2xl border border-primary/30 bg-surface p-6 shadow-glow md:p-8">
              <p className="font-display text-xs font-bold uppercase tracking-widest text-primary">
                Cambio correa {fullName}
              </p>
              <h2 className="mt-2 font-display text-6xl font-black md:text-7xl">
                999<span className="text-2xl text-primary">,00€</span>
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">IVA y mano de obra incluidos</p>
              <ul className="mt-5 space-y-2 text-sm">
                {[
                  `Kit Dayco específico para ${fullName}`,
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
              <div className="mt-6"><WhatsAppCTA label={`WhatsApp ${SITE.phoneDisplay}`} /></div>
            </aside>
          </div>
        </div>
      </section>

      <UrgencyBanner>
        <strong>⚠ {fullName}:</strong> si notas traqueteo en frío, consumo de aceite o testigo de presión, no esperes — la rotura puede dañar el motor por completo.
      </UrgencyBanner>

      <Section>
        <SectionHeader
          eyebrow={`${fullName} · Síntomas`}
          title={<>Cuándo cambiar la correa de tu {fullName}</>}
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Traqueteo en frío", d: `Sonido tac-tac al arrancar el ${fullName} en frío.` },
            { t: "Consumo de aceite", d: "Más de 0,5 L cada 1.000 km es señal de correa degradada." },
            { t: "Testigo de aceite", d: "Indica obstrucción del filtro o la bomba: para el coche." },
            { t: "Pérdida de potencia", d: "La ECU reduce prestaciones para proteger el motor." },
            { t: "Olor a goma quemada", d: "Fricción anómala dentro del cárter." },
            { t: "Más de 80.000 km / 5 años", d: "Aunque no notes nada, el cambio preventivo es lo más seguro." },
          ].map((s) => (
            <div key={s.t} className="rounded-xl border border-border bg-surface p-6">
              <AlertTriangle className="h-7 w-7 text-primary" aria-hidden="true" />
              <h3 className="mt-3 font-display text-lg font-bold">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="surface">
        <SectionHeader
          eyebrow="Qué incluye"
          title={<>Cambio completo en tu <span className="text-primary">{fullName}</span></>}
        />
        <div className="grid gap-6 md:grid-cols-2">
          <ul className="space-y-3 text-base">
            {[
              `Diagnóstico gratuito específico ${fullName}`,
              "Kit distribución Dayco reforzado (correa + tensores + rodillos)",
              "Bomba de aceite revisada y sustituida si procede",
              "Aceite homologado por el fabricante",
              "Filtro de aceite nuevo",
              "Mano de obra de mecánico especialista",
              "Garantía 24 meses / 40.000 km",
              "Factura detallada para historial del coche",
            ].map((b) => (
              <li key={b} className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-xl border border-border bg-surface-elevated p-6">
            <h3 className="font-display text-xl font-bold">Comparativa de precio</h3>
            <table className="mt-4 w-full text-sm">
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-2 text-muted-foreground">Concesionario oficial</td>
                  <td className="py-2 text-right font-bold line-through">800 – 1.200 €</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 text-muted-foreground">Taller genérico</td>
                  <td className="py-2 text-right font-bold">500 – 700 €</td>
                </tr>
                <tr>
                  <td className="py-2 font-bold text-primary">StopCars especialista</td>
                  <td className="py-2 text-right font-display text-2xl font-black text-primary">999 €</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-4 text-xs text-muted-foreground">Precios orientativos a fecha 2026. Presupuesto cerrado por escrito antes de empezar.</p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="FAQ" title={`Preguntas sobre el ${fullName}`} align="center" />
        <div className="mx-auto max-w-3xl">
          <FAQList items={FAQS} />
        </div>
      </Section>

      <section className="bg-carbon py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <h2 className="font-display text-3xl font-black uppercase md:text-5xl">
            ¿Tienes un <span className="text-primary">{fullName}</span>?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Pide tu presupuesto cerrado en 5 minutos. Cambio el mismo día con garantía 24 meses.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CTAButtons />
          </div>
          <p className="mt-6 text-sm">
            <Link to={pillarPath} className="text-primary hover:underline">← Ver toda la información del motor {pillarName}</Link>
          </p>
        </div>
      </section>
    </>
  );
}

export const modelFaqs = (m: ModelInfo) => {
  const fullName = `${m.brand} ${m.model}`;
  const interval =
    m.pillar === "puretech" ? "100.000 km o 6 años" : "150.000 km o 10 años";
  return [
    {
      q: `¿Cuánto cuesta cambiar la correa del ${fullName} en Madrid?`,
      a: `999 € con IVA, mano de obra, kit Dayco reforzado, aceite homologado y filtro nuevo. Garantía 24 meses incluida.`,
    },
    {
      q: `¿Cada cuánto debo cambiar la correa del ${fullName}?`,
      a: `El fabricante recomienda ${interval}. En uso urbano intensivo conviene adelantarlo si aparecen síntomas.`,
    },
    {
      q: `¿Cuánto tarda el cambio?`,
      a: `Entre 4 y 6 horas. Entrega el mismo día. Recogida y entrega disponible en Madrid.`,
    },
    {
      q: `¿Qué garantía dais?`,
      a: `24 meses o 40.000 km sobre trabajo y recambios.`,
    },
  ];
};
