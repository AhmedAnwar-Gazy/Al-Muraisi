
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://www.almureisi.com";
  return [
    {
        url:`${process.env.NEXT_PUBLIC_BASE_URL}`,
        lastModified: new Date(),
        changeFrequency :"never" ,
        priority : 1.0,
    },
    {
        url: `${baseUrl}/`,
        lastModified: new Date(),
        changeFrequency :"never" ,
        priority : 1.0,        
    },

  ]
}