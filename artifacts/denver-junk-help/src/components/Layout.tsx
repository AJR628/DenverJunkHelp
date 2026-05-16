import { ReactNode } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { UtilityBar } from "./UtilityBar";
import { StickyMobileCTA } from "./StickyMobileCTA";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <HelmetProvider>
      <div className="min-h-[100dvh] flex flex-col w-full bg-background font-sans">
        <UtilityBar />
        <Header />
        <main className="flex-1 w-full" aria-label="Main content">
          {children}
        </main>
        <Footer />
        <StickyMobileCTA />
      </div>
    </HelmetProvider>
  );
}