"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fetchGallery } from "@/lib/api";

gsap.registerPlugin(ScrollTrigger);

const fallbackGalleryItems = [];

export default function Gallery() {
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function loadGallery() {
      const data = await fetchGallery();
      if (data && data.length > 0) {
        setGalleryItems(data);
      } else {
        setGalleryItems([]);
      }
      setLoading(false);
    }
    loadGallery();
  }, []);

  const itemsPerPage = 12;
  const totalPages = Math.ceil(galleryItems.length / itemsPerPage);
  const currentItems = galleryItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    if (currentItems.length === 0) return;
    itemRefs.current = itemRefs.current.slice(0, currentItems.length);

    const ctx = gsap.context(() => {
      itemRefs.current.forEach((el, i) => {
        if (!el) return;
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
  }, [galleryItems, currentPage]);

  return (
    <section ref={sectionRef} className="gallery-section">
      <style>{`
        .gallery-page {
          padding-top: 0px;
        }

        .gallery-section {
          background: #fff;
          padding: 80px 40px 80px 40px;
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
            line-height: 1.7;
            margin: 0;
            color: #666;
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
          .gallery-page {
            padding-top: 0px;
          }
          .gallery-section {
            padding: 60px 20px 60px 20px;
          }
          .gallery-heading {
            font-size: 28px;
          }
          .gallery-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
            margin-bottom: 24px;
          }
          .gallery-desc {
            text-align: left;
            max-width: 100%;
          }
        }

        @media (max-width: 600px) {
          .gallery-section {
            padding: 40px 16px 40px 16px;
          }
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 4px;
          }
        }

        /* Pagination Styles */
        .pagination {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-top: 60px;
        }
        .pagination button {
          padding: 8px 16px;
          border: 1px solid #eaeaea;
          background: transparent;
          cursor: pointer;
          font-family: var(--font-oswald), sans-serif;
          text-transform: uppercase;
          font-size: 14px;
          letter-spacing: 0.05em;
          transition: all 0.3s;
        }
        .pagination button:hover:not(:disabled) {
          background: #e8282b;
          color: #fff;
          border-color: #e8282b;
        }
        .pagination button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .pagination span {
          font-size: 14px;
          color: #555;
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
        {loading ? (
          <p style={{ gridColumn: "1 / -1", textAlign: "center", padding: "40px" }}>Loading gallery...</p>
        ) : currentItems.length > 0 ? (
          currentItems.map((item, i) => (
            <div
              key={item.id}
              className="g-item"
              ref={(el) => (itemRefs.current[i] = el)}
            >
              <img
                src={item.src && item.src.includes("pexels.com") ? `${item.src}?auto=compress&cs=tinysrgb&w=800` : (item.src || "")}
                alt=""
                className="g-img"
              />
            </div>
          ))
        ) : (
          <p style={{ gridColumn: "1 / -1", textAlign: "center", padding: "40px", fontSize: "18px", color: "#666" }}>
            No gallery available
          </p>
        )}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button 
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))} 
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button 
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} 
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}