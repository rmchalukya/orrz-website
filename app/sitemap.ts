import type { MetadataRoute } from "next";
import { SITE, NAV } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", ...NAV.map((n) => n.href)];
  return routes.map((route) => ({
    url: `${SITE.url}${route === "/" ? "" : route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/consulting" ? 0.9 : 0.7,
  }));
}
