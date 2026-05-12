"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { img } from '@/assets/assest';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CompanySection = () => {
  const sectionRef = useRef(null);
  const showroomRef = useRef(null);
  const serviceRef = useRef(null);
  const legacyRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const animateCounter = (ref, target) => {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
        onUpdate: () => {
          if (ref.current) ref.current.innerText = Math.ceil(obj.val);
        }
      });
    };

    const ctx = gsap.context(() => {
      animateCounter(showroomRef, 4);
      animateCounter(serviceRef, 6);
      animateCounter(legacyRef, 35);
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="cp-section">
      <style>{`
        .cp-section {
          background: #fff;
          padding: 80px 40px;
        }

        .cp-inner {
          max-width: 1425px;
          margin: 0 auto;
        }

        .cp-flex-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: stretch;
        }

        .cp-img-side {
          position: relative;
          min-height: 500px;
          padding: 0;
        }

        .cp-img-side img {
          object-fit: cover;
          transition: transform 0.6s ease;
        }

   

        /* ── RIGHT CONTENT COLUMN ── */
        .cp-content-side {
          display: flex;
          flex-direction: column;
        }

        .cp-text-wrap {
          padding: 60px;
          border-bottom: 1px solid #e0e0e0;
          flex-grow: 1;
        }

        .cp-heading {
          font-size: 42px;
          font-weight: 400;
          color: #111;
          line-height: 1.1;
          margin-bottom: 32px;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }

        .cp-heading span {
          color: #f51b24;
        }

        .cp-desc {
          font-size: 16px;
          color: #666;
          line-height: 1.8;
          margin: 0;
        }

        /* ── STATS GRID INSIDE RIGHT COLUMN ── */
        .cp-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          background: #fff;
          border-left: 1px solid #e0e0e0;
        }

        .cp-stat-item {
          padding: 32px 20px;
          border-right: 1px solid #e0e0e0;
          border-bottom: 1px solid #e0e0e0;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: background 0.3s ease;
        }

        .cp-stat-item:hover {
          background: #fafafa;
        }

        .cp-stat-item h4 {
          font-size: 28px;
          font-weight: 700;
          color: #111;
          margin: 0 0 4px 0;
        }

        .cp-stat-item h4 span {
          color: #f51b24;
        }

        .cp-stat-item p {
          font-size: 11px;
          font-weight: 700;
          color: #999;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin: 0;
        }

        @media (max-width: 1100px) {
          .cp-flex-container {
            grid-template-columns: 1fr;
          }
          .cp-img-side {
            min-height: 400px;
            order: -1;
            margin-bottom: 40px;
          }
          .cp-content-side {
            border-left: 1px solid #e0e0e0;
          }
          .cp-text-wrap {
            padding: 40px;
          }
        }

        @media (max-width: 768px) {
          .cp-section {
            padding: 60px 20px;
          }
          .cp-heading {
            font-size: 32px;
          }
          .cp-stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="cp-inner">
        <div className="cp-flex-container">
          <div className="cp-img-side">
            <Image
              src={img.companysectionimg}
              alt="TagsBikez Showroom"
              fill
              priority
              sizes="(max-width: 1100px) 100vw, 50vw"
            />
          </div>

          <div className="cp-content-side">
            <div className="cp-text-wrap">
              <h2 className="cp-heading">
                The Ultimate Royal Enfield Experience in Thrissur.
              </h2>
              <p className="cp-desc">
                Tags Bikez was born from decades of entrepreneurial heritage and a shared belief that every motorcycle journey deserves a partner you can trust. From a single showroom in Thrissur to a multi-branch group spanning Central Kerala, we have grown alongside every rider we serve.              </p>
            </div>

            <div className="cp-stats-grid">
              <div className="cp-stat-item">
                <h4><span ref={showroomRef}>0</span><span>+</span></h4>
                <p>Showroom locations</p>
              </div>
              <div className="cp-stat-item">
                <h4><span ref={serviceRef}>0</span><span>+</span></h4>
                <p>Service centres</p>
              </div>
              <div className="cp-stat-item">
                <h4><span ref={legacyRef}>0</span><span>+</span></h4>
                <p>Years family business legacy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
