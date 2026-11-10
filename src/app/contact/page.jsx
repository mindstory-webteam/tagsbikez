import React from 'react'
import ContactSection from '@/components/sections/contact/ContactSection'

export const metadata = {
  title: "Contact Tags Bikez | Royal Enfield Dealer Kerala",
  description:
    "Get in touch with Tags Bikez for motorcycle sales, test rides, service bookings, spare parts, and customer support.",
  alternates: {
    canonical: "https://tagsbikez.com/contact",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Tags Bikez",
    url: "https://tagsbikez.com/contact",
    title: "Contact Tags Bikez | Royal Enfield Dealer Kerala",
    description:
      "Get in touch with Tags Bikez for motorcycle sales, test rides, service bookings, spare parts, and customer support.",
    images: [
      {
        url: "https://tagsbikez.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Tags Bikez",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Tags Bikez | Royal Enfield Dealer Kerala",
    description:
      "Get in touch with Tags Bikez for motorcycle sales, test rides, service bookings, spare parts, and customer support.",
    images: ["https://tagsbikez.com/og-image.png"],
  },
};

const ContactPage = () => {
  return (
    <main>
      <ContactSection />
    </main>
  )
}

export default ContactPage