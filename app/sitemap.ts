
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://www.almureisi.com";
  return [
    {
        url:`${process.env.NEXT_PUBLIC_BASE_URL}`,
        lastModified: new Date("2025-11-08T16:41:50.312Z"),
        changeFrequency :"never" ,
        priority : 1.0,
    },
    {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}ظ`,
        lastModified: new Date("2025-11-08T16:41:50.312Z"),
        changeFrequency :"never" ,
        priority : 0.7,        
    },

  ]
}