"use client";
import { useState, useEffect, useRef } from "react";

const bikes = [
  {
    id: 1,
    name: "Royal Enfield",
    model: "Meteor 350",
    img: "https://images.pexels.com/photos/31229571/pexels-photo-31229571.jpeg",
  },
  {
    id: 2,
    name: "KTM",
    model: "Duke 390",
    img: "https://images.pexels.com/photos/31229571/pexels-photo-31229571.jpeg",
  },
  {
    id: 3,
    name: "Bajaj",
    model: "Pulsar NS200",
    img: "https://images.pexels.com/photos/31229571/pexels-photo-31229571.jpeg",
  },
  {
    id: 4,
    name: "Honda",
    model: "CB Hornet 2.0",
    img: "https://images.pexels.com/photos/31229571/pexels-photo-31229571.jpeg",
  },
  {
    id: 5,
    name: "Yamaha",
    model: "MT-15 V2",
    img: "https://images.pexels.com/photos/31229571/pexels-photo-31229571.jpeg",
  },
  {
    id: 6,
    name: "Suzuki",
    model: "Gixxer SF 250",
    img: "https://images.pexels.com/photos/31229571/pexels-photo-31229571.jpeg",
  },
];

const FALLBACK = "https://placehold.co/400x220/f0f0f0/999?text=Bike";
const VISIBLE = 3.4;
const AUTO_INTERVAL = 2500;

const CLONE_COUNT = Math.ceil(VISIBLE) + 1;
const clonedBikes = [
  ...bikes.slice(-CLONE_COUNT).map((b, i) => ({ ...b, id: `pre-${i}` })),
  ...bikes,
  ...bikes.slice(0, CLONE_COUNT).map((b, i) => ({ ...b, id: `post-${i}` })),
];
const OFFSET = CLONE_COUNT; 

const BikeSectionSwiper = () => {
  const [index, setIndex] = useState(OFFSET);
  const [animated, setAnimated] = useState(true);
  const timerRef = useRef(null);
  const trackRef = useRef(null);

  const jumpTo = (i) => {
    setAnimated(false);
    setIndex(i);
  };

  const goNext = () => {
    setAnimated(true);
    setIndex((i) => i + 1);
  };
  const goPrev = () => {
    setAnimated(true);
    setIndex((i) => i - 1);
  };

  const handleTransitionEnd = () => {
    const lastReal = OFFSET + bikes.length - 1;
    const firstCloneEnd = OFFSET + bikes.length + CLONE_COUNT - 1;

    setIndex((i) => {
      if (i >= OFFSET + bikes.length) {
        setTimeout(() => jumpTo(OFFSET + (i - (OFFSET + bikes.length))), 0);
        return i;
      }
      if (i < OFFSET) {
        setTimeout(() => jumpTo(OFFSET + bikes.length + i - OFFSET), 0);
        return i;
      }
      return i;
    });
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(goNext, AUTO_INTERVAL);
  };

  useEffect(() => {
    timerRef.current = setInterval(goNext, AUTO_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, []);

  const handlePrev = () => { goPrev(); resetTimer(); };
  const handleNext = () => { goNext(); resetTimer(); };

  return (
    <>
      <style>{`
        .bs-section {
          background: #fff;
          padding: 70px 40px;
          box-sizing: border-box;
          width: 100%;
        }

        .bs-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .bs-title {
          font-size: clamp(28px, 3.5vw, 42px);
          font-weight: 500;
          color: #111;
          margin: 0;
          letter-spacing: -0.5px;
          line-height: 1;
        }

        .bs-nav {
          display: flex;
          gap: 6px;
        }

        .bs-nav-btn {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 1px solid #ccc;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.15s, border-color 0.15s;
          padding: 0;
        }

        .bs-nav-btn:hover svg path { stroke: #fff; }
        .bs-nav-btn:hover {
          background: #111;
          border-color: #111;
        }

        .bs-nav-btn svg path {
          stroke: #444;
          transition: stroke 0.15s;
        }

        .bs-track-outer {
          overflow: hidden;
          width: 100%;
        }

        .bs-track {
          display: flex;
        }

        .bs-track.animated {
          transition: transform 0.48s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .bs-card {
          flex: 0 0 calc(100% / 3.4);
          padding-right: 20px;
          box-sizing: border-box;
        }

        .bs-img-wrap {
          width: 100%;
          aspect-ratio: 15/9;
          overflow: hidden;
          background: #efefef;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bs-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.3s ease;
        }

        .bs-info-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding-top: 10px;
          border-top: 1px solid #e8e8e8;
        }

        .bs-info { flex: 1; }

        .bs-name {
          font-size: 20px;
          font-weight: 500;
          color: #111;
          margin: 0 0 2px;
        }

        .bs-model {
          font-size: 14.5px;
          color: red;
          margin: 0;
          font-weight: 400;
        }

        .bs-icons {
          display: flex;
          gap: 7px;
          margin-top: 8px;
        }

        .bs-icon-btn {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: 1px solid #e0e0e0;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: border-color 0.15s, background 0.15s;
          padding: 0;
        }

        .bs-icon-btn:hover { border-color: #111; background: #111; }
        .bs-icon-btn:hover svg path { stroke: #fff; }
        .bs-icon-btn svg path { stroke: #666; transition: stroke 0.15s; }

        @media (max-width: 768px) {
          .bs-section { padding: 24px 20px 32px; }
          .bs-card { flex: 0 0 calc(100% / 2); }
        }

        @media (max-width: 480px) {
          .bs-card { flex: 0 0 calc(100% / 1.2); }
        }
      `}</style>

      <div className="bs-section">
        {/* Header */}
        <div className="bs-header">
          <h2 className="bs-title">Our Models</h2>
          <div className="bs-nav">
            <button className="bs-nav-btn" onClick={handlePrev} aria-label="Previous">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="bs-nav-btn" onClick={handleNext} aria-label="Next">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Track */}
        <div className="bs-track-outer">
          <div
            ref={trackRef}
            className={`bs-track ${animated ? "animated" : ""}`}
            style={{ transform: `translateX(calc(-${index} * (100% / ${VISIBLE})))` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {clonedBikes.map((bike, i) => (
              <div className="bs-card" key={`${bike.id}-${i}`}>
                <div className="bs-img-wrap">
                  <img
                    className="bs-img"
                    src={bike.img}
                    alt={`${bike.name} ${bike.model}`}
                    onError={(e) => { e.target.src = FALLBACK; }}
                  />
                </div>
                <div className="bs-info-row">
                  <div className="bs-info">
                    <p className="bs-name">{bike.name}</p>
                    <p className="bs-model">{bike.model}</p>
                  </div>
                  <div className="bs-icons">
                    <button className="bs-icon-btn" aria-label="Enquire">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M22 6l-10 7L2 6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <button className="bs-icon-btn" aria-label="Call">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.04 2.18 2 2 0 012.03 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BikeSectionSwiper;