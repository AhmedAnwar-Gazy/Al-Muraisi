import { ReactNode } from 'react';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
interface LayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: 'specializations' });
  
  // Get the specialization data
  const data = t.raw('specializationsdata');
  const specialization = data[slug];

  if (!specialization) {
    return {
      title: 'Specialization Not Found',
    };
  }

  const domain = `${process.env.NEXT_PUBLIC_BASE_URL}`;
  const pageUrl = `${domain}/${locale}/specializations/${slug}`;
  
  // Extract skills as keywords
  const skillsKeywords = specialization.skills?.join(', ') || '';
  const keywords = `${specialization.title}, ${specialization.category}, ${skillsKeywords}, ${locale === 'ar' ? 'خدمات منزلية' : 'home services'}`;
const siteName = locale === 'ar' ? 'أبوسيف للخدمات' : 'AboSeaf Services';
  return {
    title: `${specialization.title} | ${siteName}`,
    description: specialization.description,
    keywords: keywords,
    authors: [{ name: "ahmed anwar", url: domain }],
    category: specialization.category,
    metadataBase: new URL(domain),
    openGraph: {
      title: specialization.title,
      description: specialization.description,
      url: pageUrl,
      siteName: siteName,
      images: [
        {
          url: `${domain}/opengraph-image.png`,
          width: 1200,
          height: 630,
          alt: `${specialization.title} - ${specialization.category}`,
        },
      ],
      locale: locale === 'ar' ? 'ar_SA' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: specialization.title,
      description: specialization.description,
      images: [`${domain}/twitter-card.png`],
      creator: '@almureisi',
    },
    alternates: {
      canonical: pageUrl,
      languages: {
        ar: `${domain}/ar/specializations/${slug}`,
        en: `${domain}/en/specializations/${slug}`,
      },
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export async function generateStaticParams() {
  // Get specialization data from English locale to extract all slugs
  const t = await getTranslations({ locale: 'en', namespace: 'specializations' });
  const data = t.raw('specializationsdata');
  
  // Extract all slugs from the data object
  const specializationSlugs = Object.keys(data);
  
  // Define the locales you support
  const locales = ['en', 'ar']; // Add all your supported locales
  
  // Generate params for all locale + slug combinations
  const params = locales.flatMap((locale) =>
    specializationSlugs.map((slug) => ({
      locale,
      slug,
    }))
  );

  return params;
}

// Force static generation
export const dynamic = 'force-static';
export const dynamicParams = false;

export default function SpecializationLayout({ children }: LayoutProps) {
  return <>{children}</>;
}