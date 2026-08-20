import type { MetadataRoute } from "next";
import { categorias, servicos } from "@/data/servicos";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://studiobrunaborgeshs.com.br";
  const staticRoutes = [
    "",
    "/precos",
    "/antes-e-depois",
    "/sobre",
    "/contato",
  ];

  const categoryRoutes = categorias.map((categoria) => `/${categoria.slug}`);
  const serviceRoutes = servicos.map((servico) => `/${servico.categoria}/${servico.slug}`);

  const allRoutes = [...staticRoutes, ...categoryRoutes, ...serviceRoutes];

  return allRoutes.map((route, index) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : index % 3 === 0 ? "monthly" : "weekly",
    priority: route === "" ? 1 : index < 5 ? 0.8 : 0.6,
  }));
}
