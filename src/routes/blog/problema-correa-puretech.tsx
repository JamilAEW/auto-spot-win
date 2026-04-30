import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/blog/problema-correa-puretech")({
  head: () =>
    buildSeo({
      title: `El problema de la correa PureTech | ${SITE.name} Madrid`,
      description: `Análisis del problema de la correa sumergida PureTech.`,
      path: "/blog/problema-correa-puretech",
    }),
  component: Post1,
});

function Post1() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 md:px-6">
      <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">En construcción</p>
      <h1 className="mt-3 font-display text-4xl font-black md:text-5xl">El problema de la correa PureTech</h1>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
        Esta página formará parte de la web StopCars Madrid. Estamos preparando contenido completo. Mientras tanto, contacta con nosotros para tu presupuesto.
      </p>
    </div>
  );
}
