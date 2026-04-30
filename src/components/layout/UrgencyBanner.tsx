import { AlertTriangle } from "lucide-react";

export function UrgencyBanner({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="border-y border-accent/60 bg-accent text-accent-foreground">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 text-sm font-semibold md:px-6 md:text-base">
        <AlertTriangle className="h-5 w-5 shrink-0" aria-hidden="true" />
        <p className="leading-snug">{children}</p>
      </div>
    </div>
  );
}
