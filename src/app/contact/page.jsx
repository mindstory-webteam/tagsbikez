import React from 'react'
import ContactSection from '@/components/sections/contact/ContactSection'

export const metadata = {
  title: "Contact Tags Bikez | Royal Enfield Dealer Kerala",
  description:
    "Get in touch with Tags Bikez for motorcycle sales, test rides, service bookings, spare parts, and customer support.",
  alternates: {
    canonical: "https://tagsbikez.com/contact",
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