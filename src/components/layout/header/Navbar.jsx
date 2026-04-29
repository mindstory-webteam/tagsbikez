"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { img } from "@/assets/assest";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setVisible(false);
        setOpen(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <style>{`
        .nav-links-desktop {
          display: flex;
          gap: 32px;
          align-items: center;
        }
        .nav-cta {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          background: transparent;
          border: none;
          padding: 4px;
        }
        .hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: all 0.3s;
        }
        .mobile-menu {
          display: none;
          position: fixed;
          left: 0;
          right: 0;
          background: rgba(10,10,10,0.98);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding: 20px 24px 28px;
          flex-direction: column;
          gap: 6px;
          z-index: 99;
          transition: top 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .mobile-menu.open {
          display: flex;
        }
        .mobile-link {
          color: #aaa;
          font-size: 15px;
          font-weight: 500;
          font-family: 'DM Sans', sans-serif;
          text-decoration: none;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          transition: color 0.2s;
        }
        .mobile-link:last-of-type { border-bottom: none; }
        .mobile-link:hover { color: #fff; }
        .mobile-cta {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 16px;
        }
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-cta { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>

      {/* Navbar */}
      <nav style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        background: "transparent",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "0 32px",
        height: 80,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        opacity: visible ? 1 : 0,
        transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease",
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", position: "relative", height: 48, width: 160 }}>
          <Image
            src={img.tagsbikezwhite}
            alt="Logo"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        {/* Desktop Links */}
        <div className="nav-links-desktop">
          {["HOME", "MODEL", "ABOUT", "SERVICE", "CONTACT US"].map(link => (
            <a key={link} href="#" style={{
              color: "#fff", fontSize: 13, fontWeight: 500,
              fontFamily: "'DM Sans', sans-serif", textDecoration: "none",
              letterSpacing: 0.3, transition: "color 0.2s",
            }}
              onMouseEnter={e => e.target.style.color = "#ccc"}
              onMouseLeave={e => e.target.style.color = "#fff"}
            >{link}</a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="nav-cta">
          <button style={{
            background: "#f51b24",
            border: "none",
            color: "#fff",
            padding: "8px 20px",
            fontSize: 13, fontWeight: 700,
            fontFamily: "'DM Sans', sans-serif",
            cursor: "pointer",
          }}>Book Now</button>
        </div>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span style={{ transform: open ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <span style={{ opacity: open ? 0 : 1 }} />
          <span style={{ transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${open ? "open" : ""}`}
        style={{ top: visible ? 64 : 0 }}
      >
        {["Home", "Bikes", "About", "Contact"].map(link => (
          <a
            key={link}
            href="#"
            className="mobile-link"
            onClick={() => setOpen(false)}
          >{link}</a>
        ))}

        <div className="mobile-cta">
          <button style={{
            border: "none", color: "#000",
            padding: "13px", borderRadius: 10,
            fontSize: 14, fontWeight: 700,
            fontFamily: "'DM Sans', sans-serif",
            cursor: "pointer", width: "100%",
          }}>Book Now</button>
        </div>
      </div>
    </>
  );
}