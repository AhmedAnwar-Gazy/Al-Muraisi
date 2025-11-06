import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Features } from "@/components/features"
import { Services } from "@/components/services"
import { Specializations } from "@/components/specializations"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import {useTranslations} from 'next-intl';
import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';
import StoreMap from "@/components/StoreMap"



export default function Home({ params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);
  // const t = useTranslations('home');
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Features />
      {/* <Services /> */}
      <Specializations />
      <Contact />
      {/* <StoreMap/> */}
      <Footer />
    </main>
  )
}
