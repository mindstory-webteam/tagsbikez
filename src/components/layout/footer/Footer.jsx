"use client";
import Link from "next/link";
import Image from "next/image";
import { img } from "@/assets/assest";

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "MODEL", path: "/models" },
  { name: "ABOUT", path: "/about" },
  { name: "SERVICE", path: "/service" },
  { name: "CONTACT", path: "/contact" }
];

const locations = [
  {
    area: "Patturaikkal, Thrissur",
    name: "TagsBikez Patturaikkal",
    sales: "+91 7594960033",
    service: "+91 7594960068",
    email: "info.tags.ptkl@gmail.com",
  },
  {
    area: "Kuriachira, Thrissur",
    name: "TagsBikez Kuriachira",
    sales: "+91 7594960023",
    service: "+91 7594960020",
    email: "info.tags.tcr@gmail.com",
  },
  {
    area: "Irinjalakuda",
    name: "TagsBikez Irinjalakuda",
    sales: "+91 7594951111",
    service: "+91 7594960049",
    email: "info.tags.irj@gmail.com",
  },
  {
    area: "Kodakara",
    name: "TagsBikez Kodakara",
    sales: "+91 7594960033",
    service: "Coming Soon",
    email: "info.tags.ptkl@gmail.com",
  },
  {
    area: "Vadakkencherry",
    name: "TagsBikez Vadakkencherry",
    sales: "+91 7025282011",
    service: "Coming Soon",
    email: "info.tags.vdy@gmail.com",
  },


];

