import type { Metadata } from 'next';
import Features from '@/components/features-3';

export const metadata: Metadata = {
  title: 'Features - Myenum Agency',
  description: 'Discover the powerful features and capabilities of Myenum Agency\'s software, website, and digital marketing solutions.',
  keywords: [
    'Myenum features',
    'software features',
    'website features',
    'digital marketing features',
  ],
  openGraph: {
    title: 'Features - Myenum Agency',
    description: 'Discover the powerful features and capabilities of Myenum Agency\'s software, website, and digital marketing solutions.',
    url: 'https://www.myenum.in/features',
    siteName: 'Myenum Agency',
    type: 'website',
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