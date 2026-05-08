"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { bikeData } from '@/lib/data/bikes';

const categories = ["All", "Classic", "Cruiser", "Cafe Racer", "Adventure"];

function Card({ title, img, slug, category }) {
  return (
    <Link href={`/models/${slug}`} className="models-card">
      <div className="models-card-img-wrap">
        <Image
          src={img}
          alt={title}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          style={{ objectFit: "contain" }}
          className="models-card-img"
        />
        <div className="models-card-overlay" />
      </div>
      <div className="models-card-info">
        <p className="models-card-subtitle">{category}</p>
        <div className="models-card-bottom">
          <p className="models-card-title">{title}</p>
          <span className="models-card-arrow"><IoIosArrowForward /></span>
        </div>
      </div>
    </Link>
  );
}

export default function ModelsSection() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? bikeData
    : bikeData.filter((b) => b.category === active);

  return (
    <>
      <style>{`
        .models-section {
          background: #ffffff;
          padding: 80px 40px;
        }

        .models-inner {
          max-width: 1450px;
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
          font-weight: 400;
          margin: 0;
          text-transform: uppercase;
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
        }

        .models-filter-btn:last-child { border-right: none; }
        .models-filter-btn:hover { color: #111; background: #f5f5f5; }
        .models-filter-btn.active { background: #f51b24; color: #fff; }

        .models-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .models-card {
          border: 1px solid #e0e0e0;
          margin-right: -1px;
          margin-bottom: -1px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          transition: background 0.3s ease;
          box-sizing: border-box;
          position: relative;
          text-decoration: none;
        }

        .models-card:hover {
          background: #fafafa;
          z-index: 1;
        }

        .models-card-img-wrap {
          position: relative;
          width: 100%;
          height: 240px;
          overflow: hidden;
          padding: 20px;
        }

        .models-card-img {
          transition: transform 0.5s ease !important;
        }

        .models-card:hover .models-card-img { transform: scale(1.05); }

        .models-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.05) 0%, transparent 60%);
          z-index: 1;
        }

        .models-card-info {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
          border-top: 1px solid #f0f0f0;
        }

        .models-card-subtitle {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #f51b24;
          margin: 0;
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
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .models-card-arrow {
          font-size: 14px;
          color: #aaa;
          transition: color 0.3s ease, transform 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #e0e0e0;
          width: 28px;
          height: 28px;
          border-radius: 50%;
        }

        .models-card:hover .models-card-arrow {
          border-color: #f51b24;
          color: #f51b24;
        }

        @media (max-width: 1200px) {
          .models-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 900px) {
          .models-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 600px) {
          .models-section { padding: 48px 20px; }
          .models-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .models-filters {
            width: 100%;
            overflow-x: auto;
            scrollbar-width: none;
          }
          .models-grid { grid-template-columns: 1fr; }
          .models-card-img-wrap { height: 200px; }
        }
      `}</style>

      <section className="models-section">
        <div className="models-inner">
          <div className="models-header">
            <h2 className="models-heading">
              Explore Our<br />
              <span>Royal Enfield</span> Models
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
              <Card 
                key={b.id} 
                title={b.name}
                img={b.image}
                slug={b.slug}
                category={b.category}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}