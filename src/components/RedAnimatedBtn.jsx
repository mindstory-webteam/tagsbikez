"use client";
import React from "react";

export default function RedAnimatedBtn({ children = "Read More", onClick }) {
  return (
    <>
      <style>{`
        .custom-btn-14 {
          width: auto;
          min-width: 140px;
          height: 45px;
          color: #fff;
          padding: 10px 25px;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.1em;
          background: #111111;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          outline: none;
          border: none;
          z-index: 1;
          box-sizing: border-box;
          line-height: 1;
          overflow: hidden;
          text-transform: uppercase;
        }

        .custom-btn-14::after {
          position: absolute;
          content: "";
          width: 100%;
          height: 0;
          top: 0;
          left: 0;
          z-index: -1;
          background-color: #f51b24;
          background-image: linear-gradient(315deg, #f51b24 0%, #ff3b44 74%);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .custom-btn-14:hover {
          color: #fff;
        }

        .custom-btn-14:hover::after {
          top: auto;
          bottom: 0;
          height: 100%;
        }

        .custom-btn-14:active {
          transform: translateY(2px);
        }
      `}</style>

      <button className="custom-btn-14" onClick={onClick}>
        {children}
      </button>
    </>
  );
}
