"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { img } from "@/assets/assest";

const slides = [
  {
    id: 0,
    tag: "Adventure Series",
    heading: ["Best Adventure", "Tourer"],
    highlight: "Bikes",
    description:
      "A born-again design built for going through the hills of the countryside. Discovering new roads with powerful performance and premium components for every terrain.",
    specs: [
      { label: "Engine", value: "349cc" },
      { label: "Power", value: "20.2 BHP" },
      { label: "Torque", value: "27 Nm" },
      { label: "Weight", value: "195 kg" },
    ],
    heroImg: img.bulletimg,
    thumbnails: [
      { id: 1, img: img.bulletfront, label: "Frame Detail" },
      { id: 2, img: img.bullet350engine, label: "Motor Unit" },
      { id: 3, img: img.bulletback, label: "Handlebar" },
      { id: 4, img: img.bulletback, label: "Side" },
    ],
  },
  {
    id: 1,
    tag: "Classic Heritage",
    heading: ["Pure Classic", "Roadster"],
    highlight: "Spirit",
    description:
      "Timeless styling meets modern engineering. Every curve tells a story of heritage refined for the open road, built for riders who cherish the journey as much as the destination.",
    specs: [
      { label: "Engine", value: "411cc" },
      { label: "Power", value: "24.3 BHP" },
      { label: "Torque", value: "32 Nm" },
      { label: "Weight", value: "213 kg" },
    ],
    heroImg: img.bulletimg,
    thumbnails: [
      { id: 1, img: img.bullethandlebar, label: "Handlebars" },
      { id: 2, img: img.bulletback, label: "Rear Profile" },
      { id: 3, img: img.bullet350engine, label: "Engine" },
      { id: 4, img: img.bulletback, label: "Side" },
    ],
  },
  {
    id: 2,
    tag: "Street Fighter",
    heading: ["Urban Street", "Dominator"],
    highlight: "Beast",
    description:
      "Raw power wrapped in aggressive styling. Built for city streets and open highways alike, this machine commands attention and delivers thrills with every twist of the throttle.",
    specs: [
      { label: "Engine", value: "648cc" },
      { label: "Power", value: "47.6 BHP" },
      { label: "Torque", value: "52 Nm" },
      { label: "Weight", value: "202 kg" },
    ],
    heroImg: img.bulletimg,
    thumbnails: [
      { id: 1, img: img.bulletfront, label: "Front Fascia" },
      { id: 2, img: img.bulletback, label: "Exhaust" },
      { id: 3, img: img.bullet350engine, label: "Twin Engine" },
      { id: 4, img: img.bulletback, label: "Side" },
    ],
  },
  {
    id: 3,
    tag: "Off-Road Legend",
    heading: ["Himalayan", "Explorer"],
    highlight: "Trail",
    description:
      "Engineered for the Himalayas, perfected for every road beyond. Long-travel suspension, rugged build quality, and a heart that never quits wherever you point it, it delivers.",
    specs: [
      { label: "Engine", value: "452cc" },
      { label: "Power", value: "40 BHP" },
      { label: "Torque", value: "40 Nm" },
      { label: "Weight", value: "196 kg" },
    ],
    heroImg: img.bulletimg,
    thumbnails: [
      { id: 1, img: img.bulletfront, label: "Front Guard" },
      { id: 2, img: img.bullet350engine, label: "Engine Bay" },
      { id: 3, img: img.bulletback, label: "Luggage Rack" },
      { id: 4, img: img.bulletback, label: "Side" },
    ],
  },
];

