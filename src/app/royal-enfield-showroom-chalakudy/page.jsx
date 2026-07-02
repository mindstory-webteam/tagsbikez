import AboutSection from '@/components/sections/home/AboutSection';
import AccessoriesSection from '@/components/sections/home/AccessoriesSection';
import BikeSectionSwiper from '@/components/sections/home/BikeSectionSwiper';
import EmiCalculator from '@/components/sections/home/EmiCalculator';
import UpcomingEvents from '@/components/sections/home/Event';
import FAQSection from '@/components/sections/home/FAQSection';
import HeroSection from '@/components/sections/home/HeroSection';
import PopularBikes from '@/components/sections/home/PopularBikes';
import SocialFeed from '@/components/sections/home/SocialFeed';
import TestDriveSection from '@/components/sections/home/TestDriveSection';
import WhatWeDoSection from '@/components/sections/home/whatwedo';
import React from 'react';

export const metadata = {
  title: "Tags Bikez | Royal Enfield Dealer in Chalakudy",
  description: "Explore the latest Royal Enfield motorcycles, offers, accessories, and services at Tags Bikez, your trusted Royal Enfield dealership in Chalakudy.",
  alternates: {
    canonical: "https://tagsbikez.com/royal-enfield-showroom-chalakudy",
  },
};


const ChalakudyPage = () => {
  return (
    <>
       <HeroSection />
      <div id="models">
        <PopularBikes />
      </div>
      <BikeSectionSwiper />
      <EmiCalculator/>
      <UpcomingEvents />
      <WhatWeDoSection location="Chalakudy" />
      <AboutSection location="Chalakudy" />
      <AccessoriesSection location="Chalakudy" />
      <FAQSection location="Chalakudy" />
      <div id="test-ride">
        <TestDriveSection location="Chalakudy" />
      </div>
      <SocialFeed />
    </>
  );
};

export default ChalakudyPage;
