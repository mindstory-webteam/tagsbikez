import Navbar from '@/components/layout/header/Navbar'
import HeroSection from '@/components/sections/home/HeroSection'
import PopularBikes from '@/components/sections/home/PopularBikes'
import React from 'react'

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PopularBikes />
    </>
  )
}

export default Home