import React from 'react';
import CompanySection from '@/components/sections/about/CompanySection';
import OurStory from '@/components/sections/about/OurStory';
import OurMembers from '@/components/sections/about/OurMembers';
import AboutGallery from '@/components/sections/about/AboutGallery';

export const metadata = {
  title: "About Us | TagsBikez - Royal Enfield Showroom Thrissur",
  description: "Learn more about TagsBikez, the premier authorized Royal Enfield dealership in Thrissur, and our seamless bike buying process.",
};

const AboutPage = () => {
  return (
    <div className="about-page bg-white">
      <CompanySection />
      <OurMembers />
      <OurStory />
      <AboutGallery/>
    </div>
  )
}

export default AboutPage