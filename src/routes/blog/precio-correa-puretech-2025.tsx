import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/blog/precio-correa-puretech-2025")({
  head: () =>
    buildSeo({
      title: `Precio cambio correa PureTech 2026 | ${SITE.name} Madrid`,
      description: `Comparativa de precios del cambio de correa PureTech en Madrid.`,
      path: "/blog/precio-correa-puretech-2025",
    }),
  component: Post4,
});

function Post4() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 md:px-6">
      <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">En construcción</p>
      <h1 className="mt-3 font-display text-4xl font-black md:text-5xl">Precio cambio correa PureTech 2026</h1>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
        Esta página formará parte de la web StopCars Madrid. Estamos preparando contenido completo. Mientras tanto, contacta con nosotros para tu presupuesto.
      </p>
    </div>
  );
}
