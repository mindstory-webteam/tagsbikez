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
  title: "Royal Enfield Showroom Kuriachira, Thrissur | TagsBikez",
  description: "Visit the Royal Enfield showroom in Kuriachira, Thrissur at TagsBikez. Explore the latest Royal Enfield motorcycles, book a test ride, access finance options, servicing, and genuine accessories.",
  alternates: {
    canonical: "https://tagsbikez.com/royal-enfield-showroom-kuriachira",
  },
};


const KuriachiraPage = () => {
  return (
    <>
       <HeroSection />
      <div id="models">
        <PopularBikes />
      </div>
      <BikeSectionSwiper />
      <EmiCalculator/>
      <UpcomingEvents />
      <WhatWeDoSection location="Kuriachira" />
      <AboutSection location="Kuriachira" />
      <AccessoriesSection location="Kuriachira" />
      <FAQSection location="Kuriachira" />
      <div id="test-ride">
        <TestDriveSection location="Kuriachira" />
      </div>
      <SocialFeed />
    </>
  );
};

export default KuriachiraPage;
