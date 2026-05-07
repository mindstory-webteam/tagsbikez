"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { img } from "@/assets/assest";

const categories = ["All", "Classic", "Cruiser", "Cafe Racer", "Adventure"];

const bikes = {
  "All": [
    { id: 1, name: "Bullet 350", model: "Military Black", price: "₹2,00,227", heroImg: img.bulletimg },
    { id: 2, name: "Bullet 350", model: "Battalion Black", price: "₹2,02,810", heroImg: img.bulletimg },
    { id: 3, name: "Bullet 350", model: "The Standard Black", price: "₹2,28,045", heroImg: img.bulletimg },
    { id: 4, name: "Bullet 350", model: "The Standard Maroon", price: "₹2,28,045", heroImg: img.bulletimg },
    { id: 5, name: "Bullet 350", model: "Black Gold", price: "₹2,63,224", heroImg: img.bulletimg },
    { id: 6, name: "Hunter 350", model: "Factory Black", price: "₹1,69,189", heroImg: img.bulletimg },
    { id: 7, name: "Hunter 350", model: "Graphite Grey", price: "₹2,01,051", heroImg: img.bulletimg },
    { id: 8, name: "Hunter 350", model: "Dapper Grey", price: "₹2,01,051", heroImg: img.bulletimg },
    { id: 9, name: "Hunter 350", model: "Rio White", price: "₹2,01,051", heroImg: img.bulletimg },
    { id: 10, name: "Hunter 350", model: "London Red", price: "₹2,06,464", heroImg: img.bulletimg },
    { id: 11, name: "Hunter 350", model: "Rebel Blue", price: "₹2,06,464", heroImg: img.bulletimg },
    { id: 12, name: "Hunter 350", model: "Tokyo Black", price: "₹2,06,464", heroImg: img.bulletimg },
    { id: 13, name: "Hunter 350", model: "Tarmac Black", price: "₹1,83,399", heroImg: img.bulletimg },
    { id: 14, name: "Hunter 350", model: "Moonshot White", price: "₹2,06,464", heroImg: img.bulletimg },
    { id: 15, name: "Hunter 350", model: "Mumbai Yellow", price: "₹2,06,464", heroImg: img.bulletimg },
    { id: 16, name: "Classic 350", model: "Redditch Red", price: "₹2,25,064", heroImg: img.bulletimg },
    { id: 17, name: "Classic 350", model: "Madras Red", price: "₹2,27,955", heroImg: img.bulletimg },
    { id: 18, name: "Classic 350", model: "Medallion Bronze", price: "₹2,37,252", heroImg: img.bulletimg },
    { id: 19, name: "Classic 350", model: "Commando Sand", price: "₹2,59,827", heroImg: img.bulletimg },
    { id: 20, name: "Classic 350", model: "Gun Grey", price: "₹2,73,669", heroImg: img.bulletimg },
    { id: 21, name: "Classic 350", model: "Stealth Black", price: "₹2,73,669", heroImg: img.bulletimg },
    { id: 22, name: "Classic 350", model: "Emerald Green", price: "₹2,79,533", heroImg: img.bulletimg },
    { id: 23, name: "Goan Classic 350", model: "Shack Black", price: "₹2,82,265", heroImg: img.bulletimg },
    { id: 24, name: "Goan Classic 350", model: "Purple Haze", price: "₹2,82,265", heroImg: img.bulletimg },
    { id: 25, name: "Goan Classic 350", model: "Trip Teal Green", price: "₹2,85,744", heroImg: img.bulletimg },
    { id: 26, name: "Goan Classic 350", model: "Rave Red", price: "₹2,85,744", heroImg: img.bulletimg },
    { id: 27, name: "Himalayan 450", model: "Kaza Brown", price: "₹3,91,615", heroImg: img.bulletimg },
    { id: 28, name: "Himalayan 450", model: "Slate Poppy Blue", price: "₹3,96,848", heroImg: img.bulletimg },
    { id: 29, name: "Himalayan 450", model: "Kamet White", price: "₹4,02,080", heroImg: img.bulletimg },
    { id: 30, name: "Himalayan 450", model: "Hanle Black", price: "₹4,08,619", heroImg: img.bulletimg },
    { id: 31, name: "Himalayan 450", model: "Mana Black", price: "₹4,29,779", heroImg: img.bulletimg },
    { id: 32, name: "Interceptor 650", model: "Cali Green", price: "₹4,27,777", heroImg: img.bulletimg },
    { id: 33, name: "Interceptor 650", model: "Canyon Red", price: "₹4,27,777", heroImg: img.bulletimg },
    { id: 34, name: "Interceptor 650", model: "Sunset Strip Black", price: "₹4,38,578", heroImg: img.bulletimg },
    { id: 35, name: "Interceptor 650", model: "Blackray", price: "₹4,52,075", heroImg: img.bulletimg },
    { id: 36, name: "Interceptor 650", model: "Mark Two Chrome", price: "₹4,65,570", heroImg: img.bulletimg },
    { id: 37, name: "Continental GT 650", model: "Rocker Red", price: "₹4,49,370", heroImg: img.bulletimg },
    { id: 38, name: "Continental GT 650", model: "British Racing Green", price: "₹4,49,370", heroImg: img.bulletimg },
    { id: 39, name: "Continental GT 650", model: "Apex Grey", price: "₹4,76,366", heroImg: img.bulletimg },
    { id: 40, name: "Continental GT 650", model: "Mr Clean Chrome", price: "₹4,84,463", heroImg: img.bulletimg },
    { id: 41, name: "Continental GT 650", model: "Slipstream Blue", price: "₹4,76,368", heroImg: img.bulletimg },
    { id: 42, name: "Interceptor Bear 650", model: "Board Walk White", price: "₹4,76,547", heroImg: img.bulletimg },
    { id: 43, name: "Interceptor Bear 650", model: "Board Wild Honey Yellow", price: "₹4,83,302", heroImg: img.bulletimg },
    { id: 44, name: "Interceptor Bear 650", model: "Board Golden Shadow Black", price: "₹4,92,752", heroImg: img.bulletimg },
    { id: 45, name: "Interceptor Bear 650", model: "Board White 249", price: "₹5,03,549", heroImg: img.bulletimg },
    { id: 46, name: "Meteor 350", model: "Fireball Grey", price: "₹2,27,819", heroImg: img.bulletimg },
    { id: 47, name: "Meteor 350", model: "Fireball Orange", price: "₹2,27,819", heroImg: img.bulletimg },
    { id: 48, name: "Meteor 350", model: "Stellar Matt Grey", price: "₹2,41,445", heroImg: img.bulletimg },
    { id: 49, name: "Meteor 350", model: "Stellar Marine Blue", price: "₹2,41,445", heroImg: img.bulletimg },
    { id: 50, name: "Meteor 350", model: "Aurora Red", price: "₹2,65,525", heroImg: img.bulletimg },
    { id: 51, name: "Meteor 350", model: "Aurora Retro Green", price: "₹2,65,525", heroImg: img.bulletimg },
    { id: 52, name: "Meteor 350", model: "Supernova Black", price: "₹2,77,421", heroImg: img.bulletimg },
    { id: 53, name: "Scram 440", model: "Trail Green", price: "₹2,80,301", heroImg: img.bulletimg },
    { id: 54, name: "Scram 440", model: "Force Blue", price: "₹3,00,050", heroImg: img.bulletimg },
    { id: 55, name: "Scram 440", model: "Force Grey", price: "₹3,00,050", heroImg: img.bulletimg },
    { id: 56, name: "Scram 440", model: "Force Teal", price: "₹3,00,050", heroImg: img.bulletimg },
    { id: 57, name: "Super Meteor 650", model: "Astral Black", price: "₹5,10,166", heroImg: img.bulletimg },
    { id: 58, name: "Super Meteor 650", model: "Interstellar Green", price: "₹5,30,722", heroImg: img.bulletimg },
    { id: 59, name: "Super Meteor 650", model: "Interstellar Grey", price: "₹5,30,722", heroImg: img.bulletimg },
    { id: 60, name: "Super Meteor 650", model: "Celestial Red", price: "₹5,51,281", heroImg: img.bulletimg },
    { id: 61, name: "Super Meteor 650", model: "Celestial Blue", price: "₹5,51,281", heroImg: img.bulletimg },
    { id: 62, name: "Guerrilla 450", model: "Twilight Blue", price: "₹3,22,673", heroImg: img.bulletimg },
    { id: 63, name: "Guerrilla 450", model: "Apex Red", price: "₹3,22,673", heroImg: img.bulletimg },
    { id: 64, name: "Guerrilla 450", model: "Apex Green", price: "₹3,31,443", heroImg: img.bulletimg },
    { id: 65, name: "Guerrilla 450", model: "Apex Black", price: "₹3,31,443", heroImg: img.bulletimg },
    { id: 66, name: "Guerrilla 450", model: "Peix Bronze", price: "₹3,44,523", heroImg: img.bulletimg },
    { id: 67, name: "Guerrilla 450", model: "Smoke Silver", price: "₹3,44,523", heroImg: img.bulletimg },
    { id: 68, name: "Guerrilla 450", model: "Shadow Ash Green", price: "₹3,44,523", heroImg: img.bulletimg },
    { id: 69, name: "Guerrilla 450", model: "Brava Blue", price: "₹3,51,064", heroImg: img.bulletimg },
    { id: 70, name: "Shotgun 650", model: "Sheet Metal Grey", price: "₹5,04,132", heroImg: img.bulletimg },
    { id: 71, name: "Shotgun 650", model: "Green Drill", price: "₹5,18,589", heroImg: img.bulletimg },
    { id: 72, name: "Shotgun 650", model: "Stencil White", price: "₹5,22,453", heroImg: img.bulletimg },
    { id: 73, name: "Classic 650", model: "Bruntingthorpe Blue", price: "₹4,63,700", heroImg: img.bulletimg },
    { id: 74, name: "Classic 650", model: "Vallam Red", price: "₹4,63,700", heroImg: img.bulletimg },
    { id: 75, name: "Classic 650", model: "Teal", price: "₹4,69,551", heroImg: img.bulletimg },
    { id: 76, name: "Classic 650", model: "Black Chrome", price: "₹4,81,252", heroImg: img.bulletimg },
  ],
  "Classic": [
    { id: 1, name: "Bullet 350", model: "Military Black", price: "₹2,00,227", heroImg: img.bulletimg },
    { id: 2, name: "Bullet 350", model: "Battalion Black", price: "₹2,02,810", heroImg: img.bulletimg },
    { id: 3, name: "Bullet 350", model: "The Standard Black", price: "₹2,28,045", heroImg: img.bulletimg },
    { id: 4, name: "Bullet 350", model: "The Standard Maroon", price: "₹2,28,045", heroImg: img.bulletimg },
    { id: 5, name: "Bullet 350", model: "Black Gold", price: "₹2,63,224", heroImg: img.bulletimg },
    { id: 16, name: "Classic 350", model: "Redditch Red", price: "₹2,25,064", heroImg: img.bulletimg },
    { id: 17, name: "Classic 350", model: "Madras Red", price: "₹2,27,955", heroImg: img.bulletimg },
    { id: 18, name: "Classic 350", model: "Medallion Bronze", price: "₹2,37,252", heroImg: img.bulletimg },
    { id: 19, name: "Classic 350", model: "Commando Sand", price: "₹2,59,827", heroImg: img.bulletimg },
    { id: 20, name: "Classic 350", model: "Gun Grey", price: "₹2,73,669", heroImg: img.bulletimg },
    { id: 21, name: "Classic 350", model: "Stealth Black", price: "₹2,73,669", heroImg: img.bulletimg },
    { id: 22, name: "Classic 350", model: "Emerald Green", price: "₹2,79,533", heroImg: img.bulletimg },
    { id: 23, name: "Goan Classic 350", model: "Shack Black", price: "₹2,82,265", heroImg: img.bulletimg },
    { id: 24, name: "Goan Classic 350", model: "Purple Haze", price: "₹2,82,265", heroImg: img.bulletimg },
    { id: 25, name: "Goan Classic 350", model: "Trip Teal Green", price: "₹2,85,744", heroImg: img.bulletimg },
    { id: 26, name: "Goan Classic 350", model: "Rave Red", price: "₹2,85,744", heroImg: img.bulletimg },
    { id: 73, name: "Classic 650", model: "Bruntingthorpe Blue", price: "₹4,63,700", heroImg: img.bulletimg },
    { id: 74, name: "Classic 650", model: "Vallam Red", price: "₹4,63,700", heroImg: img.bulletimg },
    { id: 75, name: "Classic 650", model: "Teal", price: "₹4,69,551", heroImg: img.bulletimg },
    { id: 76, name: "Classic 650", model: "Black Chrome", price: "₹4,81,252", heroImg: img.bulletimg },
  ],
  "Roadster": [
    { id: 6, name: "Hunter 350", model: "Factory Black", price: "₹1,69,189", heroImg: img.bulletimg },
    { id: 7, name: "Hunter 350", model: "Graphite Grey", price: "₹2,01,051", heroImg: img.bulletimg },
    { id: 8, name: "Hunter 350", model: "Dapper Grey", price: "₹2,01,051", heroImg: img.bulletimg },
    { id: 9, name: "Hunter 350", model: "Rio White", price: "₹2,01,051", heroImg: img.bulletimg },
    { id: 10, name: "Hunter 350", model: "London Red", price: "₹2,06,464", heroImg: img.bulletimg },
    { id: 11, name: "Hunter 350", model: "Rebel Blue", price: "₹2,06,464", heroImg: img.bulletimg },
    { id: 12, name: "Hunter 350", model: "Tokyo Black", price: "₹2,06,464", heroImg: img.bulletimg },
    { id: 13, name: "Hunter 350", model: "Tarmac Black", price: "₹1,83,399", heroImg: img.bulletimg },
    { id: 14, name: "Hunter 350", model: "Moonshot White", price: "₹2,06,464", heroImg: img.bulletimg },
    { id: 15, name: "Hunter 350", model: "Mumbai Yellow", price: "₹2,06,464", heroImg: img.bulletimg },
    { id: 62, name: "Guerrilla 450", model: "Twilight Blue", price: "₹3,22,673", heroImg: img.bulletimg },
    { id: 63, name: "Guerrilla 450", model: "Apex Red", price: "₹3,22,673", heroImg: img.bulletimg },
    { id: 64, name: "Guerrilla 450", model: "Apex Green", price: "₹3,31,443", heroImg: img.bulletimg },
    { id: 65, name: "Guerrilla 450", model: "Apex Black", price: "₹3,31,443", heroImg: img.bulletimg },
    { id: 66, name: "Guerrilla 450", model: "Peix Bronze", price: "₹3,44,523", heroImg: img.bulletimg },
    { id: 67, name: "Guerrilla 450", model: "Smoke Silver", price: "₹3,44,523", heroImg: img.bulletimg },
    { id: 68, name: "Guerrilla 450", model: "Shadow Ash Green", price: "₹3,44,523", heroImg: img.bulletimg },
    { id: 69, name: "Guerrilla 450", model: "Brava Blue", price: "₹3,51,064", heroImg: img.bulletimg },
  ],
  "Adventure": [
    { id: 27, name: "Himalayan 450", model: "Kaza Brown", price: "₹3,91,615", heroImg: img.bulletimg },
    { id: 28, name: "Himalayan 450", model: "Slate Poppy Blue", price: "₹3,96,848", heroImg: img.bulletimg },
    { id: 29, name: "Himalayan 450", model: "Kamet White", price: "₹4,02,080", heroImg: img.bulletimg },
    { id: 30, name: "Himalayan 450", model: "Hanle Black", price: "₹4,08,619", heroImg: img.bulletimg },
    { id: 31, name: "Himalayan 450", model: "Mana Black", price: "₹4,29,779", heroImg: img.bulletimg },
    { id: 53, name: "Scram 440", model: "Trail Green", price: "₹2,80,301", heroImg: img.bulletimg },
    { id: 54, name: "Scram 440", model: "Force Blue", price: "₹3,00,050", heroImg: img.bulletimg },
    { id: 55, name: "Scram 440", model: "Force Grey", price: "₹3,00,050", heroImg: img.bulletimg },
    { id: 56, name: "Scram 440", model: "Force Teal", price: "₹3,00,050", heroImg: img.bulletimg },
  ],
  "Cafe Racer": [
    { id: 32, name: "Interceptor 650", model: "Cali Green", price: "₹4,27,777", heroImg: img.bulletimg },
    { id: 33, name: "Interceptor 650", model: "Canyon Red", price: "₹4,27,777", heroImg: img.bulletimg },
    { id: 34, name: "Interceptor 650", model: "Sunset Strip Black", price: "₹4,38,578", heroImg: img.bulletimg },
    { id: 35, name: "Interceptor 650", model: "Blackray", price: "₹4,52,075", heroImg: img.bulletimg },
    { id: 36, name: "Interceptor 650", model: "Mark Two Chrome", price: "₹4,65,570", heroImg: img.bulletimg },
    { id: 37, name: "Continental GT 650", model: "Rocker Red", price: "₹4,49,370", heroImg: img.bulletimg },
    { id: 38, name: "Continental GT 650", model: "British Racing Green", price: "₹4,49,370", heroImg: img.bulletimg },
    { id: 39, name: "Continental GT 650", model: "Apex Grey", price: "₹4,76,366", heroImg: img.bulletimg },
    { id: 40, name: "Continental GT 650", model: "Mr Clean Chrome", price: "₹4,84,463", heroImg: img.bulletimg },
    { id: 41, name: "Continental GT 650", model: "Slipstream Blue", price: "₹4,76,368", heroImg: img.bulletimg },
    { id: 42, name: "Interceptor Bear 650", model: "Board Walk White", price: "₹4,76,547", heroImg: img.bulletimg },
    { id: 43, name: "Interceptor Bear 650", model: "Board Wild Honey Yellow", price: "₹4,83,302", heroImg: img.bulletimg },
    { id: 44, name: "Interceptor Bear 650", model: "Board Golden Shadow Black", price: "₹4,92,752", heroImg: img.bulletimg },
    { id: 45, name: "Interceptor Bear 650", model: "Board White 249", price: "₹5,03,549", heroImg: img.bulletimg },
  ],
  "Cruiser": [
    { id: 46, name: "Meteor 350", model: "Fireball Grey", price: "₹2,27,819", heroImg: img.bulletimg },
    { id: 47, name: "Meteor 350", model: "Fireball Orange", price: "₹2,27,819", heroImg: img.bulletimg },
    { id: 48, name: "Meteor 350", model: "Stellar Matt Grey", price: "₹2,41,445", heroImg: img.bulletimg },
    { id: 49, name: "Meteor 350", model: "Stellar Marine Blue", price: "₹2,41,445", heroImg: img.bulletimg },
    { id: 50, name: "Meteor 350", model: "Aurora Red", price: "₹2,65,525", heroImg: img.bulletimg },
    { id: 51, name: "Meteor 350", model: "Aurora Retro Green", price: "₹2,65,525", heroImg: img.bulletimg },
    { id: 52, name: "Meteor 350", model: "Supernova Black", price: "₹2,77,421", heroImg: img.bulletimg },
    { id: 57, name: "Super Meteor 650", model: "Astral Black", price: "₹5,10,166", heroImg: img.bulletimg },
    { id: 58, name: "Super Meteor 650", model: "Interstellar Green", price: "₹5,30,722", heroImg: img.bulletimg },
    { id: 59, name: "Super Meteor 650", model: "Interstellar Grey", price: "₹5,30,722", heroImg: img.bulletimg },
    { id: 60, name: "Super Meteor 650", model: "Celestial Red", price: "₹5,51,281", heroImg: img.bulletimg },
    { id: 61, name: "Super Meteor 650", model: "Celestial Blue", price: "₹5,51,281", heroImg: img.bulletimg },
    { id: 70, name: "Shotgun 650", model: "Sheet Metal Grey", price: "₹5,04,132", heroImg: img.bulletimg },
    { id: 71, name: "Shotgun 650", model: "Green Drill", price: "₹5,18,589", heroImg: img.bulletimg },
    { id: 72, name: "Shotgun 650", model: "Stencil White", price: "₹5,22,453", heroImg: img.bulletimg },
  ],
};

