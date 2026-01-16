import AboutUs1 from '@/components/mvpblocks/about-us-1';
import Footer from '@/components/footer';
import type { Metadata } from 'next';
import Feature3 from '@/components/mvpblocks/feature-3';

export const metadata: Metadata = {
  title: 'About Us - Myenum Agency | Complete Business Solutions',
  description: 'Learn about Myenum Agency - your trusted partner for software development, web development, and digital marketing solutions. Complete business solutions under one roof.',
  keywords: [
    'Myenum Agency',
    'about Myenum',
    'software development company',
    'web development agency',
    'digital marketing agency',
    'business solutions',
    'complete digital solutions',
  ],
  openGraph: {
    title: 'About Us - Myenum Agency',
    description: 'Learn about Myenum Agency - your trusted partner for software development, web development, and digital marketing solutions.',
    url: 'https://www.myenum.in/about',
    siteName: 'Myenum Agency',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.myenum.in/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <div className='flex flex-col gap-10'>
        <AboutUs1 />
        <Feature3 />
        <Footer />
      </div>
    </>
  );
}
