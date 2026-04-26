import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Features from '@/components/features-12';
import CTA2 from '@/components/mvpblocks/cta-2';

export const metadata: Metadata = {
  title: 'Software Development Company in UK | MyEnum Agency',
  description: 'Global software development services in the United Kingdom. Custom software, web development, and digital marketing for businesses in London, Manchester, and across the UK.',
  keywords: ['software development UK', 'web development UK', 'digital marketing UK', 'IT company UK', 'London software development'],
  alternates: {
    canonical: 'https://myenum.in/uk',
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

export default function UKPage() {
  return (
    <main className="pt-20">
      <section className="py-20 px-6 text-center bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Premium Digital Services in the <span className="text-primary">United Kingdom</span>
          </h1>
          <p className="text-xl text-slate-400 mb-10">
            Delivering top-tier software development and digital marketing solutions to clients across the UK. We combine global talent with UK business standards.
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
            <h2 className="text-3xl font-bold mb-6">UK-Focused Digital Growth</h2>
            <p className="text-slate-400 mb-6 text-lg">
              We help UK businesses leverage modern technology to scale efficiently and reach new heights.
            </p>
            <ul className="grid grid-cols-2 gap-4 text-slate-300">
              <li className="flex items-center gap-2">• London</li>
              <li className="flex items-center gap-2">• Manchester</li>
              <li className="flex items-center gap-2">• Birmingham</li>
              <li className="flex items-center gap-2">• Glasgow</li>
              <li className="flex items-center gap-2">• Liverpool</li>
              <li className="flex items-center gap-2">• Bristol</li>
              <li className="flex items-center gap-2">• Leeds</li>
              <li className="flex items-center gap-2">• Edinburgh</li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700">
            <h3 className="text-2xl font-bold mb-4 text-primary">Global Standards, Local Impact</h3>
            <p className="text-slate-300 mb-4">
              Our processes are aligned with international quality standards, ensuring secure and reliable delivery for UK enterprises.
            </p>
            <ul className="space-y-3 text-slate-400">
              <li>✅ Bespoke Enterprise Software</li>
              <li>✅ Advanced E-commerce Solutions</li>
              <li>✅ Data-Driven Digital Marketing</li>
              <li>✅ 24/7 Global Support</li>
            </ul>
          </div>
        </div>
      </section>

      <CTA2 
        title="Looking for a Tech Partner in the UK?" 
        description="Schedule a call with our consultants to discuss how we can support your digital journey."
        primaryButtonText="Contact Us"
      />
    </main>
  );
}
