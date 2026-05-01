"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { img } from "@/assets/assest";

const categories = ["All", "Classic", "Cruiser", "Cafe Racer", "Adventure"];

const bikes = {
  All: [
    { id: 1, name: "Classic 350", model: "Chrome Series", price: "₹1,93,500", year: "2023", heroImg: img.bulletimg },
    { id: 2, name: "Meteor 350", model: "Fireball", price: "₹2,21,500", year: "2023", heroImg: img.bulletimg },
    { id: 3, name: "Interceptor 650", model: "Mark 2", price: "₹3,03,500", year: "2023", heroImg: img.bulletimg },
    { id: 4, name: "Continental GT 650", model: "Cafe Racer", price: "₹3,13,500", year: "2023", heroImg: img.bulletimg },
    { id: 5, name: "Hunter 350", model: "Factory Series", price: "₹1,49,500", year: "2023", heroImg: img.bulletimg },
    { id: 6, name: "Himalayan 450", model: "Sleet Edition", price: "₹2,85,000", year: "2024", heroImg: img.bulletimg },
  ],
  Classic: [
    { id: 1, name: "Classic 350", model: "Chrome Series", price: "₹1,93,500", year: "2023", heroImg: img.bulletimg },
    { id: 2, name: "Classic 350", model: "Signals Edition", price: "₹2,05,000", year: "2023", heroImg: img.bulletimg },
    { id: 3, name: "Classic 350", model: "Dark Series", price: "₹1,98,000", year: "2023", heroImg: img.bulletimg },
  ],
  Cruiser: [
    { id: 1, name: "Meteor 350", model: "Fireball", price: "₹2,21,500", year: "2023", heroImg: img.bulletimg },
    { id: 2, name: "Meteor 350", model: "Stellar", price: "₹2,35,000", year: "2023", heroImg: img.bulletimg },
    { id: 3, name: "Super Meteor 650", model: "Celestial", price: "₹3,49,000", year: "2024", heroImg: img.bulletimg },
  ],
  "Cafe Racer": [
    { id: 1, name: "Continental GT 650", model: "Cafe Racer", price: "₹3,13,500", year: "2023", heroImg: img.bulletimg },
    { id: 2, name: "Interceptor 650", model: "Mark 2", price: "₹3,03,500", year: "2023", heroImg: img.bulletimg },
    { id: 3, name: "Continental GT 650", model: "Rocker", price: "₹3,20,000", year: "2024", heroImg: img.bulletimg },
  ],
  Adventure: [
    { id: 1, name: "Himalayan 450", model: "Sleet Edition", price: "₹2,85,000", year: "2024", heroImg: img.bulletimg },
    { id: 2, name: "Himalayan 450", model: "Granite", price: "₹2,92,000", year: "2024", heroImg: img.bulletimg },
    { id: 3, name: "Scram 411", model: "Graphite", price: "₹2,19,000", year: "2023", heroImg: img.bulletimg },
  ],
};

const CARD_WIDTH = 300;

