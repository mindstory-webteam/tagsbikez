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

export default function AboutSection() {
  const sectionRef = useRef(null);
  const colARef = useRef(null);
  const colBRef = useRef(null);

  useEffect(() => {
    let ctx;

    const init = async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
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
      }, sectionRef);
    };

    init();

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="as-root">
      <style>{`
        
        .as-root {
          background: #fff;
          width: 100%;
          overflow: hidden;
          padding-bottom: 50px;
        }

        .as-features {
          max-width: 1200px;
          margin: 0 auto;
          padding: 72px 48px 56px;
        }

        .as-feat-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }

        .as-feat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 10px;
        }

        .as-feat-icon {
          width: 52px;
          height: 52px;
          border: 1.5px solid #e8282b;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(232,40,43,0.04);
        }

        .as-feat-name {
          font-size: 14px;
          font-weight: 700;
          color: #111;
          margin: 0;
        }

        .as-feat-desc {
          font-size: 12.5px;
          color: #999;
          line-height: 1.65;
          margin: 0;
        }

        .as-banner {
          margin: 0 40px 64px;
          background: #1a1a1a;
          border-radius: 5px;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr 640px;
          height: 460px;
        }

        .as-banner-left {
          padding: 52px 48px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .as-banner-heading {
          font-size: clamp(32px, 3.2vw, 54px);
          font-weight: 900;
          text-transform: uppercase;
          color: #fff;
          line-height: 1.0;
          margin: 0 0 16px 0;
          letter-spacing: 0.01em;
        }

        .as-banner-sub {
          font-size: 13.5px;
          color: rgba(255,255,255,0.45);
          line-height: 1.75;
          margin: 0 0 28px 0;
          max-width: 400px;
        }

        .as-info-pills {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }

        .as-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          padding: 6px 14px;
          font-size: 11.5px;
          color: rgba(255,255,255,0.6);
        }

        .as-banner-right {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px;
          overflow: hidden;
          position: relative;
        }

        .as-img-col {
          display: flex;
          flex-direction: column;
          gap: 6px;
          will-change: transform;
        }

        .as-img-col-b {
          margin-top: -103px;
        }

        .as-img-box {
          height: 300px;
          overflow: hidden;
        }

        .as-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .as-img-box:hover img { transform: scale(1.06); }

        @media (max-width: 960px) {
          .as-feat-grid { grid-template-columns: 1fr 1fr; }
          .as-banner {
            grid-template-columns: 1fr;
            height: auto;
            margin: 0 16px 40px;
          }
          .as-banner-right { height: 280px; }
        }

        @media (max-width: 560px) {
          .as-feat-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/*  FEATURES  */}
      <div className="as-features">
        <div className="as-feat-grid">
          {features.map((f, i) => (
            <div className="as-feat-item" key={i}>
              <div className="as-feat-icon">{f.icon}</div>
              <p className="as-feat-name">{f.title}</p>
              <p className="as-feat-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/*  BANNER  */}
      <div className="as-banner">
        <div className="as-banner-left">
          <h3 className="as-banner-heading">
            Your Trusted<br />Royal Enfield<br />Showroom.
          </h3>
          <p className="as-banner-sub">
            TagsBikez is Thrissur's authorised Royal Enfield dealership offering the full 2024–25 lineup and expert servicing.
          </p>

          <div className="as-info-pills">
            <div className="as-pill">2024–25 Models Available</div>
            <div className="as-pill">Genuine RE Accessories</div>
            <div className="as-pill">EMI Options Available</div>
          </div>
        </div>

        <div className="as-banner-right">
          <div className="as-img-col" ref={colARef}>
            {colA.map((src, i) => (
              <div className="as-img-box" key={`a-${i}`}>
                <img src={src?.src || src} alt={`Royal Enfield ${i}`} loading="lazy" />
              </div>
            ))}
          </div>
          <div className="as-img-col as-img-col-b" ref={colBRef}>
            {colB.map((src, i) => (
              <div className="as-img-box" key={`b-${i}`}>
                <img src={src?.src || src} alt={`Royal Enfield ${i}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}