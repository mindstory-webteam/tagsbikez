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
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://tagsbikez.com/",
    siteName: "Tags Bikez",
    title: "Tags Bikez | Royal Enfield Dealer in Thrissur, Kerala",
    description:
      "Explore the latest Royal Enfield motorcycles, offers, accessories, and services at Tags Bikez, your trusted Royal Enfield dealership in Thrissur, Kerala.",
    images: [
      {
        url: "https://tagsbikez.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tags Bikez - Authorised Royal Enfield Dealership in Thrissur, Kerala",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tags Bikez | Royal Enfield Dealer in Thrissur, Kerala",
    description:
      "Explore the latest Royal Enfield motorcycles, offers, accessories, and services at Tags Bikez, your trusted Royal Enfield dealership in Thrissur, Kerala.",
    images: ["https://tagsbikez.com/og-image.png"],
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
            "@type": ["AutoDealer", "MotorcycleDealer", "LocalBusiness"],
            "@id": "https://tagsbikez.com/#autodealer",
            "name": "Tags Bikez",
            "legalName": "Tags Bikez Royal Enfield Dealership",
            "alternateName": ["Tags Bikez", "TagsBikez Royal Enfield", "Tags Bikez Thrissur"],
            "description": "Authorized Royal Enfield motorcycle dealership in Thrissur, Kerala. Sales, service, genuine spare parts, riding gear, and test rides across 7 showroom locations.",
            "image": "https://tagsbikez.com/og-image.png",
            "logo": "https://tagsbikez.com/logo.png",
            "url": "https://tagsbikez.com/",
            "telephone": "+91 7594960023",
            "email": "info.tags.tcr@gmail.com",
            "priceRange": "₹₹ - ₹₹₹₹",
            "currenciesAccepted": "INR",
            "paymentAccepted": "Cash, Credit Card, Debit Card, UPI, Net Banking, Vehicle Finance",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Kuriachira",
              "addressLocality": "Thrissur",
              "addressRegion": "Kerala",
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
            ],
            "areaServed": [
              { "@type": "City", "name": "Thrissur" },
              { "@type": "City", "name": "Chalakudy" },
              { "@type": "City", "name": "Irinjalakuda" },
              { "@type": "City", "name": "Kodakara" },
              { "@type": "City", "name": "Vadakkencherry" },
              { "@type": "City", "name": "Kunnamkulam" },
              { "@type": "City", "name": "Thriprayar" },
              { "@type": "AdministrativeArea", "name": "Kerala" }
            ],
            "department": [
              {
                "@type": ["AutoDealer", "MotorcycleDealer", "LocalBusiness"],
                "name": "Tags Bikez Kuriachira",
                "telephone": "+91 7594960023",
                "email": "info.tags.tcr@gmail.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Kuriachira",
                  "addressLocality": "Thrissur",
                  "addressRegion": "Kerala",
                  "postalCode": "680006",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 10.507183,
                  "longitude": 76.22384
                }
              },
              {
                "@type": ["AutoDealer", "MotorcycleDealer", "LocalBusiness"],
                "name": "Tags Bikez Patturaikkal",
                "telephone": "+91 7594960033",
                "email": "info.tags.ptkl@gmail.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Patturaikkal",
                  "addressLocality": "Thrissur",
                  "addressRegion": "Kerala",
                  "postalCode": "680022",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 10.538669,
                  "longitude": 76.21218
                }
              },
              {
                "@type": ["AutoDealer", "MotorcycleDealer", "LocalBusiness"],
                "name": "Tags Bikez Irinjalakuda",
                "telephone": "+91 7594951111",
                "email": "info.tags.irj@gmail.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Irinjalakuda",
                  "addressLocality": "Thrissur",
                  "addressRegion": "Kerala",
                  "postalCode": "680121",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 10.364498,
                  "longitude": 76.218931
                }
              },
              {
                "@type": ["AutoDealer", "MotorcycleDealer", "LocalBusiness"],
                "name": "Tags Bikez Chalakudy",
                "telephone": "+91 7594954444",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Chalakudy",
                  "addressLocality": "Thrissur",
                  "addressRegion": "Kerala",
                  "postalCode": "680307",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 10.3105,
                  "longitude": 76.331
                }
              },
              {
                "@type": ["AutoDealer", "MotorcycleDealer", "LocalBusiness"],
                "name": "Tags Bikez Kodakara",
                "telephone": "+91 7594960033",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Kodakara",
                  "addressLocality": "Thrissur",
                  "addressRegion": "Kerala",
                  "postalCode": "680684",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 10.3711,
                  "longitude": 76.3087
                }
              },
              {
                "@type": ["AutoDealer", "MotorcycleDealer", "LocalBusiness"],
                "name": "Tags Bikez Vadakkencherry",
                "telephone": "+91 7025282011",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Vadakkencherry",
                  "addressLocality": "Palakkad",
                  "addressRegion": "Kerala",
                  "postalCode": "678683",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 10.5928,
                  "longitude": 76.4823
                }
              }
            ],
            "sameAs": [
              "https://www.facebook.com/tagsbikez",
              "https://www.instagram.com/tagsbikez?igsh=YzNqbWZ5YnhmOWRi",
              "https://www.youtube.com/@imfranciz"
            ]
          }),
        }}
      />
      {/* FAQPage Schema for Search & AI Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Which Royal Enfield model should I choose?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It depends on your riding style. For city rides, models like Hunter 350 or Classic 350 are ideal. For long touring, Himalayan 450 or Interceptor 650 are better choices due to comfort and performance."
                }
              },
              {
                "@type": "Question",
                "name": "What is the mileage of Royal Enfield bikes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most Royal Enfield bikes offer mileage between 30–40 km/l depending on the model, riding style, and road conditions."
                }
              },
              {
                "@type": "Question",
                "name": "Is Royal Enfield good for long rides?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Royal Enfield bikes are well known for touring. Models like Himalayan 450 and Meteor 350 are specifically designed for long-distance comfort, ergonomics, and stability."
                }
              },
              {
                "@type": "Question",
                "name": "Are spare parts easily available?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, genuine Royal Enfield spare parts and accessories are widely available across all Tags Bikez authorized service centers in Thrissur, Chalakudy, Irinjalakuda, and Kerala."
                }
              },
              {
                "@type": "Question",
                "name": "What documents are required to buy a bike?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You will need a valid ID proof (Aadhaar / Voter ID), address proof, PAN card, and a driving licence. For financed purchases, income proof may also be required."
                }
              },
              {
                "@type": "Question",
                "name": "Can I take a test ride before buying?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, all Tags Bikez authorized dealerships offer test rides across all Royal Enfield models so you can experience the bike before making a decision."
                }
              },
              {
                "@type": "Question",
                "name": "How can I book a Royal Enfield test ride in Thrissur, Chalakudy, or Irinjalakuda?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can book a Royal Enfield test ride across all Tags Bikez showrooms (Kuriachira, Patturaikkal, Irinjalakuda, Chalakudy, Kodakara, Vadakkencherry) by contacting via phone at +91 7594960023, WhatsApp, or through tagsbikez.com."
                }
              },
              {
                "@type": "Question",
                "name": "Are EMI and vehicle finance options available for Royal Enfield bikes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Tags Bikez offers flexible low down-payment EMI and financing options with leading banks and financial institutions for all Royal Enfield motorcycles."
                }
              },
              {
                "@type": "Question",
                "name": "Can I service my Royal Enfield motorcycle at Tags Bikez?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Tags Bikez operates authorized Royal Enfield service centres with certified technicians, genuine parts, and quick service turnarounds across Thrissur."
                }
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
            "logo": "https://tagsbikez.com/logo.png",
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