import { Phone, FileText } from "lucide-react";
import { Link } from "wouter";
import { PHONE_NUMBER, PHONE_HREF } from "@/config";

export function StickyMobileCTA() {
  const hasPhone = Boolean(PHONE_NUMBER && PHONE_HREF);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex border-t border-border bg-background shadow-[0_-2px_10px_rgba(0,0,0,0.08)]">
      {hasPhone && (
        <a
          href={PHONE_HREF}
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-background text-foreground font-semibold border-r border-border active:bg-muted"
          data-testid="button-call-mobile"
          aria-label={`Call ${PHONE_NUMBER}`}
        >
          <Phone className="w-5 h-5" />
          Call
        </a>
      )}
      <Link
        href="/contact"
        className={`flex items-center justify-center gap-2 py-4 bg-primary text-primary-foreground font-semibold active:bg-primary/90 ${
          hasPhone ? "flex-1" : "flex-1"
        }`}
        data-testid="button-quote-mobile"
      >
        <FileText className="w-5 h-5" />
        Request Quote
      </Link>
    </div>
  );
}
