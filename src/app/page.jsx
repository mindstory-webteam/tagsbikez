import AboutSection from '@/components/sections/home/AboutSection'
import BikeScrollAnimation from '@/components/sections/home/BikeScrollAnimation'
// import BikeSectionSwiper from '@/components/sections/home/BikeSectionSwiper'
import BikeSectionSwiper2 from '@/components/sections/home/BikeSectionSwiper2'
import FAQSection from '@/components/sections/home/FAQSection'
import HeroSection from '@/components/sections/home/HeroSection'
import PopularBikes from '@/components/sections/home/PopularBikes'
import TestDriveSection from '@/components/sections/home/TestDriveSection'
import WhatWeDoSection from '@/components/sections/home/whatwedo'
import SocialFeed from '@/components/sections/home/SocialFeed'
import React from 'react'
import UpcomingEvents from '@/components/sections/home/Event'
import AccessoriesSection from '@/components/sections/home/AccessoriesSection'

const Home = () => {
  return (
    <>
      <HeroSection />
      <div id="models">
        <PopularBikes />
      </div>
      <BikeScrollAnimation/>
      <BikeSectionSwiper2/>
      {/* <BikeSectionSwiper/> */}
      <WhatWeDoSection/>
      <AboutSection/>
      <UpcomingEvents/>
      <AccessoriesSection/>
      <FAQSection/>
      <div id="test-ride">
        <TestDriveSection />
      </div>
      <SocialFeed />
    </>
  )
}

export default Home