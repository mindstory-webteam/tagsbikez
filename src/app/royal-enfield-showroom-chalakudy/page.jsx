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
  title: "Royal Enfield Showroom Chalakudy | TagsBikez",
  description: "Visit the Royal Enfield showroom in Chalakudy at TagsBikez. Explore the newest Royal Enfield bikes, test ride booking, finance options, service, and accessories.",
  alternates: {
    canonical: "https://tagsbikez.com/royal-enfield-showroom-chalakudy",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Tags Bikez",
    url: "https://tagsbikez.com/royal-enfield-showroom-chalakudy",
    title: "Royal Enfield Showroom Chalakudy | TagsBikez",
    description: "Visit the Royal Enfield showroom in Chalakudy at TagsBikez. Explore the newest Royal Enfield bikes, test ride booking, finance options, service, and accessories.",
    images: [
      {
        url: "https://tagsbikez.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Royal Enfield Showroom Chalakudy | TagsBikez",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Royal Enfield Showroom Chalakudy | TagsBikez",
    description: "Visit the Royal Enfield showroom in Chalakudy at TagsBikez. Explore the newest Royal Enfield bikes, test ride booking, finance options, service, and accessories.",
    images: ["https://tagsbikez.com/og-image.png"],
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
