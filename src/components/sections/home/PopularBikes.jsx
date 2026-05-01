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
    ],
  },
  {
    id: 3,
    tag: "Off-Road Legend",
    heading: ["Himalayan", "Explorer"],
    highlight: "Trail",
    description:
      "Engineered for the Himalayas, perfected for every road beyond. Long-travel suspension, rugged build quality, and a heart that never quits — wherever you point it, it delivers.",
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
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=Barlow:wght@400;500&display=swap');

        .pb-section {
          background: #fff;
          overflow: hidden;
          position: relative;
          min-height: 100vh;
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

        /* Specs */
        .specs-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          margin-bottom: 28px;
          border: 1px solid #ececec;
        }

        .spec-item {
          padding: 14px 16px;
          border-right: 1px solid #ececec;
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .spec-item:last-child { border-right: none; }

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

        /* Thumbnails */
        .thumb-strip {
          display: flex;
          gap: 10px;
          margin-bottom: 28px;
        }

        .thumb-item {
          width: 120px;
          height: 90px;
          border-radius: 4px;
          overflow: hidden;
          cursor: pointer;
          position: relative;
          border: 2px solid transparent;
          transition: border-color 0.25s ease, transform 0.25s ease;
          flex-shrink: 0;
        }

     

        .thumb-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }


        /* Slide counter */
        .slide-counter {
          font-size: 13px;
          font-weight: 600;
          color: #bbb;
          letter-spacing: 0.08em;
        }

        .slide-counter strong {
          color: #111;
          font-size: 18px;
        }

        /* CTA */
        .pb-bottom-row {
          display: flex;
          align-items: center;
          gap: 20px;
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
          width: fit-content;
          transition: background 0.25s ease;
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
          padding: 13px 24px;
          border: 1.5px solid #ddd;
          cursor: pointer;
          transition: border-color 0.25s, color 0.25s;
        }

        .cta-ghost:hover { border-color: #111; }

        /* Nav dots */
        // .slide-dots {
        //   display: flex;
        //   gap: 6px;
        //   align-items: center;
        //   margin-left: auto;
        // }

        // .slide-dot {
        //   width: 6px;
        //   height: 6px;
        //   border-radius: 50%;
        //   background: #ddd;
        //   cursor: pointer;
        //   transition: background 0.2s, transform 0.2s;
        //   border: none;
        //   padding: 0;
        // }

        // .slide-dot.active {
        //   background: #e63020;
        //   transform: scale(1.4);
        // }

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
          .thumb-item { width: 100px; height: 80px; }
          .specs-row { grid-template-columns: repeat(2, 1fr); }
          .spec-item:nth-child(2) { border-right: none; }
          .spec-item:nth-child(1),
          .spec-item:nth-child(2) { border-bottom: 1px solid #ececec; }
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

            {/* Specs */}
            <div className="specs-row">
              {slide.specs.map((spec, i) => (
                <div className="spec-item" key={i}>
                  <span className="spec-value">{spec.value}</span>
                  <span className="spec-label">{spec.label}</span>
                </div>
              ))}
            </div>

            {/* Thumbnails */}
            <div className="thumb-strip">
              {slide.thumbnails.map((t, i) => (
                <div
                  key={t.id}
                  className={`thumb-item ${activeThumb === i ? "active" : ""}`}
                  onClick={() => setActiveThumb(i)}
                >
                  <Image src={t.img} alt={t.label} />
                </div>
              ))}
            </div>

            {/* Bottom row */}
            <div className="pb-bottom-row">
              <button className="cta-btn">Shop Now</button>
              <button className="cta-ghost">Test Ride</button>
              <div className="slide-dots">
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