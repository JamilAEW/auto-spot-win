import { createFileRoute, notFound } from "@tanstack/react-router";
import { buildSeo, ldScript, articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { findPost } from "@/lib/blog-posts";
import { ArticleLayout } from "@/components/ArticleLayout";
import { articleBodies } from "@/lib/blog-bodies";

const SLUG = "problema-correa-puretech";

export const Route = createFileRoute("/blog/problema-correa-puretech")({
  head: () => {
    const p = findPost(SLUG)!;
    return {
      ...buildSeo({
        title: `${p.title} | Blog StopCars Madrid`,
        description: p.description,
        path: `/blog/${SLUG}`,
        type: "article",
      }),
      scripts: [
        ldScript(articleJsonLd({
          title: p.title,
          description: p.description,
          path: `/blog/${SLUG}`,
          datePublished: p.datePublished,
        })),
        ldScript(breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: p.title, path: `/blog/${SLUG}` },
        ])),
      ],
    };
  },
  component: () => {
    const post = findPost(SLUG);
    if (!post) throw notFound();
    const Body = articleBodies[SLUG];
    return <ArticleLayout post={post}>{Body && <Body />}</ArticleLayout>;
  },
});
