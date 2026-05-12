"use client";
import Image from "next/image";
import { img } from "@/assets/assest";
import AnimatedBtn from "@/components/AnimatedBtn";

export default function TestDriveSection() {
  return (
    <section style={{
      position: "relative",
      width: "100%",
      height: "600px",
      overflow: "hidden",
    }}>
      {/* Background Image */}
      <Image
        src={img.banner4}
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
        padding: "0 clamp(24px, 6vw, 40px)",
        maxWidth: 640,
      }}>
        {/* Heading */}
        <h2 style={{
          fontSize: "42px",
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
          <AnimatedBtn bgColor="red" href="https://wa.me/917594960020?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Royal%20Enfield.">
            Book a Ride
          </AnimatedBtn>
        </div>
      </div>
    </section>
  );
}