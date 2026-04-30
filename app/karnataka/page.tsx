import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Features from '@/components/features-12';
import CTA2 from '@/components/mvpblocks/cta-2';

export const metadata: Metadata = {
  title: 'Software Development Company in Karnataka | MyEnum Agency - Bangalore, Mysore, Hubli',
  description: 'Top software development company in Karnataka offering custom software, web development, mobile apps, and digital marketing in Bangalore, Mysore, Hubli, Mangalore, and across Karnataka.',
  keywords: [
    'software development Karnataka',
    'web development Karnataka',
    'IT company Karnataka',
    'software company Bangalore',
    'web development Mysore',
    'digital marketing Karnataka',
    'mobile app development Bangalore',
    'startup development Karnataka',
  ],
  openGraph: {
    title: 'Software Development Company in Karnataka | MyEnum Agency',
    description: 'Top software development company in Karnataka offering custom software, web development, mobile apps, and digital marketing services.',
    url: 'https://myenum.in/karnataka',
    siteName: 'MyEnum Agency',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Development Company in Karnataka | MyEnum Agency',
  },
  alternates: {
    canonical: 'https://myenum.in/karnataka',
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

export default function KarnatakaPage() {
  return (
    <main className="pt-20">
      <section className="py-20 px-6 text-center bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Software Development & Tech Innovation in <span className="text-primary">Karnataka</span>
          </h1>
          <p className="text-xl text-slate-400 mb-10">
            From Bangalore&apos;s Silicon Valley to Mysore&apos;s heritage - we deliver cutting-edge software solutions and digital marketing to businesses across Karnataka.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Serving Karnataka&apos;s Tech Hubs</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Partner with a team that understands Karnataka&apos;s dynamic tech landscape</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { city: 'Bangalore', desc: 'Silicon Valley - Startups, SaaS, and enterprise solutions' },
            { city: 'Mysore', desc: 'Heritage city - Web development & digital transformation' },
            { city: 'Hubli-Dharwad', desc: 'North Karnataka hub - Business automation' },
            { city: 'Mangalore', desc: 'Coastal business - E-commerce & retail solutions' },
            { city: 'Belgaum', desc: 'Industrial center - Manufacturing software' },
            { city: 'Davangere', desc: 'Growing market - Digital marketing & SEO' },
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
            <h2 className="text-3xl font-bold mb-6">Why Karnataka Startups & Enterprises Choose Us</h2>
            <p className="text-slate-400 mb-6 text-lg">Built for the innovation capital of India.</p>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3"><span className="text-primary">✓</span><span><strong>Startup Ecosystem:</strong> MVP development for Bangalore startups</span></li>
              <li className="flex items-start gap-3"><span className="text-primary">✓</span><span><strong>Enterprise Ready:</strong> Scalable solutions for large organizations</span></li>
              <li className="flex items-start gap-3"><span className="text-primary">✓</span><span><strong>VC Network:</strong> Experience working with funded startups</span></li>
              <li className="flex items-start gap-3"><span className="text-primary">✓</span><span><strong>Competitive Pricing:</strong> Quality delivery at Karnataka-friendly rates</span></li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700">
            <h3 className="text-2xl font-bold mb-4 text-primary">Specializations</h3>
            <ul className="space-y-3 text-slate-300">
              <li>🚀 SaaS Product Development</li>
              <li>🚀 Startup MVP & Prototyping</li>
              <li>🚀 Enterprise Software Solutions</li>
              <li>🚀 Digital Marketing for Tech Companies</li>
              <li>🚀 Cloud-Native Applications</li>
              <li>🚀 API Development & Integration</li>
            </ul>
          </div>
        </div>
      </section>

      <CTA2
        title="Ready to Build Something Amazing in Karnataka?"
        description="From startup MVPs to enterprise solutions, we have the expertise to bring your vision to life."
        primaryButtonText="Start Your Project"
      />
    </main>
  );
}
