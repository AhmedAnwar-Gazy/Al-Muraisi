import { Users, Briefcase, Building2, Star } from "lucide-react";
import { useTranslations } from 'next-intl';

export function Stats() {
  const t = useTranslations('stats');

  const stats = [
    {
      icon: Users,
      number: t('stats.workers.number'),
      label: t('stats.workers.label'),
      color: "from-blue-500 to-cyan-800",
    },
    {
      icon: Briefcase,
      number: t('stats.completed.number'),
      label: t('stats.completed.label'),
      color: "from-blue-500 to-cyan-800",
    },
    {
      icon: Building2,
      number: t('stats.companies.number'),
      label: t('stats.companies.label'),
      color: "from-blue-500 to-cyan-800",
    },
    {
      icon: Star,
      number: t('stats.satisfaction.number'),
      label: t('stats.satisfaction.label'),
      color: "from-blue-500 to-cyan-800",
    },
  ];

  return (
    <section className="py-16 -mt-8 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${stat.color} text-white p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 cursor-pointer relative overflow-hidden group`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-center justify-between relative z-10">
                <div>
                  <div className="text-3xl font-bold mb-2 drop-shadow-md">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium opacity-90">{stat.label}</div>
                </div>
                <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm group-hover:scale-110 transition-transform">
                  <stat.icon className="h-8 w-8" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}