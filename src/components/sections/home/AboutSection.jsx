"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ShieldCheck, Wrench, Clock,BadgeCheck } from "lucide-react";
import { img } from "@/assets/assest";
import { fetchGallery } from "@/lib/api";

const fallbackColA = [img.Himalayan, img.royalenfieldfury, img.Himalayan2, img.scram1, img.royalenfield1];
const fallbackColB = [img.ride2, img.ride3, img.royalenfield1, img.royalenfieldfury, img.ride1];

const locationData = {
  Chalakudy: {
    bannerHeading: "Your Trusted Royal Enfield Partner in Chalakudy",
    bannerSub: "Experience the legacy of pure motorcycling at TagsBikez Chalakudy. We bring you the latest 2026 Royal Enfield lineup with unmatched customer service.",
    features: [
      { icon: <ShieldCheck size={20} strokeWidth={1.6} color="#e8282b" />, title: "Authorised Chalakudy Dealer", desc: "Certified Royal Enfield dealership in Chalakudy, delivering authentic experiences since day one." },
      { icon: <BadgeCheck size={20} strokeWidth={1.6} color="#e8282b" />, title: "Genuine Spares & Accessories", desc: "Customize and maintain your ride with 100% genuine Royal Enfield parts and gear available in Chalakudy." },
      { icon: <Wrench size={20} strokeWidth={1.6} color="#e8282b" />, title: "Factory-Trained Technicians", desc: "Our mechanics in Chalakudy are rigorously trained by Royal Enfield to ensure your motorcycle performs at its peak." },
      { icon: <Clock size={20} strokeWidth={1.6} color="#e8282b" />, title: "Seamless Test Rides", desc: "Book a hassle-free test ride today at our Chalakudy showroom and feel the power before you buy." },
    ],
    colA: [img.aboutchalakudyimg1, img.aboutchalakudyimg5, img.aboutchalakudyimg3, img.aboutchalakudyimg4, img.aboutchalakudyimg2],
    colB: [img.aboutchalakudyimg4, img.aboutchalakudyimg2, img.aboutchalakudyimg3, img.aboutchalakudyimg5, img.aboutchalakudyimg1],
  },
  Irinjalakuda: {
    bannerHeading: "Discover Royal Enfield in Irinjalakuda",
    bannerSub: "TagsBikez Irinjalakuda offers the complete range of Royal Enfield motorcycles. Join our riding community and start your journey today.",
    features: [
      { icon: <ShieldCheck size={20} strokeWidth={1.6} color="#e8282b" />, title: "Irinjalakuda's Official Dealer", desc: "Your certified and trusted Royal Enfield showroom located right in the heart of Irinjalakuda." },
      { icon: <BadgeCheck size={20} strokeWidth={1.6} color="#e8282b" />, title: "Authentic Parts", desc: "We stock only genuine Royal Enfield components to guarantee the longevity and reliability of your motorcycle." },
      { icon: <Wrench size={20} strokeWidth={1.6} color="#e8282b" />, title: "Expert Servicing", desc: "Leave your bike in the safe hands of our Irinjalakuda service experts for precision maintenance and repairs." },
      { icon: <Clock size={20} strokeWidth={1.6} color="#e8282b" />, title: "Instant Test Rides", desc: "Walk into our Irinjalakuda showroom and take your favorite Royal Enfield for a spin without any waiting." },
    ],
    colA: [img.aboutirinjalakudaimg1, img.aboutirinjalakudaimg2, img.aboutirinjalakudaimg3, img.aboutirinjalakudaimg4, img.aboutirinjalakudaimg3],
    colB: [img.aboutirinjalakudaimg4, img.aboutirinjalakudaimg3, img.aboutirinjalakudaimg2, img.aboutirinjalakudaimg1, img.aboutirinjalakudaimg4],
  },
  Kodakara: {
    bannerHeading: "Royal Enfield Excellence in Kodakara",
    bannerSub: "Fuel your passion for riding with TagsBikez Kodakara. We provide an exceptional showroom experience and comprehensive servicing for all models.",
    features: [
      { icon: <ShieldCheck size={20} strokeWidth={1.6} color="#e8282b" />, title: "Authorised Dealer Kodakara", desc: "Proudly serving the Kodakara community as an official and trusted Royal Enfield partner." },
      { icon: <BadgeCheck size={20} strokeWidth={1.6} color="#e8282b" />, title: "Quality Parts Guaranteed", desc: "Enhance your ride using only factory-approved genuine parts and accessories at our Kodakara center." },
      { icon: <Wrench size={20} strokeWidth={1.6} color="#e8282b" />, title: "Skilled Mechanics", desc: "Our Kodakara service team brings years of specialized experience to keep your Royal Enfield running perfectly." },
      { icon: <Clock size={20} strokeWidth={1.6} color="#e8282b" />, title: "Book Your Test Ride", desc: "Experience the thrill of Royal Enfield firsthand. Schedule your test ride at our Kodakara location easily." },
    ],
    colA: [img.aboutkodakaraimg1, img.aboutkodakaraimg2, img.aboutkodakaraimg3, img.aboutkodakaraimg4, img.aboutkodakaraimg3],
    colB: [img.aboutkodakaraimg4, img.aboutkodakaraimg3, img.aboutkodakaraimg2, img.aboutkodakaraimg1, img.aboutkodakaraimg4],
  },
  Kuriachira: {
    bannerHeading: "Welcome to TagsBikez Kuriachira",
    bannerSub: "Immerse yourself in the world of Royal Enfield at our premium Kuriachira dealership. Explore new models and get top-notch maintenance.",
    features: [
      { icon: <ShieldCheck size={20} strokeWidth={1.6} color="#e8282b" />, title: "Kuriachira RE Showroom", desc: "Experience authenticity at Kuriachira's recognized Royal Enfield dealership, built on trust and passion." },
      { icon: <BadgeCheck size={20} strokeWidth={1.6} color="#e8282b" />, title: "Genuine Motorcycling Gear", desc: "From engine parts to riding gear, find exactly what you need at our Kuriachira outlet." },
      { icon: <Wrench size={20} strokeWidth={1.6} color="#e8282b" />, title: "Certified Servicing", desc: "Our Kuriachira workshop ensures your Royal Enfield receives the care it needs to conquer any terrain." },
      { icon: <Clock size={20} strokeWidth={1.6} color="#e8282b" />, title: "Quick Test Rides", desc: "Get behind the handlebars today. Visit TagsBikez Kuriachira for a quick and easy test ride setup." },
    ],
    colA: [img.aboutkuriachiraimg1, img.aboutkuriachiraimg2, img.aboutkuriachiraimg3, img.aboutkuriachiraimg4, img.aboutkuriachiraimg3],
    colB: [img.aboutkuriachiraimg4, img.aboutkuriachiraimg3, img.aboutkuriachiraimg2, img.aboutkuriachiraimg1, img.aboutkuriachiraimg4],
  },
  Patturaikkal: {
    bannerHeading: "Your Royal Enfield Destination in Patturaikkal",
    bannerSub: "Start your adventure with TagsBikez Patturaikkal. We are committed to providing the best motorcycles and after-sales service in the region.",
    features: [
      { icon: <ShieldCheck size={20} strokeWidth={1.6} color="#e8282b" />, title: "Patturaikkal Certified Dealer", desc: "A fully authorized Royal Enfield dealership ensuring peace of mind with every purchase in Patturaikkal." },
      { icon: <BadgeCheck size={20} strokeWidth={1.6} color="#e8282b" />, title: "Authentic RE Accessories", desc: "Style your motorcycle with confidence using genuine accessories from our Patturaikkal store." },
      { icon: <Wrench size={20} strokeWidth={1.6} color="#e8282b" />, title: "Pro Technicians", desc: "Our specialized mechanics in Patturaikkal diagnose and resolve any issues with utmost precision." },
      { icon: <Clock size={20} strokeWidth={1.6} color="#e8282b" />, title: "Ride Before You Buy", desc: "Feel the thumping engine for yourself. We offer immediate test rides at the Patturaikkal showroom." },
    ],
    colA: [img.aboutpatturaikkalimg1, img.aboutpatturaikkalimg2, img.aboutpatturaikkalimg3, img.aboutpatturaikkalimg4, img.aboutpatturaikkalimg3],
    colB: [img.aboutpatturaikkalimg4, img.aboutpatturaikkalimg3, img.aboutpatturaikkalimg2, img.aboutpatturaikkalimg1, img.aboutpatturaikkalimg4],
  },
  Vadakkencherry: {
    bannerHeading: "TagsBikez Vadakkencherry Showroom",
    bannerSub: "Discover pure motorcycling right in your neighborhood. TagsBikez Vadakkencherry offers the latest Royal Enfield bikes and professional care.",
    features: [
      { icon: <ShieldCheck size={20} strokeWidth={1.6} color="#e8282b" />, title: "Vadakkencherry Authorized", desc: "The go-to Royal Enfield dealership in Vadakkencherry, delivering legends on two wheels." },
      { icon: <BadgeCheck size={20} strokeWidth={1.6} color="#e8282b" />, title: "100% Genuine Care", desc: "Maintain your ride's integrity with genuine parts supplied directly to our Vadakkencherry facility." },
      { icon: <Wrench size={20} strokeWidth={1.6} color="#e8282b" />, title: "Master Mechanics", desc: "Trust your bike with our RE-certified experts in Vadakkencherry for smooth and strong performance." },
      { icon: <Clock size={20} strokeWidth={1.6} color="#e8282b" />, title: "Explore Models on Road", desc: "Step in and ride out. Enjoy flexible test rides available daily at Vadakkencherry." },
    ],
    colA: [img.aboutvadakkencherryimg1, img.aboutvadakkencherryimg2, img.aboutvadakkencherryimg3, img.aboutvadakkencherryimg4, img.aboutvadakkencherryimg3],
    colB: [img.aboutvadakkencherryimg4, img.aboutvadakkencherryimg3, img.aboutvadakkencherryimg2, img.aboutvadakkencherryimg1, img.aboutvadakkencherryimg4],
  },
  Kunnamkulam: {
    bannerHeading: "Discover Royal Enfield in Kunnamkulam",
    bannerSub: "TagsBikez Kunnamkulam offers the complete range of Royal Enfield motorcycles. Join our riding community and start your journey today.",
    features: [
      { icon: <ShieldCheck size={20} strokeWidth={1.6} color="#e8282b" />, title: "Kunnamkulam Authorized", desc: "The go-to Royal Enfield dealership in Kunnamkulam, delivering legends on two wheels." },
      { icon: <BadgeCheck size={20} strokeWidth={1.6} color="#e8282b" />, title: "100% Genuine Care", desc: "Maintain your ride's integrity with genuine parts supplied directly to our Kunnamkulam facility." },
      { icon: <Wrench size={20} strokeWidth={1.6} color="#e8282b" />, title: "Master Mechanics", desc: "Trust your bike with our RE-certified experts in Kunnamkulam for smooth and strong performance." },
      { icon: <Clock size={20} strokeWidth={1.6} color="#e8282b" />, title: "Explore Models on Road", desc: "Step in and ride out. Enjoy flexible test rides available daily at Kunnamkulam." },
    ],
    colA: [img.aboutkunnamkulamimg1, img.aboutkunnamkulamimg2, img.aboutkunnamkulamimg3, img.aboutkunnamkulamimg4, img.aboutkunnamkulamimg3],
    colB: [img.aboutkunnamkulamimg4, img.aboutkunnamkulamimg3, img.aboutkunnamkulamimg2, img.aboutkunnamkulamimg1, img.aboutkunnamkulamimg4],
  },
  Thriprayar: {
    bannerHeading: "Your Trusted Royal Enfield Partner in Thriprayar",
    bannerSub: "Experience the legacy of pure motorcycling at TagsBikez Thriprayar. We bring you the latest 2026 Royal Enfield lineup with unmatched customer service.",
    features: [
      { icon: <ShieldCheck size={20} strokeWidth={1.6} color="#e8282b" />, title: "Authorised Thriprayar Dealer", desc: "Certified Royal Enfield dealership in Thriprayar, delivering authentic experiences since day one." },
      { icon: <BadgeCheck size={20} strokeWidth={1.6} color="#e8282b" />, title: "Genuine Spares & Accessories", desc: "Customize and maintain your ride with 100% genuine Royal Enfield parts and gear available in Thriprayar." },
      { icon: <Wrench size={20} strokeWidth={1.6} color="#e8282b" />, title: "Factory-Trained Technicians", desc: "Our mechanics in Thriprayar are rigorously trained by Royal Enfield to ensure your motorcycle performs at its peak." },
      { icon: <Clock size={20} strokeWidth={1.6} color="#e8282b" />, title: "Seamless Test Rides", desc: "Book a hassle-free test ride today at our Thriprayar showroom and feel the power before you buy." },
    ],
    colA: [img.aboutthriprayarimg1, img.aboutthriprayarimg2, img.aboutthriprayarimg3, img.aboutthriprayarimg4, img.aboutthriprayarimg3],
    colB: [img.aboutthriprayarimg4, img.aboutthriprayarimg3, img.aboutthriprayarimg2, img.aboutthriprayarimg1, img.aboutthriprayarimg4],
  }
};

