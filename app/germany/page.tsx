import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Features from '@/components/features-12';
import CTA2 from '@/components/mvpblocks/cta-2';

export const metadata: Metadata = {
  title: 'Software Development Company in Germany | MyEnum Agency',
  description: 'Expert software development services in Germany. We provide custom software, web development, and digital marketing solutions in Berlin, Munich, Hamburg, and across Germany.',
  keywords: ['software development Germany', 'web development Germany', 'digital marketing Germany', 'IT company Germany', 'Berlin software development'],
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
            Tech Innovation in <span className="text-primary">Germany</span>
          </h1>
          <p className="text-xl text-slate-400 mb-10">
            Delivering high-precision software development and digital marketing services to the German market. Excellence and reliability in every line of code.
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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Supporting German Mittelstand & Startups</h2>
            <p className="text-slate-400 mb-6 text-lg">
              We provide the technical backbone for German businesses to excel in the digital age.
            </p>
            <ul className="grid grid-cols-2 gap-4 text-slate-300">
              <li className="flex items-center gap-2">• Berlin</li>
              <li className="flex items-center gap-2">• Munich (München)</li>
              <li className="flex items-center gap-2">• Hamburg</li>
              <li className="flex items-center gap-2">• Cologne (Köln)</li>
              <li className="flex items-center gap-2">• Frankfurt</li>
              <li className="flex items-center gap-2">• Stuttgart</li>
              <li className="flex items-center gap-2">• Düsseldorf</li>
              <li className="flex items-center gap-2">• Leipzig</li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700">
            <h3 className="text-2xl font-bold mb-4 text-primary">Why Work With Us?</h3>
            <p className="text-slate-300 mb-4">
              Our commitment to quality, security, and efficiency makes us the ideal partner for German enterprises.
            </p>
            <ul className="space-y-3 text-slate-400">
              <li>✅ High-Performance Software Engineering</li>
              <li>✅ Secure & Compliant Solutions</li>
              <li>✅ Agile Development Methodologies</li>
              <li>✅ Multilingual Communication</li>
            </ul>
          </div>
        </div>
      </section>

      <CTA2 
        title="Ready to Start Your Digital Journey in Germany?" 
        description="Connect with our experts and discover how we can help your business thrive."
        primaryButtonText="Contact Us"
      />
    </main>
  );
}
