"use client";
import Image from "next/image";
import { img } from "@/assets/assest";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Strategy & Discovery",
    description:
      "We dive deep into your brand, goals, and audience to craft a focused strategy that drives real results from day one.",
  },
  {
    number: "02",
    title: "Design & Prototyping",
    description:
      "Our designers translate strategy into stunning visuals wireframes, mockups, and interactive prototypes refined with your feedback.",
  },
  {
    number: "03",
    title: "Development & Build",
    description:
      "We engineer your product with clean, scalable code ensuring performance, accessibility, and seamless experience across all devices.",
  },
  {
    number: "04",
    title: "Launch & Growth",
    description:
      "We deploy, monitor, and continuously optimize turning your launch into a foundation for long-term growth and success.",
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
      style={{ padding: "60px 40px" }}
    >
      <div style={{ maxWidth: 1300, margin: "0 auto" }}>

        {/* Heading */}
        <motion.h2
          animate={{ color: isInView ? "#ffffff" : "#000000" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            fontSize: "clamp(36px, 3vw, 48px)",
            lineHeight: 1.25,
            marginBottom: 48,
            maxWidth: 320,
          }}
        >
          WHAT WE DO
        </motion.h2>

        <div style={{
          display: "flex",
          gap: 48,
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}>

          {/* Image */}
          <div style={{
            flex: "0 0 300px",
            borderRadius: 16,
            overflow: "hidden",
            position: "relative",
            height: 340,
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
              gap: "36px 40px",
            }}>
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 24 }
                  }
                  transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                >
                  <motion.p
                    animate={{ color: isInView ? "#f51b24" : "#f51b24" }}
                    style={{
                      fontSize: 36,
                      fontWeight: 700,
                      margin: "0 0 10px 0",
                      lineHeight: 1,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {step.number}
                  </motion.p>
                  <motion.p
                    animate={{ color: isInView ? "rgba(255,255,255,0.65)" : "#555555" }}
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
            <div style={{ marginTop: 40 }}>
              <motion.button
                animate={{
                  borderColor: isInView ? "#ffffff" : "#000000",
                  color: isInView ? "#ffffff" : "#000000",
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                whileHover={{
                  backgroundColor: isInView ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)",
                }}
                style={{
                  background: "transparent",
                  border: "2px solid",
                  padding: "13px 36px",
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: 1.5,
                  cursor: "pointer",
                  borderRadius: 4,
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
        @media (max-width: 700px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </motion.section>
  );
}