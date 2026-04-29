import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { img } from "../assets/assest";

const slides = [
  {
    id: 0,
    heading: ["Best Adventure", "Tourer"],
    highlight: "Bikes",
    description:
      "A born-again design built for going through the hills of the countryside. Discovering new roads with powerful performance and premium components for every terrain.",
    heroImg: img.bulletimg,
    thumbnails: [
      { id: 1, img: img.bulletfront, label: "Frame Detail" },
      { id: 2, img: img.bullet350engine, label: "Motor Unit" },
      { id: 3, img: img.bulletback, label: "Handlebar" },
    ],
  },
  {
    id: 0,
    heading: ["Best Adventure", "Tourer"],
    highlight: "Bikes",
    description:
      "A born-again design built for going through the hills of the countryside. Discovering new roads with powerful performance and premium components for every terrain.",
    heroImg: img.bulletimg,
    thumbnails: [
      { id: 1, img: img.bulletfront, label: "Frame Detail" },
      { id: 2, img: img.bullet350engine, label: "Motor Unit" },
      { id: 3, img: img.bulletback, label: "Handlebar" },
    ],
  },
  {
    id: 1,
    heading: ["Pure Classic", "Roadster"],
    highlight: "Spirit",
    description:
      "Timeless styling meets modern engineering. Every curve tells a story of heritage — refined for the open road, built for riders who cherish the journey as much as the destination.",
    heroImg: img.bulletimg, 
    thumbnails: [
      { id: 1, img: img.bullethandlebar, label: "Handlebars" },
      { id: 2, img: img.bulletback, label: "Rear Profile" },
      { id: 3, img: img.bullet350engine, label: "Engine" },
    ],
  },
];

const SLIDE_DURATION = 4000;

export default function PopularBikes() {
  const [current, setCurrent] = useState(0);
  const [activeThumb, setActiveThumb] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
      setActiveThumb(0);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  const goTo = (i) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
    setActiveThumb(0);
  };

  const slide = slides[current];

  const imgVariants = {
    enter: (d) => ({ x: d > 0 ? 100 : -100, opacity: 0, scale: 0.95 }),
    center: {
      x: 0, opacity: 1, scale: 1,
      transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    exit: (d) => ({
      x: d > 0 ? -80 : 80, opacity: 0, scale: 0.95,
      transition: { duration: 0.4, ease: "easeIn" },
    }),
  };

  const contentVariants = {
    enter: (d) => ({ y: d > 0 ? 50 : -50, opacity: 0 }),
    center: {
      y: 0, opacity: 1,
      transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], staggerChildren: 0.08, delayChildren: 0.1 },
    },
    exit: (d) => ({
      y: d > 0 ? -30 : 30, opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" },
    }),
  };

  const childVariants = {
    enter: { y: 24, opacity: 0 },
    center: { y: 0, opacity: 1, transition: { duration: 0.45, ease: "easeOut" } },
    exit: { y: -10, opacity: 0 },
  };

  return (
    <section className="pb-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=Barlow:wght@400;500&display=swap');

        .pb-section {
          font-family: 'Barlow Condensed', sans-serif;
          background: #fff;
          padding: 60px 0;
          overflow: hidden;
          position: relative;
        }

    

        @keyframes pbAnim {
          from { width: 0%; }
          to   { width: 100%; }
        }

        .adventure-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 0;
          min-height: 480px;
        }

        /* LEFT */
        .bike-image-wrap {
          position: relative;
          margin-left: -80px;
          display: flex;
          align-items: center;
        }

        .bike-img {
          width: 110%;
          max-width: 640px;
          object-fit: contain;
          filter: drop-shadow(0 20px 60px rgba(0,0,0,0.18));
          display: block;
        }

        /* RIGHT */
        .content-col {
          padding-left: 40px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .heading {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(36px, 5vw, 58px);
          font-weight: 800;
          line-height: 1.0;
          color: #1a1a1a;
          text-transform: uppercase;
          margin: 0 0 16px;
          letter-spacing: -0.01em;
        }

        .heading span { color: #e63020; }

        .description {
          font-family: 'Barlow', sans-serif;
          font-size: 14px;
          line-height: 1.7;
          color: #666;
          max-width: 360px;
          margin: 0 0 24px;
        }

        /* Thumbnails */
        .thumb-strip {
          display: flex;
          gap: 10px;
          margin-bottom: 24px;
        }

        .thumb-item {
          width: 180px;
          height: 150px;
          border-radius: 4px;
          overflow: hidden;
          cursor: pointer;
          position: relative;
          border: 2px solid transparent;
          transition: border-color 0.25s ease, transform 0.25s ease;
          flex-shrink: 0;
        }

      

        .thumb-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .thumb-item:hover img { transform: scale(1.08); }

        .thumb-item::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.15);
          transition: background 0.25s;
          pointer-events: none;
        }

        .thumb-item.active::after,
        .thumb-item:hover::after { background: rgba(0,0,0,0); }

        /* CTA */
        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #1a1a1a;
          color: #fff;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 14px 28px;
          border: none;
          cursor: pointer;
          width: fit-content;
          transition: background 0.25s ease;
        }

        .cta-btn:hover { background: #e63020; }

        /* Dots */
        .pb-dots {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .pb-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ccc;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: background 0.3s, transform 0.3s;
        }

        .pb-dot.active {
          background: #e63020;
          transform: scale(1.35);
        }

        .pb-bottom-row {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        @media (max-width: 768px) {
          .adventure-section {
            grid-template-columns: 1fr;
            padding: 0 20px;
          }
          .bike-image-wrap { margin-left: 0; }
          .bike-img { width: 100%; }
          .content-col { padding-left: 0; }
          .thumb-item { width: 100px; height: 90px; }
        }
      `}</style>


      <div className="adventure-section">

        {/* LEFT — Bike image */}
        <div className="bike-image-wrap">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.img
              key={`hero-${current}`}
              src={slide.heroImg}
              alt={slide.highlight}
              className="bike-img"
              custom={direction}
              variants={imgVariants}
              initial="enter"
              animate="center"
              exit="exit"
            />
          </AnimatePresence>
        </div>

        {/* RIGHT — Content */}
        <div className="content-col">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`content-${current}`}
              custom={direction}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {/* Heading */}
              <motion.h2 className="heading" variants={childVariants}>
                {slide.heading[0]}<br />
                {slide.heading[1]} <span>{slide.highlight}</span>
              </motion.h2>

              {/* Description */}
              <motion.p className="description" variants={childVariants}>
                {slide.description}
              </motion.p>

              {/* Thumbnails */}
              <motion.div className="thumb-strip" variants={childVariants}>
                {slide.thumbnails.map((t, i) => (
                  <div
                    key={t.id}
                    className={`thumb-item ${activeThumb === i ? "active" : ""}`}
                    onClick={() => setActiveThumb(i)}
                  >
                    <img src={t.img} alt={t.label} />
                  </div>
                ))}
              </motion.div>

              {/* CTA + Dots */}
              <motion.div className="pb-bottom-row" variants={childVariants}>
                <button className="cta-btn">Shop Now</button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}