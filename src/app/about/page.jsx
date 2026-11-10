import React from 'react';
import CompanySection from '@/components/sections/about/CompanySection';
import OurStory from '@/components/sections/about/OurStory';
import OurMembers from '@/components/sections/about/OurMembers';
import ReviewsSection from '@/components/sections/about/ReviewsSection';

export const metadata = {
  title: "About Tags Bikez | Authorized Royal Enfield Dealer",
  description:
    "Learn about Tags Bikez, an authorized Royal Enfield dealership committed to delivering exceptional motorcycle sales and service experiences.",
  alternates: {
    canonical: "https://tagsbikez.com/about",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Tags Bikez",
    url: "https://tagsbikez.com/about",
    title: "About Tags Bikez | Authorized Royal Enfield Dealer",
    description:
      "Learn about Tags Bikez, an authorized Royal Enfield dealership committed to delivering exceptional motorcycle sales and service experiences.",
    images: [
      {
        url: "https://tagsbikez.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Tags Bikez",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Tags Bikez | Authorized Royal Enfield Dealer",
    description:
      "Learn about Tags Bikez, an authorized Royal Enfield dealership committed to delivering exceptional motorcycle sales and service experiences.",
    images: ["https://tagsbikez.com/og-image.png"],
  },
};

const AboutPage = () => {
  return (
    <div className="about-page bg-white">
      <CompanySection />
      <OurMembers />
      <OurStory />
      <ReviewsSection />
    </div>
  )
}

export default AboutPage