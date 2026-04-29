import Navbar from '@/components/layout/header/Navbar'
import HeroSection from '@/components/sections/home/HeroSection'
import PopularBikes from '@/components/sections/home/PopularBikes'
import WhatWeDoSection from '@/components/sections/home/whatwedo'
import React from 'react'

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PopularBikes />
      <WhatWeDoSection/>
    </>
  )
}

export default Home