import Navbar from '@/components/layout/header/Navbar'
import AboutSection from '@/components/sections/home/AboutSection'
import BikeScrollAnimation from '@/components/sections/home/BikeScrollAnimation'
import BikeSectionSwiper from '@/components/sections/home/BikeSectionSwiper'
import FAQSection from '@/components/sections/home/FAQSection'
import HeroSection from '@/components/sections/home/HeroSection'
import PopularBikes from '@/components/sections/home/PopularBikes'
import TestDriveSection from '@/components/sections/home/TestDriveSection'
import WhatWeDoSection from '@/components/sections/home/whatwedo'
import React from 'react'

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PopularBikes />
      <BikeScrollAnimation/>
      <AboutSection/>
      <WhatWeDoSection/>
      <BikeSectionSwiper/>
      <TestDriveSection/>
      <FAQSection/>
    </>
  )
}

export default Home