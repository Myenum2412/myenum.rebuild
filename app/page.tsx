// pages/index.tsx
import Head from "next/head";
import Features from "@/components/features-12";
import Footer from "@/components/footer";
import { GlowingTable } from "@/components/GlowingTable";
import HeroSection from "@/components/hero-section";
import HomeContactForm from "@/components/HomeContactForm";
import IntegrationsSection from "@/components/integrations-8";
import LogoCloud from "@/components/logo-cloud";
import TeamSection from "@/components/team";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Head>
        <title>Myenum Agency - Advanced SaaS Solutions & Software Development</title>
        <meta
          name="description"
          content="Myenum Agency offers advanced SaaS solutions, custom software development, and digital transformation services for businesses. Contact us today!"
        />
        <meta
          name="keywords"
          content="SaaS solutions, software development, Myenum Agency, digital transformation, business solutions, web app development"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.myenum.com/" />

        {/* Open Graph for social sharing */}
        <meta property="og:title" content="Myenum Agency - SaaS & Software Solutions" />
        <meta
          property="og:description"
          content="Advanced SaaS solutions, custom software development, and digital solutions by Myenum Agency."
        />
        <meta property="og:url" content="https://www.myenum.com/" />
        <meta property="og:type" content="website" />

        {/* Schema.org JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Myenum Agency",
              "url": "https://www.myenum.com/",
              "logo": "https://www.myenum.com/logo.png", // Replace with your actual logo URL
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-90423-76479",
                "contactType": "Customer Service",
                "areaServed": "IN"
              },
              "sameAs": [
                "https://www.facebook.com/yourfacebook",
                "https://www.instagram.com/yourinstagram",
                "https://twitter.com/yourtwitter",
                "https://www.linkedin.com/company/yourlinkedin"
              ]
            })
          }}
        />
      </Head>

      <main className="overflow-hidden">
        <HeroSection />
        <LogoCloud />
        <Features />
        <GlowingTable />
        <IntegrationsSection />
        <TeamSection />

        <section aria-label="Testimonials" className="flex items-center justify-center min-h-screen">
          <div className="translate-x-10">
            <Testimonials />
          </div>
        </section>

        <HomeContactForm />
        <Footer />
      </main>
    </>
  );
}
