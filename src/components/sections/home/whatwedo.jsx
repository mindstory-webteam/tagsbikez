"use client";
import Image from "next/image";
import { img } from "@/assets/assest";

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
  return (
    <section style={{
      background: "#fff",
      padding: "50px 40px",
    }}>
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
      }}>

        <h2 style={{
          fontSize: "clamp(28px, 4vw, 42px)",
          color: "#000",
          lineHeight: 1.25,
          marginBottom: 48,
          maxWidth: 320,
        }}>
          WHAT WE DO
        </h2>

        <div style={{
          display: "flex",
          gap: 48,
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}>

          <div style={{
            flex: "0 0 300px",
            borderRadius: 16,
            overflow: "hidden",
            position: "relative",
            height: 340,
          }}>
            <Image
              src={img.banner1}
              alt="What we do"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>

          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "36px 40px",
            }}>
              {steps.map((step) => (
                <div key={step.number}>
                  <p style={{
                    fontSize: 36,
                    fontWeight: 700,
                    color: "red",
                    margin: "0 0 10px 0",
                    lineHeight: 1,
                  }}>
                    {step.number}
                  </p>
                  <p style={{
                    fontSize: 13,
                    color: "#555",
                    lineHeight: 1.7,
                    margin: 0,
                  }}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 40 }}>
              <button style={{
                background: "transparent",
                border: "2px solid black",
                color: "#000",
                padding: "13px 36px",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 1.5,
                cursor: "pointer",
                borderRadius: 4,
                transition: "all 0.3s",
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "black";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#000";
                }}
              >
                CONTACT US
              </button>
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
    </section>
  );
}