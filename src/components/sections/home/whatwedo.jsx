"use client";
import Image from "next/image";
import { img } from "@/assets/assest";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

export default function WhatWeDoSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const stepRefs = useRef([]);
  const cardBorderRefs = useRef([]);
  const gridWrapRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const stepEls = stepRefs.current;
    const cardBorderEls = cardBorderRefs.current;
    const gridWrap = gridWrapRef.current;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          end: "bottom 40%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.to(section, {
        backgroundColor: "#111111",
        duration: 0.8,
        ease: "power2.inOut",
      }, 0);

      tl.to(heading, {
        color: "#ffffff",
        duration: 0.8,
        ease: "power2.inOut",
      }, 0);

      tl.to(gridWrap, {
        borderTopColor: "#2a2a2a",
        borderLeftColor: "#2a2a2a",
        duration: 0.8,
        ease: "power2.inOut",
      }, 0);

      tl.to(cardBorderEls, {
        borderRightColor: "#2a2a2a",
        borderBottomColor: "#2a2a2a",
        duration: 0.8,
        ease: "power2.inOut",
      }, 0);

      stepEls.forEach((el, i) => {
        if (!el) return;
        const title = el.querySelector(".step-title");
        const desc = el.querySelector(".step-desc");

        tl.fromTo(
          el,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          i * 0.1
        );

        tl.to(title, {
          color: "#ffffff",
          duration: 0.8,
          ease: "power2.inOut",
        }, 0);

        tl.to(desc, {
          color: "rgba(255,255,255,0.55)",
          duration: 0.8,
          ease: "power2.inOut",
        }, 0);
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: "#ffffff",
        padding: "80px 40px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto", width: "100%" }}>

        <h2
          ref={headingRef}
          style={{
            fontSize: "clamp(36px, 3vw, 52px)",
            lineHeight: 1.15,
            maxWidth: 480,
            color: "#000000",
            fontWeight: 700,
            margin: "0 0 56px 0",
          }}
        >
          WHAT WE DO
        </h2>

        <div style={{
          display: "flex",
          gap: 56,
          alignItems: "flex-start",
          flexWrap: "wrap",
          marginBottom: 20,
        }}>

          <div style={{
            flex: "0 0 400px",
            overflow: "hidden",
            position: "relative",
            borderRadius: "5px",
            height: 425,
          }}>
            <Image
              src={img.banner2}
              alt="What we do"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>

          <div style={{ flex: 1, minWidth: 280 }}>
            <div
              ref={gridWrapRef}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                borderTop: "1px solid #e0e0e0",
                borderLeft: "1px solid #e0e0e0",
              }}
            >
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  ref={(el) => (stepRefs.current[i] = el)}
                  style={{ opacity: 0 }}
                >
                  <div
                    ref={(el) => (cardBorderRefs.current[i] = el)}
                    style={{
                      borderRight: "1px solid #e0e0e0",
                      borderBottom: "1px solid #e0e0e0",
                      padding: "28px 24px",
                      boxSizing: "border-box",
                      height: "100%",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                      <p style={{
                        fontSize: 36,
                        fontWeight: 700,
                        margin: 0,
                        lineHeight: 1,
                        fontFamily: "'DM Sans', sans-serif",
                        flexShrink: 0,
                        color: "#f51b24",
                      }}>
                        {step.number}
                      </p>
                      <p
                        className="step-title"
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          letterSpacing: "0.05em",
                          margin: 0,
                          lineHeight: 1.3,
                          fontFamily: "'DM Sans', sans-serif",
                          textTransform: "uppercase",
                          color: "#000000",
                        }}
                      >
                        {step.title}
                      </p>
                    </div>
                    <p
                      className="step-desc"
                      style={{
                        fontSize: 13,
                        lineHeight: 1.7,
                        margin: 0,
                        fontFamily: "'DM Sans', sans-serif",
                        color: "#555555",
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 44 }}>
              <button
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
              </button>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 700px) {
          .steps-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}