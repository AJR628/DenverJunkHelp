import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { QuoteForm } from "@/components/QuoteForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { DisclosureBlock } from "@/components/DisclosureBlock";
import { Sofa, Refrigerator, BedDouble, Trash2, TreePine, PackageOpen } from "lucide-react";

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is Denver Junk Help the hauling company?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Denver Junk Help is a local quote and referral website. We help people in Denver request service from a trusted local provider. We don't operate trucks or perform hauling ourselves."
        }
      },
      {
        "@type": "Question",
        "name": "How does the quote process work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fill out the quote form or call us. We review your request and route it to a local junk-removal provider in Denver. The provider will contact you to discuss details, confirm pricing, and schedule service."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer same-day junk removal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Same-day options may be available depending on provider availability and your location. Submit a request early in the day for the best chance of a same-day response."
        }
      },
      {
        "@type": "Question",
        "name": "What items can usually be taken?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most household junk, furniture, appliances, yard debris, and bulky items. Some items like hazardous materials, certain electronics, and paint may require separate handling."
        }
      },
      {
        "@type": "Question",
        "name": "Do you serve apartments and businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Denver Junk Help helps homeowners, renters, landlords, and businesses request junk removal service."
        }
      }
    ]
  };

  const services = [
    { title: "Furniture", desc: "Couches, dressers, tables, and bulky pieces.", icon: Sofa, link: "/furniture-removal" },
    { title: "Appliances", desc: "Fridges, washers, dryers, and stoves.", icon: Refrigerator, link: "/appliance-removal" },
    { title: "Mattresses", desc: "Beds, box springs, and heavy frames.", icon: BedDouble, link: "/furniture-removal" },
    { title: "Cleanouts", desc: "Garage, basement, and estate cleanouts.", icon: Trash2, link: "/cleanouts" },
    { title: "Yard Debris", desc: "Branches, clippings, and outdoor waste.", icon: TreePine, link: "/contact" },
    { title: "Bulky Items", desc: "Mixed junk, boxes, and heavy items.", icon: PackageOpen, link: "/contact" },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Junk Removal in Denver | Request a Quote | Denver Junk Help</title>
        <meta name="description" content="Denver Junk Help helps connect you with a trusted local provider for furniture removal, appliance pickup, cleanouts, and bulky junk in the Denver area." />
        <link rel="canonical" href="https://denverjunkhelp.com/" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Hero 
        title="Need junk removed in Denver?"
        subhead="Denver Junk Help helps homeowners, renters, landlords, and businesses request service from a trusted local provider for furniture removal, appliance pickup, cleanouts, and bulky junk."
        primaryCtaText="Request My Quote"
        primaryCtaLink="/contact"
        secondaryCtaText="Call for Fast Help"
        secondaryCtaLink="tel:3035550190"
      />

      {/* Services Grid */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-foreground tracking-tight">What We Help You Request Service For</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <Link key={svc.title} href={svc.link} className="block group">
              <div className="bg-card border border-border rounded-xl p-6 h-full hover:border-primary/50 hover:shadow-md transition-all">
                <svc.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{svc.title}</h3>
                <p className="text-muted-foreground">{svc.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 px-6 bg-muted/30 border-y border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16 text-foreground tracking-tight">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center relative">
              <div className="w-16 h-16 bg-primary text-primary-foreground text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm z-10 relative">1</div>
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-border z-0"></div>
              <h3 className="text-xl font-bold text-foreground mb-3">Tell us what needs to go</h3>
              <p className="text-muted-foreground leading-relaxed">Fill out the quick quote form or call. Let us know what items you have and where they are located.</p>
            </div>
            <div className="text-center relative">
              <div className="w-16 h-16 bg-primary text-primary-foreground text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm z-10 relative">2</div>
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-border z-0"></div>
              <h3 className="text-xl font-bold text-foreground mb-3">We route your request</h3>
              <p className="text-muted-foreground leading-relaxed">We review your details and route them to a trusted local junk-removal provider right here in Denver.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm z-10 relative">3</div>
              <h3 className="text-xl font-bold text-foreground mb-3">A provider contacts you</h3>
              <p className="text-muted-foreground leading-relaxed">The local provider will reach out to confirm job details, provide pricing, and schedule your service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Sections */}
      <section className="py-20 px-6 max-w-4xl mx-auto space-y-16">
        <article className="bg-card border border-border p-8 md:p-10 rounded-2xl shadow-sm">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">Denver City Services vs. Private Junk Removal</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Some jobs may qualify for Denver's free city bulk item pickup. Others — especially urgent pickups, full cleanouts, or items the city won't take — need a private hauler. We put together a guide to help you decide which route is best for your situation.
          </p>
          <Link href="/city-guide" className="text-primary font-bold hover:underline inline-flex items-center gap-2">
            See the full comparison <span aria-hidden="true">&rarr;</span>
          </Link>
        </article>

        <div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">What Affects Junk Removal Pricing</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Final pricing typically depends on volume (how much space your items take up in the truck), the type of items, accessibility and stairs, whether disassembly is needed, and the timing or urgency of the pickup. Every job is unique, which is why a clear description helps providers give an accurate quote.
          </p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">We Help Connect You in Denver and Nearby Areas</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We help route requests in Denver and nearby surrounding areas including Aurora, Lakewood, Arvada, Englewood, Westminster, Littleton, and Commerce City. (Please note that provider availability in all areas is not guaranteed and depends on current routing.)
          </p>
        </div>
      </section>

      {/* FAQ & Form Section */}
      <section className="py-20 px-6 bg-muted/20 border-t border-border">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-10 text-foreground tracking-tight">Common Questions</h2>
          <FaqAccordion items={[
            {
              question: "Is Denver Junk Help the hauling company?",
              answer: "No. Denver Junk Help is a local quote and referral website. We help people in Denver request service from a trusted local provider. We don't operate trucks or perform hauling ourselves."
            },
            {
              question: "How does the quote process work?",
              answer: "Fill out the quote form or call us. We review your request and route it to a local junk-removal provider in Denver. The provider will contact you to discuss details, confirm pricing, and schedule service."
            },
            {
              question: "Do you offer same-day junk removal?",
              answer: "Same-day options may be available depending on provider availability and your location. Submit a request early in the day for the best chance of a same-day response."
            },
            {
              question: "What items can usually be taken?",
              answer: "Most household junk, furniture, appliances, yard debris, and bulky items. Some items like hazardous materials, certain electronics, and paint may require separate handling."
            },
            {
              question: "Do you serve apartments and businesses?",
              answer: "Yes. Denver Junk Help helps homeowners, renters, landlords, and businesses request junk removal service."
            }
          ]} />
        </div>

        <div className="max-w-4xl mx-auto" id="quote-form">
          <QuoteForm />
        </div>
      </section>

      {/* Disclosure */}
      <section className="px-6 pb-12 max-w-4xl mx-auto">
        <DisclosureBlock text="Denver Junk Help is a local quote and referral website. We help people in Denver request junk-removal service from a trusted local provider. We do not perform hauling or disposal services ourselves." />
      </section>
    </Layout>
  );
}