import SEO from '@/components/SEO';
import { getMergedKeywords } from '@/src/seo/defaultKeywords';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Features from '@/components/features-12';
import CTA2 from '@/components/mvpblocks/cta-2';


export default function TamilNaduPage() {
  return (
    <main className="pt-20">
        <SEO
          title="Software Development Company in Tamil Nadu | MyEnum Agency - Chennai, Salem, Coimbatore"
          description="Leading software development company in Tamil Nadu offering custom software, web development, mobile apps, and digital marketing services in Chennai, Salem, Coimbatore, Madurai, and across the state."
          keywords={[
            'software development Tamil Nadu',
            'web development Tamil Nadu',
            'IT company Tamil Nadu',
            'software company Chennai',
            'web development Salem',
            'software company Coimbatore',
            'digital marketing Tamil Nadu',
            'mobile app development Tamil Nadu',
          ]}
          openGraph={{
            title: 'Software Development Company in Tamil Nadu | MyEnum Agency',
            description: 'Leading software development company in Tamil Nadu offering custom software, web development, mobile apps, and digital marketing services.',
            url: 'https://myenum.in/tamil-nadu',
            siteName: 'MyEnum Agency',
            type: 'website',
            locale: 'en_IN',
          }}
          twitter={{
            card: 'summary_large_image',
            title: 'Software Development Company in Tamil Nadu | MyEnum Agency',
          }}
          alternates={{ canonical: 'https://myenum.in/tamil-nadu' }}
          robots={{ index: true, follow: true }}
        />
      <section className="py-20 px-6 text-center bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Software Development & Digital Services in <span className="text-primary">Tamil Nadu</span>
          </h1>
          <p className="text-xl text-slate-400 mb-10">
            From Chennai to Salem, Coimbatore to Madurai - we are your trusted technology partner for custom software, web development, mobile apps, and digital marketing across Tamil Nadu.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Serving Major Cities Across Tamil Nadu</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">We provide on-site consultations and dedicated support for businesses throughout Tamil Nadu</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { city: 'Chennai', desc: 'IT Capital - Enterprise software, SaaS products, and startup MVPs' },
            { city: 'Salem', desc: 'Our HQ - Full-service software development and digital marketing' },
            { city: 'Coimbatore', desc: 'Manufacturing hub - Industrial software and IoT solutions' },
            { city: 'Madurai', desc: 'Cultural capital - Web development and e-commerce solutions' },
            { city: 'Tiruchirappalli', desc: 'Educational hub - EdTech solutions and institutional software' },
            { city: 'Erode', desc: 'Trade center - Business automation and inventory systems' },
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
            <h2 className="text-3xl font-bold mb-6">Why Tamil Nadu Businesses Choose Us</h2>
            <p className="text-slate-400 mb-6 text-lg">We understand the local business landscape and combine it with global technical expertise.</p>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3"><span className="text-primary">✓</span><span><strong>Local Presence:</strong> Based in Salem, we can meet in person</span></li>
              <li className="flex items-start gap-3"><span className="text-primary">✓</span><span><strong>Tamil Language Support:</strong> Communicate in Tamil, English, or Hindi</span></li>
              <li className="flex items-start gap-3"><span className="text-primary">✓</span><span><strong>500+ Projects:</strong> Proven track record across Tamil Nadu</span></li>
              <li className="flex items-start gap-3"><span className="text-primary">✓</span><span><strong>Affordable Pricing:</strong> Competitive rates without compromising quality</span></li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700">
            <h3 className="text-2xl font-bold mb-4 text-primary">Our Services</h3>
            <ul className="space-y-3 text-slate-300">
              <li>🏭 Manufacturing ERP & Automation</li>
              <li>🏥 Healthcare & Hospital Management</li>
              <li>🎓 Educational Institution Software</li>
              <li>🏪 Retail & E-commerce Solutions</li>
              <li>📱 Mobile Apps for Local Businesses</li>
              <li>🔍 Local SEO for Tamil Nadu Market</li>
            </ul>
          </div>
        </div>
      </section>

      <CTA2
        title="Ready to Transform Your Business in Tamil Nadu?"
        description="Schedule a free consultation. We are ready to visit your office in Chennai, Salem, Coimbatore, or anywhere in Tamil Nadu."
        primaryButtonText="Contact Us Today"
      />
    </main>
  );
}
