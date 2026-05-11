"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { img } from "@/assets/assest";
import AnimatedBtn from "@/components/AnimatedBtn";

const slides = [
  {
    id: 0,
    heading: "Royal Enfield Classic 350",
    description:
      "A born-again design built for going through the hills of the countryside. Discovering new roads with powerful performance.",
    price: "From ₹1,93,500",
    heroImg: img.bulletimg,
  },
  {
    id: 1,
    heading: "Interceptor 650",
    description:
      "Timeless styling meets modern engineering. Every curve tells a story of heritage refined for the open road.",
    price: "From ₹3,03,500",
    heroImg: img.bulletimg,
  },
  {
    id: 2,
    heading: "Continental GT 650",
    description:
      "The ultimate cafe racer experience. Aggressive stance meets pure performance on every corner of the asphalt.",
    price: "From ₹3,13,500",
    heroImg: img.bulletimg,
  },
  {
    id: 3,
    heading: "Meteor 350",
    description:
      "Built for the open road. Relaxed ergonomics, refined powerplant, and timeless cruiser styling.",
    price: "From ₹2,21,500",
    heroImg: img.bulletimg,
  },
  {
    id: 4,
    heading: "Hunter 350",
    description:
      "Urban roads meet raw character. The Hunter 350 is made for those who ride to stand out.",
    price: "From ₹1,49,500",
    heroImg: img.bulletimg,
  },
];

export default function PopularBikes2() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="pb-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@800;900&family=Barlow:wght@400;600;700&display=swap');

        * { box-sizing: border-box; }

        .pb-root {
          background: #f0f0f0;
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          position: relative;
          padding: 52px 0 36px;
        }

        /* ── TOP: title left + info right, full-width with padding ── */
        .pb-top {
          width: 100%;
          padding: 0 60px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0;
        }

        .pb-title {
          font-size: clamp(34px, 4.5vw, 62px);
          font-weight: 900;
          line-height: 1.0;
          text-transform: uppercase;
          color: #111;
          margin: 0;
          letter-spacing: -0.5px;
          max-width: 420px;
        }

        .pb-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          max-width: 280px;
          padding-top: 2px;
        }

        .pb-bike-name {
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          color: #111;
          letter-spacing: 0.08em;
          margin: 0 0 8px 0;
        }

        .pb-bike-desc {
          font-size: 13px;
          color: #888;
          line-height: 1.6;
          margin: 0 0 10px 0;
        }

        .pb-bike-price {
          font-size: 13px;
          font-weight: 700;
          color: #111;
          margin: 0 0 16px 0;
        }

        .pb-cta {
          background: #6abf4b;
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          padding: 12px 24px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          transition: background 0.25s ease;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          white-space: nowrap;
        }

        .pb-cta:hover { background: #58a838; }

        /* ── SWIPER: full bleed, no horizontal constraint ── */
        .pb-swiper-outer {
          width: 100%;
          /* Pull upward so bike image overlaps the header row like in ref */
          margin-top: -80px;
          position: relative;
        }

        .pb-swiper {
          width: 100% !important;
          /* top padding creates space for active slide scale, bottom for dots */
          padding: 120px 0 56px !important;
          overflow: visible !important;
        }

        /* Clip only horizontally so scaled slides don't cause scrollbar */
        .pb-swiper-outer {
          overflow: hidden;
        }

        .pb-swiper .swiper-wrapper {
          align-items: center;
        }

        /* Every slide — full viewport width so active bike is big */
        .pb-swiper .swiper-slide {
          width: 55vw !important;
          max-width: 780px;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          /* faded & shrunk by default */
          opacity: 0.18;
          transform: scale(0.72);
          transition: opacity 0.45s ease, transform 0.45s ease;
        }

        .pb-swiper .swiper-slide-active {
          opacity: 1 !important;
          transform: scale(1) !important;
          z-index: 10;
        }

        /* prev / next partially visible at edges */
        .pb-swiper .swiper-slide-prev,
        .pb-swiper .swiper-slide-next {
          opacity: 0.16 !important;
          transform: scale(0.75) !important;
        }

        .pb-bike-img {
          width: 100%;
          height: auto;
          object-fit: contain;
          display: block;
          filter: drop-shadow(0 8px 32px rgba(0,0,0,0.08));
        }

        /* ── PAGINATION ── */
        .pb-swiper .swiper-pagination {
          bottom: 14px !important;
        }

        .pb-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #c0c0c0;
          opacity: 1;
          border-radius: 50%;
          margin: 0 4px !important;
          transition: all 0.3s ease;
        }

        .pb-swiper .swiper-pagination-bullet-active {
          background: #111;
          width: 24px;
          border-radius: 4px;
        }

        @media (max-width: 768px) {
          .pb-top { padding: 0 24px; flex-direction: column; gap: 20px; }
          .pb-info { max-width: 100%; }
          .pb-swiper .swiper-slide { width: 80vw !important; }
          .pb-swiper-outer { margin-top: -40px; }
        }
      `}</style>

      {/* Title left / Info right */}
      <div className="pb-top">
        <h2 className="pb-title">
          Catalogue Of<br />Popular Bikes
        </h2>

        <div className="pb-info">
          <p className="pb-bike-name">{slides[activeSlide].heading}</p>
          <p className="pb-bike-desc">{slides[activeSlide].description}</p>
          <p className="pb-bike-price">{slides[activeSlide].price}</p>
          <AnimatedBtn>Select Motorcycle</AnimatedBtn>
        </div>
      </div>

      {/* Full-bleed coverflow */}
      <div className="pb-swiper-outer">
        <Swiper
          className="pb-swiper"
          modules={[Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 80,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Image
                src={slide.heroImg}
                alt={slide.heading}
                className="pb-bike-img"
                priority={slide.id === 0}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}