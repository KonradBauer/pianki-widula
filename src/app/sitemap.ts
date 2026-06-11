import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://pianki-widula.pl",
      lastModified: new Date("2026-06-11"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://pianki-widula.pl/polityka-prywatnosci",
      lastModified: new Date("2026-06-11"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
