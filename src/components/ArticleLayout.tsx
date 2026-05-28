import { Link } from "@tanstack/react-router";
import { Calendar, Clock } from "lucide-react";
import { CTAButtons, WhatsAppCTA } from "@/components/layout/CTAButtons";
import { Section, SectionHeader } from "@/components/Section";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import type { BlogPost } from "@/lib/blog-posts";
import { recentPosts } from "@/lib/blog-posts";
import { SITE } from "@/lib/site";

export function ArticleLayout({
  post,
  children,
}: {
  post: BlogPost;
  children: React.ReactNode;
}) {
  const related = recentPosts(4).filter((p) => p.slug !== post.slug).slice(0, 3);
  const formatted = new Date(post.datePublished).toLocaleDateString("es-ES", {
    year: "numeric", month: "long", day: "numeric",
  });

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />

      <article className="bg-background">
        <header className="border-b border-border bg-carbon">
          <div className="mx-auto max-w-3xl px-4 py-14 md:px-6 md:py-20">
            <p className="mb-4 inline-block rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              {post.category}
            </p>
            <h1 className="font-display text-3xl font-black uppercase leading-[1.1] md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground md:text-xl">
              {post.excerpt}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> {formatted}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> {post.readingMinutes} min lectura
              </span>
              <span>Por <strong className="text-foreground">{SITE.legalName}</strong></span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
          <div className="prose prose-invert max-w-none prose-headings:font-display prose-headings:font-black prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-base prose-p:leading-relaxed prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:underline">
            {children}
          </div>

          {/* CTA box mid-content */}
          <div className="my-12 rounded-2xl border border-primary/40 bg-surface p-6 md:p-8">
            <p className="font-display text-xs font-bold uppercase tracking-widest text-primary">
              ¿Tienes un coche afectado?
            </p>
            <h3 className="mt-2 font-display text-2xl font-black md:text-3xl">
              Cambio de correa por <span className="text-primary">399 €</span> en Madrid
            </h3>
            <p className="mt-3 text-muted-foreground">
              Diagnóstico gratuito · Entrega el mismo día · Garantía 24 meses
            </p>
            <div className="mt-5"><CTAButtons /></div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <Section variant="surface">
          <SectionHeader eyebrow="Sigue leyendo" title="Artículos relacionados" />
          <div className="grid gap-5 md:grid-cols-3">
            {related.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}` as string} className="group rounded-xl border border-border bg-surface-elevated p-6 transition hover:-translate-y-0.5 hover:border-primary">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">{p.category}</p>
                <h3 className="mt-3 font-display text-lg font-bold leading-tight group-hover:text-primary">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <section className="bg-carbon py-14">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <h2 className="font-display text-2xl font-black uppercase md:text-4xl">
            Reserva tu cita en <span className="text-primary">StopCars Madrid</span>
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <CTAButtons />
            <WhatsAppCTA label={`WhatsApp ${SITE.phoneDisplay}`} />
          </div>
        </div>
      </section>
    </>
  );
}
