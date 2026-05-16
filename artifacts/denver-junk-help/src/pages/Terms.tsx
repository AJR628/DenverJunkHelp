import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/Layout";

export default function Terms() {
  return (
    <Layout>
      <Helmet>
        <title>Terms of Use | Denver Junk Help</title>
        <meta name="description" content="Terms of Use for Denver Junk Help." />
        <link rel="canonical" href="https://denverjunkhelp.com/terms" />
      </Helmet>

      <div className="bg-card border-b border-border py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Terms of Use</h1>
          <p className="text-muted-foreground mt-4">Last Updated: October 2023</p>
        </div>
      </div>

      <section className="py-16 px-6 max-w-3xl mx-auto">
        <article className="prose prose-lg dark:prose-invert prose-headings:font-serif max-w-none text-muted-foreground">
          <p>
            Welcome to Denver Junk Help. By accessing or using our website, you agree to be bound by these Terms of Use.
          </p>

          <h2>1. Nature of the Service</h2>
          <p>
            <strong>Denver Junk Help is a lead generation, quote routing, and referral website.</strong> We are not a junk removal company, we do not own or operate hauling trucks, and we do not employ junk removal crews. 
          </p>
          <p>
            Our service is designed to connect consumers who need junk removed with independent, third-party junk removal providers operating in the Denver, Colorado area.
          </p>

          <h2>2. No Guarantee of Service or Pricing</h2>
          <p>
            When you submit a quote request through our site, we route that request to a local provider. We cannot guarantee that a provider will accept your job, have availability, or be able to offer service in your specific area.
          </p>
          <p>
            Any pricing, estimates, or scheduling discussed is solely between you and the independent provider. Denver Junk Help does not set prices, guarantee quotes, or handle payments for hauling services.
          </p>

          <h2>3. Provider Independence</h2>
          <p>
            The junk removal professionals who respond to your requests are independent contractors/businesses, not employees, agents, or representatives of Denver Junk Help. We are not responsible for the performance, quality, safety, or legality of the services provided by these third parties.
          </p>
          <p>
            Any disputes arising out of the junk removal service, including property damage, pricing disagreements, or incomplete work, must be resolved directly with the independent provider who performed the service.
          </p>

          <h2>4. User Responsibilities</h2>
          <p>When using our site to request a quote, you agree to:</p>
          <ul>
            <li>Provide accurate and truthful information about your location, contact details, and the items requiring removal.</li>
            <li>Ensure you have the legal right to authorize the removal and disposal of the items listed in your request.</li>
            <li>Not submit requests for hazardous materials, illegal substances, or items prohibited by local waste management laws.</li>
          </ul>

          <h2>5. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Denver Junk Help and its operators shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of this website or the services provided by any third-party junk removal company you connect with through our site.
          </p>

          <h2>6. Governing Law</h2>
          <p>
            These Terms of Use shall be governed by and construed in accordance with the laws of the State of Colorado, without regard to its conflict of law principles.
          </p>

          <h2>7. Contact Information</h2>
          <p>
            If you have questions about these Terms of Use, please contact us at: <br/>
            <strong>Email:</strong> hello@denverjunkhelp.com <br/>
            <strong>Phone:</strong> (303) 555-0190
          </p>
        </article>
      </section>
    </Layout>
  );
}