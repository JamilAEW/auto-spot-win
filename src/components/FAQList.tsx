import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type FAQItem = { q: string; a: React.ReactNode };

export function FAQList({ items }: { items: FAQItem[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((f, i) => (
        <AccordionItem key={i} value={`item-${i}`} className="border-border">
          <AccordionTrigger className="text-left font-display text-lg font-semibold hover:text-primary">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="text-base leading-relaxed text-muted-foreground">
            {f.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
