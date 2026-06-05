import React from 'react';
import CompanySection from '@/components/sections/about/CompanySection';
import OurStory from '@/components/sections/about/OurStory';
import OurMembers from '@/components/sections/about/OurMembers';

export const metadata = {
  title: "About Tags Bikez | Authorized Royal Enfield Dealer",
  description:
    "Learn about Tags Bikez, an authorized Royal Enfield dealership committed to delivering exceptional motorcycle sales and service experiences.",
  alternates: {
    canonical: "https://tagsbikez.com/about",
  },
};

const AboutPage = () => {
  return (
    <div className="about-page bg-white">
      <CompanySection />
      <OurMembers />
      <OurStory />
    </div>
  )
}

export default AboutPage