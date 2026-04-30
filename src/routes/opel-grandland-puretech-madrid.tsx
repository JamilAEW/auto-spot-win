import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/opel-grandland-puretech-madrid")({
  head: () =>
    buildSeo({
      title: `Opel Grandland PureTech Madrid | ${SITE.name} Madrid`,
      description: `Especialistas en correa Opel Grandland PureTech 1.2 en Madrid.`,
      path: "/opel-grandland-puretech-madrid",
    }),
  component: OpelGrandlandPage,
});

function OpelGrandlandPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 md:px-6">
      <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">En construcción</p>
      <h1 className="mt-3 font-display text-4xl font-black md:text-5xl">Opel Grandland PureTech Madrid</h1>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
        Esta página formará parte de la web StopCars Madrid. Estamos preparando contenido completo. Mientras tanto, contacta con nosotros para tu presupuesto.
      </p>
    </div>
  );
}
