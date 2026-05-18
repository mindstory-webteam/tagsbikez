"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";
import { img } from "@/assets/assest";

const bikeData = [
  {
    title: "THE CLASSIC 350",
    subtitle: "A timeless icon redefined for the modern road.",
    img: img.banner1,
    imgSmall: img.bannerSmall1,
  },
  {
    title: "INTERCEPTOR 650",
    subtitle: "Raw power meets classic British roadster soul.",
    img: img.banner2,
    imgSmall: img.bannerSmall2,
  },
  {
    title: "CONTINENTAL GT",
    subtitle: "The ultimate cafe racer experience for the purist.",
    img: img.banner3,
    imgSmall: img.bannerSmall3,
  },
];

export default function HeroSection() {
  const swiperRef = useRef(null);

  return (
    <>
      <style>{`
        .hero-root {
          position: relative;
          width: 100%;
          height: 100vh;
          background: #000;
          overflow: hidden;
        }

        .hero-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 9999;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.3);
          background: rgba(255,255,255,0.1);
          color: #fff;
          cursor: pointer;
          transition: background 0.3s;
        }

        .hero-nav-btn:hover {
          background: rgba(255,255,255,0.25);
        }

        .hero-nav-prev { left: 24px; }
        .hero-nav-next { right: 24px; }

        .desktop-banner { display: block; height: 100%; width: 100%; position: absolute; inset: 0; }
        .mobile-banner { display: none; height: 100%; width: 100%; position: absolute; inset: 0; }

        @media (max-width: 768px) {
          .hero-root {
            /* On mobile, use 60vh so it doesn't dominate the whole screen */
            height: 60vh;
            min-height: 320px;
          }

          .desktop-banner { display: none; }
          .mobile-banner { display: block; }

          /* Smaller, closer-to-edge buttons on mobile */
          .hero-nav-btn {
            width: 36px;
            height: 36px;
          }

          .hero-nav-prev { left: 12px; }
          .hero-nav-next { right: 12px; }
        }
      `}</style>

      <div className="hero-root">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Autoplay, EffectFade]}
          effect="fade"
          speed={1000}
          pagination={false}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          style={{ width: "100%", height: "100%" }}
        >
          {bikeData.map((bike, index) => (
            <SwiperSlide
              key={index}
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
              <div className="desktop-banner">
                <Image
                  src={bike.img}
                  alt={bike.title}
                  fill
                  sizes="100vw"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  priority={index === 0}
                />
              </div>
              <div className="mobile-banner">
                <Image
                  src={bike.imgSmall}
                  alt={bike.title}
                  fill
                  sizes="100vw"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  priority={index === 0}
                />
              </div>
              {/* Dark overlay */}
              <div style={{ position: "absolute", inset: 0, zIndex: 1 }} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Prev */}
        <button
          className="hero-nav-btn hero-nav-prev"
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} strokeWidth={2} />
        </button>

        {/* Next */}
        <button
          className="hero-nav-btn hero-nav-next"
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next slide"
        >
          <ChevronRight size={20} strokeWidth={2} />
        </button>
      </div>
    </>
  );
}