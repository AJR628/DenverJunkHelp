import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/Layout";
import { QuoteForm } from "@/components/QuoteForm";
import { DisclosureBlock } from "@/components/DisclosureBlock";
import { Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <Helmet>
        <title>Request a Junk Removal Quote in Denver | Denver Junk Help</title>
        <meta name="description" content="Request a fast, local junk removal quote in Denver. Fill out our form or call us to get connected with a trusted hauling provider." />
        <link rel="canonical" href="https://denverjunkhelp.com/contact" />
      </Helmet>

      <div className="bg-card border-b border-border py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Request a Quote</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            Fill out the form below and we'll route your request to a trusted local Denver-area junk-removal provider. You can also call us directly.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-foreground font-medium">
            <a href="tel:3035550190" className="flex items-center gap-2 hover:text-primary transition-colors bg-background px-6 py-3 rounded-full border border-border shadow-sm">
              <Phone className="w-5 h-5 text-primary" />
              (303) 555-0190
            </a>
            <a href="mailto:hello@denverjunkhelp.com" className="flex items-center gap-2 hover:text-primary transition-colors bg-background px-6 py-3 rounded-full border border-border shadow-sm">
              <Mail className="w-5 h-5 text-primary" />
              hello@denverjunkhelp.com
            </a>
          </div>
        </div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <QuoteForm />
        </div>
      </section>

      <section className="px-6 pb-12 max-w-4xl mx-auto">
        <DisclosureBlock text="Denver Junk Help is a local quote and referral website. We help people in Denver request junk-removal service from a trusted local provider. We do not perform hauling or disposal services ourselves." />
      </section>
    </Layout>
  );
}