const CARD_WIDTH = 300;

export default function BikeSectionSwiper2() {
  const [activeTab, setActiveTab] = useState("All");
  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const savedScroll = useRef(0);
  const animFrameRef = useRef(null);

  const items = bikes[activeTab] || [];
  const loopedItems = [...items, ...items, ...items, ...items, ...items, ...items];
  const singleSetWidth = items.length * CARD_WIDTH;

  const startAuto = () => {
    stopAuto();
    let last = null;
    const step = (ts) => {
      if (last !== null) {
        const el = trackRef.current;
        if (el) {
          el.scrollLeft += 1.0;
          if (el.scrollLeft >= singleSetWidth * 3) {
            el.scrollLeft -= singleSetWidth * 2;
          }
        }
      }
      last = ts;
      animFrameRef.current = requestAnimationFrame(step);
    };
    animFrameRef.current = requestAnimationFrame(step);
  };

  const stopAuto = () => {
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (el) el.scrollLeft = singleSetWidth * 2;
    startAuto();
    return () => stopAuto();
  }, [activeTab]);

  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - trackRef.current.offsetLeft;
    savedScroll.current = trackRef.current.scrollLeft;
    stopAuto();
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = x - startX.current;
    const el = trackRef.current;
    el.scrollLeft = savedScroll.current - walk;
    if (el.scrollLeft >= singleSetWidth * 4) el.scrollLeft -= singleSetWidth * 2;
    if (el.scrollLeft <= singleSetWidth) el.scrollLeft += singleSetWidth * 2;
  };

  const onMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    startAuto();
  };

  const onTouchStart = () => stopAuto();
  const onTouchMove = () => {
    const el = trackRef.current;
    if (!el) return;
    if (el.scrollLeft >= singleSetWidth * 4) el.scrollLeft -= singleSetWidth * 2;
    if (el.scrollLeft <= singleSetWidth) el.scrollLeft += singleSetWidth * 2;
  };
  const onTouchEnd = () => startAuto();

  const handleTabChange = (tab) => {
    if (tab === activeTab) return;
    stopAuto();
    setActiveTab(tab);
  };

  return (
    <section className="fv-root">
      <style>{`
        .fv-root {
          background: #fff;
          width: 100%;
          padding: 48px 0 56px;
          box-sizing: border-box;
          overflow: hidden;
        }

        .fv-heading {
          font-size: 42px;
          font-weight: 400;
          text-transform: uppercase;
          color: #111;
          letter-spacing: 0.04em;
          margin: 0 0 18px 0;
          padding: 0 40px;
        }

        .fv-top-row {
          display: flex;
          align-items: center;
          padding: 0 40px;
          margin-bottom: 28px;
        }

        /* ── TABS ── */
        .fv-tabs {
          display: flex;
          border: 1px solid #ddd;
          overflow: hidden;
          width: fit-content;
          flex-wrap: wrap;
        }

        .fv-tab {
          padding: 10px 28px;
          font-size: 13px;
          font-weight: 500;
          text-align: center;
          cursor: pointer;
          border: none;
          background: #fff;
          color: #555;
          border-right: 1px solid #ddd;
          border-bottom: 1px solid #ddd;
          transition: background 0.2s, color 0.2s;
          white-space: nowrap;
        }

        .fv-tab:last-child { border-right: none; }
        .fv-tab.active { background: #111; color: #fff; font-weight: 600; }
        .fv-tab:not(.active):hover { background: #f5f5f5; color: #111; }

        /* ── TOP BORDER for card area ── */
        .fv-track-border-top {
          width: 100%;
          height: 1px;
          background: #e0e0e0;
        }

        /* ── SCROLLING TRACK ── */
        .fv-track-outer {
          width: 100%;
          overflow: hidden;
          cursor: grab;
          border-left: 1px solid #e0e0e0;
          box-sizing: border-box;
        }

        .fv-track-outer:active { cursor: grabbing; }

        .fv-track {
          display: flex;
          overflow-x: scroll;
          scroll-behavior: auto;
          -webkit-overflow-scrolling: touch;
          user-select: none;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .fv-track::-webkit-scrollbar { display: none; }

        /* ── CARD ── */
        .fv-card {
          flex: 0 0 ${CARD_WIDTH}px;
          width: ${CARD_WIDTH}px;
          border-right: 1px solid #e0e0e0;
          border-bottom: 1px solid #e0e0e0;
          padding: 24px 24px 18px;
          display: flex;
          flex-direction: column;
          background: #fff;
          min-height: 270px;
          box-sizing: border-box;
          transition: background 0.18s;
          flex-shrink: 0;
        }

        .fv-card:hover { background: #fafafa; }
        .fv-card:hover .fv-card-img { transform: scale(1.04); }

        /* ── IMAGE ── */
        .fv-card-img-wrap {
          width: 100%;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          margin-bottom: 16px;
        }

        .fv-card-img {
          width: 100%;
          max-height: 160px;
          object-fit: contain;
          display: block;
          transition: transform 0.35s ease;
          pointer-events: none;
        }

        /* ── BOTTOM IMAGE BORDER ── */
        .fv-card-img-border {
          width: 100%;
          height: 1px;
          background: #e0e0e0;
          margin-bottom: 12px;
        }

        /* ── INFO ROW ── */
        .fv-card-info-row {
          display: flex;
          align-items: stretch;
          min-height: 52px;
        }

        .fv-card-info {
          flex: 0 0 72%;
          padding-right: 10px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .fv-card-name {
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          color: #111;
          margin: 0 0 2px 0;
          letter-spacing: 0.04em;
          line-height: 1.3;
        }

        .fv-card-model {
          font-size: 11.5px;
          color: #e03030;
          margin: 0 0 2px 0;
          font-weight: 400;
        }

        .fv-card-price {
          font-size: 12.5px;
          color: #444;
          margin: 0;
          font-weight: 500;
        }

        .fv-card-actions {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding-left: 10px;
        }

        .fv-icon-btn {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: 1px solid #e0e0e0;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          padding: 0;
          transition: border-color 0.15s, background 0.15s;
          flex-shrink: 0;
        }

        .fv-icon-btn:hover { border-color: #111; background: #111; }
        .fv-icon-btn:hover svg path { stroke: #fff; }
        .fv-icon-btn svg path { stroke: #666; transition: stroke 0.15s; }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          .fv-root { padding: 28px 0 36px; }
          .fv-heading { padding: 0 20px; font-size: 28px; }
          .fv-top-row { padding: 0 20px; margin-bottom: 20px; }
          .fv-tab { padding: 7px 12px; font-size: 11px; }
        }
      `}</style>

      {/* Heading */}
      <h2 className="fv-heading">Our Models</h2>

      {/* Tabs */}
      <div className="fv-top-row">
        <div className="fv-tabs">
          {categories.map((tab) => (
            <button
              key={tab}
              className={`fv-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Top border of card area */}
      <div className="fv-track-border-top" />

      {/* Infinite scroll track */}
      <div className="fv-track-outer">
        <div
          className="fv-track"
          ref={trackRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {loopedItems.map((bike, i) => (
            <div className="fv-card" key={`${bike.id}-${i}`}>

              <div className="fv-card-img-wrap">
                <Image
                  src={bike.heroImg}
                  alt={bike.name}
                  className="fv-card-img"
                  width={260}
                  height={160}
                  style={{ objectFit: "contain" }}
                  draggable={false}
                />
              </div>

              <div className="fv-card-img-border" />

              <div className="fv-card-info-row">
                <div className="fv-card-info">
                  <p className="fv-card-name">{bike.name}</p>
                  <p className="fv-card-model">{bike.model}</p>
                  <p className="fv-card-price">{bike.price}</p>
                </div>

                <div className="fv-card-actions">
                  <button className="fv-icon-btn" aria-label="Enquire">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22 6l-10 7L2 6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button className="fv-icon-btn" aria-label="Call">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.04 2.18 2 2 0 012.03 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}