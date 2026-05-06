import SEO from '@/components/SEO';
import { getMergedKeywords } from '@/src/seo/defaultKeywords';
import ServicesContent from './ServicesContent';




<SEO title="Services | MyEnum Agency - Software Development, Web & Digital Marketing Services" description="Explore MyEnum Agency's comprehensive services: custom software development, web development, mobile apps, SaaS products, and digital marketing solutions for businesses worldwide." keywords={getMergedKeywords('/services')} />
export default function ServicesPage() {
  return <>
  <ServicesContent />
  </>;
}