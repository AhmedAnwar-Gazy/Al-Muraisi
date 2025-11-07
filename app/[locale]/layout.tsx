import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import "@/app/globals.css";
import type { Metadata } from "next";

import OrganizationJsonLd from "@/components/seo/OrganizationJsonLd";
import WebsiteJsonLd from "@/components/seo/WebsiteJsonLd";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const messages = (await import(`@/messages/${locale}.json`)).default;
  const t = (key: string) =>
    messages.metadata[key as keyof typeof messages.metadata];

  const domain = "https://www.almureisi.com";

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    authors: [{ name: t("authorName"), url: domain }],
    creator: t("creator"),
    publisher: t("publisher"),
    metadataBase: new URL(domain),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: `${domain}/${locale}`,
      siteName: t("siteName"),
      images: [
        {
          url: `${domain}/opengraph-image.png`,
          width: 1200,
          height: 630,
          alt: t("ogAlt"),
        },
      ],
      locale: locale === "ar" ? "ar_SA" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
      images: [`${domain}/twitter-card.png`],
      creator: "@almureisi",
    },
    alternates: {
      canonical: `${domain}/${locale}`,
      languages: {
        ar: `${domain}/ar`,
        en: `${domain}/en`,
      },
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    category: t("category"),
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const messages = (await import(`@/messages/${locale}.json`)).default;
  const t = (key: string) =>
    messages.metadata[key as keyof typeof messages.metadata];
  const domain = "https://www.almureisi.com";

  setRequestLocale(locale);

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
        {/* ✅ Structured Data Components */}
        <OrganizationJsonLd
          locale={locale}
          name={t("siteName")}
          description={t("description")}
          domain={domain}
        />
        <WebsiteJsonLd
          locale={locale}
          domain={domain}
          siteName={t("siteName")}
        />
      </head>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
