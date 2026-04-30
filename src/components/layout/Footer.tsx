import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import logoUrl from "@/assets/stopcars-logo.png";
import { SITE, telUrl } from "@/lib/site";
import { recentPosts } from "@/lib/blog-posts";
import { MODELS } from "@/lib/models";

export function Footer() {
  const posts = recentPosts(3);
  const modelLinks = MODELS.slice(0, 6);

  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Marca + NAP */}
          <div>
            <Link to="/" className="inline-flex items-center" aria-label="StopCars">
              <img src={logoUrl} alt="StopCars Madrid" width={180} height={56} className="h-12 w-auto" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Taller mecánico en Madrid especializado en correa de distribución sumergida para motores PureTech (Peugeot, Citroën, Opel, DS) y EcoBoost (Ford).
            </p>
            <div className="mt-5 flex gap-3">
              <a href={SITE.social.facebook} aria-label="Facebook" className="rounded-md border border-border p-2 hover:border-primary hover:text-primary" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-4 w-4" />
              </a>
              <a href={SITE.social.instagram} aria-label="Instagram" className="rounded-md border border-border p-2 hover:border-primary hover:text-primary" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Servicios */}
          <div>
            <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-widest text-primary">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/motor-puretech" className="text-foreground/80 hover:text-primary">Motor PureTech</Link></li>
              <li><Link to="/motor-ecoboost" className="text-foreground/80 hover:text-primary">Motor EcoBoost</Link></li>
              <li><Link to="/correa-distribucion-sumergida" className="text-foreground/80 hover:text-primary">Correa Sumergida</Link></li>
              <li><Link to="/precios" className="text-foreground/80 hover:text-primary">Precios y Tarifas</Link></li>
              <li><Link to="/garantia" className="text-foreground/80 hover:text-primary">Garantía 12 meses</Link></li>
              <li><Link to="/recogida-entrega" className="text-foreground/80 hover:text-primary">Recogida y entrega</Link></li>
            </ul>
            <h4 className="mt-6 mb-3 font-display text-xs font-bold uppercase tracking-widest text-muted-foreground">Modelos populares</h4>
            <ul className="space-y-1 text-sm">
              {modelLinks.map((m) => (
                <li key={m.slug}>
                  <Link to={`/${m.slug}`} className="text-foreground/70 hover:text-primary">
                    {m.brand} {m.model}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Blog */}
          <div>
            <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-widest text-primary">Últimas del blog</h3>
            <ul className="space-y-3 text-sm">
              {posts.map((p) => (
                <li key={p.slug}>
                  <Link to={`/blog/${p.slug}`} className="text-foreground/80 hover:text-primary">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/blog" className="mt-4 inline-block text-sm font-semibold text-primary hover:underline">
              Ver todo el blog →
            </Link>
          </div>

          {/* Col 4: Contacto + horarios */}
          <div>
            <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-widest text-primary">Contacto</h3>
            <ul className="space-y-3 text-sm text-foreground/85">
              <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>{SITE.address}, {SITE.postalCode} {SITE.city}</span></li>
              <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><a href={telUrl} className="hover:text-primary">{SITE.phoneDisplay}</a></li>
              <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><a href={`mailto:${SITE.email}`} className="hover:text-primary">{SITE.email}</a></li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  {SITE.hours.weekdays}<br />
                  {SITE.hours.saturday}<br />
                  <span className="text-muted-foreground">{SITE.hours.sunday}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {SITE.legalName}. Todos los derechos reservados.</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/aviso-legal" className="hover:text-primary">Aviso legal</Link>
            <Link to="/politica-privacidad" className="hover:text-primary">Privacidad</Link>
            <Link to="/politica-cookies" className="hover:text-primary">Cookies</Link>
            <Link to="/sobre-nosotros" className="hover:text-primary">Sobre nosotros</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
