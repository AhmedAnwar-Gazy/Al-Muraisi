import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from 'next-intl';

export function Features() {
  const t = useTranslations('features');

  const features = [
    t('features.experience'),
    t('features.trained'),
    t('features.speed'),
    t('features.pricing'),
    t('features.quality'),
    t('features.support'),
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* الصورة */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <img
              src="/business-professionals-meeting.png"
              alt={t('imageAlt')}
              className="rounded-2xl shadow-2xl w-full relative z-10 group-hover:scale-[1.02] transition-transform duration-500 object-cover"
            />
          </div>

          {/* المحتوى */}
          <div className="space-y-8">
            <div className="inline-flex items-center bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full mb-2 border border-primary/20">
              <span className="w-2 h-2 bg-primary rounded-full ml-2 animate-pulse"></span>
              {t('whyUs')}
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {t('heading')}
            </h2>

            {/* المميزات */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors mt-0.5">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  </div>
                  <span className="text-gray-700 group-hover:text-primary transition-colors font-medium leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* الوصف */}
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('description')}
            </p>

            {/* الأزرار */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-8 py-3 text-lg font-semibold"
                size="lg"
              >
                {t('buttons.start')}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 hover:border-primary hover:text-primary text-gray-700 transition-all duration-300 hover:scale-105 px-8 py-3 text-lg font-semibold"
              >
                {t('buttons.consultation')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}