'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { Globe } from 'lucide-react';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    if (newLocale !== locale) {
      router.replace(pathname, { locale: newLocale });
      router.refresh();
    }
  };

  const languages = [
    { value: 'en', label: 'English', flag: '🇺🇸', short: 'EN' },
    { value: 'ar', label: 'العربية', flag: '🇸🇦', short: 'AR' }
  ];

  const currentLanguage = languages.find(lang => lang.value === locale);

  return (
    <div className="relative group">
      <button className="
        flex items-center gap-2 
        px-3 py-2 
        border border-gray-300 rounded-lg
        bg-white text-gray-900
        hover:border-gray-400 hover:bg-gray-50
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
        transition-all duration-200 ease-in-out
        shadow-sm hover:shadow-md
        text-sm font-medium
      ">
        <Globe className="w-4 h-4 text-gray-600" />
        <span>{currentLanguage?.short}</span>
        <svg 
          className="w-4 h-4 text-gray-500 transition-transform group-hover:rotate-180" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 9l-7 7-7-7" 
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div className="
        absolute top-full right-0 mt-1
        hidden group-hover:block
        w-48
        bg-white border border-gray-200 rounded-lg
        shadow-lg z-10
      ">
        {languages.map((language) => (
          <button
            key={language.value}
            onClick={() => switchLocale(language.value)}
            className={`
              w-full text-left px-4 py-3
              flex items-center gap-3
              transition-colors duration-150 ease-in-out
              text-sm
              ${locale === language.value 
                ? 'bg-blue-50 text-blue-700 font-semibold' 
                : 'text-gray-700 hover:bg-gray-50'
              }
              first:rounded-t-lg last:rounded-b-lg
            `}
          >
            <span className="text-lg">{language.flag}</span>
            <span>{language.label}</span>
            {locale === language.value && (
              <div className="w-2 h-2 bg-blue-600 rounded-full ml-auto" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}