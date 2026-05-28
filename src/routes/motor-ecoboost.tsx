import { createFileRoute } from "@tanstack/react-router";
import { buildSeo, ldScript, faqJsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { ECOBOOST_MODELS } from "@/lib/models";
import { PillarPage } from "@/components/PillarPage";
import heroImg from "@/assets/wet-belt-closeup.jpg";

const FAQS = [
  {
    q: "¿Qué motores Ford EcoBoost llevan correa húmeda?",
    a: "El motor EcoBoost 1.0 de 3 cilindros que monta Ford Fiesta, Focus, EcoSport, B-Max, C-Max y Puma desde 2012. Es la misma tecnología wet belt que el PureTech.",
  },
  {
    q: "¿Cada cuánto cambiar la correa EcoBoost 1.0?",
    a: "Ford recomienda 150.000 km o 10 años. Por experiencia, en uso urbano y con aceite no homologado conviene adelantarlo a 140.000 km. Si notas traqueteo o consumo de aceite, cámbiala ya.",
  },
  {
    q: "¿Es el mismo problema que el PureTech?",
    a: "Sí. La correa va sumergida en aceite y, al degradarse, libera partículas que obstruyen el filtro y la bomba de aceite. Riesgo idéntico de rotura grave del motor.",
  },
  {
    q: "¿Cuánto cuesta el cambio de correa EcoBoost?",
    a: "En StopCars Madrid ofrecemos presupuesto personalizado según modelo y estado del motor. En concesionario Ford el coste suele superar los 900 €.",
  },
  {
    q: "¿Atendéis Ford Fiesta, Focus y EcoSport?",
    a: "Sí. Somos especialistas en estos tres modelos con motor EcoBoost 1.0. También Puma, B-Max y C-Max bajo presupuesto.",
  },
  {
    q: "¿Qué garantía dais?",
    a: "24 meses o 40.000 km sobre trabajo y recambios. Trabajamos con piezas originales para mantener la garantía oficial Ford.",
  },
];

export const Route = createFileRoute("/motor-ecoboost")({
  head: () => ({
    ...buildSeo({
      title: "Ford EcoBoost Madrid: Correa Húmeda | StopCars",
      description:
        "Especialistas en motor Ford EcoBoost 1.0 en Madrid. Cambio de correa sumergida (wet belt) con kit Dayco reforzado. Presupuesto personalizado. Garantía 24 meses.",
      path: "/motor-ecoboost",
    }),
    scripts: [
      ldScript(faqJsonLd(FAQS)),
      ldScript(
        serviceJsonLd(
          "Cambio de Correa de Distribución Húmeda EcoBoost",
          "Cambio de correa de distribución sumergida para motor Ford EcoBoost 1.0. Fiesta, Focus, EcoSport. Kit Dayco, mano de obra y garantía 24 meses.",
          undefined,
        ),
      ),
      ldScript(
        breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Motor EcoBoost", path: "/motor-ecoboost" },
        ]),
      ),
    ],
  }),
  component: EcoboostPillar,
});

function EcoboostPillar() {
  return (
    <PillarPage
      pillar="EcoBoost"
      pillarPath="/motor-ecoboost"
      heroTitle={
        <>
          Especialistas en motor <span className="text-primary">Ford EcoBoost 1.0</span> en Madrid
        </>
      }
      heroLead={`Cambio de correa de distribución sumergida en Ford Fiesta, Focus y EcoSport. Kit Dayco reforzado, mano de obra y garantía 24 meses.`}
      heroImage={heroImg}
      intervalKm="150.000 km"
      intervalYears="10 años"
      symptoms={[
        { t: "Traqueteo al arrancar en frío", d: "Sonido metálico en los primeros segundos: la correa empieza a patinar." },
        { t: "Consumo de aceite excesivo", d: "Si rellenas más de 0,5 L cada 1.000 km, hay indicio de correa degradada." },
        { t: "Testigo de aceite encendido", d: "Bomba o filtro obstruidos por restos de goma. Para el coche inmediatamente." },
        { t: "Pérdida de potencia", d: "La ECU reduce prestaciones para proteger la distribución." },
        { t: "Olor a goma quemada", d: "Síntoma claro de fricción anómala dentro del cárter." },
        { t: "Vibraciones al ralentí", d: "Indica salto de diente en la correa: revisión urgente." },
      ]}
      whatIs={
        <>
          <p>
            El motor <strong>Ford EcoBoost 1.0</strong> (3 cilindros, turbo) usa
            una <strong>correa de distribución húmeda</strong> alojada en el
            cárter, lubricada por el aceite del motor. La tecnología es idéntica
            al PureTech de Stellantis y comparte sus mismos problemas.
          </p>
          <p>
            La correa se degrada con el aceite y suelta microfragmentos que
            terminan obstruyendo la <strong>bomba de aceite</strong>. Si esto
            ocurre, el motor pierde lubricación y puede romper la distribución
            con daños catastróficos.
          </p>
        </>
      }
      why={
        <>
          <p>
            En el EcoBoost una rotura de correa daña culata, válvulas y, en
            muchos casos, todo el bloque motor. Reparaciones de{" "}
            <strong>3.000 € a 5.000 €</strong> son habituales en concesionario.
          </p>
          <p>
            El cambio preventivo en taller especialista es la única forma sensata
            de proteger el motor y mantener el valor del coche. Pide presupuesto
            sin compromiso.
          </p>
        </>
      }
      models={ECOBOOST_MODELS}
      faqs={FAQS}
    />
  );
}
