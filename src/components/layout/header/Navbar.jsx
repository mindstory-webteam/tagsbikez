"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { img } from "@/assets/assest";
import RedAnimatedBtn from "@/components/AnimatedBtn";
import AnimatedBtn from "@/components/AnimatedBtn";

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "MODEL", path: "/models" },
  { name: "ABOUT", path: "/about" },
  { name: "GALLERY", path: "/gallery" },
  { name: "CONTACT", path: "/contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setVisible(true);
        setScrolled(false);
      } else if (currentScrollY > lastScrollY) {
        setVisible(false);
        setScrolled(true);
        setOpen(false);
      } else {
        setVisible(true);
        setScrolled(true);
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
        body.hide-navbar-force nav,
        body.hide-navbar-force .mobile-menu {
          transform: translateY(-100%) !important;
          opacity: 0 !important;
          pointer-events: none !important;
          display: none !important;
        }
      `}</style>

      {/* Navbar */}
      <nav style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        background: scrolled ? "#111111" : "transparent",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid rgba(255,255,255,0.06)",
        padding: "0 32px",
        height: 80,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        opacity: visible ? 1 : 0,
        transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease, background 0.3s ease",
      }}>
        {/* Logo */}
        <Link href="/" style={{ position: "relative", height: 48, width: 160 }}>
          <Image
            src={img.tagsbikezwhite}
            alt="Logo"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="nav-links-desktop">
          {navLinks.map(link => (
            <Link key={link.name} href={link.path} style={{
              color: "#fff", fontSize: 13, fontWeight: 500,
              textDecoration: "none",
              letterSpacing: 0.3, transition: "color 0.2s",
            }}
              onMouseEnter={e => e.target.style.color = "#f51b24"}
              onMouseLeave={e => e.target.style.color = "#fff"}
            >{link.name}</Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="nav-cta">
         <AnimatedBtn bgColor="red" onClick={() => console.log("clicked")}>Book Now</AnimatedBtn>

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
        {navLinks.map(link => (
          <Link
            key={link.name}
            href={link.path}
            className="mobile-link"
            onClick={() => setOpen(false)}
          >{link.name}</Link>
        ))}
        <div className="mobile-cta flex justify-center">
          <RedAnimatedBtn bgColor="red" onClick={() => { setOpen(false); window.location.href='/contact'; }}>
            GET A QUOTE
          </RedAnimatedBtn>
        </div>
      </div>
    </>
  );
}