import type { Metadata } from 'next';
import PrivacyPolicyContent from '@/components/PrivacyPolicyContent';

export const metadata: Metadata = {
  title: 'Privacy Policy | Myenum Agency - Data Protection & Privacy Statement',
  description: 'Myenum Agency Privacy Policy. Learn how we collect, use, store, and protect your personal information. We are committed to data protection and privacy compliance.',
  keywords: [
    'privacy policy',
    'data protection',
    'privacy',
    'Myenum privacy',
    'data security',
    'data privacy',
    'privacy statement',
    'privacy notice',
    'data collection',
    'data usage',
    'data storage',
    'information security',
    'personal data protection',
    'GDPR compliance',
    'data protection policy',
    'cookie policy',
    'cookies policy',
    'privacy practices',
    'data handling',
    'information privacy',
    'confidentiality',
    'data breach policy',
    'user privacy',
    'customer privacy',
    'client privacy',
    'business privacy',
    'privacy commitment',
    'privacy standards',
    'privacy compliance',
    'privacy laws',
    'data protection laws',
    'privacy rights',
    'user data protection',
    'data protection officer',
    'privacy safeguard',
    'secure data handling',
    'privacy for websites',
    'privacy for apps',
    'privacy for business',
  ],
  openGraph: {
    title: 'Privacy Policy | Myenum Agency',
    description: 'Myenum Agency Privacy Policy. Learn how we collect, use, store, and protect your personal information.',
    url: 'https://www.myenum.in/privacy',
    siteName: 'Myenum Agency',
    type: 'website',
    images: [
      {
        url: 'https://www.myenum.in/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Myenum Agency Privacy Policy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Myenum Agency',
    description: 'Myenum Agency Privacy Policy. Learn how we collect, use, store, and protect your personal information.',
  },
  alternates: {
    canonical: 'https://www.myenum.in/privacy',
  },
};

export default function PrivacyPolicy() {
  return <PrivacyPolicyContent />;
}