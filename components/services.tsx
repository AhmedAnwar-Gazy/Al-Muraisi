import { Card } from "@/components/ui/card";
import { Wrench, Home, Building, Truck, ArrowLeft, Users } from "lucide-react";
import { useTranslations } from 'next-intl';

export function Services() {
  const t = useTranslations('services');

  const services = [
    {
      icon: Building,
      title: t('services.construction.title'),
      description: t('services.construction.description')
    },
    {
      icon: Home,
      title: t('services.domestic.title'),
      description: t('services.domestic.description')
    },
    {
      icon: Building,
      title: t('services.healthcare.title'),
      description: t('services.healthcare.description')
    },
    {
      icon: Truck,
      title: t('services.hospitality.title'),
      description: t('services.hospitality.description')
    },
    {
      icon: Wrench,
      title: t('services.manufacturing.title'),
      description: t('services.manufacturing.description')
    },
    {
      icon: Users,
      title: t('services.administration.title'),
      description: t('services.administration.description')
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container mx-auto px-6">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full mb-6 border border-primary/20">
            <span className="w-2 h-2 bg-primary rounded-full ml-2 animate-pulse"></span>
            {t('header.subtitle')}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {t.rich('header.heading', {
              primary: (chunks) => <span className="text-primary">{chunks}</span>
            })}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t('header.description')}
          </p>
        </div>

        {/* بطاقات الخدمات */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer border border-gray-200/60 group relative overflow-hidden bg-white"
            >
              {/* تأثير الخلفية */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* الأيقونة */}
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:shadow-primary/20">
                  <service.icon className="h-10 w-10 text-primary" />
                </div>

                {/* العنوان والوصف */}
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors duration-300 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  {service.description}
                </p>

                {/* زر المزيد */}
                <div className="flex items-center text-primary font-semibold text-lg group-hover:translate-x-2 transition-transform duration-300">
                  <span>{t('discoverMore')}</span>
                  <ArrowLeft className="h-5 w-5 mr-2 group-hover:mr-3 transition-all duration-300" />
                </div>
              </div>

              {/* تأثير الزاوية */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          ))}
        </div>

        {/* قسم إضافي */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg mb-6">
            {t.rich('customService.text', {
              highlight: (chunks) => (
                <span className="text-primary font-semibold mr-2">{chunks}</span>
              )
            })}
          </p>
          <button className="inline-flex items-center bg-primary/10 text-primary font-semibold px-6 py-3 rounded-full hover:bg-primary/20 transition-all duration-300 border border-primary/20">
            {t('customService.button')}
            <Wrench className="h-5 w-5 mr-2" />
          </button>
        </div>
      </div>
    </section>
  );
}