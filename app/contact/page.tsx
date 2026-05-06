import ContactPageForm from '@/components/ContactPageForm';
import Faq3 from '@/components/mvpblocks/faq-3';
import SEO from '@/components/SEO';
import { getMergedKeywords } from '@/src/seo/defaultKeywords';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbList } from '@/components/ui/breadcrumb';
import { BreadcrumbPage } from '@/components/ui/breadcrumb';
import Link from 'next/link';




<SEO title="Contact MyEnum Agency | Get Free Consultation for Software & Digital Marketing" description="Contact MyEnum Agency for custom software development, web development, mobile apps, and digital marketing services. Get free consultation today! Reach us for projects in India, UAE, USA, UK, and globally." keywords={getMergedKeywords('/contact')} />
export default function ContactPage() {
    return (
        <>
          <div className="pt-12 md:pt-26">
            <div className="container mx-auto max-w-7xl px-4">
              <h1 className="text-4xl font-medium lg:text-5xl mb-4 text-foreground">Contact Us</h1>
              <Breadcrumb className="mb-6">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href="/">Home</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator   />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Get in touch with MyEnum Agency</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
  
        {/* Google Map Section */}
        <div className="pb-8 md:pb-12">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden border border-border shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3814367.9822943727!2d77.6054419!3d10.821166349999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xeecc4a2970743b%3A0xc0cbc21b39339ee2!2smyenum!5e1!3m2!1sen!2sin!4v1768563513696!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MyEnum Agency Location"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        <div>
          <ContactPageForm />
          <Faq3 />
        </div>  
      </>
    );
}