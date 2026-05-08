import React from 'react';
import CompanySection from '@/components/sections/about/CompanySection';
import SalesProcessSection from '@/components/sections/about/SalesProcessSection';

export const metadata = {
  title: "About Us | TagsBikez - Royal Enfield Showroom Thrissur",
  description: "Learn more about TagsBikez, the premier authorized Royal Enfield dealership in Thrissur, and our seamless bike buying process.",
};

const AboutPage = () => {
  return (
    <div className="about-page bg-white">
      <CompanySection />
      <SalesProcessSection />
    </div>
  )
}

export default AboutPage