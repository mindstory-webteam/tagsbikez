"use client";
import Image from "next/image";
import { img } from "@/assets/assest";
import AnimatedBtn from "@/components/AnimatedBtn";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const locationData = {
  Chalakudy: {
    image: img.whatwedochalukady,
    steps: [
      {
        number: "01",
        title: "ROYAL ENFIELD DEALER CHALAKUDY",
        description: "Welcome to the premier Royal Enfield destination in Chalakudy. We bring the legendary heritage of Royal Enfield closer to you, offering a stunning lineup from the Classic 350 to the Himalayan. As an authorized dealer, we guarantee genuine motorcycles, factory warranty, and an unparalleled purchasing experience. Discover the spirit of motorcycling with our dedicated Chalakudy team.",
      },
      {
        number: "02",
        title: "EXPERT SERVICE CENTER",
        description: "Your motorcycle deserves expert care. Our advanced service center in Chalakudy features factory-trained mechanics who know every detail of your Royal Enfield. From periodic maintenance to major repairs, we use only authentic parts and the latest diagnostic tools to keep your ride smooth and reliable on every journey.",
      },
      {
        number: "03",
        title: "TRANSPARENT PRICING",
        description: "We believe in making your dream ride affordable and stress-free. At TagsBikez Chalakudy, you will find transparent pricing without any hidden costs. We provide tailored EMI plans and quick loan approvals through leading finance partners, ensuring a smooth path to ownership.",
      },
      {
        number: "04",
        title: "SEAMLESS DELIVERY",
        description: "Experience the joy of riding with our prompt delivery services in Chalakudy. We handle all documentation, registration, and insurance seamlessly. Every bike goes through rigorous quality checks so that when you receive the keys, your Royal Enfield is absolutely road-ready.",
      },
    ]
  },
  Irinjalakuda: {
    image: img.whatwedoirinjalakuda,
    steps: [
      {
        number: "01",
        title: "YOUR IRINJALAKUDA DEALER",
        description: "Explore the world of pure motorcycling right here in Irinjalakuda. Our showroom features the complete range of Royal Enfield motorcycles, designed for both daily commutes and epic adventures. Let our passionate team guide you in finding the perfect bike that matches your lifestyle.",
      },
      {
        number: "02",
        title: "PREMIUM MAINTENANCE",
        description: "Keep the soul of your Royal Enfield alive with our premium service at Irinjalakuda. Our state-of-the-art facility provides comprehensive maintenance and repair services using genuine components, ensuring maximum performance and longevity for your beloved machine.",
      },
      {
        number: "03",
        title: "EASY FINANCING",
        description: "Bringing home a Royal Enfield in Irinjalakuda is simpler than ever. Enjoy attractive pricing, transparent deals, and flexible financing options tailored to your budget. Our dedicated finance team will assist you every step of the way.",
      },
      {
        number: "04",
        title: "HASSLE-FREE HANDOVER",
        description: "We take the stress out of buying a new motorcycle. From the moment you book to the exciting handover day in Irinjalakuda, we ensure a smooth, transparent, and timely process, complete with a thorough pre-delivery inspection.",
      },
    ]
  },
  Kodakara: {
    image: img.whatwedokodakara,
    steps: [
      {
        number: "01",
        title: "ROYAL ENFIELD KODAKARA",
        description: "TagsBikez Kodakara is your gateway to the Royal Enfield lifestyle. Whether you seek the vintage appeal of the Bullet or the modern flair of the Meteor, our authorized dealership offers a complete selection to fuel your passion for riding.",
      },
      {
        number: "02",
        title: "DEDICATED SERVICE CARE",
        description: "Trust your Royal Enfield with our skilled technicians in Kodakara. We provide dedicated servicing, detailed diagnostics, and genuine spare parts to ensure your motorcycle delivers optimal performance on every ride.",
      },
      {
        number: "03",
        title: "UNBEATABLE OFFERS",
        description: "Take advantage of our exclusive deals and attractive pricing at the Kodakara showroom. With flexible EMI schemes and zero hidden charges, owning a legendary Royal Enfield has never been more accessible.",
      },
      {
        number: "04",
        title: "SWIFT DELIVERY PROCESS",
        description: "Start your motorcycling journey without delay. Our Kodakara team guarantees a swift and organized delivery process, handling all paperwork efficiently so you can hit the road with confidence.",
      },
    ]
  },
  Kunnamkulam: {
    image: img.whatwedokunnamkulam,
    steps: [
      {
        number: "01",
        title: "KUNNAMKULAM'S FINEST DEALER",
        description: "Welcome to TagsBikez Kunnamkulam, where the Royal Enfield legacy thrives. We offer a premium showroom experience with an extensive display of the latest models. Let us help you find the motorcycle that resonates with your spirit of exploration.",
      },
      {
        number: "02",
        title: "AUTHORISED SERVICE",
        description: "Experience top-tier maintenance at our Kunnamkulam service center. Equipped with advanced tools and genuine parts, our certified mechanics ensure that your Royal Enfield maintains its iconic roar and reliability.",
      },
      {
        number: "03",
        title: "SMART FINANCING",
        description: "Make a smart investment with our clear pricing and easy financing solutions in Kunnamkulam. We partner with top financiers to provide you with affordable EMI options and a hassle-free purchasing experience.",
      },
      {
        number: "04",
        title: "PERFECT HANDOVER",
        description: "Celebrate your new ride with our flawless handover experience in Kunnamkulam. We meticulously inspect and prepare every motorcycle, ensuring it meets the highest standards before you take it home.",
      },
    ]
  },
  Kuriachira: {
    image: img.whatwedokuriachira,
    steps: [
      {
        number: "01",
        title: "KURIACHIRA'S FINEST DEALER",
        description: "Welcome to TagsBikez Kuriachira, where the Royal Enfield legacy thrives. We offer a premium showroom experience with an extensive display of the latest models. Let us help you find the motorcycle that resonates with your spirit of exploration.",
      },
      {
        number: "02",
        title: "AUTHORISED SERVICE",
        description: "Experience top-tier maintenance at our Kuriachira service center. Equipped with advanced tools and genuine parts, our certified mechanics ensure that your Royal Enfield maintains its iconic roar and reliability.",
      },
      {
        number: "03",
        title: "SMART FINANCING",
        description: "Make a smart investment with our clear pricing and easy financing solutions in Kuriachira. We partner with top financiers to provide you with affordable EMI options and a hassle-free purchasing experience.",
      },
      {
        number: "04",
        title: "PERFECT HANDOVER",
        description: "Celebrate your new ride with our flawless handover experience in Kuriachira. We meticulously inspect and prepare every motorcycle, ensuring it meets the highest standards before you take it home.",
      },
    ]
  },
  Patturaikkal: {
    image: img.whatwedopatturaikkal,
    steps: [
      {
        number: "01",
        title: "PATTURAIKKAL MOTORCYCLES",
        description: "Discover authentic riding at our Patturaikkal showroom. We bring you the complete Royal Enfield lineup in an environment that celebrates motorcycle culture. Join our community and start your next adventure today.",
      },
      {
        number: "02",
        title: "PRECISION SERVICING",
        description: "At Patturaikkal, we understand your bike's DNA. Our precision servicing guarantees that every tune-up and repair enhances your motorcycle's performance, using only official Royal Enfield components.",
      },
      {
        number: "03",
        title: "VALUE DRIVEN PRICING",
        description: "Enjoy value-driven pricing at TagsBikez Patturaikkal. We offer straightforward costs, excellent financing plans, and seasonal promotions to make your dream bike a reality without breaking the bank.",
      },
      {
        number: "04",
        title: "READY TO RIDE",
        description: "Your journey starts the moment you step into our Patturaikkal dealership. We ensure quick processing and detailed pre-delivery checks, so your new Royal Enfield is perfectly tuned and ready to ride.",
      },
    ]
  },
  Vadakkencherry: {
    image: img.whatwedovadakkencherry,
    steps: [
      {
        number: "01",
        title: "VADAKKENCHERRY SHOWROOM",
        description: "TagsBikez Vadakkencherry is your premier destination for Royal Enfield. Experience the perfect blend of classic design and modern engineering as you explore our wide range of motorcycles suited for every kind of rider.",
      },
      {
        number: "02",
        title: "RELIABLE MAINTENANCE",
        description: "Rely on our Vadakkencherry service experts to keep your motorcycle in prime condition. With state-of-the-art facilities and genuine spares, we deliver maintenance services you can trust for a safe and smooth ride.",
      },
      {
        number: "03",
        title: "FLEXIBLE PURCHASE OPTIONS",
        description: "We offer flexible purchase options at our Vadakkencherry branch, including attractive loan schemes and zero hidden fees. Buying your favorite Royal Enfield is now a straightforward and joyous process.",
      },
      {
        number: "04",
        title: "ON-TIME DELIVERY",
        description: "We value your time and excitement. Our Vadakkencherry team is committed to on-time delivery, managing all documentation and pre-ride inspections so you can start making memories immediately.",
      },
    ]
  },
  Thriprayar: {
    image: img.whatwedothriprayar,
    steps: [
      {
        number: "01",
        title: "THRIPRAYAR SHOWROOM",
        description: "TagsBikez Thriprayar is your premier destination for Royal Enfield. Experience the perfect blend of classic design and modern engineering as you explore our wide range of motorcycles suited for every kind of rider.",
      },
      {
        number: "02",
        title: "RELIABLE MAINTENANCE",
        description: "Rely on our Thriprayar service experts to keep your motorcycle in prime condition. With state-of-the-art facilities and genuine spares, we deliver maintenance services you can trust for a safe and smooth ride.",
      },
      {
        number: "03",
        title: "FLEXIBLE PURCHASE OPTIONS",
        description: "We offer flexible purchase options at our Thriprayar branch, including attractive loan schemes and zero hidden fees. Buying your favorite Royal Enfield is now a straightforward and joyous process.",
      },
      {
        number: "04",
        title: "ON-TIME DELIVERY",
        description: "We value your time and excitement. Our Thriprayar team is committed to on-time delivery, managing all documentation and pre-ride inspections so you can start making memories immediately.",
      },
    ]
  }
};