export default function BikeSectionSwiper2() {
  const [activeTab, setActiveTab] = useState("All");
  const trackRef = useRef(null);
  const autoRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const savedScroll = useRef(0);
  const animFrameRef = useRef(null);

  const items = bikes[activeTab] || [];
  // Repeat enough times so scroll never runs out — 6x for safety
  const loopedItems = [...items, ...items, ...items, ...items, ...items, ...items];
  const singleSetWidth = items.length * CARD_WIDTH;

  // ── Auto scroll via requestAnimationFrame (smoother than setInterval) ──
  const startAuto = () => {
    stopAuto();
    let last = null;
    const step = (ts) => {
      if (last !== null) {
        const el = trackRef.current;
        if (el) {
          el.scrollLeft += 1.0;
          // Reset to start of second set to loop seamlessly
          if (el.scrollLeft >= singleSetWidth * 3) {
            el.scrollLeft -= singleSetWidth * 2;
          }
        }
      }
      last = ts;
      animFrameRef.current = requestAnimationFrame(step);
    };
    animFrameRef.current = requestAnimationFrame(step);
  };

  const stopAuto = () => {
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (el) {
      // Start at second set so we can loop both directions
      el.scrollLeft = singleSetWidth * 2;
    }
    startAuto();
    return () => stopAuto();
  }, [activeTab]);

  // ── Drag scroll ──
  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - trackRef.current.offsetLeft;
    savedScroll.current = trackRef.current.scrollLeft;
    stopAuto();
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = x - startX.current;
    const el = trackRef.current;
    el.scrollLeft = savedScroll.current - walk;

    // Loop check while dragging
    if (el.scrollLeft >= singleSetWidth * 4) el.scrollLeft -= singleSetWidth * 2;
    if (el.scrollLeft <= singleSetWidth) el.scrollLeft += singleSetWidth * 2;
  };

  const onMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    startAuto();
  };

  // ── Touch ──
  const onTouchStart = () => stopAuto();
  const onTouchMove = () => {
    const el = trackRef.current;
    if (!el) return;
    if (el.scrollLeft >= singleSetWidth * 4) el.scrollLeft -= singleSetWidth * 2;
    if (el.scrollLeft <= singleSetWidth) el.scrollLeft += singleSetWidth * 2;
  };
  const onTouchEnd = () => startAuto();

  const handleTabChange = (tab) => {
    if (tab === activeTab) return;
    stopAuto();
    setActiveTab(tab);
  };

  return (
    <section className="fv-root">
      <style>{`
        .fv-root {
          background: #fff;
          width: 100%;
          padding: 48px 0 56px;
          box-sizing: border-box;
          font-family: sans-serif;
          overflow: hidden;
        }

        .fv-heading {
          font-size: 22px;
          font-weight: 700;
          text-transform: uppercase;
          color: #111;
          letter-spacing: 0.04em;
          margin: 0 0 18px 0;
          padding: 0 40px;
        }

        .fv-top-row {
          display: flex;
          align-items: center;
          padding: 0 40px;
          margin-bottom: 28px;
        }

        /* ── TABS ── */
        .fv-tabs {
          display: flex;
          border: 1px solid #ddd;
          overflow: hidden;
          width: fit-content;
        }

        .fv-tab {
          padding: 10px 28px;
          font-size: 13px;
          font-weight: 500;
          text-align: center;
          cursor: pointer;
          border: none;
          background: #fff;
          color: #555;
          border-right: 1px solid #ddd;
          transition: background 0.2s, color 0.2s;
          white-space: nowrap;
        }

        .fv-tab:last-child { border-right: none; }
        .fv-tab.active { background: #111; color: #fff; font-weight: 600; }
        .fv-tab:not(.active):hover { background: #f5f5f5; color: #111; }

        /* ── TOP BORDER for card area ── */
        .fv-track-border-top {
          width: 100%;
          height: 1px;
          background: #e0e0e0;
        }

        /* ── SCROLLING TRACK ── */
        .fv-track-outer {
          width: 100%;
          overflow: hidden;
          cursor: grab;
          border-left: 1px solid #e0e0e0;
          box-sizing: border-box;
        }

        .fv-track-outer:active { cursor: grabbing; }

        .fv-track {
          display: flex;
          overflow-x: scroll;
          scroll-behavior: auto;
          -webkit-overflow-scrolling: touch;
          user-select: none;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .fv-track::-webkit-scrollbar { display: none; }

        /* ── CARD ── */
        .fv-card {
          flex: 0 0 ${CARD_WIDTH}px;
          width: ${CARD_WIDTH}px;
          border-right: 1px solid #e0e0e0;
          border-bottom: 1px solid #e0e0e0;
          padding: 24px 24px 18px;
          display: flex;
          flex-direction: column;
          background: #fff;
          min-height: 270px;
          box-sizing: border-box;
          transition: background 0.18s;
          flex-shrink: 0;
        }

        .fv-card:hover { background: #fafafa; }
        .fv-card:hover .fv-card-img { transform: scale(1.04); }

        /* ── IMAGE ── */
        .fv-card-img-wrap {
          width: 100%;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          margin-bottom: 16px;
        }

        .fv-card-img {
          width: 100%;
          max-height: 160px;
          object-fit: contain;
          display: block;
          transition: transform 0.35s ease;
          pointer-events: none;
        }

        /* ── BOTTOM IMAGE BORDER ── */
        .fv-card-img-border {
          width: 100%;
          height: 1px;
          background: #e0e0e0;
          margin-bottom: 12px;
        }

        /* ── INFO ROW: 72% info | divider | 28% icons ── */
        .fv-card-info-row {
          display: flex;
          align-items: stretch;
          min-height: 52px;
        }

        .fv-card-info {
          flex: 0 0 72%;
          padding-right: 10px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .fv-card-name {
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          color: #111;
          margin: 0 0 2px 0;
          letter-spacing: 0.04em;
          line-height: 1.3;
        }

        .fv-card-model {
          font-size: 11.5px;
          color: #e03030;
          margin: 0 0 2px 0;
          font-weight: 400;
        }

        .fv-card-price {
          font-size: 12.5px;
          color: #444;
          margin: 0;
          font-weight: 500;
        }

        .fv-card-vdivider {
          width: 1px;
          background: #e0e0e0;
          flex-shrink: 0;
          align-self: stretch;
        }

        .fv-card-actions {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding-left: 10px;
        }

        .fv-icon-btn {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: 1px solid #e0e0e0;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          padding: 0;
          transition: border-color 0.15s, background 0.15s;
          flex-shrink: 0;
        }

        .fv-icon-btn:hover { border-color: #111; background: #111; }
        .fv-icon-btn:hover svg path { stroke: #fff; }
        .fv-icon-btn svg path { stroke: #666; transition: stroke 0.15s; }

        @media (max-width: 768px) {
          .fv-root { padding: 28px 0 36px; }
          .fv-heading { padding: 0 20px; font-size: 18px; }
          .fv-top-row { padding: 0 20px; margin-bottom: 20px; }
          .fv-tab { padding: 9px 16px; font-size: 12px; }
        }
      `}</style>

      {/* Heading */}
      <h2 className="fv-heading">Our Models</h2>

      {/* Tabs — with bottom gap before cards */}
      <div className="fv-top-row">
        <div className="fv-tabs">
          {categories.map((tab) => (
            <button
              key={tab}
              className={`fv-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Top border of card area */}
      <div className="fv-track-border-top" />

      {/* Infinite scroll track */}
      <div className="fv-track-outer">
        <div
          className="fv-track"
          ref={trackRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {loopedItems.map((bike, i) => (
            <div className="fv-card" key={`${bike.id}-${i}`}>

              {/* Image */}
              <div className="fv-card-img-wrap">
                <Image
                  src={bike.heroImg}
                  alt={bike.name}
                  className="fv-card-img"
                  width={260}
                  height={160}
                  style={{ objectFit: "contain" }}
                  draggable={false}
                />
              </div>

              {/* Bottom border under image */}
              <div className="fv-card-img-border" />

              {/* Info + divider + icons */}
              <div className="fv-card-info-row">
                <div className="fv-card-info">
                  <p className="fv-card-name">{bike.name}</p>
                  <p className="fv-card-model">{bike.model}</p>
                  <p className="fv-card-price">{bike.price}</p>
                </div>

                {/* <div className="fv-card-vdivider" /> */}

                <div className="fv-card-actions">
                  {/* Mail */}
                  <button className="fv-icon-btn" aria-label="Enquire">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22 6l-10 7L2 6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {/* Call */}
                  <button className="fv-icon-btn" aria-label="Call">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.04 2.18 2 2 0 012.03 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}