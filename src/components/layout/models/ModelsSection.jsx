"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { img } from '@/assets/assest';

const bikes = [
  {
    id: 1,
    title: "Hunter 350",
    img: img.hunter350,
    url: "#",
    category: "Classic",
  },
  {
    id: 2,
    title: "Classic 350",
    img: img.classic350,
    url: "#",
    category: "Classic",
  },
  {
    id: 3,
    title: "Bullet 350",
    img: img.bullet350,
    url: "#",
    category: "Classic",
  },
  {
    id: 4,
    title: "Meteor 350",
    img: img.continentalgt650,
    url: "#",
    category: "Cruiser",
  },
  {
    id: 5,
    title: "Himalayan",
    img: img.interceptor,
    url: "#",
    category: "Adventure",
  },
  {
    id: 6,
    title: "Scram 411",
    img: img.scram440,
    url: "#",
    category: "Adventure",
  },
  {
    id: 7,
    title: "Interceptor 650",
    img: img.shotgun650,
    url: "#",
    category: "Cafe Racer",
  },
  {
    id: 8,
    title: "Continental GT 650",
    img: img.interceptor,
    url: "#",
    category: "Cafe Racer",
  },
];

const categories = ["All", "Classic", "Cruiser", "Cafe Racer", "Adventure"];

function Card({ title, img, url }) {
  return (
    <div className="models-card" onClick={() => window.open(url, "_blank")}>
      <div className="models-card-img-wrap">
        <Image
          src={img}
          alt={title}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          style={{ objectFit: "cover" }}
          className="models-card-img"
        />
        <div className="models-card-overlay" />
      </div>
      <div className="models-card-info">
        <div className="models-card-bottom">
          <p className="models-card-title">{title}</p>
          <span className="models-card-arrow"><IoIosArrowForward /></span>
        </div>
      </div>
    </div>
  );
}

export default function ModelsSection() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? bikes
    : bikes.filter((b) => b.category === active);

  return (
    <>
      <style>{`
        .models-section {
          background: #ffffff;
          padding: 80px 40px;
        }

        .models-inner {
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
        }

        .models-header {
          margin-bottom: 56px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }

        .models-heading {
          font-size: 42px;
          line-height: 1.15;
          color: #000000;
          font-weight: 700;
          margin: 0;
          font-family: 'DM Sans', sans-serif;
        }

        .models-heading span { color: #f51b24; }

        .models-filters {
          display: flex;
          align-items: center;
          gap: 0;
          border: 1px solid #e0e0e0;
          flex-shrink: 0;
          align-self: flex-end;
        }

        .models-filter-btn {
          padding: 10px 18px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          background: transparent;
          color: #999;
          border: none;
          border-right: 1px solid #e0e0e0;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
          white-space: nowrap;
          font-family: 'DM Sans', sans-serif;
        }

        .models-filter-btn:last-child { border-right: none; }
        .models-filter-btn:hover { color: #111; background: #f5f5f5; }
        .models-filter-btn.active { background: #f51b24; color: #fff; }

        /* ── Grid: NO border on container — borders live on cards only ── */
        .models-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          /* no border-top / border-left here */
        }

        /* Each card carries its own top + left + right + bottom border.
           Overlapping borders collapse visually into single lines. */
        .models-card {
          border: 1px solid #e0e0e0;
          margin-right: -1px;  /* collapse right with neighbour's left */
          margin-bottom: -1px; /* collapse bottom with next row's top  */
          cursor: pointer;
          display: flex;
          flex-direction: column;
          transition: background 0.3s ease;
          box-sizing: border-box;
          position: relative; /* needed for z-index on hover */
        }

        .models-card:hover {
          background: #fafafa;
          z-index: 1; /* bring hovered card on top so its border shows fully */
        }

        .models-card-img-wrap {
          position: relative;
          width: 100%;
          height: 220px;
          overflow: hidden;
        }

        .models-card-img {
          transition: transform 0.5s ease !important;
        }

        .models-card:hover .models-card-img { transform: scale(1.05); }

        .models-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 60%);
          z-index: 1;
        }

        .models-card-info {
          padding: 20px 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
        }

        .models-card-subtitle {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #f51b24;
          margin: 0;
          font-family: 'DM Sans', sans-serif;
        }

        .models-card-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .models-card-title {
          font-size: 16px;
          font-weight: 700;
          color: #000000;
          margin: 0;
          font-family: 'DM Sans', sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .models-card-arrow {
          font-size: 18px;
          color: #aaa;
          transition: color 0.3s ease, transform 0.3s ease;
          display: inline-block;
          border: 1px solid #b4b1b1ff;
          padding: 5px;
          border-radius: 50%;
        }

        @media (max-width: 1024px) {
          .models-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .models-section { padding: 48px 16px; }
          .models-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
            margin-bottom: 28px;
          }
          .models-filters {
            width: 100%;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
          .models-filters::-webkit-scrollbar { display: none; }
          .models-filter-btn {
            padding: 9px 14px;
            font-size: 10px;
            flex-shrink: 0;
          }
          .models-grid { grid-template-columns: repeat(2, 1fr); }
          .models-card-img-wrap { height: 150px; }
          .models-card-info { padding: 12px 14px; }
          .models-card-title { font-size: 12px; }
          .models-card-subtitle { font-size: 9px; }
        }

        @media (max-width: 480px) {
          .models-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      <section className="models-section">
        <div className="models-inner">

          <div className="models-header">
            <h2 className="models-heading">
              EXPLORE OUR<br />
              <span>ROYAL ENFIELD</span> MODELS
            </h2>
            <div className="models-filters">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`models-filter-btn ${active === cat ? "active" : ""}`}
                  onClick={() => setActive(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="models-grid">
            {filtered.map((b) => (
              <Card key={b.id} {...b} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}