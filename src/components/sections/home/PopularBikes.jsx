"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { img } from "@/assets/assest";

const slides = [
  {
    id: 0,
    heading: ["Best Adventure", "Tourer"],
    highlight: "Bikes",
    description:
      "A born-again design built for going through the hills of the countryside. Discovering new roads with powerful performance and premium components for every terrain.",
    heroImg: img.bulletimg,
    thumbnails: [
      { id: 1, img: img.bulletfront, label: "Frame Detail" },
      { id: 2, img: img.bullet350engine, label: "Motor Unit" },
      { id: 3, img: img.bulletback, label: "Handlebar" },
    ],
  },
  {
    id: 1,
    heading: ["Pure Classic", "Roadster"],
    highlight: "Spirit",
    description:
      "Timeless styling meets modern engineering. Every curve tells a story of heritage refined for the open road, built for riders who cherish the journey as much as the destination.",
    heroImg: img.bulletimg,
    thumbnails: [
      { id: 1, img: img.bullethandlebar, label: "Handlebars" },
      { id: 2, img: img.bulletback, label: "Rear Profile" },
      { id: 3, img: img.bullet350engine, label: "Engine" },
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
          padding: 60px 0;
          overflow: hidden;
          position: relative;
        }

        .adventure-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 0;
          min-height: 480px;
        }

        /* LEFT — Swiper wrapper */
        .bike-swiper-wrap {
          position: relative;
          margin-left: -80px;
          display: flex;
          align-items: center;
        }

        /* Clip overflow so off-screen slides stay hidden */
        .bike-swiper-clip {
          overflow: hidden;
          width: 110%;
          max-width: 640px;
          position: relative;
          /* padding keeps drop-shadow visible while clip hides slides */
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

        // /* Custom Swiper nav arrows */
        // .pb-swiper-btn {
        //   position: absolute;
        //   top: 50%;
        //   transform: translateY(-50%);
        //   z-index: 10;
        //   width: 40px;
        //   height: 40px;
        //   border-radius: 50%;
        //   background: #000;
        //   border: 2px solid black;
        //   color: #fff;
        //   display: flex;
        //   align-items: center;
        //   justify-content: center;
        //   cursor: pointer;
        //   transition: background 0.25s, color 0.25s;
        //   box-shadow: 0 4px 16px rgba(0,0,0,0.12);
        // }

        // .pb-swiper-btn:hover {
        //   background: #000;
        //   color: #fff;
        // }

        // .pb-swiper-prev { left: 10px; }
        // .pb-swiper-next { right: 10px; left: auto; }

        // .pb-swiper-btn svg {
        //   width: 16px;
        //   height: 16px;
        //   stroke: currentColor;
        //   fill: none;
        //   stroke-width: 2.5;
        //   stroke-linecap: round;
        //   stroke-linejoin: round;
        // }

        /* Hide default swiper arrows */
        .swiper-button-next,
        .swiper-button-prev { display: none !important; }

        /* RIGHT */
        .content-col {
          padding-left: 40px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .heading {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(36px, 3vw, 48px);
          line-height: 1.0;
          color: #1a1a1a;
          text-transform: uppercase;
          margin: 0 0 16px;
          letter-spacing: -0.01em;
        }

        .heading span { color: #e63020; }

        .description {
          font-family: 'Barlow', sans-serif;
          font-size: 14px;
          line-height: 1.7;
          color: #666;
          max-width: 360px;
          margin: 0 0 24px;
        }

        /* Thumbnails */
        .thumb-strip {
          display: flex;
          gap: 10px;
          margin-bottom: 24px;
        }

        .thumb-item {
          width: 180px;
          height: 150px;
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


     
        /* CTA */
        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #f51b24;
          color: #fff;
          font-family: 'Barlow Condensed', sans-serif;
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

        .cta-btn:hover { background: black; }

        .pb-bottom-row {
          display: flex;
          align-items: center;
          gap: 20px;
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
          .adventure-section {
            grid-template-columns: 1fr;
            padding: 0 20px;
          }
          .bike-swiper-wrap { margin-left: 0; }
          .bike-swiper-clip { width: 100%; }
          .content-col { padding-left: 0; margin-top: 24px; }
          .thumb-item { width: 100px; height: 90px; }
          .pb-swiper-prev { left: 10px; }
          .pb-swiper-next { right: 10px; }
        }
      `}</style>

      <div className="adventure-section">

        {/* LEFT — Swiper hero image */}
        <div className="bike-swiper-wrap">
          <div className="bike-swiper-clip">
            <button
              className="pb-swiper-btn pb-swiper-prev"
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous slide"
            >
              <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" /></svg>
            </button>

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

            <button
              className="pb-swiper-btn pb-swiper-next"
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next slide"
            >
              <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>
        </div>

        {/* RIGHT — content synced to slide */}
        <div className="content-col">
          <div className="content-col-inner" key={current}>
            <h2 className="heading">
              {slide.heading[0]}<br />
              {slide.heading[1]} <span>{slide.highlight}</span>
            </h2>

            <p className="description">{slide.description}</p>

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

            <div className="pb-bottom-row">
              <button className="cta-btn">Shop Now</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}