import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://pianki-widula.pl",
      lastModified: new Date("2026-06-12"),
    },
    {
      url: "https://pianki-widula.pl/polityka-prywatnosci",
      lastModified: new Date("2026-06-12"),
    },
  ];
}
