"use client";
import React, { useState } from 'react';
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa6';
import { Mail, Phone, MapPin, Send, } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Map, MapControls, MapMarker, MarkerContent, MarkerTooltip } from "@/components/ui/map";
import { FaWhatsapp } from 'react-icons/fa';

const locations = [
  {
    name: 'TagsBikez Kuriachira',
    place: 'Kuriachira, Thrissur',
    sales: '7594960023',
    service: '7594960020',
    email: 'info.tags.tcr@gmail.com',
    mapUrl: 'https://share.google/9sW99PQ6cnIW0NHxz',
    coords: [76.2352, 10.5070],
  },
  {
    name: 'TagsBikez Patturaikkal',
    place: 'Patturaikkal, Thrissur',
    sales: '7594960033',
    service: '7594960068',
    email: 'info.tags.ptkl@gmail.com',
    mapUrl: 'https://share.google/fGbKJ2gv92UiGoBGQ',
    coords: [76.2124, 10.5363],
  },
  {
    name: 'TagsBikez Irinjalakuda',
    place: 'Irinjalakuda',
    sales: '7594951111',
    service: '7594960049',
    email: 'info.tags.irj@gmail.com',
    mapUrl: 'https://share.google/sJAgUFxrOSTiB4djY',
    coords: [76.2094, 10.3447],
  },
  {
    name: 'TagsBikez Vadakkencherry',
    place: 'Vadakkencherry',
    sales: '+917025282011',
    service: 'Coming soon',
    email: 'info.tags.vdy@gmail.com',
    mapUrl: '#',
    coords: [76.4823, 10.5928],
  },
  {
    name: 'TagsBikez Kodakara',
    place: 'Kodakara',
    sales: '+917594960033',
    service: 'Coming soon',
    email: 'info.tags.ptkl@gmail.com',
    mapUrl: '#',
    coords: [76.3087, 10.3711],
  },
];

