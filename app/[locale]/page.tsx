import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Features } from "@/components/features"
import { Specializations } from "@/components/specializations"
import { Contact } from "@/components/contact"
import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { routing } from "@/i18n/routing";


export default function Home({ params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);
  // const t = useTranslations('home');
  return (
    <main className="min-h-screen">
      
      <Hero />
      <Stats />
      <Features />
      <Specializations />
      <Contact />

    </main>
  )
}
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}