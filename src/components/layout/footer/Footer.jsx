"use client";
import Link from "next/link";

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "MODEL", path: "/models" },
  { name: "ABOUT", path: "/about" },
  { name: "SERVICE", path: "/service" },
  { name: "CONTACT US", path: "/contact" }
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
      fontFamily: "'DM Sans', sans-serif",
      padding: "0 40px",
      boxSizing: "border-box",
    }}>
      <style>{`
        .ft-wrap {
          border: 1px solid #222;
          margin-top:60px;
          box-sizing: border-box;
        }

        /* ── Main 3-col row ── */
        .ft-main {
          display: grid;
          
          grid-template-columns: 1fr 1fr 1fr;
        }

        /* Each column */
        .ft-col {
          padding: 52px 36px;
          box-sizing: border-box;
        }

        /* Vertical dividers between cols */
        .ft-col:not(:last-child) {
          border-right: 1px solid #222;
        }

        /* ── Bottom bar ── */
        .ft-bottom {
          border-top: 1px solid #222;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
        }

        .ft-bottom-cell {
          padding: 18px 36px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
        }

        .ft-bottom-cell:not(:last-child) {
          border-right: 1px solid #222;
        }

        /* ── Logo ── */
        .ft-logo {
          font-size: 26px;
          font-weight: 900;
          letter-spacing: 0.06em;
          color: #fff;
          text-transform: uppercase;
          margin: 0 0 14px 0;
        }

        .ft-tagline {
          font-size: 12px;
          color: #555;
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
          color: #888;
          text-decoration: none;
          transition: color 0.2s;
        }

        .ft-nav a:hover { color: #fff; }

        /* ── Labels ── */
        .ft-label {
          font-size: 11px;
          color: #444;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin: 0 0 8px 0;
        }

        .ft-address {
          font-size: 15px;
          font-weight: 500;
          color: #fff;
          line-height: 1.6;
          margin: 0 0 5px 0;
        }

        .ft-hours {
          font-size: 12px;
          color: #555;
          margin: 0 0 32px 0;
        }

        /* ── Contact col ── */
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
          color: #888;
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
          flex-shrink: 0;
        }

        .ft-social-btn:hover {
          border-color: #f51b24;
          color: #fff;
          background: #f51b24;
        }

        /* ── Bottom text ── */
        .ft-bottom-link {
          font-size: 11px;
          color: #444;
          text-decoration: none;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          transition: color 0.2s;
        }

        .ft-bottom-link:hover { color: #888; }

        .ft-bottom-copy {
          font-size: 11px;
          color: #333;
          letter-spacing: 0.03em;
        }

        .ft-bottom-dev {
          font-size: 11px;
          color: #444;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          justify-content: flex-end;
        }

        .ft-redirect {
           color: #f51b24;
           font-size: 12px;
           text-decoration: underline;
           margin-top: 5px;
           display: inline-block;
           transition: opacity 0.2s;
        }
        .ft-redirect:hover { opacity: 0.8; }

        @media (max-width: 900px) {
          .ft-main, .ft-bottom {
            grid-template-columns: 1fr 1fr;
          }
          .ft-col:nth-child(2) { border-right: none; }
          .ft-col:nth-child(3) {
            border-top: 1px solid #222;
            border-right: none;
            grid-column: 1 / -1;
          }
          .ft-bottom-cell:last-child { border-right: none; }
        }

        @media (max-width: 600px) {
          footer { padding: 0 16px !important; }
          .ft-main, .ft-bottom { grid-template-columns: 1fr; }
          .ft-col { padding: 36px 24px; }
          .ft-col:not(:last-child) {
            border-right: none;
            border-bottom: 1px solid #222;
          }
          .ft-col:nth-child(3) { grid-column: unset; border-top: none; }
          .ft-bottom-cell { padding: 14px 24px; }
          .ft-bottom-cell:not(:last-child) {
            border-right: none;
            border-bottom: 1px solid #222;
          }
        }
      `}</style>

      <div className="ft-wrap">

        {/* ── Main 3-col grid ── */}
        <div className="ft-main">

          {/* Col 1 — Brand + nav */}
          <div className="ft-col">
            <p className="ft-logo">Tagsbikez</p>
            <p className="ft-tagline">
              Authorized Royal Enfield dealership in Thrissur, serving riders since 2010.
            </p>
            <nav className="ft-nav">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.path}>{link.name}</Link>
              ))}
            </nav>
          </div>

          {/* Col 2 — Address + docs */}
          <div className="ft-col">
            <p className="ft-label">Address:</p>
            <p className="ft-address">
              Thrissur, Kerala,<br />
              NH 66, Edapally, 682024
            </p>
            <p className="ft-hours">Mon–Sat: 09:00 to 18:00</p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="ft-redirect">View on Map</a>

           <p className="ft-label" style={{ marginTop: '20px' }}>Service Center:</p>
            <p className="ft-address">
              Thrissur, Kerala,<br />
              NH 66, Edapally, 682024
            </p>
            <p className="ft-hours">Mon–Sat: 09:00 to 18:00</p>
            
          </div>

          {/* Col 3 — Phone + email + socials */}
          <div className="ft-col">
            <p className="ft-label">Phone:</p>
            <p className="ft-phone">+91 98470 00000</p>

            <p className="ft-label">Email:</p>
            <a href="mailto:info@tagsbikez.com" className="ft-email">
              info@tagsbikez.com
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

        {/* ── Bottom bar ── */}
        <div className="ft-bottom">
          <div className="ft-bottom-cell">
            <Link href="/privacy" className="ft-bottom-link">Privacy Policy</Link>
          </div>
          <div className="ft-bottom-cell">
            <Link href="/terms" className="ft-bottom-link">Terms &amp; Conditions</Link>
          </div>
          <div className="ft-bottom-cell ft-bottom-dev">
            <span className="ft-bottom-copy">© 2024 Tagsbikez. All rights reserved.</span>
          </div>
        </div>

      </div>

    </footer>
  );
}