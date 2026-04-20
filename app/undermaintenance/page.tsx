import type { Metadata } from 'next';
import { VortexDemo } from '@/components/VortexDemo';

export const metadata: Metadata = {
  title: 'Under Maintenance - MyEnum Agency',
  description: 'This page is currently under maintenance. Please check back soon.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function UnderMaintenancePage() {
  return (
    <div>
      <VortexDemo />
    </div>
  );
}