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
  },
  {
    title: "INTERCEPTOR 650",
    subtitle: "Raw power meets classic British roadster soul.",
    img: img.banner2,
  },
  {
    title: "CONTINENTAL GT",
    subtitle: "The ultimate cafe racer experience for the purist.",
    img: img.banner3,
  },
];

export default function HeroSection() {
  const swiperRef = useRef(null);

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh", background: "#000", overflow: "hidden" }}>

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
            style={{ position: "relative", width: "100%", minHeight: "100vh" }}
          >
            <Image
              src={bike.img}
              alt={bike.title}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority={index === 0}
            />
            <div style={{
              position: "absolute", inset: 0,
              zIndex: 1
            }} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        onClick={() => swiperRef.current?.slidePrev()}
        style={{
          position: "absolute",
          left: 24,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 9999,
          width: 44, height: 44,
          display: "flex", alignItems: "center", justifyContent: "center",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.3)",
          background: "rgba(255,255,255,0.1)",
          color: "#fff",
          cursor: "pointer",
          transition: "background 0.3s",
        }}
        onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.25)"}
        onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
      >
        <ChevronLeft size={20} strokeWidth={2} />
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        style={{
          position: "absolute",
          right: 24,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 9999,
          width: 44, height: 44,
          display: "flex", alignItems: "center", justifyContent: "center",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.3)",
          background: "rgba(255,255,255,0.1)",
          color: "#fff",
          cursor: "pointer",
          transition: "background 0.3s",
        }}
        onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.25)"}
        onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
      >
        <ChevronRight size={20} strokeWidth={2} />
      </button>

    </div>
  );
}