import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/content";
import { projects } from "@/lib/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, changeFrequency: "monthly", priority: 1 },
    ...projects.map((p) => ({ url: `${siteUrl}/projects/${p.slug}/`, changeFrequency: "yearly" as const, priority: 0.7 })),
  ];
}
