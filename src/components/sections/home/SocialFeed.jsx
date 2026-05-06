"use client";
import React, { useEffect } from "react";
import Script from "next/script";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Instagram = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const reels = [
  "https://www.instagram.com/reel/DXtw1XeT9vS/",
  "https://www.instagram.com/reel/DXEnETFhjl9/",
  "https://www.instagram.com/reel/DW86ZWKgYGO/",
  "https://www.instagram.com/reel/DQEkHByEyWq/",
  "https://www.instagram.com/reel/DQWklAik04g/",
  "https://www.instagram.com/reel/C4GDnzwhD_s/",
];

const SocialFeed = () => {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <section className="sf-root">
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.instgrm) {
            window.instgrm.Embeds.process();
          }
        }}
      />

      <style>{`
        .sf-root {
          background: #fff;
          width: 100%;
          padding: 80px 0;
          box-sizing: border-box;
          border-bottom: 1px solid #e0e0e0;
          overflow: hidden;
        }

        .sf-container {
          max-width: 1450px;
          margin: 0 auto;
          padding: 0 10px;
          box-sizing: border-box;
        }

        .sf-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 40px;
          border-left: 1px solid #e0e0e0;
          border-right: 1px solid #e0e0e0;
          border-top: 1px solid #e0e0e0;
          border-bottom: 1px solid #e0e0e0;
          padding: 30px 40px;
        }

        .sf-title-wrap {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .sf-eyebrow {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #e02020;
          margin: 0;
        }

        .sf-heading {
          font-size: 42px;
          font-weight: 700;
          color: #111;
          margin: 0;
          line-height: 1.1;
        }

        .sf-insta-link {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #111;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          transition: color 0.2s;
          border: 1.5px solid #e0e0e0;
          padding: 12px 20px;
          border-radius: 4px;
        }

        .sf-insta-link:hover {
          background: #fafafa;
          border-color: #111;
        }

        /* ── SWIPER AREA ── */
        .sf-swiper-wrap {
          padding: 40px 0px;
          background: #fcfcfc;
        }

        .sf-card-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          padding: 0 10px;
        }

        /* Style for the Instagram embed to fit nicely */
        .sf-card-wrapper blockquote {
          margin: 0 !important;
          padding: 0 !important;
          border-radius: 8px !important;
          overflow: hidden;
          width: 100% !important;
          max-width: 320px !important;
          min-width: unset !important;
        }

        .sf-swiper-wrap .swiper-button-next,
        .sf-swiper-wrap .swiper-button-prev {
          color: #111;
        }

        @media (max-width: 768px) {
          .sf-container { padding: 0 20px; }
          .sf-header { padding: 20px; flex-direction: column; align-items: flex-start; gap: 20px; }
        }
      `}</style>

      <div className="sf-container">
        {/* Header with grid borders */}
        <div className="sf-header">
          <div className="sf-title-wrap">
            <p className="sf-eyebrow">Connect With Us</p>
            <h2 className="sf-heading">Follow The Journey</h2>
          </div>
          <a href="https://www.instagram.com/tagsbikez/" target="_blank" className="sf-insta-link">
            <Instagram size={18} />
            @TAGSBIKEZ
          </a>
        </div>

        {/* Swiper with Instagram Embeds */}
        <div className="sf-swiper-wrap">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {reels.map((url, index) => (
              <SwiperSlide key={index}>
                <div className="sf-card-wrapper">
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink={url}
                    data-instgrm-version="14"
                  >
                  </blockquote>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
