"use client";
import { useEffect, useRef } from "react";
import { ShieldCheck, Wrench, Clock } from "lucide-react";
import { img } from "@/assets/assest";

const colA = [img.Himalayan, img.royalenfieldfury, img.Himalayan2, img.royalenfield1, img.scram1];
const colB = [img.scram1, img.Himalayan2, img.royalenfield1, img.royalenfieldfury, img.Himalayan];

const features = [
  {
    icon: <ShieldCheck size={20} strokeWidth={1.6} color="#e8282b" />,
    title: "Authorised RE Dealer",
    desc: "Official Royal Enfield dealership in Thrissur certified, trusted, and factory-backed since day one.",
  },
  {
    icon: <ShieldCheck size={20} strokeWidth={1.6} color="#e8282b" />,
    title: "Genuine Parts & Service",
    desc: "Every service uses 100% genuine Royal Enfield parts. Your motorcycle deserves nothing less.",
  },
  {
    icon: <Wrench size={20} strokeWidth={1.6} color="#e8282b" />,
    title: "Expert Technicians",
    desc: "Our RE-certified technicians are trained directly at Royal Enfield service academies.",
  },
  {
    icon: <Clock size={20} strokeWidth={1.6} color="#e8282b" />,
    title: "Easy Test Rides",
    desc: "Walk in, pick your model, and ride. Hassle-free test rides available every day at our Thrissur showroom.",
  },
];

