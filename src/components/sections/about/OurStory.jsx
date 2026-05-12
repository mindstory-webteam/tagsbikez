"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { img } from '@/assets/assest';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const content = [
  "The story of Tags Bikez is rooted in a tradition of trust that began in the 1960s. It started with the Kerala Leather Company, founded by the father of A.F. George, which served as a premier distributor for USHA sewing machines. This pioneering spirit of enterprise was passed down seamlessly to the next generation.",
  "In 1980, A.F. George expanded this legacy by building Bhavana Home Appliances into a household name in Thrissur. He further strengthened the family’s reputation for quality by establishing Star Home Appliances—an authorized dealer for Singer and Merritt—and launching Bhavana Power Tools. To support the region's growing demand, AGS Marketing was established as a dedicated distribution firm to serve a wide network of dealers.",
  "When the opportunity arose to represent Royal Enfield, India’s most storied motorcycle brand, the family brought that same rigor and people-first ethos to the world of two-wheelers. Today, Tags Bikez operates a robust network of showrooms and dedicated service centers across the Thrissur and Palakkad districts.",
  "We are more than just a dealership; we are enthusiasts, community members, and lifelong partners to every rider who walks through our doors."
];

const OurStory = () => {
  const sectionRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
              once: true,      
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
          padding-top: 20px;
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
          height: 500px;
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
           A Legacy of Trust: From the Precision of Sewing Machines to the Freedom of the Open Road
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