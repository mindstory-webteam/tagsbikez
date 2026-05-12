"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { img } from "@/assets/assest";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedBtn from "@/components/AnimatedBtn";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    id: "accessories",
    title: "Motorcycle Accessories",
    description: "Enhance your ride with our range of precision-engineered genuine accessories built for performance and style.",
    image: img.parts,
    link: "https://wa.me/917594960023?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Royal%20Enfield."
  },
  {
    id: "parts",
    title: "Lifestyle Apparels",
    description: "Keep your machine running like new with authentic spare parts designed specifically for your motorcycle.",
    image: img.accessories,
    link: "https://wa.me/917594960023?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Royal%20Enfield."
  },
  {
    id: "gear",
    title: "Riding Gear",
    description: "Stay safe and look sharp with our collection of premium riding jackets, helmets, and protective equipment.",
    image: img.gear,
    link: "https://wa.me/917594960023?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Royal%20Enfield."
  }
];

const AccessoriesSection = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const grid = gridRef.current;
    const cards = cardRefs.current;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          end: "bottom 40%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.to(grid, {
        borderTopColor: "#2a2a2a",
        borderLeftColor: "#2a2a2a",
        duration: 0.8,
        ease: "power2.inOut"
      }, 0);

      tl.to(cards, {
        backgroundColor: "#1a1a1a",
        borderRightColor: "#2a2a2a",
        borderBottomColor: "#2a2a2a",
        duration: 0.8,
        ease: "power2.inOut"
      }, 0);

      cards.forEach((card) => {
        if (!card) return;
        const title = card.querySelector(".acc-title");
        const desc = card.querySelector(".acc-desc");
        tl.to(title, { color: "#ffffff", duration: 0.8, ease: "power2.inOut" }, 0);
        tl.to(desc, { color: "rgba(255,255,255,0.6)", duration: 0.8, ease: "power2.inOut" }, 0);
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="acc-section">
      <style>{`
        .acc-section {
          background: #fff;
          padding: 60px 40px 80px 40px;
          overflow: hidden;
        }

        .acc-inner {
          max-width: 1425px;
          margin: 0 auto;
        }

        .acc-heading {
          font-size: 42px;
          font-weight: 400;
          color: #111;
          margin: 0 0 56px 0;
          letter-spacing: 0.02em;
        }

        .acc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid #e0e0e0;
          border-left: 1px solid #e0e0e0;
        }

        .acc-card {
          border-right: 1px solid #e0e0e0;
          border-bottom: 1px solid #e0e0e0;
          padding: 0;
          display: flex;
          flex-direction: column;
          transition: background 0.3s ease;
          background: #fff;
        }

      

        .acc-img-wrap {
          width: 100%;
          height: 320px;
          position: relative;
          overflow: hidden;
        }

        .acc-img {
          object-fit: cover;
          transition: transform 0.5s ease;
        }


        .acc-content {
          padding: 32px 28px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .acc-tag {
          font-size: 11px;
          font-weight: 700;
          color: #f51b24;
          letter-spacing: 0.15em;
          margin-bottom: 12px;
          display: block;
        }

        .acc-title {
          font-size: 20px;
          font-weight: 600;
          color: #111;
          margin: 0 0 14px 0;
          line-height: 1.2;
        }

        .acc-desc {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
          margin: 0 0 28px 0;
          flex-grow: 1;
        }

        @media (max-width: 1024px) {
          .acc-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .acc-section {
            padding: 0px 20px;
          }
          .acc-heading {
            font-size: 32px;
            margin-bottom: 32px;
          }
          .acc-grid {
            grid-template-columns: 1fr;
          }
          .acc-img-wrap {
            height: 240px;
          }
          .acc-content {
            padding: 24px 20px;
          }
        }
      `}</style>

      <div className="acc-inner">
        <h2 className="acc-heading">Essentials & Gear</h2>

        <div ref={gridRef} className="acc-grid">
          {categories.map((cat, i) => (
            <div
              key={cat.id}
              className="acc-card"
              ref={(el) => (cardRefs.current[i] = el)}
            >
              <div className="acc-img-wrap">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="acc-img"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="acc-content">
                <h3 className="acc-title">{cat.title}</h3>
                <p className="acc-desc">{cat.description}</p>
                <AnimatedBtn
                  href={cat.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  bgColor="#25D366"
                  hoverColor="#25D366"
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  
                    Enquire via WhatsApp
                  </span>
                </AnimatedBtn>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccessoriesSection;
