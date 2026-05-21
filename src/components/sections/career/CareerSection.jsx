"use client";
import React from "react";
import AnimatedBtn from "@/components/AnimatedBtn";

const WA_NUMBER = "+917594960006"; 

const salesRoles = [
  { title: "Field Staff" },
  { title: "Sales Consultant" },
  { title: "Team Lead" },
  { title: "Retail Manager" },
  { title: "Insurance Executive" },
  { title: "Registration Executive" },
  { title: "Delivery Executive" },
  { title: "PDI Executive" },
  { title: "Web & Tele Executive" },
  { title: "Used Bike Executive" },
  { title: "Sales Manager" },
];

const serviceRoles = [
  { title: "Technician" },
  { title: "Service Advisor" },
  { title: "Floor Manager" },
  { title: "Service Manager" },
  { title: "Works Manager" },
  { title: "Spare Executive" },
  { title: "Quality Controller" },
  { title: "Bodyshop Manager" },
  { title: "CRE / Telecaller" },
  { title: "Service Manager" },
];


const locations = ["Kuriacira", "Irinjalakuda", "Patturaikkal", "Kodakara", "Vadakkenchery", "Chalakudy"];

function buildWaLink(role) {
  const msg = `Hi TagsBikez, I am interested in the *${role}* position. Please share more details.`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function RoleCard({ title }) {
  return (
    <div className="cr-card">
      <div className="cr-card-left">
        <p className="cr-card-title">{title}</p>
      </div>
      <div className="cr-card-btn">
        <AnimatedBtn
          bgColor="#111"
          hoverColor="#e8282b"
          href={buildWaLink(title)}
          target="_blank"
          rel="noopener noreferrer"
          style={{ minWidth: "unset", width: "100%", height: "38px", fontSize: "11px", borderRadius: "3px" }}
        >
          Apply Now
        </AnimatedBtn>
      </div>
    </div>
  );
}

function DeptSection({ icon, label, roles }) {
  return (
    <div className="cr-dept">
      <div className="cr-dept-head">
        <span className="cr-dept-label">{icon} {label}</span>
      </div>
      <div className="cr-grid">
        {roles.map((r, idx) => (
          <RoleCard key={`${r.title}-${idx}`} {...r} />
        ))}
      </div>
    </div>
  );
}

export default function CareersSection() {
  return (
    <>
      <style>{`
        .cr-root {
          padding: 80px 20px;
          max-width: 1450px;
          margin: 0 auto;
          font-family: inherit;
        }

        .cr-hero {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }

        .cr-hero-left { flex-shrink: 0; }

        .cr-heading {
          font-size: 42px;
          font-weight: 400;
          color: #111;
          margin: 0 0 12px;
          line-height: 1.1;
        }

        .cr-sub {
          font-size: 14px;
          color: #666;
          margin: 0;
          line-height: 1.7;
          max-width: 480px;
        }

        .cr-locations {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
          justify-content: flex-end;
          flex-shrink: 0;
        }

        .cr-loc-label {
          font-size: 11px;
          color: #999;
          display: flex;
          align-items: center;
          gap: 5px;
          white-space: nowrap;
        }

        .cr-loc-pill {
          font-size: 11px;
          padding: 4px 10px;
          border: 0.5px solid #ddd;
          color: #555;
          border-radius: 2px;
          white-space: nowrap;
        }

        .cr-depts-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
        }

        .cr-dept { margin-bottom: 32px; }
        .cr-dept-head { margin-bottom: 16px; }
        .cr-dept-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-weight: 700;
          color: #e8282b;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .cr-grid {
          display: grid;
          grid-template-columns: 1fr;
          border-top: 0.5px solid #e0e0e0;
          border-left: 0.5px solid #e0e0e0;
        }

        .cr-card {
          border-right: 0.5px solid #e0e0e0;
          border-bottom: 0.5px solid #e0e0e0;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          transition: background 0.15s;
        }
        .cr-card:hover { background: #fafafa; }

        .cr-card-left {
          display: flex;
          align-items: center;
          flex: 1;
          min-width: 0;
        }

        .cr-card-title {
          font-size: 13px;
          font-weight: 700;
          color: #111;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin: 0;
        }

        .cr-card-btn { flex-shrink: 0; }

        @media (max-width: 900px) {
          .cr-hero { flex-direction: column; align-items: flex-start; gap: 20px; }
          .cr-locations { justify-content: flex-start; }
          .cr-depts-container {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }

        @media (max-width: 768px) {
          .cr-heading { font-size: 32px; }
          .cr-card { flex-direction: column; align-items: flex-start; gap: 12px; }
          .cr-card-left { flex-direction: column; align-items: flex-start; gap: 6px; }
          .cr-card-title { min-width: unset; white-space: normal; }
          .cr-card-btn { width: 100%; }
          .cr-card-btn .anim-btn { width: 100% !important; }
        }

        @media (max-width: 480px) {
          .cr-root { padding: 60px 16px; }
          .cr-heading { font-size: 26px; }
        }
      `}</style>

      <section className="cr-root">

        <div className="cr-hero">
          <div className="cr-hero-left">
            <h2 className="cr-heading">Begin Your Career Here</h2>
            <p className="cr-sub">
              Join our team and grow your career with us. Explore opportunities across Sales and
              Service departments at our available locations.
            </p>
          </div>

          <div className="cr-locations">
            <span className="cr-loc-label">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              Locations
            </span>
            {locations.map((loc) => (
              <span className="cr-loc-pill" key={loc}>{loc}</span>
            ))}
          </div>
        </div>

        <div className="cr-depts-container">
          <DeptSection
            icon={
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
            }
            label="Sales Department"
            roles={salesRoles}
          />

          <DeptSection
            icon={
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
              </svg>
            }
            label="Service Department"
            roles={serviceRoles}
          />
        </div>

      </section>
    </>
  );
}