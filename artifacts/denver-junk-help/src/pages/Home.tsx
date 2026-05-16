import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { QuoteForm } from "@/components/QuoteForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { DisclosureBlock } from "@/components/DisclosureBlock";
import { PHONE_NUMBER, PHONE_HREF } from "@/config";
import {
  Sofa,
  Refrigerator,
  BedDouble,
  Trash2,
  TreePine,
  PackageOpen,
  Clock,
  Camera,
  Building2,
  CheckCircle2,
} from "lucide-react";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is DenverJunkHelp.com the junk removal company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. DenverJunkHelp.com is a local quote and referral website. We help people in Denver request service from an independent local provider. We do not operate trucks or perform hauling ourselves.",
      },
    },
    {
      "@type": "Question",
      name: "How does the quote process work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tell us what needs to go by filling out the quick request form. We forward your details to an independent local provider in Denver. They may contact you directly to discuss pricing, availability, and next steps.",
      },
    },
    {
      "@type": "Question",
      name: "Is same-day junk removal available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Same-day or next-day options may be available depending on provider availability and your location. Submitting your request early in the day gives you the best chance of a quick response.",
      },
    },
    {
      "@type": "Question",
      name: "What items can usually be taken?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most household junk, furniture, appliances, yard debris, and bulky items. Some items like hazardous materials, certain electronics, and paint may require separate handling. The provider can advise on specific items.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve apartments and businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Homeowners, renters, landlords, property managers, and businesses can all request junk removal quotes through this site.",
      },
    },
  ],
};

const services = [
  {
    title: "Furniture Removal",
    desc: "Couches, dressers, tables, beds, and bulky pieces from homes and rentals.",
    icon: Sofa,
    link: "/furniture-removal",
  },
  {
    title: "Appliance Removal",
    desc: "Fridges, washers, dryers, stoves, water heaters, and more.",
    icon: Refrigerator,
    link: "/appliance-removal",
  },
  {
    title: "Mattress Removal",
    desc: "Mattresses, box springs, and bed frames of all sizes.",
    icon: BedDouble,
    link: "/furniture-removal",
  },
  {
    title: "Garage &amp; Basement Cleanouts",
    desc: "Full or partial cleanouts for garages, basements, and storage spaces.",
    icon: Trash2,
    link: "/cleanouts",
  },
  {
    title: "Yard Debris",
    desc: "Branches, clippings, dirt, and outdoor waste and materials.",
    icon: TreePine,
    link: "/contact",
  },
  {
    title: "Bulky &amp; Mixed Junk",
    desc: "Mixed loads, boxes, heavy items, and general household junk.",
    icon: PackageOpen,
    link: "/contact",
  },
];

