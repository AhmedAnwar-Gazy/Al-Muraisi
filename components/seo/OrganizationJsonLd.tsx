
interface Props {
  locale: string;
  name: string;
  description: string;
  domain: string;
}

export default function OrganizationJsonLd({
  locale,
  name,
  description,
  domain,
}: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url: domain,
    logo: `${domain}/logo.png`,
    sameAs: [
      "https://www.facebook.com/almureisi",
      "https://www.instagram.com/almureisi",
      "https://www.linkedin.com/company/almureisi",
      "https://x.com/almureisi"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+966-50-123-4567",
      contactType: locale === "ar" ? "خدمة العملاء" : "Customer Service",
      availableLanguage: locale === "ar" ? ["Arabic"] : ["English"]
    },
    address: {
      "@type": "PostalAddress",
      streetAddress:
        locale === "ar" ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia",
      addressCountry: "SA"
    },
    description,
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
