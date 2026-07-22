import AboutSection from '@/components/sections/home/AboutSection'
import BikeScrollAnimation from '@/components/sections/home/BikeScrollAnimation'
import BikeSectionSwiper from '@/components/sections/home/BikeSectionSwiper'
import FAQSection from '@/components/sections/home/FAQSection'
import HeroSection from '@/components/sections/home/HeroSection'
import PopularBikes from '@/components/sections/home/PopularBikes'
import TestDriveSection from '@/components/sections/home/TestDriveSection'
import WhatWeDoSection from '@/components/sections/home/whatwedo'
import SocialFeed from '@/components/sections/home/SocialFeed'
import React from 'react'
import UpcomingEvents from '@/components/sections/home/Event'
import AccessoriesSection from '@/components/sections/home/AccessoriesSection'
import EmiCalculator from '@/components/sections/home/EmiCalculator'

export const metadata = {
  title: "Tags Bikez | Royal Enfield Dealer in Thrissur, Kerala",
  description:
    "Explore the latest Royal Enfield motorcycles, offers, accessories, and services at Tags Bikez, your trusted Royal Enfield dealership in Thrissur, Kerala.",
  alternates: {
    canonical: "https://tagsbikez.com/",
  },
}

const Home = () => {
  return (
    <>
      {/* SEO JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MotorcycleDealer",
            "name": "Tags Bikez",
            "image": "https://tagsbikez.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftagsbikezwhitelogo.1ndyftnt_7msy.png&w=256&q=75",
            "@id": "https://tagsbikez.com/#motorcycledealer",
            "url": "https://tagsbikez.com/",
            "telephone": "+91 7594960023",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Kurichira",
              "addressLocality": "Thrissur",
              "postalCode": "680006",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 10.507215,
              "longitude": 76.223709
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "18:30"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Sunday",
                "opens": "10:00",
                "closes": "15:00"
              }
            ]
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Model",
                "item": "https://tagsbikez.com/models"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Gallery",
                "item": "https://tagsbikez.com/gallery"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Contact",
                "item": "https://tagsbikez.com/contact"
              }
            ]
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Tags Bikez",
            "alternateName": "Tags Bikez",
            "url": "https://tagsbikez.com/",
            "logo": "https://tagsbikez.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftagsbikezwhitelogo.1ndyftnt_7msy.png&w=256&q=75",
            "sameAs": [
              "https://www.facebook.com/tagsbikez",
              "https://www.instagram.com/tagsbikez?igsh=YzNqbWZ5YnhmOWRi",
              "https://www.youtube.com/@imfranciz"
            ]
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
      <WhatWeDoSection />
      <BikeScrollAnimation />
      <AboutSection />
      <AccessoriesSection />
      <FAQSection />
      <div id="test-ride">
        <TestDriveSection />
      </div>
      <SocialFeed />
    </>
  )
}

export default Home