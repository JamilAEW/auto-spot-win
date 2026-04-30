import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/blog/diferencia-correa-cadena")({
  head: () =>
    buildSeo({
      title: `Correa vs Cadena de distribución | ${SITE.name} Madrid`,
      description: `Diferencias entre correa y cadena de distribución.`,
      path: "/blog/diferencia-correa-cadena",
    }),
  component: Post10,
});

function Post10() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 md:px-6">
      <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">En construcción</p>
      <h1 className="mt-3 font-display text-4xl font-black md:text-5xl">Correa vs Cadena de distribución</h1>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
        Esta página formará parte de la web StopCars Madrid. Estamos preparando contenido completo. Mientras tanto, contacta con nosotros para tu presupuesto.
      </p>
    </div>
  );
}
