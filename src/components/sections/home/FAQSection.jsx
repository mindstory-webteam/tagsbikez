"use client";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "Which Royal Enfield model should I choose?",
    answer:
      "It depends on your riding style. For city rides, models like Hunter or Classic are ideal. For long touring, Himalayan or Interceptor are better choices due to comfort and performance.",
  },
  {
    id: 2,
    question: "What is the mileage of Royal Enfield bikes?",
    answer:
      "Most Royal Enfield bikes offer mileage between 30–40 km/l depending on the model, riding style, and road conditions.",
  },
  {
    id: 3,
    question: "Is Royal Enfield good for long rides?",
    answer:
      "Yes, Royal Enfield bikes are well known for touring. Models like Himalayan and Meteor are specifically designed for long-distance comfort and stability.",
  },
  {
    id: 4,
    question: "Are spare parts easily available?",
    answer:
      "Yes, spare parts are widely available across India through authorized service centers and local markets.",
  },
  {
    id: 5,
    question: "What documents are required to buy a bike?",
    answer:
      "You will need a valid ID proof, address proof, PAN card, and a driving licence. For financed purchases, income proof may also be required.",
  },
  {
    id: 6,
    question: "Can I take a test ride before buying?",
    answer:
      "Yes, all authorized dealerships offer test rides so you can experience the bike before making a decision.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState(1);

  const toggle = (id) => setOpen((prev) => (prev === id ? null : id));

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=DM+Sans:wght@300;400;500&display=swap');

        .faq-section {
          font-family: 'DM Sans', sans-serif;
          background: #fff;
          padding: 80px 40px;
          box-sizing: border-box;
          width: 100%;
        }

        .faq-inner {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 80px;
          align-items: start;
        }

        /* ── Left ── */
        .faq-left {
          position: sticky;
          top: 40px;
        }

        .faq-eyebrow {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #e02020;
          margin: 0 0 16px;
        }

        .faq-heading {
          font-family: 'Sora', sans-serif;
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 700;
          color: #111;
          line-height: 1.15;
          margin: 0 0 20px;
        }

        .faq-subtext {
          font-size: 14px;
          color: #777;
          line-height: 1.75;
          margin: 0 0 32px;
          max-width: 320px;
        }

        .faq-divider {
          width: 40px;
          height: 3px;
          background: #e02020;
          border-radius: 2px;
          margin-bottom: 32px;
        }

        .faq-contact-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #e02020;
          color: #fff;
          font-size: 14px;
          font-weight: 500;
          padding: 13px 24px;
          border-radius: 8px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: background 0.2s;
        }

        .faq-contact-btn:hover {
          background: #c01010;
        }

        .faq-contact-btn svg {
          flex-shrink: 0;
        }

        /* ── Right ── */
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .faq-item {
          border-radius: 12px;
          border: 1px solid #ececec;
          overflow: hidden;
          background: #fff;
          transition: box-shadow 0.2s;
        }

        .faq-item.active {
          box-shadow: 0 4px 24px rgba(0,0,0,0.07);
          border-color: transparent;
        }

        .faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 20px;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          gap: 16px;
          transition: background 0.18s;
        }

        .faq-item.active .faq-question {
          background: #e02020;
        }

        .faq-q-text {
          font-size: 14.5px;
          font-weight: 500;
          color: #111;
          line-height: 1.4;
          transition: color 0.18s;
        }

        .faq-item.active .faq-q-text {
          color: #fff;
        }

        .faq-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1.5px solid #ddd;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: border-color 0.18s, background 0.18s;
          background: #fff;
        }

        .faq-item.active .faq-icon {
          border-color: rgba(255,255,255,0.4);
          background: rgba(255,255,255,0.15);
        }

        .faq-icon svg path {
          stroke: #555;
          transition: stroke 0.18s;
        }

        .faq-item.active .faq-icon svg path {
          stroke: #fff;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s ease, padding 0.2s ease;
          padding: 0 20px;
        }

        .faq-answer.open {
          max-height: 300px;
          padding: 16px 20px 20px;
        }

        .faq-answer p {
          font-size: 13.5px;
          color: #666;
          line-height: 1.75;
          margin: 0;
        }

        @media (max-width: 768px) {
          .faq-section { padding: 48px 20px; }
          .faq-inner { grid-template-columns: 1fr; gap: 40px; }
          .faq-left { position: static; }
        }
      `}</style>

      <section className="faq-section">
        <div className="faq-inner">
          {/* Left */}
          <div className="faq-left">
            <p className="faq-eyebrow">Frequently Asked Questions</p>
            <h2 className="faq-heading">Everything You Need to Know Before You Ride</h2>
            <p className="faq-subtext">
              We're here to make your rental experience easy and enjoyable. Browse through our most common questions to get started with confidence.
            </p>
            <button className="faq-contact-btn">
              Contact Us
            
            </button>
          </div>

          {/* Right */}
          <div className="faq-list">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className={`faq-item${open === faq.id ? " active" : ""}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={open === faq.id}
                >
                  <span className="faq-q-text">{faq.question}</span>
                  <span className="faq-icon">
                    {open === faq.id ? (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    ) : (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5v14M5 12h14" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    )}
                  </span>
                </button>
                <div className={`faq-answer${open === faq.id ? " open" : ""}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;