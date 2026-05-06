"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

const events = [
  {
    id: 1,
    title: "Student work on display at Khazar University Art Gallery Exhibition",
    date: new Date(2026, 11, 5),
    image: "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=600",
    infoUrl: "#",
  },
  {
    id: 2,
    title: "Musical performances by students along with many guest performers",
    date: new Date(2026, 11, 7),
    image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600",
    infoUrl: "#",
  },
  {
    id: 3,
    title: 'History and Evolution of Typography lecture with Rizvan Baghirli',
    date: new Date(2026, 11, 15),
    image: "https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=600",
    infoUrl: "#",
  },
  {
    id: 4,
    title: "Inter-Uni Football Tournament: Khazar vs ADU",
    date: new Date(2026, 11, 28),
    image: "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=600",
    infoUrl: "#",
  },
  {
    id: 5,
    title: "Royal Enfield Riders Meetup at City Square",
    date: new Date(2026, 11, 28),
    image: "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=600",
    infoUrl: "#",
  },
  {
    id: 6,
    title: "Photography Walk Street Culture Edition",
    date: new Date(2026, 11, 28),
    image: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600",
    infoUrl: "#",
  },
  {
    id: 7,
    title: "Live Jazz Night at the Open Courtyard",
    date: new Date(2026, 11, 28),
    image: "https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=600",
    infoUrl: "#",
  },
  {
    id: 8,
    title: "Live Jazz Night at the Open Courtyard",
    date: new Date(2026, 11, 28),
    image: "https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=600",
    infoUrl: "#",
  },
];

function formatParts(date) {
  return {
    day: date.getDate().toString(),
    month: date.toLocaleString("en-US", { month: "short" }),
    weekday: date.toLocaleString("en-US", { weekday: "long" }),
    year: date.getFullYear().toString(),
  };
}

const sorted = [...events].sort((a, b) => a.date - b.date);

// Cards per page based on breakpoint
function getCardsPerPage(width) {
  if (width <= 600) return 1;
  if (width <= 1024) return 2;
  return 4;
}

function EventCard({ event }) {
  const { day, month, weekday, year } = formatParts(event.date);
  return (
    <div className="ev-card">
      <div className="ev-top">
        <p className="ev-title">{event.title}</p>
        <div className="ev-date">
          <span className="ev-day">{day}</span>
          <div className="ev-date-meta">
            <span className="ev-month">{month}</span>
            <span className="ev-weekday">{weekday}</span>
            <span className="ev-year">{year}</span>
          </div>
        </div>
      </div>
      <div className="ev-bottom">
        <div className="ev-img-wrap">
          <img src={event.image} alt={event.title} className="ev-img" />
        </div>
        <div className="ev-actions">
          <Link href={event.infoUrl} className="ev-btn">More info</Link>
        </div>
      </div>
    </div>
  );
}

