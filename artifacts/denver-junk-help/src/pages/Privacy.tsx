import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/Layout";
import { EMAIL, PHONE_NUMBER, PHONE_HREF, BRAND_LEGAL } from "@/config";

export default function Privacy() {
  return (
    <Layout>
      <Helmet>
        <title>Privacy Policy | DenverJunkHelp.com</title>
        <meta
          name="description"
          content="Privacy Policy for DenverJunkHelp.com — how we collect, use, and share information when you request a junk removal quote."
        />
        <link rel="canonical" href="https://denverjunkhelp.com/privacy" />
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="bg-card border-b border-border py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mt-3 text-sm">Last updated: May 2026</p>
        </div>
      </div>

      <section className="py-16 px-6 max-w-3xl mx-auto">
        <article className="prose prose-lg dark:prose-invert prose-headings:font-serif max-w-none text-muted-foreground">
          <p>
            {BRAND_LEGAL} takes your privacy seriously. This Privacy Policy
            explains how we collect, use, and share information when you use our
            website to request junk removal quotes.
          </p>

          <h2>Information We Collect</h2>
          <p>When you fill out a quote request form, we may collect:</p>
          <ul>
            <li>Name and contact information (phone, email)</li>
            <li>ZIP code or service address</li>
            <li>Details about the items you need removed</li>
            <li>Photographs you voluntarily upload</li>
            <li>
              Technical information such as browser type, referring page, and
              pages visited (collected automatically via analytics tools)
            </li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information you provide to:</p>
          <ul>
            <li>
              <strong>Forward your request to a local, independent junk removal provider</strong>{" "}
              so they can contact you about pricing, scheduling, and availability.
            </li>
            <li>
              Communicate with you about your request if needed.
            </li>
            <li>
              Analyze website traffic and improve the site experience.
            </li>
          </ul>

          <h2>How We Share Your Information</h2>
          <p>
            Because {BRAND_LEGAL} is a quote and referral website, sharing your
            submitted request with a local provider is the core function of the
            service. When you submit a request, your name, contact information,
            service address, and job description may be shared with an
            independent junk removal provider in the Denver area so they can
            follow up with you.
          </p>
          <p>
            We do not sell your personal data to mass-marketing lists or
            third-party data brokers.
          </p>

          <h2>Cookies and Analytics</h2>
          <p>
            We use standard web analytics tools (such as Google Analytics) to
            understand how visitors use our site. These tools use cookies to
            collect standard usage information in anonymized form. You can opt
            out of Google Analytics by installing the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              rel="noopener noreferrer"
              target="_blank"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </p>

          <h2>Your Rights</h2>
          <p>
            Depending on your jurisdiction, you may have the right to request
            access to or deletion of your personal data. To make such a request,
            contact us using the information below.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, contact us at:
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
