import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/Layout";

export default function Privacy() {
  return (
    <Layout>
      <Helmet>
        <title>Privacy Policy | Denver Junk Help</title>
        <meta name="description" content="Privacy Policy for Denver Junk Help." />
        <link rel="canonical" href="https://denverjunkhelp.com/privacy" />
      </Helmet>

      <div className="bg-card border-b border-border py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Privacy Policy</h1>
          <p className="text-muted-foreground mt-4">Last Updated: October 2023</p>
        </div>
      </div>

      <section className="py-16 px-6 max-w-3xl mx-auto">
        <article className="prose prose-lg dark:prose-invert prose-headings:font-serif max-w-none text-muted-foreground">
          <p>
            At Denver Junk Help, we take your privacy seriously. This Privacy Policy explains how we collect, use, and share information when you use our website to request junk removal quotes.
          </p>

          <h2>Information We Collect</h2>
          <p>When you fill out a quote request form, we collect the following personal information:</p>
          <ul>
            <li>Name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>ZIP code or service address</li>
            <li>Details about the items you need removed</li>
            <li>Photographs you voluntarily upload</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information you provide primarily to:</p>
          <ul>
            <li>Process your quote request</li>
            <li><strong>Route your request to a local, independent junk-removal provider</strong> so they can contact you to offer pricing and schedule service.</li>
            <li>Communicate with you regarding your request if necessary.</li>
            <li>Analyze website performance and improve our services.</li>
          </ul>

          <h2>How We Share Your Information</h2>
          <p>
            <strong>Core Service Function:</strong> Because Denver Junk Help is a referral and quote-routing service, the core function of this site requires sharing your submitted information. When you submit a quote request, we share the details of that request (including your name, contact info, address, and photos) with a trusted, independent junk-removal provider in the Denver area so they can fulfill your request.
          </p>
          <p>
            We do not sell your personal data to mass-marketing lists or third-party data brokers.
          </p>

          <h2>Cookies and Tracking</h2>
          <p>
            We use standard web analytics tools (such as Google Analytics) to understand how visitors interact with our website. These tools use cookies to collect standard internet log information and visitor behavior information in an anonymous form.
          </p>

          <h2>Your Rights</h2>
          <p>
            Depending on your jurisdiction, you may have rights to request access to or deletion of your personal data. If you have questions about your data or wish to have your quote request removed from our records, please contact us.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at: <br/>
            <strong>Email:</strong> hello@denverjunkhelp.com <br/>
            <strong>Phone:</strong> (303) 555-0190
          </p>
        </article>
      </section>
    </Layout>
  );
}