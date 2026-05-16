import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND_DISPLAY, LOCATION_LABEL, PHONE_NUMBER, PHONE_HREF } from "@/config";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/furniture-removal", label: "Furniture Removal" },
    { href: "/appliance-removal", label: "Appliance Removal" },
    { href: "/cleanouts", label: "Cleanouts" },
    { href: "/pricing", label: "Pricing & FAQ" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-6 max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex flex-col leading-none hover:opacity-80 transition-opacity"
          data-testid="link-nav-home"
        >
          <span className="font-serif font-bold text-lg md:text-xl text-foreground tracking-tight">
            {BRAND_DISPLAY}
          </span>
          <span className="text-xs text-muted-foreground font-medium tracking-wide uppercase">
            {LOCATION_LABEL}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === link.href ? "text-primary" : "text-muted-foreground"
              }`}
              data-testid={`link-nav-${link.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            size="sm"
            className="ml-2 rounded-full font-semibold px-5 shadow-sm"
            data-testid="link-nav-contact"
          >
            <Link href="/contact">Request Quote</Link>
          </Button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          data-testid="button-mobile-menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <nav
          className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border shadow-lg py-4 px-6 flex flex-col gap-1"
          aria-label="Mobile navigation"
        >
          <Link
            href="/"
            className="text-base font-medium py-3 border-b border-border text-foreground"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base font-medium py-3 border-b border-border ${
                location === link.href ? "text-primary" : "text-foreground"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <Button
              asChild
              className="w-full justify-center rounded-full"
              size="lg"
            >
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Request Quote
              </Link>
            </Button>
            {PHONE_NUMBER && PHONE_HREF && (
              <Button
                asChild
                variant="outline"
                className="w-full justify-center rounded-full bg-background"
                size="lg"
              >
                <a href={PHONE_HREF}>{PHONE_NUMBER}</a>
              </Button>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
