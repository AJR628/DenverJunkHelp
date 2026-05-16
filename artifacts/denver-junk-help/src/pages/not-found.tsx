import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Layout>
      <Helmet>
        <title>Page Not Found | DenverJunkHelp.com</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="min-h-[60vh] flex items-center justify-center px-6 py-20">
        <div className="text-center max-w-md">
          <p className="text-6xl font-serif font-bold text-primary mb-4">404</p>
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Page not found
          </h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            The page you're looking for isn't here. It may have moved, or the
            link might be incorrect.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/">Go to Home</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
