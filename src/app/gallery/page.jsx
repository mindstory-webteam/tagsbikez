import React from 'react';
import AboutGallery from '@/components/sections/about/AboutGallery';

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
      <AboutGallery />
    </div>
  );
};

export default GalleryPage;
