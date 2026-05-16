import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/Layout";
import { QuoteForm } from "@/components/QuoteForm";
import { DisclosureBlock } from "@/components/DisclosureBlock";
import { Refrigerator, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function ApplianceRemoval() {
  return (
    <Layout>
      <Helmet>
        <title>Appliance Removal in Denver | Fridge, Washer & Dryer Pickup Requests</title>
        <meta name="description" content="Request appliance removal in Denver. Connect with local haulers for refrigerator, washer, dryer, and large appliance disposal." />
        <link rel="canonical" href="https://denverjunkhelp.com/appliance-removal" />
      </Helmet>

      <div className="bg-card border-b border-border py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            <Refrigerator className="w-4 h-4" />
            <span>Appliance Removal</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Appliance Removal in Denver</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Upgrading your kitchen or laundry room? We help connect you with local providers who can haul away your heavy old appliances.
          </p>
        </div>
      </div>

      <section className="py-16 px-6 max-w-4xl mx-auto">
        <article className="prose prose-lg dark:prose-invert prose-headings:font-serif max-w-none text-muted-foreground mb-16">
          <p>
            Appliances are incredibly heavy and notoriously difficult to dispose of. You can't just leave a refrigerator on the curb for regular trash day. We help residents and businesses in Denver request removal for large household and commercial appliances.
          </p>
          
          <h2>Appliances commonly removed include:</h2>
          <ul>
            <li>Refrigerators and freezers</li>
            <li>Washers and dryers</li>
            <li>Stoves, ovens, and ranges</li>
            <li>Dishwashers</li>
            <li>Water heaters</li>
            <li>Window AC units</li>
          </ul>

          <h2>Special disposal requirements</h2>
          <p>
            Many appliances require special handling. Refrigerators, freezers, and air conditioners contain Freon and other refrigerants that must be legally and safely extracted before the unit can be recycled or scrapped. This extra processing often factors into the quote a local provider will give you for appliance removal.
          </p>

          <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-foreground m-0 mb-2">Denver City Appliance Programs</h3>
            <p className="m-0 text-muted-foreground text-base">
              If you are a Denver city trash collection customer, you may qualify for the city's separate appliance recycling program. This can be a cost-effective option if you don't need immediate removal. <Link href="/city-guide" className="text-primary font-bold hover:underline">Learn more about city vs. private removal →</Link>
            </p>
          </div>

          <p>
            If you need an appliance gone urgently, or if you don't qualify for city pickup, requesting a private junk removal provider is usually the fastest and easiest solution.
          </p>
        </article>

        <div className="bg-muted p-8 rounded-xl border border-border mb-16 text-center">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Ready to clear out that old appliance?</h3>
          <p className="text-muted-foreground mb-6">Fill out the form below or give us a call to request your quote.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors">
            Request Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <QuoteForm />
        
        <div className="mt-12">
          <DisclosureBlock text="Denver Junk Help is a local quote and referral website. We help people in Denver request junk-removal service from a trusted local provider. We do not perform hauling or disposal services ourselves." />
        </div>
      </section>
    </Layout>
  );
}