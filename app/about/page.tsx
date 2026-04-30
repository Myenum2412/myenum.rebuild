import AboutUs1 from '@/components/mvpblocks/about-us-1';
import type { Metadata } from 'next';
import AboutSection1 from '@/components/AboutSection1';
import FeatureCarousel from '@/components/feature-carousel';
import Stats from '@/components/stats-4';

export const metadata: Metadata = {
  title: 'About Us | MyEnum Agency - Trusted Software & Digital Marketing Company India',
  description: 'Learn about MyEnum Agency - your trusted partner for software development, web development, mobile apps, SaaS products, and digital marketing solutions. 500+ projects delivered globally. Complete business solutions under one roof.',
  keywords: [
    'about MyEnum Agency',
    'about Myenum',
    'about us',
    'software development company',
    'software company',
    'software agency',
    'web development agency',
    'web development company',
    'digital marketing agency',
    'digital marketing company',
    'business solutions',
    'complete digital solutions',
    'IT company',
    'IT agency',
    'technology company',
    'digital agency',
    'software firm',
    'development company',
    'about our company',
    'our team',
    'team Myenum',
    'company profile',
    'company history',
    'who we are',
    'what we do',
    'our mission',
    'our vision',
    'our values',
    'company overview',
    'about software company',
    'about web company',
    'about digital agency',
    'best software company',
    'top software company',
    'leading software company',
    'trusted software partner',
    'software development firm',
    'web development firm',
    'digital marketing firm',
    'technology partner',
    'IT partner',
    'digital partner',
    'software development company India',
    'web development company India',
    'digital marketing company India',
    'IT company India',
    'software company Chennai',
    'web company Chennai',
    'digital agency Chennai',
    'software company Bangalore',
    'software company Hyderabad',
    'software company Mumbai',
    'software company Kerala',
    'software company Salem',
    'web company Salem',
    'digital agency Salem',
    'company story',
    'founder information',
    'leadership team',
    'expert team',
    'skilled developers',
    'experienced team',
    'professional team',
    'dedicated team',
    'our expertise',
    'our skills',
    'technology expertise',
    'development expertise',
    'digital expertise',
    'industry experience',
    'years experience',
    'projects completed',
    'clients served',
    'satisfied clients',
    'happy clients',
    'client testimonials',
    'success stories',
    'case studies',
    'company achievements',
    'awards recognition',
    'certifications',
    'quality standards',
    'ISO certified',
    'CMMI certified',
  ],
  openGraph: {
    title: 'About Us | MyEnum Agency',
    description: 'Learn about MyEnum Agency - your trusted partner for software development, web development, mobile apps, and digital marketing solutions.',
    url: 'https://myenum.in/about',
    siteName: 'MyEnum Agency',
    type: 'website',
    images: [
      {
        url: '/iconc.webp',
        width: 1200,
        height: 630,
        alt: 'About MyEnum Agency - Software & Digital Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | MyEnum Agency',
    description: 'Learn about MyEnum Agency - your trusted partner for software development, web development, mobile apps, and digital marketing solutions.',
  },
  alternates: {
    canonical: 'https://myenum.in/about',
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

export default function AboutPage() {
  return (
    <>
      <div className='flex flex-col gap-10'>
        {/* <AboutUs1 /> */}
        <AboutSection1/>
        {/* <Feature3 /> */}
        <FeatureCarousel/>
        <Stats/>
      </div>
    </>
  );
}
