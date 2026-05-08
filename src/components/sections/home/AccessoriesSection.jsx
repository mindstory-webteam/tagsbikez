"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { img } from "@/assets/assest";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    id: "accessories",
    title: "Motorcycle Accessories",
    description: "Enhance your ride with our range of precision-engineered genuine accessories built for performance and style.",
    image: img.accessories,
    link: "https://wa.me/917594960023?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Royal%20Enfield."
  },
  {
    id: "parts",
    title: "Lifestyle Apparels",
    description: "Keep your machine running like new with authentic spare parts designed specifically for your motorcycle.",
    image: img.parts,
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

        .acc-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #25D366;
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 14px 24px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          width: fit-content;
          text-decoration: none;
        }



        .acc-btn svg {
          width: 16px;
          height: 16px;
          fill: currentColor;
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
                <a 
                  href={cat.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="acc-btn"
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Enquire via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccessoriesSection;