export default function UpcomingEvents() {
  const outerRef = useRef(null);
  const [page, setPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(4);

  const totalPages = Math.ceil(sorted.length / cardsPerPage);
  const canPrev = page > 0;
  const canNext = page < totalPages - 1;

  // Recalculate cardsPerPage on resize; clamp page so it stays valid
  const handleResize = useCallback(() => {
    const w = outerRef.current?.offsetWidth ?? window.innerWidth;
    const cpp = getCardsPerPage(w);
    setCardsPerPage(cpp);
    setPage((p) => {
      const newTotal = Math.ceil(sorted.length / cpp);
      return Math.min(p, Math.max(0, newTotal - 1));
    });
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  // translateX shift: each "page" = cardsPerPage cards = (100% / cardsPerPage * cardsPerPage) = 100% of the outer
  // Since each card is (100% / cardsPerPage) of the outer, one page = outer width = 100%
  const shift = page * 100;

  return (
    <>
      <style>{`
        .ev-section {
          background: #fff;
          padding: 0 0 80px 0;
        }

        .ev-inner {
          max-width: 1430px;
          margin: 0 auto;
        }

        .ev-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 0 0 32px;
        }

        .ev-heading {
          font-size: 42px;
          font-weight: 400;
          color: #111;
          margin: 0;
        }

        .ev-nav {
          display: flex;
          gap: 8px;
        }

        .ev-nav-btn {
          width: 40px;
          height: 40px;
          border: 1px solid #e0e0e0;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
          color: #111;
          flex-shrink: 0;
        }

        .ev-nav-btn:hover:not(:disabled) {
          background: #111;
          border-color: #111;
          color: #fff;
        }

        .ev-nav-btn:disabled {
          opacity: 0.3;
          cursor: default;
        }

        .ev-nav-btn svg {
          width: 16px;
          height: 16px;
          stroke: currentColor;
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .ev-track-outer {
          border: 1px solid #e0e0e0;
          overflow: hidden;
        }

        .ev-track {
          display: flex;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Card width is driven by the CSS var set inline on .ev-track-outer */
        .ev-card {
          flex: 0 0 var(--card-width, 25%);
          min-width: 0;
          display: flex;
          flex-direction: column;
          border-right: 1px solid #e0e0e0;
          box-sizing: border-box;
        }

        .ev-card:last-child { border-right: none; }

        .ev-top {
          padding: 24px 20px 20px;
          display: flex;
          flex-direction: column;
          min-height: 200px;
          border-bottom: 1px solid #e0e0e0;
          box-sizing: border-box;
        }

        .ev-title {
          font-size: 13px;
          font-weight: 400;
          color: #111;
          line-height: 1.5;
          margin: 0 0 auto;
          padding-bottom: 20px;
        }

        .ev-date {
          display: flex;
          align-items: flex-end;
          gap: 6px;
        }

        .ev-day {
          font-size: 52px;
          font-weight: 300;
          color: #111;
          line-height: 1;
          letter-spacing: -2px;
        }

        .ev-date-meta {
          display: flex;
          flex-direction: column;
          padding-bottom: 4px;
          gap: 1px;
        }

        .ev-month {
          font-size: 13px;
          font-weight: 600;
          color: #111;
          line-height: 1.2;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .ev-weekday {
          font-size: 11px;
          font-weight: 400;
          color: #888;
          line-height: 1.3;
        }

        .ev-year {
          font-size: 11px;
          font-weight: 400;
          color: #bbb;
          line-height: 1.3;
        }

        .ev-bottom { display: flex; flex-direction: column; }

        .ev-img-wrap {
          width: 100%;
          height: 160px;
          overflow: hidden;
        }

        .ev-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
          pointer-events: none;
          user-select: none;
          -webkit-user-drag: none;
        }

        .ev-card:hover .ev-img { transform: scale(1.04); }

        .ev-actions {
          display: flex;
          border-top: 1px solid #e0e0e0;
        }

        .ev-btn {
          flex: 1;
          padding: 12px 8px;
          font-size: 12px;
          font-weight: 500;
          color: #111;
          text-align: center;
          text-decoration: none;
          background: transparent;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
        }

        .ev-btn:hover { background: #111; color: #fff; }

        @media (max-width: 600px) {
          .ev-section { padding: 24px 16px 60px; }
          .ev-heading { font-size: 24px; }
          .ev-top { min-height: 140px; padding: 16px 14px 14px; }
          .ev-day { font-size: 36px; }
          .ev-img-wrap { height: 200px; }
          .ev-nav-btn { width: 36px; height: 36px; }
          .ev-header { margin: 0 0 20px; }
        }
      `}</style>

      <section className="ev-section">
        <div className="ev-inner">
          <div className="ev-header">
            <h2 className="ev-heading">Upcoming events</h2>
            <nav className="ev-nav" aria-label="Events navigation">
              <button
                className="ev-nav-btn"
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={!canPrev}
                aria-label="Previous page"
              >
                <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" /></svg>
              </button>
              <button
                className="ev-nav-btn"
                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={!canNext}
                aria-label="Next page"
              >
                <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
            </nav>
          </div>

          <div
            className="ev-track-outer"
            ref={outerRef}
            style={{ "--card-width": `${100 / cardsPerPage}%` }}
          >
            <div
              className="ev-track"
              style={{ transform: `translateX(-${shift}%)` }}
            >
              {sorted.map((ev) => (
                <EventCard key={ev.id} event={ev} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}