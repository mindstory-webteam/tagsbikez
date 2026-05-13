"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { img } from "@/assets/assest";

gsap.registerPlugin(ScrollTrigger);

const members = [
  {
    name: "A.F. George",
    role: "Founding Partner",
    image: img.member1,
    description: (
      <>
        <strong>Experience:</strong> 45+ Years of Entrepreneurial Leadership<br />
        <strong>Ventures:</strong> Founder of Bhavana Home Appliances, Star Home Appliances, Bhavana Power Tools, AGS Marketing, and Tags Bikez.<br />
        <strong>Philosophy:</strong> Building sustainable, people-centric enterprises.<br />
        <strong>Impact:</strong> His foundational vision of ethical business and community-led growth is the cornerstone upon which the Tags Bikez dealership was built.
      </>
    )
  },
  {
    name: "John George",
    role: "Partner",
    image: img.member2,
    description: "John George manages the daily operations of all Tags Bikez branches with a focus on both precision and empathy. An MBA graduate who leads from the front, John believes that a business is only as strong as its team. By prioritizing talent development and people-led growth, he ensures that our operational success is built on a foundation of professional excellence and mutual prosperity."
  },
  {
    name: "Francis George",
    role: "Managing Partner",
    image: img.member3,
    description: "As the leader overseeing our Royal Enfield vertical, Francis George brings a sophisticated strategic perspective to the group. His ability to navigate shifting market demands keeps our team agile and future-focused, ensuring long-term growth and a superior customer experience."
  },
];

const OurMembers = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const cards = cardRefs.current;

    const ctx = gsap.context(() => {
      gsap.from(heading, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        }
      });

      cards.forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.2 + index * 0.1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          }
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="members-section">
      <style>{`
        .members-section {
          background: #fff;
          padding: 0px 40px 40px 40px;
        }

        .members-inner {
          max-width: 1425px;
          margin: 0 auto;
        }

        .members-header {
          margin-bottom: 56px;
        }

        .members-heading {
          font-size: 42px;
          font-weight: 400;
          color: #111;
          line-height: 1.1;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          margin: 0;
        }

        .members-grid-wrap {
          border-top: 1px solid #e0e0e0;
          border-left: 1px solid #e0e0e0;
        }

        .members-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }

        .member-card {
          border-right: 1px solid #e0e0e0;
          border-bottom: 1px solid #e0e0e0;
          padding: 48px 40px;
          background: #fff;
          transition: background 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .member-card:hover {
          background: #fafafa;
        }
        
        .member-img-wrap {
          position: relative;
          width: 100%;
          height: 380px;
          margin-bottom: 32px;
          border-radius: 4px;
          overflow: hidden;
          background: #f5f5f5;
        }
        
        .member-img-wrap img {
          object-fit: cover;
          object-position: top;
          transition: transform 0.6s ease;
        }

        .member-name {
          font-size: 24px;
          font-weight: 700;
          color: #111;
          margin: 0 0 8px 0;
        }

        .member-role {
          font-size: 13px;
          font-weight: 700;
          color: #f51b24;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin: 0 0 24px 0;
        }

        .member-desc {
          font-size: 15px;
          color: #666;
          line-height: 1.8;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .members-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .member-img-wrap {
            height: 320px;
          }
        }

        @media (max-width: 768px) {
          .members-section {
            padding: 20px 20px 60px 20px;
          }
          .members-heading {
            font-size: 32px;
          }
          .members-grid {
            grid-template-columns: 1fr;
          }
          .member-card {
            padding: 32px 24px;
          }
          .member-img-wrap {
            height: 280px;
            margin-bottom: 24px;
          }
        }
      `}</style>
      <div className="members-inner">
        <div className="members-header">
          <h2 ref={headingRef} className="members-heading">Our Leadership</h2>
        </div>
        <div className="members-grid-wrap">
          <div className="members-grid">
            {members.map((member, idx) => (
              <div
                className="member-card"
                key={idx}
                ref={el => cardRefs.current[idx] = el}
              >
                <div className="member-img-wrap">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <div className="member-desc">{member.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMembers;