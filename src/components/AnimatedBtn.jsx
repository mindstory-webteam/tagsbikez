"use client";
import React from "react";

export default function AnimatedBtn({ 
  children = "Read More", 
  onClick, 
  href, 
  bgColor = "#111",
  hoverColor = "#f51b24",
  style,
  ...props 
}) {

  const Tag = href ? "a" : "button";

  const mergedStyle = {
    "--btn-bg": bgColor,
    "--btn-hover": hoverColor,
    ...style,
  };

  return (
    <>
      <style>{`
        .anim-btn {
          width: auto;
          min-width: 140px;
          height: 45px;
          color: #fff;
          padding: 0 25px;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.1em;
          background: var(--btn-bg);
          cursor: pointer;
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          outline: none;
          border: none;
          box-sizing: border-box;
          text-transform: uppercase;
          overflow: hidden;
          text-decoration: none;
          vertical-align: middle;
        }

        .anim-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* Sliding text wrapper */
        .anim-btn-track {
          position: relative;
          display: flex;
          flex-direction: column;
          height: 1em;
          overflow: hidden;
          line-height: 1;
        }

        /* Two copies of the label — one visible, one waiting below */
        .anim-btn-label {
          display: block;
          transition: transform 0.38s cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 0.38s ease;
          will-change: transform;
        }

        /* The clone sits to the right, slides in from right on hover */
        .anim-btn-clone {
          position: absolute;
          top: 0;
          left: 0;
          transform: translateX(110%);
          opacity: 0;
          transition: transform 0.38s cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 0.38s ease;
          will-change: transform;
          white-space: nowrap;
        }

        /* On hover: original slides out left, clone slides in from right */
        .anim-btn:not(:disabled):hover .anim-btn-label {
          transform: translateX(-110%);
          opacity: 0;
        }

        .anim-btn:not(:disabled):hover .anim-btn-clone {
          transform: translateX(0);
          opacity: 1;
        }

        /* Red fill sweeps up from bottom */
        .anim-btn::after {
          position: absolute;
          content: "";
          width: 100%;
          height: 0;
          bottom: 0;
          left: 0;
          z-index: 0;
          background: var(--btn-hover);
          transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .anim-btn:not(:disabled):hover::after {
          height: 100%;
        }

        /* Keep text above the fill */
        .anim-btn-track {
          z-index: 1;
        }

        .anim-btn:not(:disabled):active {
          transform: translateY(2px);
        }
      `}</style>

      <Tag className="anim-btn" onClick={onClick} href={href} style={mergedStyle} {...props}>
        <span className="anim-btn-track">
          {/* Original label — exits left */}
          <span className="anim-btn-label">{children}</span>
          {/* Clone — enters from right */}
          <span className="anim-btn-clone">{children}</span>
        </span>
      </Tag>
    </>
  );
}