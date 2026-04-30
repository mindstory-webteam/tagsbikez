import { img } from "@/assets/assest";
import Image from "next/image";
import Link from "next/link";

const styles = {
  wrapper: {
    width: "100%",
    backgroundColor: "#f3f3f3",
    padding: "40px 24px 0px 24px",
    boxSizing: "border-box",
    overflow: "hidden",
    position: "relative",
  },
  card: {
    maxWidth: "1450px",
    margin: "0 auto",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    border: "1px solid #ebebeb",
    boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
    padding: "40px 40px 32px 40px",
    boxSizing: "border-box",
    position: "relative",
    zIndex: 1,
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "40px",
    marginBottom: "36px",
  },
  brand: {
    maxWidth: "280px",
  },
  logoRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "14px",
  },
  logoImg: {
    objectFit: "contain",
    width: "130px",
    height: "50px",
  },
  tagline: {
    fontSize: "13px",
    color: "#888888",
    lineHeight: "1.7",
    margin: 0,
  },
  navColumns: {
    display: "flex",
    flexWrap: "wrap",
    gap: "48px",
  },
  navCol: {
    minWidth: "100px",
  },
  navHeading: {
    fontSize: "13px",
    fontWeight: 700,
    color: "#111111",
    marginBottom: "14px",
    marginTop: 0,
  },
  navList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  navLink: {
    fontSize: "13px",
    color: "#888888",
    textDecoration: "none",
  },
  divider: {
    borderTop: "1px solid #f0f0f0",
    marginBottom: "20px",
  },
  bottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "12px",
  },
  copyright: {
    fontSize: "12px",
    color: "#aaaaaa",
    margin: 0,
  },
  legalLinks: {
    display: "flex",
    gap: "20px",
  },
  legalLink: {
    fontSize: "12px",
    color: "#aaaaaa",
    textDecoration: "none",
  },
  bigNameWrapper: {
    maxWidth: "1500px",
    margin: "0 auto",
    overflow: "hidden",
    lineHeight: 1,
    pointerEvents: "none",
  },
  bigName: {
    fontSize: "clamp(100px, 22vw, 260px)",
    fontWeight: 800,
    color: "#d4d4d4",
    letterSpacing: "-6px",
    margin: 0,
    userSelect: "none",
    whiteSpace: "nowrap",
    lineHeight: 1,
    // Clip so only top half of text shows
    display: "block",
    overflow: "hidden",
    height: "0.72em",
  },
};

const Footer = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        {/* Top Section */}
        <div style={styles.top}>
          {/* Brand */}
          <div style={styles.brand}>
            <div style={styles.logoRow}>
              <Image
                src={img.tagsbikezlogo}
                alt="Tagsbikez Logo"
                width={130}
                height={50}
                style={styles.logoImg}
              />
            </div>
            <p style={styles.tagline}>
              Tagsbikez helps riders discover, track, and connect with bikes 
              everything you need in one place.
            </p>
          </div>

          {/* Nav Columns */}
          <div style={styles.navColumns}>
            <div style={styles.navCol}>
              <h4 style={styles.navHeading}>Product</h4>
              <ul style={styles.navList}>
                {["Features", "Pricing", "Integrations", "Updates"].map((item) => (
                  <li key={item}>
                    <Link href="#" style={styles.navLink}>{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div style={styles.navCol}>
              <h4 style={styles.navHeading}>Resources</h4>
              <ul style={styles.navList}>
                {["Documentation", "Guides", "Blog", "Support"].map((item) => (
                  <li key={item}>
                    <Link href="#" style={styles.navLink}>{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div style={styles.navCol}>
              <h4 style={styles.navHeading}>Company</h4>
              <ul style={styles.navList}>
                {["About", "Careers", "Contact", "Partners"].map((item) => (
                  <li key={item}>
                    <Link href="#" style={styles.navLink}>{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={styles.divider} />

        {/* Bottom Bar */}
        <div style={styles.bottom}>
          <p style={styles.copyright}>© 2025 Tagsbikez. All rights reserved.</p>
          <div style={styles.legalLinks}>
            <Link href="#" style={styles.legalLink}>Terms of Service</Link>
            <Link href="#" style={styles.legalLink}>Privacy Policy</Link>
          </div>
        </div>
      </div>

      {/* Big Brand Name — top half visible, bottom half clipped */}
      <div style={styles.bigNameWrapper}>
        <p style={styles.bigName}>Tagsbikez</p>
      </div>
    </div>
  );
};

export default Footer;