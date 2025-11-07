import { MetadataRoute } from "next";

export default function Robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    //   disallow: ["/api/", "/admin/"] ,
    },
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
    host: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  };
}