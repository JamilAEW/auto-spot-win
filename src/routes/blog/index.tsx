import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, Clock } from "lucide-react";
import { buildSeo } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Section, SectionHeader } from "@/components/Section";
import { BLOG_POSTS } from "@/lib/blog-posts";

export const Route = createFileRoute("/blog/")({
  head: () =>
    buildSeo({
      title: "Blog Correa de Distribución PureTech y EcoBoost | StopCars Madrid",
      description:
        "Guías, síntomas, precios y consejos sobre la correa de distribución sumergida en motores PureTech y EcoBoost. Por especialistas StopCars Madrid.",
      path: "/blog",
    }),
  component: BlogIndex,
});

function BlogIndex() {
  const sorted = [...BLOG_POSTS].sort((a, b) =>
    b.datePublished.localeCompare(a.datePublished),
  );
  return (
    <>
      <Breadcrumbs items={[{ name: "Blog", path: "/blog" }]} />
      <section className="bg-carbon">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <p className="mb-4 inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary">
            Blog técnico
          </p>
          <h1 className="font-display text-4xl font-black uppercase md:text-6xl">
            Todo sobre la <span className="text-primary">correa sumergida</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Guías, síntomas, precios y consejos prácticos sobre el cambio de correa PureTech y EcoBoost. Escritos por mecánicos especialistas.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sorted.map((p) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}` as string}
              className="group flex flex-col rounded-xl border border-border bg-surface p-6 transition hover:-translate-y-0.5 hover:border-primary"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-primary">{p.category}</p>
              <h2 className="mt-3 font-display text-xl font-black leading-tight group-hover:text-primary">
                {p.title}
              </h2>
              <p className="mt-3 grow text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>
              <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {new Date(p.datePublished).toLocaleDateString("es-ES")}</span>
                <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {p.readingMinutes} min</span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
