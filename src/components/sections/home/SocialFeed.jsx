"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaYoutube, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const youtubeShorts = [
  "hl-al01AZfE",
  "17YSD3BSxhI",
  "wTwwDw-shQY",
  "2MK4kXxpZIg",
  "0ew8MV7oOyI",
  "BMb5dP0pLhw",
];

const SocialFeed = () => {
  const swiperRef = useRef(null);

  return (
    <section className="sf-root">

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
          border: 1px solid #e0e0e0;
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
        .sf-swiper-outer {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .sf-swiper-wrap {
          flex: 1;
          padding: 40px 0;
          background: #fcfcfc;
          overflow: hidden;
        }

        .sf-card-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          padding: 0 10px;
        }

        .sf-card-wrapper iframe.youtube-short-iframe {
          border-radius: 8px;
          width: 100%;
          max-width: 315px;
          aspect-ratio: 9/16;
          height: auto;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          border: none;
        }

        /* Hide default swiper navigation arrows */
        .sf-swiper-wrap .swiper-button-next,
        .sf-swiper-wrap .swiper-button-prev {
          display: none;
        }

        .sf-nav-btn {
          flex-shrink: 0;
          width: 42px;
          height: 42px;
          border-radius: 4px;
          background: #fff;
          color: #111;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          font-size: 14px;
          z-index: 10;
        }

        .sf-nav-btn:hover {
          background: #fafafa;
          color: #939292ff;
          border-color: #111;
        }

        @media (max-width: 768px) {
          .sf-container { padding: 0 20px; }
          .sf-header { padding: 20px; flex-direction: column; align-items: flex-start; gap: 20px; }
          .sf-nav-btn { width: 34px; height: 34px; }
        }
      `}</style>

      <div className="sf-container">
        {/* Header */}
        <div className="sf-header">
          <div className="sf-title-wrap">
            <p className="sf-eyebrow">Connect With Us</p>
            <h2 className="sf-heading">Follow The Journey</h2>
          </div>

          {/* YouTube link only */}
          <a href="https://youtube.com/@imfranciz?si=O6hiBUvku_G5I5NW" target="_blank" className="sf-insta-link">
            <FaYoutube size={18} />
            TAGSBIKEZ
          </a>
        </div>

        {/* Swiper with side buttons */}
        <div className="sf-swiper-outer">
          <button className="sf-nav-btn" onClick={() => swiperRef.current?.slidePrev()}>
            <FaChevronLeft />
          </button>

          <div className="sf-swiper-wrap">
            <Swiper
              modules={[Navigation]}
              spaceBetween={0}
              slidesPerView={1}
              allowTouchMove={false}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
            >
              {youtubeShorts.map((id, index) => (
                <SwiperSlide key={index}>
                  <div className="sf-card-wrapper">
                    <iframe
                      src={`https://www.youtube.com/embed/${id}`}
                      title={`YouTube short ${id}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="youtube-short-iframe"
                    ></iframe>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <button className="sf-nav-btn" onClick={() => swiperRef.current?.slideNext()}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;