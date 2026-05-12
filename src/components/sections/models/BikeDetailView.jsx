"use client";
import React from 'react';
import Image from 'next/image';
import { Download, MessageSquare } from 'lucide-react';

const BikeDetailView = ({ bike }) => {
  if (!bike) return null;

  return (
    <div className="bdv-root">
      <style>{`
        .bdv-root {
          padding: 120px 0px 40px 0;
          background: #fff;
        }

        .bdv-inner {
          max-width: 1425px;
          margin: 0 auto;
          padding: 80px 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: stretch;
        }

        .bdv-img-side {
          position: relative;
          min-height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bdv-img {
          object-fit: contain;
        }

        /* ── CONTENT SIDE ── */
        .bdv-content-side {
          display: flex;
          flex-direction: column;
          border: 1px solid #e0e0e0;
          background: #fff;
        }

        .bdv-text-wrap {
          padding: 60px;
          border-bottom: 1px solid #e0e0e0;
          flex-grow: 1;
        }

        .bdv-tagline {
          font-size: 13px;
          font-weight: 700;
          color: #f51b24;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 16px;
          display: block;
        }

        .bdv-title {
          font-size: 48px;
          font-weight: 400;
          color: #111;
          margin-bottom: 24px;
          text-transform: uppercase;
          line-height: 1.1;
        }

        .bdv-desc {
          font-size: 16px;
          color: #666;
          line-height: 1.8;
          margin-bottom: 32px;
        }

        .bdv-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          background: #fff;
        }

        .bdv-stat-item {
          padding: 30px 20px;
          border-bottom: 1px solid #e0e0e0;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .bdv-stat-item:not(:last-child) {
          border-right: 1px solid #e0e0e0;
        }

        .bdv-stat-val {
          font-size: 20px;
          font-weight: 700;
          color: #111;
        }

        .bdv-stat-label {
          font-size: 11px;
          font-weight: 700;
          color: #999;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .bdv-footer {
          padding: 40px 60px;
          background: #fafafa;
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .bdv-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 32px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid #111;
        }

        .bdv-btn-primary {
          background: #111;
          color: #fff;
        }

        .bdv-btn-primary:hover {
          background: #f51b24;
          border-color: #f51b24;
        }

        .bdv-btn-secondary {
          background: transparent;
          color: #111;
        }

        .bdv-btn-secondary:hover {
          background: #111;
          color: #fff;
        }

        @media (max-width: 1100px) {
          .bdv-inner {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .bdv-img-side {
            min-height: 350px;
          }
          .bdv-text-wrap {
            padding: 40px;
          }
          .bdv-footer {
            padding: 30px 40px;
          }
        }

        @media (max-width: 600px) {
          .bdv-title {
            font-size: 32px;
          }
          .bdv-btn {
            width: 100%;
            justify-content: center;
          }
        }

       

        .bdv-stories-inner {
          max-width: 1425px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .bdv-stories-title {
          font-size: 42px;
          font-weight: 400;
          text-transform: uppercase;
          text-align: center;
          margin-bottom: 60px;
          color: #111;
          letter-spacing: 0.05em;
        }

        .bdv-story-row {
          display: flex;
          gap: 60px;
          align-items: center;
        }

        .bdv-story-row.reverse {
          flex-direction: row-reverse;
        }

        .bdv-story-img-wrap {
          flex: 1;
          position: relative;
          height: 400px;
          overflow: hidden;
          border-radius: 4px;
        }

        .bdv-story-img {
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .bdv-story-row:hover .bdv-story-img {
          transform: scale(1.05);
        }

        .bdv-story-content {
          flex: 1;
          padding: 20px;
        }

        .bdv-story-content h3 {
          font-size: 28px;
          font-weight: 700;
          color: #111;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }

        .bdv-story-content p {
          font-size: 16px;
          line-height: 1.8;
          color: #666;
        }

        @media (max-width: 900px) {
          .bdv-story-row {
            flex-direction: column !important;
            gap: 30px;
          }
          .bdv-story-img-wrap {
            height: 300px;
            width: 100%;
          }
          .bdv-stories-inner {
            padding: 0 20px;
          }
        }
      `}</style>

      {bike.stories && bike.stories.length > 0 && (
        <div className="bdv-stories" style={{ paddingBottom: '40px' }}>
          <div className="bdv-stories-inner">
            {/* <h2 className="bdv-stories-title" style={{ marginTop: '40px' }}>The Story</h2> */}
            {bike.stories.slice(0, 1).map((story, index) => (
              <div className="bdv-story-row" key={index}>
                <div className="bdv-story-img-wrap">
                  <Image src={story.image} alt={story.title} fill className="bdv-story-img" sizes="(max-width: 900px) 100vw, 50vw" />
                </div>
                <div className="bdv-story-content">
                  <h3>{story.title}</h3>
                  <p>{story.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bdv-inner">
        <div className="bdv-img-side">
          <Image
            src={bike.image}
            alt={bike.name}
            fill
            className="bdv-img"
            sizes="(max-width: 1100px) 100vw, 50vw"
          />
        </div>

        <div className="bdv-content-side">
          <div className="bdv-text-wrap">
            <span className="bdv-tagline">{bike.tagline}</span>
            <h1 className="bdv-title">{bike.name}</h1>
            <p className="bdv-desc">{bike.description}</p>
          </div>

          <div className="bdv-stats-grid">
            {bike.stats.map((s, i) => (
              <div className="bdv-stat-item" key={i}>
                <span className="bdv-stat-val">{s.val}</span>
                <span className="bdv-stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="bdv-footer">
            <a
              href={`https://wa.me/917594960023?text=I'm%20interested%20in%20the%20${bike.name}`}
              className="bdv-btn bdv-btn-primary"
            >
              <MessageSquare size={18} />
              Enquire Now
            </a>
            <a
              href={bike.brochure}
              download
              className="bdv-btn bdv-btn-secondary"
            >
              <Download size={18} />
              Download Brochure
            </a>
          </div>
        </div>
      </div>

      {bike.stories && bike.stories.length > 1 && (
        <div className="bdv-stories" style={{ paddingTop: '40px', paddingBottom: '100px' }}>
          <div className="bdv-stories-inner">
            {bike.stories.slice(1).map((story, index) => (
              <div className={`bdv-story-row `} key={index} style={{ marginBottom: index !== bike.stories.slice(1).length - 1 ? '80px' : '0' }}>
                <div className="bdv-story-img-wrap">
                  <Image src={story.image} alt={story.title} fill className="bdv-story-img" sizes="(max-width: 900px) 100vw, 50vw" />
                </div>
                <div className="bdv-story-content">
                  <h3>{story.title}</h3>
                  <p>{story.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BikeDetailView;