// All images merged for the horizontal mobile strip
const allImgs = [...colA, ...colB];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const colARef = useRef(null);
  const colBRef = useRef(null);
  const scrollStripRef = useRef(null);

  useEffect(() => {
    let ctx;
    const init = async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // Only run vertical parallax on large screens
        const mm = gsap.matchMedia();

        mm.add("(min-width: 1101px)", () => {
          gsap.to(colARef.current, {
            y: -140,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.4,
            },
          });
          gsap.to(colBRef.current, {
            y: 140,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.4,
            },
          });
        });

        // Auto-scroll the horizontal strip on mobile
        mm.add("(max-width: 1100px)", () => {
          const strip = scrollStripRef.current;
          if (!strip) return;

          gsap.to(strip, {
            x: () => -(strip.scrollWidth / 2),
            ease: "none",
            duration: 18,
            repeat: -1,
            modifiers: {
              x: gsap.utils.unitize(x => parseFloat(x) % (strip.scrollWidth / 2)),
            },
          });
        });
      }, sectionRef);
    };

    init();
    return () => { if (ctx) ctx.revert(); };
  }, []);

  return (
    <section ref={sectionRef} className="as-root">
      <style>{`
        .as-root {
          background: #fff;
          width: 100%;
          padding: 80px 0;
        }

        .as-container {
          max-width: 1450px;
          margin: 0 auto;
          padding: 0 20px;
          box-sizing: border-box;
        }

        /*  FEATURES GRID  */
        .as-features {
          width: 100%;
          margin-bottom: 80px;
          border-top: 1px solid #e0e0e0;
          border-left: 1px solid #e0e0e0;
        }

        .as-feat-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .as-feat-card {
          border-right: 1px solid #e0e0e0;
          border-bottom: 1px solid #e0e0e0;
          display: flex;
          flex-direction: column;
          background: #fff;
          transition: background 0.18s;
        }

        .as-feat-card:hover { background: #fafafa; }

        .as-feat-icon-wrap {
          width: 100%;
          padding: 36px 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          border-bottom: 1px solid #e0e0e0;
        }

        .as-feat-icon-circle {
          width: 56px;
          height: 56px;
          border: 1.5px solid #e8282b;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(232,40,43,0.04);
        }

        .as-feat-info {
          padding: 24px 20px;
          display: flex;
          align-items: center;
          text-align: justify;
          flex-direction: column;
        }

        .as-feat-name {
          font-size: 14px;
          font-weight: 700;
          color: #111;
          margin: 0 0 6px 0;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }

        .as-feat-desc {
          font-size: 12.5px;
          color: #666;
          line-height: 1.6;
          margin: 0;
        }

        /*  BANNER  */
        .as-banner {
          background: #1a1a1a;
          border-radius: 12px;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr 600px;
          height: 500px;
        }

        .as-banner-left {
          padding: 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .as-banner-heading {
          font-size: 42px;
          font-weight: 400;
          text-transform: uppercase;
          color: #fff;
          line-height: 1.1;
          margin-bottom: 20px;
        }

        .as-banner-sub {
          font-size: 15px;
          color: rgba(255,255,255,0.5);
          line-height: 1.7;
          margin-bottom: 32px;
          max-width: 450px;
        }

        .as-info-pills {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .as-pill {
          border: 1px solid rgba(255,255,255,0.1);
          padding: 8px 16px;
          font-size: 12px;
          color: #fff;
        }

        /*  DESKTOP image columns  */
        .as-banner-right {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          padding: 10px;
          overflow: hidden;
          background: #111;
        }

        .as-img-col {
          display: flex;
          flex-direction: column;
          gap: 10px;
          will-change: transform;
        }

        .as-img-box {
          height: 280px;
          border-radius: 6px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .as-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /*  MOBILE horizontal scroll strip  */
        .as-mobile-img-section {
          display: none;
          background: #111;
          border-radius: 0 0 12px 12px;
          overflow: hidden;
          padding: 16px 0;
        }

        .as-scroll-viewport {
          overflow: hidden;
          width: 100%;
        }

        .as-scroll-strip {
          display: flex;
          gap: 12px;
          width: max-content;
          will-change: transform;
        }

        .as-scroll-img {
          width: 200px;
          height: 140px;
          border-radius: 8px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .as-scroll-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* fade edges */
        .as-scroll-viewport::before,
        .as-scroll-viewport::after {
          content: "";
          position: absolute;
          top: 0; bottom: 0;
          width: 40px;
          z-index: 2;
          pointer-events: none;
        }
        .as-scroll-viewport { position: relative; }
        .as-scroll-viewport::before { left: 0; background: linear-gradient(to right, #111, transparent); }
        .as-scroll-viewport::after  { right: 0; background: linear-gradient(to left,  #111, transparent); }

        /*  BREAKPOINTS  */
        @media (max-width: 1100px) {
          .as-banner {
            grid-template-columns: 1fr;
            height: auto;
            border-radius: 12px 12px 0 0;
          }
          .as-banner-right { display: none; }           
          .as-mobile-img-section { display: block; }   
        }

        @media (max-width: 960px) {
          .as-feat-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 560px) {
          .as-feat-grid { grid-template-columns: 1fr; }
          .as-banner-left { padding: 36px 20px; }
          .as-scroll-img { width: 160px; height: 110px; }
        }
      `}</style>

      <div className="as-container">
        {/* Features Grid */}
        <div className="as-features">
          <div className="as-feat-grid">
            {features.map((f, i) => (
              <div className="as-feat-card" key={i}>
                <div className="as-feat-icon-wrap">
                  <div className="as-feat-icon-circle">{f.icon}</div>
                </div>
                <div className="as-feat-info">
                  <p className="as-feat-name">{f.title}</p>
                  <p className="as-feat-desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/*  BANNER  */}
        <div className="as-banner">
          <div className="as-banner-left">
            <h3 className="as-banner-heading">
              Your Trusted Royal Enfield<br />Showroom.
            </h3>
            <p className="as-banner-sub">
              TagsBikez is Thrissur's authorised Royal Enfield dealership offering the full 2024–25 lineup and expert servicing.
            </p>
            <div className="as-info-pills">
              <div className="as-pill">2024–25 Models</div>
              <div className="as-pill">Genuine Accessories</div>
              <div className="as-pill">Easy EMI</div>
            </div>
          </div>

          {/* Desktop: two parallax columns */}
          <div className="as-banner-right">
            <div className="as-img-col" ref={colARef}>
              {colA.map((src, i) => (
                <div className="as-img-box" key={`a-${i}`}>
                  <img src={src?.src || src} alt="Bike" loading="lazy" />
                </div>
              ))}
            </div>
            <div className="as-img-col" ref={colBRef} style={{ marginTop: "-120px" }}>
              {colB.map((src, i) => (
                <div className="as-img-box" key={`b-${i}`}>
                  <img src={src?.src || src} alt="Bike" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="as-mobile-img-section">
          <div className="as-scroll-viewport">
            <div className="as-scroll-strip" ref={scrollStripRef}>
              {[...allImgs, ...allImgs].map((src, i) => (
                <div className="as-scroll-img" key={i}>
                  <img src={src?.src || src} alt="Bike" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}