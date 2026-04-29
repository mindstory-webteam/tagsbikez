import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { img } from "../assets/assest";

const bikeData = [
  {
    title: "THE CLASSIC 350",
    subtitle: "A timeless icon redefined for the modern road.",
    img: `${img.banner1}`,
  },
  {
    title: "INTERCEPTOR 650",
    subtitle: "Raw power meets classic British roadster soul.",
    img:`${img.banner2}`,
  },
  {
    title: "CONTINENTAL GT",
    subtitle: "The ultimate cafe racer experience for the purist.",
    img:`${img.banner3}`,
  },
];

export default function HeroSection() {
  const swiperRef = useRef(null);

  return (
    <div className="relative w-full h-screen bg-black">
      <style>{`
        .swiper-pagination-bullet-active { opacity: 1; transform: scale(1.2); }
      `}</style>

      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-15 h-15 flex items-center justify-center rounded-full text-white transition-all duration-300"
      >
        <ChevronLeft size={24} strokeWidth={2} />
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-15 h-15 flex items-center justify-center  rounded-full text-white transition-all duration-300"
      >
        <ChevronRight size={24} strokeWidth={2} />
      </button>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        speed={1000}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        loop={true}
        className="w-full h-full"
      >
        {bikeData.map((bike, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            {/* Background Image with Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-2000 scale-105"
              style={{ backgroundImage: `url(${bike.img})` }}
            >
              <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />
            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}