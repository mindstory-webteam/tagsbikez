"use client";
import React, { useState } from "react";

const BikeFaqSection = ({ faqs = [], bikeName = "" }) => {
  const [openId, setOpenId] = useState(1);

  if (!faqs || faqs.length === 0) return null;

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bike-faq-wrapper">
      <style>{`
        .bike-faq-wrapper {
          background: #fff;
          padding: 60px 24px 100px 24px;
          border-top: 1px solid #f0f0f0;
        }

        .bike-faq-container {
          max-width: 920px;
          margin: 0 auto;
        }

        .bike-faq-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .bike-faq-eyebrow {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #e02020;
          margin-bottom: 10px;
        }

        .bike-faq-title {
          font-family: var(--font-oswald), sans-serif;
          font-size: 34px;
          font-weight: 500;
          color: #111;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin: 0 0 12px 0;
          line-height: 1.2;
        }

     

        .bike-faq-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .bike-faq-item {
          border: 1px solid #e7e7e7;
          border-radius: 4px;
          overflow: hidden;
          background: #fff;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .bike-faq-item:hover {
          border-color: #d0d0d0;
        }

        .bike-faq-item.active {
          border-color: #e02020;
          box-shadow: 0 4px 20px rgba(224, 32, 32, 0.08);
        }

        .bike-faq-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 24px;
          background: #fff;
          border: none;
          cursor: pointer;
          text-align: left;
          gap: 16px;
          transition: background-color 0.2s ease;
        }

        .bike-faq-item.active .bike-faq-btn {
          background: #fff8f8;
        }

        .bike-faq-question-text {
          font-size: 15px;
          font-weight: 600;
          color: #1a1a1a;
          line-height: 1.4;
          transition: color 0.2s ease;
        }

        .bike-faq-item.active .bike-faq-question-text {
          color: #e02020;
        }

        .bike-faq-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1.5px solid #ddd;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.25s ease;
        }

        .bike-faq-item.active .bike-faq-icon {
          border-color: #e02020;
          background: #e02020;
        }

        .bike-faq-icon svg {
          transition: transform 0.25s ease;
        }

        .bike-faq-item.active .bike-faq-icon svg {
          transform: rotate(180deg);
        }

        .bike-faq-icon svg path {
          stroke: #444;
          transition: stroke 0.2s ease;
        }

        .bike-faq-item.active .bike-faq-icon svg path {
          stroke: #fff;
        }

        .bike-faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s ease, padding 0.25s ease;
          padding: 0 24px;
          background: #fff;
        }

        .bike-faq-answer.open {
          max-height: 400px;
          padding: 6px 24px 22px 24px;
        }

        .bike-faq-answer p {
          font-size: 14px;
          color: #555;
          line-height: 1.7;
          margin: 0;
        }

        @media (max-width: 768px) {
          .bike-faq-wrapper {
            padding: 40px 16px 60px 16px;
          }
          .bike-faq-title {
            font-size: 26px;
          }
          .bike-faq-btn {
            padding: 14px 18px;
          }
          .bike-faq-question-text {
            font-size: 14px;
          }
          .bike-faq-answer {
            padding: 0 18px;
          }
          .bike-faq-answer.open {
            padding: 4px 18px 18px 18px;
          }
          .bike-faq-answer p {
            font-size: 13px;
          }
        }
      `}</style>

      <div className="bike-faq-container">
        <div className="bike-faq-header">
          <span className="bike-faq-eyebrow">Got Questions?</span>
          <h2 className="bike-faq-title">
            {bikeName ? `${bikeName} FAQs` : "Frequently Asked Questions"}
          </h2>
        </div>

        <div className="bike-faq-list">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bike-faq-item${isOpen ? " active" : ""}`}
              >
                <button
                  type="button"
                  className="bike-faq-btn"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                >
                  <span className="bike-faq-question-text">{faq.question}</span>
                  <span className="bike-faq-icon">
                    {isOpen ? (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14" strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                    ) : (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 5v14M5 12h14"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </span>
                </button>
                <div className={`bike-faq-answer${isOpen ? " open" : ""}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BikeFaqSection;
