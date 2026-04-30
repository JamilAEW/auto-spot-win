import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle } from "lucide-react";
import { SITE, telUrl, whatsappUrl } from "@/lib/site";

interface CTAProps {
  variant?: "default" | "stacked";
  className?: string;
}

/** Par de CTAs principales: Presupuesto (naranja) + Llamar (outline). */
export function CTAButtons({ variant = "default", className = "" }: CTAProps) {
  return (
    <div
      className={`flex flex-wrap gap-3 ${variant === "stacked" ? "flex-col sm:flex-row" : ""} ${className}`}
    >
      <Link
        to="/contacto"
        className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 font-display text-base font-bold uppercase tracking-wide text-accent-foreground shadow-cta transition-transform hover:-translate-y-0.5"
      >
        <MessageCircle className="h-5 w-5" />
        Presupuesto en 5 min
      </Link>
      <a
        href={telUrl}
        className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-primary bg-transparent px-6 py-3 font-display text-base font-bold uppercase tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        <Phone className="h-5 w-5" />
        Llamar {SITE.phoneDisplay}
      </a>
    </div>
  );
}

/** CTA unitario WhatsApp grande, usado en bloques de cierre. */
export function WhatsAppCTA({ label = "Reserva tu cita por WhatsApp" }: { label?: string }) {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-3 rounded-md bg-whatsapp px-6 py-4 font-display text-base font-bold uppercase tracking-wide text-white shadow-[0_10px_30px_-10px_rgba(37,211,102,0.6)] transition-transform hover:-translate-y-0.5"
    >
      <svg viewBox="0 0 32 32" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.5 2.1 7.9L0 32l8.4-2.4c2.3 1.3 4.9 2 7.6 2 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4Z" />
      </svg>
      {label}
    </a>
  );
}
