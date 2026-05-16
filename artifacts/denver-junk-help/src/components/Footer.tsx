import { Link } from "wouter";
import { PHONE_NUMBER, PHONE_HREF, EMAIL, BRAND_LEGAL } from "@/config";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-12 pb-24 md:pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif font-semibold text-lg mb-3 text-foreground">
              {BRAND_LEGAL}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              A local quote and referral site for junk removal in the Denver area.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              {PHONE_NUMBER && PHONE_HREF && (
                <a
                  href={PHONE_HREF}
                  className="text-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-phone"
                >
                  {PHONE_NUMBER}
                </a>
              )}
              <a
                href={`mailto:${EMAIL}`}
                className="text-foreground hover:text-primary transition-colors"
                data-testid="link-footer-email"
              >
                {EMAIL}
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4 text-foreground uppercase tracking-wide">
              Request Service
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <Link
                  href="/furniture-removal"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-furniture"
                >
                  Furniture Removal
                </Link>
              </li>
              <li>
                <Link
                  href="/appliance-removal"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-appliance"
                >
                  Appliance Removal
                </Link>
              </li>
              <li>
                <Link
                  href="/cleanouts"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-cleanouts"
                >
                  Garage &amp; Basement Cleanouts
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-contact"
                >
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4 text-foreground uppercase tracking-wide">
              Information
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <Link
                  href="/pricing"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-pricing"
                >
                  Pricing &amp; FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/city-guide"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-guide"
                >
                  Denver City Pickup Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-privacy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-terms"
                >
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8 space-y-3">
          <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl">
            {BRAND_LEGAL} is not a junk removal company and does not operate
            removal trucks. Service availability, final pricing, and job
            completion are handled by the independent provider that responds to
            your request.
          </p>
          <p className="text-xs text-muted-foreground">
            &copy; 2026 {BRAND_LEGAL}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
