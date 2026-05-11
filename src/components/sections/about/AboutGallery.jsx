"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const galleryItems = [
  { id: 1, src: "https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg" },
  { id: 2, src: "https://images.pexels.com/photos/2393821/pexels-photo-2393821.jpeg" },
  { id: 3, src: "https://images.pexels.com/photos/1715193/pexels-photo-1715193.jpeg" },
  { id: 4, src: "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg" },
  { id: 5, src: "https://images.pexels.com/photos/2611690/pexels-photo-2611690.jpeg" },
  { id: 6, src: "https://images.pexels.com/photos/39693/motorcycle-racer-racing-race-speed-39693.jpeg" },
  { id: 7, src: "https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg" },
  { id: 8, src: "https://images.pexels.com/photos/4065906/pexels-photo-4065906.jpeg" },
  { id: 9, src: "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg" },
  { id: 10, src: "https://images.pexels.com/photos/2519374/pexels-photo-2519374.jpeg" },
  { id: 11, src: "https://images.pexels.com/photos/1058334/pexels-photo-1058334.jpeg" },
];


export default function AboutGallery() {
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemRefs.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              once: true,
            },
            delay: (i % 4) * 0.08,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="gallery-section">
      <style>{`
        .gallery-section {
          background: #fff;
          padding: 0px 40px 80px 40px;
        }

        /*  Header row: heading left, text right ── */
        .gallery-header {
          max-width: 1400px;
          margin: 0 auto 40px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 40px;
        }

        .gallery-heading {
          font-size:42px;
          font-weight: 400;
          color: #111;
          line-height: 1.05;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          margin: 0;
          flex-shrink: 0;
        }

        .gallery-heading span {
          color: #e63020;
        }

        .gallery-desc {
          max-width: 420px;
          text-align: left;
        }

        .gallery-desc p {
          font-size: 14px;
          color: #666;
          line-height: 1.7;
          margin: 0;
        }

        .gallery-desc p + p {
          margin-top: 6px;
        }

        /* ── Grid ── */
        .gallery-grid {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
        }

        .g-item {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          background: #f5f5f5;
          aspect-ratio: 4 / 3;
        }

        .g-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      filter 0.6s ease;
          filter: brightness(0.95);
        }

        .g-item:hover .g-img {
          transform: scale(1.06);
          filter: brightness(1);
        }

        @media (max-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .gallery-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .gallery-desc {
            text-align: left;
            max-width: 100%;
          }
        }

        @media (max-width: 600px) {
          .gallery-section { padding: 40px 16px; }
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 4px;
          }
        }
      `}</style>

      {/*  Header  */}
      <div className="gallery-header">
        <h2 className="gallery-heading">
          Our Gallery
        </h2>
        <div className="gallery-desc">
          <p>Every ride tells a story explore moments captured on the road, at rallies, and beyond.</p>
        </div>
      </div>

      {/*  Grid  */}
      <div className="gallery-grid">
        {galleryItems.map((item, i) => (
          <div
            key={item.id}
            className="g-item"
            ref={(el) => (itemRefs.current[i] = el)}
          >
            <img
              src={`${item.src}?auto=compress&cs=tinysrgb&w=800`}
              alt=""
              className="g-img"
            />
          </div>
        ))}
      </div>
    </section>
  );
}