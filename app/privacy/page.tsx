import type { Metadata } from 'next';
import PrivacyPolicyContent from '@/components/PrivacyPolicyContent';

export const metadata: Metadata = {
  title: 'Privacy Policy - Myenum Agency',
  description: 'Myenum Agency Privacy Policy. Learn how we collect, use, store, and protect your personal information.',
  keywords: [
    'privacy policy',
    'data protection',
    'privacy',
    'Myenum privacy',
    'data security',
  ],
  openGraph: {
    title: 'Privacy Policy - Myenum Agency',
    description: 'Myenum Agency Privacy Policy. Learn how we collect, use, store, and protect your personal information.',
    url: 'https://www.myenum.in/privacy',
    siteName: 'Myenum Agency',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.myenum.in/privacy',
  },
};

export default function PrivacyPolicy() {
  return <PrivacyPolicyContent />;
}