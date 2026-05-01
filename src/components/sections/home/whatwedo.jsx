"use client";
import Image from "next/image";
import { img } from "@/assets/assest";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "ROYAL ENFIELD DEALER",
    description:
      "As an authorized Royal Enfield dealership in Kochi, we bring you the full lineup of iconic motorcycles from the timeless Classic 350 to the adventure-ready Himalayan. Every bike is delivered with factory warranty, genuine documentation, and the trust of a certified dealer you can count on.",
  },
  {
    number: "02",
    title: "HIGH QUALITY SERVICE",
    description:
      "Our state-of-the-art service centre is staffed by factory-trained technicians who know every bolt and bearing of your Royal Enfield. From routine oil changes and scheduled maintenance to complex engine overhauls, we use only genuine parts to keep your ride performing at its absolute best.",
  },
  {
    number: "03",
    title: "ATTRACTIVE PRICING",
    description:
      "We believe owning a Royal Enfield should be straightforward and stress-free. That's why we offer transparent, no-hidden-cost pricing on all bikes and services, flexible finance options with leading banks, and exclusive dealership offers throughout the year so your dream ride is always within reach.",
  },
  {
    number: "04",
    title: "PROMPT DELIVERY",
    description:
      "Your time matters. Once your booking is confirmed, our team handles all the paperwork, registration, and insurance coordination so you don't have to. Most customers receive their motorcycle within the committed timeframe, fully prepped, inspected, and ready to hit the open road from day one.",
  },
];

const highlights = [
  { value: "500+", label: "Happy Customers" },
  { value: "15+", label: "Expert Staff" },
  { value: "10K+", label: "Service Visits" },
];

const perks = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Genuine Parts Only",
    desc: "Every spare part is 100% authentic, sourced directly from Royal Enfield.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" strokeWidth="1.6" />
        <path d="M12 6v6l4 2" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Same-Day Service",
    desc: "Most repairs and maintenance completed within the same business day.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="7" r="4" strokeWidth="1.6" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Certified Technicians",
    desc: "Our team is factory-trained and certified by Royal Enfield India.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 22V12h6v10" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Showroom Experience",
    desc: "Walk in, test ride, and take home your dream machine all in one visit.",
  },
];

export default function WhatWeDoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-10% 0px -10% 0px" });

  return (
    <motion.section
      ref={ref}
      animate={{
        background: isInView ? "#111111" : "#ffffff",
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{ padding: "80px 40px", minHeight: "100vh", display: "flex", alignItems: "center" }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto", width: "100%" }}>

        {/* Heading */}
        <motion.h2
          animate={{ color: isInView ? "#ffffff" : "#000000" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            fontSize: "clamp(36px, 3vw, 52px)",
            lineHeight: 1.15,
            marginBottom: 56,
            maxWidth: 480,
          }}
        >
          WHAT WE DO
        </motion.h2>

        {/* Main Row: Image + Steps */}
        <div style={{
          display: "flex",
          gap: 56,
          alignItems: "flex-start",
          flexWrap: "wrap",
          marginBottom: 20,
        }}>

          {/* Image */}
          <div style={{
            flex: "0 0 400px",
            overflow: "hidden",
            position: "relative",
            borderRadius:"10px",
            height: 440,
          }}>
            <Image
              src={img.banner2}
              alt="What we do"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
     
          </div>

          {/* Steps Grid */}
          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "40px 60px",
            }}>
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                    <motion.p
                      animate={{ color: "#f51b24" }}
                      style={{
                        fontSize: 36,
                        fontWeight: 700,
                        margin: 0,
                        lineHeight: 1,
                        fontFamily: "'DM Sans', sans-serif",
                        flexShrink: 0,
                      }}
                    >
                      {step.number}
                    </motion.p>
                    <motion.p
                      animate={{ color: isInView ? "#ffffff" : "#000000" }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        letterSpacing: "0.05em",
                        margin: 0,
                        lineHeight: 1.3,
                        fontFamily: "'DM Sans', sans-serif",
                        textTransform: "uppercase",
                      }}
                    >
                      {step.title}
                    </motion.p>
                  </div>
                  <motion.p
                    animate={{ color: isInView ? "rgba(255,255,255,0.55)" : "#555555" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    style={{
                      fontSize: 13,
                      lineHeight: 1.7,
                      margin: 0,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {step.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ marginTop: 44 }}>
              <motion.button
                style={{
                  background: "#f51b24",
                  border: "none",
                  padding: "13px 36px",
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: 1.5,
                  cursor: "pointer",
                  borderRadius: 4,
                  color: "#fff",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                CONTACT US
              </motion.button>
            </div>
          </div>
        </div>

   

      

      </div>

      <style>{`
        @media (max-width: 900px) {
          div[style*="gridTemplateColumns: repeat(4"] {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 700px) {
          div[style*="gridTemplateColumns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="gridTemplateColumns: repeat(4"] {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          div[style*="gridTemplateColumns: repeat(4"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </motion.section>
  );
}