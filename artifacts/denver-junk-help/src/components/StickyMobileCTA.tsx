import { Phone, FileText } from "lucide-react";
import { Link } from "wouter";

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex border-t border-border bg-background shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
      <a 
        href="tel:3035550190" 
        className="flex-1 flex items-center justify-center gap-2 py-4 bg-background text-foreground font-semibold border-r border-border active:bg-muted"
        data-testid="button-call-mobile"
      >
        <Phone className="w-5 h-5" />
        Call
      </a>
      <Link 
        href="/contact" 
        className="flex-1 flex items-center justify-center gap-2 py-4 bg-primary text-primary-foreground font-semibold active:bg-primary/90"
        data-testid="button-quote-mobile"
      >
        <FileText className="w-5 h-5" />
        Request Quote
      </Link>
    </div>
  );
}