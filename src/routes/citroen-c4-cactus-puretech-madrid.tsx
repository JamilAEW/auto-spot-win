import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/citroen-c4-cactus-puretech-madrid")({
  head: () =>
    buildSeo({
      title: `Citroën C4 Cactus PureTech Madrid | ${SITE.name} Madrid`,
      description: `Cambio correa Citroën C4 Cactus PureTech en Madrid. Entrega el mismo día.`,
      path: "/citroen-c4-cactus-puretech-madrid",
    }),
  component: CitroenC4CactusPage,
});

function CitroenC4CactusPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 md:px-6">
      <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">En construcción</p>
      <h1 className="mt-3 font-display text-4xl font-black md:text-5xl">Citroën C4 Cactus PureTech Madrid</h1>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
        Esta página formará parte de la web StopCars Madrid. Estamos preparando contenido completo. Mientras tanto, contacta con nosotros para tu presupuesto.
      </p>
    </div>
  );
}
