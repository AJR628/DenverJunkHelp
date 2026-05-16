import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/Layout";
import { QuoteForm } from "@/components/QuoteForm";
import { DisclosureBlock } from "@/components/DisclosureBlock";
import { Mail, Phone } from "lucide-react";
import { PHONE_NUMBER, PHONE_HREF, EMAIL } from "@/config";

export default function Contact() {
  return (
    <Layout>
      <Helmet>
        <title>Request a Local Junk Removal Quote in Denver | DenverJunkHelp.com</title>
        <meta
          name="description"
          content="Request a local junk removal quote in the Denver area. Tell us what needs to go and a local provider may contact you with pricing and availability."
        />
        <link rel="canonical" href="https://denverjunkhelp.com/contact" />
      </Helmet>

      <div className="bg-card border-b border-border py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-5">
            Request a local junk removal quote
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto mb-8">
            Tell us what needs to go. A local provider in the Denver area will review your
            request and may reach out with pricing and availability.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {PHONE_NUMBER && PHONE_HREF && (
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 hover:text-primary transition-colors bg-background px-6 py-3 rounded-full border border-border shadow-sm font-medium text-foreground"
                data-testid="link-contact-phone"
              >
                <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
                {PHONE_NUMBER}
              </a>
            )}
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-2 hover:text-primary transition-colors bg-background px-6 py-3 rounded-full border border-border shadow-sm font-medium text-foreground"
              data-testid="link-contact-email"
            >
              <Mail className="w-5 h-5 text-primary" aria-hidden="true" />
              {EMAIL}
            </a>
          </div>
        </div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <QuoteForm />
        </div>
      </section>

      <section className="px-6 pb-12 max-w-3xl mx-auto">
        <DisclosureBlock />
      </section>
    </Layout>
  );
}
