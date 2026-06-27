import { notFound } from 'next/navigation';
import { locations } from '@/data/locations';
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

// 1. Generate Static Params for all locations
export async function generateStaticParams() {
  return locations.map((loc) => ({
    location: loc.slug,
  }));
}

// 2. Generate Metadata (SEO)
export async function generateMetadata({ params }) {
  const locData = locations.find((l) => l.slug === params.location);
  
  if (!locData) {
    return { title: 'Location Not Found' };
  }

  return {
    title: `Royal Enfield Showroom in ${locData.name} | TagsBikez`,
    description: `Visit TagsBikez, the authorized Royal Enfield dealership in ${locData.name}. Explore the latest models, genuine accessories, and book a test ride today.`,
  };
}

// 3. Page Component
export default function LocationPage({ params }) {
  const locData = locations.find((l) => l.slug === params.location);
  
  if (!locData) {
    notFound();
  }

  const { name } = locData;

  return (
    <>
      {/* Dynamic Local SEO JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MotorcycleDealer",
            "name": `TagsBikez Royal Enfield ${name}`,
            "description": `Authorized Royal Enfield dealership in ${name}.`,
            "url": `https://tagsbikez.com/${params.location}`,
          }),
        }}
      />

      <HeroSection />
      <div id="models">
        <PopularBikes />
      </div>
      <BikeSectionSwiper />
      <EmiCalculator/>
      <UpcomingEvents />
      <WhatWeDoSection location={name} />
      <AboutSection location={name} />
      <AccessoriesSection location={name} />
      <FAQSection location={name} />
      <div id="test-ride">
        <TestDriveSection location={name} />
      </div>
      <SocialFeed />
    </>
  );
}
