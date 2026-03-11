import type { MetadataRoute } from "next";
import { featuredServices } from "@/lib/autotrek-services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://autotrekservicecenter.com";
  const lastModified = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...featuredServices.map((service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
