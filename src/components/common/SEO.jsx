import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({
  title = 'Hextorq Hosting — Premium Cloud Application & VPS Hosting',
  description = 'Hextorq Hosting provides dedicated application hosting for one frontend + one backend with fixed or flexible burst capacity, plus high-performance root-access VPS.',
  canonical = 'https://hosting.hextorq.tech/',
  type = 'website',
  image = 'https://hosting.hextorq.tech/og-image.png',
  schema = null
}) {
  const fullTitle = title.includes('Hextorq') ? title : `${title} | Hextorq Hosting`;

  const defaultOrganizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Hextorq Hosting',
    url: 'https://hosting.hextorq.tech',
    logo: 'https://hosting.hextorq.tech/favicon.svg',
    email: 'hosting@hextorq.tech',
    sameAs: ['https://twitter.com/hextorq', 'https://github.com/hextorq'],
    description: 'High-performance cloud infrastructure for web applications and virtual servers with dynamic resource bursting.'
  };

  const defaultServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Hextorq Hosting',
    url: 'https://hosting.hextorq.tech',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://hosting.hextorq.tech/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Hextorq Hosting" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(defaultOrganizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(defaultServiceSchema)}
      </script>
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
