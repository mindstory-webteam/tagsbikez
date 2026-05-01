"use client";
import Image from "next/image";
import { img } from "@/assets/assest";

export default function TestDriveSection() {
  return (
    <section style={{
      position: "relative",
      width: "100%",
      height: "520px",
      overflow: "hidden",
    }}>
      {/* Background Image */}
      <Image
        src={img.banner1}
        alt="Test Drive"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        priority
      />

      {/* Dark Overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to right, rgba(0,0,0,0.52) 40%, rgba(0,0,0,0.3) 100%)",
        zIndex: 1,
      }} />

      {/* Content */}
      <div style={{
        position: "absolute",
        inset: 0,
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 clamp(24px, 6vw, 80px)",
        maxWidth: 640,
      }}>
        {/* Heading */}
        <h2 style={{
          fontSize: "clamp(28px, 4.5vw, 52px)",
          color: "#fff",
          lineHeight: 1.15,
          margin: "0 0 16px 0",
          letterSpacing: "-0.5px",
        }}>
          Free Test Ride <br />Feel the Thrill First
        </h2>

        {/* Subtitle */}
        <p style={{
          fontSize: "clamp(13px, 1.5vw, 15px)",
          color: "rgba(255,255,255,0.6)",
          margin: "0 0 32px 0",
          lineHeight: 1.6,
          maxWidth: 420,
        }}>
          Book a free test ride today and experience the power,
          comfort, and style before you commit. No pressure  just pure ride.
        </p>

        {/* CTA Button */}
        <div>
          <button
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "#f51b24",
              border: "none",
              color: "#fff",
              padding: "14px 28px",
              fontSize: 15,
              fontWeight: 700,
              fontFamily: "'DM Sans', sans-serif",
              cursor: "pointer",
              borderRadius: 4,
              letterSpacing: 0.3,
              transition: "background 0.3s, transform 0.2s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "#d0151d";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "#f51b24";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Book a Ride
          </button>
        </div>
      </div>
    </section>
  );
}