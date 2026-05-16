import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/Layout";
import { EMAIL, PHONE_NUMBER, PHONE_HREF, BRAND_LEGAL } from "@/config";

export default function Terms() {
  return (
    <Layout>
      <Helmet>
        <title>Terms of Use | DenverJunkHelp.com</title>
        <meta
          name="description"
          content="Terms of Use for DenverJunkHelp.com — a local junk removal quote and referral website serving the Denver area."
        />
        <link rel="canonical" href="https://denverjunkhelp.com/terms" />
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="bg-card border-b border-border py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Terms of Use
          </h1>
          <p className="text-muted-foreground mt-3 text-sm">Last updated: May 2026</p>
        </div>
      </div>

      <section className="py-16 px-6 max-w-3xl mx-auto">
        <article className="prose prose-lg dark:prose-invert prose-headings:font-serif max-w-none text-muted-foreground">
          <p>
            Welcome to {BRAND_LEGAL}. By accessing or using our website, you
            agree to be bound by these Terms of Use.
          </p>

          <h2>1. Nature of the Service</h2>
          <p>
            <strong>{BRAND_LEGAL} is a quote and referral website.</strong> We
            are not a junk removal company, we do not own or operate hauling
            trucks, and we do not employ junk removal crews.
          </p>
          <p>
            Our service is designed to help people in the Denver, Colorado area
            submit junk removal requests, which may be forwarded to independent,
            third-party junk removal providers.
          </p>

          <h2>2. No Guarantee of Service or Pricing</h2>
          <p>
            When you submit a quote request through our site, your details may
            be forwarded to a local provider. We cannot guarantee that a
            provider will accept your job, have availability, or be able to
            serve your specific location.
          </p>
          <p>
            Any pricing, estimates, or scheduling are solely between you and the
            independent provider. {BRAND_LEGAL} does not set prices, guarantee
            quotes, or handle payments for hauling services.
          </p>

          <h2>3. Provider Independence</h2>
          <p>
            The junk removal providers who respond to requests are independent
            contractors and businesses, not employees or agents of {BRAND_LEGAL}
            . We are not responsible for the performance, quality, safety, or
            legality of services provided by any third party.
          </p>
          <p>
            Any disputes arising from the junk removal service — including
            property damage, pricing disagreements, or incomplete work — must be
            resolved directly with the independent provider who performed the
            service.
          </p>

          <h2>4. User Responsibilities</h2>
          <p>When using our site to request a quote, you agree to:</p>
          <ul>
            <li>
              Provide accurate and truthful information about your location,
              contact details, and the items requiring removal.
            </li>
            <li>
              Ensure you have the legal right to authorize the removal and
              disposal of the items listed.
            </li>
            <li>
              Not submit requests for hazardous materials, illegal substances,
              or items prohibited by local waste management laws.
            </li>
          </ul>

          <h2>5. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, {BRAND_LEGAL} and its
            operators shall not be liable for any direct, indirect, incidental,
            special, or consequential damages arising from your use of this
            website or the services provided by any third-party provider you
            connect with through our site.
          </p>

          <h2>6. Governing Law</h2>
          <p>
            These Terms of Use are governed by the laws of the State of
            Colorado, without regard to its conflict of law principles.
          </p>

          <h2>7. Contact</h2>
          <p>
            Questions about these Terms of Use?
            <br />
            <strong>Email:</strong>{" "}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            {PHONE_NUMBER && PHONE_HREF && (
              <>
                <br />
                <strong>Phone:</strong>{" "}
                <a href={PHONE_HREF}>{PHONE_NUMBER}</a>
              </>
            )}
          </p>
        </article>
      </section>
    </Layout>
  );
}
