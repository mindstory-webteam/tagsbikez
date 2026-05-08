"use client";
import React from 'react';
import Image from 'next/image';
import { img } from '@/assets/assest';

const CompanySection = () => {
  return (
    <section className="cp-section">
      <style>{`
        .cp-section {
          background: #fff;
          padding: 80px 40px;
        }

        .cp-inner {
          max-width: 1425px;
          margin: 0 auto;
        }

        .cp-flex-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: stretch;
        }

        .cp-img-side {
          position: relative;
          min-height: 500px;
          padding: 0;
        }

        .cp-img-side img {
          object-fit: cover;
          transition: transform 0.6s ease;
        }

   

        /* ── RIGHT CONTENT COLUMN ── */
        .cp-content-side {
          display: flex;
          flex-direction: column;
          border-top: 1px solid #e0e0e0;
          border-left: 1px solid #e0e0e0;
          border-right: 1px solid #e0e0e0;
        }

        .cp-text-wrap {
          padding: 60px;
          border-bottom: 1px solid #e0e0e0;
          flex-grow: 1;
        }

        .cp-heading {
          font-size: 42px;
          font-weight: 400;
          color: #111;
          line-height: 1.1;
          margin-bottom: 32px;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }

        .cp-heading span {
          color: #f51b24;
        }

        .cp-desc {
          font-size: 16px;
          color: #666;
          line-height: 1.8;
          margin: 0;
        }

        /* ── STATS GRID INSIDE RIGHT COLUMN ── */
        .cp-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          background: #fff;
        }

        .cp-stat-item {
          padding: 32px 20px;
          border-bottom: 1px solid #e0e0e0;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: background 0.3s ease;
        }

        .cp-stat-item:not(:last-child) {
          border-right: 1px solid #e0e0e0;
        }

        .cp-stat-item:hover {
          background: #fafafa;
        }

        .cp-stat-item h4 {
          font-size: 28px;
          font-weight: 700;
          color: #111;
          margin: 0 0 4px 0;
        }

        .cp-stat-item h4 span {
          color: #f51b24;
        }

        .cp-stat-item p {
          font-size: 11px;
          font-weight: 700;
          color: #999;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin: 0;
        }

        @media (max-width: 1100px) {
          .cp-flex-container {
            grid-template-columns: 1fr;
          }
          .cp-img-side {
            min-height: 400px;
            order: -1;
            margin-bottom: 40px;
          }
          .cp-content-side {
            border-left: 1px solid #e0e0e0;
          }
          .cp-text-wrap {
            padding: 40px;
          }
        }

        @media (max-width: 768px) {
          .cp-section {
            padding: 60px 20px;
          }
          .cp-heading {
            font-size: 32px;
          }
          .cp-stats-grid {
            grid-template-columns: 1fr;
          }
          .cp-stat-item:not(:last-child) {
            border-right: none;
            border-bottom: 1px solid #e0e0e0;
          }
        }
      `}</style>

      <div className="cp-inner">
        <div className="cp-flex-container">
          <div className="cp-img-side">
            <Image 
              src={img.banner1} 
              alt="TagsBikez Showroom" 
              fill
              priority
              sizes="(max-width: 1100px) 100vw, 50vw"
            />
          </div>

          <div className="cp-content-side">
            <div className="cp-text-wrap">
              <h2 className="cp-heading">
                The Ultimate <span>Royal Enfield</span> Experience in Thrissur.
              </h2>
              <p className="cp-desc">
                TagsBikez has been a beacon for motorcycle enthusiasts in Thrissur, Kerala. As an authorized Royal Enfield dealership, we don't just sell bikes; we build a community of riders who share a passion for the legendary engine.
              </p>
            </div>

            <div className="cp-stats-grid">
              <div className="cp-stat-item">
                <h4>15<span>+</span></h4>
                <p>Years Excellence</p>
              </div>
              <div className="cp-stat-item">
                <h4>10k<span>+</span></h4>
                <p>Happy Riders</p>
              </div>
              <div className="cp-stat-item">
                <h4>100<span>%</span></h4>
                <p>Genuine Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
