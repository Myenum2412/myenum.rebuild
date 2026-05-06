import SEO from '@/components/SEO';
import { getMergedKeywords } from '@/src/seo/defaultKeywords';
import PrivacyPolicyContent from '@/components/PrivacyPolicyContent';




<SEO title="Privacy Policy | MyEnum Agency - Data Protection & Privacy Statement" description="MyEnum Agency Privacy Policy. Learn how we collect, use, store, and protect your personal information. We are committed to data protection and privacy compliance." keywords={getMergedKeywords('/privacy')} />
export default function PrivacyPolicy() {
  return <PrivacyPolicyContent />;
}