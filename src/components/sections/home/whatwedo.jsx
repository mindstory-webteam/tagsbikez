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

      tl.to(section, { backgroundColor: "#1a1a1a", duration: 0.8, ease: "power2.inOut" }, 0);
      tl.to(heading, { color: "#ffffff", duration: 0.8, ease: "power2.inOut" }, 0);
      tl.to(gridWrap, { borderTopColor: "#2a2a2a", borderLeftColor: "#2a2a2a", duration: 0.8, ease: "power2.inOut" }, 0);
      tl.to(cardBorderEls, { borderRightColor: "#2a2a2a", borderBottomColor: "#2a2a2a", duration: 0.8, ease: "power2.inOut" }, 0);

      stepEls.forEach((el, i) => {
        if (!el) return;
        const title = el.querySelector(".step-title");
        const desc = el.querySelector(".step-desc");
        tl.fromTo(el, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, i * 0.1);
        tl.to(title, { color: "#ffffff", duration: 0.8, ease: "power2.inOut" }, 0);
        tl.to(desc, { color: "rgba(255,255,255,0.55)", duration: 0.8, ease: "power2.inOut" }, 0);
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        .wwd-section {
          background-color: #ffffff;
          padding: 80px 40px;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .wwd-inner {
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
        }

        .wwd-heading {
          font-size:42px;
          line-height: 1.15;
          max-width: 480px;
          color: #000000;
          font-weight: 400;
          margin: 0 0 56px 0;
        }

        /* Desktop layout: image left, grid right */
        .wwd-body {
          display: flex;
          gap: 56px;
          align-items: flex-start;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .wwd-image-wrap {
          flex: 0 0 400px;
          overflow: hidden;
          position: relative;
          border-radius: 5px;
          height: 425px;
        }

        .wwd-grid-side {
          flex: 1;
          min-width: 280px;
        }

        .wwd-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 1px solid #e0e0e0;
          border-left: 1px solid #e0e0e0;
        }

        .wwd-card-border {
          border-right: 1px solid #e0e0e0;
          border-bottom: 1px solid #e0e0e0;
          padding: 28px 24px;
          box-sizing: border-box;
          height: 100%;
        }

        .wwd-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;
        }

        .wwd-step-num {
          font-size: 36px;
          font-weight: 700;
          margin: 0;
          line-height: 1;
          flex-shrink: 0;
          color: #f51b24;
        }

        .step-title {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.05em;
          margin: 0;
          line-height: 1.3;
          text-transform: uppercase;
          color: #000000;
        }

        .step-desc {
          font-size: 13px;
          line-height: 1.7;
          margin: 0;
          color: #555555;
        }

        .wwd-cta {
          margin-top: 44px;
        }

        .wwd-btn {
          background: #f51b24;
          border: none;
          padding: 13px 36px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.5px;
          cursor: pointer;
          color: #fff;
        }

        /*  MOBILE  */
        @media (max-width: 768px) {
          .wwd-section {
            padding: 60px 20px;
            min-height: unset;
            align-items: flex-start;
          }

          .wwd-heading {
            margin-bottom: 32px;
          }

          .wwd-body {
            flex-direction: column;
            gap: 0;
          }

          .wwd-image-wrap {
            flex: none;
            width: 100%;
            height: 240px;
            border-radius: 8px;
            margin-bottom: 32px;
          }

          .wwd-grid-side {
            width: 100%;
            min-width: unset;
          }

          .wwd-grid {
            grid-template-columns: 1fr;
          }

          .wwd-card-border {
            padding: 20px 16px;
          }

          .wwd-step-num {
            font-size: 28px;
          }

          .wwd-cta {
            margin-top: 28px;
          }

          .wwd-btn {
            width: 100%;
            text-align: center;
            padding: 14px;
          }
        }
      `}</style>

      <section ref={sectionRef} className="wwd-section">
        <div className="wwd-inner">

          <h2 ref={headingRef} className="wwd-heading">WHAT WE DO</h2>

          <div className="wwd-body">

            {/* Image */}
            <div className="wwd-image-wrap">
              <Image
                src={img.banner2}
                alt="What we do"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>

            {/* Steps grid */}
            <div className="wwd-grid-side">
              <div ref={gridWrapRef} className="wwd-grid">
                {steps.map((step, i) => (
                  <div
                    key={step.number}
                    ref={(el) => (stepRefs.current[i] = el)}
                    style={{ opacity: 0 }}
                  >
                    <div
                      ref={(el) => (cardBorderRefs.current[i] = el)}
                      className="wwd-card-border"
                    >
                      <div className="wwd-card-header">
                        <p className="wwd-step-num">{step.number}</p>
                        <p className="step-title">{step.title}</p>
                      </div>
                      <p className="step-desc">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="wwd-cta">
                <button className="wwd-btn">CONTACT</button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}