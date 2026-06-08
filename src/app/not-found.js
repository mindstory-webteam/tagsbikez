"use client";
import AnimatedBtn from "@/components/AnimatedBtn";

export default function NotFound() {
  return (
    <>
      <style>{`
        .nf-page {
          min-height: 100vh;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 40px 20px;
        }

        .nf-inner {
          max-width: 480px;
        }

        .nf-code {
          font-size: 140px;
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1;
          color: #111;
          margin: 0 0 16px;
        }

        .nf-title {
          font-size: 22px;
          font-weight: 600;
          color: #111;
          margin: 0 0 12px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .nf-desc {
          font-size: 15px;
          color: #888;
          line-height: 1.6;
          margin: 0 0 40px;
        }

        @media (max-width: 640px) {
          .nf-code { font-size: 100px; }
          .nf-title { font-size: 18px; }
        }
      `}</style>

      <div className="nf-page">
        <div className="nf-inner">
          <p className="nf-code">404</p>
          <h1 className="nf-title">Page Not Found</h1>
          <p className="nf-desc">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <AnimatedBtn
            href="/"
            bgColor="#111"
            hoverColor="#e63020"
            style={{ height: "50px", minWidth: "180px", fontSize: "13px" }}
          >
            Back to Home
          </AnimatedBtn>
        </div>
      </div>
    </>
  );
}
