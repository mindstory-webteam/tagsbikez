"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { 
  ChevronDown, 
  ChevronUp, 
  MapPin,
  Phone,
  Clock,
  Star,
  ChevronRight
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { bikeData } from "@/lib/data/bikes";
import { img } from "@/assets/assest";
import { Map, MapControls, MapMarker, MarkerContent, MarkerTooltip } from "@/components/ui/map";
import AnimatedBtn from "@/components/AnimatedBtn";

// 8 Authorized Tags Bikez Showroom Locations with details & map coordinates
const SHOWROOMS = [
  {
    id: "kuriachira",
    name: "TagsBikez Kuriachira",
    city: "Thrissur",
    rating: "4.9",
    desc: "Welcome to Tags Bikez, Authorized Royal Enfield Dealer in Kuriachira, Thrissur. Experience Pure Motorcycling at its best with Genuine Accessories and Apparel. Plan your visit to our authorised dealership for superior services and free test rides.",
    address: "Kuriachira, Thrissur, Kerala - 680006",
    phone: "+91 7594960023",
    waPhone: "917594960023",
    timing: "Mon - Sat | 09:00 AM - 06:30 PM • Sun: 10:00 AM - 03:00 PM",
    mapUrl: "https://maps.app.goo.gl/Ph4Z1EwxQajAN4Nm7",
    coords: [76.22384, 10.507183],
  },
  {
    id: "patturaikkal",
    name: "TagsBikez Patturaikkal",
    city: "Thrissur",
    rating: "4.9",
    desc: "Welcome to Tags Bikez, Authorized Royal Enfield Dealer in Patturaikkal, Thrissur. Central Showroom and Service Hub offering the full Royal Enfield range, factory diagnostics, and test rides.",
    address: "Patturaikkal, Thrissur, Kerala - 680022",
    phone: "+91 7594960033",
    waPhone: "917594960033",
    timing: "Mon - Sat | 09:00 AM - 06:30 PM • Sun: 10:00 AM - 03:00 PM",
    mapUrl: "https://maps.app.goo.gl/ynMnJUT4sSbtvYYL6",
    coords: [76.21218, 10.538669],
  },
  {
    id: "irinjalakuda",
    name: "TagsBikez Irinjalakuda",
    city: "Irinjalakuda",
    rating: "4.9",
    desc: "Welcome to Tags Bikez, Authorized Royal Enfield Dealer in Irinjalakuda. Complete sales, test rides, genuine accessories, and factory-trained service technicians.",
    address: "Main Road, Irinjalakuda, Kerala - 680121",
    phone: "+91 7594951111",
    waPhone: "917594951111",
    timing: "Mon - Sat | 09:00 AM - 06:30 PM • Sun: 10:00 AM - 03:00 PM",
    mapUrl: "https://maps.app.goo.gl/28R6ne6ZkCMv2x4K6",
    coords: [76.218931, 10.364498],
  },
];

const TIME_SLOTS = [
  { id: "morning", label: "Morning (10:00 AM - 12:00 PM)" },
  { id: "midday", label: "Midday (12:00 PM - 02:00 PM)" },
  { id: "afternoon", label: "Afternoon (02:00 PM - 04:00 PM)" },
  { id: "evening", label: "Evening (04:00 PM - 06:00 PM)" },
];

const FAQS = [
  {
    q: "Is the Royal Enfield test ride completely free?",
    a: "Yes, 100% free! There are no hidden fees, fuel charges, or obligations. We want you to experience the authentic power, smooth chassis, and signature thump before deciding.",
  },
  {
    q: "What documents do I need to bring to the showroom?",
    a: "You must carry your original valid Driving License for Two-Wheelers (Motorcycle with Gear). Digital copies on DigiLocker / mParivahan are also accepted.",
  },
  {
    q: "Can I test ride multiple Royal Enfield models?",
    a: "Absolutely! If you are debating between models (e.g., Hunter 350 vs Classic 350, or Himalayan 450 vs Guerrilla 450), let our Ride Specialist know and we will arrange back-to-back rides for you.",
  },
  {
    q: "Do I need to bring my own helmet?",
    a: "We strongly encourage bringing your own DOT/ISI-certified helmet for personal comfort and hygiene. However, sanitized helmets are also readily available at all Tags Bikez showrooms.",
  },
  {
    q: "Can a pillion rider accompany me on the test ride?",
    a: "Yes, you are welcome to bring a pillion rider so you can both evaluate pillion comfort, ergonomics, and posture. The pillion must also wear a helmet and closed footwear.",
  },
  {
    q: "Can I get an on-road quotation and exchange valuation during the visit?",
    a: "Yes! Our finance and exchange evaluators are on-site at all Tags Bikez branches. You can get a spot valuation of your existing bike and a customized EMI breakdown on the same day.",
  },
];

