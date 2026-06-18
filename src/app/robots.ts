import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ["CCBot", "anthropic-ai", "Bytespider", "cohere-ai"],
        disallow: "/",
      },
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "PerplexityBot",
          "Amazonbot",
        ],
        allow: "/",
        disallow: "/api/",
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
    ],
    sitemap: "https://pianki-widula.pl/sitemap.xml",
  };
}