const socialLinks = [
  { icon: <FaFacebookF />, url: '#', label: 'Facebook' },
  { icon: <FaWhatsapp />, url: '#', label: 'Whatsapp' },
  { icon: <FaInstagram />, url: '#', label: 'Instagram' },
  { icon: <FaYoutube />, url: '#', label: 'YouTube' },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section className="contact-section">
      <style>{`
        .contact-section {
          background: #fff;
          color: #111;
        }

        .contact-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 100px 20px;
        }

        .contact-header {
          margin-bottom: 80px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 40px;
        }

        .contact-header h1 {
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 800;
          line-height: 1.1;
          text-transform: uppercase;
          letter-spacing: -0.02em;
          margin: 0;
          flex: 1;
        }

        .contact-header-right {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          text-align: left;
          max-width: 320px;
        }

        .contact-header p {
          font-size: 16px;
          color: #666;
          margin: 0;
          line-height: 1.6;
        }

        .contact-insta-link {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #111;
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 10px 18px;
          border: 1px solid #e0e0e0;
          transition: all 0.3s ease;
        }

        .contact-insta-link:hover {
          background: #111;
          color: #fff;
          border-color: #111;
        }

        /* ── GRID LAYOUT ── */
        .main-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          border-top: 1px solid #e0e0e0;
          border-left: 1px solid #e0e0e0;
        }

        .grid-col {
          display: flex;
          flex-direction: column;
        }

        .locations-list-col {
          background: #fff;
          border-right: 1px solid #e0e0e0;
          max-height: 800px;
          display: flex;
          flex-direction: column;
        }

        .locations-list-header {
          padding: 30px 40px;
          border-bottom: 1px solid #e0e0e0;
        }

        .locations-list-header h3 {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: #e63020;
          margin: 0;
        }

        .locations-scroll-area {
          flex: 1;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: #eee transparent;
        }

        .locations-scroll-area::-webkit-scrollbar {
          width: 4px;
        }

        .locations-scroll-area::-webkit-scrollbar-thumb {
          background: #eee;
          border-radius: 10px;
        }

        .loc-list-item {
          padding: 40px;
          border-bottom: 1px solid #e0e0e0;
          transition: background 0.3s;
        }

        .loc-list-item:hover {
          background: #fcfcfc;
        }

        .loc-list-item .tag {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #e63020;
          margin-bottom: 12px;
          display: block;
        }

        .loc-list-item h4 {
          font-size: 18px;
          margin: 0 0 16px;
          font-weight: 700;
        }

        .loc-details {
          font-size: 13px;
          color: #444;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .loc-details span {
          display: block;
          margin-bottom: 4px;
        }

        .loc-details strong {
          color: #111;
          margin-right: 8px;
        }

        .loc-link {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          display: flex;
          align-items: center;
          gap: 8px;
          color: #111;
          text-decoration: none;
        }

        .loc-link:hover {
          color: #e63020;
        }

        .social-footer-cell {
          padding: 30px 40px;
          background: #fafafa;
          border-bottom: 1px solid #e0e0e0;
          border-top: 1px solid #e0e0e0;
        }

        .social-footer-cell h3 {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: #888;
          margin-bottom: 16px;
        }

        .social-row {
          display: flex;
          gap: 12px;
        }

        .social-link {
          width: 36px;
          height: 36px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: #111;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: #111;
          color: #fff;
          border-color: #111;
        }

        /* ── FORM ── */
        .form-cell {
          padding: 60px;
          border-right: 1px solid #e0e0e0;
          border-bottom: 1px solid #e0e0e0;
          background: #fafafa;
        }

        .input-group {
          margin-bottom: 32px;
          position: relative;
        }

        .input-group label {
          display: block;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #888;
          margin-bottom: 8px;
        }

        .input-group input,
        .input-group textarea {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid #e0e0e0;
          padding: 12px 0;
          font-size: 16px;
          outline: none;
          transition: border-color 0.3s;
        }

        .input-group input:focus,
        .input-group textarea:focus {
          border-bottom-color: #111;
        }

        .submit-btn {
          width: 100%;
          height: 64px;
          background: #e63020;
          color: #fff;
          border: none;
          font-size: 16px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          cursor: pointer;
          transition: background 0.3s;
        }

        .submit-btn:hover {
          background: #111;
        }

        .submit-btn:disabled {
          background: #ccc;
          cursor: not-allowed;
        }

        /* ── MAP ── */
        .map-wrapper {
          width: 100%;
          height: 600px;
          border-top: 1px solid #e0e0e0;
          border-bottom: 1px solid #e0e0e0;
          margin-top: 80px;
          position: relative;
        }

        .map-title-overlay {
          position: absolute;
          top: 40px;
          left: 40px;
          z-index: 10;
          background: #fff;
          padding: 24px 32px;
          border: 1px solid #e0e0e0;
        }

        .map-title-overlay h2 {
          font-size: 20px;
          margin: 0 0 8px;
          text-transform: uppercase;
          font-weight: 800;
        }

        .map-title-overlay p {
          font-size: 13px;
          color: #666;
          margin: 0;
        }

        /* ── LOCATIONS GRID ── */
        .locations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          border-left: 1px solid #e0e0e0;
          border-bottom: 1px solid #e0e0e0;
        }

        .loc-cell {
          padding: 40px;
          border-right: 1px solid #e0e0e0;
          border-bottom: 1px solid #e0e0e0;
          transition: background 0.3s;
          display: flex;
          flex-direction: column;
        }

        .loc-cell:hover {
          background: #f8f8f8;
        }

        .loc-cell .tag {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #e63020;
          margin-bottom: 16px;
          display: block;
        }

        .loc-cell h4 {
          font-size: 20px;
          margin: 0 0 20px;
          font-weight: 700;
        }

        .loc-details {
          font-size: 14px;
          color: #444;
          line-height: 1.8;
          margin-bottom: 24px;
          flex-grow: 1;
        }

        .loc-details span {
          display: block;
          margin-bottom: 4px;
        }

        .loc-details strong {
          color: #111;
          margin-right: 8px;
        }

        .loc-link {
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          display: flex;
          align-items: center;
          gap: 8px;
          color: #111;
          text-decoration: none;
          margin-top: auto;
        }

        .loc-link:hover {
          color: #e63020;
        }

        @media (max-width: 1024px) {
          .main-grid { grid-template-columns: 1fr; }
          .locations-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 768px) {
          .contact-header { flex-direction: column; align-items: flex-start; gap: 24px; }
          .contact-header h1 { font-size: 32px; }
          .form-cell { padding: 40px 20px; }
          .locations-grid { grid-template-columns: 1fr; }
          .map-wrapper { height: 400px; }
          .map-title-overlay { top: 20px; left: 20px; padding: 16px; }
        }
      `}</style>

      <div className="contact-container">
        <header className="contact-header">
          <h1>Let's Start a<br />Conversation.</h1>
          <div className="contact-header-right">
            <a href="https://www.instagram.com/tagsbikez/" target="_blank" rel="noopener noreferrer" className="contact-insta-link">
              <FaInstagram size={16} />
              @TAGSBIKEZ
            </a>
            <p>Get in touch with our nearest showroom for sales, service, or any inquiries.</p>
          </div>
        </header>

        <div className="main-grid">
          {/* LEFT: LOCATIONS LIST */}
          <div className="grid-col locations-list-col">
            <div className="locations-list-header">
              <h3>Our Showrooms</h3>
            </div>
            <div className="locations-scroll-area">
              {locations.map((loc, i) => (
                <div key={i} className="loc-list-item">
                  <span className="tag">{loc.place}</span>
                  <h4>{loc.name}</h4>
                  <div className="loc-details">
                    <span><strong>Sales:</strong> {loc.sales}</span>
                    <span><strong>Service:</strong> {loc.service}</span>
                    <span><strong>Email:</strong> {loc.email}</span>
                  </div>
                  {loc.mapUrl !== '#' && (
                    <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer" className="loc-link">
                      View on Google Maps 
                    </a>
                  )}
                </div>
              ))}
            </div>
            <div className="info-cell social-footer-cell">
              <h3>Follow Us</h3>
              <div className="social-row">
                {socialLinks.map((s, i) => (
                  <a key={i} href={s.url} className="social-link" aria-label={s.label}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="form-cell">
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label>Full Name</label>
                <input type="text" name="name" placeholder="John Doe" required
                  value={form.name} onChange={handleChange} disabled={status === 'submitting'} />
              </div>
              <div className="input-group">
                <label>Email Address</label>
                <input type="email" name="email" placeholder="john@example.com" required
                  value={form.email} onChange={handleChange} disabled={status === 'submitting'} />
              </div>
              <div className="input-group">
                <label>Subject</label>
                <input type="text" name="subject" placeholder="Inquiry about..." required
                  value={form.subject} onChange={handleChange} disabled={status === 'submitting'} />
              </div>
              <div className="input-group">
                <label>Message</label>
                <textarea name="message" placeholder="Tell us more..." rows={6} required
                  value={form.message} onChange={handleChange} disabled={status === 'submitting'} />
              </div>

              <button type="submit" className="submit-btn" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
               
              </button>
            </form>
          </div>
        </div>

        <div className="map-wrapper">
          <div className="map-title-overlay">
            <h2>Our Network</h2>
            <p>Spanning across Thrissur and beyond.</p>
          </div>
          <Map
            center={[76.22321, 10.507415]}
            zoom={10}
            scrollZoom={false}
            styles={{
              light: {
                version: 8,
                sources: {
                  osm: {
                    type: "raster",
                    tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
                    tileSize: 256,
                    attribution: "© OpenStreetMap contributors",
                    maxzoom: 19,
                  },
                },
                layers: [
                  {
                    id: "osm-tiles",
                    type: "raster",
                    source: "osm",
                    minzoom: 0,
                    maxzoom: 19,
                  },
                ],
              },
              dark: {
                version: 8,
                sources: {
                  osm: {
                    type: "raster",
                    tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
                    tileSize: 256,
                    attribution: "© OpenStreetMap contributors",
                    maxzoom: 19,
                  },
                },
                layers: [
                  {
                    id: "osm-tiles",
                    type: "raster",
                    source: "osm",
                    minzoom: 0,
                    maxzoom: 19,
                  },
                ],
              },
            }}
          >
            {locations.map((loc, i) => (
              <MapMarker
                key={i}
                longitude={loc.coords[0]}
                latitude={loc.coords[1]}
              >
                <MarkerContent />
                <MarkerTooltip>
                  <div style={{ padding: '10px' }}>
                    <strong>{loc.name}</strong>
                    <p style={{ fontSize: '11px', margin: '4px 0 0' }}>{loc.place}</p>
                  </div>
                </MarkerTooltip>
              </MapMarker>
            ))}
            <MapControls />
          </Map>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
