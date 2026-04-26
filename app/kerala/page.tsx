import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Features from '@/components/features-12';
import CTA2 from '@/components/mvpblocks/cta-2';

export const metadata: Metadata = {
  title: 'Software Development Company in Kerala | MyEnum Agency',
  description: 'Top-rated software development company in Kerala. We offer custom software, web development, and digital marketing services in Kochi, Trivandrum, and across Kerala.',
  keywords: ['software development Kerala', 'web development Kerala', 'digital marketing Kerala', 'IT company Kerala'],
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
            Digital Transformation in <span className="text-primary">Kerala</span>
          </h1>
          <p className="text-xl text-slate-400 mb-10">
            Providing high-quality software development and digital marketing services across Kerala. We help Kerala-based businesses reach a global audience.
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
            <h2 className="text-3xl font-bold mb-6">Innovative Solutions for Kerala Businesses</h2>
            <p className="text-slate-400 mb-6 text-lg">
              Our team works closely with startups and established enterprises in Kerala to deliver robust digital products.
            </p>
            <ul className="grid grid-cols-2 gap-4 text-slate-300">
              <li className="flex items-center gap-2">• Kochi</li>
              <li className="flex items-center gap-2">• Thiruvananthapuram</li>
              <li className="flex items-center gap-2">• Kozhikode</li>
              <li className="flex items-center gap-2">• Thrissur</li>
              <li className="flex items-center gap-2">• Kollam</li>
              <li className="flex items-center gap-2">• Kannur</li>
              <li className="flex items-center gap-2">• Kottayam</li>
              <li className="flex items-center gap-2">• Palakkad</li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700">
            <h3 className="text-2xl font-bold mb-4 text-primary">Why Partner With Us?</h3>
            <p className="text-slate-300 mb-4">
              We combine deep technical expertise with a thorough understanding of the local market to help you succeed.
            </p>
            <ul className="space-y-3 text-slate-400">
              <li>✅ Multi-Speciality Development Expertise</li>
              <li>✅ Seamless Communication & Project Management</li>
              <li>✅ Focus on Scalability & Performance</li>
              <li>✅ Proven Track Record in Healthcare & SaaS</li>
            </ul>
          </div>
        </div>
      </section>

      <CTA2 
        title="Ready to Scale Your Business in Kerala?" 
        description="Connect with our experts today and let's discuss your next big project."
        primaryButtonText="Contact Us"
      />
    </main>
  );
}
