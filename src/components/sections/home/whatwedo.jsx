"use client";
import Image from "next/image";
import { img } from "@/assets/assest";
import AnimatedBtn from "@/components/AnimatedBtn";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "ROYAL ENFIELD DEALER",
    description:
      "At Royal Enfield Thrissur, we don't just sell motorcycles we deliver legends on two wheels. From the timeless charm of the Classic 350 to the rugged spirit of the Himalayan and the thrilling performance of the Continental GT & Super Meteor range, we bring you the complete world of Royal Enfield under one roof. As an authorized dealership, every motorcycle comes with genuine documentation, factory-backed warranty, certified service support, and the confidence of dealing with a trusted official partner. Whether you're a daily rider, weekend explorer, or passionate touring enthusiast, our team is here to help you find the perfect machine that matches your style and journey. Ride with authenticity. Ride with confidence. Ride the soul of motorcycling with Royal Enfield Thrissur.",
  },
  {
    number: "02",
    title: "HIGH QUALITY SERVICE",
    description:
      "Your Royal Enfield deserves nothing less than expert attention. At our advanced service centre in Thrissur, every motorcycle is handled by factory-trained technicians who understand the true DNA of Royal Enfield machines. From quick periodic maintenance and precision diagnostics to complete engine rebuilds and performance care, we ensure every ride leaves our workshop smoother, stronger, and road-ready. Using only genuine Royal Enfield parts, advanced equipment, and manufacturer-approved practices, we maintain the performance, reliability, and character your motorcycle was built for. Because for us, service is not just maintenance it's preserving the soul of your ride.",
  },
  {
    number: "03",
    title: "ATTRACTIVE PRICING",
    description:
      "Owning a Royal Enfield should feel exciting not complicated. That's why we offer transparent pricing, zero hidden charges, and complete guidance at every step of your purchase journey. From affordable EMI plans and fast loan approvals with leading finance partners to exclusive seasonal offers and dealership benefits, we make it easier than ever to bring home the Royal Enfield you've always dreamed of. Whether you're buying your first motorcycle or upgrading to your next adventure machine, our team ensures a smooth, hassle-free ownership experience built on trust, value, and customer satisfaction. Your dream ride is closer than you think ride home with confidence today.",
  },
  {
    number: "04",
    title: "READY WHEN YOU ARE",
    description:
      "At our authorized Royal Enfield dealership in Thrissur, we understand that the excitement of owning your dream motorcycle shouldn't be delayed. That's why we ensure a smooth, fast, and hassle-free delivery experience from booking to handover. From registration and insurance coordination to documentation and final vehicle preparation, our team takes care of every detail with precision and transparency. Every motorcycle undergoes a complete pre-delivery inspection, professional detailing, and quality check to ensure it reaches you in perfect condition fully road-ready from day one. With committed timelines, seamless processing, and customer-first support, we make sure your Royal Enfield journey begins exactly the way it should stress-free, memorable, and right on time.",
  },
];

function StepCard({ step, i, stepRefs, cardBorderRefs }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
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
        <p className={`step-desc${expanded ? "" : " step-desc-clamp"}`}>
          {step.description}
        </p>
        <button
          className="read-more-btn"
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}

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

      tl.to(section, { backgroundColor: "#ffffffff", duration: 0.8, ease: "power2.inOut" }, 0);
      tl.to(heading, { color: "#040404ff", duration: 0.8, ease: "power2.inOut" }, 0);
      tl.to(gridWrap, { borderTopColor: "#2a2a2a", borderLeftColor: "#2a2a2a", duration: 0.8, ease: "power2.inOut" }, 0);
      tl.to(cardBorderEls, { borderRightColor: "#2a2a2a", borderBottomColor: "#2a2a2a", duration: 0.8, ease: "power2.inOut" }, 0);

      stepEls.forEach((el, i) => {
        if (!el) return;
        const title = el.querySelector(".step-title");
        const desc = el.querySelector(".step-desc");
        tl.fromTo(el, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, i * 0.1);
        tl.to(title, { color: "#000000ff", duration: 0.8, ease: "power2.inOut" }, 0);
        tl.to(desc, { color: "rgba(0, 0, 0, 0.55)", duration: 0.8, ease: "power2.inOut" }, 0);
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        .wwd-section {
          background-color: #000000ff;
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
          color: #ffffffff;
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

        /* Clamps text to 5 lines */
        .step-desc-clamp {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .read-more-btn {
          background: none;
          border: none;
          padding: 6px 0 0 0;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #f51b24;
          cursor: pointer;
          display: block;
          margin-top: 4px;
          text-transform: uppercase;
          text-decoration: none;
        }

        .read-more-btn:hover {
          opacity: 0.75;
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
                  <StepCard
                    key={step.number}
                    step={step}
                    i={i}
                    stepRefs={stepRefs}
                    cardBorderRefs={cardBorderRefs}
                  />
                ))}
              </div>

              <div className="wwd-cta">
                <AnimatedBtn bgColor="red">CONTACT</AnimatedBtn>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}