import type { MetadataRoute } from "next";
import { nav, site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return nav.map((item) => ({
    url: new URL(item.href, site.url).toString(),
    changeFrequency: item.href === "/menu" ? "weekly" : "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
