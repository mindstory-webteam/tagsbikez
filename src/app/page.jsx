import Navbar from '@/components/layout/header/Navbar'
import AboutSection from '@/components/sections/home/AboutSection'
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
      <WhatWeDoSection/>
      <AboutSection/>
      <TestDriveSection/>

    </>
  )
}

export default Home