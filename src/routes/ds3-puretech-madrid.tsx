import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/ds3-puretech-madrid")({
  head: () =>
    buildSeo({
      title: `DS3 PureTech Madrid | ${SITE.name} Madrid`,
      description: `Cambio de correa de distribución DS3 PureTech en Madrid. Garantía 12 meses.`,
      path: "/ds3-puretech-madrid",
    }),
  component: DS3Page,
});

function DS3Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 md:px-6">
      <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">En construcción</p>
      <h1 className="mt-3 font-display text-4xl font-black md:text-5xl">DS3 PureTech Madrid</h1>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
        Esta página formará parte de la web StopCars Madrid. Estamos preparando contenido completo. Mientras tanto, contacta con nosotros para tu presupuesto.
      </p>
    </div>
  );
}
