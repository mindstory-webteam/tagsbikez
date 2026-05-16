"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Download, MessageSquare } from 'lucide-react';

const BikeDetailView = ({ bike }) => {
  const [selectedColor, setSelectedColor] = useState(
    bike.colors && bike.colors.length > 0 ? bike.colors[0] : { name: 'Standard', image: bike.image }
  );

  if (!bike) return null;

  return (
    <div className="bdv-root">
      <style>{`
        .bdv-root {
          padding: 30px 60px 30px 60px;
          background: #fff;
        }

        .bdv-inner {
          max-width: 1425px;
          margin: 0 auto;
          padding: 80px 0 80px 40px;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          align-items: stretch;
        }

        .bdv-img-side {
          position: relative;
          background: #f8f8f8;
          border: 1px solid #eee;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding: 40px;
          height: 500px;
        }

        .bdv-img {
          object-fit: contain !important;
          transition: all 0.5s ease;
        }

        /*  CONTENT SIDE  */
        .bdv-content-side {
          width: 100%;
          display: flex;
          flex-direction: column;
          border: 1px solid #e0e0e0;
          background: #fff;
          height: 500px;
          overflow: hidden;
        }

        .bdv-text-wrap {
          padding: 30px 60px;
          border-bottom: 1px solid #e0e0e0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .bdv-title {
          font-size: 32px;
          font-weight: 400;
          color: #111;
          margin-bottom: 16px;
          text-transform: uppercase;
          line-height: 1.1;
        }

        .bdv-desc {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        /* COLORS */
        .bdv-colors-wrap {
          margin-top: 20px;
        }

        .bdv-colors-label {
          font-size: 11px;
          font-weight: 700;
          color: #999;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 15px;
        }

        .bdv-colors-grid {
          display: flex;
          gap: 12px;
        }

        .bdv-color-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 2px solid #eee;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 2px;
          background-clip: content-box;
          position: relative;
        }

        .bdv-color-btn:hover {
          transform: scale(1.1);
        }

        .bdv-color-btn.active {
          border-color: #f51b24;
          transform: scale(1.1);
        }

        .bdv-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }

        .bdv-stat-item {
          padding: 20px 10px;
          border-bottom: 1px solid #e0e0e0;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .bdv-stat-item:not(:last-child) {
          border-right: 1px solid #e0e0e0;
        }

        .bdv-stat-val {
          font-size: 18px;
          font-weight: 700;
          color: #111;
        }

        .bdv-stat-label {
          font-size: 10px;
          font-weight: 700;
          color: #999;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        /* ── FOOTER / BUTTONS ── */
        .bdv-footer {
          padding: 30px 60px;
          background: #fafafa;
          display: flex;
          gap: 20px;
        }

        /* Animated button base */
        .bdv-anim-btn {
          flex: 1;
          height: 48px;
          color: #fff;
          padding: 0 20px;
          font-weight: 700;
          font-size: 11px;
          letter-spacing: 0.1em;
          background: var(--btn-bg);
          cursor: pointer;
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          white-space: nowrap;
          outline: none;
          border: none;
          box-sizing: border-box;
          text-transform: uppercase;
          overflow: hidden;
          text-decoration: none;
          vertical-align: middle;
        }

        .bdv-anim-btn:not(:disabled):active {
          transform: translateY(2px);
        }

        .bdv-anim-btn-icon {
          z-index: 1;
          display: inline-flex;
          align-items: center;
          flex-shrink: 0;
        }

        .bdv-anim-btn-track {
          position: relative;
          display: flex;
          flex-direction: column;
          height: 1em;
          overflow: hidden;
          line-height: 1;
          z-index: 1;
        }

        .bdv-anim-btn-label {
          display: block;
          transition: transform 0.38s cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 0.38s ease;
          will-change: transform;
        }

        .bdv-anim-btn-clone {
          position: absolute;
          top: 0;
          left: 0;
          transform: translateX(110%);
          opacity: 0;
          transition: transform 0.38s cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 0.38s ease;
          will-change: transform;
          white-space: nowrap;
        }

        .bdv-anim-btn:hover .bdv-anim-btn-label {
          transform: translateX(-110%);
          opacity: 0;
        }

        .bdv-anim-btn:hover .bdv-anim-btn-clone {
          transform: translateX(0);
          opacity: 1;
        }

        .bdv-anim-btn::after {
          position: absolute;
          content: "";
          width: 100%;
          height: 0;
          bottom: 0;
          left: 0;
          z-index: 0;
          background: var(--btn-hover);
          transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .bdv-anim-btn:hover::after {
          height: 100%;
        }

        .bdv-anim-btn-primary {
          --btn-bg: #111;
          --btn-hover: #f51b24;
        }

        .bdv-anim-btn-secondary {
          --btn-bg: transparent;
          --btn-hover: #111;
          color: #111;
          border: 1px solid #111;
        }

        .bdv-anim-btn-secondary:hover {
          color: #fff;
        }

        /* ── STORIES ── */
        .bdv-stories {
          padding: 80px 0;
          background: #fff;
        }

        .bdv-stories-inner {
          max-width: 1425px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .bdv-story-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          margin-bottom: 100px;
        }

        .bdv-story-row:last-child {
          margin-bottom: 0;
        }

        .bdv-story-img-wrap {
          position: relative;
          height: 450px;
          overflow: hidden;
          background: #fcfcfc;
        }

        .bdv-story-img {
          object-fit: cover;
        }

        .bdv-story-content h3 {
          font-size: 32px;
          font-weight: 400;
          color: #111;
          margin-bottom: 24px;
          text-transform: uppercase;
        }

        .bdv-story-content p {
          font-size: 16px;
          line-height: 1.8;
          color: #666;
        }

        @media (max-width: 1100px) {
          .bdv-inner {
            grid-template-columns: 1fr;
            padding-left: 0;
          }
          .bdv-img-side {
            min-height: 400px;
          }
          .bdv-story-row {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .bdv-story-img-wrap {
            height: 300px;
          }
        }

        @media (max-width: 600px) {
          .bdv-title { font-size: 32px; }
          .bdv-footer { flex-direction: column; }
          .bdv-text-wrap { padding: 40px 30px; }
        }
      `}</style>

      {/* Top Story Section */}
      {bike.stories && bike.stories.length > 0 && (
        <div className="bdv-stories" style={{ paddingBottom: '40px' }}>
          <div className="bdv-stories-inner">
            {bike.stories.slice(0, 1).map((story, index) => (
              <div className="bdv-story-row" key={index}>
                <div className="bdv-story-img-wrap">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="bdv-story-img"
                    sizes="(max-width: 1100px) 100vw, 50vw"
                  />
                </div>
                <div className="bdv-story-content">
                  <h3>{story.title}</h3>
                  <p>{story.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Details Section */}
      <div className="bdv-inner">
        <div className="bdv-img-side">
          <Image
            src={selectedColor.image}
            alt={bike.name}
            fill
            className="bdv-img"
            sizes="(max-width: 1100px) 100vw, 60vw"
            priority
            key={selectedColor.name}
          />
        </div>

        <div className="bdv-content-side">
          <div className="bdv-text-wrap">
            <h1 className="bdv-title">{bike.name}</h1>
            <p className="bdv-desc">{bike.description}</p>

            <div className="bdv-colors-wrap">
              <span className="bdv-colors-label">Color: {selectedColor.name}</span>
              <div className="bdv-colors-grid">
                {bike.colors && bike.colors.map((c, i) => (
                  <button
                    key={i}
                    className={`bdv-color-btn ${selectedColor.name === c.name ? 'active' : ''}`}
                    style={{ backgroundColor: c.hex }}
                    onClick={() => setSelectedColor(c)}
                    aria-label={c.name}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="bdv-stats-grid">
            {bike.stats.map((s, i) => (
              <div className="bdv-stat-item" key={i}>
                <span className="bdv-stat-val">{s.val}</span>
                <span className="bdv-stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="bdv-footer">
            <a
              href={`https://wa.me/917594960023?text=I'm%20interested%20in%20the%20${bike.name}%20in%20${selectedColor.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bdv-anim-btn bdv-anim-btn-primary"
            >
              <span className="bdv-anim-btn-icon"><MessageSquare size={18} /></span>
              <span className="bdv-anim-btn-track">
                <span className="bdv-anim-btn-label">Enquire Now</span>
                <span className="bdv-anim-btn-clone">Enquire Now</span>
              </span>
            </a>

            <a
              href={bike.brochure}
              download
              className="bdv-anim-btn bdv-anim-btn-secondary"
            >
              <span className="bdv-anim-btn-icon"><Download size={18} /></span>
              <span className="bdv-anim-btn-track">
                <span className="bdv-anim-btn-label">Brochure</span>
                <span className="bdv-anim-btn-clone">Brochure</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Stories Section */}
      {bike.stories && bike.stories.length > 1 && (
        <div className="bdv-stories" style={{ paddingTop: '40px', paddingBottom: '100px' }}>
          <div className="bdv-stories-inner">
            {bike.stories.slice(1).map((story, index) => (
              <div
                className="bdv-story-row"
                key={index}
                style={{ marginBottom: index !== bike.stories.slice(1).length - 1 ? '80px' : '0' }}
              >
                <div className="bdv-story-img-wrap">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="bdv-story-img"
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                </div>
                <div className="bdv-story-content">
                  <h3>{story.title}</h3>
                  <p>{story.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BikeDetailView;