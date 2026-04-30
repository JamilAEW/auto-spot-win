interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "surface" | "carbon";
}

export function Section({
  children,
  className = "",
  id,
  variant = "default",
}: SectionProps) {
  const bg =
    variant === "surface"
      ? "bg-surface"
      : variant === "carbon"
        ? "bg-carbon"
        : "bg-background";
  return (
    <section id={id} className={`${bg} ${className}`}>
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  return (
    <header className={`mb-12 max-w-3xl ${alignCls}`}>
      {eyebrow && (
        <p className="mb-3 font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-black leading-tight text-foreground md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{description}</p>
      )}
    </header>
  );
}
