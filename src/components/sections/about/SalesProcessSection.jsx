"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { img } from '@/assets/assest';
import { Bike, Gauge, FileText, Trophy } from 'lucide-react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SalesProcessSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const stepRefs = useRef([]);
  const contentSideRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const steps = stepRefs.current;
    const contentSide = contentSideRef.current;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          end: "bottom 40%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.to(heading, { color: "#ffffff", duration: 0.8, ease: "power2.inOut" }, 0);
      tl.to(contentSide, { 
        borderColor: "#2a2a2a", 
        backgroundColor: "#1a1a1a",
        duration: 0.8, 
        ease: "power2.inOut" 
      }, 0);

      steps.forEach((step) => {
        if (!step) return;
        const h4 = step.querySelector("h4");
        const p = step.querySelector("p");
        tl.to(step, { borderColor: "#2a2a2a", duration: 0.8, ease: "power2.inOut" }, 0);
        tl.to(h4, { color: "#ffffff", duration: 0.8, ease: "power2.inOut" }, 0);
        tl.to(p, { color: "rgba(255,255,255,0.6)", duration: 0.8, ease: "power2.inOut" }, 0);
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const stepsData = [
    {
      title: "Choose Your Ride",
      desc: "Explore our wide range of Royal Enfield models and find the one that speaks to your soul.",
      icon: <Bike size={24} />
    },
    {
      title: "Hassle-Free Test Ride",
      desc: "Feel the thump. Book a test ride and experience the pure motorcycling DNA first-hand.",
      icon: <Gauge size={24} />
    },
    {
      title: "Transparent Paperwork",
      desc: "Our experts handle all the documentation, from finance options to insurance, with zero stress.",
      icon: <FileText size={24} />
    },
    {
      title: "The Grand Handover",
      desc: "Celebrate your new beginning with our signature delivery ceremony and start your journey.",
      icon: <Trophy size={24} />
    }
  ];

  return (
      <section ref={sectionRef} className="sp-section">
      <style>{`
        .sp-section {
          background: #fff;
          padding: 0 40px 100px 40px;
        }

        .sp-inner {
          max-width: 1425px;
          margin: 0 auto;
        }

        .sp-flex-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: stretch;
        }

        /* ── LEFT CONTENT COLUMN ── */
        .sp-content-side {
          display: flex;
          flex-direction: column;
          border-top: 1px solid #e0e0e0;
          border-left: 1px solid #e0e0e0;
          border-right: 1px solid #e0e0e0;
        }

        .sp-header-wrap {
          padding: 60px;
          border-bottom: 1px solid #e0e0e0;
        }

        .sp-heading {
          font-size: 42px;
          font-weight: 400;
          color: #111;
          line-height: 1.1;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }

        /* ── STEPS GRID ── */
        .sp-steps-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          flex-grow: 1;
        }

        .sp-step-box {
          padding: 40px;
          border-bottom: 1px solid #e0e0e0;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: background 0.3s ease;
        }

        .sp-step-box:nth-child(odd) {
          border-right: 1px solid #e0e0e0;
        }

    
        .sp-step-icon {
          color: #f51b24;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          background: rgba(245, 27, 36, 0.05);
          border-radius: 8px;
        }

        .sp-step-box h4 {
          font-size: 18px;
          font-weight: 600;
          color: #111;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }

        .sp-step-box p {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
          margin: 0;
        }

        /* ── RIGHT IMAGE SIDE ── */
        .sp-img-side {
          position: relative;
          min-height: 500px;
        }

        .sp-img-side img {
          object-fit: cover;
        }

        @media (max-width: 1100px) {
          .sp-flex-container {
            grid-template-columns: 1fr;
          }
          .sp-img-side {
            min-height: 400px;
            margin-bottom: 40px;
          }
          .sp-header-wrap {
            padding: 40px;
          }
          .sp-step-box {
            padding: 30px;
          }
        }

        @media (max-width: 768px) {
          .sp-section {
            padding: 0 20px 60px 20px;
          }
          .sp-heading {
            font-size: 32px;
          }
          .sp-steps-grid {
            grid-template-columns: 1fr;
          }
          .sp-step-box:nth-child(odd) {
            border-right: none;
          }
        }
      `}</style>

      <div className="sp-inner">
        <div className="sp-flex-container">
          <div ref={contentSideRef} className="sp-content-side">
            <div className="sp-header-wrap">
              <h2 ref={headingRef} className="sp-heading">
                How We Get You on Your Dream.
              </h2>
            </div>

            <div className="sp-steps-grid">
              {stepsData.map((step, index) => (
                <div 
                  className="sp-step-box" 
                  key={index}
                  ref={(el) => (stepRefs.current[index] = el)}
                >
                  <div className="sp-step-icon">
                    {step.icon}
                  </div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Image Only (No Grid/Borders) */}
          <div className="sp-img-side">
            <Image 
              src={img.about_bike} 
              alt="Sales Process" 
              fill
              sizes="(max-width: 1100px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesProcessSection;
