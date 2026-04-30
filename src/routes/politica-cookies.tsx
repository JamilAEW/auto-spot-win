import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/politica-cookies")({
  head: () =>
    buildSeo({
      title: `Política de Cookies | ${SITE.name}`,
      description: "Información sobre el uso de cookies en el sitio web de StopCars Madrid.",
      path: "/politica-cookies",
      noindex: true,
    }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Política de cookies", path: "/politica-cookies" }]} />
      <article className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-24">
        <h1 className="font-display text-4xl font-black uppercase md:text-5xl">Política de cookies</h1>
        <div className="prose prose-invert mt-8 max-w-none text-muted-foreground">
          <h2>¿Qué son las cookies?</h2>
          <p>Las cookies son pequeños archivos de texto que un sitio web guarda en tu navegador para recordar información sobre tu visita.</p>

          <h2>Tipos de cookies utilizadas</h2>
          <ul>
            <li><strong>Técnicas:</strong> imprescindibles para el funcionamiento del sitio.</li>
            <li><strong>Analíticas:</strong> Google Analytics 4, para medir audiencia y mejorar contenidos. Datos agregados y anónimos.</li>
          </ul>

          <h2>Gestión y desactivación</h2>
          <p>Puedes configurar o eliminar cookies desde tu navegador (Chrome, Firefox, Safari, Edge). Si las desactivas, parte del sitio puede dejar de funcionar correctamente.</p>

          <h2>Más información</h2>
          <p>Para más detalles sobre el tratamiento de datos consulta nuestra <a href="/politica-privacidad">política de privacidad</a>. Cualquier consulta puedes enviarla a {SITE.email}.</p>
        </div>
      </article>
    </>
  );
}
