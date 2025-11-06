import { Button } from "@/components/ui/button";
import {
  Menu,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  User,
  ChevronDown,
  Building2,
} from "lucide-react";
import { Link } from '@/i18n/navigation';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet";
import LocaleSwitcher from "@/components/LocaleSwitcher"
import { useTranslations } from 'next-intl';

export function Header() {
  const t = useTranslations('header');

  const navItems = [
    { name: t('nav.home'), href: "/" },
    { name: t('nav.about'), href: "#about" },
    { name: t('nav.services'), href: "#services" },
    { name: t('nav.blog'), href: "#blog" },
    { name: t('nav.contact'), href: "#contact" },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
      {/* الشريط العلوي */}
      <div className="bg-gradient-to-r from-primary to-blue-600 py-3 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* معلومات التواصل */}
            <div className="flex items-center gap-6 flex-wrap justify-center">
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                <Phone className="h-4 w-4" />
                <span className="text-xs font-medium" dir="ltr">{t('contactBar.phone')}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                <Clock className="h-4 w-4" />
                <span className="text-xs font-medium">
                  {t('contactBar.hours')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* التنقل الرئيسي */}
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* الشعار */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label={t('logo.ariaLabel')}
          >
            <div className="bg-gradient-to-br from-primary to-blue-600 p-3 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <img src="/favicon-96x96.png" alt=""  height="24px" width="24px"/>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                {t('logo.companyName')}
              </span>
              <span className="text-xs text-gray-500 -mt-1">
                {t('logo.international')}
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-[oklch(0.6_0.2_200)] transition-colors"
                aria-label={item.name}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <LocaleSwitcher />

          {/* أزرار المستخدم */}
          <div className="flex items-center gap-3">
            {/* زر القائمة للموبايل */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden border border-gray-300 hover:bg-gray-50"
                  aria-label={t('mobileMenu.ariaLabel')}
                >
                  <Menu className="h-5 w-5 text-gray-700" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-64">
                <SheetHeader>
                  <SheetTitle className="left pt-5">{t('mobileMenu.title')}</SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col mt-4 gap-3">
                  {navItems.map((item) => (
                    <Link key={item.name} href={item.href} className="text-gray-700 hover:text-primary font-medium px-2 py-1 rounded transition-colors">
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
  
</div>

    </header>
  );
}