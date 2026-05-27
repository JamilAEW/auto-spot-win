import { createFileRoute, Link } from "@tanstack/react-router";
import { buildSeo, ldScript, faqJsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { CTAButtons, WhatsAppCTA } from "@/components/layout/CTAButtons";
import { Section, SectionHeader } from "@/components/Section";
import { FAQList } from "@/components/FAQList";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { UrgencyBanner } from "@/components/layout/UrgencyBanner";
import { CheckCircle2 } from "lucide-react";
import wetBelt from "@/assets/wet-belt-closeup.jpg";
import dayco from "@/assets/dayco-kit.jpg";
import { SITE } from "@/lib/site";

const FAQS = [
  {
    q: "¿Qué es exactamente una correa de distribución sumergida?",
    a: "Es una correa de distribución que va alojada dentro del cárter del motor, en contacto permanente con el aceite. Sustituye a la cadena tradicional para reducir fricción, ruido y emisiones de CO2.",
  },
  {
    q: "¿Qué motores la usan?",
    a: "Principalmente PureTech 1.0 y 1.2 de Stellantis (Peugeot, Citroën, Opel, DS) y EcoBoost 1.0 de Ford. También algunos motores Volvo y Geely de la misma plataforma.",
  },
  {
    q: "¿Por qué da tantos problemas?",
    a: "El material de la correa se degrada por el contacto con el aceite y libera microfragmentos. Estos restos obstruyen el filtro y la bomba de aceite, lo que puede provocar rotura de la distribución y daños catastróficos al motor.",
  },
  {
    q: "¿Cómo se cambia?",
    a: "Hay que desmontar la tapa de distribución, vaciar el aceite, sustituir correa, tensores, rodillos y bomba de aceite si procede. Después se rellena con aceite homologado y filtro nuevo. En StopCars Madrid lo hacemos en 4-6 horas.",
  },
  {
    q: "¿Cuánto dura el cambio?",
    a: "Entregamos el coche el mismo día. La intervención completa toma entre 4 y 6 horas según modelo.",
  },
  {
    q: "¿Qué precio tiene en taller especialista?",
    a: "399 € en StopCars Madrid con IVA, mano de obra, kit Dayco reforzado, aceite y filtro homologados. Garantía 24 meses incluida.",
  },
];

export const Route = createFileRoute("/correa-distribucion-sumergida")({
  head: () => ({
    ...buildSeo({
      title: "Correa de Distribución Sumergida | StopCars Madrid",
      description:
        "Guía completa sobre la correa de distribución bañada en aceite (wet belt). Modelos afectados PureTech y EcoBoost, riesgos, mantenimiento y cambio en Madrid por 399 €.",
      path: "/correa-distribucion-sumergida",
    }),
    scripts: [
      ldScript(faqJsonLd(FAQS)),
      ldScript(
        serviceJsonLd(
          "Cambio de Correa de Distribución Sumergida",
          "Servicio especializado de cambio de correa wet belt para motores PureTech y EcoBoost en Madrid.",
          "399",
        ),
      ),
      ldScript(
        breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Correa de Distribución Sumergida", path: "/correa-distribucion-sumergida" },
        ]),
      ),
    ],
  }),
  component: CorreaSumergida,
});

