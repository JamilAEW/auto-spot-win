import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/ford-ecosport-ecoboost-madrid")({
  head: () =>
    buildSeo({
      title: `Ford EcoSport EcoBoost Madrid | ${SITE.name} Madrid`,
      description: `Cambio correa Ford EcoSport EcoBoost 1.0 en Madrid. Entrega el mismo día.`,
      path: "/ford-ecosport-ecoboost-madrid",
    }),
  component: FordEcoSportPage,
});

function FordEcoSportPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 md:px-6">
      <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">En construcción</p>
      <h1 className="mt-3 font-display text-4xl font-black md:text-5xl">Ford EcoSport EcoBoost Madrid</h1>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
        Esta página formará parte de la web StopCars Madrid. Estamos preparando contenido completo. Mientras tanto, contacta con nosotros para tu presupuesto.
      </p>
    </div>
  );
}
