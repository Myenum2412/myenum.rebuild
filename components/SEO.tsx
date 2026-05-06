// components/SEO.tsx
import Head from "next/head";
import type { Metadata } from "next";

interface SEOProps extends Partial<Metadata> {
  title: string;
  description: string;
  keywords?: string[];
  alternates?: { canonical?: string; languages?: Record<string, string> };
  robots?: { index?: boolean; follow?: boolean; googleBot?: Record<string, unknown> };
  openGraph?: {
    title?: string;
    description?: string;
    url?: string;
    siteName?: string;
    type?: string;
    locale?: string;
    images?: Array<{ url: string; width?: number; height?: number; alt?: string }>;
  };
  twitter?: {
    card?: string;
    title?: string;
    description?: string;
    images?: string[];
  };
}

export default function SEO(props: SEOProps) {
  const {
    title,
    description,
    keywords,
    alternates,
    robots,
    openGraph,
    twitter,
  } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords.join(", ")} />}
      {/* Open Graph */}
      {openGraph?.title && <meta property="og:title" content={openGraph.title} />}
      {openGraph?.description && (
        <meta property="og:description" content={openGraph.description} />
      )}
      {openGraph?.url && <meta property="og:url" content={openGraph.url} />}
      {openGraph?.siteName && (
        <meta property="og:site_name" content={openGraph.siteName} />
      )}
      {openGraph?.type && <meta property="og:type" content={openGraph.type} />}
      {openGraph?.locale && (
        <meta property="og:locale" content={openGraph.locale} />
      )}
      {openGraph?.images?.map((img: {url: string; width?: number; height?: number; alt?: string}, i: number) => (
        <>
          <meta key={`og-img-${i}`} property="og:image" content={img.url} />
          {img.width && <meta key={`og-img-w-${i}`} property="og:image:width" content={String(img.width)} />}
          {img.height && <meta key={`og-img-h-${i}`} property="og:image:height" content={String(img.height)} />}
          {img.alt && <meta key={`og-img-alt-${i}`} property="og:image:alt" content={img.alt} />}
        </>
      ))}
      {/* Twitter */}
      {twitter?.card && <meta name="twitter:card" content={twitter.card} />}
      {twitter?.title && <meta name="twitter:title" content={twitter.title} />}
      {twitter?.description && (
        <meta name="twitter:description" content={twitter.description} />
      )}
      {twitter?.images?.map((img: string, i: number) => (
        <meta key={i} name="twitter:image" content={img} />
      ))}
      {/* Canonical */}
      {alternates?.canonical && (
        <link rel="canonical" href={alternates.canonical} />
      )}
      {/* Hreflang links for languages */}
      {alternates?.languages &&
        Object.entries(alternates.languages).map(([lang, url]) => (
          <link key={lang} rel="alternate" hrefLang={lang} href={url} />
        ))}
      {/* Robots */}
      {robots && (
        <meta
          name="robots"
          content={`${robots.index !== false ? "index" : "noindex"}, ${
            robots.follow !== false ? "follow" : "nofollow"
          }`}
        />
      )}
    </Head>
  );
}
