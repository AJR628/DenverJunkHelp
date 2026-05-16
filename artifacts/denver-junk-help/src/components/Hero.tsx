import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface HeroProps {
  title: string;
  subhead: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  trustLine?: string;
}

export function Hero({ 
  title, 
  subhead, 
  primaryCtaText = "Request My Quote", 
  primaryCtaLink = "/contact", 
  secondaryCtaText = "Call for Fast Help",
  secondaryCtaLink = "tel:3035550190",
  trustLine = "Photo quotes welcome • Homes, rentals, and businesses • Same-day options may be available"
}: HeroProps) {
  return (
    <section className="bg-card pt-16 pb-20 px-6 border-b border-border">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight tracking-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          {subhead}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <Button asChild size="lg" className="w-full sm:w-auto text-lg h-14 px-8 rounded-full shadow-sm hover:shadow-md transition-all" data-testid="link-hero-primary">
            <Link href={primaryCtaLink}>{primaryCtaText}</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-lg h-14 px-8 rounded-full bg-background hover:bg-muted" data-testid="link-hero-secondary">
            <a href={secondaryCtaLink}>{secondaryCtaText}</a>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground font-medium flex items-center justify-center gap-2">
          {trustLine}
        </p>
      </div>
    </section>
  );
}