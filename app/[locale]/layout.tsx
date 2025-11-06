import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import '@/app/globals.css'
// import Navbar from '@/components/NavBar';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Example Store – Shop the Best Deals Online",
  description: "Shop electronics, fashion, and more at Example Store. Spend less, smile more!",
  metadataBase: new URL("https://www.example.com"),
  openGraph: {
    title: "Example Store – Shop the Best Deals Online",
    description: "Find top products at unbeatable prices. Fast shipping and secure payments.",
    url: "https://www.example.com",
    siteName: "Example Store",
    images: [
      {
        url: "https://www.example.com/copengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Example Store Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.example.com",
  },
};
 
export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}
 
export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
 
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          {/* <Navbar /> */}
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}