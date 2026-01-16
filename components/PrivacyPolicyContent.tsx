'use client';

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronRight, Mail, Phone, MapPin } from 'lucide-react';

export default function PrivacyPolicyContent() {
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'information-collected', title: 'Information We Collect' },
    { id: 'information-use', title: 'How We Use Your Information' },
    { id: 'information-share', title: 'How We Share Your Information' },
    { id: 'data-security', title: 'Data Storage and Security' },
    { id: 'your-rights', title: 'Your Rights' },
    { id: 'third-party', title: 'Third-Party Links' },
    { id: 'children-privacy', title: "Children's Privacy" },
    { id: 'policy-changes', title: 'Changes to This Privacy Policy' },
    { id: 'contact', title: 'Contact Us' },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black py-8 px-4">
      <div className="max-w-6xl mx-auto mt-20">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-300">Effective Date: September 15, 2025</p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Table of Contents */}
          <aside className="lg:w-1/4">
            <Card className="sticky top-24 bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4 text-white">Table of Contents</h2>
                <ScrollArea className="h-[calc(100vh-200px)]">
                  <ul className="space-y-2">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <Button
                          variant={activeSection === section.id ? "secondary" : "ghost"}
                          className="w-full justify-start text-white"
                          onClick={() => scrollToSection(section.id)}
                        >
                          <ChevronRight className="h-4 w-4 mr-2" />
                          {section.title}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="lg:w-3/4">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-8">
                <section id="introduction" className="mb-10">
                  <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
                  <p className="text-gray-300 mb-4">
                    Welcome to Myenum Agency. We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and disclose your data when you interact with our website, services, or applications.
                  </p>
                  <p className="text-gray-300">
                    By using our website or services, you agree to the terms of this Privacy Policy.
                  </p>
                </section>

                <section id="information-collected" className="mb-10">
                  <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
                  <p className="text-gray-300 mb-4">We collect the following types of information:</p>
                  
                  <h3 className="text-xl font-medium text-gray-200 mb-2">a. Personal Information</h3>
                  <p className="text-gray-300 mb-4">
                    When you register, fill out forms, subscribe to our newsletter, contact us, or use our services, we may collect personal information such as:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 mb-6">
                    <li>Full Name</li>
                    <li>Email Address</li>
                    <li>Phone Number</li>
                    <li>Company Name</li>
                    <li>Job Title</li>
                    <li>Payment Information (when applicable)</li>
                    <li>Profile Picture (if uploaded)</li>
                  </ul>
                  
                  <h3 className="text-xl font-medium text-gray-200 mb-2">b. Non-Personal Information</h3>
                  <p className="text-gray-300 mb-4">
                    We may also collect non-personal data about your interactions with our website or services, such as:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 mb-6">
                    <li>IP Address</li>
                    <li>Browser Type</li>
                    <li>Operating System</li>
                    <li>Referring URLs</li>
                    <li>Pages Visited</li>
                    <li>Date and Time of Access</li>
                    <li>Device Information</li>
                  </ul>
                  
                  <h3 className="text-xl font-medium text-gray-200 mb-2">c. Cookies and Tracking Technologies</h3>
                  <p className="text-gray-300">
                    We use cookies and similar tracking technologies to enhance user experience, analyze usage patterns, and improve our services. Cookies help us remember your preferences and provide tailored content.
                  </p>
                </section>

                <section id="information-use" className="mb-10">
                  <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
                  <p className="text-gray-300 mb-4">
                    We use the information we collect for the following purposes:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300">
                    <li>To provide and improve our services</li>
                    <li>To manage your account and deliver requested services</li>
                    <li>To process payments securely</li>
                    <li>To send important notifications (account activity, service updates, etc.)</li>
                    <li>To communicate promotional offers (only if you consent)</li>
                    <li>To analyze usage patterns and improve our website functionality</li>
                    <li>To provide customer support and respond to inquiries</li>
                    <li>To comply with legal obligations</li>
                  </ul>
                </section>

                <section id="information-share" className="mb-10">
                  <h2 className="text-2xl font-semibold text-white mb-4">4. How We Share Your Information</h2>
                  <p className="text-gray-300 mb-4">
                    We do not sell your personal data. However, we may share your information in the following cases:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300">
                    <li>
                      <span className="font-medium">Service Providers:</span> We may share data with trusted third-party service providers who perform services on our behalf (e.g., payment processors, cloud hosting providers, marketing platforms).
                    </li>
                    <li>
                      <span className="font-medium">Legal Requirements:</span> We may disclose your data if required by law or in response to valid requests by public authorities (such as a court or a government agency).
                    </li>
                    <li>
                      <span className="font-medium">Business Transfers:</span> If Myenum Agency is involved in a merger, acquisition, or asset sale, your personal data may be transferred to the new entity.
                    </li>
                  </ul>
                </section>

                <section id="data-security" className="mb-10">
                  <h2 className="text-2xl font-semibold text-white mb-4">5. Data Storage and Security</h2>
                  <p className="text-gray-300 mb-4">
                    We take data security seriously and use industry-standard practices to protect your personal information, including:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 mb-4">
                    <li>Encryption of sensitive data during transmission (HTTPS)</li>
                    <li>Secure data storage on trusted cloud platforms</li>
                    <li>Regular system updates and security patches</li>
                    <li>Access controls to ensure only authorized personnel can access your data</li>
                  </ul>
                  <p className="text-gray-300">
                    However, no method of transmission or storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
                  </p>
                </section>

                <section id="your-rights" className="mb-10">
                  <h2 className="text-2xl font-semibold text-white mb-4">6. Your Rights</h2>
                  <p className="text-gray-300 mb-4">
                    Depending on your location, you may have the following rights under applicable data protection laws:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 mb-4">
                    <li>Right to access the personal data we hold about you</li>
                    <li>Right to request correction of inaccurate data</li>
                    <li>Right to request deletion of your personal data</li>
                    <li>Right to restrict processing of your data</li>
                    <li>Right to object to processing</li>
                    <li>Right to data portability</li>
                  </ul>
                  <p className="text-gray-300">
                    To exercise any of these rights, please contact us at:
                    <br />
                    <span className="font-medium">📧 Email: developer@myenum.in</span>
                    <br />
                    We will respond within a reasonable time, as required by applicable laws.
                  </p>
                </section>

                <section id="third-party" className="mb-10">
                  <h2 className="text-2xl font-semibold text-white mb-4">7. Third-Party Links</h2>
                  <p className="text-gray-300">
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices of those external sites. We encourage you to read their privacy policies before providing any personal information.
                  </p>
                </section>

                <section id="children-privacy" className="mb-10">
                  <h2 className="text-2xl font-semibold text-white mb-4">8. Children&apos;s Privacy</h2>
                  <p className="text-gray-300">
                    Our services are not directed toward children under the age of 13. We do not knowingly collect or store personal information from children. If we discover that we have collected information from a child, we will promptly delete it.
                  </p>
                </section>

                <section id="policy-changes" className="mb-10">
                  <h2 className="text-2xl font-semibold text-white mb-4">9. Changes to This Privacy Policy</h2>
                  <p className="text-gray-300 mb-4">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. The most current version will always be posted on our website at https://www.myenum.com/privacy-policy.
                  </p>
                  <p className="text-gray-300">
                    We recommend that you review the policy periodically to stay informed about how we protect your data.
                  </p>
                </section>

                <section id="contact">
                  <h2 className="text-2xl font-semibold text-white mb-4">10. Contact Us</h2>
                  <p className="text-gray-300 mb-6">
                    If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us at:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-3 text-gray-300" />
                      <span className="text-gray-300">📧 Email: developer@myenum.in</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-3 text-gray-300" />
                      <span className="text-gray-300">📞 Phone: +91 90423 76479</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-3 text-gray-300" />
                      <span className="text-gray-300">🏢 Address: Myenum Agency, [Your Address Here]</span>
                    </div>
                  </div>
                </section>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
}
