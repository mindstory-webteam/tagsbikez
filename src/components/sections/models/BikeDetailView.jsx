"use client";
import React from 'react';
import Image from 'next/image';
import { Download, MessageSquare } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const BikeDetailView = ({ bike }) => {
  if (!bike) return null;

  const displayImages = bike.colorImages && bike.colorImages.length > 0
    ? bike.colorImages
    : [bike.image];

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
        }

        .bdv-swiper {
          width: 100%;
          height: 100%;
        }

        .bdv-img-slide {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding: 40px;
          position: relative;
          height: 100%;
        }

        .bdv-img {
          object-fit: contain !important;
          transition: transform 0.5s ease;
        }

        .bdv-swiper .swiper-button-next,
        .bdv-swiper .swiper-button-prev {
          color: #000 !important;
          width: 28px !important;
          height: 28px !important;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          border: 1px solid #eee;
        }

        .bdv-swiper .swiper-button-next:after,
        .bdv-swiper .swiper-button-prev:after {
          font-size: 10px !important;
          font-weight: 700;
        }

        .bdv-swiper .swiper-pagination-bullet-active {
          background: #f51b24 !important;
        }

        /*  CONTENT SIDE  */
        .bdv-content-side {
          width: 100%;
          display: flex;
          flex-direction: column;
          border: 1px solid #e0e0e0;
          background: #fff;
        }

        .bdv-text-wrap {
          padding: 60px;
          border-bottom: 1px solid #e0e0e0;
        }

        .bdv-title {
          font-size: 48px;
          font-weight: 400;
          color: #111;
          margin-bottom: 24px;
          text-transform: uppercase;
          line-height: 1.1;
        }

        .bdv-desc {
          font-size: 16px;
          color: #666;
          line-height: 1.8;
        }

        .bdv-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }

        .bdv-stat-item {
          padding: 30px 20px;
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
          font-size: 20px;
          font-weight: 700;
          color: #111;
        }

        .bdv-stat-label {
          font-size: 11px;
          font-weight: 700;
          color: #999;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        /* ── FOOTER / BUTTONS ── */
        .bdv-footer {
          padding: 40px 60px;
          background: #fafafa;
          display: flex;
          gap: 20px;
        }

        /* Animated button base */
        .bdv-anim-btn {
          flex: 1;
          height: 52px;
          color: #fff;
          padding: 0 28px;
          font-weight: 700;
          font-size: 12px;
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

        /* Icon stays above the fill sweep */
        .bdv-anim-btn-icon {
          z-index: 1;
          display: inline-flex;
          align-items: center;
          flex-shrink: 0;
        }

        /* Sliding text track */
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

        /* Hover: original slides out left, clone slides in from right */
        .bdv-anim-btn:hover .bdv-anim-btn-label {
          transform: translateX(-110%);
          opacity: 0;
        }

        .bdv-anim-btn:hover .bdv-anim-btn-clone {
          transform: translateX(0);
          opacity: 1;
        }

        /* Red fill sweeps up from bottom */
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

        /* Primary: dark bg */
        .bdv-anim-btn-primary {
          --btn-bg: #111;
          --btn-hover: #f51b24;
        }

        /* Secondary: outlined — colour flips on hover via the fill */
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
          <Swiper
            modules={[Navigation, Pagination, EffectFade, Autoplay]}
            effect="fade"
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            className="bdv-swiper"
          >
            {displayImages.map((imgSrc, index) => (
              <SwiperSlide key={index} className="bdv-img-slide">
                <Image
                  src={imgSrc}
                  alt={`${bike.name} color ${index + 1}`}
                  fill
                  className="bdv-img"
                  sizes="(max-width: 1100px) 100vw, 60vw"
                  priority={index === 0}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="bdv-content-side">
          <div className="bdv-text-wrap">
            <h1 className="bdv-title">{bike.name}</h1>
            <p className="bdv-desc">{bike.description}</p>
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
            {/* Enquire Now  */}
            <a
              href={`https://wa.me/917594960023?text=I'm%20interested%20in%20the%20${bike.name}`}
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

            {/* Brochure*/}
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