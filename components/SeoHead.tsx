// components/SeoHead.tsx
import Head from 'next/head';

interface SeoHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl: string;
}

const SeoHead: React.FC<SeoHeadProps> = ({ title, description, keywords, canonicalUrl }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    {keywords && <meta name="keywords" content={keywords} />}
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="canonical" href={canonicalUrl} />

    {/* Open Graph for social sharing */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={canonicalUrl} />
    <meta property="og:type" content="website" />

    {/* JSON-LD Structured Data */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "MyEnum Agency",
          "url": "https://myenum.in/",
          "logo": "https://myenum.in/iconc.webp",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-90423-76479",
            "contactType": "Customer Service",
            "areaServed": "IN"
          },
          "sameAs": [
            "https://www.facebook.com/p/My-enum-61572140267076/",
            "https://www.instagram.com/myenum.in/",
            "https://in.linkedin.com/company/myenum-am"
          ]
        })
      }}
    />
  </Head>
);

export default SeoHead;
