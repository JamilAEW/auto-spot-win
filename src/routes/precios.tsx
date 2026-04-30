import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/precios")({
  head: () =>
    buildSeo({
      title: `Precios y Tarifas | ${SITE.name} Madrid`,
      description: `Tarifas transparentes para el cambio de correa de distribución PureTech y EcoBoost en Madrid. Desde 399 €.`,
      path: "/precios",
    }),
  component: PreciosPage,
});

function PreciosPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 md:px-6">
      <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">En construcción</p>
      <h1 className="mt-3 font-display text-4xl font-black md:text-5xl">Precios y Tarifas</h1>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
        Esta página formará parte de la web StopCars Madrid. Estamos preparando contenido completo. Mientras tanto, contacta con nosotros para tu presupuesto.
      </p>
    </div>
  );
}
