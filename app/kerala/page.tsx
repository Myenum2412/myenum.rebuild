import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Features from '@/components/features-12';
import CTA2 from '@/components/mvpblocks/cta-2';

export const metadata: Metadata = {
  title: 'Software Development Company in Kerala | MyEnum Agency - Kochi, Trivandrum, Calicut',
  description: 'Leading software development company in Kerala offering custom software, web development, mobile apps, and digital marketing in Kochi, Trivandrum, Calicut, Thrissur, and across Kerala.',
  keywords: [
    'software development Kerala',
    'web development Kerala',
    'IT company Kerala',
    'software company Kochi',
    'web development Trivandrum',
    'digital marketing Kerala',
    'mobile app development Kerala',
    'IT services Kochi',
  ],
  openGraph: {
    title: 'Software Development Company in Kerala | MyEnum Agency',
    description: 'Leading software development company in Kerala offering custom software, web development, mobile apps, and digital marketing services.',
    url: 'https://myenum.in/kerala',
    siteName: 'MyEnum Agency',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Development Company in Kerala | MyEnum Agency',
  },
  alternates: {
    canonical: 'https://myenum.in/kerala',
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

export default function KeralaPage() {
  return (
    <main className="pt-20">
      <section className="py-20 px-6 text-center bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Software Development & Digital Services in <span className="text-primary">Kerala</span>
          </h1>
          <p className="text-xl text-slate-400 mb-10">
            From Kochi to Trivandrum, Calicut to Thrissur - we deliver world-class software solutions and digital marketing services to businesses across God's Own Country.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Serving Cities Across Kerala</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">On-site consultations and dedicated support for businesses throughout Kerala</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { city: 'Kochi', desc: 'IT Hub - Startup ecosystem & tech parks' },
            { city: 'Trivandrum', desc: 'Capital city - Government & enterprise solutions' },
            { city: 'Calicut', desc: 'Education hub - EdTech & institutional software' },
            { city: 'Thrissur', desc: 'Cultural capital - Business automation' },
            { city: 'Kollam', desc: 'Port city - Logistics & trade software' },
            { city: 'Kannur', desc: 'Growing IT presence - Web & mobile apps' },
            { city: 'Kottayam', desc: 'Literacy hub - Digital publishing solutions' },
            { city: 'Palakkad', desc: 'Industrial center - Manufacturing ERP' },
          ].map((loc) => (
            <div key={loc.city} className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-primary/50 transition-colors">
              <h3 className="text-lg font-bold mb-2 text-white">{loc.city}</h3>
              <p className="text-slate-400 text-sm">{loc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-900/50">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Kerala Businesses Trust Us</h2>
            <p className="text-slate-400 mb-6 text-lg">Combining local market understanding with global technical excellence.</p>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3"><span className="text-primary">✓</span><span><strong>Local Understanding:</strong> We know Kerala's business culture</span></li>
              <li className="flex items-start gap-3"><span className="text-primary">✓</span><span><strong>Malayalam Support:</strong> Communicate in your preferred language</span></li>
              <li className="flex items-start gap-3"><span className="text-primary">✓</span><span><strong>Startup Friendly:</strong> MVP development for Kerala startups</span></li>
              <li className="flex items-start gap-3"><span className="text-primary">✓</span><span><strong>NRI Solutions:</strong> Specialized services for NRI entrepreneurs</span></li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700">
            <h3 className="text-2xl font-bold mb-4 text-primary">Our Expertise</h3>
            <ul className="space-y-3 text-slate-300">
              <li>⚡ SaaS Product Development</li>
              <li>⚡ Healthcare Software Solutions</li>
              <li>⚡ E-commerce & Online Stores</li>
              <li>⚡ Digital Marketing & SEO</li>
              <li>⚡ Mobile App Development</li>
              <li>⚡ Cloud Migration Services</li>
            </ul>
          </div>
        </div>
      </section>

      <CTA2
        title="Ready to Grow Your Business in Kerala?"
        description="Connect with our experts and discover how we can help your business thrive in Kerala's competitive market."
        primaryButtonText="Start Your Project"
      />
    </main>
  );
}
