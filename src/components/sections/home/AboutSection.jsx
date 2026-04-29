"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const stats = [
  { value: "10+", label: "Years of Excellence in Bikes & Rentals" },
  { value: "500+", label: "Bikes Successfully Rented" },
  { value: "98%", label: "Our Client Retention Rate" },
  { value: "15+", label: "Cities with Our Service" },
];

const partners = ["Royal Enfield", "Honda", "Bajaj", "TVS", "Yamaha", "KTM"];

export default function AboutSection() {
  return (
    <section style={{
      background: "#fff",
      padding: "120px 20px",
    }}>
      <div style={{
        maxWidth: 1300,
        margin: "0 auto",
        display: "flex",
        alignItems: "flex-start",
        gap: 320,
        flexWrap: "wrap",
      }}>

        {/* Left — About Text + Partner Swiper */}
        <div style={{ flex: "0 0 300px", minWidth: 460 }}>
          <h2 style={{
            fontSize: "clamp(36px, 3vw, 48px)",
            color: "#111",
            margin: "0 0 16px 0",
            letterSpacing: "-0.3px",
          }}>
            About Us
          </h2>
          <p style={{
            fontSize: 15,
            color: "#555",
            lineHeight: 1.7,
            margin: "0 0 48px 0",
          }}>
            At TagsBikez, we believe riding is more than just transport
            it's about freedom, thrill, and experiences that stay with you forever.
          </p>

          {/* Partner Swiper */}
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 1800, disableOnInteraction: false }}
            loop={true}
            slidesPerView={3}
            spaceBetween={24}
            allowTouchMove={false}
            style={{ width: "100%" }}
          >
            {partners.map((name) => (
              <SwiperSlide key={name}>
                <span style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#999",
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}>
                  {name}
                </span>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right — Stats Grid */}
        <div style={{
          flex: 1,
          minWidth: 280,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          rowGap: 48,
          columnGap: 40,
        }}>
          {stats.map((stat) => (
            <div key={stat.value}>
              <p style={{
                fontSize: "clamp(36px, 5vw, 52px)",
                fontWeight: 800,
                color: "#111",
                margin: "0 0 8px 0",
                lineHeight: 1,
                letterSpacing: "-1px",
              }}>
                {stat.value}
              </p>
              <p style={{
                fontSize: 14,
                color: "#777",
                lineHeight: 1.5,
                margin: 0,
                maxWidth: 160,
              }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 500px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}