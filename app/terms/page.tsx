// app/terms/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Terms and Conditions | MyEnum Agency - Service Agreement',
  description: 'MyEnum Agency Terms and Conditions. Read our service agreement, payment terms, intellectual property rights, confidentiality, and warranty policies for software and web development services.',
  keywords: [
    'terms and conditions',
    'terms of service',
    'service agreement',
    'terms of use',
    'terms',
    'conditions',
    'Myenum terms',
    'service contract',
    'payment terms',
    'project terms',
    'agreement',
    'contract terms',
    'legal terms',
    'business terms',
    'software development terms',
    'web development terms',
    'intellectual property',
    'IP rights',
    'confidentiality agreement',
    'non-disclosure',
    'NDA',
    'payment policy',
    'refund policy',
    'cancellation policy',
    'termination policy',
    'warranty terms',
    'support terms',
    'liability terms',
    'limitation of liability',
    'governing law',
    'jurisdiction',
    'dispute resolution',
    'amendments',
    'updates',
    'contact terms',
    'legal agreement',
    'client agreement',
    'service provider terms',
    'business agreement',
  ],
  openGraph: {
    title: 'Terms and Conditions | MyEnum Agency',
    description: 'MyEnum Agency Terms and Conditions. Read our service agreement, payment terms, intellectual property rights, and warranty policies.',
    url: 'https://myenum.in/terms',
    siteName: 'MyEnum Agency',
    type: 'website',
    images: [
      {
        url: '/iconc.webp',
        width: 1200,
        height: 630,
        alt: 'MyEnum Agency Terms and Conditions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms and Conditions | MyEnum Agency',
    description: 'MyEnum Agency Terms and Conditions. Read our service agreement, payment terms, intellectual property rights, and warranty policies.',
  },
  alternates: {
    canonical: 'https://myenum.in/terms',
  },
};

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-10 mt-20">
        <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
        <p className="text-lg text-muted-foreground">Effective Date: September 15, 2025</p>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Welcome to MyEnum Agency, a professional digital solutions provider specializing in web and software development, 
            content creation, IT consulting, and digital marketing. These Terms and Conditions govern your use of our services, 
            including but not limited to website development, custom software solutions, consultation services, digital marketing 
            campaigns, and other IT-related services.
          </p>
          <p className="mt-4">
            By accessing or using our website <Link href="https://www.myenum.com" className="text-blue-600 hover:underline">https://www.myenum.com</Link> 
            and engaging our services, you agree to comply with the following terms.
          </p>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground text-sm mr-2">1</span>
              Scope of Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>MyEnum Agency offers services including:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Web Development (Static, Dynamic, CMS-based, eCommerce)</li>
              <li>Custom Software Development</li>
              <li>Mobile App Development</li>
              <li>Digital Marketing & SEO</li>
              <li>Content Creation & Branding</li>
              <li>IT Consultation & Cloud Solutions</li>
              <li>Maintenance and Support</li>
            </ul>
            <p className="mt-4">Our service scope will always be detailed in your individual Service Agreement or Proposal.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground text-sm mr-2">2</span>
              Intellectual Property
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• All intellectual property (source code, designs, branding materials, documents, etc.) created by MyEnum Agency remains our property until full payment is received.</li>
              <li>• Upon full payment, ownership of the final delivered work is transferred to the client.</li>
              <li>• MyEnum Agency retains the right to showcase the delivered work in our portfolio or marketing materials unless explicitly restricted by a confidentiality agreement.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground text-sm mr-2">3</span>
              Payment Terms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• Standard payment model:
                <ul className="list-disc pl-5 mt-1">
                  <li>50% advance upon signing the Service Agreement</li>
                  <li>50% upon project completion or milestone delivery</li>
                </ul>
              </li>
              <li>• Late payments incur a penalty of 1.5% per month on the outstanding balance.</li>
              <li>• All payments must be in Indian Rupees (INR) unless otherwise agreed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground text-sm mr-2">4</span>
              Project Timeline & Delivery
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• Project timelines are estimates provided based on requirements and complexity.</li>
              <li>• Delays caused by the client (e.g., delayed approvals, missing content) will result in corresponding project timeline adjustments.</li>
              <li>• Once delivered, the client must review and confirm acceptance of the work within 7 working days.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground text-sm mr-2">5</span>
              Confidentiality
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• Both parties agree to treat all information exchanged as confidential.</li>
              <li>• No confidential information may be shared with third parties without prior written consent.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground text-sm mr-2">6</span>
              Revisions and Modifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• Each service package includes a specified number of revision cycles (typically 2–3).</li>
              <li>• Additional revisions are subject to extra charges based on the scope of work.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground text-sm mr-2">7</span>
              Termination Policy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• Either party may terminate the agreement by providing a written notice of 15 working days.</li>
              <li>• On termination, the client is obligated to pay for work completed up to the termination date.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground text-sm mr-2">8</span>
              Warranty & Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• MyEnum Agency provides a standard 30-day support warranty after project delivery for bug fixes and minor adjustments.</li>
              <li>• Ongoing maintenance can be provided via a separate support agreement.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground text-sm mr-2">9</span>
              Limitation of Liability
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• MyEnum Agency is not liable for any indirect, incidental, or consequential damages arising out of service use.</li>
              <li>• Our maximum liability is limited to the total amount paid by the client.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground text-sm mr-2">10</span>
              Governing Law
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• These terms are governed by the laws of India.</li>
              <li>• Any disputes will be resolved under the jurisdiction of courts in Chennai, Tamil Nadu, India.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground text-sm mr-2">11</span>
              Force Majeure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Neither party shall be held liable for delays caused by events beyond their reasonable control, including but not limited to natural disasters, acts of government, power failures, or cyber-attacks.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground text-sm mr-2">12</span>
              Privacy Policy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Please refer to our separate <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link> document for information on data collection, processing, and protection practices.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground text-sm mr-2">13</span>
              Amendments to Terms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              MyEnum Agency reserves the right to update or modify these Terms and Conditions at any time.
              The latest version will always be published at: <Link href="https://www.myenum.com/terms" className="text-blue-600 hover:underline">https://www.myenum.com/terms</Link>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground text-sm mr-2">14</span>
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>For any questions related to these Terms and Conditions, please contact:</p>
            <div className="mt-4 space-y-2">
              <p className="flex items-center">
                <span className="mr-2">📧</span> Email: <Link href="mailto:developer@myenum.in" className="ml-1 text-blue-600 hover:underline">developer@myenum.in</Link>
              </p>
              <p className="flex items-center">
                <span className="mr-2">📞</span> Phone: <Link href="tel:+919042376479" className="ml-1 text-blue-600 hover:underline">+91 90423 76479</Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-10 text-center">
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}