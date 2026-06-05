import CareerSection from '@/components/sections/career/CareerSection';
import React from 'react';


export const metadata = {
  title: "Careers at Tags Bikez | Join Our Team",
  description:
    "Explore career opportunities at Tags Bikez and become part of a passionate team dedicated to the Royal Enfield riding community.",
  alternates: {
    canonical: "https://tagsbikez.com/career",
  },
};

const CareerPage = () => {
  return (
    <div className="career-page bg-white">
      <CareerSection/>
    </div>
  )
}

export default CareerPage