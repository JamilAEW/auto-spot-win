import { createFileRoute } from "@tanstack/react-router";
import { buildSeo, ldScript, faqJsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { PURETECH_MODELS } from "@/lib/models";
import { PillarPage } from "@/components/PillarPage";
import heroImg from "@/assets/flyer-motor-puretech.png";

const FAQS = [
  {
    q: "¿Qué motores PureTech llevan correa sumergida?",
    a: "Los motores PureTech 1.0 y 1.2 (turbo y atmosférico) fabricados desde 2014 por el Grupo PSA (hoy Stellantis). Los montan Peugeot 208/308/2008/3008, Citroën C3/C4/C4 Cactus, Opel Corsa/Grandland y DS3/DS7, entre otros.",
  },
  {
    q: "¿Cada cuánto se cambia la correa PureTech?",
    a: "Stellantis recomienda 100.000 km o 6 años. Por seguridad, en uso urbano intensivo en Madrid recomendamos adelantarlo a 80.000 km o 5 años, especialmente si notas síntomas como traqueteo en frío.",
  },
  {
    q: "¿Cuánto cuesta el cambio en taller especialista?",
    a: "En StopCars Madrid 399 € con IVA, mano de obra, kit Dayco reforzado, aceite homologado y filtro. En concesionario el mismo trabajo cuesta entre 800 € y 1.200 €.",
  },
  {
    q: "¿Por qué falla la correa PureTech?",
    a: "Por el contacto continuo con el aceite del motor y por una formulación de goma que se degrada con el tiempo. Suelta partículas que obstruyen el filtro y la bomba de aceite, lo que puede romper la distribución.",
  },
  {
    q: "¿La avería está cubierta por la garantía oficial?",
    a: "Stellantis ha extendido la garantía del motor PureTech para casos concretos. En el blog te explicamos cómo reclamarla paso a paso y qué requisitos cumplir.",
  },
  {
    q: "¿Trabajáis con todas las marcas Stellantis?",
    a: "Sí. Atendemos Peugeot, Citroën, Opel y DS con motor PureTech 1.2. Diagnóstico gratuito y presupuesto cerrado en el día.",
  },
];

export const Route = createFileRoute("/motor-puretech")({
  head: () => ({
    ...buildSeo({
      title: "Especialistas Motor PureTech Madrid | Correa Sumergida 1.2 | StopCars",
      description:
        "Taller especialista en motor PureTech 1.0 y 1.2 en Madrid. Cambio de correa de distribución sumergida con kit Dayco reforzado. Presupuesto cerrado 399 €. Garantía 12 meses.",
      path: "/motor-puretech",
    }),
    scripts: [
      ldScript(faqJsonLd(FAQS)),
      ldScript(
        serviceJsonLd(
          "Cambio de Correa de Distribución Sumergida PureTech",
          "Cambio de correa de distribución bañada en aceite para motores PureTech 1.0 y 1.2 (Peugeot, Citroën, Opel, DS). Kit Dayco, mano de obra y garantía 12 meses.",
          "399",
        ),
      ),
      ldScript(
        breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Motor PureTech", path: "/motor-puretech" },
        ]),
      ),
    ],
  }),
  component: PuretechPillar,
});

function PuretechPillar() {
  return (
    <PillarPage
      pillar="PureTech"
      pillarPath="/motor-puretech"
      heroTitle={
        <>
          Especialistas en motor{" "}
          <span className="text-primary">PureTech 1.2</span> en Madrid
        </>
      }
      heroLead={`Cambio de correa de distribución sumergida en Peugeot, Citroën, Opel y DS. Kit Dayco reforzado, mano de obra y garantía 12 meses por ${SITE.promoPrice}.`}
      heroImage={heroImg}
      intervalKm="100.000 km"
      intervalYears="6 años"
      symptoms={[
        { t: "Traqueteo al arrancar en frío", d: "Sonido tac-tac los primeros segundos: la correa patina sobre las poleas." },
        { t: "Consumo anormal de aceite", d: "Más de 0,5 L cada 1.000 km es señal de microfragmentos atascando el sistema." },
        { t: "Testigo de presión de aceite encendido", d: "La bomba está obstruida por restos de la correa: para el coche y llámanos." },
        { t: "Olor a goma quemada", d: "El roce de la correa degradada genera olor característico en el habitáculo." },
        { t: "Pérdida de potencia", d: "La centralita reduce prestaciones para proteger la distribución." },
        { t: "Ruidos metálicos del motor", d: "Si oyes golpeteo continuo, puede haber daños en válvulas y pistones." },
      ]}
      whatIs={
        <>
          <p>
            La <strong>correa sumergida</strong> (también llamada correa húmeda o
            <em> wet belt</em>) es una correa de distribución que va alojada
            dentro del cárter del motor, lubricada por el propio aceite. La
            montan los motores <strong>PureTech 1.0 y 1.2</strong> (3 cilindros)
            del Grupo Stellantis: Peugeot, Citroën, Opel y DS.
          </p>
          <p>
            El diseño busca reducir fricción y emisiones, pero el contacto
            continuo con el aceite degrada la goma de la correa. Esos
            microfragmentos terminan obstruyendo el filtro y la bomba de aceite,
            con riesgo de <strong>rotura de la distribución</strong> y daños
            graves al motor.
          </p>
        </>
      }
      why={
        <>
          <p>
            La rotura de una correa PureTech provoca que las válvulas choquen con
            los pistones, destrozando culata, válvulas y, en muchos casos,
            requiriendo el cambio de motor completo. Una reparación así supera
            fácilmente los <strong>3.000 €</strong>.
          </p>
          <p>
            Cambiar preventivamente la correa con un kit reforzado cuesta solo
            <strong> 399 €</strong> en StopCars Madrid: amortiza el coste con la
            tranquilidad de no quedarte tirado y proteger el valor de tu coche.
          </p>
        </>
      }
      models={PURETECH_MODELS}
      faqs={FAQS}
    />
  );
}
