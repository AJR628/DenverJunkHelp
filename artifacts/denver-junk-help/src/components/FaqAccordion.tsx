import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full bg-card rounded-lg border border-border px-4 py-2">
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border-border">
          <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline hover:text-primary transition-colors py-4" data-testid={`faq-trigger-${index}`}>
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed pb-4" data-testid={`faq-content-${index}`}>
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}