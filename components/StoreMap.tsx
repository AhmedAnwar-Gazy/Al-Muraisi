// components/StoreMap.tsx
"use client";
import { useTranslations } from 'next-intl';

export default function StoreMap() {
  const t = useTranslations('map');

  return (
    <div className="flex justify-center my-12">
        <div className="w-[80%] h-96 rounded-lg overflow-hidden shadow-lg flex">
        <iframe
            src={t('embedUrl')}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={t('ariaLabel')}
        ></iframe>
        </div>
    </div>
  );
}