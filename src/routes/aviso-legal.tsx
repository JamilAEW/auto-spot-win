import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/aviso-legal")({
  head: () =>
    buildSeo({
      title: `Aviso Legal | ${SITE.name}`,
      description: "Aviso legal de StopCars Madrid: titularidad, condiciones de uso y propiedad intelectual del sitio web.",
      path: "/aviso-legal",
      noindex: true,
    }),
  component: AvisoLegal,
});

function AvisoLegal() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Aviso legal", path: "/aviso-legal" }]} />
      <article className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-24">
        <h1 className="font-display text-4xl font-black uppercase md:text-5xl">Aviso legal</h1>
        <div className="prose prose-invert mt-8 max-w-none text-muted-foreground">
          <h2>1. Titularidad del sitio</h2>
          <p>El presente sitio web es titularidad de <strong>{SITE.legalName}</strong>, con domicilio en {SITE.address}, {SITE.postalCode} {SITE.city}, teléfono {SITE.phoneDisplay} y correo {SITE.email}.</p>

          <h2>2. Objeto</h2>
          <p>Este sitio tiene como finalidad informar sobre los servicios de mecánica especializada en correa de distribución sumergida (motores PureTech y EcoBoost) y facilitar el contacto con potenciales clientes.</p>

          <h2>3. Condiciones de uso</h2>
          <p>El usuario se compromete a hacer un uso lícito de los contenidos, sin contravenir la legislación vigente, los derechos de terceros, ni la moral o el orden público.</p>

          <h2>4. Propiedad intelectual</h2>
          <p>Todos los contenidos (textos, imágenes, logos, código) están protegidos por derechos de propiedad intelectual e industrial. Queda prohibida su reproducción sin autorización expresa.</p>

          <h2>5. Responsabilidad</h2>
          <p>El titular no se responsabiliza de los daños derivados del uso del sitio o de la imposibilidad de acceso al mismo, ni de errores u omisiones que pudieran existir en los contenidos.</p>

          <h2>6. Legislación aplicable</h2>
          <p>Las presentes condiciones se rigen por la legislación española. Cualquier controversia será resuelta por los juzgados y tribunales de Madrid.</p>
        </div>
      </article>
    </>
  );
}
