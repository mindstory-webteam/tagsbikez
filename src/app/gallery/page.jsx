import React from 'react';
import AboutGallery from '@/components/sections/about/AboutGallery';

export const metadata = {
  title: "Gallery | TagsBikez - Royal Enfield Showroom Thrissur",
  description: "Explore our collection of moments captured on the road, at rallies, and beyond with TagsBikez.",
};

const GalleryPage = () => {
  return (
    <div className="gallery-page bg-white pt-20">
      <AboutGallery />
    </div>
  );
};

export default GalleryPage;
