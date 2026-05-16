import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/Layout";
import { QuoteForm } from "@/components/QuoteForm";
import { DisclosureBlock } from "@/components/DisclosureBlock";
import { Sofa, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function FurnitureRemoval() {
  return (
    <Layout>
      <Helmet>
        <title>Furniture Removal in Denver | Couch & Bulky Item Pickup Requests</title>
        <meta name="description" content="Request furniture removal in Denver. Connect with local haulers for couch, dresser, table, mattress, and bulky item pickup." />
        <link rel="canonical" href="https://denverjunkhelp.com/furniture-removal" />
      </Helmet>

      <div className="bg-card border-b border-border py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            <Sofa className="w-4 h-4" />
            <span>Furniture Removal</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Furniture Removal in Denver</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Need an old couch, heavy mattress, or bulky dresser gone? We help connect you with local providers who handle the heavy lifting.
          </p>
        </div>
      </div>

      <section className="py-16 px-6 max-w-4xl mx-auto">
        <article className="prose prose-lg dark:prose-invert prose-headings:font-serif max-w-none text-muted-foreground mb-16">
          <p>
            Getting rid of heavy furniture in Denver can be a hassle, especially if you live in an apartment building, a home with narrow stairs, or just don't have a truck. We help homeowners, renters, and property managers request removal for almost any type of bulky furniture.
          </p>
          
          <h2>Items commonly removed include:</h2>
          <ul>
            <li>Couches, sectionals, and loveseats</li>
            <li>Mattresses and box springs</li>
            <li>Dressers, wardrobes, and armoires</li>
            <li>Dining tables and chairs</li>
            <li>Desks and bookcases</li>
            <li>Patio furniture and outdoor sets</li>
          </ul>

          <h2>Pricing factors for furniture</h2>
          <p>
            When a local provider prices your furniture removal, they primarily look at the volume (how much truck space it takes). However, <strong>access and stairs</strong> are major factors for heavy items. If a massive sectional needs to be carried down three flights of apartment stairs, the labor cost will be higher than if it's already sitting in your driveway.
          </p>

          <p>
            To get the most accurate quote, be sure to note the item's location (upstairs, basement, ground floor) in your request, and mention if the item requires disassembly before it can be moved out the door.
          </p>
        </article>

        <div className="bg-muted p-8 rounded-xl border border-border mb-16 text-center">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Ready to get that furniture out of your way?</h3>
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