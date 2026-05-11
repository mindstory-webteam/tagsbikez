import React from 'react';
import CompanySection from '@/components/sections/about/CompanySection';
import OurStory from '@/components/sections/about/OurStory';
import OurMembers from '@/components/sections/about/OurMembers';
// import AboutSectionGallery from '@/components/sections/about/AboutSectionGallery';

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
      {/* <AboutSectionGallery/> */}
    </div>
  )
}

export default AboutPage