import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useTranslations } from 'next-intl';

export function Hero() {
  const t = useTranslations('hero');

  const slides = [
    {
      image: "/images/2.jpg",
      title: t('slides.0.title'),
      description: t('slides.0.description')
    },
    {
      image: "/images/OIP.webp",
      title: t('slides.1.title'),
      description: t('slides.1.description')
    },
    {
      image: "/images/3.jpg",
      title: t('slides.2.title'),
      description: t('slides.2.description')
    },
    {
      image: "/images/OIP2.webp",
      title: t('slides.3.title'),
      description: t('slides.3.description')
    }
  ];

  return (
    <div dir="rtl" className="relative">
      <Carousel
        opts={{
          direction: "rtl",
          loop: true,
        }}
        className="w-full max-w-8xl"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative w-full">
              <img
                src={slide.image}
                alt={slide.title}
                className={cn("w-full object-cover h-[500px] md:h-[600px] rounded-lg")}
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white p-6">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl mb-8 max-w-2xl">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    {t('buttons.requestWorker')}
                  </Button>
                  <Button 
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    {t('buttons.browseSpecialties')}
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* الأسهم */}
        <div className="absolute top-1/2 left-5 right-5 flex justify-between items-center z-10 -translate-y-1/2">
          <CarouselNext className="border border-white bg-white/20 backdrop-blur-sm static h-12 w-12 rounded-full hover:bg-white/30 text-white flex items-center justify-center transition" />
          <CarouselPrevious className="border border-white bg-white/20 backdrop-blur-sm static h-12 w-12 rounded-full hover:bg-white/30 text-white flex items-center justify-center transition" />
        </div>
      </Carousel>
    </div>
  );
}