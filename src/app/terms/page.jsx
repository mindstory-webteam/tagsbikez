import React from "react";

export const metadata = {
  title: "Terms & Conditions | Tags Bikez",
  description:
    "Review the Terms and Conditions governing the use of the Tags Bikez website and services.",
  alternates: {
    canonical: "https://tagsbikez.com/terms",
  },
};

export default function TermsConditionsPage() {
  return (
    <div className="policy-wrapper">
      <style>{`
        .policy-wrapper {
          background: #ffffff;
          min-height: 100vh;
        }
        .policy-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 80px 24px 120px 24px;
          box-sizing: border-box;
          font-family: var(--font-inter), sans-serif;
          line-height: 1.8;
          font-size: 15px;
          color: #111111;
        }
        .policy-section {
          margin-bottom: 48px;
        }
        .policy-title {
          font-family: var(--font-oswald), sans-serif;
          font-size: 24px;
          text-transform: uppercase;
          color: #000000;
          margin: 0 0 20px 0;
          letter-spacing: 0.05em;
        }
        .policy-text {
          margin: 0 0 16px 0;
          color: #333333;
        }
        .policy-list {
          margin: 16px 0 24px 0;
          list-style: none;
          padding: 0;
        }
        .policy-list li {
          position: relative;
          padding-left: 20px;
          margin-bottom: 12px;
          color: #333333;
        }
        .policy-list li::before {
          content: "•";
          position: absolute;
          left: 0;
          color: #f51b24;
          font-weight: bold;
          font-size: 18px;
          line-height: 1;
          top: -1px;
        }
        .policy-date {
          display: inline-block;
          font-size: 12px;
          color: #555555;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 40px;
          border-bottom: 1px solid #e0e0e0;
          padding-bottom: 8px;
          width: 100%;
        }
        .policy-link {
          color: #f51b24;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.2s ease-in-out;
        }
        .policy-link:hover {
          color: #d0141d;
        }

        @media (max-width: 1024px) {
          .policy-container {
            padding-top: 60px;
          }
        }

        @media (max-width: 600px) {
          .policy-container {
            padding-top: 40px;
          }
        }
      `}</style>

      <div className="policy-container">
        <span className="policy-date">Effective Date: May 18, 2026</span>

        <div className="policy-section">
          <p className="policy-text">
            Welcome to Tags Bikez. By accessing or using our website, you agree to the following terms and conditions.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-title">Website Usage</h2>
          <p className="policy-text">
            This website is created to provide information about bikes, services, offers, and dealership-related updates. Users are expected to use the website responsibly and only for lawful purposes.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-title">Product & Service Information</h2>
          <p className="policy-text">
            We always try to keep the information on our website accurate and updated. However:
          </p>
          <ul className="policy-list">
            <li>Prices may change without prior notice</li>
            <li>Vehicle availability may vary</li>
            <li>Offers and specifications can change anytime</li>
          </ul>
          <p className="policy-text">
            We recommend confirming final details directly before making any purchase decision.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-title">Intellectual Property</h2>
          <p className="policy-text">
            All content on this website, including logos, images, text, graphics, and design elements, belongs to Tags Bikez unless mentioned otherwise. Unauthorized copying or reuse is not permitted.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-title">User Responsibilities</h2>
          <p className="policy-text">
            Users submitting enquiries or forms must provide genuine and accurate information. Any misuse, spam, or harmful activity through the website is strictly prohibited.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-title">Limitation of Liability</h2>
          <p className="policy-text">
            Tags Bikez is not responsible for any temporary website interruptions, technical issues, or losses resulting from the use of website information. Users access the website at their own discretion.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-title">Third-Party Links</h2>
          <p className="policy-text">
            Some pages may include links to external websites for additional information. We are not responsible for the content or privacy practices of those websites.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-title">Changes to Terms</h2>
          <p className="policy-text">
            We may update these Terms & Conditions at any time without prior notice. Continued use of the website after updates means you accept the revised terms.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-title">Governing Law</h2>
          <p className="policy-text">
            These Terms & Conditions are governed by the laws of India.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-title">Contact Us</h2>
          <p className="policy-text">
            For any questions regarding these Terms & Conditions, please contact us through our website.
          </p>
        </div>
      </div>
    </div>
  );
}
