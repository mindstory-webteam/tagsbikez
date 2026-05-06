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
  const [mobileCurrent, setMobileCurrent] = useState(0);
  const [mobileActiveThumb, setMobileActiveThumb] = useState(0);
  const mobileSwiperRef = useRef(null);

  const slide = slides[current];
  const mobileSlide = slides[mobileCurrent];

  return (
    <section className="pb-section">
      <style>{`

        /* ═══════════════════════════════════════
           DESKTOP LAYOUT (>768px) — untouched
        ═══════════════════════════════════════ */

        .pb-section {
          background: #fff;
          overflow: hidden;
          position: relative;
          min-height: 85vh;
          display: flex;
          align-items: center;
        }

        /* Desktop wrapper */
        .desktop-layout {
          display: block;
          width: 100%;
        }
        .mobile-layout {
          display: none;
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

        .bike-swiper-clip .swiper { width: 100%; overflow: hidden; }

        /* Desktop hero image — keep original behaviour */
        .hero-img-wrap {
          position: relative;
          width: 100%;
          height: 420px;
        }

        .swiper-button-next,
        .swiper-button-prev { display: none !important; }

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
          font-size: 42px;
          line-height: 1.0;
          color: #1a1a1a;
          font-weight: 400;
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

        .thumb-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

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

        .pb-bottom-cell:not(:last-child) { border-right: 1px solid #e0e0e0; }

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

        .content-col-inner {
          opacity: 0;
          transform: translateY(20px);
          animation: contentFadeIn 0.5s ease forwards;
        }

        @keyframes contentFadeIn {
          to { opacity: 1; transform: translateY(0); }
        }


    

        @media (max-width: 768px) {

          .pb-section {
            min-height: auto;
            padding: 0 0 40px;
            align-items: flex-start;
          }

          /* Swap which layout is visible */
          .desktop-layout { display: none; }
          .mobile-layout  { display: block; width: 100%; }

          /* ── Hero image strip — full bleed ── */
          .m-hero-wrap {
            width: 100%;
            position: relative;
            height: 240px;
            background: #f5f5f5;
          }

          /* ── Content card below ── */
          .m-content {
            padding: 18px 16px 0;
          }

          .m-tag {
            font-size: 9px;
            font-weight: 700;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            color: #e63020;
            margin-bottom: 5px;
            display: block;
          }

          .m-heading {
            font-size: 22px;
            font-weight: 400;
            line-height: 1.08;
            color: #1a1a1a;
            text-transform: uppercase;
            margin: 0 0 8px;
            letter-spacing: -0.01em;
          }

          .m-heading span { color: #e63020; }

          .m-description {
            font-size: 11.5px;
            line-height: 1.55;
            color: #777;
            margin: 0 0 14px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          /* Specs — 4 col */
          .m-specs {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            border-top: 1px solid #e8e8e8;
            border-left: 1px solid #e8e8e8;
          }

          .m-spec-item {
            padding: 8px 8px;
            border-right: 1px solid #e8e8e8;
            border-bottom: 1px solid #e8e8e8;
            display: flex;
            flex-direction: column;
            gap: 2px;
            box-sizing: border-box;
          }

          .m-spec-value {
            font-size: 14px;
            font-weight: 700;
            color: #111;
            line-height: 1;
          }

          .m-spec-label {
            font-size: 7.5px;
            font-weight: 600;
            color: #bbb;
            text-transform: uppercase;
            letter-spacing: 0.06em;
          }

          /* Thumbnails — 4 col */
          .m-thumbs {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            border-left: 1px solid #e8e8e8;
            border-bottom: 1px solid #e8e8e8;
          }

          .m-thumb {
            border-right: 1px solid #e8e8e8;
            position: relative;
            height: 54px;
            overflow: hidden;
            cursor: pointer;
          }

          .m-thumb.active::after {
            content: '';
            position: absolute;
            inset: 0;
            pointer-events: none;
            z-index: 1;
          }

          /* Bottom row */
          .m-bottom {
            display: flex;
            align-items: stretch;
            border: 1px solid #e8e8e8;
            margin-top: 12px;
          }

          .m-bottom-cell {
            display: flex;
            align-items: center;
          }

          .m-bottom-cell:not(:last-child) { border-right: 1px solid #e8e8e8; }

          .m-cta-btn {
            background: #f51b24;
            color: #fff;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            padding: 11px 14px;
            border: none;
            cursor: pointer;
            white-space: nowrap;
            height: 100%;
          }

          .m-cta-ghost {
            background: transparent;
            color: #111;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            padding: 11px 12px;
            border: none;
            cursor: pointer;
            white-space: nowrap;
            height: 100%;
          }

          .m-dots-cell {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding: 0 12px;
            gap: 6px;
          }

          .m-dot {
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: #ddd;
            border: none;
            padding: 0;
            cursor: pointer;
            transition: background 0.2s, transform 0.2s;
          }

          .m-dot.active {
            background: #e63020;
            transform: scale(1.4);
          }

          /* Animate mobile content on slide change */
          .m-content-inner {
            opacity: 0;
            transform: translateY(12px);
            animation: mFadeIn 0.4s ease forwards;
          }

          @keyframes mFadeIn {
            to { opacity: 1; transform: translateY(0); }
          }
        }
      `}</style>

      <div className="desktop-layout">
        <div className="adventure-section">

          {/* LEFT — Swiper hero */}
          <div className="bike-swiper-wrap">
            <div className="bike-swiper-clip">
              <Swiper
                modules={[Navigation, Autoplay]}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                speed={650}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => {
                  setCurrent(swiper.realIndex);
                  setActiveThumb(0);
                }}
              >
                {slides.map((s, i) => (
                  <SwiperSlide key={i}>
                    <div className="hero-img-wrap">
                      <Image
                        src={s.heroImg}
                        alt={s.highlight}
                        fill
                        sizes="50vw"
                        style={{ objectFit: "contain" }}
                        priority={i === 0}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="content-col">
            <div className="content-col-inner" key={current}>
              <span className="slide-tag">{slide.tag}</span>
              <h2 className="heading">
                {slide.heading[0]}<br />
                {slide.heading[1]} <span>{slide.highlight}</span>
              </h2>
              <p className="description">{slide.description}</p>

              <div className="specs-row">
                {slide.specs.map((spec, i) => (
                  <div className="spec-item" key={i}>
                    <span className="spec-value">{spec.value}</span>
                    <span className="spec-label">{spec.label}</span>
                  </div>
                ))}
              </div>

              <div className="thumb-strip">
                {slide.thumbnails.map((t, i) => (
                  <div
                    key={t.id}
                    className={`thumb-item ${activeThumb === i ? "active" : ""}`}
                    onClick={() => setActiveThumb(i)}
                  >
                    <Image src={t.img} alt={t.label} fill sizes="12vw" style={{ objectFit: "cover" }} />
                  </div>
                ))}
              </div>

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
      </div>


      <div className="mobile-layout">

        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          speed={600}
          onSwiper={(swiper) => (mobileSwiperRef.current = swiper)}
          onSlideChange={(swiper) => {
            setMobileCurrent(swiper.realIndex);
            setMobileActiveThumb(0);
          }}
        >
          {slides.map((s, i) => (
            <SwiperSlide key={i}>
              <div className="m-hero-wrap">
                <Image
                  src={s.heroImg}
                  alt={s.highlight}
                  fill
                  sizes="100vw"
                  style={{ objectFit: "contain" }}
                  priority={i === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="m-content">
          <div className="m-content-inner" key={mobileCurrent}>

            <span className="m-tag">{mobileSlide.tag}</span>
            <h2 className="m-heading">
              {mobileSlide.heading[0]}<br />
              {mobileSlide.heading[1]} <span>{mobileSlide.highlight}</span>
            </h2>
            <p className="m-description">{mobileSlide.description}</p>

            {/* Specs */}
            <div className="m-specs">
              {mobileSlide.specs.map((spec, i) => (
                <div className="m-spec-item" key={i}>
                  <span className="m-spec-value">{spec.value}</span>
                  <span className="m-spec-label">{spec.label}</span>
                </div>
              ))}
            </div>

            {/* Thumbnails */}
            <div className="m-thumbs">
              {mobileSlide.thumbnails.map((t, i) => (
                <div
                  key={t.id}
                  className={`m-thumb ${mobileActiveThumb === i ? "active" : ""}`}
                  onClick={() => setMobileActiveThumb(i)}
                >
                  <Image src={t.img} alt={t.label} fill sizes="25vw" style={{ objectFit: "cover" }} />
                </div>
              ))}
            </div>

            {/* Bottom row */}
            <div className="m-bottom">
              <div className="m-bottom-cell">
                <button className="m-cta-btn">Know More</button>
              </div>
              <div className="m-bottom-cell">
                <button className="m-cta-ghost">Test Ride</button>
              </div>
              <div className="m-dots-cell">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    className={`m-dot ${mobileCurrent === i ? "active" : ""}`}
                    onClick={() => mobileSwiperRef.current?.slideToLoop(i)}
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