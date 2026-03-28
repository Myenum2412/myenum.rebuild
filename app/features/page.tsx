import type { Metadata } from 'next';
import Features from '@/components/features-3';

export const metadata: Metadata = {
  title: 'Features & Services - Myenum Agency | Software, Web & Digital Solutions',
  description: 'Discover Myenum Agency\'s powerful features and capabilities. Custom software development, responsive websites, mobile apps, SaaS products, and comprehensive digital marketing services. View all features!',
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
    title: 'Features & Services - Myenum Agency',
    description: 'Discover Myenum Agency\'s powerful features and capabilities. Custom software, websites, mobile apps, and digital marketing services.',
    url: 'https://www.myenum.in/features',
    siteName: 'Myenum Agency',
    type: 'website',
    images: [
      {
        url: 'https://www.myenum.in/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Myenum Agency Features & Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Features & Services - Myenum Agency',
    description: 'Discover Myenum Agency\'s powerful features and capabilities. Custom software, websites, mobile apps, and digital marketing.',
  },
  alternates: {
    canonical: 'https://www.myenum.in/features',
  },
};

export default function FeaturesPage() {
  return (
    <>
      <Features />
    </>
  );
}