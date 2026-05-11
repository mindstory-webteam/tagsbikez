"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { img } from '@/assets/assest';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const content = [
  "Tags Bikez is rooted in a tradition of trust that goes back to the 1960s, when A.F. George's father built Bhavana Home Appliances into a household name in Thrissur. That spirit of enterprise passed seamlessly to the next generation A.F. George built Star Home Appliances into an authorised distributorship for Singer and Merritt sewing machines, and expanded further with Bhavana Power Tools.",
  "When the opportunity arose to represent Royal Enfield India's most storied motorcycle brand in Thrissur, the family brought the same rigour, relationships, and people-first ethos to the world of two-wheelers. Today, Tags Bikez operates multiple Royal Enfield showrooms and a growing River Indie EV dealership, supported by a network of dedicated service centres across Thrissur and Palakkad districts.",
  "We are not just a dealership. We are enthusiasts, community members, and lifelong partners to every rider who walks through our doors."
];

const OurStory = () => {
  const sectionRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each paragraph from ash to black — once only, no reverse
      textRefs.current.forEach((el) => {
        gsap.fromTo(
          el,
          { color: "#a0a0a0" },
          {
            color: "#000000",
            duration: 1,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              once: true,       // fires once, never reverses
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="story-section">
      <style>{`
        .story-section {
          padding: 0px 40px 0px 40px;
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: #fff;
        }

        .story-inner {
          max-width: 1425px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px 40px;
          align-items: start;
          width: 100%;
        }

        .story-heading-wrap {
          display: flex;
          align-items: center;
        }

        .story-heading {
          font-size: 42px;
          font-weight: 400;
          color: #111;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }

        .story-subheading-wrap {
          display: flex;
          align-items: center;
        }

        .story-subheading {
          font-size: 18px;
          font-weight: 400;
          color: #333;
          margin: 0;
          line-height: 1.6;
        }

        .story-left {
          position: relative;
        }

        .story-img-wrap {
          position: relative;
          width: 100%;
          height: 380px;
          border-radius: 4px;
          overflow: hidden;
        }

        .story-img-wrap img {
          object-fit: cover;
        }

        .story-right {
          display: flex;
          flex-direction: column;
        }

        .story-text-wrap {
          padding-bottom: 40px;
        }

        .story-text {
          font-size: 16px;
          line-height: 1.8;
          text-align: justify;
          margin-bottom: 24px;
          color: #a0a0a0;
        }

        @media (max-width: 1100px) {
          .story-inner {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .story-heading-wrap { order: 1; }
          .story-subheading-wrap { order: 2; }
          .story-left { order: 3; }
          .story-right { order: 4; }
        }

        @media (max-width: 768px) {
          .story-section {
            padding: 60px 20px;
            min-height: unset;
          }
          .story-img-wrap {
            height: 280px;
          }
          .story-heading {
            font-size: 32px;
          }
          .story-subheading {
            font-size: 16px;
          }
          .story-text {
            font-size: 15px;
          }
        }
      `}</style>

      <div className="story-inner">
        {/* Row 1 */}
        <div className="story-heading-wrap">
          <h2 className="story-heading">Our Story</h2>
        </div>
        <div className="story-subheading-wrap">
          <p className="story-subheading">
            From a humble home appliances store in the 1960s to Thrissur's
            premier motorcycling destination. A legacy of trust, built across
            generations.
          </p>
        </div>

        {/* Row 2 */}
        <div className="story-left">
          <div className="story-img-wrap">
            <Image
              src={img.about_bike}
              alt="Our Story"
              fill
              sizes="(max-width: 1100px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="story-right">
          <div className="story-text-wrap">
            {content.map((paragraph, index) => (
              <p
                key={index}
                className="story-text"
                ref={(el) => (textRefs.current[index] = el)}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;