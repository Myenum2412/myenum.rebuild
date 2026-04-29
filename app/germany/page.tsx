import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Features from '@/components/features-12';
import CTA2 from '@/components/mvpblocks/cta-2';

export const metadata: Metadata = {
  title: 'Software Development Company in Germany | MyEnum Agency - Berlin, Munich, Hamburg',
  description: 'Professional software development company serving Germany. Custom software, web development, mobile apps, and digital marketing for businesses in Berlin, Munich, Hamburg, Frankfurt, and across Germany.',
  keywords: [
    'software development Germany',
    'web development Germany',
    'IT company Germany',
    'software company Berlin',
    'web development Munich',
    'digital marketing Germany',
    'mobile app development Germany',
    'outsourced development Germany',
    'nearshore development Germany',
  ],
  openGraph: {
    title: 'Software Development Company in Germany | MyEnum Agency',
    description: 'Professional software development company serving Germany with custom software, web development, and digital marketing services.',
    url: 'https://myenum.in/germany',
    siteName: 'MyEnum Agency',
    type: 'website',
    locale: 'de_DE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Development Company in Germany | MyEnum Agency',
  },
  alternates: {
    canonical: 'https://myenum.in/germany',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function GermanyPage() {
  return (
    <main className="pt-20">
      <section className="py-20 px-6 text-center bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Software Development & Digital Services in <span className="text-primary">Germany</span>
          </h1>
          <p className="text-xl text-slate-400 mb-10">
            Von Berlin bis München, Hamburg bis Frankfurt - wir liefern hochwertige Softwarelösungen und digitales Marketing für deutsche Unternehmen aller Größen.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Features />

      <section className="py-20 px-6 container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Serving Major German Cities</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Trusted by businesses across Deutschland</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { city: 'Berlin', desc: 'Capital & startup hub - SaaS & fintech solutions' },
            { city: 'Munich', desc: 'Tech & automotive - Enterprise software' },
            { city: 'Hamburg', desc: 'Media & logistics - Digital solutions' },
            { city: 'Frankfurt', desc: 'Financial center - Banking & fintech IT' },
            { city: 'Stuttgart', desc: 'Engineering hub - Industrial software' },
            { city: 'Düsseldorf', desc: 'Business center - Consulting & retail tech' },
          ].map((loc) => (
            <div key={loc.city} className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold mb-2 text-white">{loc.city}</h3>
              <p className="text-slate-400 text-sm">{loc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-900/50">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Warum Deutsche Unternehmen Uns Wählen</h2>
            <p className="text-slate-400 mb-6 text-lg">Combining German engineering standards with Indian technical expertise.</p>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3"><span className="text-primary">✓</span><span><strong>Quality Focus:</strong> German-level attention to detail and precision</span></li>
              <li className="flex items-start gap-3"><span className="text-primary">✓</span><span><strong>GDPR Compliant:</strong> Full DSGVO/GDPR compliance for all projects</span></li>
              <li className="flex items-start gap-3"><span className="text-primary">✓</span><span><strong>Time Zone Proximity:</strong> Only 3.5 hours difference for real-time collaboration</span></li>
              <li className="flex items-start gap-3"><span className="text-primary">✓</span><span><strong>German Communication:</strong> German-speaking project managers available</span></li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700">
            <h3 className="text-2xl font-bold mb-4 text-primary">Our Germany Expertise</h3>
            <ul className="space-y-3 text-slate-300">
              <li>🇩🇪 Mittelstand Digitalization</li>
              <li>🇩🇪 Industry 4.0 Solutions</li>
              <li>🇩🇪 Automotive Software</li>
              <li>🇩🇪 Fintech & Banking IT</li>
              <li>🇩🇪 E-commerce für den deutschen Markt</li>
              <li>🇩🇪 Local SEO für Deutschland</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Industries We Serve in Germany</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { industry: 'Automotive', icon: '🚗' },
            { industry: 'Manufacturing', icon: '🏭' },
            { industry: 'Financial Services', icon: '💼' },
            { industry: 'Healthcare', icon: '🏥' },
          ].map((item) => (
            <div key={item.industry} className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700">
              <div className="text-3xl mb-3">{item.icon}</div>
              <div className="text-slate-300 font-medium">{item.industry}</div>
            </div>
          ))}
        </div>
      </section>

      <CTA2
        title="Bereit für Ihre digitale Transformation?"
        description="Ready to start your digital transformation? Contact us for a free consultation in English or German."
        primaryButtonText="Kontaktieren Sie Uns"
      />
    </main>
  );
}