function CorreaSumergida() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Correa Distribución Sumergida", path: "/correa-distribucion-sumergida" }]} />

      <section className="bg-carbon py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-4 inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary">
                Guía técnica
              </p>
              <h1 className="font-display text-4xl font-black uppercase leading-[1.05] md:text-6xl">
                Correa de Distribución <span className="text-primary">Sumergida</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-foreground/85 md:text-xl">
                Todo lo que necesitas saber sobre la correa <em>wet belt</em>: qué es, qué motores la montan, por qué falla y cómo cambiarla en Madrid sin sustos.
              </p>
              <div className="mt-8">
                <CTAButtons />
              </div>
            </div>
            <img
              src={wetBelt}
              alt="Correa de distribución sumergida en aceite con desgaste visible"
              width={1280}
              height={896}
              className="rounded-xl border border-border shadow-2xl"
            />
          </div>
        </div>
      </section>

      <UrgencyBanner>
        <strong>⚠ ATENCIÓN:</strong> Si tu coche monta correa sumergida y supera 80.000 km, revísala antes de quedarte tirado. Una rotura cuesta más de 3.000 €.
      </UrgencyBanner>

      <Section>
        <SectionHeader eyebrow="¿Qué es?" title="La correa que va dentro del aceite del motor" />
        <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
          <p>
            La <strong>correa de distribución sumergida</strong> —también
            llamada correa húmeda o <em>wet belt</em>— es una correa dentada
            que va alojada dentro del cárter del motor, en contacto continuo
            con el aceite lubricante.
          </p>
          <p>
            A diferencia de la correa tradicional (seca, fuera del motor) o de
            la cadena de distribución, esta correa se diseñó para reducir
            fricción, ruido y emisiones, contribuyendo a las normas Euro 6.
          </p>
          <p>
            El problema es que la <strong>goma se degrada</strong> con el
            contacto prolongado con el aceite, sobre todo si éste no es el
            específico homologado por el fabricante. Los microfragmentos que
            suelta obstruyen filtros y bomba de aceite con consecuencias
            graves.
          </p>
        </div>
      </Section>

      <Section variant="surface">
        <SectionHeader eyebrow="Motores afectados" title="¿Qué coches montan correa húmeda?" />
        <div className="grid gap-6 md:grid-cols-2">
          <Link to="/motor-puretech" className="group rounded-xl border border-border bg-surface-elevated p-8 transition hover:-translate-y-0.5 hover:border-primary">
            <h3 className="font-display text-2xl font-black group-hover:text-primary">Motor PureTech (Stellantis)</h3>
            <p className="mt-3 text-muted-foreground">PureTech 1.0 y 1.2 (3 cilindros) en Peugeot, Citroën, Opel y DS desde 2014.</p>
            <span className="mt-4 inline-block font-display text-sm font-bold uppercase tracking-wide text-primary">Ver detalle PureTech →</span>
          </Link>
          <Link to="/motor-ecoboost" className="group rounded-xl border border-border bg-surface-elevated p-8 transition hover:-translate-y-0.5 hover:border-primary">
            <h3 className="font-display text-2xl font-black group-hover:text-primary">Motor EcoBoost (Ford)</h3>
            <p className="mt-3 text-muted-foreground">EcoBoost 1.0 (3 cilindros) en Ford Fiesta, Focus, EcoSport, B-Max, C-Max y Puma desde 2012.</p>
            <span className="mt-4 inline-block font-display text-sm font-bold uppercase tracking-wide text-primary">Ver detalle EcoBoost →</span>
          </Link>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <img src={dayco} alt="Kit Dayco reforzado para correa de distribución" width={1280} height={896} className="rounded-xl border border-border" />
          <div>
            <SectionHeader eyebrow="Cambio profesional" title={<>Kit <span className="text-primary">Dayco reforzado</span></>} />
            <p className="text-lg leading-relaxed text-muted-foreground">
              Trabajamos con kits originales Dayco diseñados específicamente para correa sumergida. Incluyen correa, tensores, rodillos y, cuando es necesario, bomba de aceite.
            </p>
            <ul className="mt-6 space-y-2.5 text-base">
              {[
                "Correa Dayco con caucho HNBR resistente al aceite",
                "Tensor automático nuevo",
                "Aceite homologado por fabricante",
                "Filtro de aceite nuevo",
                "Diagnóstico de bomba de aceite incluido",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section variant="surface" id="faq">
        <SectionHeader eyebrow="FAQ" title="Preguntas frecuentes" align="center" />
        <div className="mx-auto max-w-3xl">
          <FAQList items={FAQS} />
        </div>
      </Section>

      <section className="bg-carbon py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <h2 className="font-display text-3xl font-black uppercase md:text-5xl">
            Cambia tu correa <span className="text-primary">hoy</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">399 € · IVA y mano de obra incluidos · Entrega el mismo día</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3"><CTAButtons /><WhatsAppCTA label={`WhatsApp ${SITE.phoneDisplay}`} /></div>
        </div>
      </section>
    </>
  );
}
