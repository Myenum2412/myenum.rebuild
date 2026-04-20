import type { Metadata } from 'next';
import Features from '@/components/features-3';

export const metadata: Metadata = {
  title: 'Features & Services - MyEnum Agency | Software, Web & Digital Solutions',
  description: 'Discover MyEnum Agency\'s powerful features and capabilities. Custom software development, responsive websites, mobile apps, SaaS products, and comprehensive digital marketing services. View all features!',
  keywords: [
    'Myenum features',
    'software features',
    'website features',
    'digital marketing features',
    'our services',
    'what we offer',
    'software services',
    'web services',
    'digital services',
    'development services',
    'custom software features',
    'web development features',
    'mobile app features',
    'SaaS product features',
    'digital marketing features',
    'SEO features',
    'PPC features',
    'social media features',
    'UI UX design features',
    'cloud services features',
    'API development features',
    'e-commerce features',
    'custom development',
    'enterprise solutions',
    'startup solutions',
    'business solutions',
    'digital transformation',
    'innovation features',
    'technology stack',
    'development tools',
    'programming languages',
    'frameworks we use',
    'security features',
    'scalability features',
    'performance features',
    'support features',
    'maintenance features',
    'consulting features',
  ],
  openGraph: {
    title: 'Features & Services - MyEnum Agency',
    description: 'Discover MyEnum Agency\'s powerful features and capabilities. Custom software, websites, mobile apps, and digital marketing services.',
    url: 'https://myenum.in/features',
    siteName: 'MyEnum Agency',
    type: 'website',
    images: [
      {
        url: '/iconc.webp',
        width: 1200,
        height: 630,
        alt: 'MyEnum Agency Features & Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Features & Services - MyEnum Agency',
    description: 'Discover MyEnum Agency\'s powerful features and capabilities. Custom software, websites, mobile apps, and digital marketing.',
  },
  alternates: {
    canonical: 'https://myenum.in/features',
  },
};

export default function FeaturesPage() {
  return (
    <>
      <Features />
    </>
  );
}