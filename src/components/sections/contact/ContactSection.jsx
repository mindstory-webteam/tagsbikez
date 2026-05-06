"use client";
import React, { useState, useRef, useEffect } from 'react';
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa6';
import { Mail, Phone, MapPin, } from 'lucide-react';
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
    socials: {
      whatsapp: 'https://wa.me/917594960023',
      facebook: 'https://www.facebook.com/tagsbikez',
      instagram: 'https://www.instagram.com/tagsbikez/',
    },
  },
  {
    name: 'TagsBikez Patturaikkal',
    place: 'Patturaikkal, Thrissur',
    sales: '7594960033',
    service: '7594960068',
    email: 'info.tags.ptkl@gmail.com',
    mapUrl: 'https://share.google/fGbKJ2gv92UiGoBGQ',
    coords: [76.2124, 10.5363],
    socials: { whatsapp: '#', facebook: '#', instagram: '#' },
  },
  {
    name: 'TagsBikez Irinjalakuda',
    place: 'Irinjalakuda',
    sales: '7594951111',
    service: '7594960049',
    email: 'info.tags.irj@gmail.com',
    mapUrl: 'https://share.google/sJAgUFxrOSTiB4djY',
    coords: [76.2094, 10.3447],
    socials: { whatsapp: '#', facebook: '#', instagram: '#' },
  },
  {
    name: 'TagsBikez Vadakkencherry',
    place: 'Vadakkencherry',
    sales: '+917025282011',
    service: 'Coming soon',
    email: 'info.tags.vdy@gmail.com',
    mapUrl: '#',
    coords: [76.4823, 10.5928],
    socials: { whatsapp: '#', facebook: '#', instagram: '#' },
  },
  {
    name: 'TagsBikez Kodakara',
    place: 'Kodakara',
    sales: '+917594960033',
    service: 'Coming soon',
    email: 'info.tags.ptkl@gmail.com',
    mapUrl: '#',
    coords: [76.3087, 10.3711],
    socials: { whatsapp: '#', facebook: '#', instagram: '#' },
  },
];

const socialLinks = [
  { icon: <FaFacebookF />, url: '#', label: 'Facebook' },
  { icon: <FaWhatsapp />, url: '#', label: 'Whatsapp' },
  { icon: <FaInstagram />, url: '#', label: 'Instagram' },
  { icon: <FaYoutube />, url: '#', label: 'YouTube' },
];

