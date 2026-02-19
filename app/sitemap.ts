import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { getAllDogSlugs } from "@/lib/data/dogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/the-breed",
    "/our-dogs",
    "/achievements",
    "/puppies",
    "/contact",
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : ["/puppies", "/contact"].includes(route) ? 0.9 : 0.8,
  }));

  const dogRoutes = getAllDogSlugs().map((slug) => ({
    url: `${SITE_URL}/our-dogs/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...dogRoutes];
}
