"use client";

import { img } from "@/assets/assest";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Model", href: "/#model" },
  { label: "About", href: "/#about" },
  { label: "Service", href: "/#service" },
  { label: "Contact Us", href: "/#contact" },
];

const COMPANY_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Careers", href: "#" },
  { label: "Contact us", href: "/#contact" },
];

const SUPPORT_LINKS = [
  { label: "Return policy", href: "#" },
  { label: "Terms of use", href: "#" },
  { label: "Discrimination policy", href: "#" },
];

function NavCol({ title, links }) {
  return (
    <div>
      <h4 style={styles.colTitle}>{title}</h4>
      <ul style={styles.colList}>
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              style={styles.colLink}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#4040c8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#444")}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ href, label, pathD }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: "flex", alignItems: "center" }}
    >
      <svg
        viewBox="0 0 24 24"
        width="15"
        height="15"
        style={{ fill: "#555", transition: "fill .2s" }}
        onMouseEnter={(e) => (e.currentTarget.style.fill = "#4040c8")}
        onMouseLeave={(e) => (e.currentTarget.style.fill = "#555")}
      >
        <path d={pathD} />
      </svg>
    </a>
  );
}

export default function Footer() {
  return (
    <footer style={styles.wrapper}>

      {/* Background image */}
      <Image
        src={img.banner1}
        alt=""
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center" }}
      />

      {/* Dark overlay so card stays readable */}
      <div style={styles.overlay} />

      {/* Footer card */}
      <div style={styles.card}>

        {/* Top: logo + nav columns */}
        <div style={styles.cardTop}>

          <Link href="/" style={styles.logoWrapper}>
            <Image
              src={img.tagsbikezlogo}
              alt="Tagsbikez — Royal Enfield"
              width={140}
              height={50}
              style={{ objectFit: "contain" }}
              priority
            />
          </Link>

          <div style={styles.cols}>
            <NavCol title="Quick Links" links={QUICK_LINKS} />
            <NavCol title="Company" links={COMPANY_LINKS} />
            <NavCol title="Support" links={SUPPORT_LINKS} />
          </div>
        </div>

        {/* Bottom: copyright + socials */}
        <div style={styles.cardBottom}>
          <span style={styles.copyright}>© 2026 TAGSBIKEZ.</span>

          <div style={styles.socials}>
            <SocialIcon
              href="https://youtube.com"
              label="YouTube"
              pathD="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.75 15.5v-7l6.25 3.5-6.25 3.5z"
            />
            <SocialIcon
              href="https://twitter.com"
              label="X / Twitter"
              pathD="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
            />
            <SocialIcon
              href="https://instagram.com"
              label="Instagram"
              pathD="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
            />
            <SocialIcon
              href="https://facebook.com"
              label="Facebook"
              pathD="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── Styles ────────────────────────────────────────────────────────────

const styles = {
  wrapper: {
    position: "relative",
    width: "100%",
    minHeight: 260,
    overflow: "hidden",
    // fallback color while image loads
    background: "#0a0a0a",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    // adjust opacity to taste — 0.55 gives a readable but visible BG
    background: "rgba(0, 0, 0, 0.55)",
    zIndex: 1,
  },
  card: {
    position: "relative",
    zIndex: 10,
    margin: "64px 20px 20px",
    background: "rgba(255,255,255,0.72)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    borderRadius: 24,
    padding: "28px 36px 22px",
    display: "flex",
    flexDirection: "column",
    gap: 24,
  },
  cardTop: {
    display: "flex",
    alignItems: "flex-start",
    gap: 40,
  },
  logoWrapper: {
    display: "flex",
    alignItems: "center",
    marginRight: "auto",
    flexShrink: 0,
    textDecoration: "none",
  },
  cols: {
    display: "flex",
    gap: 56,
  },
  colTitle: {
    fontSize: 13,
    fontWeight: 700,
    color: "#1a1a2e",
    margin: "0 0 10px 0",
  },
  colList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  colLink: {
    fontSize: 12.5,
    color: "#444",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: 5,
    transition: "color 0.2s",
    cursor: "pointer",
  },
  cardBottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTop: "1px solid rgba(0,0,0,0.07)",
    paddingTop: 14,
  },
  copyright: {
    fontSize: 10.5,
    color: "#999",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
  },
  socials: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
};