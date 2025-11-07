
interface Props {
  locale: string;
  domain: string;
  siteName: string;
}

export default function WebsiteJsonLd({ locale, domain, siteName }: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: domain,
    inLanguage: locale,
    potentialAction: {
      "@type": "SearchAction",
      target: `${domain}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}
