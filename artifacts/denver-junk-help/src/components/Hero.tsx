import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { BRAND_LEGAL } from "@/config";

interface HeroProps {
  title: string;
  subhead: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  showDisclosure?: boolean;
}

export function Hero({
  title,
  subhead,
  primaryCtaText = "Request My Quote",
  primaryCtaLink = "/contact",
  secondaryCtaText,
  secondaryCtaHref,
  showDisclosure = false,
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
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto text-lg h-14 px-8 rounded-full shadow-sm hover:shadow-md transition-all"
            data-testid="link-hero-primary"
          >
            <Link href={primaryCtaLink}>{primaryCtaText}</Link>
          </Button>
          {secondaryCtaText && secondaryCtaHref && (
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-lg h-14 px-8 rounded-full bg-background hover:bg-muted"
              data-testid="link-hero-secondary"
            >
              <a href={secondaryCtaHref}>{secondaryCtaText}</a>
            </Button>
          )}
        </div>
        {showDisclosure && (
          <p className="text-xs text-muted-foreground max-w-lg mx-auto leading-relaxed">
            {BRAND_LEGAL} is a referral website, not a junk removal company. We may
            share your request with an independent local provider who can contact
            you about pricing, availability, and service details.
          </p>
        )}
      </div>
    </section>
  );
}
