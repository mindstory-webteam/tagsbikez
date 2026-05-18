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
        /* ── Sidebar & Overlay ── */
        .sidebar-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(4px);
          z-index: 99998;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.35s ease;
        }
        .sidebar-overlay.open {
          opacity: 1;
          pointer-events: auto;
        }

        .mobile-sidebar {
          position: fixed;
          top: 0;
          right: 0;
          width: 300px;
          height: 100vh;
          height: 100dvh;
          background: #111111;
          z-index: 99999;
          padding: 30px 24px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-left: 1px solid rgba(255, 255, 255, 0.08);
        }
        .mobile-sidebar.open {
          transform: translateX(0);
        }

        .sidebar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .sidebar-close {
          background: transparent;
          border: none;
          color: #888;
          font-size: 20px;
          cursor: pointer;
          transition: color 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
        }
        .sidebar-close:hover {
          color: #fff;
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .sidebar-link {
          color: #aaa;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-decoration: none;
          padding: 14px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          transition: color 0.2s, padding-left 0.2s;
        }
        .sidebar-link:hover {
          color: #fff;
          padding-left: 6px;
        }

        .sidebar-cta {
          margin-top: auto;
          padding-top: 20px;
          display: flex;
          justify-content: center;
          width: 100%;
        }

        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-cta { display: none !important; }
          .hamburger { display: flex !important; }
        }

        @media (min-width: 769px) {
          .mobile-sidebar, .sidebar-overlay {
            display: none !important;
          }
        }

        body.hide-navbar-force nav,
        body.hide-navbar-force .mobile-sidebar,
        body.hide-navbar-force .sidebar-overlay {
          transform: translateX(100%) !important;
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

      {/* Sidebar Overlay */}
      <div 
        className={`sidebar-overlay ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar (Mobile Menu) */}
      <div className={`mobile-sidebar ${open ? "open" : ""}`}>
        {/* Sidebar Header with Logo and Close Icon */}
        <div className="sidebar-header">
          <Image
            src={img.tagsbikezwhite}
            alt="Logo"
            width={120}
            height={36}
            style={{ objectFit: "contain" }}
          />
          <button 
            className="sidebar-close"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="sidebar-nav">
          {navLinks.map(link => (
            <Link
              key={link.name}
              href={link.path}
              className="sidebar-link"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="sidebar-cta flex justify-center">
          <RedAnimatedBtn bgColor="red" onClick={() => { setOpen(false); window.location.href='/contact'; }}>
            GET A QUOTE
          </RedAnimatedBtn>
        </div>
      </div>
    </>
  );
}