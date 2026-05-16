import { Link } from "wouter";
import { DisclosureBlock } from "./DisclosureBlock";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-12 pb-24 md:pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4 text-foreground">Denver Junk Help</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Local quote and referral site for junk removal in the Denver area.
            </p>
            <div className="flex flex-col gap-2 text-sm text-foreground">
              <a href="tel:3035550190" className="hover:text-primary transition-colors" data-testid="link-footer-phone">(303) 555-0190</a>
              <a href="mailto:hello@denverjunkhelp.com" className="hover:text-primary transition-colors" data-testid="link-footer-email">hello@denverjunkhelp.com</a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-4 text-foreground">Services</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link href="/furniture-removal" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-furniture">Furniture Removal</Link></li>
              <li><Link href="/appliance-removal" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-appliance">Appliance Removal</Link></li>
              <li><Link href="/cleanouts" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-cleanouts">Cleanouts</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-4 text-foreground">Helpful Links</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-pricing">Pricing & FAQ</Link></li>
              <li><Link href="/city-guide" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-guide">Denver City Guide</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-contact">Request a Quote</Link></li>
              <li><Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-privacy">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-terms">Terms of Use</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 mt-8">
          <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
            Denver Junk Help is not a junk-removal company and does not operate removal trucks. Service availability, final pricing, and job completion are handled by the provider that responds to your request.
          </p>
          <p className="text-xs text-muted-foreground">
            &copy; 2025 Denver Junk Help. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}