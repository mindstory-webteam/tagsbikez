import React, { Suspense } from "react";
import TestRideBooking from "@/components/sections/testride/TestRideBooking";

export const metadata = {
  title: "Royal Enfield Test Drive in Thrissur | TagsBikez",
  description:
    "Book a Royal Enfield test drive in Thrissur with TagsBikez. Find your nearest showroom and experience your preferred Royal Enfield motorcycle.",
  alternates: {
    canonical: "https://tagsbikez.com/testride",
  },
  openGraph: {
    title: "Royal Enfield Test Drive in Thrissur | TagsBikez",
    description:
      "Book a Royal Enfield test drive in Thrissur with TagsBikez. Find your nearest showroom and experience your preferred Royal Enfield motorcycle.",
    url: "https://tagsbikez.com/testride",
    siteName: "TagsBikez",
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