export default function PopularBikes() {
  const [current, setCurrent] = useState(0);
  const [activeThumb, setActiveThumb] = useState(0);
  const swiperRef = useRef(null);

  const slide = slides[current];

  const handleSlideChange = (swiper) => {
    setCurrent(swiper.realIndex);
    setActiveThumb(0);
  };

  return (
    <section className="pb-section">
      <style>{`
        .pb-section {
          background: #fff;
          overflow: hidden;
          position: relative;
          min-height: 85vh;
          display: flex;
          align-items: center;
        }

        .adventure-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 0;
          width: 100%;
        }

        .bike-swiper-wrap {
          position: relative;
          margin-left: -80px;
          display: flex;
          align-items: center;
        }

        .bike-swiper-clip {
          overflow: hidden;
          width: 110%;
          max-width: 640px;
          position: relative;
          padding: 30px 0;
          margin: -30px 0;
        }

        .bike-swiper-clip .swiper {
          width: 100%;
          overflow: hidden;
        }

        .bike-img {
          width: 100%;
          object-fit: contain;
          display: block;
        }

        .swiper-button-next,
        .swiper-button-prev { display: none !important; }

        /* RIGHT */
        .content-col {
          padding-left: 40px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .slide-tag {
          display: inline-block;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #e63020;
          margin-bottom: 10px;
        }

        .heading {
          font-size: clamp(36px, 3vw, 52px);
          line-height: 1.0;
          color: #1a1a1a;
          text-transform: uppercase;
          margin: 0 0 14px;
          letter-spacing: -0.01em;
        }

        .heading span { color: #e63020; }

        .description {
          font-size: 14px;
          line-height: 1.7;
          color: #666;
          max-width: 560px;
          margin: 0 0 24px;
        }

        /* ── SPECS — outer border + right dividers, no gap ── */
        .specs-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid #e0e0e0;
          border-left: 1px solid #e0e0e0;
          margin-bottom: 0;
        }

        .spec-item {
          padding: 14px 16px;
          border-right: 1px solid #e0e0e0;
          border-bottom: 1px solid #e0e0e0;
          display: flex;
          flex-direction: column;
          gap: 3px;
          box-sizing: border-box;
        }

        .spec-value {
          font-size: 20px;
          font-weight: 700;
          color: #111;
          line-height: 1;
        }

        .spec-label {
          font-size: 10.5px;
          font-weight: 500;
          color: #aaa;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        /* ── THUMBNAILS — outer border + right dividers, flush under specs ── */
        .thumb-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-left: 1px solid #e0e0e0;
          border-bottom: 1px solid #e0e0e0;
          margin-bottom: 0;
        }

        .thumb-item {
          border-right: 1px solid #e0e0e0;
          overflow: hidden;
          cursor: pointer;
          position: relative;
          height: 90px;
          box-sizing: border-box;
          transition: opacity 0.25s ease;
        }

        // .thumb-item.active {
        //   outline: 2px solid #e63020;
        //   outline-offset: -2px;
        // }

        .thumb-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        // .thumb-item:hover img { transform: scale(1.06); }

        /* ── BOTTOM ROW — separated with gap ── */
        .pb-bottom-row {
          display: flex;
          align-items: stretch;
          border: 1px solid #e0e0e0;
          margin-top: 30px;
        }

        .pb-bottom-cell {
          display: flex;
          align-items: center;
          padding: 0;
        }

        .pb-bottom-cell:not(:last-child) {
          border-right: 1px solid #e0e0e0;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #f51b24;
          color: #fff;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 14px 28px;
          border: none;
          cursor: pointer;
          transition: background 0.25s ease;
          height: 100%;
          white-space: nowrap;
        }

        .cta-btn:hover { background: #111; }

        .cta-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: #111;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 14px 24px;
          border: none;
          cursor: pointer;
          transition: color 0.25s, background 0.25s;
          height: 100%;
          white-space: nowrap;
        }

        .cta-ghost:hover { background: #f5f5f5; }

        /* Dots cell — flex: 1 so it fills remaining width */
        .pb-dots-cell {
          flex: 1;
          justify-content: flex-end;
          padding: 0 20px;
          gap: 8px;
        }

        .slide-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ddd;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
          border: none;
          padding: 0;
        }

        .slide-dot.active {
          background: #e63020;
          transform: scale(1.4);
        }

        /* Slide-in content transition */
        .content-col-inner {
          opacity: 0;
          transform: translateY(20px);
          animation: contentFadeIn 0.5s ease forwards;
        }

        @keyframes contentFadeIn {
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .pb-section { min-height: auto; padding: 60px 0; }
          .adventure-section {
            grid-template-columns: 1fr;
            padding: 0 20px;
          }
          .bike-swiper-wrap { margin-left: 0; }
          .bike-swiper-clip { width: 100%; }
          .content-col { padding-left: 0; margin-top: 24px; }
          .specs-row { grid-template-columns: repeat(2, 1fr); }
          .thumb-strip { grid-template-columns: repeat(2, 1fr); }
          .thumb-item { height: 80px; }
        }
      `}</style>

      <div className="adventure-section">

        {/* LEFT — Swiper hero image */}
        <div className="bike-swiper-wrap">
          <div className="bike-swiper-clip">
            <Swiper
              modules={[Navigation, Autoplay]}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              speed={650}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={handleSlideChange}
            >
              {slides.map((s, i) => (
                <SwiperSlide key={i}>
                  <Image
                    src={s.heroImg}
                    alt={s.highlight}
                    className="bike-img"
                    priority={i === 0}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* RIGHT — content synced to slide */}
        <div className="content-col">
          <div className="content-col-inner" key={current}>

            <span className="slide-tag">{slide.tag}</span>

            <h2 className="heading">
              {slide.heading[0]}<br />
              {slide.heading[1]} <span>{slide.highlight}</span>
            </h2>

            <p className="description">{slide.description}</p>

            {/* Specs — top+left border, each cell right+bottom */}
            <div className="specs-row">
              {slide.specs.map((spec, i) => (
                <div className="spec-item" key={i}>
                  <span className="spec-value">{spec.value}</span>
                  <span className="spec-label">{spec.label}</span>
                </div>
              ))}
            </div>

            {/* Thumbnails — left+bottom border, each cell right border, flush under specs */}
            <div className="thumb-strip">
              {slide.thumbnails.map((t, i) => (
                <div
                  key={t.id}
                  className={`thumb-item ${activeThumb === i ? "active" : ""}`}
                  onClick={() => setActiveThumb(i)}
                >
                  <Image src={t.img} alt={t.label} fill style={{ objectFit: "cover" }} />
                </div>
              ))}
            </div>

            {/* Bottom row — left+right+bottom border, cells divided by right border */}
            <div className="pb-bottom-row">
              <div className="pb-bottom-cell">
                <button className="cta-btn">Know More</button>
              </div>
              <div className="pb-bottom-cell">
                <button className="cta-ghost">Test Ride</button>
              </div>
              <div className="pb-bottom-cell pb-dots-cell">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    className={`slide-dot ${current === i ? "active" : ""}`}
                    onClick={() => swiperRef.current?.slideToLoop(i)}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}