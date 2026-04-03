import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://newrevivejapan.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          ja: "https://newrevivejapan.com",
          en: "https://newrevive.com",
        },
      },
    },
  ];
}
