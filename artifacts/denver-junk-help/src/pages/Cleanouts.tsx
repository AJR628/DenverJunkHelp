import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/Layout";
import { QuoteForm } from "@/components/QuoteForm";
import { DisclosureBlock } from "@/components/DisclosureBlock";
import { Trash2, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Cleanouts() {
  return (
    <Layout>
      <Helmet>
        <title>Junk Cleanouts in Denver | Garage, Basement & Estate Cleanout Requests</title>
        <meta name="description" content="Request a full property cleanout in Denver. Connect with local haulers for garage, basement, estate, and rental cleanout services." />
        <link rel="canonical" href="https://denverjunkhelp.com/cleanouts" />
      </Helmet>

      <div className="bg-card border-b border-border py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            <Trash2 className="w-4 h-4" />
            <span>Full Cleanouts</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Junk Cleanouts in Denver</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            When you're dealing with a whole room, house, or storage unit full of junk, you need serious hauling capacity. We help connect you with providers ready for large-scale jobs.
          </p>
        </div>
      </div>

      <section className="py-16 px-6 max-w-4xl mx-auto">
        <article className="prose prose-lg dark:prose-invert prose-headings:font-serif max-w-none text-muted-foreground mb-16">
          <p>
            Single item pickups are simple, but clearing out years of accumulated items from a property requires coordination, heavy labor, and often multiple truckloads. We help route requests for large-scale cleanout jobs across the Denver metro area.
          </p>
          
          <h2>Types of cleanouts we help with:</h2>
          <ul>
            <li><strong>Garage Cleanouts:</strong> Clearing space so you can actually park your car again.</li>
            <li><strong>Basement Cleanouts:</strong> Removing heavy, awkward items up the stairs and out of the house.</li>
            <li><strong>Estate Cleanouts:</strong> Respectful, thorough clearing of a property after a major life transition.</li>
            <li><strong>Rental / Tenant Move-outs:</strong> Fast turnaround clearing for landlords and property managers who need a unit ready for the next tenant.</li>
            <li><strong>Storage Units:</strong> Emptying out rented units to stop paying monthly fees on items you no longer need.</li>
          </ul>

          <h2>Why professional help matters for cleanouts</h2>
          <p>
            Cleanouts are exhausting physically and mentally. A local provider brings the team, the trucks, and the experience to clear a space in hours that might take you weekends of back-and-forth trips to the dump. 
          </p>
          <p>
            Because these are larger, multi-item jobs, communication is key. When you request a quote, the provider will typically want to understand the scale of the job — is it a quarter of a truck bed, or three full trucks? Sending photos of the space using our quote form is highly recommended to help the provider give you a realistic estimate.
          </p>
        </article>

        <div className="bg-muted p-8 rounded-xl border border-border mb-16 text-center">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Tackling a big project?</h3>
          <p className="text-muted-foreground mb-6">Describe the scope of your cleanout and upload photos below to request a quote.</p>
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