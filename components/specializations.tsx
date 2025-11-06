import { Card } from "@/components/ui/card";
import {
  Zap,
  Wrench,
  Wind,
  Paintbrush,
  Hammer,
  Drill,
  Sparkles,
  ChefHat,
  Car,
  Shield,
  Trees,
  Droplets,
  Users,
  Calculator,
  TrendingUp,
  BadgeCheck,
  Stethoscope,
  Heart,
  Package,
  Factory,
  Building,
  Home,
  Sprout,
  Briefcase,
  HeartPulse,
  Settings
} from "lucide-react";
import { useTranslations } from 'next-intl';

export function Specializations() {
  const t = useTranslations('specializations');

  const serviceCategories = [
    {
      name: t('categories.technical.name'),
      count: t('categories.technical.count'),
      icon: Settings,
      color: "from-blue-500 to-cyan-600",
      description: t('categories.technical.description')
    },
    {
      name: t('categories.construction.name'),
      count: t('categories.construction.count'),
      icon: Building,
      color: "from-orange-500 to-amber-600",
      description: t('categories.construction.description')
    },
    {
      name: t('categories.domestic.name'),
      count: t('categories.domestic.count'),
      icon: Home,
      color: "from-green-500 to-emerald-600",
      description: t('categories.domestic.description')
    },
    {
      name: t('categories.agricultural.name'),
      count: t('categories.agricultural.count'),
      icon: Sprout,
      color: "from-lime-500 to-green-600",
      description: t('categories.agricultural.description')
    },
    {
      name: t('categories.administrative.name'),
      count: t('categories.administrative.count'),
      icon: Briefcase,
      color: "from-purple-500 to-indigo-600",
      description: t('categories.administrative.description')
    },
    {
      name: t('categories.medical.name'),
      count: t('categories.medical.count'),
      icon: HeartPulse,
      color: "from-rose-500 to-red-600",
      description: t('categories.medical.description')
    },
    {
      name: t('categories.general.name'),
      count: t('categories.general.count'),
      icon: Users,
      color: "from-gray-600 to-blue-700",
      description: t('categories.general.description')
    }
  ];

  const specializations = [
    // العمالة الفنية
    { title: t('specializations.electrician'), icon: Zap, category: t('categories.technical.name'), level: t('levels.professional') },
    { title: t('specializations.plumber'), icon: Wrench, category: t('categories.technical.name'), level: t('levels.professional') },
    { title: t('specializations.acTechnician'), icon: Wind, category: t('categories.technical.name'), level: t('levels.advanced') },
    { title: t('specializations.painter'), icon: Paintbrush, category: t('categories.technical.name'), level: t('levels.advanced') },
    { title: t('specializations.carpenter'), icon: Hammer, category: t('categories.technical.name'), level: t('levels.professional') },
    { title: t('specializations.tileInstaller'), icon: Drill, category: t('categories.technical.name'), level: t('levels.intermediate') },

    // العمالة الحرفية والإنشائية
    { title: t('specializations.constructionWorker'), icon: Users, category: t('categories.construction.name'), level: t('levels.intermediate') },
    { title: t('specializations.blacksmith'), icon: Hammer, category: t('categories.construction.name'), level: t('levels.professional') },
    { title: t('specializations.woodWorker'), icon: Drill, category: t('categories.construction.name'), level: t('levels.professional') },
    { title: t('specializations.tileWorker'), icon: Paintbrush, category: t('categories.construction.name'), level: t('levels.advanced') },
    { title: t('specializations.painterConstruction'), icon: Paintbrush, category: t('categories.construction.name'), level: t('levels.advanced') },

    // العمالة المنزلية
    { title: t('specializations.cleaner'), icon: Sparkles, category: t('categories.domestic.name'), level: t('levels.trained') },
    { title: t('specializations.chef'), icon: ChefHat, category: t('categories.domestic.name'), level: t('levels.professional') },
    { title: t('specializations.nanny'), icon: Users, category: t('categories.domestic.name'), level: t('levels.trained') },
    { title: t('specializations.driver'), icon: Car, category: t('categories.domestic.name'), level: t('levels.professional') },
    { title: t('specializations.security'), icon: Shield, category: t('categories.domestic.name'), level: t('levels.trained') },

    // العمالة الزراعية
    { title: t('specializations.farmer'), icon: Trees, category: t('categories.agricultural.name'), level: t('levels.specialized') },
    { title: t('specializations.farmWorker'), icon: Trees, category: t('categories.agricultural.name'), level: t('levels.trained') },
    { title: t('specializations.irrigationWorker'), icon: Droplets, category: t('categories.agricultural.name'), level: t('levels.trained') },

    // العمالة الإدارية والمكتبية
    { title: t('specializations.secretary'), icon: Users, category: t('categories.administrative.name'), level: t('levels.professional') },
    { title: t('specializations.receptionist'), icon: Users, category: t('categories.administrative.name'), level: t('levels.trained') },
    { title: t('specializations.accountant'), icon: Calculator, category: t('categories.administrative.name'), level: t('levels.professional') },
    { title: t('specializations.salesRep'), icon: TrendingUp, category: t('categories.administrative.name'), level: t('levels.advanced') },

    // العمالة الطبية
    { title: t('specializations.nurse'), icon: Stethoscope, category: t('categories.medical.name'), level: t('levels.specialized') },
    { title: t('specializations.healthTech'), icon: Heart, category: t('categories.medical.name'), level: t('levels.specialized') },
    { title: t('specializations.homeCare'), icon: Heart, category: t('categories.medical.name'), level: t('levels.trained') },

    // العمالة العامة
    { title: t('specializations.loader'), icon: Package, category: t('categories.general.name'), level: t('levels.trained') },
    { title: t('specializations.generalCleaner'), icon: Sparkles, category: t('categories.general.name'), level: t('levels.trained') },
    { title: t('specializations.factoryWorker'), icon: Factory, category: t('categories.general.name'), level: t('levels.trained') },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case t('levels.professional'): return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case t('levels.advanced'): return "bg-blue-100 text-blue-700 border-blue-200";
      case t('levels.intermediate'): return "bg-amber-100 text-amber-700 border-amber-200";
      case t('levels.trained'): return "bg-gray-100 text-gray-700 border-gray-200";
      case t('levels.specialized'): return "bg-purple-100 text-purple-700 border-purple-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-lg mb-6 border border-gray-200 text-sm font-medium">
            <BadgeCheck className="h-4 w-4 ml-2" />
            {t('header.subtitle')}
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {t.rich('header.heading', {
              primary: (chunks) => <span className="text-blue-600">{chunks}</span>
            })}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('header.description')}
          </p>
        </div>

        {/* إحصائيات الفئات الرئيسية */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {serviceCategories.slice(0, 4).map((category, index) => (
            <Card 
              key={index}
              className="p-6 text-center border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${category.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="h-7 w-7 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{category.count}</div>
              <div className="font-semibold text-gray-800 mb-2">{category.name}</div>
              <div className="text-sm text-gray-500">{category.description}</div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {serviceCategories.slice(4).map((category, index) => (
            <Card 
              key={index}
              className="p-6 text-center border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${category.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="h-7 w-7 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{category.count}</div>
              <div className="font-semibold text-gray-800 mb-2">{category.name}</div>
              <div className="text-sm text-gray-500">{category.description}</div>
            </Card>
          ))}
        </div>

        {/* شبكة التخصصات التفصيلية */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">{t('detailedSpecializations.title')}</h3>
            <div className="text-sm text-gray-500">{t('detailedSpecializations.availableWorkers')}</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {specializations.map((spec, index) => (
              <Card
                key={index}
                className="p-5 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-100 p-3 rounded-xl group-hover:bg-blue-50 transition-colors duration-300">
                      <spec.icon className="h-5 w-5 text-gray-600 group-hover:text-blue-600" />
                    </div>
                    <div className="text-right">
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm">{spec.title}</h4>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          {spec.category}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full border ${getLevelColor(spec.level)}`}>
                          {spec.level}
                        </span>
                      </div>
                    </div>
                  </div>
                  <BadgeCheck className="h-4 w-4 text-green-500 flex-shrink-0 mt-2" />
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* قسم الجودة والضمان */}
        <Card className="bg-gradient-to-r from-gray-50 to-blue-50 border border-blue-100 p-8 mb-2">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{t('quality.inspection.title')}</h4>
              <p className="text-sm text-gray-600">{t('quality.inspection.description')}</p>
            </div>
            <div>
              <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                <BadgeCheck className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{t('quality.training.title')}</h4>
              <p className="text-sm text-gray-600">{t('quality.training.description')}</p>
            </div>
            <div>
              <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Sparkles className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{t('quality.followup.title')}</h4>
              <p className="text-sm text-gray-600">{t('quality.followup.description')}</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}