"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { img } from "@/assets/assest";
import AnimatedBtn from "@/components/AnimatedBtn";

const slides = [
  {
  id: 0,
  tag: "Classic Series",
  heading: ["The Timeless", " Classic"],
  highlight: "350",
  description:
    "An iconic retro cruiser built for effortless daily commutes and relaxed weekend rides. Combining post-war styling with a smooth, modern counterbalanced engine for the ultimate visual and riding pleasure.",
  specs: [
    { label: "Engine", value: "349cc" },
    { label: "Power", value: "20.2 BHP" },
    { label: "Torque", value: "27 Nm" },
    { label: "Weight", value: "195 kg" },
  ],
  heroImg: img.classic350,
  thumbnails: [
    { id: 1, img: img.classic350front, label: "Casquette Headlamp" },
    { id: 2, img: img.classic350handlebar, label: "Digi-Analog Cluster" },
    { id: 3, img: img.classic350engine, label: "J-Series Motor" },
    { id: 4, img: img.classic350rear, label: "Teardrop Fuel Tank" },
  ],
},
{
  id: 1,
  tag: "Urban Roadster",
  heading: ["Agile Street", " Roadster"],
  highlight: "Hunter",
  description:
    "An urban-style roadster engineered for sharp handling and effortless city maneuvering. A compact geometry combined with a punchy motor makes darting through traffic an absolute blast.",
  specs: [
    { label: "Engine", value: "349cc" },
    { label: "Power", value: "20.2 BHP" },
    { label: "Torque", value: "27 Nm" },
    { label: "Weight", value: "181 kg" },
  ],
  heroImg: img.hunter350,
  thumbnails: [
    { id: 1, img: img.hunter350front, label: "Retro Headlamp" },
    { id: 2, img: img.classic350engine, label: "J-Series Engine" },
    { id: 3, img: img.hunter350handlebar, label: "Flat Handlebar" },
    { id: 4, img: img.hunter350rear, label: "Contoured Seat" },
  ],
},
 {
  id: 2,
  tag: "The Legend",
  heading: ["Pure Undiluted", " Heritage"],
  highlight: "Bullet",
  description:
    "The longest-running motorcycle in continuous production, carrying an unmatched legacy. Stripped of pretense, its authoritative presence and signature thump command respect on every road.",
  specs: [
    { label: "Engine", value: "349cc" },
    { label: "Power", value: "20.2 BHP" },
    { label: "Torque", value: "27 Nm" },
    { label: "Weight", value: "195 kg" },
  ],
  heroImg: img.bullet350,
  thumbnails: [
    { id: 1, img: img.bullet350front, label: "Hand-Painted Tank" },
    { id: 2, img: img.classic350engine, label: "J-Series Engine" },
    { id: 3, img: img.classic350handlebar, label: "Upright Handlebar" },
    { id: 4, img: img.bullet350rear, label: "Single-Piece Seat" },
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
          margin-top: 30px;
          gap: 8px;
        }

        .pb-bottom-cell {
          display: flex;
          align-items: center;
          padding: 0;
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

        .cta-btn:hover {background: #f5f5f5; color:#000; }

        .cta-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #000;
          color: #fff;
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

        .cta-ghost:hover { background: #f5f5f5; color:#000;}

        .pb-dots-cell {
          flex: 1;
          justify-content: flex-end;
          padding: 0 20px;
          gap: 8px;
          border: 1px solid #e0e0e0;
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

        /* ── Large desktops (≤ 1440px) ── */
        @media (max-width: 1440px) {
          .adventure-section {
            max-width: 1100px;
            padding: 0 20px;
          }
          .hero-img-wrap { height: 400px; }
          .heading { font-size: 38px; }
        }

        /* ── Medium desktops (≤ 1280px) ── */
        @media (max-width: 1280px) {
          .adventure-section {
            max-width: 980px;
            padding: 0 30px;
          }
          .bike-swiper-wrap { margin-left: -40px; }
          .bike-swiper-clip { max-width: 520px; }
          .hero-img-wrap { height: 360px; }
          .heading { font-size: 34px; }
          .description { font-size: 13px; }
          .content-col { padding-left: 28px; }
          .spec-value { font-size: 18px; }
          .thumb-item { height: 76px; }
        }

        /* ── Small desktops / large tablets (≤ 1100px) ── */
        @media (max-width: 1100px) {
          .adventure-section {
            max-width: 100%;
            padding: 0 24px;
          }
          .bike-swiper-wrap { margin-left: -20px; }
          .bike-swiper-clip { max-width: 460px; }
          .hero-img-wrap { height: 320px; }
          .heading { font-size: 30px; }
          .description { font-size: 12.5px; max-width: 420px; }
          .content-col { padding-left: 20px; }
          .spec-value { font-size: 16px; }
          .spec-label { font-size: 9.5px; }
          .spec-item { padding: 10px 10px; }
          .thumb-item { height: 66px; }
          .cta-btn, .cta-ghost { font-size: 11px; padding: 12px 18px; }
        }

        @media (max-width: 1024px) {

          .pb-section {
            min-height: auto;
            padding: 0 0 40px;
            align-items: flex-start;
          }

          /* Swap which layout is visible */
          .desktop-layout { display: none; }
          .mobile-layout  { display: block; width: 100%; }

          @media (min-width: 769px) {
            .pb-section {
              padding: 0 40px 40px 40px !important;
            }
            .m-hero-wrap {
              height: 380px;
            }
            .m-content {
              padding: 30px 0 0;
              max-width: none;
              margin: 0;
            }
            .m-heading {
              font-size: 32px;
            }
            .m-description {
              font-size: 14px;
              -webkit-line-clamp: unset;
            }
            .m-spec-value {
              font-size: 18px;
            }
            .m-spec-label {
              font-size: 10px;
            }
            .m-thumb {
              height: 80px;
            }
            .m-bottom {
              margin-top: 24px;
            }
            .m-cta-btn, .m-cta-ghost {
              font-size: 13px;
              padding: 14px 28px;
            }
          }

          /* ── Hero image strip — full bleed ── */
          .m-hero-wrap {
            width: 100%;
            position: relative;
            height: 240px;
            background: transparent;
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

          .m-bottom {
            display: flex;
            align-items: stretch;
            margin-top: 12px;
            gap: 6px;
          }

          .m-bottom-cell {
            display: flex;
            align-items: center;
          }

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
            border: 1px solid #e8e8e8;
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

          /* ── Hide dots on small phones ── */
          @media (max-width: 480px) {
            .m-dots-cell { display: none; }
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
              {/* <span className="slide-tag">{slide.tag}</span> */}
              <h2 className="heading">
                {slide.heading[0]}
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
                  <AnimatedBtn href="/models" bgColor="#f51b24" hoverColor="#111" style={{ height: '56px' }}>
                    Know More
                  </AnimatedBtn>
                </div>
                <div className="pb-bottom-cell">
                  <AnimatedBtn href="https://wa.me/917594960023?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Royal%20Enfield." target="_blank" style={{ height: '56px' }}>
                    Test Ride
                  </AnimatedBtn>
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

            {/* <span className="m-tag">{mobileSlide.tag}</span> */}
            <h2 className="m-heading">
              {mobileSlide.heading[0]}
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
                <AnimatedBtn href="/models" bgColor="#f51b24" hoverColor="#111" style={{ height: '50px' }}>
                  Know More
                </AnimatedBtn>
              </div>
              <div className="m-bottom-cell">
                <AnimatedBtn href="https://wa.me/917594960023?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Royal%20Enfield." target="_blank" style={{ height: '50px' }}>
                  Test Ride
                </AnimatedBtn>
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