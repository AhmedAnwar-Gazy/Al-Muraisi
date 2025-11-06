import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');

  const services = [
    t('services.technical'),
    t('services.craft'),
    t('services.domestic'),
    t('services.agricultural'),
    t('services.administrative'),
    t('services.medical'),
    t('services.general')
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="bg-primary px-4 py-2 rounded-lg inline-block mb-4">
              <span className="text-xl font-bold">{t('companyName')}</span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              {t('description')}
            </p>
            <div className="text-xs text-gray-400">
              {t('experience')}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t('servicesTitle')}</h3>
            <ul className="space-y-2 text-sm">
              {services.slice(0, 4).map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t('additionalServices')}</h3>
            <ul className="space-y-2 text-sm">
              {services.slice(4).map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t('contactTitle')}</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <span dir="ltr">{t('contact.phone')}</span>
              </li>
              <li className="flex items-center gap-2">
                <span>{t('contact.email')}</span>
              </li>
              <li className="flex items-center gap-2">
                <span>{t('contact.address')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>{t('copyright')}</p>
        </div>
      </div>
    </footer>
  )
}