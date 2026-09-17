import React, { Suspense } from "react";
import TestRideBooking from "@/components/sections/testride/TestRideBooking";

export const metadata = {
  title: "Book a Royal Enfield Test Ride | Tags Bikez Kerala",
  description:
    "Experience the pure thrill of Royal Enfield. Book your free test ride for Classic 350, Hunter 350, Bullet 350, Himalayan 450, Guerrilla 450, or 650 Twins at Tags Bikez showrooms across Thrissur and Central Kerala.",
  alternates: {
    canonical: "https://tagsbikez.com/testride",
  },
  openGraph: {
    title: "Book a Royal Enfield Test Ride | Tags Bikez Kerala",
    description:
      "Schedule a free Royal Enfield test ride today. Select your machine and choose from 8 authorized Tags Bikez showrooms in Kerala.",
    url: "https://tagsbikez.com/testride",
    siteName: "Tags Bikez",
    locale: "en_IN",
    type: "website",
  },
};

export default function TestRidePage() {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Royal Enfield Test Ride",
            "provider": {
              "@type": "MotorcycleDealer",
              "name": "Tags Bikez",
              "url": "https://tagsbikez.com",
              "telephone": "+91 7594960023",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Kuriachira",
                "addressLocality": "Thrissur",
                "addressRegion": "Kerala",
                "postalCode": "680006",
                "addressCountry": "IN"
              }
            },
            "serviceType": "Motorcycle Test Ride",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "INR"
            }
          }),
        }}
      />

      <div className="testride-page bg-white min-h-screen">
        <Suspense fallback={
          <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#ffffff", color: "#111111" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ width: 40, height: 40, border: "3px solid #eee", borderTopColor: "#f51b24", borderRadius: "50%", margin: "0 auto 16px", animation: "spin 1s linear infinite" }} />
              <p style={{ fontFamily: "var(--font-oswald), sans-serif", fontSize: 18, letterSpacing: 1, textTransform: "uppercase", color: "#111" }}>Loading Test Ride Booking...</p>
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>
          </div>
        }>
          <TestRideBooking />
        </Suspense>
      </div>
    </>
  );
}
