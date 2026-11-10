import { bikeData } from "@/lib/data/bikes";
import { blogsData } from "@/data/blogs";

export default async function sitemap() {
  const baseUrl = "https://tagsbikez.com";

  const staticRoutes = [
    "",
    "/about",
    "/blogs",
    "/career",
    "/contact",
    "/gallery",
    "/models",
    "/testride",
    "/privacy",
    "/terms",
    "/royal-enfield-showroom-chalakudy",
    "/royal-enfield-showroom-irinjalakuda",
    "/royal-enfield-showroom-kodakara",
    "/royal-enfield-showroom-kunnamkulam",
    "/royal-enfield-showroom-patturaikkal",
    "/royal-enfield-showroom-thriprayar",
    "/royal-enfield-showroom-vadakkencherry",
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route || "/"}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "yearly" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  let apiBikes = [];
  try {
    const envUrl = (process.env.NEXT_PUBLIC_API_URL || 'https://api.tagsbikez.com').trim().replace(/\/+$/, '');
    const apiBase = envUrl.endsWith('/api') ? envUrl : `${envUrl}/api`;
    const res = await fetch(`${apiBase}/motorcycles/`, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'TagsBikez-Web/1.0',
      },
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const data = await res.json();
      apiBikes = Array.isArray(data.results) ? data.results : (Array.isArray(data) ? data : []);
    }
  } catch (error) {
    // API not reachable, fallback to static bikeData
  }

  const allBikeSlugs = Array.from(
    new Set([
      ...(bikeData || []).map((b) => b.slug),
      ...apiBikes.map((b) => b.slug),
    ])
  ).filter(Boolean);

  const modelEntries = allBikeSlugs.map((slug) => ({
    url: `${baseUrl}/models/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  let blogs = [];
  try {
    const envUrl = (process.env.NEXT_PUBLIC_API_URL || 'https://api.tagsbikez.com').trim().replace(/\/+$/, '');
    const apiBase = envUrl.endsWith('/api') ? envUrl : `${envUrl}/api`;
    const res = await fetch(`${apiBase}/blog/`, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'TagsBikez-Web/1.0',
      },
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const data = await res.json();
      blogs = data.results || [];
    }
  } catch (error) {
    console.error("Error fetching blogs for sitemap:", error);
  }

  if (!blogs || blogs.length === 0) {
    blogs = blogsData || [];
  }

  const blogEntries = (blogs || [])
    .filter((post) => Boolean(post?.slug))
    .map((post) => ({
      url: `${baseUrl}/blogs/${post.slug}`,
      lastModified: post.updated_at ? new Date(post.updated_at) : new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    }));

  return [...staticEntries, ...modelEntries, ...blogEntries];
}
