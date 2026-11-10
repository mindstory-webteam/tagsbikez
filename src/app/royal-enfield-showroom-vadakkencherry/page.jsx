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
  title: "Royal Enfield Showroom Vadakkencherry | TagsBikez",
  description: "Visit the Royal Enfield showroom in Vadakkencherry by TagsBikez. Find the latest motorcycles, book a test ride, explore finance plans, servicing, and genuine accessories.",
  alternates: {
    canonical: "https://tagsbikez.com/royal-enfield-showroom-vadakkencherry",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Tags Bikez",
    url: "https://tagsbikez.com/royal-enfield-showroom-vadakkencherry",
    title: "Royal Enfield Showroom Vadakkencherry | TagsBikez",
    description: "Visit the Royal Enfield showroom in Vadakkencherry by TagsBikez. Find the latest motorcycles, book a test ride, explore finance plans, servicing, and genuine accessories.",
    images: [
      {
        url: "https://tagsbikez.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Royal Enfield Showroom Vadakkencherry | TagsBikez",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Royal Enfield Showroom Vadakkencherry | TagsBikez",
    description: "Visit the Royal Enfield showroom in Vadakkencherry by TagsBikez. Find the latest motorcycles, book a test ride, explore finance plans, servicing, and genuine accessories.",
    images: ["https://tagsbikez.com/og-image.png"],
  },
};


const VadakkencherryPage = () => {
  return (
    <>
       <HeroSection />
      <div id="models">
        <PopularBikes />
      </div>
      <BikeSectionSwiper />
      <EmiCalculator/>
      <UpcomingEvents />
      <WhatWeDoSection location="Vadakkencherry" />
      <AboutSection location="Vadakkencherry" />
      <AccessoriesSection location="Vadakkencherry" />
      <FAQSection location="Vadakkencherry" />
      <div id="test-ride">
        <TestDriveSection location="Vadakkencherry" />
      </div>
      <SocialFeed />
    </>
  );
};

export default VadakkencherryPage;
