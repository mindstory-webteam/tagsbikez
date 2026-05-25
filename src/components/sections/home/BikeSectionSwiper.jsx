"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { img } from "@/assets/assest";
import { bikeData } from "@/lib/data/bikes";

const categories = ["All", "Classic", "Roadster", "Cruiser", "Cafe Racer", "Adventure"];

const CARD_WIDTH = 300;

export default function BikeSectionSwiper() {
  const [activeTab, setActiveTab] = useState("All");
  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const savedScroll = useRef(0);
  const animFrameRef = useRef(null);

  const items = activeTab === "All" ? bikeData : bikeData.filter(b => b.category === activeTab);
  const loopedItems = [...items, ...items, ...items, ...items, ...items, ...items];
  const singleSetWidth = items.length * CARD_WIDTH;

  const startAuto = () => {
    stopAuto();
    let last = null;
    const step = (ts) => {
      if (last !== null) {
        const el = trackRef.current;
        if (el) {
          el.scrollLeft += 1.0;
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
    if (el) el.scrollLeft = singleSetWidth * 2;
    startAuto();
    return () => stopAuto();
  }, [activeTab]);

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
    if (el.scrollLeft >= singleSetWidth * 4) el.scrollLeft -= singleSetWidth * 2;
    if (el.scrollLeft <= singleSetWidth) el.scrollLeft += singleSetWidth * 2;
  };

  const onMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    startAuto();
  };

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
          padding: 40px 0 56px;
          box-sizing: border-box;
          overflow: hidden;
        }

        .fv-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 20px;
          padding: 0 50px;
          margin-bottom: 28px;
        }

        .fv-heading {
          font-size: 42px;
          font-weight: 400;
          text-transform: uppercase;
          color: #111;
          letter-spacing: 0.04em;
          margin: 0;
          padding: 0;
        }

        .fv-top-row {
          display: flex;
          align-items: center;
          padding: 0;
          margin: 0;
          max-width: 100%;
        }

        /* ── TABS ── */
        .fv-tabs {
          display: flex;
          border: 1px solid #ddd;
          overflow-x: auto;
          width: fit-content;
          max-width: 100%;
          flex-wrap: nowrap;
          scrollbar-width: none;
          -ms-overflow-style: none;
          -webkit-overflow-scrolling: touch;
        }
        .fv-tabs::-webkit-scrollbar {
          display: none;
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
          flex-shrink: 0;
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

        /* ── INFO ROW ── */
        .fv-card-info-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 52px;
        }

        .fv-card-info {
          flex: 1;
          padding-right: 10px;
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

        .fv-card-price-wrap {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: center;
          padding-left: 10px;
        }

        .fv-card-price-label {
          font-size: 10px;
          color: #888;
          margin: 0 0 2px 0;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .fv-card-price-value {
          font-family: var(--font-oswald), sans-serif;
          font-size: 15px;
          color: #111;
          margin: 0;
          font-weight: 600;
          white-space: nowrap;
        }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          .fv-root { padding: 28px 0 36px; }
          .fv-header { 
            flex-direction: column; 
            align-items: flex-start; 
            gap: 16px; 
            padding: 0 20px; 
            margin-bottom: 20px; 
          }
          .fv-heading { font-size: 28px; }
          .fv-top-row { width: 100%; }
          .fv-tabs { width: 100%; }
          .fv-tab { 
            padding: 10px 18px; 
            font-size: 11px; 
          }
        }
      `}</style>

      {/* Header with Title and Tabs */}
      <div className="fv-header">
        <h2 className="fv-heading">Our Models</h2>

        {/* Tabs */}
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
          {loopedItems.map((bike, i) => {
            const price = bike.colors && bike.colors.length > 0 ? bike.colors[0].price : null;
            return (
              <div className="fv-card" key={`${bike.id}-${i}`}>

                <div className="fv-card-img-wrap">
                  <Image
                    src={bike.image}
                    alt={bike.name}
                    className="fv-card-img"
                    width={260}
                    height={160}
                    style={{ objectFit: "contain" }}
                    draggable={false}
                  />
                </div>

                <div className="fv-card-img-border" />

                <div className="fv-card-info-row">
                  <div className="fv-card-info">
                    <p className="fv-card-name">{bike.name}</p>
                    <p className="fv-card-model">{bike.category}</p>
                  </div>

                  {price ? (
                    <div className="fv-card-price-wrap">
                      <p className="fv-card-price-label">Starting from</p>
                      <p className="fv-card-price-value">{price}</p>
                    </div>
                  ) : bike.comingSoon ? (
                    <div className="fv-card-price-wrap">
                      <p className="fv-card-price-value" style={{ fontSize: "14px", marginTop: "12px", color: "#e63020" }}>Coming Soon</p>
                    </div>
                  ) : null}
                </div>

              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}