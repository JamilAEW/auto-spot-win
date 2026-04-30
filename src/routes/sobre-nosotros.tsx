import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/sobre-nosotros")({
  head: () =>
    buildSeo({
      title: `Sobre Nosotros | ${SITE.name} Madrid`,
      description: `Taller mecánico StopCars Madrid, especialistas en distribución sumergida PureTech y EcoBoost desde hace años.`,
      path: "/sobre-nosotros",
    }),
  component: SobreNosotrosPage,
});

function SobreNosotrosPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 md:px-6">
      <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">En construcción</p>
      <h1 className="mt-3 font-display text-4xl font-black md:text-5xl">Sobre Nosotros</h1>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
        Esta página formará parte de la web StopCars Madrid. Estamos preparando contenido completo. Mientras tanto, contacta con nosotros para tu presupuesto.
      </p>
    </div>
  );
}
