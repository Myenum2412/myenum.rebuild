import type { Metadata } from 'next';
import ServicesContent from './ServicesContent';

export const metadata: Metadata = {
  title: 'Myenum Services - Web Development, Software Development and Digital Solutions',
  description: "Explore Myenum's professional web development, Software Development and Digital Solutions. We specialize in e-commerce websites, startup solutions, and more.",
  keywords: [
    'Myenum',
    'web development',
    'e-commerce websites',
    'startup solutions',
    'digital services',
    'website design',
    'website development India',
  ],
  openGraph: {
    title: 'Myenum Services - Web Development, Software Development and Digital Solutions',
    description: "Explore Myenum's professional web development, Software Development and Digital Solutions. We specialize in e-commerce websites, startup solutions, and more.",
    url: 'https://myenum.in/services',
    siteName: 'Myenum',
    images: [
      {
        url: 'https://myenum.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Myenum Services',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Myenum Services - Web Development, Software Development and Digital Solutions',
    description: "Explore Myenum's professional web development, Software Development and Digital Solutions. We specialize in e-commerce websites, startup solutions, and more.",
    images: ['https://myenum.in/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://myenum.in/services',
  },
};

export default function ServicesPage() {
  return <>
  <ServicesContent />
  </>;
}