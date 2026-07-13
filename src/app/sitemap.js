export default function sitemap() {
  const baseUrl = "https://yourdomain.com";

  // List all static routes in your application
  const routes = [
    "",
    "/about",
    "/blogs",
    "/career",
    "/contact",
    "/gallery",
    "/models",
    "/privacy",
    "/service",
    "/terms",
    "/royal-enfield-showroom-chalakudy",
    "/royal-enfield-showroom-irinjalakuda",
    "/royal-enfield-showroom-kodakara",
    "/royal-enfield-showroom-kunnamkulam",
    "/royal-enfield-showroom-kuriachira",
    "/royal-enfield-showroom-patturaikkal",
    "/royal-enfield-showroom-thriprayar",
    "/royal-enfield-showroom-vadakkencherry",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "yearly" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
