import { useTranslations } from 'next-intl';

export function Process() {
  const t = useTranslations('process');

  const steps = [
    { 
      number: "1", 
      title: t('steps.0.title'), 
      icon: "🎯", 
      description: t('steps.0.description') 
    },
    { 
      number: "2", 
      title: t('steps.1.title'), 
      icon: "⚡", 
      description: t('steps.1.description') 
    },
    { 
      number: "3", 
      title: t('steps.2.title'), 
      icon: "✅", 
      description: t('steps.2.description') 
    },
    { 
      number: "4", 
      title: t('steps.3.title'), 
      icon: "🤝", 
      description: t('steps.3.description') 
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full mb-4 border border-primary/20">
            <span className="w-2 h-2 bg-primary rounded-full ml-2 animate-pulse"></span>
            {t('header.subtitle')}
          </div>
          <h2 className="text-4xl font-bold text-balance text-gray-900 mb-4">
            {t('header.heading')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('header.description')}
          </p>
        </div>

        <div className="relative">
          {/* خط التوصيل */}
          <div className="hidden md:block absolute top-20 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-primary/20 to-primary/40"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-primary/30 group hover:border-primary hover:bg-primary/20 transition-all duration-300">
                  <span className="text-3xl group-hover:scale-110 transition-transform">{step.icon}</span>
                </div>
                <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                  {step.number}
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* دعوة للعمل */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-6">
            {t('cta.description')}
          </p>
          <button className="inline-flex items-center bg-primary text-white font-semibold px-8 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            {t('cta.button')}
          </button>
        </div>
      </div>
    </section>
  )
}