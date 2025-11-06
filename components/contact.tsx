import { Phone, Mail, MapPin, MessageCircle, Clock, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import StoreMap from "./StoreMap";
import { useTranslations } from 'next-intl';

export function Contact() {
  const t = useTranslations('contact');

  const contactMethods = [
    {
      icon: Phone,
      title: t('methods.phone.title'),
      description: t('methods.phone.description'),
      details: t('methods.phone.details'),
      action: t('methods.phone.action'),
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-white from-green-500/10 to-emerald-600/5",
      link: t('methods.phone.link'),
    },
    {
      icon: Mail,
      title: t('methods.email.title'),
      description: t('methods.email.description'),
      details: t('methods.email.details'),
      action: t('methods.email.action'),
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-white from-blue-500/10 to-cyan-600/5",
      link: t('methods.email.link'),
    },
  ];

  const stats = [
    { icon: Clock, value: t('stats.support.value'), label: t('stats.support.label') },
    { icon: Users, value: t('stats.response.value'), label: t('stats.response.label') },
    { icon: MessageCircle, value: t('stats.satisfaction.value'), label: t('stats.satisfaction.label') },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="container mx-auto px-6">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full mb-6 border border-primary/20">
            <MessageCircle className="h-5 w-5 ml-2" />
            {t('header.title')}
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

        {/* الإحصائيات */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* طرق التواصل */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className={`p-6 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border-2  ${method.bgColor} group relative overflow-hidden`}
            >
              {/* تأثير الخلفية */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              {/* الأيقونة */}
              <div
                className={`bg-gradient-to-br ${method.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg relative z-10`}
              >
                <method.icon className="h-7 w-7 text-white" />
              </div>

              {/* المحتوى */}
              <div className="relative z-10">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  {method.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {method.description}
                </p>
                <p className="text-gray-900 font-semibold mb-4 text-lg" dir="ltr">
                  {method.details}
                </p>

                <a
                  href={method.link}
                  target={method.link.startsWith("https") ? "_blank" : "_self"}
                  rel={
                    method.link.startsWith("https") ? "noopener noreferrer" : ""
                  }
                  className={`w-full px-10 py-2 bg-gradient-to-br ${method.color} hover:opacity-90 text-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                >
                  {method.action}
                </a>
              </div>

              {/* تأثير الزاوية */}
              <div
                className={`absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl ${method.color} opacity-20 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
            </Card>
          ))}
        </div>

        {/* قسم إضافي */}
        <div className="text-center mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {t('consultation.title')}
          </h3>
          <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
            {t('consultation.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary text-white px-8 py-3 text-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              {t('consultation.buttons.consultation')}
            </Button>
            <a
              href="/Information%20booklet.pdf"
              download="Information booklet.pdf"
              aria-label={t('consultation.buttons.downloadLabel')}
            >
            <Button
              variant="outline"
              className="border-2 border-primary text-primary px-8 py-3 text-lg font-semibold hover:bg-primary/10 transition-all duration-300"
            >
              {t('consultation.buttons.download')}
            </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}