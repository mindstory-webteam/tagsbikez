"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { img } from "@/assets/assest";

const events = [
  {
    id: 1,
    title: "Student work on display at Khazar University Art Gallery Exhibition",
    startingPoint: "Thrissur",
    destination: "Kochi",
    startdate: new Date(2026, 11, 5),
    enddate: new Date(2026, 11, 15),
    image: img.event1,
    infoUrl: "#",
  },
  {
    id: 2,
    title: "Musical performances by students along with many guest performers",
    startingPoint: "Thrissur",
    destination: "Palakkad",
    startdate: new Date(2026, 11, 7),
    enddate: new Date(2026, 11, 17),
    image:img.event2,
    infoUrl: "#",
  },
  {
    id: 3,
    title: 'History and Evolution of Typography lecture with Rizvan Baghirli',
    startingPoint: "Thrissur",
    destination: "Wayanad",
    startdate: new Date(2026, 11, 15),
    enddate: new Date(2026, 11, 25),
    image: img.event3,
    infoUrl: "#",
  },
  {
    id: 4,
    title: "Inter-Uni Football Tournament: Khazar vs ADU",
    startingPoint: "Thrissur",
    destination: "Munnar",
    startdate: new Date(2026, 11, 28),
    enddate: new Date(2026, 11, 29),
    image: img.event4,
    infoUrl: "#",
  },
  {
    id: 5,
    title: "Royal Enfield Riders Meetup at City Square",
    startingPoint: "Thrissur",
    destination: "Calicut",
    startdate: new Date(2026, 11, 28),
    enddate: new Date(2026, 11, 29),
    image: img.event5,
    infoUrl: "#",
  },
  {
    id: 6,
    title: "Photography Walk Street Culture Edition",
    startingPoint: "Thrissur",
    destination: "Kottayam",
    startdate: new Date(2026, 11, 28),
    enddate: new Date(2026, 11, 29),
    image: img.event5,
    infoUrl: "#",
  },
  {
    id: 7,
    title: "Live Jazz Night at the Open Courtyard",
    startingPoint: "Thrissur",
    destination: "Vagamon",
    startdate: new Date(2026, 11, 28),
    enddate: new Date(2026, 11, 29),
    image: img.event5,
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

const sorted = [...events].sort((a, b) => a.startdate - b.startdate);

// Cards per page based on breakpoint
function getCardsPerPage(width) {
  if (width <= 600) return 1;
  if (width <= 1024) return 2;
  return 4;
}

function EventCard({ event }) {
  const start = formatParts(event.startdate);
  const end = formatParts(event.enddate);
  return (
    <div className="ev-card">
      <div className="ev-top">
        <p className="ev-title">{event.title}</p>
        
        <div className="ev-locations">
          <div className="ev-loc">
            <span className="ev-loc-label">Starting Point</span>
            <span className="ev-loc-val">{event.startingPoint}</span>
          </div>
          <div className="ev-loc" style={{ textAlign: 'right' }}>
            <span className="ev-loc-label">Destination</span>
            <span className="ev-loc-val">{event.destination}</span>
          </div>
        </div>

        <div className="ev-dates-wrap">
          <div className="ev-date">
            <span className="ev-day">{start.day}</span>
            <div className="ev-date-meta">
              <span className="ev-month">{start.month}</span>
              <span className="ev-weekday">{start.weekday}</span>
              <span className="ev-year">{start.year}</span>
            </div>
          </div>
          <div className="ev-date-divider">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </div>
          <div className="ev-date">
            <span className="ev-day">{end.day}</span>
            <div className="ev-date-meta">
              <span className="ev-month">{end.month}</span>
              <span className="ev-weekday">{end.weekday}</span>
              <span className="ev-year">{end.year}</span>
            </div>
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

  const shift = page * 100;

  return (
    <>
      <style>{`
        .ev-section {
          background: #fff;
          padding: 0 0 0px 0;
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
          font-size: 14px;
          font-weight: 500;
          color: #111;
          line-height: 1.4;
          margin: 0;
          padding-bottom: 16px;
        }

        .ev-locations {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          padding: 12px 0;
          border-top: 1px dashed #e0e0e0;
          border-bottom: 1px dashed #e0e0e0;
        }

        .ev-loc {
          display: flex;
          flex-direction: column;
        }

        .ev-loc-label {
          font-size: 10px;
          text-transform: uppercase;
          color: #888;
          letter-spacing: 0.05em;
          margin-bottom: 4px;
        }

        .ev-loc-val {
          font-size: 13px;
          font-weight: 600;
          color: #111;
        }

        .ev-dates-wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
        }

        .ev-date-divider {
          color: #aaa;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 8px;
        }

        .ev-date {
          display: flex;
          align-items: flex-end;
          gap: 6px;
        }

        .ev-day {
          font-size: 38px;
          font-weight: 300;
          color: #111;
          line-height: 1;
          letter-spacing: -1.5px;
        }

        .ev-date-meta {
          display: flex;
          flex-direction: column;
          padding-bottom: 4px;
          gap: 1px;
        }

        .ev-month {
          font-size: 12px;
          font-weight: 600;
          color: #111;
          line-height: 1.2;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .ev-weekday {
          font-size: 10px;
          font-weight: 400;
          color: #888;
          line-height: 1.3;
        }

        .ev-year {
          font-size: 10px;
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
          .ev-day { font-size: 32px; }
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