function CustomDropdown({ label, placeholder, options, value, onChange, disabled }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const selected = options.find((o) => o.value === value);

  return (
    <div className="input-group" ref={ref}>
      <label>{label}</label>
      <div
        className={`cd-wrap ${open ? 'cd-open' : ''} ${disabled ? 'cd-disabled' : ''}`}
        onClick={() => !disabled && setOpen(!open)}
      >
        <span className={`cd-value ${!selected ? 'cd-placeholder' : ''}`}>
          {selected ? selected.label : placeholder}
        </span>
        <svg
          className={`cd-chevron ${open ? 'cd-chevron-up' : ''}`}
          width="12" height="8" viewBox="0 0 12 8"
          fill="none" xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1l5 5 5-5" stroke="#888" strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      {open && (
        <div className="cd-menu">
          {options.map((opt) => (
            <div
              key={opt.value}
              className={`cd-option ${value === opt.value ? 'cd-option-active' : ''}`}
              onClick={() => { onChange(opt.value); setOpen(false); }}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const ContactSection = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    location: '',
    enquiryType: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDropdown = (field) => (val) => {
    setForm({ ...form, [field]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', location: '', enquiryType: '', message: '' });
    }, 1500);
  };

  const locationOptions = locations.map((loc) => ({
    value: loc.name,
    label: loc.name,
  }));

  const enquiryOptions = [
    { value: 'Sales', label: 'Sales' },
    { value: 'Service', label: 'Service' },
  ];

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
          font-size: 42px;
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

        .locations-scroll-area::-webkit-scrollbar { width: 4px; }
        .locations-scroll-area::-webkit-scrollbar-thumb {
          background: #eee;
          border-radius: 10px;
        }

        .loc-list-item {
          padding: 40px;
          border-bottom: 1px solid #e0e0e0;
          transition: background 0.3s;
        }

        .loc-list-item:hover { background: #fcfcfc; }

        .loc-list-item .tag {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #e63020;
          margin-bottom: 12px;
          display: block;
        }

        .loc-list-item h4 { font-size: 18px; margin: 0 0 16px; font-weight: 700; }

        .loc-details {
          font-size: 13px;
          color: #444;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .loc-details span { display: block; margin-bottom: 4px; }
        .loc-details strong { color: #111; margin-right: 8px; }

        .loc-social-row { display: flex; gap: 8px; margin-bottom: 16px; }

        .loc-social-btn {
          width: 32px;
          height: 32px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          color: #111;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .loc-social-btn:hover { background: #111; color: #fff; border-color: #111; }
        .loc-social-btn.whatsapp:hover { background: #25D366; border-color: #25D366; color: #fff; }
        .loc-social-btn.facebook:hover { background: #1877F2; border-color: #1877F2; color: #fff; }
        .loc-social-btn.instagram:hover { background: #E1306C; border-color: #E1306C; color: #fff; }

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

        .loc-link:hover { color: #e63020; }

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

        .social-row { display: flex; gap: 12px; }

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

        .social-link:hover { background: #111; color: #fff; border-color: #111; }

        /* ── FORM ── */
        .form-cell {
          padding: 60px;
          border-right: 1px solid #e0e0e0;
          border-bottom: 1px solid #e0e0e0;
          background: #fafafa;
        }

        .input-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
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
          color: #111;
        }

        .input-group input:focus,
        .input-group textarea:focus {
          border-bottom-color: #111;
        }

        /* ── CUSTOM DROPDOWN ── */
        .cd-wrap {
          position: relative;
          border-bottom: 1px solid #e0e0e0;
          padding: 12px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          transition: border-color 0.3s;
          user-select: none;
        }

        .cd-wrap:hover,
        .cd-open {
          border-bottom-color: #111;
        }

        .cd-disabled {
          opacity: 0.5;
          cursor: not-allowed;
          pointer-events: none;
        }

        .cd-value {
          font-size: 16px;
          color: #111;
        }

        .cd-placeholder {
          color: #aaa;
        }

        .cd-chevron {
          flex-shrink: 0;
          transition: transform 0.25s ease;
        }

        .cd-chevron-up {
          transform: rotate(180deg);
        }

        /* The dropdown menu */
        .cd-menu {
          position: absolute;
          top: calc(100% + 4px);
          left: 0;
          right: 0;
          background: #fff;
          border: 1px solid #e8e8e8;
          box-shadow: 0 8px 32px rgba(0,0,0,0.10);
          z-index: 100;
          max-height: 240px;
          overflow-y: auto;
          scrollbar-width: thin;
        }

        .cd-menu::-webkit-scrollbar { width: 4px; }
        .cd-menu::-webkit-scrollbar-thumb { background: #eee; }

        .cd-option {
          padding: 13px 18px;
          font-size: 14px;
          color: #333;
          cursor: pointer;
          transition: background 0.15s, color 0.15s;
          border-bottom: 1px solid #f5f5f5;
        }

        .cd-option:last-child { border-bottom: none; }

        .cd-option:hover {
          background: #fff1f0;
          color: #e63020;
        }

        /* Active / selected option highlighted in light red */
        .cd-option-active {
          background: #fff1f0;
          color: #e63020;
          font-weight: 600;
        }

        /* ── SUBMIT ── */
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

        .submit-btn:hover { background: #111; }
        .submit-btn:disabled { background: #ccc; cursor: not-allowed; }

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

        .map-title-overlay h2 { font-size: 20px; margin: 0 0 8px; text-transform: uppercase; font-weight: 800; }
        .map-title-overlay p { font-size: 13px; color: #666; margin: 0; }

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

        .loc-cell:hover { background: #f8f8f8; }

        .loc-cell .tag {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #e63020;
          margin-bottom: 16px;
          display: block;
        }

        .loc-cell h4 { font-size: 20px; margin: 0 0 20px; font-weight: 700; }

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
          .input-row { grid-template-columns: 1fr; }
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
                  <div className="loc-social-row">
                    <a href={loc.socials.whatsapp} target={loc.socials.whatsapp !== '#' ? '_blank' : '_self'} rel="noopener noreferrer" className="loc-social-btn whatsapp" aria-label="WhatsApp"><FaWhatsapp /></a>
                    <a href={loc.socials.facebook} target={loc.socials.facebook !== '#' ? '_blank' : '_self'} rel="noopener noreferrer" className="loc-social-btn facebook" aria-label="Facebook"><FaFacebookF /></a>
                    <a href={loc.socials.instagram} target={loc.socials.instagram !== '#' ? '_blank' : '_self'} rel="noopener noreferrer" className="loc-social-btn instagram" aria-label="Instagram"><FaInstagram /></a>
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
                  <a key={i} href={s.url} className="social-link" aria-label={s.label}>{s.icon}</a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="form-cell">
            <form onSubmit={handleSubmit}>

              <div className="input-row">
                <div className="input-group">
                  <label>Full Name</label>
                  <input type="text" name="name" placeholder="John Doe" required value={form.name} onChange={handleChange} disabled={status === 'submitting'} />
                </div>
                <div className="input-group">
                  <label>Email Address</label>
                  <input type="email" name="email" placeholder="john@example.com" required value={form.email} onChange={handleChange} disabled={status === 'submitting'} />
                </div>
              </div>

              <div className="input-row">
                {/* Custom dropdown — Showroom */}
                <CustomDropdown
                  label="Select Showroom"
                  placeholder="Choose a location..."
                  options={locationOptions}
                  value={form.location}
                  onChange={handleDropdown('location')}
                  disabled={status === 'submitting'}
                />
                {/* Custom dropdown — Enquiry Type */}
                <CustomDropdown
                  label="Enquiry Type"
                  placeholder="Sales or Service?"
                  options={enquiryOptions}
                  value={form.enquiryType}
                  onChange={handleDropdown('enquiryType')}
                  disabled={status === 'submitting'}
                />
              </div>

              <div className="input-group">
                <label>Message</label>
                <textarea name="message" placeholder="Tell us more..." rows={6} required value={form.message} onChange={handleChange} disabled={status === 'submitting'} />
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
                sources: { osm: { type: "raster", tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"], tileSize: 256, attribution: "© OpenStreetMap contributors", maxzoom: 19 } },
                layers: [{ id: "osm-tiles", type: "raster", source: "osm", minzoom: 0, maxzoom: 19 }],
              },
              dark: {
                version: 8,
                sources: { osm: { type: "raster", tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"], tileSize: 256, attribution: "© OpenStreetMap contributors", maxzoom: 19 } },
                layers: [{ id: "osm-tiles", type: "raster", source: "osm", minzoom: 0, maxzoom: 19 }],
              },
            }}
          >
            {locations.map((loc, i) => (
              <MapMarker key={i} longitude={loc.coords[0]} latitude={loc.coords[1]}>
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