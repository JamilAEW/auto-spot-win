import { Outlet, createRootRoute, HeadContent, Scripts, Link } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { SITE } from "@/lib/site";
import { autoRepairJsonLd, ldScript } from "@/lib/seo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-black text-primary">404</h1>
        <h2 className="mt-4 font-display text-2xl font-bold">Página no encontrada</h2>
        <p className="mt-2 text-muted-foreground">
          La página que buscas no existe o se ha movido. Vuelve al inicio o contacta con nosotros para tu presupuesto.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 font-display text-sm font-bold uppercase tracking-wide text-primary-foreground"
          >
            Ir al inicio
          </Link>
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center rounded-md border border-border px-5 py-3 font-display text-sm font-bold uppercase tracking-wide hover:border-primary hover:text-primary"
          >
            Contactar
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#1a1a1a" },
      { name: "format-detection", content: "telephone=no" },
      { name: "geo.region", content: "ES-MD" },
      { name: "geo.placename", content: "Madrid" },
      { property: "og:locale", content: "es_ES" },
      { title: "Lovable App" },
      { property: "og:title", content: "Lovable App" },
      { name: "twitter:title", content: "Lovable App" },
      { name: "description", content: "Web app for auto repair shops to showcase services, location, and customer reviews." },
      { property: "og:description", content: "Web app for auto repair shops to showcase services, location, and customer reviews." },
      { name: "twitter:description", content: "Web app for auto repair shops to showcase services, location, and customer reviews." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/94e4badf-bcff-4a7f-8027-a8769b35de77/id-preview-29898d5d--bbfee4f5-7084-4414-81f8-31441111015a.lovable.app-1777552261678.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/94e4badf-bcff-4a7f-8027-a8769b35de77/id-preview-29898d5d--bbfee4f5-7084-4414-81f8-31441111015a.lovable.app-1777552261678.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    ],
    scripts: [ldScript(autoRepairJsonLd())],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  const ga = SITE.ga4;
  return (
    <html lang="es">
      <head>
        <HeadContent />
        {ga && !ga.includes("XXXX") && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${ga}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ga}');`,
              }}
            />
          </>
        )}
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
