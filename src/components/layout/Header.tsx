import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logoUrl from "@/assets/stopcars-logo.png";
import { SITE, telUrl } from "@/lib/site";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/motor-puretech", label: "PureTech" },
  { to: "/motor-ecoboost", label: "EcoBoost" },
  { to: "/precios", label: "Precios" },
  { to: "/blog", label: "Blog" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2" aria-label="StopCars - Inicio">
          <img
            src={logoUrl}
            alt="StopCars Madrid"
            width={180}
            height={56}
            className="h-12 w-auto md:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-surface hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={telUrl}
            className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm font-semibold text-foreground/90 transition-colors hover:border-primary hover:text-primary"
          >
            <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
          </a>
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-accent-foreground shadow-cta transition-transform hover:-translate-y-0.5"
          >
            Presupuesto gratis
          </Link>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-surface lg:hidden" aria-label="Navegación móvil">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-semibold text-foreground/90 hover:bg-surface-elevated hover:text-primary"
                activeProps={{ className: "text-primary bg-surface-elevated" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-3 grid grid-cols-1 gap-2">
              <a
                href={telUrl}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-3 py-3 text-sm font-semibold"
              >
                <Phone className="h-4 w-4" /> Llamar {SITE.phoneDisplay}
              </a>
              <Link
                to="/contacto"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-3 text-sm font-bold uppercase tracking-wide text-accent-foreground"
              >
                Presupuesto gratis
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
