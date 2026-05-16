import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/Layout";
import { DisclosureBlock } from "@/components/DisclosureBlock";
import { MapPin } from "lucide-react";
import { Link } from "wouter";

export default function CityGuide() {
  return (
    <Layout>
      <Helmet>
        <title>Denver Large Item Pickup vs Private Junk Removal | What's the Difference</title>
        <meta name="description" content="Compare Denver's free city large item pickup program with private junk removal services. Find out which option is best for your situation." />
        <link rel="canonical" href="https://denverjunkhelp.com/city-guide" />
      </Helmet>

      <div className="bg-card border-b border-border py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            <MapPin className="w-4 h-4" />
            <span>Local Denver Guide</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Denver Large Item Pickup vs. Private Junk Removal</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Not sure if you should wait for the city truck or hire a private hauler? Here is a plain-english breakdown of your options in Denver.
          </p>
        </div>
      </div>

      <section className="py-16 px-6 max-w-4xl mx-auto">
        <article className="prose prose-lg dark:prose-invert prose-headings:font-serif max-w-none text-muted-foreground mb-16">
          <p>
            If you live in Denver and need to get rid of big items, you generally have two main paths: the city's solid waste management services, or hiring a private junk removal company. Both are good options, but they serve very different needs.
          </p>

          <h2>1. Denver City Large Item Pickup</h2>
          <p>
            The City and County of Denver provides Large Item Pickup (sometimes called Extra Trash) for qualifying residential customers. 
          </p>
          
          <h3>When City Pickup is a Good Option:</h3>
          <ul>
            <li><strong>You are a qualifying customer:</strong> You must live in a single-family home or an apartment building with 7 or fewer units that receives city trash collection.</li>
            <li><strong>You only have a few items:</strong> The city enforces limits per household (typically 5 items maximum per collection).</li>
            <li><strong>You have time:</strong> Collections are scheduled on specific weeks throughout the year based on your neighborhood, not on-demand.</li>
            <li><strong>You can move it yourself:</strong> You must place the items at your normal trash collection point (alley or curb) yourself. City workers will not enter your home or property.</li>
          </ul>
          
          <div className="bg-muted p-5 rounded-lg border border-border my-6 text-base">
            <strong>Note on City Appliance & E-Waste Programs:</strong> Denver has separate specialized programs for appliance recycling and electronics recycling, often requiring an appointment or drop-off. They are usually not picked up during standard large item days.
          </div>

          <h2>2. Private Junk Removal Services</h2>
          <p>
            Private junk removal providers are independent businesses. When you request a quote through Denver Junk Help, you are reaching out to one of these private, local haulers.
          </p>

          <h3>When Private Removal is the Better Option:</h3>
          <ul>
            <li><strong>You need it gone now:</strong> Private haulers can often provide next-day or even same-day service. You don't have to wait weeks for your neighborhood's scheduled cycle.</li>
            <li><strong>You need inside help:</strong> If an item is too heavy to move to the curb, a private crew will come inside your house, basement, or apartment to do the heavy lifting for you.</li>
            <li><strong>You live in a large complex:</strong> If you live in a large apartment building (8+ units) or manage a commercial property, you likely don't qualify for city collection and must use a private service.</li>
            <li><strong>You have a massive amount of junk:</strong> Full property cleanouts, garage cleanings, or massive piles of yard debris exceed city limits and require a private truck.</li>
            <li><strong>You have complex items:</strong> Private haulers often take items the city restricts, or have the connections to properly dispose of tricky items.</li>
          </ul>

          <h2>Summary</h2>
          <p>
            If you have a single couch, live in a qualifying house, can drag it to the alley, and don't mind waiting a few weeks — use the city service. It's built into the infrastructure.
          </p>
          <p>
            If you have an urgent timeline, need heavy items carried out of your living room, or are dealing with a full cleanout, a private junk removal provider is the right tool for the job.
          </p>
        </article>

        <div className="bg-card border border-border p-8 rounded-xl text-center shadow-sm">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Need private hauling?</h3>
          <p className="text-muted-foreground mb-6">We can connect you with a trusted local provider in Denver today.</p>
          <Link href="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-colors">
            Request a Free Quote
          </Link>
        </div>
        
        <div className="mt-12">
          <DisclosureBlock text="Denver Junk Help is an independent quote and referral website. We are not affiliated with the City and County of Denver government. Information about city programs is provided for educational purposes and is subject to change by the city." />
        </div>
      </section>
    </Layout>
  );
}