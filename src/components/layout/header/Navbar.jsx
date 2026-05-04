"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { img } from "@/assets/assest";

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "MODEL", path: "/models" },
  { name: "ABOUT", path: "/about" },
  { name: "SERVICE", path: "/service" },
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

  // Lock body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

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
          z-index: 201;
          position: relative;
        }
        .hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: all 0.3s;
        }

        /* Overlay */
        .sidebar-overlay {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          z-index: 199;
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .sidebar-overlay.open {
          display: block;
          opacity: 1;
        }

        /* Sidebar */
        .sidebar {
          position: fixed;
          top: 0;
          right: 0;
          height: 100dvh;
          width: 100vw;
          background: #0a0a0a;
          z-index: 10000;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          padding: 0;
          border-left: 1px solid rgba(255,255,255,0.06);
          overflow-y: auto;
        }
        .sidebar.open {
          transform: translateX(0);
        }

        .sidebar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 32px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .sidebar-close {
          background: transparent;
          border: none;
          color: #fff;
          cursor: pointer;
          padding: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 0;
          flex: 1;
          padding: 20px 32px;
        }
        .sidebar-link {
          color: rgba(255,255,255,0.5);
          font-size: 28px;
          font-weight: 700;
          text-decoration: none;
          padding: 18px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          letter-spacing: 1px;
          transition: color 0.2s, padding-left 0.2s;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .sidebar-link:last-of-type {
          border-bottom: none;
        }
        .sidebar-link:hover {
          color: #fff;
          padding-left: 8px;
        }
        .sidebar-link:hover .arrow {
          opacity: 1;
          transform: translateX(0);
        }
        .arrow {
          color: #f51b24;
          font-size: 20px;
          opacity: 0;
          transform: translateX(-8px);
          transition: opacity 0.2s, transform 0.2s;
        }
        .sidebar-footer {
          margin: auto 0 0;
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .sidebar-book-btn {
          background: #f51b24;
          border: none;
          color: #fff;
          padding: 16px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          letter-spacing: 1px;
          width: 100%;
          transition: background 0.2s;
        }
        .sidebar-book-btn:hover {
          background: #d4151d;
        }

        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-cta { display: none !important; }
          .hamburger { display: flex !important; }
        }

        @media (min-width: 769px) {
          .sidebar { display: none !important; }
          .sidebar-overlay { display: none !important; }
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
        <Link href="/" style={{ position: "relative", height: 48, width: 160, zIndex: 201 }}>
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
          <button style={{
            background: "#f51b24",
            border: "none",
            color: "#fff",
            padding: "8px 20px",
            fontSize: 13, fontWeight: 700,
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

      {/* Overlay */}
      <div
        className={`sidebar-overlay ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
        style={{ zIndex: 9999 }}
      />

      {/* Right Sidebar */}
      <div className={`sidebar ${open ? "open" : ""}`}>
        <div className="sidebar-header">
          <div style={{ position: "relative", height: 32, width: 120 }}>
            <Image
              src={img.tagsbikezwhite}
              alt="Logo"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <button className="sidebar-close" onClick={() => setOpen(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
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
              <span className="arrow">→</span>
            </Link>
          ))}
        </nav>
        <div className="sidebar-footer">
          <button className="sidebar-book-btn">BOOK NOW</button>
        </div>
      </div>
    </>
  );
}