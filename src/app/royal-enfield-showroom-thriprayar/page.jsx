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
  title: "Royal Enfield Showroom Thriprayar | TagsBikez",
  description: "Explore the Royal Enfield showroom in Thriprayar with TagsBikez. Browse new motorcycles, book a test ride, avail finance support, servicing, and authentic accessories.",
  alternates: {
    canonical: "https://tagsbikez.com/royal-enfield-showroom-thriprayar",
  },
};


const ThriprayarPage = () => {
  return (
    <>
       <HeroSection />
      <div id="models">
        <PopularBikes />
      </div>
      <BikeSectionSwiper />
      <EmiCalculator/>
      <UpcomingEvents />
      <WhatWeDoSection location="Thriprayar" />
      <AboutSection location="Thriprayar" />
      <AccessoriesSection location="Thriprayar" />
      <FAQSection location="Thriprayar" />
      <div id="test-ride">
        <TestDriveSection location="Thriprayar" />
      </div>
      <SocialFeed />
    </>
  );
};

export default ThriprayarPage;
