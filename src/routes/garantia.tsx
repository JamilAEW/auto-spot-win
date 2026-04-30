import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/garantia")({
  head: () =>
    buildSeo({
      title: `Garantía 12 meses | ${SITE.name} Madrid`,
      description: `Cambio de correa con garantía de 12 meses o 20.000 km. Recambios Dayco originales reforzados.`,
      path: "/garantia",
    }),
  component: GarantiaPage,
});

function GarantiaPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 md:px-6">
      <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">En construcción</p>
      <h1 className="mt-3 font-display text-4xl font-black md:text-5xl">Garantía 12 meses</h1>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
        Esta página formará parte de la web StopCars Madrid. Estamos preparando contenido completo. Mientras tanto, contacta con nosotros para tu presupuesto.
      </p>
    </div>
  );
}
