import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/politica-privacidad")({
  head: () =>
    buildSeo({
      title: `Política de Privacidad | ${SITE.name}`,
      description: "Política de privacidad de StopCars Madrid: tratamiento de datos personales conforme al RGPD y LOPDGDD.",
      path: "/politica-privacidad",
      noindex: true,
    }),
  component: PrivacidadPage,
});

function PrivacidadPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Política de privacidad", path: "/politica-privacidad" }]} />
      <article className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-24">
        <h1 className="font-display text-4xl font-black uppercase md:text-5xl">Política de privacidad</h1>
        <div className="prose prose-invert mt-8 max-w-none text-muted-foreground">
          <h2>Responsable del tratamiento</h2>
          <p><strong>{SITE.legalName}</strong> · {SITE.address}, {SITE.postalCode} {SITE.city} · {SITE.email} · {SITE.phoneDisplay}</p>

          <h2>Finalidades del tratamiento</h2>
          <ul>
            <li>Atender solicitudes de presupuesto e información a través del formulario o WhatsApp.</li>
            <li>Gestionar la relación contractual con el cliente.</li>
            <li>Cumplir las obligaciones legales (facturación, garantía).</li>
          </ul>

          <h2>Base jurídica</h2>
          <p>Consentimiento del usuario al rellenar formularios o iniciar conversación, ejecución de contrato y obligaciones legales aplicables (RGPD art. 6.1.a, b y c).</p>

          <h2>Conservación</h2>
          <p>Los datos se conservarán durante el tiempo necesario para cumplir la finalidad y atender posibles responsabilidades derivadas del servicio (mínimo 5 años conforme a normativa contable y fiscal).</p>

          <h2>Destinatarios</h2>
          <p>No se cedan datos a terceros salvo obligación legal. Pueden tratarlos los proveedores tecnológicos necesarios (hosting, gestor email) bajo contrato de encargado de tratamiento.</p>

          <h2>Derechos del usuario</h2>
          <p>Acceso, rectificación, supresión, limitación, portabilidad y oposición. Solicítalos por escrito a {SITE.email} adjuntando copia de DNI. También puedes reclamar ante la Agencia Española de Protección de Datos (www.aepd.es).</p>
        </div>
      </article>
    </>
  );
}
