"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { img } from "@/assets/assest";
import axios from "axios";

const mockEvents = [];

function parseLocalDate(dateInput) {
  if (!dateInput) return null;
  if (dateInput instanceof Date) return dateInput;
  if (typeof dateInput === "string") {
    const parts = dateInput.split("-");
    if (parts.length === 3) {
      const year = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const day = parseInt(parts[2], 10);
      return new Date(year, month, day);
    }
  }
  return new Date(dateInput);
}

function formatParts(dateInput) {
  const date = parseLocalDate(dateInput);
  if (!date || isNaN(date.getTime())) {
    return { day: "", month: "", weekday: "", year: "" };
  }
  return {
    day: date.getDate().toString(),
    month: date.toLocaleString("en-US", { month: "short" }),
    weekday: date.toLocaleString("en-US", { weekday: "long" }),
    year: date.getFullYear().toString(),
  };
}

function getCardsPerPage(width) {
  if (width <= 600) return 1;
  if (width <= 1024) return 2;
  return 4;
}

function EventCard({ event }) {
  const start = formatParts(event.startdate);
  const end = formatParts(event.enddate);

  // Determine if the event has already passed
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const endDate = parseLocalDate(event.enddate);
  const isPast = endDate && endDate < today;

  return (
    <div className="ev-card">
      <div className="ev-top">
        <p className="ev-title" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", flexWrap: "wrap", wordBreak: "break-word", overflowWrap: "anywhere" }}>
          <span style={{ flex: "1 1 120px", minWidth: 0, wordBreak: "break-word" }}>{event.title}</span>
          {!isPast ? (
            <span style={{
              background: "#fafafa",
              color: "#ff0000",
              border: "1px solid #e0e0e0",
              fontSize: "10px",
              fontWeight: "600",
              padding: "4px 8px",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              display: "inline-block",
              flexShrink: 0
            }}>
              Upcoming
            </span>
          ) : (
            <span style={{
              background: "#fafafa",
              color: "#ff0000",
              border: "1px solid #e0e0e0",
              fontSize: "10px",
              fontWeight: "600",
              padding: "4px 8px",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              display: "inline-block",
              flexShrink: 0
            }}>
              Ended
            </span>
          )}
        </p>

        <div className="ev-locations">
          <div className="ev-loc">
            <span className="ev-loc-label">Starting Point</span>
            <span className="ev-loc-val">{event.startingPoint}</span>
          </div>
          <div className="ev-loc" style={{ textAlign: "right" }}>
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
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
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

      <div className="ev-img-wrap">
        {event.image_url || event.image ? (
          <Image
            src={event.image_url || event.image}
            alt={event.title}
            fill
            className="ev-img"
            style={{
              objectFit: "cover",
              filter: isPast ? "grayscale(100%)" : "none",
              transition: "filter 0.3s ease",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: isPast ? "#ccc" : "#f0f0f0",
            }}
          />
        )}
        {!isPast && (
          <div className="ev-actions">
            <Link href={event.infoUrl} className="ev-btn">
              More info
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

function EventCardSkeleton() {
  return (
    <div className="ev-card ev-skeleton" style={{ flex: "0 0 calc((100% - (var(--cards-per-page) - 1) * var(--gap)) / var(--cards-per-page))" }}>
      <div className="ev-top">
        <div className="skeleton-line skeleton-title" />
        <div className="skeleton-line skeleton-title-sub" />
        
        <div className="ev-locations">
          <div className="ev-loc">
            <span className="ev-loc-label">Starting Point</span>
            <div className="skeleton-line skeleton-loc-val" />
          </div>
          <div className="ev-loc" style={{ textAlign: "right", alignItems: "flex-end" }}>
            <span className="ev-loc-label">Destination</span>
            <div className="skeleton-line skeleton-loc-val" />
          </div>
        </div>

        <div className="ev-dates-wrap">
          <div className="ev-date">
            <div className="skeleton-circle" />
            <div className="ev-date-meta">
              <div className="skeleton-line skeleton-meta-val" style={{ width: "30px" }} />
              <div className="skeleton-line skeleton-meta-val" style={{ width: "40px" }} />
            </div>
          </div>
          <div className="ev-date-divider" style={{ opacity: 0.2 }}>
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="1.5" fill="none">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
          <div className="ev-date">
            <div className="skeleton-circle" />
            <div className="ev-date-meta">
              <div className="skeleton-line skeleton-meta-val" style={{ width: "30px" }} />
              <div className="skeleton-line skeleton-meta-val" style={{ width: "40px" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="ev-img-wrap skeleton-img" />
    </div>
  );
}

export default function UpcomingEvents() {
  const outerRef = useRef(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(4);

  const sorted = [...events].sort((a, b) => {
    const d1 = parseLocalDate(a.startdate);
    const d2 = parseLocalDate(b.startdate);
    if (!d1) return 1;
    if (!d2) return -1;
    return d2 - d1;
  });

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
  }, [sorted.length]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  useEffect(() => {
    let active = true;
    const source = axios.CancelToken.source();

    async function loadEvents() {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      if (!apiUrl) {
        setEvents([]);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await axios.get(`${apiUrl}/api/events/`, {
          cancelToken: source.token,
        });
        const data = response.data;
        if (active) {
          if (data && Array.isArray(data.results)) {
            setEvents(data.results);
          } else if (Array.isArray(data)) {
            setEvents(data);
          } else {
            throw new Error("Invalid API response format");
          }
          setLoading(false);
        }
      } catch (err) {
        if (axios.isCancel(err)) {
          return;
        }
        console.error("Error fetching events from backend:", err);
        if (active) {
          setError(err.message);
          setEvents([]);
          setLoading(false);
        }
      }
    }

    loadEvents();
    return () => {
      active = false;
      source.cancel("Component unmounted");
    };
  }, []);

  return (
    <>
      <style>{`
        /* Skeleton Loading Styles */
        .ev-skeleton {
          pointer-events: none;
          user-select: none;
        }
        .skeleton-line {
          height: 12px;
          background: #f3f3f3;
          border-radius: 4px;
          position: relative;
          overflow: hidden;
        }
        .skeleton-title {
          width: 85%;
          height: 16px;
          margin-bottom: 8px;
        }
        .skeleton-title-sub {
          width: 60%;
          height: 16px;
          margin-bottom: 16px;
        }
        .skeleton-loc-val {
          width: 80px;
          height: 14px;
          margin-top: 4px;
        }
        .skeleton-circle {
          width: 38px;
          height: 38px;
          border-radius: 4px;
          background: #f3f3f3;
          position: relative;
          overflow: hidden;
        }
        .skeleton-meta-val {
          height: 10px;
          margin-top: 2px;
        }
        .skeleton-img {
          background: #f5f5f5 !important;
          position: relative;
          overflow: hidden;
        }
        
        .skeleton-line::after,
        .skeleton-circle::after,
        .skeleton-img::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          transform: translateX(-100%);
          background-image: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.4) 20%,
            rgba(255, 255, 255, 0.7) 60%,
            rgba(255, 255, 255, 0) 100%
          );
          animation: shimmer 1.8s infinite ease-out;
        }
        
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }

        .ev-section {
          background: #fff;
          padding: 0 40px 60px 40px;
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
          align-items: center;
          gap: 8px;
        }
        .ev-insta-link {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border: 1px solid #ddd;
          text-decoration: none;
          color: #111;
          font-size: 13px;
          font-weight: 500;
          transition: border-color 0.2s, background 0.2s, color 0.2s;
          white-space: nowrap;
        }
        .ev-wa-link {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border: 1px solid #ddd;
          text-decoration: none;
          color: #111;
          font-size: 13px;
          font-weight: 500;
          transition: border-color 0.2s, background 0.2s, color 0.2s;
          white-space: nowrap;
        }
      
       
        .ev-insta-icon {
          width: 18px;
          height: 18px;
          flex-shrink: 0;
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
          overflow: hidden;
          --gap: 16px;
        }
        .ev-track {
          display: flex;
          align-items: stretch;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          gap: var(--gap);
        }
        .ev-card {
          flex: 0 0 calc((100% - (var(--cards-per-page) - 1) * var(--gap)) / var(--cards-per-page));
          min-width: 0;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          border: 1px solid #e0e0e0;
        }
        .ev-top {
          padding: 24px 20px 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
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
        .ev-img-wrap {
          width: 100%;
          height: 200px;
          overflow: hidden;
          position: relative;
          flex-shrink: 0;
        }
        .ev-img {
          display: block;
          transition: transform 0.4s ease;
          pointer-events: none;
          user-select: none;
          -webkit-user-drag: none;
        }
        .ev-actions {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          z-index: 2;
        }
        .ev-btn {
          flex: 1;
          padding: 12px 8px;
          font-size: 12px;
          font-weight: 500;
          color: #fff;
          text-align: center;
          text-decoration: none;
          background: transparent;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          border-top: 1px solid rgba(255, 255, 255, 0.3);
        }
        .ev-btn:hover {
          background: #000;
          color: #fff;
        }
        @media (max-width: 1200px) {
          .ev-section {
            padding: 0 40px 100px 40px;
          }
        }
        @media (max-width: 600px) {
          .ev-section { padding: 24px 16px 60px; }
          .ev-heading { font-size: 28px; }
          .ev-header {
            flex-wrap: nowrap;
            gap: 8px;
            margin: 0 0 20px;
          }
          .ev-nav { flex-shrink: 0; }
          .ev-insta-link span, .ev-wa-link span { display: none; }
          .ev-insta-link, .ev-wa-link { padding: 8px 10px; }
          .ev-top { min-height: 140px; padding: 16px 14px 14px; }
          .ev-day { font-size: 32px; }
          .ev-img-wrap { height: 180px; }
          .ev-nav-btn { width: 36px; height: 36px; }
          .ev-header { margin: 0 0 20px; }
          .ev-track-outer { --gap: 12px; }
        }
      `}</style>

      <section className="ev-section">
        <div className="ev-inner">
          <div className="ev-header">
            <h2 className="ev-heading">Events</h2>
            <nav className="ev-nav" aria-label="Events navigation">
              <a
                href="https://chat.whatsapp.com/Ioch7JBnyvzJXBDzF1GX5Z"
                target="_blank"
                rel="noopener noreferrer"
                className="ev-wa-link"
                aria-label="Join our WhatsApp Group"
              >
                <svg className="ev-insta-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.834.498 3.55 1.362 5.029L2 22l5.127-1.319a9.92 9.92 0 004.885 1.307h.005c5.506 0 9.993-4.482 9.993-9.993C22 6.482 17.518 2 12.012 2zm4.78 12.63c-.22.616-1.284 1.196-1.77 1.254-.44.05-1.01.077-2.926-.714-2.443-1.01-4.004-3.486-4.126-3.648-.122-.163-1.006-1.341-1.006-2.556 0-1.215.632-1.81.857-2.053.226-.244.493-.306.657-.306.163 0 .327.001.468.007.147.006.347-.056.543.418.2.486.685 1.67.746 1.793.061.123.102.266.02.43-.081.163-.122.265-.245.408-.122.143-.257.32-.367.43-.122.122-.25.255-.107.502.142.245.634 1.045 1.362 1.693.938.837 1.728 1.096 1.973 1.218.245.123.388.102.53-.061.144-.163.614-.715.777-.96.163-.245.327-.204.552-.122.224.082 1.428.674 1.674.797.244.122.408.184.469.286.06.102.06.596-.16 1.212z" fill="#25d366" />
                </svg>
                <span>Join</span>
              </a>
              <a
                href="https://www.instagram.com/tagsrides?igsh=eW5qaHJnZGgxeTFk"
                target="_blank"
                rel="noopener noreferrer"
                className="ev-insta-link"
                aria-label="Visit tagsrides on Instagram"
              >
                <svg className="ev-insta-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f09433"/>
                      <stop offset="25%" stopColor="#e6683c"/>
                      <stop offset="50%" stopColor="#dc2743"/>
                      <stop offset="75%" stopColor="#cc2366"/>
                      <stop offset="100%" stopColor="#bc1888"/>
                    </linearGradient>
                  </defs>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#ig-grad)" strokeWidth="1.8" fill="none"/>
                  <circle cx="12" cy="12" r="4.5" stroke="url(#ig-grad)" strokeWidth="1.8" fill="none"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="url(#ig-grad)"/>
                </svg>
                <span>@tagsrides</span>
              </a>
              <button
                className="ev-nav-btn"
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={!canPrev}
                aria-label="Previous page"
              >
                <svg viewBox="0 0 24 24">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                className="ev-nav-btn"
                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={!canNext}
                aria-label="Next page"
              >
                <svg viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </nav>
          </div>

          <div
            className="ev-track-outer"
            ref={outerRef}
            style={{ "--cards-per-page": cardsPerPage }}
          >
            <div
              className="ev-track"
              style={{ transform: `translateX(calc(-${page * 100}% - ${page} * var(--gap)))` }}
            >
              {loading ? (
                Array.from({ length: cardsPerPage }).map((_, i) => (
                  <EventCardSkeleton key={i} />
                ))
              ) : (
                sorted.map((ev) => (
                  <EventCard key={ev.id} event={ev} />
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}