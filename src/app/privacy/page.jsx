import React from "react";

export const metadata = {
  title: "Privacy Policy | Tags Bikez Royal Enfield Showroom Thrissur",
  description: "Read our Privacy Policy to understand how Tags Bikez collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="policy-wrapper">
      <style>{`
        .policy-wrapper {
          background: #0a0a0a;
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
          color: #cccccc;
        }
        .policy-section {
          margin-bottom: 48px;
        }
        .policy-title {
          font-family: var(--font-oswald), sans-serif;
          font-size: 24px;
          text-transform: uppercase;
          color: #ffffff;
          margin: 0 0 20px 0;
          letter-spacing: 0.05em;
        }
        .policy-text {
          margin: 0 0 16px 0;
          color: #b0b0b0;
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
          color: #d0d0d0;
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
          color: #666666;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 40px;
          border-bottom: 1px solid #222222;
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
          color: #ffffff;
        }
      `}</style>

      <div className="policy-container">
        <span className="policy-date">Effective Date: May 18, 2026</span>

        <div className="policy-section">
          <p className="policy-text">
            At Tags Bikez, we value your privacy and are committed to protecting the information you share with us. This policy explains what information we collect, how we use it, and how we keep it safe when you visit our website.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-title">Information We Collect</h2>
          <p className="policy-text">
            When you interact with our website, we may collect details such as:
          </p>
          <ul className="policy-list">
            <li>Your name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Location details</li>
            <li>Bike enquiry or service-related information</li>
          </ul>
          <p className="policy-text">
            We may also automatically collect basic technical information like your browser type, device details, IP address, and website activity to improve user experience.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-title">How We Use Your Information</h2>
          <p className="policy-text">
            The information collected helps us to:
          </p>
          <ul className="policy-list">
            <li>Respond to your enquiries</li>
            <li>Share details about bikes, services, and offers</li>
            <li>Improve our website and customer experience</li>
            <li>Contact you regarding appointments or requests</li>
            <li>Maintain internal business records</li>
          </ul>
        </div>

        <div className="policy-section">
          <h2 className="policy-title">Cookies</h2>
          <p className="policy-text">
            Our website may use cookies to improve performance and understand visitor activity. You can disable cookies anytime through your browser settings if you prefer.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-title">Data Security</h2>
          <p className="policy-text">
            We take reasonable measures to protect your information from unauthorized access or misuse. However, while we work hard to keep your data secure, no online platform can guarantee complete security.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-title">Third-Party Services</h2>
          <p className="policy-text">
            We may use trusted third-party tools for hosting, analytics, or communication purposes. These services may collect limited technical data required for their operations.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-title">Sharing Your Information</h2>
          <p className="policy-text">
            We do not sell or trade your personal information. Your data will only be shared when necessary for legal requirements or business operations related to customer support and services.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-title">External Links</h2>
          <p className="policy-text">
            Our website may contain links to other websites. We are not responsible for the privacy practices or content of third-party websites.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-title">Updates to This Policy</h2>
          <p className="policy-text">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-title">Contact Us</h2>
          <p className="policy-text">
            If you have any questions regarding this Privacy Policy, feel free to contact us through our website.
          </p>
        </div>
      </div>
    </div>
  );
}
