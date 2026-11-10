import CareerSection from '@/components/sections/career/CareerSection';
import React from 'react';


export const metadata = {
  title: "Careers at Tags Bikez | Join Our Team",
  description:
    "Explore career opportunities at Tags Bikez and become part of a passionate team dedicated to the Royal Enfield riding community.",
  alternates: {
    canonical: "https://tagsbikez.com/career",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Tags Bikez",
    url: "https://tagsbikez.com/career",
    title: "Careers at Tags Bikez | Join Our Team",
    description:
      "Explore career opportunities at Tags Bikez and become part of a passionate team dedicated to the Royal Enfield riding community.",
    images: [
      {
        url: "https://tagsbikez.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Careers at Tags Bikez",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Tags Bikez | Join Our Team",
    description:
      "Explore career opportunities at Tags Bikez and become part of a passionate team dedicated to the Royal Enfield riding community.",
    images: ["https://tagsbikez.com/og-image.png"],
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