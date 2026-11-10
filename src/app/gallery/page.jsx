import React from 'react';
import Gallery from '@/components/sections/gallery/Gallery';

export const metadata = {
  title: "Gallery | Royal Enfield Bikes & Events | Tags Bikez",
  description:
    "Browse photos of Royal Enfield motorcycles, showroom highlights, customer deliveries, rides, and events at Tags Bikez.",
  alternates: {
    canonical: "https://tagsbikez.com/gallery",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Tags Bikez",
    url: "https://tagsbikez.com/gallery",
    title: "Gallery | Royal Enfield Bikes & Events | Tags Bikez",
    description:
      "Browse photos of Royal Enfield motorcycles, showroom highlights, customer deliveries, rides, and events at Tags Bikez.",
    images: [
      {
        url: "https://tagsbikez.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tags Bikez Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | Royal Enfield Bikes & Events | Tags Bikez",
    description:
      "Browse photos of Royal Enfield motorcycles, showroom highlights, customer deliveries, rides, and events at Tags Bikez.",
    images: ["https://tagsbikez.com/og-image.png"],
  },
};

const GalleryPage = () => {
  return (
    <div className="gallery-page bg-white">
      <Gallery />
    </div>
  );
};

export default GalleryPage;
