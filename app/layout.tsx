// app/layout.tsx
import SEO from '@/components/SEO';
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ClientLayout } from "@/components/ClientLayout";
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ variable: "--font-jetbrains-mono", subsets: ["latin"] });




<SEO title="MyEnum Agency | Best Software Development Company India & Global" description="Top-rated software development company offering custom software, SaaS products, web development, mobile apps, and digital marketing services globally. 500+ projects delivered. Get free quote today!" keywords={["software development company", "best software development company", "custom software development", "SaaS development company", "web development company India", "mobile app development company", "digital marketing services", "SEO agency India", "software development company Salem", "web development Salem", "digital marketing Salem", "software development company Kerala", "web development Kerala", "software development company Bangalore", "software development UK", "software development Germany", "software development USA", "SaaS product development", "enterprise software solutions", "startup software development", "e-commerce website development", "UI UX design services", "React development services", "Node.js development services", "Python development services", "AI development company", "machine learning development", "cloud computing services", "The Doctor Pro", "clinic management software", "hospital management system"]} />
export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Main Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MyEnum Agency",
    "alternateName": "MyEnum Digital Agency",
    "url": "https://myenum.in",
    "logo": "https://myenum.in/iconc.webp",
    "description": "Premium software development and digital marketing agency in India. Specializing in custom software, SaaS products, web development, and digital marketing services.",
    "foundingDate": "2020",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 10,
      "maxValue": 50
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "Tamil Nadu",
      "addressLocality": "Salem",
      "streetAddress": "Salem, Tamil Nadu"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "telephone": "+919042376479",
      "availableLanguage": ["English", "Tamil", "Hindi"]
    },
    "sameAs": [
      "https://www.facebook.com/p/My-enum-61572140267076/",
      "https://www.instagram.com/myenum.in/",
      "https://in.linkedin.com/company/myenum-am"
    ],
    "areaServed": [
      { "@type": "Country", "name": "India" },
      { "@type": "Country", "name": "United Arab Emirates" },
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Country", "name": "Germany" }
    ],
    "serviceType": [
      "Software Development",
      "Web Development",
      "Mobile App Development",
      "Digital Marketing",
      "SaaS Development",
      "E-commerce Solutions"
    ]
  };

  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MyEnum Agency",
    "image": "https://myenum.in/iconc.webp",
    "url": "https://myenum.in",
    "telephone": "+919042376479",
    "email": "developer@myenum.in",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "Tamil Nadu",
      "addressLocality": "Salem"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "11.6643",
      "longitude": "78.1460"
    },
    "openingHours": ["Mo-Fr 09:00-18:00"],
    "priceRange": "$$",
    "areaServed": [
      { "@type": "State", "name": "Tamil Nadu" },
      { "@type": "State", "name": "Kerala" },
      { "@type": "State", "name": "Karnataka" },
      { "@type": "Country", "name": "India" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Country", "name": "Germany" }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "11.6643",
        "longitude": "78.1460"
      },
      "geoRadius": "500 km"
    }
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Offer",
        "position": 1,
        "name": "Custom Software Development",
        "description": "Enterprise-grade custom software solutions tailored to your business needs. Includes ERP, CRM, and business automation software.",
        "provider": {
          "@type": "Organization",
          "name": "MyEnum Agency",
          "url": "https://myenum.in"
        },
        "areaServed": ["IN", "UK", "DE", "US"],
        "serviceType": "SoftwareDevelopment"
      },
      {
        "@type": "Offer",
        "position": 2,
        "name": "Web Development",
        "description": "Professional website and web application development using modern technologies like React, Next.js, Node.js, and more.",
        "provider": {
          "@type": "Organization",
          "name": "MyEnum Agency",
          "url": "https://myenum.in"
        },
        "areaServed": ["IN", "UK", "DE", "US"],
        "serviceType": "WebDevelopment"
      },
      {
        "@type": "Offer",
        "position": 3,
        "name": "Mobile App Development",
        "description": "Native and cross-platform mobile app development for iOS and Android. Flutter, React Native, and native development.",
        "provider": {
          "@type": "Organization",
          "name": "MyEnum Agency",
          "url": "https://myenum.in"
        },
        "areaServed": ["IN", "UK", "DE", "US"],
        "serviceType": "MobileApplicationDevelopment"
      },
      {
        "@type": "Offer",
        "position": 4,
        "name": "Digital Marketing Services",
        "description": "Comprehensive digital marketing including SEO, PPC, social media marketing, content marketing, and lead generation.",
        "provider": {
          "@type": "Organization",
          "name": "MyEnum Agency",
          "url": "https://myenum.in"
        },
        "areaServed": ["IN", "UK", "DE", "US"],
        "serviceType": "DigitalMarketing"
      },
      {
        "@type": "Offer",
        "position": 5,
        "name": "SaaS Product Development",
        "description": "Build and launch your SaaS products with cloud-native architecture, subscription billing, and multi-tenancy support.",
        "provider": {
          "@type": "Organization",
          "name": "MyEnum Agency",
          "url": "https://myenum.in"
        },
        "areaServed": ["IN", "UK", "DE", "US"],
        "serviceType": "SaaSDevelopment"
      },
      {
        "@type": "Offer",
        "position": 6,
        "name": "E-commerce Solutions",
        "description": "Full e-commerce development including Shopify, WooCommerce, Magento, and custom solutions with payment integration.",
        "provider": {
          "@type": "Organization",
          "name": "MyEnum Agency",
          "url": "https://myenum.in"
        },
        "areaServed": ["IN", "UK", "DE", "US"],
        "serviceType": "EcommerceDevelopment"
      }
    ]
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does MyEnum Agency offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MyEnum Agency offers comprehensive software development services including custom software development, web development, mobile app development, SaaS product development, e-commerce solutions, and digital marketing services."
        }
      },
      {
        "@type": "Question",
        "name": "Do you serve clients in Tamil Nadu and Kerala?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we proudly serve clients across Tamil Nadu (including Chennai, Salem, Coimbatore, Madurai) and Kerala (including Kochi, Trivandrum, Calicut). We also offer on-site consultations in these regions."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer services in UK and Germany?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide software development and digital marketing services to clients in the UK (including London, Manchester, Birmingham) and Germany (including Berlin, Munich, Frankfurt). We work with international clients remotely and can arrange on-site visits."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to develop a custom software or website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Development timelines vary based on project complexity. A simple website takes 2-4 weeks, while complex custom software or mobile apps typically take 2-6 months. We provide detailed timelines after requirements gathering."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer digital marketing services for local businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in local SEO and digital marketing for businesses in Tamil Nadu, Kerala, and Karnataka. We help local businesses improve their online presence and generate leads."
        }
      },
      {
        "@type": "Question",
        "name": "What is your pricing structure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer flexible pricing models including project-based quotes, hourly rates, and dedicated team engagements. Contact us for a free consultation and customized quote based on your requirements."
        }
      }
    ]
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://myenum.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://myenum.in/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Contact",
        "item": "https://myenum.in/contact"
      }
    ]
  };

  const allSchemas = [organizationSchema, localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema];

  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased dark text-slate-50`}
    >
      <body>
        <ClientLayout>{children}
        <Analytics mode="production" />

        </ClientLayout>

        {/* Schema.org JSON-LD - Multiple schemas */}
        {allSchemas.map((schema, index) => (
          <Script
            key={`schema-${index}`}
            id={`schema-org-${index}`}
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}

        {/* Microsoft Clarity */}
        <Script id="clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "svumhdjdy5");
          `}
        </Script>

        {/* Ahrefs Analytics */}
        <Script
          id="ahrefs-analytics"
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="K/mXjnOi6MxGC51EZCroJg"
          strategy="lazyOnload"
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DE486L9YQ8"
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DE486L9YQ8');
          `}
        </Script>
      </body>
    </html>
  );
}