export default function TestRideBooking() {
  const searchParams = useSearchParams();
  const preSelectedBikeSlug = searchParams.get("bike") || "";
  const preSelectedLocation = searchParams.get("location") || "";

  // Available motorcycles
  const availableBikes = useMemo(() => {
    return bikeData.filter((b) => !b.comingSoon);
  }, []);

  // Form State
  const [selectedBikeSlug, setSelectedBikeSlug] = useState(() => {
    if (preSelectedBikeSlug) {
      const match = availableBikes.find((b) => b.slug === preSelectedBikeSlug);
      if (match) return match.slug;
    }
    return availableBikes[0]?.slug || "";
  });

  const [selectedShowroomIndex, setSelectedShowroomIndex] = useState(() => {
    if (preSelectedLocation) {
      const idx = SHOWROOMS.findIndex(
        (s) =>
          s.id.toLowerCase().includes(preSelectedLocation.toLowerCase()) ||
          s.name.toLowerCase().includes(preSelectedLocation.toLowerCase()) ||
          s.city.toLowerCase().includes(preSelectedLocation.toLowerCase())
      );
      if (idx !== -1) return idx;
    }
    return 0;
  });

  // Active Showroom on the Map section (synced with form showroom by default)
  const [activeMapIndex, setActiveMapIndex] = useState(() => {
    if (preSelectedLocation) {
      const idx = SHOWROOMS.findIndex(
        (s) =>
          s.id.toLowerCase().includes(preSelectedLocation.toLowerCase()) ||
          s.name.toLowerCase().includes(preSelectedLocation.toLowerCase()) ||
          s.city.toLowerCase().includes(preSelectedLocation.toLowerCase())
      );
      if (idx !== -1) return idx;
    }
    return 0;
  });

  const todayStr = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  }, []);

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [rideDate, setRideDate] = useState(todayStr);
  const [timeSlot, setTimeSlot] = useState("morning");
  const [hasLicense, setHasLicense] = useState(true);
  const [errors, setErrors] = useState({});
  const [activeFaq, setActiveFaq] = useState(0);

  // Sync with URL query params
  useEffect(() => {
    if (preSelectedBikeSlug) {
      const match = availableBikes.find((b) => b.slug === preSelectedBikeSlug);
      if (match) setSelectedBikeSlug(match.slug);
    }
  }, [preSelectedBikeSlug, availableBikes]);

  useEffect(() => {
    if (preSelectedLocation) {
      const idx = SHOWROOMS.findIndex(
        (s) =>
          s.id.toLowerCase().includes(preSelectedLocation.toLowerCase()) ||
          s.name.toLowerCase().includes(preSelectedLocation.toLowerCase()) ||
          s.city.toLowerCase().includes(preSelectedLocation.toLowerCase())
      );
      if (idx !== -1) {
        setSelectedShowroomIndex(idx);
        setActiveMapIndex(idx);
      }
    }
  }, [preSelectedLocation]);

  const currentBike = useMemo(() => {
    return availableBikes.find((b) => b.slug === selectedBikeSlug) || availableBikes[0];
  }, [availableBikes, selectedBikeSlug]);

  const currentShowroom = SHOWROOMS[selectedShowroomIndex] || SHOWROOMS[0];
  const activeMapShowroom = SHOWROOMS[activeMapIndex] || SHOWROOMS[0];

  const validateForm = () => {
    const errs = {};
    if (!fullName.trim()) errs.fullName = "Please enter your name";
    if (!phone.trim()) {
      errs.phone = "Please enter your 10-digit mobile number";
    } else if (!/^[0-9]{10}$/.test(phone.replace(/\D/g, "").slice(-10))) {
      errs.phone = "Please enter a valid 10-digit number";
    }
    if (!rideDate) errs.rideDate = "Please choose a date";
    if (!hasLicense) errs.hasLicense = "Valid Driving License is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleWhatsAppBooking = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const refId = `TB-TR-${randomNum}`;
    const slotLabel = TIME_SLOTS.find((s) => s.id === timeSlot)?.label || timeSlot;
    const targetWa = "917594960023";

    const msg = `*NEW ROYAL ENFIELD TEST RIDE BOOKING*
*Ref ID:* ${refId}
----------------------------------
*Motorcycle:* ${currentBike?.name || "Royal Enfield"}
*Date:* ${rideDate}
*Preferred Slot:* ${slotLabel}
----------------------------------
*Rider Details:*
• Name: ${fullName}
• Phone: ${phone}
• Valid License: Yes (Will carry to showroom)
----------------------------------
_Booked via Tags Bikez Website_`;

    const waUrl = `https://wa.me/${targetWa}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="tr-white-root">
      <style>{`
        .tr-white-root {
          background-color: #ffffff;
          color: #111111;
          min-height: 100vh;
          font-family: var(--font-inter), sans-serif;
        }

        /* ── Hero Banner Section (Full Banner Image Background) ── */
        .tr-hero-banner-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          min-height: 100dvh;
          overflow: hidden;
          background: #111111;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 130px 0 60px;
          box-sizing: border-box;
        }

        /* Full Background Image */
        .tr-banner-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .tr-banner-bg img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          opacity: 1;
        }

        /* Balanced Black Overlay: Soft dark vignette on left for text legibility, preserving full image visibility */
        .tr-banner-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.58) 0%,
            rgba(0, 0, 0, 0.38) 32%,
            rgba(0, 0, 0, 0.10) 62%,
            rgba(0, 0, 0, 0) 100%
          );
          z-index: 1;
        }

        /* Banner overlay on tablet & mobile */
        @media (max-width: 1024px) {
          .tr-banner-overlay {
            background: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.68) 0%,
              rgba(0, 0, 0, 0.42) 40%,
              rgba(0, 0, 0, 0.65) 100%
            );
          }
        }

        /* Small screens (<= 768px): Hide banner image and heading "Free Test Ride Feel The Thrill First" */
        @media (max-width: 768px) {
          .tr-hero-banner-section {
            background: #000000 !important;
            min-height: auto;
            padding: 95px 0 45px;
          }

          .tr-banner-bg {
            display: none !important;
          }

          .tr-left-col {
            display: none !important;
          }

          .tr-hero-container {
            grid-template-columns: 1fr;
            padding: 0 16px;
            justify-content: center;
          }

          .tr-right-col {
            width: 100%;
            display: flex;
            justify-content: center;
          }

          .tr-card {
            margin: 0 auto;
            width: 100%;
            max-width: 480px;
          }
        }

        /* ── 2-Column Grid Over the Banner ── */
        .tr-hero-container {
          position: relative;
          z-index: 3;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          width: 100%;
          box-sizing: border-box;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 48px;
          align-items: center;
        }

        @media (max-width: 1024px) {
          .tr-hero-banner-section {
            padding: 120px 0 60px;
            min-height: auto;
          }

          .tr-hero-container {
            grid-template-columns: 1fr;
            gap: 36px;
            padding: 0 20px;
          }

          .tr-left-col {
            max-width: 100%;
            text-align: center;
            align-items: center;
            margin: 0 auto;
            padding-top: 24px;
          }

          .tr-main-subtitle {
            max-width: 620px;
            margin: 0 auto;
          }

          .tr-right-col {
            width: 100%;
          }

          .tr-card {
            margin: 0 auto;
          }
        }

        @media (max-width: 640px) {
          .tr-hero-banner-section {
            padding: 85px 0 35px;
          }

          .tr-hero-container {
            padding: 0 14px;
            gap: 20px;
          }
        }

        /* ── Left Side: 2-Line Heading ── */
        .tr-left-col {
          display: flex;
          flex-direction: column;
          justify-content: center;
          max-width: 580px;
          padding-top: clamp(40px, 6vw, 90px);
          box-sizing: border-box;
        }

        .tr-main-title {
          font-family: var(--font-oswald), sans-serif;
          font-size: clamp(30px, 4.2vw, 54px);
          font-weight: 700;
          text-transform: uppercase;
          color: #ffffff;
          line-height: 1.15;
          margin: 0 0 18px 0;
          padding-top: clamp(30px, 5vw, 70px);
          letter-spacing: 0.01em;
          text-shadow: 0 3px 14px rgba(0, 0, 0, 0.75);
        }

        .tr-main-title span {
          display: block;
          color: #f51b24;
          padding-top: 8px;
          text-shadow: 0 3px 14px rgba(0, 0, 0, 0.75);
        }

        .tr-main-subtitle {
          font-size: clamp(14px, 1.4vw, 17px);
          color: rgba(255, 255, 255, 0.95);
          line-height: 1.7;
          margin: 0;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.75);
        }

        /* ── Right Side: Crisp Pure White Booking Form Card ── */
        .tr-right-col {
          display: flex;
          justify-content: center;
        }

        .tr-card {
          width: 100%;
          max-width: 480px;
          background: #ffffff;
          color: #111111;
          border-radius: 16px;
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4);
          padding: 32px 28px;
          box-sizing: border-box;
          border: 1px solid #ffffff;
        }

        @media (max-width: 640px) {
          .tr-card {
            padding: 24px 18px;
            border-radius: 12px;
          }
        }

        @media (max-width: 380px) {
          .tr-card {
            padding: 20px 14px;
          }
        }

        .tr-card-title {
          font-family: var(--font-oswald), sans-serif;
          font-size: clamp(20px, 2.4vw, 24px);
          font-weight: 700;
          text-transform: uppercase;
          color: #111111;
          margin: 0 0 4px 0;
        }

        .tr-card-desc {
          font-size: 13px;
          color: #666666;
          margin: 0 0 20px 0;
        }

        .tr-field-group {
          margin-bottom: 16px;
        }

        .tr-label {
          display: block;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #222222;
          margin-bottom: 6px;
        }

        .tr-input, .tr-select {
          width: 100%;
          background: #ffffff;
          border: 1px solid #d4d4d4;
          border-radius: 8px;
          padding: 11px 14px;
          font-size: 14px;
          color: #111111;
          box-sizing: border-box;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          font-family: inherit;
        }

        @media (max-width: 768px) {
          .tr-input, .tr-select {
            font-size: 16px; /* Prevents auto-zoom on iOS Safari */
          }
        }

        .tr-input:focus, .tr-select:focus {
          border-color: #f51b24;
          box-shadow: 0 0 0 3px rgba(245, 27, 36, 0.1);
        }

        .tr-input-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        @media (max-width: 540px) {
          .tr-input-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }

        .tr-error {
          color: #e5252a;
          font-size: 11px;
          margin-top: 4px;
          font-weight: 500;
        }

        .tr-checkbox {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 10px;
          padding: 10px 14px;
          background: #f9f9f9;
          border: 1px solid #eeeeee;
          border-radius: 8px;
          cursor: pointer;
        }

        .tr-checkbox input {
          width: 16px;
          height: 16px;
          accent-color: #f51b24;
          cursor: pointer;
          flex-shrink: 0;
        }

        .tr-checkbox span {
          font-size: 11.5px;
          color: #333333;
          line-height: 1.35;
        }

        .tr-submit-btn {
          width: 100%;
          background: #25d366;
          color: #ffffff;
          border: none;
          border-radius: 8px;
          padding: 14px 18px;
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          cursor: pointer;
          margin-top: 18px;
          transition: all 0.2s ease;
          box-shadow: 0 4px 14px rgba(37, 211, 102, 0.3);
        }

        .tr-submit-btn:hover {
          background: #1ebc59;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
        }

        /* ── Showroom Map Section (Above FAQ) ── */
        .tr-map-section {
          background: #ffffff;
          padding: 80px 24px 60px;
          max-width: 1280px;
          margin: 0 auto;
          box-sizing: border-box;
          width: 100%;
        }

        @media (max-width: 1024px) {
          .tr-map-section {
            padding: 60px 20px 50px;
          }
        }

        @media (max-width: 640px) {
          .tr-map-section {
            padding: 48px 16px 36px;
          }
        }

        .tr-map-header {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 28px;
          padding: 0 12px;
          box-sizing: border-box;
        }

        @media (max-width: 640px) {
          .tr-map-header {
            margin-bottom: 20px;
          }
        }

        .tr-map-header h2 {
          font-family: var(--font-oswald), sans-serif;
          font-size: clamp(22px, 3.5vw, 28px);
          font-weight: 600;
          text-transform: uppercase;
          color: #111111;
          margin: 0 0 6px 0;
        }

        .tr-map-header p {
          font-size: clamp(13px, 1.5vw, 14px);
          color: #666666;
          margin: 0;
        }

        /* 2-Column Map Block: Left Info, Right Map (Matching User Screenshot) */
        .tr-map-card-wrap {
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);
          display: grid;
          grid-template-columns: 460px 1fr;
          background: #242424;
          min-height: 520px;
          width: 100%;
          box-sizing: border-box;
        }

        @media (max-width: 1024px) {
          .tr-map-card-wrap {
            grid-template-columns: 1fr;
            min-height: auto;
          }
        }

        /* Left Side of Map Section: Dark Dealer Card */
        .tr-map-left-info {
          background: #242424;
          color: #ffffff;
          padding: 44px 38px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          border-right: 1px solid #333333;
          box-sizing: border-box;
        }

        @media (max-width: 1024px) {
          .tr-map-left-info {
            border-right: none;
            border-bottom: 1px solid #333333;
            padding: 36px 28px;
          }
        }

        @media (max-width: 640px) {
          .tr-map-left-info {
            padding: 28px 18px;
          }
        }

        .tr-info-top {
          display: flex;
          flex-direction: column;
        }

        .tr-dealer-title {
          font-family: var(--font-oswald), sans-serif;
          font-size: clamp(22px, 3vw, 32px);
          font-weight: 700;
          text-transform: uppercase;
          color: #ffffff;
          margin: 0 0 16px 0;
          line-height: 1.15;
          letter-spacing: 0.02em;
        }

        .tr-dealer-desc {
          font-size: clamp(13px, 1.4vw, 14px);
          color: #bbbbbb;
          line-height: 1.65;
          margin: 0 0 28px 0;
        }

        .tr-dealer-contact-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .tr-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: clamp(12.5px, 1.4vw, 14px);
          color: #dddddd;
          line-height: 1.45;
          word-break: break-word;
        }

        .tr-contact-item svg {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .tr-contact-item a {
          color: #ffffff;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.2s;
        }

        .tr-contact-item a:hover {
          color: #f51b24;
        }

        /* Right Side: Map Canvas + Direction Bar */
        .tr-map-right-wrap {
          display: flex;
          flex-direction: column;
          width: 100%;
          min-height: 520px;
          height: 100%;
          background: #1e1e1e;
          box-sizing: border-box;
        }

        @media (max-width: 1024px) {
          .tr-map-right-wrap {
            min-height: 420px;
          }
        }

        @media (max-width: 640px) {
          .tr-map-right-wrap {
            min-height: 360px;
          }
        }

        .tr-map-canvas-wrap {
          position: relative;
          width: 100%;
          flex: 1;
          min-height: 460px;
          height: 100%;
          background: #282828;
        }

        @media (max-width: 1024px) {
          .tr-map-canvas-wrap {
            min-height: 360px;
          }
        }

        @media (max-width: 640px) {
          .tr-map-canvas-wrap {
            min-height: 300px;
          }
        }

        /* Direction Button Bar at bottom of map */
        .tr-direction-bar {
          background: #363636;
          border-top: 1px solid #444444;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .tr-direction-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 16px 24px;
          color: #ffffffff;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          width: 100%;
          box-sizing: border-box;
          transition: background 0.2s, color 0.2s;
        }

        @media (max-width: 640px) {
          .tr-direction-btn {
            padding: 14px 18px;
            font-size: 12px;
          }
        }

        .tr-direction-btn:hover {
          background: #2b2b2b;
          color: #ff0000ff;
        }

        /* ── FAQ Section (Pure White Container Below Map) ── */
        .tr-faq-section {
          background: #ffffff;
          padding: 60px 24px 80px;
          max-width: 860px;
          margin: 0 auto;
          box-sizing: border-box;
          width: 100%;
        }

        @media (max-width: 1024px) {
          .tr-faq-section {
            padding: 50px 20px 70px;
          }
        }

        @media (max-width: 640px) {
          .tr-faq-section {
            padding: 40px 16px 50px;
          }
        }

        .tr-faq-h {
          text-align: center;
          margin-bottom: 28px;
        }

        @media (max-width: 640px) {
          .tr-faq-h {
            margin-bottom: 20px;
          }
        }

        .tr-faq-h h2 {
          font-family: var(--font-oswald), sans-serif;
          font-size: clamp(22px, 3.5vw, 28px);
          font-weight: 600;
          text-transform: uppercase;
          color: #111111;
          margin: 0 0 6px 0;
        }

        .tr-faq-h p {
          font-size: clamp(13px, 1.5vw, 14px);
          color: #666666;
          margin: 0;
        }

        .tr-faq-item {
          background: #ffffff;
          border: 1px solid #e5e5e5;
          border-radius: 8px;
          margin-bottom: 12px;
          overflow: hidden;
          transition: border-color 0.2s;
        }

        .tr-faq-item:hover {
          border-color: #d1d1d1;
        }

        .tr-faq-q {
          padding: 16px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          font-size: clamp(13.5px, 1.6vw, 15px);
          font-weight: 600;
          color: #111111;
          gap: 12px;
        }

        @media (max-width: 640px) {
          .tr-faq-q {
            padding: 14px 16px;
          }
        }

        .tr-faq-a {
          padding: 0 20px 16px;
          font-size: clamp(12.5px, 1.4vw, 13px);
          color: #555555;
          line-height: 1.6;
        }

        @media (max-width: 640px) {
          .tr-faq-a {
            padding: 0 16px 14px;
          }
        }
      `}</style>

      {/* 1. Hero Banner Section with test-ride-royal-enfield.jpg as Full Background without black tint */}
      <section className="tr-hero-banner-section">
        {/* Full Background Banner Image */}
        <div className="tr-banner-bg">
          <Image
            src={img.testRideBanner}
            alt="Royal Enfield Test Ride Banner"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 45%" }}
          />
          <div className="tr-banner-overlay" />
        </div>

        {/* 2-Column Grid Over the Banner */}
        <div className="tr-hero-container">
          {/* Left Side: 2-Line Heading */}
          <div className="tr-left-col">
            <h1 className="tr-main-title">
              Free Test Ride <br />
              <span>Feel The Thrill First</span>
            </h1>
          </div>

          {/* Right Side: Clean Solid White Booking Form Card */}
          <div className="tr-right-col">
            <div className="tr-card">
              <h2 className="tr-card-title">
                Book Your Test Ride
              </h2>
              <p className="tr-card-desc">
                Select your machine and preferred date. Instant slot reservation via WhatsApp.
              </p>

              <form onSubmit={handleWhatsAppBooking}>
                <div className="tr-input-row">
                  <div className="tr-field-group">
                    <label className="tr-label">Your Full Name *</label>
                    <input
                      type="text"
                      className="tr-input"
                      placeholder="e.g. John doe"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                    {errors.fullName && <div className="tr-error">{errors.fullName}</div>}
                  </div>

                  <div className="tr-field-group">
                    <label className="tr-label">WhatsApp / Phone *</label>
                    <input
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={10}
                      className="tr-input"
                      placeholder="e.g. 9876543210"
                      value={phone}
                      onChange={(e) => {
                        const onlyNums = e.target.value.replace(/\D/g, "").slice(0, 10);
                        setPhone(onlyNums);
                      }}
                    />
                    {errors.phone && <div className="tr-error">{errors.phone}</div>}
                  </div>
                </div>

                <div className="tr-field-group">
                  <label className="tr-label">Select Motorcycle *</label>
                  <select
                    className="tr-select"
                    value={selectedBikeSlug}
                    onChange={(e) => setSelectedBikeSlug(e.target.value)}
                  >
                    {availableBikes.map((bike) => (
                      <option key={bike.slug} value={bike.slug}>
                        {bike.name} {bike.engineCapacity ? `(${bike.engineCapacity})` : ""}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="tr-input-row">
                  <div className="tr-field-group">
                    <label className="tr-label">Preferred Date *</label>
                    <input
                      type="date"
                      className="tr-input"
                      min={todayStr}
                      value={rideDate}
                      onChange={(e) => setRideDate(e.target.value)}
                    />
                    {errors.rideDate && <div className="tr-error">{errors.rideDate}</div>}
                  </div>

                  <div className="tr-field-group">
                    <label className="tr-label">Preferred Time Slot *</label>
                    <select
                      className="tr-select"
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                    >
                      {TIME_SLOTS.map((slot) => (
                        <option key={slot.id} value={slot.id}>
                          {slot.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <label className="tr-checkbox">
                  <input
                    type="checkbox"
                    checked={hasLicense}
                    onChange={(e) => setHasLicense(e.target.checked)}
                  />
                  <span>I hold a valid two-wheeler Driving License and will present it at the showroom.</span>
                </label>
                {errors.hasLicense && <div className="tr-error">{errors.hasLicense}</div>}

                <AnimatedBtn
                  type="submit"
                  bgColor="#25D366"
                  hoverColor="#111111"
                  style={{
                    width: "100%",
                    height: "54px",
                    fontSize: "15px",
                    fontFamily: "var(--font-oswald), sans-serif",
                    letterSpacing: "0.06em",
                    marginTop: "10px",
                    borderRadius: "8px",
                  }}
                >
                  Book Test Ride via WhatsApp
                </AnimatedBtn>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Showroom Map Section (Above FAQ - Matching Contact Map & User Screenshot) */}
      <section className="tr-map-section">
        <div className="tr-map-header">
          <h2>Find Your Nearest Showroom</h2>
          <p>
            Experience the motorcycle in person. Explore our showroom locations, contact details, and directions below.
          </p>
        </div>

        {/* 2-Column Dealer Map Card */}
        <div className="tr-map-card-wrap">
          {/* Left Side: Dark Info Card */}
          <div className="tr-map-left-info">
            <div className="tr-info-top">
              <h3 className="tr-dealer-title">{activeMapShowroom.name}</h3>

              <p className="tr-dealer-desc">{activeMapShowroom.desc}</p>

              <div className="tr-dealer-contact-list">
                <div className="tr-contact-item">
                  <MapPin size={18} color="#f51b24" />
                  <span>{activeMapShowroom.address}</span>
                </div>

                <div className="tr-contact-item">
                  <Phone size={18} color="#f51b24" />
                  <div>
                    <a href={`tel:${activeMapShowroom.phone}`}>{activeMapShowroom.phone}</a>
                  </div>
                </div>

                <div className="tr-contact-item">
                  <FaWhatsapp size={18} color="#25D366" />
                  <div>
                    <a
                      href={`https://wa.me/${activeMapShowroom.waPhone}?text=Hi%20Tags%20Bikez,%20I%20want%20to%20visit%20the%20${encodeURIComponent(activeMapShowroom.name)}%20showroom.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chat with us
                    </a>
                  </div>
                </div>

                <div className="tr-contact-item">
                  <Clock size={18} color="#f51b24" />
                  <span>{activeMapShowroom.timing}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Map Canvas + Direction Bar */}
          <div className="tr-map-right-wrap">
            <div className="tr-map-canvas-wrap">
              <Map
                key={activeMapShowroom.id}
                center={activeMapShowroom.coords}
                zoom={13}
                scrollZoom={false}
                styles={{
                  light: {
                    version: 8,
                    sources: {
                      osm: {
                        type: "raster",
                        tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
                        tileSize: 256,
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
                {SHOWROOMS.map((sh, idx) => (
                  <MapMarker
                    key={sh.id}
                    longitude={sh.coords[0]}
                    latitude={sh.coords[1]}
                    onClick={() => setActiveMapIndex(idx)}
                  >
                    <MarkerContent />
                    <MarkerTooltip>
                      <div style={{ padding: "8px 12px" }}>
                        <strong style={{ fontSize: "13px", color: "#111" }}>{sh.name}</strong>
                        <p style={{ fontSize: "11px", color: "#666", margin: "2px 0 0" }}>{sh.address}</p>
                      </div>
                    </MarkerTooltip>
                  </MapMarker>
                ))}
                <MapControls />
              </Map>
            </div>

            {/* Bottom Direction Button under the map */}
            <div className="tr-direction-bar">
              <a
                href={activeMapShowroom.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="tr-direction-btn"
              >
                GET DIRECTION <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ Section on Pure White Background */}
      <section className="tr-faq-section">
        <div className="tr-faq-h">
          <h2>Frequently Asked Questions</h2>
          <p>Have questions before your ride? We have you covered.</p>
        </div>

        {FAQS.map((faq, idx) => {
          const isOpen = activeFaq === idx;
          return (
            <div key={idx} className="tr-faq-item">
              <div
                className="tr-faq-q"
                onClick={() => setActiveFaq(isOpen ? -1 : idx)}
              >
                <span>{faq.q}</span>
                {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </div>
              {isOpen && <div className="tr-faq-a">{faq.a}</div>}
            </div>
          );
        })}
      </section>
    </div>
  );
}