const getFeatures = (location = "Thrissur") => {
  if (locationData[location]) return locationData[location].features;
  return [
    {
      icon: <ShieldCheck size={20} strokeWidth={1.6} color="#e8282b" />,
      title: "Authorised RE Dealer",
      desc: `Official Royal Enfield dealership in ${location} certified, trusted, and factory-backed since day one.`,
    },
    {
      icon: <BadgeCheck size={20} strokeWidth={1.6} color="#e8282b" />,
      title: "Genuine Parts & Service",
      desc: "Every service uses 100% genuine Royal Enfield parts. Your motorcycle deserves nothing less.",
    },
    {
      icon: <Wrench size={20} strokeWidth={1.6} color="#e8282b" />,
      title: "Expert Technicians",
      desc: "Our RE-certified technicians are trained directly at Royal Enfield service academies.",
    },
    {
      icon: <Clock size={20} strokeWidth={1.6} color="#e8282b" />,
      title: "Easy Test Rides",
      desc: `Walk in, pick your model, and ride. Hassle-free test rides available every day at our ${location} showroom.`,
    },
  ];
};

export default function AboutSection({ 
  location = "Thrissur",
  customFeatures,
  bannerHeading,
  bannerSub,
  customColA,
  customColB,
  customMobileImgs
}) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const locInfo = locationData[location] || {};
  const features = customFeatures || locInfo.features || getFeatures(location);
  const sectionRef = useRef(null);
  const colARef = useRef(null);
  const colBRef = useRef(null);
  const scrollStripRef = useRef(null);

  const initialColA = customColA || locInfo.colA || fallbackColA;
  const initialColB = customColB || locInfo.colB || fallbackColB;
  const initialAllImgs = customMobileImgs || [...initialColA, ...initialColB];

  const finalBannerHeading = bannerHeading || locInfo.bannerHeading || <>Your Trusted Royal Enfield<br />Showroom.</>;
  const finalBannerSub = bannerSub || locInfo.bannerSub || `TagsBikez is ${location}'s authorised Royal Enfield dealership offering the full 2026 lineup and expert servicing.`;

  const [colA, setColA] = useState(initialColA);
  const [colB, setColB] = useState(initialColB);
  const [allImgs, setAllImgs] = useState(initialAllImgs);

  useEffect(() => {
    if (customColA || customColB || locInfo.colA || locInfo.colB) return;
    async function loadGalleryData() {
      try {
        const data = await fetchGallery();
        if (data && data.length >= 4) {
          const a = [];
          const b = [];
          data.forEach((item, idx) => {
            const imgSrc = item.src || item.image_url;
            if (imgSrc) {
              if (idx % 2 === 0) {
                a.push(imgSrc);
              } else {
                b.push(imgSrc);
              }
            }
          });
          while (a.length > 0 && a.length < 5) {
            a.push(...a);
          }
          while (b.length > 0 && b.length < 5) {
            b.push(...b);
          }
          if (a.length >= 4 && b.length >= 4) {
            setColA(a.slice(0, 6));
            setColB(b.slice(0, 6));
            setAllImgs([...a, ...b]);
          }
        }
      } catch (error) {
        console.warn("AboutSection loadGalleryData failed, using fallback:", error);
      }
    }
    loadGalleryData();
  }, [customColA, customColB]);

  useEffect(() => {
    let ctx;
    const init = async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 1101px)", () => {
          gsap.to(colARef.current, {
            y: -140,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.4,
            },
          });
          gsap.to(colBRef.current, {
            y: 140,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.4,
            },
          });
        });

        mm.add("(max-width: 1100px)", () => {
          const strip = scrollStripRef.current;
          if (!strip) return;

          gsap.to(strip, {
            x: () => -(strip.scrollWidth / 2),
            ease: "none",
            duration: 18,
            repeat: -1,
            modifiers: {
              x: gsap.utils.unitize(x => parseFloat(x) % (strip.scrollWidth / 2)),
            },
          });
        });
      }, sectionRef);
    };

    init();
    return () => { if (ctx) ctx.revert(); };
  }, [colA, colB]);

  return (
    <section ref={sectionRef} className="as-root">
      <style>{`
        .as-root {
          background: #fff;
          width: 100%;
          padding: ${isHomePage ? '80px' : '0px'} 0 0px 0px;
        }

        .as-container {
          max-width: 1450px;
          margin: 0 auto;
          padding: 0 20px;
          box-sizing: border-box;
        }

        /*  FEATURES GRID  */
        .as-features {
          width: 100%;
          margin-bottom: 80px;
          border-top: 1px solid #e0e0e0;
          border-left: 1px solid #e0e0e0;
        }

        .as-feat-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .as-feat-card {
          border-right: 1px solid #e0e0e0;
          border-bottom: 1px solid #e0e0e0;
          display: flex;
          flex-direction: column;
          background: #fff;
          transition: background 0.18s;
        }

        .as-feat-card:hover { background: #fafafa; }

        .as-feat-icon-wrap {
          width: 100%;
          padding: 36px 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          border-bottom: 1px solid #e0e0e0;
        }

        .as-feat-icon-circle {
          width: 56px;
          height: 56px;
          border: 1.5px solid #e8282b;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(232,40,43,0.04);
        }

        .as-feat-info {
          padding: 24px 20px;
          display: flex;
          align-items: center;
          text-align: justify;
          flex-direction: column;
        }

        .as-feat-name {
          font-size: 14px;
          font-weight: 700;
          color: #111;
          margin: 0 0 6px 0;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }

        .as-feat-desc {
          font-size: 12.5px;
          color: #666;
          line-height: 1.6;
          margin: 0;
        }

        /*  BANNER  */
        .as-banner {
          background: #1a1a1a;
          border-radius: 12px;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr 600px;
          height: 500px;
        }

        .as-banner-left {
          padding: 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .as-banner-heading {
          font-size: 42px;
          font-weight: 400;
          text-transform: uppercase;
          color: #fff;
          line-height: 1.1;
          margin-bottom: 20px;
        }

        .as-banner-sub {
          font-size: 15px;
          color: rgba(255,255,255,0.5);
          line-height: 1.7;
          margin-bottom: 32px;
          max-width: 450px;
        }

        .as-info-pills {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .as-pill {
          border: 1px solid rgba(255,255,255,0.1);
          padding: 8px 16px;
          font-size: 12px;
          color: #fff;
        }

        .as-pill-insta {
        display: flex;
        align-items: center;
        gap: 6px;
        text-decoration: none;
        color: #fff;
        transition: border-color 0.18s, background 0.18s;
        }
        
        .as-pill-insta:hover {
          border-color: rgba(220, 39, 67, 0.5);
          background: rgba(220, 39, 67, 0.08);
        }

        /*  DESKTOP image columns  */
        .as-banner-right {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          padding: 10px;
          overflow: hidden;
          background: #111;
        }

        .as-img-col {
          display: flex;
          flex-direction: column;
          gap: 10px;
          will-change: transform;
        }

        .as-img-box {
          height: 280px;
          border-radius: 6px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .as-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /*  MOBILE horizontal scroll strip  */
        .as-mobile-img-section {
          display: none;
          background: #111;
          border-radius: 0 0 12px 12px;
          overflow: hidden;
          padding: 16px 0;
        }

        .as-scroll-viewport {
          overflow: hidden;
          width: 100%;
        }

        .as-scroll-strip {
          display: flex;
          gap: 12px;
          width: max-content;
          will-change: transform;
        }

        .as-scroll-img {
          width: 200px;
          height: 140px;
          border-radius: 8px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .as-scroll-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* fade edges */
        .as-scroll-viewport::before,
        .as-scroll-viewport::after {
          content: "";
          position: absolute;
          top: 0; bottom: 0;
          width: 40px;
          z-index: 2;
          pointer-events: none;
        }
        .as-scroll-viewport { position: relative; }
        .as-scroll-viewport::before { left: 0; background: linear-gradient(to right, #111, transparent); }
        .as-scroll-viewport::after  { right: 0; background: linear-gradient(to left,  #111, transparent); }

        /*  BREAKPOINTS  */
        @media (max-width: 1100px) {
          .as-root { padding-top: 0px; }
          .as-banner {
            grid-template-columns: 1fr;
            height: auto;
            border-radius: 12px 12px 0 0;
          }
          .as-banner-right { display: none; }           
          .as-mobile-img-section { display: block; }   
        }

        @media (max-width: 960px) {
          .as-feat-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 560px) {
          .as-feat-grid { grid-template-columns: 1fr; }
          .as-banner-left { padding: 36px 20px; }
          .as-scroll-img { width: 160px; height: 110px; }
          .as-root{
           padding-bottom:60px;  
          }
        }
      `}</style>

      <div className="as-container">
        {/* Features Grid */}
        <div className="as-features">
          <div className="as-feat-grid">
            {features.map((f, i) => (
              <div className="as-feat-card" key={i}>
                <div className="as-feat-icon-wrap">
                  <div className="as-feat-icon-circle">{f.icon}</div>
                </div>
                <div className="as-feat-info">
                  <p className="as-feat-name">{f.title}</p>
                  <p className="as-feat-desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/*  BANNER  */}
        <div className="as-banner">
          <div className="as-banner-left">
            <h3 className="as-banner-heading">
              {finalBannerHeading}
            </h3>
            <p className="as-banner-sub">
              {finalBannerSub}
            </p>

            <div className="as-info-pills">
              <div className="as-pill">2026 Models</div>
              <div className="as-pill">Genuine Accessories</div>
              <div className="as-pill">Easy EMI</div>
              <a
                href="https://www.instagram.com/royalenfield.reown?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="as-pill as-pill-insta"
                aria-label="Visit tagsrides on Instagram for Pre-Owned Vehicles"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                  <defs>
                    <linearGradient id="ig-grad-pill" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f09433" />
                      <stop offset="25%" stopColor="#e6683c" />
                      <stop offset="50%" stopColor="#dc2743" />
                      <stop offset="75%" stopColor="#cc2366" />
                      <stop offset="100%" stopColor="#bc1888" />
                    </linearGradient>
                  </defs>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#ig-grad-pill)" strokeWidth="1.8" fill="none" />
                  <circle cx="12" cy="12" r="4.5" stroke="url(#ig-grad-pill)" strokeWidth="1.8" fill="none" />
                  <circle cx="17.5" cy="6.5" r="1" fill="url(#ig-grad-pill)" />
                </svg>
                Pre-Owned Vehicles
              </a>
            </div>



          </div>

          {/* Desktop: two parallax columns */}
          <div className="as-banner-right">
            <div className="as-img-col" ref={colARef}>
              {colA.map((src, i) => (
                <div className="as-img-box" key={`a-${i}`}>
                  <img src={src?.src || src}  loading="lazy" />
                </div>
              ))}
            </div>
            <div className="as-img-col" ref={colBRef} style={{ marginTop: "-120px" }}>
              {colB.map((src, i) => (
                <div className="as-img-box" key={`b-${i}`}>
                  <img src={src?.src || src}  loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="as-mobile-img-section">
          <div className="as-scroll-viewport">
            <div className="as-scroll-strip" ref={scrollStripRef}>
              {[...allImgs, ...allImgs].map((src, i) => (
                <div className="as-scroll-img" key={i}>
                  <img src={src?.src || src}  loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}