const socialIcons = {
  instagram: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  ),
  whatsapp: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L0 24l6.335-1.508A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.373l-.36-.213-3.724.976.993-3.634-.234-.374A9.818 9.818 0 1112 21.818z" />
    </svg>
  ),
  youtube: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
  facebook: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.269h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: "#0f0f0f",
      color: "#fff",
      padding: "0 50px",
      boxSizing: "border-box",
    }}>
      <style>{`
        .ft-wrap {
          border: 1px solid #222;
          margin-top: 60px;
          box-sizing: border-box;
        }

        /* ── Main 3-col row ── */
        .ft-main {
          display: grid;
          grid-template-columns: 1fr 1.4fr 1fr;
        }

        .ft-col {
          padding: 52px 36px;
          box-sizing: border-box;
        }

        .ft-col:not(:last-child) {
          border-right: 1px solid #222;
        }

        /* ── Logo ── */
        .ft-tagline {
          font-size: 12px;
          color: #868686ff;
          line-height: 1.65;
          margin: 0 0 40px 0;
          max-width: 220px;
        }

        /* ── Nav ── */
        .ft-nav {
          display: flex;
          flex-direction: column;
          gap: 11px;
        }

        .ft-nav a {
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #868686ff;
          text-decoration: none;
          transition: color 0.2s;
        }

        .ft-nav a:hover { color: #fff; }

        /* ── Labels ── */
        .ft-label {
          font-size: 15px;
          color: #868686ff;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin: 0 0 8px 0;
        }

        /* ── Locations grid ── */
        .ft-locations-label {
          font-size: 15px;
          color: #868686ff;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin: 0 0 18px 0;
        }

        .ft-locations-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px 24px;
        }

        .ft-loc-card {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .ft-loc-name {
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.03em;
          margin: 0 0 2px 0;
          line-height: 1.3;
        }

        .ft-loc-area {
          font-size: 12px;
          color: #f51b24;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin: 0 0 6px 0;
        }

        .ft-loc-row {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .ft-loc-key {
          font-size: 11px;
          color: #555;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          min-width: 42px;
          flex-shrink: 0;
        }

        .ft-loc-val {
          font-size: 13px;
          color: #aaa;
          text-decoration: none;
          transition: color 0.2s;
          line-height: 1.4;
        }

        .ft-loc-val:hover { color: #fff; }

        .ft-loc-val.coming {
          color: #555;
          font-style: italic;
        }

        .ft-loc-divider {
          border: none;
          border-top: 1px solid #1e1e1e;
          margin: 2px 0 0 0;
        }

        /* ── Contact col ── */
        .ft-address {
          font-size: 15px;
          font-weight: 500;
          color: #fff;
          line-height: 1.6;
          margin: 0 0 5px 0;
        }

        .ft-hours {
          font-size: 12px;
          color: #868686ff;
          margin: 0 0 32px 0;
        }

        .ft-phone {
          font-size: 18px;
          font-weight: 600;
          color: #fff;
          margin: 0 0 28px 0;
          letter-spacing: 0.01em;
        }

        .ft-email {
          font-size: 13.5px;
          font-weight: 400;
          color: #ccc;
          text-decoration: none;
          display: block;
          margin: 0 0 40px 0;
          transition: color 0.2s;
        }

        .ft-email:hover { color: #f51b24; }

        /* ── Socials ── */
        .ft-socials {
          display: flex;
          gap: 8px;
        }

        .ft-social-btn {
          width: 38px;
          height: 38px;
          border: 1px solid #2a2a2a;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #868686ff;
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
          flex-shrink: 0;
        }

        .ft-social-btn:hover {
          border-color: #f51b24;
          color: #fff;
          background: #f51b24;
        }

        .ft-redirect {
          color: #f51b24;
          font-size: 12px;
          margin-top: 5px;
          display: inline-block;
          transition: opacity 0.2s;
        }
        .ft-redirect:hover { opacity: 0.8; }

        /* ── Bottom bar ── */
        .ft-bottom {
          border-top: 1px solid #222;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
        }

        .ft-bottom-cell {
          padding: 16px 36px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
        }

        .ft-bottom-cell:not(:last-child) {
          border-right: 1px solid #222;
        }

        .ft-bottom-dev {
          justify-content: flex-end;
        }

        .ft-bottom-link {
          font-size: 11px;
          color: #868686ff;
          text-decoration: none;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          transition: color 0.2s;
        }

        .ft-bottom-link:hover { color: #888; }

        .ft-bottom-copy {
          font-size: 11px;
          color: #868686ff;
          letter-spacing: 0.03em;
        }

        .ft-bottom-sep {
          color: #868686ff;
          margin: 0 10px;
          font-size: 11px;
        }

        /* ── Tablet ── */
        @media (max-width: 900px) {
          .ft-main {
            grid-template-columns: 1fr 1fr;
          }
          .ft-col:nth-child(2) { border-right: none; }
          .ft-col:nth-child(3) {
            border-top: 1px solid #222;
            border-right: none;
            grid-column: 1 / -1;
          }
          .ft-locations-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .ft-bottom {
            grid-template-columns: 1fr 1fr;
          }
          .ft-bottom-cell:last-child {
            border-right: none;
            grid-column: 1 / -1;
            border-top: 1px solid #222;
            justify-content: center;
          }
        }

        /* ── Mobile ── */
        @media (max-width: 600px) {
          footer { padding: 0 16px !important; }

          .ft-main { grid-template-columns: 1fr; }
          .ft-col { padding: 32px 20px; }
          .ft-col:not(:last-child) {
            border-right: none;
            border-bottom: 1px solid #222;
          }
          .ft-col:nth-child(3) {
            grid-column: unset;
            border-top: none;
          }

          .ft-locations-grid {
            grid-template-columns: 1fr 1fr;
          }

          .ft-bottom {
            grid-template-columns: 1fr;
          }
          .ft-bottom-cell {
            padding: 13px 20px;
            justify-content: center;
            text-align: center;
          }
          .ft-bottom-cell:not(:last-child) {
            border-right: none;
            border-bottom: 1px solid #222;
          }
          .ft-bottom-cell:last-child {
            grid-column: unset;
            border-top: none;
            justify-content: center;
          }
          .ft-bottom-dev {
            justify-content: center;
          }
        }
      `}</style>

      <div className="ft-wrap">

        <div className="ft-main">

          {/* Col 1 — Logo + Nav */}
          <div className="ft-col">
            <Image
              src={img.tagsbikezwhite}
              alt="Tagsbikez Logo"
              width={160}
              height={50}
              style={{ objectFit: "contain", marginBottom: "20px" }}
            />
            <p className="ft-tagline">
              Authorized Royal Enfield dealership in Thrissur, serving riders since 2010.
            </p>
            <nav className="ft-nav">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.path}>{link.name}</Link>
              ))}
            </nav>
          </div>

          {/* Col 2 — Locations */}
          <div className="ft-col">
            <p className="ft-locations-label">Our Locations</p>
            <div className="ft-locations-grid">
              {locations.map((loc) => (
                <div key={loc.area} className="ft-loc-card">
                  <p className="ft-loc-area">{loc.area}</p>
                  <p className="ft-loc-name">{loc.name}</p>
                  <hr className="ft-loc-divider" />
                  <div className="ft-loc-row">
                    <span className="ft-loc-key">Sales</span>
                    <a href={`tel:${loc.sales.replace(/\s/g, "")}`} className="ft-loc-val">{loc.sales}</a>
                  </div>
                  <div className="ft-loc-row">
                    <span className="ft-loc-key">Service</span>
                    {loc.service === "Coming Soon"
                      ? <span className="ft-loc-val coming">Coming Soon</span>
                      : <a href={`tel:${loc.service.replace(/\s/g, "")}`} className="ft-loc-val">{loc.service}</a>
                    }
                  </div>
                  <div className="ft-loc-row">
                    <span className="ft-loc-key">Email</span>
                    <a href={`mailto:${loc.email}`} className="ft-loc-val">{loc.email}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Col 3 — Contact + Socials */}
          <div className="ft-col">
            <p className="ft-label">Phone:</p>
            <p className="ft-phone">+91 7594960023</p>

            <p className="ft-label">Email:</p>
            <a href="mailto:info.tags.tcr@gmail.com" className="ft-email">
              info.tags.tcr@gmail.com
            </a>

            <div className="ft-socials">
              {[
                ["facebook", "#"],
                ["instagram", "#"],
                ["whatsapp", "#"],
                ["youtube", "#"],
              ].map(([name, href]) => (
                <a key={name} href={href} className="ft-social-btn" aria-label={name}>
                  {socialIcons[name]}
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="ft-bottom">
          <div className="ft-bottom-cell">
            <Link href="/privacy" className="ft-bottom-link">Privacy Policy</Link>
            <span className="ft-bottom-sep">·</span>
            <Link href="/terms" className="ft-bottom-link">Terms &amp; Conditions</Link>
          </div>
          <div className="ft-bottom-cell" style={{ justifyContent: "center" }}>
            <span className="ft-bottom-copy">© 2024 <span className="text-red-500">Tagsbikez.</span> All rights reserved.</span>
          </div>
          <div className="ft-bottom-cell ft-bottom-dev">
            <a href="https://mpxcode.com/">
              <span className="ft-bottom-copy">Crafted with care by <span className="text-[#95257b]">MyndPixel.</span></span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}