import React from 'react';
import Gallery from '@/components/sections/gallery/Gallery';

export const metadata = {
  title: "Gallery | Royal Enfield Bikes & Events | Tags Bikez",
  description:
    "Browse photos of Royal Enfield motorcycles, showroom highlights, customer deliveries, rides, and events at Tags Bikez.",
  alternates: {
    canonical: "https://tagsbikez.com/gallery",
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