const getSteps = (location = "Thrissur") => {
  if (locationData[location]) {
    return locationData[location].steps;
  }
  return [
    {
      number: "01",
      title: "ROYAL ENFIELD DEALER",
      description:
        `At Royal Enfield ${location}, we don't just sell motorcycles we deliver legends on two wheels. From the timeless charm of the Classic 350 to the rugged spirit of the Himalayan and the thrilling performance of the Continental GT & Super Meteor range, we bring you the complete world of Royal Enfield under one roof. As an authorized dealership, every motorcycle comes with genuine documentation, factory-backed warranty, certified service support, and the confidence of dealing with a trusted official partner. Whether you're a daily rider, weekend explorer, or passionate touring enthusiast, our team is here to help you find the perfect machine that matches your style and journey. Ride with authenticity. Ride with confidence. Ride the soul of motorcycling with Royal Enfield ${location}.`,
    },
    {
      number: "02",
      title: "HIGH QUALITY SERVICE",
      description:
        `Your Royal Enfield deserves nothing less than expert attention. At our advanced service centre in ${location}, every motorcycle is handled by factory-trained technicians who understand the true DNA of Royal Enfield machines. From quick periodic maintenance and precision diagnostics to complete engine rebuilds and performance care, we ensure every ride leaves our workshop smoother, stronger, and road-ready. Using only genuine Royal Enfield parts, advanced equipment, and manufacturer-approved practices, we maintain the performance, reliability, and character your motorcycle was built for. Because for us, service is not just maintenance it's preserving the soul of your ride.`,
    },
    {
      number: "03",
      title: "ATTRACTIVE PRICING",
      description:
        "Owning a Royal Enfield should feel exciting not complicated. That's why we offer transparent pricing, zero hidden charges, and complete guidance at every step of your purchase journey. From affordable EMI plans and fast loan approvals with leading finance partners to exclusive seasonal offers and dealership benefits, we make it easier than ever to bring home the Royal Enfield you've always dreamed of. Whether you're buying your first motorcycle or upgrading to your next adventure machine, our team ensures a smooth, hassle-free ownership experience built on trust, value, and customer satisfaction. Your dream ride is closer than you think ride home with confidence today.",
    },
    {
      number: "04",
      title: "READY WHEN YOU ARE",
      description:
        `At our authorized Royal Enfield dealership in ${location}, we understand that the excitement of owning your dream motorcycle shouldn't be delayed. That's why we ensure a smooth, fast, and hassle-free delivery experience from booking to handover. From registration and insurance coordination to documentation and final vehicle preparation, our team takes care of every detail with precision and transparency. Every motorcycle undergoes a complete pre-delivery inspection, professional detailing, and quality check to ensure it reaches you in perfect condition fully road-ready from day one. With committed timelines, seamless processing, and customer-first support, we make sure your Royal Enfield journey begins exactly the way it should stress-free, memorable, and right on time.`,
    },
  ];
};

