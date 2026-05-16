import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/Layout";
import { FaqAccordion } from "@/components/FaqAccordion";
import { DisclosureBlock } from "@/components/DisclosureBlock";
import { Link } from "wouter";

export default function Pricing() {
  const faqs = [
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
      question: "What affects final pricing?",
      answer: "Final pricing typically depends on volume (how much truck space your items take), the type of items, accessibility (like flights of stairs), disassembly needs, and timing."
    },
    {
      question: "What items can usually be taken?",
      answer: "Most household junk, furniture, appliances, yard debris, and bulky items. Standard residential and commercial waste is generally accepted."
    },
    {
      question: "What items usually cannot be taken?",
      answer: "Hazardous waste, certain chemicals, liquid paint, some electronics, and medical waste. These may require separate specialized disposal. The provider will advise on specific items they cannot accept."
    },
    {
      question: "Can I upload photos?",
      answer: "Yes. Photos help the provider give a much more accurate quote before they arrive at your property. You can upload them directly in the quote form."
    },
    {
      question: "Do you serve apartments and businesses?",
      answer: "Yes. Homeowners, renters, landlords, property managers, and commercial customers can all request service."
    },
    {
      question: "What if I only have one item?",
      answer: "Single-item pickups are common. Just describe what it is (e.g., 'one standard mattress' or 'one refrigerator') and where it is on the quote form."
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Layout>
      <Helmet>
        <title>Junk Removal Pricing in Denver | How Quotes Work | Denver Junk Help</title>
        <meta name="description" content="Learn how junk removal pricing works in Denver, cost factors, and read our frequently asked questions about the quote process." />
        <link rel="canonical" href="https://denverjunkhelp.com/pricing" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className="bg-card border-b border-border py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">How Junk Removal Pricing Works in Denver</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Transparency matters. While we don't set the final prices ourselves, we want you to understand exactly how private haulers calculate their quotes.
          </p>
        </div>
      </div>

      <section className="py-16 px-6 max-w-4xl mx-auto border-b border-border">
        <article className="prose prose-lg dark:prose-invert prose-headings:font-serif max-w-none text-muted-foreground">
          <h2>The "Load-Based" Pricing Model</h2>
          <p>
            Most private junk removal companies price their services based on <strong>volume</strong> — specifically, how much space your items take up inside their truck. 
          </p>
          <p>
            Trucks are usually measured in cubic yards. Providers will often quote you based on fractions of a truck: a minimum charge (for single items), a quarter load, a half load, a three-quarter load, or a full load.
          </p>

          <h2>Key Cost Factors</h2>
          <p>When a provider reviews your quote request, they consider several factors to determine the price:</p>
          <ul>
            <li><strong>Volume:</strong> The pure physical footprint of the items.</li>
            <li><strong>Item Type:</strong> Dense, extremely heavy items like dirt, concrete, or roofing shingles cost more to dump at transfer stations. Appliances like refrigerators have specific recycling fees due to Freon.</li>
            <li><strong>Labor and Access:</strong> Are the items sitting in the driveway, or do they need to be carried up from a basement or down three flights of apartment stairs? Difficult access increases the labor time.</li>
            <li><strong>Disassembly:</strong> If a massive entertainment center or shed needs to be broken down before it can be moved, that adds time to the job.</li>
          </ul>

          <div className="bg-muted p-6 rounded-xl mt-8">
            <h3 className="font-bold text-foreground m-0 mb-2">Why photos are important</h3>
            <p className="m-0 text-base">
              Because pricing is visual and volume-based, <strong>photos are the best way to get an accurate estimate</strong> without an in-person visit. When you use our quote form, attaching clear photos of the junk helps the local provider understand exactly what they're dealing with.
            </p>
          </div>
        </article>
      </section>

      <section className="py-16 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-center mb-10 text-foreground">Frequently Asked Questions</h2>
        <FaqAccordion items={faqs} />
        
        <div className="mt-12 text-center">
          <Link href="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-colors shadow-sm">
            Request Your Quote Today
          </Link>
        </div>
      </section>

      <section className="px-6 pb-12 max-w-4xl mx-auto">
        <DisclosureBlock text="Denver Junk Help is a local quote and referral website. We help people in Denver request junk-removal service from a trusted local provider. We do not perform hauling or disposal services ourselves. Final pricing is determined by the independent provider." />
      </section>
    </Layout>
  );
}