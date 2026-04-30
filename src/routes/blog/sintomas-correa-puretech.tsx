import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/blog/sintomas-correa-puretech")({
  head: () =>
    buildSeo({
      title: `Síntomas de correa PureTech rota | ${SITE.name} Madrid`,
      description: `7 señales que indican que tu correa PureTech está fallando.`,
      path: "/blog/sintomas-correa-puretech",
    }),
  component: Post2,
});

function Post2() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 md:px-6">
      <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">En construcción</p>
      <h1 className="mt-3 font-display text-4xl font-black md:text-5xl">Síntomas de correa PureTech rota</h1>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
        Esta página formará parte de la web StopCars Madrid. Estamos preparando contenido completo. Mientras tanto, contacta con nosotros para tu presupuesto.
      </p>
    </div>
  );
}
