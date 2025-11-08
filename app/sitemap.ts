import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.almureisi.com";
  
  // Define your locales
  const locales = ['en', 'ar'];
  
  // Import specialization data to get all slugs
  const enMessages = await import('@/messages/en.json');
  const specializationsData = enMessages.default.specializations.specializationsdata;
  const slugs = Object.keys(specializationsData);
  
  // Generate sitemap entries
  const sitemap: MetadataRoute.Sitemap = [
    // Home pages for each locale
    {
      url: `${baseUrl}/en`,
      lastModified: new Date("2025-11-08T19:32:39.238Z"),
      changeFrequency: "never",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/ar`,
      lastModified: new Date("2025-11-08T19:32:39.238Z"),
      changeFrequency: "never",
      priority: 1.0,
    },
    
    // // Specializations listing pages
    // {
    //   url: `${baseUrl}/en/specializations`,
    //   lastModified: new Date(),
    //   changeFrequency: "weekly",
    //   priority: 0.9,
    // },
    // {
    //   url: `${baseUrl}/ar/specializations`,
    //   lastModified: new Date(),
    //   changeFrequency: "weekly",
    //   priority: 0.9,
    // },
    
    // Individual specialization pages
    ...locales.flatMap((locale) =>
      slugs.map((slug) => ({
        url: `${baseUrl}/${locale}/specializations/${slug}`,
        lastModified: new Date("2025-11-08T19:32:39.238Z"),
        changeFrequency: "never" as const,
        priority: 0.8,
      }))
    ),
  ];

  return sitemap;
}