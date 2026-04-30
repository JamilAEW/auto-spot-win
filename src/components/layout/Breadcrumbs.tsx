import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

export type Crumb = { name: string; path: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  // items debe incluir SOLO los pasos a partir del segundo nivel.
  // El "Inicio" se añade automáticamente.
  const all: Crumb[] = [{ name: "Inicio", path: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="border-b border-border/60 bg-surface/40">
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-1 px-4 py-3 text-xs text-muted-foreground md:px-6 md:text-sm">
        {all.map((c, i) => {
          const last = i === all.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-1">
              {i === 0 && <Home className="h-3.5 w-3.5" aria-hidden="true" />}
              {last ? (
                <span className="font-medium text-foreground" aria-current="page">{c.name}</span>
              ) : (
                <Link to={c.path} className="hover:text-primary">
                  {c.name}
                </Link>
              )}
              {!last && <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