const trustItems = [
  { icon: Clock, label: "Same-day or next-day options may be available" },
  { icon: Camera, label: "Photo details welcome — helps get an accurate quote" },
  { icon: Building2, label: "Homes, apartments, rentals, and businesses" },
  { icon: CheckCircle2, label: "No obligation to proceed after getting a quote" },
];

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <title>Junk Removal Help in Denver | Request a Local Quote | DenverJunkHelp.com</title>
        <meta
          name="description"
          content="Request a local junk removal quote in the Denver area. We help connect you with an independent local provider for furniture removal, appliance pickup, cleanouts, and bulky junk."
        />
        <link rel="canonical" href="https://denverjunkhelp.com/" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Hero
        title="Junk removal help in Denver"
        subhead="Request a local quote for furniture removal, appliance pickup, cleanouts, yard debris, bulky items, and more."
        primaryCtaText="Request My Quote"
        primaryCtaLink="/contact"
        secondaryCtaText={PHONE_NUMBER ? "Call for Fast Help" : undefined}
        secondaryCtaHref={PHONE_HREF || undefined}
        showDisclosure={true}
      />

      {/* Trust panel */}
      <section className="border-b border-border bg-background py-5 px-6" aria-label="Why request here">
        <ul className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trustItems.map((item) => (
            <li key={item.label} className="flex items-start gap-3">
              <item.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
              <span className="text-sm text-muted-foreground leading-snug">{item.label}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4 text-foreground tracking-tight">
          What you can request help with
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Tell us what needs to go. A local provider will review your request and may contact you with next steps.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <Link key={svc.title} href={svc.link} className="block group">
              <div className="bg-card border border-border rounded-xl p-6 h-full hover:border-primary/50 hover:shadow-md transition-all">
                <svc.icon className="w-9 h-9 text-primary mb-4" aria-hidden="true" />
                <h3
                  className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors"
                  dangerouslySetInnerHTML={{ __html: svc.title }}
                />
                <p className="text-muted-foreground text-sm leading-relaxed">{svc.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 px-6 bg-muted/30 border-y border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16 text-foreground tracking-tight">
            How it works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                n: "1",
                title: "Tell us what needs to go",
                body: "Fill out the quick request form or call. Describe your items and where they are — photos are welcome and help a lot.",
              },
              {
                n: "2",
                title: "Your request is forwarded",
                body: "We forward your details to an independent local provider in the Denver area.",
              },
              {
                n: "3",
                title: "A local provider may contact you",
                body: "The provider reviews your request and may reach out to discuss pricing, availability, and scheduling.",
              },
            ].map((step, i) => (
              <div key={step.n} className="text-center relative">
                <div className="w-14 h-14 bg-primary text-primary-foreground text-xl font-bold rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm z-10 relative">
                  {step.n}
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-7 left-[58%] w-full h-[2px] bg-border z-0" />
                )}
                <h3 className="text-lg font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Sections */}
      <section className="py-20 px-6 max-w-4xl mx-auto space-y-16">
        <article className="bg-card border border-border p-8 md:p-10 rounded-2xl shadow-sm">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
            Denver city pickup vs. private junk removal
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Some jobs may qualify for Denver's free bulk item pickup program. Others — particularly
            urgent jobs, full cleanouts, or items the city won't collect — typically require a
            private hauler. We put together a plain-English guide to help you figure out which
            option fits your situation.
          </p>
          <Link
            href="/city-guide"
            className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
          >
            Read the comparison guide <span aria-hidden="true">&rarr;</span>
          </Link>
        </article>

        <div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
            What affects junk removal pricing
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Pricing depends on the volume of items (how much space they take in the truck), item
            type, how accessible they are (stairs, elevators, basement), whether disassembly is
            needed, and your timing. A clear description of your job helps providers give a more
            accurate estimate before they arrive.{" "}
            <Link href="/pricing" className="text-primary hover:underline font-medium">
              See how pricing generally works &rarr;
            </Link>
          </p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
            Denver and nearby areas
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We help route requests in Denver and nearby areas including Aurora, Lakewood, Arvada,
            Englewood, Westminster, Littleton, and Commerce City. Provider availability in all
            areas is not guaranteed — the provider who responds to your request will confirm
            whether they can serve your location.
          </p>
        </div>
      </section>

      {/* FAQ & Form */}
      <section className="py-20 px-6 bg-muted/20 border-t border-border">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-10 text-foreground tracking-tight">
            Common questions
          </h2>
          <FaqAccordion
            items={[
              {
                question: "Is DenverJunkHelp.com the junk removal company?",
                answer:
                  "No. DenverJunkHelp.com is a local quote and referral website. We help people in Denver request junk removal service from an independent local provider. We do not operate trucks or perform hauling ourselves.",
              },
              {
                question: "How does the quote process work?",
                answer:
                  "Tell us what needs to go by filling out the request form. We forward your details to an independent local provider in Denver. They may contact you directly to discuss pricing, availability, and next steps.",
              },
              {
                question: "Is same-day junk removal available?",
                answer:
                  "Same-day or next-day options may be available depending on provider availability and your location. Submitting your request early in the day gives you the best chance of a quick response.",
              },
              {
                question: "What items can usually be taken?",
                answer:
                  "Most household junk, furniture, appliances, yard debris, and bulky items. Some items like hazardous materials, certain electronics, and paint may require separate handling. The provider can advise on specific items when they review your request.",
              },
              {
                question: "Do you serve apartments and businesses?",
                answer:
                  "Yes. Homeowners, renters, landlords, property managers, and businesses can all request junk removal quotes through this site.",
              },
            ]}
          />
        </div>

        <div className="max-w-2xl mx-auto" id="quote-form">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3">
              Request a local junk removal quote
            </h2>
            <p className="text-muted-foreground text-sm">
              Tell us what needs to go. A local provider in the Denver area will review your
              request and may contact you with next steps.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      <section className="px-6 pb-10 max-w-3xl mx-auto">
        <DisclosureBlock />
      </section>
    </Layout>
  );
}
