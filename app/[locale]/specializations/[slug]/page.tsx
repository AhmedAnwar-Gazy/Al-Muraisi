import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  Clock,
  Phone,
  MessageCircle
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { use } from 'react';
interface SpecializationPageProps {
  params: {
    slug: string;
  };
}

// Icon map for dynamic rendering
const iconMap: Record<string, any> = {
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
  Building
};

export default function SpecializationPage({params
}: {
  params: Promise<{ locale: string , slug: string }>;
}) {
      const { slug } = use(params);

      const t = useTranslations("specializations");
      
  const data = useTranslations("specializations").raw("specializationsdata"); // load raw JSON data from messages/en.json
  
  const specialization = data[slug];

  if (!specialization) {
    return (
      <div className="text-center py-20 text-gray-600">
        <h1 className="text-3xl font-bold mb-4">Specialization Not Found</h1>
        <Link href="/specializations" className="text-blue-600 hover:underline">
          Back to all specializations
        </Link>
      </div>
    );
  }

  const Icon = iconMap[specialization.icon] || Zap;

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "professional":
        return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case "advanced":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "intermediate":
        return "bg-amber-100 text-amber-700 border-amber-200";
      case "trained":
        return "bg-gray-100 text-gray-700 border-gray-200";
      case "specialized":
        return "bg-purple-100 text-purple-700 border-purple-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="size-auto bg-gray-50">
      {/* Header Section */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-6 py-8">
          
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-100 p-4 rounded-2xl">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {specialization.title}
                  </h1>
                  <div className="flex items-center gap-3 flex-wrap">
                    <Badge variant="secondary" className={getLevelColor(specialization.level)}>
                      {specialization.level}
                    </Badge>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-600">{specialization.category}</span>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {specialization.description}
              </p>

              {/* Skills List */}
              {specialization.skills && specialization.skills.length > 0 && (
                <div className="bg-gray-50 border rounded-xl p-6 mt-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    skills
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    {specialization.skills.map((skill: string, index: number) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Final CTA Section */}

      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">{t("ctaTitle")}</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t("ctaSubtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 h-14 px-8 text-lg"
            >
              <Phone className="h-5 w-5 ml-2" />
              {t("ctaCall")}
            </Button>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 h-14 px-8 text-lg"
            >
              <MessageCircle className="h-5 w-5 ml-2" />
              {t("ctaConsult")}
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-blue-100">
              <Shield className="h-6 w-6" />
              <span>{t("guarantee")}</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-blue-100">
              <Clock className="h-6 w-6" />
              <span>{t("fastResponse")}</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-blue-100">
              <Heart className="h-6 w-6" />
              <span>{t("customerService")}</span>
            </div>
          </div>
        </div>
      </section>
    </div>


  );
}
