"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fetchGallery } from "@/lib/api";
import { img } from "@/assets/assest";

gsap.registerPlugin(ScrollTrigger);

const fallbackGalleryItems = [
  { id: 1, src: img.Himalayan?.src || img.Himalayan, alt: "Royal Enfield Himalayan 450 at Tags Bikez Thrissur showroom" },
  { id: 2, src: img.aboutchalakudyimg1?.src || img.aboutchalakudyimg1, alt: "Royal Enfield Classic 350 display at Tags Bikez Chalakudy branch" },
  { id: 3, src: img.scram1?.src || img.scram1, alt: "Royal Enfield Scram 440 at Tags Bikez Irinjalakuda showroom" },
  { id: 4, src: img.aboutkodakaraimg1?.src || img.aboutkodakaraimg1, alt: "Royal Enfield Hunter 350 at Tags Bikez Kodakara branch" },
  { id: 5, src: img.Himalayan2?.src || img.Himalayan2, alt: "Royal Enfield Himalayan 450 adventure expedition at Tags Bikez Kunnamkulam showroom" },
  { id: 6, src: img.aboutpatturaikkalimg1?.src || img.aboutpatturaikkalimg1, alt: "Royal Enfield Bullet 350 vintage style at Tags Bikez Patturaikkal showroom" },
  { id: 7, src: img.royalenfield1?.src || img.royalenfield1, alt: "Royal Enfield Continental GT 650 at Tags Bikez Thriprayar branch" },
  { id: 8, src: img.aboutvadakkencherryimg1?.src || img.aboutvadakkencherryimg1, alt: "Royal Enfield Interceptor 650 at Tags Bikez Vadakkencherry showroom" },
  { id: 9, src: img.royalenfieldfury?.src || img.royalenfieldfury, alt: "Royal Enfield Super Meteor 650 at Tags Bikez Kuriachira Thrissur showroom" },
  { id: 10, src: img.ride1?.src || img.ride1, alt: "Royal Enfield Guerrilla 450 ride convoy organized by Tags Bikez Chalakudy branch" },
  { id: 11, src: img.ride2?.src || img.ride2, alt: "Royal Enfield Shotgun 650 weekend community ride from Tags Bikez Thrissur" },
  { id: 12, src: img.ride3?.src || img.ride3, alt: "Royal Enfield Goan Classic 350 coastal ride with Tags Bikez Thriprayar riders" },
];

const galleryAltDescriptions = [
  "Royal Enfield Himalayan 450 adventure motorcycle at Tags Bikez Thrissur showroom",
  "Royal Enfield Classic 350 showroom display at Tags Bikez Chalakudy branch",
  "Royal Enfield Hunter 350 urban roadster at Tags Bikez Irinjalakuda showroom",
  "Royal Enfield Bullet 350 vintage roadster at Tags Bikez Kodakara branch",
  "Royal Enfield Continental GT 650 cafe racer at Tags Bikez Kunnamkulam showroom",
  "Royal Enfield Interceptor 650 twin cylinder at Tags Bikez Patturaikkal branch",
  "Royal Enfield Super Meteor 650 highway cruiser at Tags Bikez Thriprayar showroom",
  "Royal Enfield Guerrilla 450 roadster motorcycle at Tags Bikez Vadakkencherry branch",
  "Royal Enfield Shotgun 650 custom-inspired roadster at Tags Bikez Kuriachira Thrissur",
  "Royal Enfield Goan Classic 350 bobber motorcycle at Tags Bikez Chalakudy showroom",
  "Royal Enfield Scram 440 scrambler touring motorcycle at Tags Bikez Irinjalakuda branch",
  "Royal Enfield Meteor 350 highway cruiser at Tags Bikez Kodakara showroom",
  "Royal Enfield genuine motorcycle accessories and apparel at Tags Bikez Kunnamkulam branch",
  "Royal Enfield authorized service center inspection at Tags Bikez Patturaikkal",
  "Royal Enfield new motorcycle delivery celebration at Tags Bikez Thriprayar branch",
  "Royal Enfield test ride lineup at Tags Bikez Vadakkencherry showroom",
  "Royal Enfield certified technician inspecting motorcycle at Tags Bikez Thrissur",
  "Royal Enfield riders community weekend rally from Tags Bikez Chalakudy showroom",
  "Royal Enfield classic roadster parked at Tags Bikez Irinjalakuda showroom floor",
  "Royal Enfield adventure touring gear and luggage at Tags Bikez Kodakara branch",
  "Royal Enfield motorcycle key handover ceremony at Tags Bikez Kunnamkulam showroom",
  "Royal Enfield Himalayan 450 off-road ride experience at Tags Bikez Patturaikkal",
  "Royal Enfield showroom display of genuine parts and apparel at Tags Bikez Thriprayar",
  "Royal Enfield community ride event organized by Tags Bikez Vadakkencherry showroom"
];

