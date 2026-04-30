import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/peugeot-208-puretech-madrid")({
  head: () =>
    buildSeo({
      title: `Peugeot 208 PureTech Madrid | ${SITE.name} Madrid`,
      description: `Cambio de correa de distribución Peugeot 208 PureTech 1.2 en Madrid. Especialistas con kit Dayco.`,
      path: "/peugeot-208-puretech-madrid",
    }),
  component: Peugeot208Page,
});

function Peugeot208Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 md:px-6">
      <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">En construcción</p>
      <h1 className="mt-3 font-display text-4xl font-black md:text-5xl">Peugeot 208 PureTech Madrid</h1>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
        Esta página formará parte de la web StopCars Madrid. Estamos preparando contenido completo. Mientras tanto, contacta con nosotros para tu presupuesto.
      </p>
    </div>
  );
}