function StepCard({ step, i, onRef, onBorderRef }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      ref={(el) => onRef(i, el)}
      style={{ opacity: 0 }}
    >
      <div
        ref={(el) => onBorderRef(i, el)}
        className="wwd-card-border"
      >
        <div className="wwd-card-header">
          <p className="wwd-step-num">{step.number}</p>
          <p className="step-title">{step.title}</p>
        </div>
        <p className={`step-desc${expanded ? "" : " step-desc-clamp"}`}>
          {step.description}
        </p>
        <button
          className="read-more-btn"
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}

export default function WhatWeDoSection({
  location = "Thrissur",
  heading = "WHAT WE DO",
  image,
  customSteps,
  btnText = "CONTACT",
  btnLink = "https://api.whatsapp.com/send/?phone=917594960023&text=Hi%21+I+have+an+enquiry+regarding+Royal+Enfield.&type=phone_number&app_absent=0"
}) {
  const steps = customSteps || getSteps(location);
  const displayImage = image || (locationData[location] ? locationData[location].image : img.whatwedoimg);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const stepRefs = useRef([]);
  const cardBorderRefs = useRef([]);
  const gridWrapRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const stepEls = stepRefs.current;
    const cardBorderEls = cardBorderRefs.current;
    const gridWrap = gridWrapRef.current;

    const ctx = gsap.context(() => {
      const colorTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          once: true,
        },
      });

      colorTl.to(gridWrap, {
        borderTopColor: "#2a2a2a",
        borderLeftColor: "#2a2a2a",
        duration: 0.8,
        ease: "power2.inOut",
      }, 0);

      colorTl.to(cardBorderEls, {
        backgroundColor: "#1a1a1a",
        borderRightColor: "#2a2a2a",
        borderBottomColor: "#2a2a2a",
        duration: 0.8,
        ease: "power2.inOut",
      }, 0);

      stepEls.forEach((el) => {
        if (!el) return;
        const title = el.querySelector(".step-title");
        const desc = el.querySelector(".step-desc");
        colorTl.to(title, { color: "#ffffff", duration: 0.8, ease: "power2.inOut" }, 0);
        colorTl.to(desc, { color: "rgba(255,255,255,0.85)", duration: 0.8, ease: "power2.inOut" }, 0);
      });

      // ── Fade-in stagger for each card (separate trigger, also once) ──
      stepEls.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            delay: i * 0.1,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);


  return (
    <>
      <style>{`
        .wwd-section {
          background-color: #ffffff;
          padding: 20px 40px 80px 40px;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .wwd-inner {
          max-width: 1450px;
          margin: 0 auto;
          width: 100%;
        }

        .wwd-heading {
          font-size:42px;
          line-height: 1.15;
          max-width: 480px;
          color: #111111;
          font-weight: 400;
          margin: 0 0 56px 0;
        }

        /* Desktop layout: image left, grid right */
        .wwd-body {
          display: flex;
          gap: 56px;
          align-items: flex-start;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .wwd-image-wrap {
          flex: 0 0 400px;
          overflow: hidden;
          position: relative;
          border-radius: 5px;
          height: 425px;
        }

        .wwd-grid-side {
          flex: 1;
          min-width: 280px;
        }

        .wwd-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 1px solid #e0e0e0;
          border-left: 1px solid #e0e0e0;
        }

        .wwd-card-border {
          border-right: 1px solid #e0e0e0;
          border-bottom: 1px solid #e0e0e0;
          padding: 28px 24px;
          box-sizing: border-box;
          height: 100%;
          background-color: #ffffff;
          transition: background 0.3s ease;
        }

        .wwd-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;
        }

        .wwd-step-num {
          font-size: 36px;
          font-weight: 700;
          margin: 0;
          line-height: 1;
          flex-shrink: 0;
          color: #f51b24;
        }

        .step-title {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.05em;
          margin: 0;
          line-height: 1.3;
          text-transform: uppercase;
          color: #111111;
        }

        .step-desc {
          font-size: 13px;
          line-height: 1.7;
          margin: 0;
          color: #555555;
        }

        /* Clamps text to 5 lines */
        .step-desc-clamp {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .read-more-btn {
          background: none;
          border: none;
          padding: 6px 0 0 0;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #f51b24;
          cursor: pointer;
          display: block;
          margin-top: 4px;
          text-transform: uppercase;
          text-decoration: none;
        }

        .read-more-btn:hover {
          opacity: 0.75;
        }

        .wwd-cta {
          margin-top: 44px;
        }

        .wwd-btn {
          background: #f51b24;
          border: none;
          padding: 13px 36px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.5px;
          cursor: pointer;
          color: #fff;
        }

        /*  MEDIUM SCREEN & IPAD PRO  */
        @media (max-width: 1100px) {
          .wwd-section {
            padding: 60px 40px;
            min-height: auto;
            align-items: flex-start;
          }

          .wwd-body {
            flex-direction: column;
            gap: 32px;
          }

          .wwd-image-wrap {
            flex: none;
            width: 100%;
            height: 480px;
            border-radius: 8px;
          }

          .wwd-grid-side {
            width: 100%;
          }

          .wwd-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        /*  MOBILE  */
        @media (max-width: 767px) {
          .wwd-section {
            padding: 20px 20px;
            min-height: unset;
            align-items: flex-start;
          }

          .wwd-heading {
            font-size: 28px;
            margin-bottom: 32px;
          }

          .wwd-body {
            flex-direction: column;
            gap: 0;
          }

          .wwd-image-wrap {
            flex: none;
            width: 100%;
            height: 240px;
            border-radius: 8px;
            margin-bottom: 32px;
          }

          .wwd-grid-side {
            width: 100%;
            min-width: unset;
          }

          .wwd-grid {
            grid-template-columns: 1fr;
          }

          .wwd-card-border {
            padding: 20px 16px;
          }

          .wwd-step-num {
            font-size: 28px;
          }

          .wwd-cta {
            margin-top: 28px;
          }

          .wwd-btn {
            width: 100%;
            text-align: center;
            padding: 14px;
          }
        }
      `}</style>

      <section ref={sectionRef} className="wwd-section">
        <div className="wwd-inner">

          <h2 ref={headingRef} className="wwd-heading">{heading}</h2>

          <div className="wwd-body">

            {/* Image */}
            <div className="wwd-image-wrap">
              <Image
                src={displayImage}
                alt="What we do"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>

            {/* Steps grid */}
            <div className="wwd-grid-side">
              <div ref={gridWrapRef} className="wwd-grid">
                {steps.map((step, i) => (
                  <StepCard
                    key={step.number}
                    step={step}
                    i={i}
                    onRef={(idx, el) => {
                      stepRefs.current[idx] = el;
                    }}
                    onBorderRef={(idx, el) => {
                      cardBorderRefs.current[idx] = el;
                    }}
                  />
                ))}
              </div>

              <div className="wwd-cta">
                <AnimatedBtn bgColor="red" href={btnLink}>{btnText}</AnimatedBtn>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}