function getGalleryAlt(item, index) {
  if (item?.caption && item.caption.trim()) return item.caption.trim();
  if (item?.title && item.title.trim()) return item.title.trim();
  if (item?.alt && item.alt.trim()) return item.alt.trim();

  const src = item?.src || item?.image_url || "";
  if (typeof src === "string") {
    const lower = src.toLowerCase();
    let model = "";
    if (lower.includes("himalayan")) model = "Royal Enfield Himalayan 450";
    else if (lower.includes("hunter")) model = "Royal Enfield Hunter 350";
    else if (lower.includes("classic")) model = "Royal Enfield Classic 350";
    else if (lower.includes("bullet")) model = "Royal Enfield Bullet 350";
    else if (lower.includes("continental")) model = "Royal Enfield Continental GT 650";
    else if (lower.includes("interceptor")) model = "Royal Enfield Interceptor 650";
    else if (lower.includes("meteor")) model = "Royal Enfield Super Meteor 650";
    else if (lower.includes("scram")) model = "Royal Enfield Scram 440";
    else if (lower.includes("guerrilla")) model = "Royal Enfield Guerrilla 450";

    let branch = "Thrissur";
    if (lower.includes("chalakudy")) branch = "Chalakudy";
    else if (lower.includes("irinjalakuda")) branch = "Irinjalakuda";
    else if (lower.includes("kodakara")) branch = "Kodakara";
    else if (lower.includes("kunnamkulam")) branch = "Kunnamkulam";
    else if (lower.includes("patturaikkal")) branch = "Patturaikkal";
    else if (lower.includes("thriprayar")) branch = "Thriprayar";
    else if (lower.includes("vadakkencherry")) branch = "Vadakkencherry";

    if (model) {
      return `${model} on display at Tags Bikez ${branch} showroom`;
    }

    const filename = src.split("/").pop()?.split(".")[0];
    if (filename && !/^\d+$/.test(filename) && filename.length > 3) {
      const cleanName = filename
        .replace(/[-_]+/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
      return `Royal Enfield ${cleanName} - Tags Bikez ${branch}`;
    }
  }

  return galleryAltDescriptions[index % galleryAltDescriptions.length];
}

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
        // Remove repeated images
        const seen = new Set();
        const unique = data.filter((item) => {
          const key = item.src || item.image_url || item.id;
          if (!key || seen.has(key)) return false;
          seen.add(key);
          return true;
        });
        setGalleryItems(unique.length > 0 ? unique : fallbackGalleryItems);
      } else {
        setGalleryItems(fallbackGalleryItems);
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
          aspect-ratio: 4 / 5;
        }

        .g-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 15%;
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
          currentItems.map((item, i) => {
            const photoIndex = (currentPage - 1) * itemsPerPage + i;
            const altText = getGalleryAlt(item, photoIndex);

            return (
              <div
                key={item.id || i}
                className="g-item"
                ref={(el) => (itemRefs.current[i] = el)}
              >
                <img
                  src={item.src && item.src.includes("pexels.com") ? `${item.src}?auto=compress&cs=tinysrgb&w=800` : (item.src || "")}
                  alt={altText}
                  className="g-img"
                  loading="lazy"
                />
              </div>
            );
          })
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